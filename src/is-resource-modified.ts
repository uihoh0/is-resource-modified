import axios from 'axios'
import { URL } from 'url'
import { Looper } from './util'
import { IfOptions, IfAutoOptions } from './interface'

const cache: any = {}
const isResourceModified = async (url: string, opt: IfOptions = {}) => {
  const _url = new URL(url)
  let path = `${_url.origin}${_url.pathname}`
  const headers = await axios.get(`${path}?ts${+new Date()}`).then((resp: any) => resp.headers)
  const oldHeaders = cache[path]
  let isModified = false
  if (oldHeaders) {
    const oldEtag = oldHeaders.etag
    const etag = headers.etag
    // console.log('oldEtag:', oldEtag)
    // console.log('etag::', etag)
    const isSame = oldEtag && etag && (oldEtag === etag)
    isModified = !isSame
    if (isModified && opt.onModified) {
      opt.onModified(path, headers)
    }
  }
  cache[path] = headers
  return isModified
}


const autoCheck = (url: string, opt: IfAutoOptions = {}): Looper => {
  const loopInterval = opt.loopInterval || 1000 * 60 * 10 // check every 10minutes as default
  const looper = new Looper(() => {
    isResourceModified(url, opt)
  }, loopInterval)
  looper.run()
  return looper
}

export { autoCheck }
export default isResourceModified