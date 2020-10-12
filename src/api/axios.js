import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

Vue.use(axios)

const Axios = axios.create({
  baseUrl: process.env.Base_URL,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  },
  transformRequest: [function(data){
    return data
  }],
  transformResponse: [function(data){
    return JSON.parse(data)
  }]
})

Axios.interceptors.request.use(function(config) {
  config.headers = Object.assign(config.method === 'get' ? {
    'Accept': 'application/json',
    'content-type': 'application/json;charset=UTF-8'
  } : {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }, config.headers)

  if (config.method === 'post') {
    const contentType = config.headers['content-type']
    if (contentType) {
      if (contentType.includes('multipart')) {
        // config.data = data
      } else if (contentType.includes('json')) {
        // 服务器收到得raw body（原始数据） 
        config.data = JSON.stringify(config.data)
      } else {
        config.data = qs.stringify(config.data)
      }
    }
  }
  return Promise.resolve(config)
}, function(err) {
  return Promise.reject(err)
})


Axios.interceptors.response.use(function (res) {

})