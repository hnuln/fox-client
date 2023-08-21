import { request } from "../request";

export function getCityAll() {
  return request.get({
    url: '/city/all'
  })
}
