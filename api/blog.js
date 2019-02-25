import axios from 'axios'
import { toQueryString } from '../utils/common'

const ajax = axios.create({
    baseURL: 'http://localhost:3000/blog/',
    timeout: 10000
})

const getBlogList = query => ajax.get(`/list?${toQueryString(query)}`)

const readBlog = (data, query) =>
    ajax.get(`/${data.id}?${toQueryString(query)}`)

const createBlog = (data, query) => ajax.post(`?${toQueryString(query)}`, data)

const updateBlog = (data, query) =>
    ajax.put(`/${data.id}?${toQueryString(query)}`, data)

const deleteBlog = (data, query) =>
    ajax.delete(`/${data.id}?${toQueryString(query)}`, data)

export { getBlogList, createBlog, readBlog, updateBlog, deleteBlog }
