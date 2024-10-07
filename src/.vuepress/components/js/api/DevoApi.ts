// src/.vuepress/js/api/DevoApi
import Setup from './Setup'

const axios = Setup.axios
const IS_DEBUG = Setup.IS_DEBUG

const REGEX_GITHUB_BASEURL = /https:\/\/github.com\//g

const BASEURL_GITHUB = 'https://github.com'
const BASEURL_GITHUB_OFFICIAL_API = 'https://api.github.com'
const BASEURL_YCOMBINATOR = 'https://news.ycombinator.com'

const URL_DEVO_BASE = 'https://devo-platforms.burakkarakan.com'
const URL_JSON_DEVO_GITHUB = `${URL_DEVO_BASE}/github.json`
const URL_JSON_DEVO_HACKERNEWS = `${URL_DEVO_BASE}/hackernews.json`

const PUBLIC_GITHUB_BASEPATH = `${Setup.BASEURL}/json/github`
const URL_JSON_GITHUB_COLOR = `${Setup.BASEURL}/json/github-color.json`

const jsonFullPathsLang = [
  "android", "apl", "assembly", "awk", "basic", "batchfile", "blade", "c", "clojure", /*"cobol",*/ "common-lisp", "cpp", "crystal", "cs", "dart", "dockerfile", "elixir", "elm", "fortran", "gdscript", "go", "haskell", "hcl", "haxe", "java", "js", "js-react", "js-svelte", "js-vue", "julia", "jupyter-notebook", "kotlin", "lua", "mdx", "nextflow", "objc", "ocaml", "prolog", "php", "pwsh", "py", "qml", "r", "ruby", "rust", "scala", "scss",  "sh", "solidity", "sql", "swift", "tex", "ts", "ts-react", "ts-vue", "ts-svelte", "v", "vala", "vdhl", "verilog", "vim-script", "zig"
].map((e: string) => `${PUBLIC_GITHUB_BASEPATH}/lang-${e}.json`);

const jsonFullPathsLangTut = [
  "c", "cpp", "cs", "dart", "dockerfile", "go", "java", "android", "haskell", "js", "jupyter-notebook", "kotlin", "lua", "php", "pwsh", "py", "ruby", "rust", "sh", "swift", "ts"
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
  id: number,
  node_id: string,
  name: string,
  full_name: string,
  private: boolean,
  owner: {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
  },
  html_url: string,
  description: string,
  fork: false,
  url: string,
  forks_url: string,
  keys_url: string,
  collaborators_url: string,
  teams_url: string,
  hooks_url: string,
  issue_events_url: string,
  events_url: string,
  assignees_url: string,
  branches_url: string,
  tags_url: string,
  blobs_url: string,
  git_tags_url: string,
  git_refs_url: string,
  trees_url: string,
  statuses_url: string,
  languages_url: string,
  stargazers_url: string,
  contributors_url: string,
  subscribers_url: string,
  subscription_url: string,
  commits_url: string,
  git_commits_url: string,
  comments_url: string,
  issue_comment_url: string,
  contents_url: string,
  compare_url: string,
  merges_url: string,
  archive_url: string,
  downloads_url: string,
  issues_url: string,
  pulls_url: string,
  milestones_url: string,
  notifications_url: string,
  labels_url: string,
  releases_url: string,
  deployments_url: string,
  created_at: string,
  updated_at: string,
  pushed_at: string,
  git_url: string,
  ssh_url: string,
  clone_url: string,
  svn_url: string,
  homepage: string,
  size: number,
  stargazers_count: number,
  watchers_count: number,
  language: string,
  has_issues: boolean,
  has_projects: boolean,
  has_downloads: boolean,
  has_wiki: boolean,
  has_pages: boolean,
  has_discussions: boolean,
  forks_count: number,
  mirror_url: string | null,
  archived: boolean,
  disabled: boolean,
  open_issues_count: number,
  "license": {
    "key": string,
    "name": string,
    "spdx_id": string,
    "url": string,
    "node_id": string
  },
  "allow_forking": boolean,
  "is_template": boolean,
  "web_commit_signoff_required": boolean,
  "topics": Array<string>,
  "visibility": string,
  "forks": number,
  "open_issues": number,
  "watchers": number,
  "default_branch": string,
  "temp_clone_token": string | null,
  "network_count": number,
  "subscribers_count": number
}

type GithubColor = {
  color: string,
  url: string
}

let reposToExclude: Array<GithubRepoBookmarkInfo> = [];
for (const path of [...jsonFullPathsLang, ...jsonFullPathsLangTut, ...jsonFullPathsOther]) {
  axios.get(path)
    .then((res) => res.data ?? [])
    .then((items) => { reposToExclude.push(...items) })
    .catch((e) => console.error(`failed to fetch ${path} ...`, e));
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
    .then((res) => res.data)
    .then((data) => data ?? {})
    .catch((e) => console.error(`failed to fetch data`, e))
}

const getURLGithubTrending = (date: string) => { 
  if (IS_DEBUG) console.log(`getURLGithubTrending ... date: ${date}`)
  // https://api.github.com/search/repositories?sort=stars&order=desc&q=pushed:%3E2023-10-09
  const _date = encodeURIComponent(`pushed:>${date}`)
  return `${BASEURL_GITHUB_OFFICIAL_API}/search/repositories?sort=stars&order=desc&q=${_date}`
}


function fetchGithubRepos(shouldFilter = false): Promise<Array<DevoGithubResponse>> {
  if (IS_DEBUG) console.log(`fetchGithubRepos ... shouldFilter:${shouldFilter}`)
  // console.log(`fetchGithubRepos ... shouldFilter:${shouldFilter}`)
  return axios.get(URL_JSON_DEVO_GITHUB)
      .then((res) => res.data ?? [])
      .then((items) => (shouldFilter) ? items.filter(filterPredicate) : items)
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
  let _fullName = fullName?.replace(/\s/g, '') ?? ''
  if (_fullName == '') {
    console.warn('no fullName FOUND!')
    return undefined
  }

  let githubRepoPath = _fullName.split('/')
  if (githubRepoPath.length != 2) {
    if (githubRepoPath.length > 2) {
      _fullName = _fullName.split('/', 2).join('/')
    } else {
      console.warn(`invalid fullName ... ${_fullName}`)
      return undefined
    }
  }
  
  console.log('fetch ...');
  return axios.get(`${BASEURL_GITHUB_OFFICIAL_API}/repos/${_fullName}`)
    .then((res) => res.data ?? {})
    .then((itemDetail) => itemDetail)
    .catch((e) => {console.warn('Error:', e);return {}});
}

function openAll(links2Open: []) {
  console.log('openAll ...')
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
  fetchGithubDetail,
  openAll,
}
export default DevoApi