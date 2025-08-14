import { convertDateFormat, doFetch, parseOgData, createFrontMatter, createEndMatter, getFileAbsPath, __IS_DEBUG__ } from './util.mjs';
import TurndownService from 'turndown';
import path from 'path';

//region: freecodecamp.org
const URL_FREE_CODE_CAMP = 'https://freecodecamp.org/news';
async function fetchFreeCodeCampNewsArticle(articlePath) {
  console.log(`START fetchFreeCodeCampNewsArticle ... articlePath: ${articlePath}`);
  const _articlePath = `${articlePath}`.toLowerCase()
  doFetch(`${URL_FREE_CODE_CAMP}/${_articlePath}`, `${_articlePath}.md`, ($) => {
    try {
      const articleContent = $('.post-content').html()

      // Convert HTML to Markdown
      const turndownService = new TurndownService()
      let mdContent = turndownService.turndown(articleContent)
      
      // Extract Open Graph metadata
      const ogData = parseOgData($);
      
      // Extract the article's front/end matter
      const meta = {
        title: $('h1.post-full-title').text().trim(),
        description: `${ogData['og:description']}`,
        topic: $('.post-full-meta>a').text().trim().toLowerCase().replace(/\#/g, ''),
        author: $('.author-card-name>a').text().trim().split("\n")[0],
        datePublished: convertDateFormat($('.post-full-meta-date').attr('datetime')),
        baseUrl: URL_FREE_CODE_CAMP,
        articleBasePath: 'freecodecamp.org',
        articlePath: _articlePath,
        logo: 'https://cdn.freecodecamp.org/universal/favicons/favicon.ico',
        bgRGBA: '10,10,35',
        coverUrl: `${ogData['og:image']}`
      }
      const frontmatter = createFrontMatter(meta)
      const endMatter = createEndMatter(meta)
      mdContent = `${frontmatter}${mdContent.replace(/https:\/\/www.youtube.com\/watch\?v=/g, 'https://youtu.be/')
        .replace(/\[freeCodeCamp.org\]/g, '[<VPIcon icon="fa-brands fa-free-code-camp"/>freeCodeCamp.org]')
        .replace(/\(https:\/\/www\./g, '(https://')
        .replace(/\*   /g, '- ')}${endMatter}`
      return mdContent
    } catch (err) {
      console.error(`Error fetching the URL: ${URL_FREE_CODE_CAMP} ... ${err}`);
    }
  })
}
//endregion: freecodecamp.org


//region:
const URL_MILAN_JOVANOVIC = 'https://milanjovanovic.tech/blog'
async function fetchMilanJovanovicArticle(articlePath) {
  console.log(`START fetchMilanJovanovicArticle ... articlePath: ${articlePath}`);
  const _articlePath = `${articlePath}`.toLowerCase()
  doFetch(`${URL_MILAN_JOVANOVIC}/${_articlePath}`, `${_articlePath}.md`, ($) => {
    try {
      const articleContent = $('article.prose').html()
      // Convert HTML to Markdown
      const turndownService = new TurndownService()
      let mdContent = turndownService.turndown(articleContent)
      
      // Extract Open Graph metadata
      const ogData = parseOgData($);
      
      // Extract the article's front/end matter
      const meta = {
        title: $('h1').text().trim(),
        description: `${ogData['og:description']}`,
        topic: 'cs',
        author: 'Milan Jovanović',
        datePublished: convertDateFormat($('time.uppercase').attr('datetime')),
        baseUrl: URL_MILAN_JOVANOVIC,
        articleBasePath: 'milanjovanovic.tech',
        articlePath: _articlePath,
        logo: 'https://milanjovanovic.tech/profile_favicon.png',
        bgRGBA: '79,70,229',
        coverUrl: `${ogData['og:image'].replace(/\https:\/\/www\./g, 'https://')}`
      }
      const frontmatter = createFrontMatter(meta)
      const endMatter = createEndMatter(meta)
      mdContent = `${frontmatter}${mdContent.replace(/\(https:\/\/www\./g, 'https://')
        .replace(/https:\/\/www.youtube.com\/watch\?v=/g, 'https://youtu.be/')
        .replace(/\*   /g, '- ')
        .replace(/\]\(\/blogs\/mnw/g, `](https://milanjovanovic.tech/blogs/mnw`)}${endMatter}`
      return mdContent
    } catch (err) {
      console.error(`Error fetching the URL: ${URL_FREE_CODE_CAMP} ... ${err}`);
    }
  }, '.mb-16.mt-10' /* tag selector to remove */)
}
//endregion: 

const args = process.argv.slice(2);
const argArticleUrl = args[0]
console.log(`args[0]: ${args[0]}`)
// console.log(`args[1]: ${args[1]}`)


if (import.meta.url === `file://${process.argv[1]}` || process.argv[1] === path.resolve(getFileAbsPath(import.meta.url))) {
  console.log('Script is being run directly.');
  let articlePath = ''
  const isFreeCodeCamp = /freecodecamp\.org/.test(argArticleUrl)
  console.log(`isFreeCodeCamp: ${isFreeCodeCamp}`)
  if (isFreeCodeCamp) {
    console.log('IT IS FREECODECAMP article!');
    articlePath = argArticleUrl.replace(/\https:\/\/www\./g, 'https://')
      .replace(/https:\/\/freecodecamp\.org\/news\//g, '')
      .replace(/\//g, '')
    console.log(`articlePath: ${articlePath}`);
    fetchFreeCodeCampNewsArticle(articlePath)
    console.log(`END fetchFreeCodeCampNewsArticle ... articlePath: ${articlePath}`);
  }

  const isMilanJovanovic = /milanjovanovic\.tech/.test(argArticleUrl)
  if (isMilanJovanovic) {
    console.log('IT IS MilanJovanovic article!');
    articlePath = argArticleUrl.replace(/\https:\/\/www\./g, 'https://')
      .replace(/https:\/\/milanjovanovic\.tech\/blog\//g, '')
      .replace(/\//g, '')
    fetchMilanJovanovicArticle(articlePath)
    console.log(`END fetchMilanJovanovicArticle ... articlePath: ${articlePath}`);
  }
} else {
  console.log('Script is being imported as a module.');  // Debugging log
}