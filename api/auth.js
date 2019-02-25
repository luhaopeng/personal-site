import axios from 'axios'
import { toQueryString } from '../utils/common'

const ajax = axios.create({
    baseURL: 'http://localhost:3000/auth/',
    timeout: 10000
})

const verify = query => ajax.get(`/?${toQueryString(query)}`)

export { verify }
