// src/.vuepress/js/api/Setup
import axios from 'axios';

const IS_DEBUG = !(process.env.NODE_ENV === 'production')

const BASEURL_DEV = 'file://.'
const BASEURL_PRD = 'https://chanhi2000.github.io'
const BASEURL_PRD2 = 'https://raw.githubusercontent.com/chanhi2000/devlog/main/src/.vuepress/public'

// const BASEURL = !IS_DEBUG ? BASEURL_PRD : BASEURL_DEV
const BASEURL = BASEURL_PRD;

const URL_CORS_BYPASS = IS_DEBUG ? 'https://cors-anywhere.herokuapp.com/' : ''
axios.defaults.baseURL = BASEURL

const Setup = {
    axios,
    IS_DEBUG,
    BASEURL,
    URL_CORS_BYPASS
}
export default Setup