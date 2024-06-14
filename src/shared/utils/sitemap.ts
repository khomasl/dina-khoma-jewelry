// import { getBlogPosts } from 'app/blog/utils'

import { BASE_URL as baseUrl } from "../constants/common"

export default async function sitemap() {
  // let blogs = getBlogPosts().map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.metadata.publishedAt,
  // }))

  // let routes = ['', '/blog'].map((route) => ({
  let routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [
    ...routes, 
    // ...blogs
  ]
}