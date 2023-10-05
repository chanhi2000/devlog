// src/.vuepress/api/GeekNewsApi
const PUBLIC_GITHUB_BASEPATH = '/json/github'

const URL_GEEKNEWS_RSS = 'https://feeds.feedburner.com/geeknews-feed.xml'

function fetchGeekNews() {
  return fetch(URL_GEEKNEWS_RSS)
    .then((res) => res.text())
    .then((txt) => new window.DOMParser().parseFromString(txt, "text/xml"))
    .then((xml) => xml.querySelectorAll("entry"))
    .then((items) => items ?? [])
    .catch((e) => {console.error(`failed to fetch data`, e);return [];})
}

const GeekNewsApi = {
  fetchGeekNews
}
export default GeekNewsApi
