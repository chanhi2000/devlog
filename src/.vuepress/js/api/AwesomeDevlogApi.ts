// src/.vuepress/js/api/DataTauApi
import * as cheerio from 'cheerio'
import axios from 'axios'
import fs from 'fs'
import path from 'path'

const url = 'https://awesome-devblog.netlify.app/korean/people/feeds'

async function fetch() {
  try {
    const res = await axios.get(url);
    const html = res.data;
    const $ = cheerio.load(html);
    const items: Array<String> = [];

    $('a').each((i, e) => {
      const title = $(e).text().trim();
      const link = $(e).attr('href');
      items.push(`- [${title}](${link})`)
    });

    const mdContent = items.join('\n');
    console.log(mdContent)
    /* 
    const fp = path.join(path.resolve(), 'docs', 'scraped-content.md');
    fs.writeFileSync(fp, mdContent, 'utf8');

    console.log('Markdown content saved to docs/scraped-content.md');)
    */

    return mdContent
  } catch (error) {
    console.error(`Error fetching the URL: ${error}`);
    return null;
  }
}

// Optionally, you can still define a default action if you run the script directly
/* 
if (import.meta.url === `file://${process.argv[1]}`) {
  fetch().then(content => {
    if (content) {
      console.log('Content fetched and printed to console.');
    }
  });
}
*/
const api = {
  fetch,
}

export default api