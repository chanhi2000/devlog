// src/.vuepress/js/api/ZsyncApi.ts
import Setup from "./Setup"
const axios = Setup.axios
const IS_DEBUG = Setup.IS_DEBUG

const BASEURL_ZSYNC = 'https://zsync.xyz'
const BASEURL_ZSYNC_API = 'https://api.zsync.xyz/v1'
// const URL_JSON_ZSYNC = `${Setup.URL_CORS_BYPASS}${BASEURL_ZSYNC_API}/posts`
const URL_JSON_ZSYNC = `${BASEURL_ZSYNC_API}/posts`

type ZSyncItem = {
  title: string,
  content: string,
  url: string,
  slug: string,
  userId: string,
  createdAt: string,
  updatedAt: string,
  deleted: null,
  id: string,
  document_with_weights: string,
  image: string,
  user: {
    id: string,
    username: string,
    twitterUsername: string | null,
    ethAddress: string | null,
    ensName: string | null,
    createdAt: string,
    description: string | null,
    displayName: string | null,
    location: string | null,
    profilePic: string | null,
    url: string | null
  },
  numComments: number,
  votes: number,
  tags: Array<string>,
  score: number
}

function fetchZSync(shouldFilter = false): Promise<Array<ZSyncItem>> {
    if (IS_DEBUG) console.log(`fetchZSync ... shouldFilter:${shouldFilter}`)
    // console.log(`fetchGithubRepos ... shouldFilter:${shouldFilter}`)
    return axios.get(URL_JSON_ZSYNC, { 
      method: 'GET',
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": 'application/json',
      }
    })
    .then((res) => res.data?.data ?? [])
    // .then((items) => (shouldFilter) ? items.filter(filterPredicate) : items)
    .then((items) => items)
    .catch((e) => { 
      console.error(`failed to fetch data`, e);
      return []
    })
  }

const ZSyncApi = {
    BASEURL_ZSYNC,
    BASEURL_ZSYNC_API,
    fetchZSync
}

export default ZSyncApi