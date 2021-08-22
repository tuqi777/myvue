import request from '../request'

export function login({url,method,params}) {
  return request({
    url,
    method,
    data:params
  })
}