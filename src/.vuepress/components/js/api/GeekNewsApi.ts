// src/.vuepress/js/api/GeekNewsApi
import Setup from "./Setup"
const axios = Setup.axios
const IS_DEBUG = Setup.IS_DEBUG
/* 
import express from 'express'
import bodyParser from 'body-parser'
// import cors from 'cors'
const app = express()
const port = 3000

app.use(bodyParser.json())
// app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `http://localhost:${port}`); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/v1/geeknews', (req, res) => {
  res.send('fetch geeknews')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/
const PUBLIC_GITHUB_BASEPATH = '/json/github'

const URL_CORS_BYPASS = Setup.URL_CORS_BYPASS
const URL_PINTEREST_RSS = `${URL_CORS_BYPASS}https://www.pinterest.at/hofergrafik1936/hofergrafik-portfolio.rss`
const URL_GEEKNEWS_RSS = `${URL_CORS_BYPASS}https://news.hada.io/rss/news`

function fetchGeekNews() {
  if (IS_DEBUG) console.log('fetchGeekNews... ')
  /*
  const data = null;
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === this.DONE) {
		  console.log(this.responseText);
	  }
  });
  xhr.open("GET", URL_GEEKNEWS_RSS);
  xhr.setRequestHeader(":authority", "feeds.feedburner.com")
  xhr.setRequestHeader(":method", "GET")
  xhr.setRequestHeader(":path", "/geeknews-feed")
  
  xhr.send(data);
  */
  
  const config = {
    headers: {
      // "Accept": "application/xml",
      // "Access-Control-Allow-Origin": "http://localhost:8080",
      
    }
  }
  
  return axios.get(URL_PINTEREST_RSS, config)
    .then((res) => res.data)
    .then((txt) => new window.DOMParser().parseFromString(txt, "text/xml"))
    .then((xml) => xml.querySelectorAll("item"))
    .then((items) => {
      console.log(`items.length: ${items.length}`)
      return items ?? []
    })
    .catch((e) => {console.error(`failed to fetch data`, e);return [];})
    
}

const GeekNewsApi = {
  fetchGeekNews
}
export default GeekNewsApi
