// src/.vuepress/js/api/DataTauApi
import Setup from "./Setup"
import * as cheerio from 'cheerio'

const axios = Setup.axios
const IS_DEBUG = Setup.IS_DEBUG

const URL_DATATAU = `https://datatau.net`
const URL_CORS_BYPASS = Setup.URL_CORS_BYPASS
const URL_DATATAU_RSS = `${URL_CORS_BYPASS}https://datatau.net`

type DataTauNewsResponse = {
  age: string,
  link: string | undefined,
  score: string,
  siteString: string,
  threadLink: string | undefined,
  title: string,
  user: {
    name: string,
    link: string
  }
}

function fetchDataTau(): Promise<Array<DataTauNewsResponse>> {
  if (IS_DEBUG) console.log(`fetchDataTau ...`)
  
  return axios.get(URL_DATATAU_RSS)
    .then((pageHTML) => {
      if (IS_DEBUG) console.log(`fetchDataTau ... pageHtml.data: ${pageHTML.data}`)
      return cheerio.load(pageHTML.data)
    })
    .then((htmlData) => {
      const $ = htmlData;
      const tr = $('table.itemlist tbody > tr')
      if (IS_DEBUG) console.log(`fetchDataTau ... result: ${tr}`)
      const newsItems: Array<DataTauNewsResponse> = []
      for (let i=0; i<tr.length; i++) {
        let dTitle = $(tr[i]).find('td.title a.storylink')[0]
        let title = $(dTitle).text()
        let link = $(dTitle).attr('href')
        let dUser = $(tr[i]).find('td.subtext a.hnuser')[0]
        let user = $(dUser).text()
        let userLink = $(dUser).attr('href')
        let dAge = $(tr[i]).find('td.subtext a.age')[0]
        let age = $(dAge).text()
        let dScore = $(tr[i]).find('td.subtext span.score')[0]
        let score = $(dScore).text().replace("\n        ", "")
        let dSiteString = $(tr[i]).find('td.title span.sitestr')[0]
        let siteString = $(dSiteString).text()
        let dThreadLink = $(tr[i]).find('td.subtext a')[2]
        let threadLink = $(dThreadLink).attr('href')
        let item = {
          'age': age,
          'link': link,
          'score': score,
          'siteString': siteString,
          'threadLink': threadLink,
          'title': title,
          'user': {
            'name': user,
            'link': `${URL_DATATAU}${userLink}`
          }
        }
        console.log(JSON.stringify(item))
        newsItems.push(item)
      }
      return newsItems
    })
    .catch((e) => { console.error(`failed to fetch data`, e);return []} )
    /*
    .then((xml) => xml.querySelectorAll("item"))
    .then((items) => {
      console.log(`items.length: ${items.length}`)
      return Array.from(items).map((e) => {
        if (IS_DEBUG) console.log(`e: ${e}`)
        return {
          title: e.querySelector('title')?.textContent ?? '',
          link: e.querySelector('link')?.textContent ?? '',
          description: e.querySelector('description')?.textContent ?? '',
          guid: e.querySelector('guid')?.textContent ?? '',
        }
      }) ?? []
    })
    */
    .catch((e) => {console.error(`failed to fetch data`, e);return [];})
}

const DataTauApi = {
  fetchDataTau
}

export default DataTauApi