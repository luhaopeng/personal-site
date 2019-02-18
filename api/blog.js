import axios from 'axios'

const ajax = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000
})

const getBlogList = data => ajax.get(`/bloglist/${data.page}`)

const createBlog = data => ajax.post('/blog', data)

const readBlog = data => ajax.get(`/blog/${data.id}`, data)

const updateBlog = data => ajax.put(`/blog/${data.id}`, data)

const deleteBlog = data => ajax.delete(`/blog/${data.id}`, data)

export { getBlogList, createBlog, readBlog, updateBlog, deleteBlog }
