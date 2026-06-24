import { request } from "@/utils";
import { message } from "antd";

export function getChannelsAPI() {
  return request({
    url: '/channels',
    method: 'GET'
  })
}

export async function createArticleAPI(data) {
  await request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data
  })
  message.success('发布文章成功')
}

export async function getArticlesAPI(params) {
  return request({
    url: '/mp/articles',
    method: 'GET',
    params
  })
}