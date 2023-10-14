// src/.vuepress/js/api/DataTauApi
import Setup from "./Setup"
const axios = Setup.axios
const IS_DEBUG = Setup.IS_DEBUG

const URL_CORS_BYPASS = Setup.URL_CORS_BYPASS
const URL_DATATAU_RSS = `${URL_CORS_BYPASS}https://datatau.net/feed`

function fetchDataTau() {
  if (IS_DEBUG) console.log(`fetchDataTau ...`)
  return axios.get(URL_DATATAU_RSS)
    .then((res) => res.data)
    .then((txt) => new window.DOMParser().parseFromString(txt, "text/xml"))
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
    .catch((e) => {console.error(`failed to fetch data`, e);return [];})
}

const DataTauApi = {
  fetchDataTau
}

export default DataTauApi