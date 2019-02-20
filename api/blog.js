import axios from 'axios'

const ajax = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000
})

const getBlogList = data => ajax.put(`/bloglist/${data.page}`, data)

const createBlog = data => ajax.post('/blog', data)

const readBlog = data => ajax.get(`/blog/${data.id}/${data.fromManage || '0'}`)

const updateBlog = data => ajax.put(`/blog/${data.id}`, data)

const deleteBlog = data => ajax.delete(`/blog/${data.id}`, data)

export { getBlogList, createBlog, readBlog, updateBlog, deleteBlog }
