import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Create equivalents for __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __IS_DEBUG__ = process.env.IS_DEBUG ?? false;
// const __dirname = path.dirname(__filename);

const URL_AWESOME_DEVLOG = 'http://localhost:3000/awesome-devlog/korean/people/feeds';  // Note the proxy URL

var currentYYYYMMDD = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

async function doFetch(url, outputFName, parsingHtmlContent) {
  console.log(`START doFetch ... url: ${url}`)
  try {
    const response = await axios.get(url);
    const html = response.data;
    
    const $ = cheerio.load(html);
    const content = await parsingHtmlContent($);

    const filePath = path.join(path.resolve(), 'src', outputFName);
    fs.writeFileSync(filePath, content, 'utf8');

    console.log(`Markdown content saved to src/${outputFName}`);
  } catch (error) {
    console.error(`Error fetching the URL: ${error}`);
  }
}

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

// Conditional check for script execution
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1] === path.resolve(__filename)) {
  console.log('Script is being run directly.');  // Debugging log
  fetchAwesomeDevlog();
  fetchGeek();
  fetchDevoGithubItems();
} else {
  console.log('Script is being imported as a module.');  // Debugging log
}
