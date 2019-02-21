import axios from 'axios'

const ajax = axios.create({
    baseURL: 'http://localhost:3000/blog/',
    timeout: 10000
})

const getBlogList = data => ajax.put(`/list/${data.page}`, data)

const createBlog = data => ajax.post('/', data)

const readBlog = data => ajax.get(`/${data.id}/${data.fromManage}`)

const updateBlog = data => ajax.put(`/${data.id}`, data)

const deleteBlog = data => ajax.delete(`/${data.id}`, data)

export { getBlogList, createBlog, readBlog, updateBlog, deleteBlog }
