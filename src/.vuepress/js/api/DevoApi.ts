// src/.vuepress/api/DevoApi
import axios from 'axios'

// if (import.meta.env.NODE_ENV != 'production')

const BASEURL_DEV = 'http://localhost:8080'
const BASEURL_PRD = 'https://chanhi2000.github.io'
const IS_DEBUG = !(process.env.NODE_ENV === 'production')
const BASEURL = !IS_DEBUG ? BASEURL_PRD : BASEURL_DEV
axios.defaults.baseURL = BASEURL

const REGEX_GITHUB_BASEURL = /https:\/\/github.com\//g

const BASEURL_GITHUB = 'https://github.com'
const BASEURL_GITHUB_OFFICIAL_API = 'https://api.github.com/repos'
const BASEURL_YCOMBINATOR = 'https://news.ycombinator.com'

const URL_DEVO_BASE = 'https://devo-platforms.burakkarakan.com'
const URL_JSON_DEVO_GITHUB = `${URL_DEVO_BASE}/github.json`
const URL_JSON_DEVO_HACKERNEWS = `${URL_DEVO_BASE}/hackernews.json`

const PUBLIC_GITHUB_BASEPATH = `${BASEURL}/json/github`
const URL_JSON_GITHUB_COLOR = `${BASEURL}/json/github-color.json`

const jsonFullPathsLang = [
  "android", "awk", "batchfile", "blade", "c", "clojure", "common-lisp", "cpp", "crystal", "csharp", "dart", "dockerfile", "elixir", "elm", "gdscript", "go", "haskell", "hcl", "java", "js", "julia", "jupyter-notebook", "kotlin", "lua", "ocaml", "prolog", "php", "pwsh", "python", "ruby", "rust", "scala", "sh", "solidity", "swift", "tex", "ts", "v", "verilog", "vim-script", "zig"
].map((e: string) => `${PUBLIC_GITHUB_BASEPATH}/lang-${e}.json`);

const jsonFullPathsLangTut = [
  "c", "csharp", "dart", "dockerfile", "go", "java", "android", "js", "jupyter-notebook", "kotlin", "lua", "php", "pwsh", "python", "ruby", "rust", "sh", "swift", "ts"
].map((e: string) => `${PUBLIC_GITHUB_BASEPATH}/lang-${e}-tut.json`);

const jsonFullPathsOther = [
  "awesome-list", "tutorial-basic", "tutorial-devops", "career-info", "portfolio", "free-books", "free-images"
].map((e: string) => `${PUBLIC_GITHUB_BASEPATH}/${e}.json`)

type GithubRepoBookmarkInfo = {
  repo: string,
  desc: string,
  officialSite: string
}

type DevoGithubResponse = {
  forks: {
    count: number, 
    link: string
  },
  language: {
    is: string, 
    color: string
  }
  repo: {
    rawName: string, 
    owner: string, 
    name: string, 
    link: string, 
    description: string
  }
  stars: {
    count: number, 
    link: string
  }
  todayStars: number
}

type DevoHackernewsResponse = {
  age: string,
  commentCount: string,
  link: string,
  score: string,
  siteString: string,
  threadLink: string,
  title: string,
  user: {
    name: string,
    link: string
  }
}

type GithubDetailResponse = {

}

type GithubColor = {
  color: string,
  url: string
}

let reposToExclude: Array<GithubRepoBookmarkInfo> = [];
for (const path of [...jsonFullPathsLang, ...jsonFullPathsLangTut, ...jsonFullPathsOther]) {
  axios.get(path)
    .then((res) => res.data ?? [])
    .then((items) => { reposToExclude.push(...items) });
}

const repoNamesToExclude = () => reposToExclude.map((e: GithubRepoBookmarkInfo) => `/${e?.repo}`);
const repoDescsToExclude = () => reposToExclude.map((e: GithubRepoBookmarkInfo) => e?.desc);

const filterPredicate = (e: DevoGithubResponse) => {
  return (
    e != null && e != undefined &&
    e?.repo?.link != null && e?.repo?.link != undefined &&
    e?.repo?.description != null && e?.repo?.description != undefined
  ) && (
    !repoNamesToExclude().includes(e.repo.link) || 
    !repoDescsToExclude().includes(e.repo.description)
  )
}

const filterHackernewsPredicate = (e) => {
  return (
    e != null && e != undefined &&
    e?.repo?.link != null && e?.repo?.link != undefined &&
    e?.repo?.description != null && e?.repo?.description != undefined
  ) && (
    !repoNamesToExclude().includes(`/${e?.repo?.link}`.replace(REGEX_GITHUB_BASEURL, '')) || 
    !repoDescsToExclude().includes(e?.repo?.description)
  )
}

function fetchGitubColors(): Promise<Map<String, GithubColor>> {
  if (IS_DEBUG) console.log(`fetchGitubColors ...`)
  // console.log(`fetchGitubColors ...`)
  return axios.get(URL_JSON_GITHUB_COLOR)
    .then((res) => res.data.json)
    .then((data) => data ?? {})
    .catch((e) => console.error(`failed to fetch data`, e))
}

function fetchGithubRepos(shouldFilter = false): Promise<Array<DevoGithubResponse>> {
  if (IS_DEBUG) console.log(`fetchGithubRepos ... shouldFilter:${shouldFilter}`)
  // console.log(`fetchGithubRepos ... shouldFilter:${shouldFilter}`)
  return axios.get(URL_JSON_DEVO_GITHUB)
      .then((res) => res.data ?? [])
      .then((items) => { 
        return (shouldFilter) ? items.filter(filterPredicate) : items 
      })
      .catch((e) => { 
        console.error(`failed to fetch data`, e);
        return []
      })
}

function fetchHackernews(shouldFilter = false): Promise<Array<DevoHackernewsResponse>> {
  if (IS_DEBUG) console.log(`fetchHackernews ... shouldFilter:${shouldFilter}`)
  // console.log(`fetchHackernews ... shouldFilter:${shouldFilter}`)
  return axios.get(URL_JSON_DEVO_HACKERNEWS)
    .then((res) => res.data ?? [])
    .then((items) => (shouldFilter) ? items.filter(filterHackernewsPredicate) : items)
    .catch((e) => { console.error(`failed to fetch data`, e);return []} )
}

function fetchGithubDetail(fullName = ''): Promise<GithubDetailResponse> | undefined {
  if (IS_DEBUG) console.log(`fetch ... fullName: ${fullName}`)
  // console.log(`fetch ... fullName: ${fullName}`)
  const _fullName = fullName?.replace(/\s/g, '') ?? ''
  if (_fullName == '') {
    console.warn('no fullName FOUND!')
    return undefined
  }

  if (_fullName.split('/').length != 2) {
    console.warn(`invalid fullName ... ${_fullName}`)
    return undefined
  }
  
  console.log('fetch ...');
  return axios.get(`${BASEURL_GITHUB_OFFICIAL_API}/${_fullName}`)
    .then((res) => res.data.json ?? {})
    .then((itemDetail) => itemDetail)
    .catch((e) => {console.warn('Error:', e);return {}});
}

const DevoApi = {
  BASEURL_GITHUB,
  BASEURL_YCOMBINATOR,
  REGEX_GITHUB_BASEURL,
  reposToExclude,
  filterPredicate,
  filterHackernewsPredicate,
  fetchGitubColors,
  fetchGithubRepos,
  fetchHackernews,
  fetchGithubDetail
}
export default DevoApi