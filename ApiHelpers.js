import axios from 'axios'
import { getAuthDataFromLS } from 'domain/auth/helpers' // getAuthDataFromLS gets headers from localStorage

export function makeUrl(strings, ...values) {
  return args => values
    .reduceRight((a, v, i) => `${strings[i]}${args[v]}${a}`, strings[strings.length - 1])
}

export function request(method, url, isAuth = true) {
  return args => {
    const authData = getAuthDataFromLS()

    const actualUrl = typeof url === 'function' ? url(args) : `${url}`
    let headers = {
      'Content-Type': 'application/json'
    }
    if (isAuth) {
      headers = {
        ...headers,
        Authorization: `${authData['token-type']} ${authData['access-token']}`
      }
    }
    return axios({
      method,
      url: `${process.env.REACT_APP_API_URL}${actualUrl}`, // REACT_APP_API_URL path to API (back-end server)
      headers,
      ...args
    })
  }
}
