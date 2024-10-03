import { currentYYYYMMDD, doFetch, __IS_DEBUG__, getFileAbsPath } from './util.mjs';
import fs from 'fs';
import path from 'path';

const URL_AWESOME_DEVLOG = 'http://localhost:3000/awesome-devlog/korean/people/feeds';  // Note the proxy URL

//region: AwesomeBlog
export async function fetchAwesomeDevlog() {
  console.log('START fetchAwesomeDevlog')
  doFetch(URL_AWESOME_DEVLOG, `awesome-devblog-${currentYYYYMMDD()}.md`, ($) => {
    const items = [];
    $('h3 > a').each((i, element) => {
      const link = $(element).attr('href')
        .replace(/https:\/\/www\./g, 'https://')
        .replace(/\?fromRss=true&trackingCode=rss/g, '')
        .replace(/tistory\.com/g, 'tistory.com/m')
        .replace(/blog\.naver\.com/g, 'm.blog.naver.com');
      let title = $(element).text().trim()
        .replace(/\[/g, '\\[').replace(/\]/g, '\\]')
        .replace(/&middot;/g, '·').replace(/&amp;/g, '&').replace(/&quot;/g, '\'')
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&hellip;/g, '…')
        .replace(/&lsquo;/g, '\'').replace(/&rsquo;/g, '\'');
      const isVelog = link.match(/velog.io/g);
      const velogId = (isVelog) ? link.match(/(?<=velog.io\/)(.*?)(?=\/)/g) : '';
      const isBrunch = link.match(/brunch.co.kr/g);
      const brunchId = (isBrunch) ? link.match(/(?<=brunch.co.kr\/@)(.*?)(?=\/)/g) : ''
      const isUntil = link.match(/until.blog/g)
      const untilId = (isUntil) ? link.match(/(?<=until.blog\/)(.*?)(?=\/)/g) : ''
      if (isVelog) { 
        const idToAppend = ''.concat('\`').concat(velogId).concat('\`');
        title = `${idToAppend} / ${title}`
      }
      if (isBrunch) {
        const idToAppend = ''.concat('\`').concat(brunchId).concat('\`');
        title = `${idToAppend} / ${title}`
      }
      if (isUntil) {
        const idToAppend = ''.concat('\`').concat(untilId).concat('\`');
        title = `${idToAppend} / ${title}`
      }
      items.push(`- [${title}](${link})`);
    });

    console.log(items)
    let mdContent = items.join('\n');
    mdContent = `<!-- https://awesome-devblog.netlify.app/korean/people/feeds -->

${mdContent}

<!-- END: https://awesome-devblog.netlify.app/korean/people/feeds -->`
    return mdContent
  })
}
//endregion: AwesomeBlog


//region: GeekNews
const URL_GEEK = "http://localhost:3000/geek"
export async function fetchGeek() {
  console.log('START fetchAwesomeDevlog')
  doFetch(URL_GEEK, `geek-${currentYYYYMMDD()}.md`, ($) => {
    const items = [];
    
    $('.topictitle > a').each((i, element) => {
      const link = $(element).attr('href')
        .replace(/https:\/\/www\./g, 'https://')
        .replace(/\?fromRss=true&trackingCode=rss/g, '')
        .replace(/tistory\.com/g, 'tistory.com/m')
        .replace(/blog\.naver\.com/g, 'm.blog.naver.com');
      let title = $(element).text().trim()
        .replace(/\[/g, '\\[').replace(/\]/g, '\\]')
        .replace(/&middot;/g, '·').replace(/&amp;/g, '&').replace(/&quot;/g, '\'')
      items.push(`- [${title}](${link})`);
    });

    let mdContent = items.join('\n');
    mdContent = `<!-- https://news.hada.io/ -->

${mdContent}

<!-- END: https://news.hada.io/ -->`
    return mdContent
  })
}
//endregion: GeekNews

//region: Devo
const URL_DEVO = 'http://localhost:3000/devo/github.json'
import DevoApi from 'devo-api'

