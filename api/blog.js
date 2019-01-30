import axios from 'axios'

const ajax = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000
})

const createBlog = data => ajax.post('/blog', data)

const readBlog = data => ajax.get(`/blog/${data.id}`)

const updateBlog = data => ajax.put(`/blog/${data.id}`, data)

const deleteBlog = data => ajax.delete(`/blog/${data.id}`, data)

export { createBlog, readBlog, updateBlog, deleteBlog }