export async function fetchDevoGithubItems() {
  console.log('START fetchDevoGithubItems')
  try {
    const fetchedItems = await DevoApi.fetchGithubRepos(true);
    const fetchedItemsHackerNews = await DevoApi.fetchHackernews();
    const fetchedItemsGithub = fetchedItemsHackerNews
        .filter((e) => e.link.includes(`${DevoApi.BASEURL_GITHUB}/`))
    const fetchedGithubColor = await DevoApi.fetchGitubColors();
    // console.log(`fetchedItems ... ${JSON.stringify(fetchedItems)}`)
    for (const [i, e] of fetchedItemsGithub.entries()) {
      const fullName = e.link.replace(DevoApi.REGEX_GITHUB_BASEURL, '')
      const jsonRes = await DevoApi.fetchGithubDetail(fullName);
      if (jsonRes == undefined || jsonRes == null) continue;
      if (__IS_DEBUG__) console.log(JSON.stringify(jsonRes))
      const _hasLanguage = (jsonRes.language != null || jsonRes.language == '');
      const _langColor = fetchedGithubColor[jsonRes.language]?.color ?? '000000';
      let l = (_hasLanguage)  
        ? {
          color: `background-color: ${_langColor}`,
          is: `${jsonRes.language}`
        } : {}
      fetchedItemsGithub[i] = jsonRes
      /*
      fetchedItemsGithub[i] = {
         forks: {
           count: jsonRes.fork,
           link: `${jsonRes.html_url}/fork`
         },
         hasLanguage: _hasLanguage,
         language: l,
         repo: {
           description: jsonRes.description,
           link: jsonRes.html_url,
           name: jsonRes.name,
           owner: jsonRes.owner?.login ?? '',  
         },
         repoFullName: jsonRes.full_name,
         stars: {
           count: jsonRes.stargazers_count,
           link: jsonRes.stargazers_url,
         },
         todayStars: jsonRes.todayStars
      }
      */
    }
    const _fetchedItemsGithub = fetchedItemsGithub.filter(DevoApi.filterHackernewsPredicate) ?? []

    const items = fetchedItemsGithub.map(e => {
      return renderJson(e)
    });
    let jsonContent = items.reduce((acc, e, i) => {
      return acc + ', ' + JSON.stringify(e, null, 2)
        .replace(/,\n\s\s\s\s/g, ', ')
        .replace(/\[\n    \"/g, '[\"')
        .replace(/\n  \]/g, ']') + '\n\n';
    }, '');
    // console.log(jsonContent);
    jsonContent = `// devo
${jsonContent}
// END devo
`
    const jsonFName = `devo-${currentYYYYMMDD()}.json`
    const filePath = path.join(path.resolve(), 'src', jsonFName);
    fs.writeFileSync(filePath, jsonContent, 'utf8');
    console.log(`JSON content saved to src/${jsonFName}`);
  } catch (error) {
    console.error(`Error fetching the URL: ${error}`);
  }
}

function renderJson(data = {}) { 
  return {
    repo: data?.full_name ?? '',
    desc: data?.description ?? '',
    officialSite: data?.homepage ?? '',
    topics: data?.topics ?? [],
    avatar: data?.owner?.avatar_url ?? '',
    banner: '',
  }
}
//endregion: Devo


//region: 컴퓨터 vs 책
const URL_JHROGUE = 'http://localhost:3000/jhrogue'
export async function fetchJhrogue() {
  console.log('START fetchJhrogue');
  doFetch(URL_JHROGUE, `jhrogue-${currentYYYYMMDD()}.md`, ($) => {
    const items = [];
    try {
      const selLatestArticle = '.blog-posts.hfeed .date-outer:first-child'
      const latestArticle = $(selLatestArticle)
      // console.log(`latestArticle: ${latestArticle.html()}`)

      const selDate = `${selLatestArticle} .date-header>span`
      const date = $(selDate).text()

      const selContent = `${selLatestArticle} .date-posts .post-outer .post-body.entry-content ol`
      const content = $(selContent)
      // console.log(`content: ${content.html()}`)

      const selOl = `${selContent} > li`
      $(selOl).each((i, e) => {
        const _html = $(e).html()
        // console.log(`html: ${_html}`)
        
        const _title = $(e).text().split('\n')[0]
        // console.log(`title: ${_title}`)

        const _items = []
        const _itemss = $(e).find('ul>li>a');
        _itemss.each((i, o) => {
          const link = $(o).attr('href').replace(/https:\/\/www./g, 'https://')
          const isGithub = link.match(/https:\/\/github.com/g);
          
          var t = $(o).text()
          const isMedium = link.match(/medium.com/g);
          const mediumId = (isMedium) ? link.match(/(?<=medium.com\/)(.*?)(?=\/)/g) : '';
          
          if (isMedium) { 
            const idToAppend = ''.concat('\`').concat(mediumId).concat('\`');
            t = `${idToAppend} / ${t}`
          }
          if (isGithub) {
            // TODO: github에 대한 처리
          }
          _items.push(`- [${t}](${link})` )
          // console.log(`_item: ${text}`)
        })
        // console.log(`items: ${_items}`)
        
        items.push({
          title: _title,
          contents: _items ?? []
        })
      })

      // const categories = $(selOl).map(() => {
      //   const _html = $(this).html()
      //   console.log(`title: ${_html}`)
      //   const _title = $(this).text()
      //   console.log(`title: ${_title}`)
        
      //   const _items = $(this).find('ul>li').map(() => {
      //     const link = $(this).attr('href').replace(/https:\/\/www./g, 'https://')
      //     return `- [${$(this).text()}](${link})`
      //   })
      //   console.log(`items: ${_items}`)

      //   return {
      //     title: _title,
      //     items: _items ?? [],
      //   }
      // })

      let mdContent = items.reduce((acc, e, i) => {
        const ll = e.contents.join('\n')
        return acc + `\n${i+1}: ${e.title}\n\n${ll}\n`
      }, '');
    mdContent = `<!-- https://jhrogue.blogspot.com/ (${date})-->\n${mdContent}\n<!-- END: https://jhrogue.blogspot.com/ -->`

      return mdContent
    } catch (err) {
      console.error(`Error fetching the URL: ${URL_JHROGUE} ... ${err}`);
    }
  })
}
//endregion: 컴퓨터 vs 책


console.log('hello world.');
console.log(`process.argv[1]: ${process.argv[1]}`)
console.log(`import.meta.url: ${import.meta.url}`)
console.log(`path.resolve(__FILENAME__): ${path.resolve(getFileAbsPath(import.meta.url))}`)
// Conditional check for script execution
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1] === path.resolve(getFileAbsPath(import.meta.url))) {
  console.log('Script is being run directly.');  // Debugging log
  fetchAwesomeDevlog();
  fetchGeek();
  fetchDevoGithubItems();
  fetchJhrogue();
} else {
  console.log('Script is being imported as a module.');  // Debugging log
}
