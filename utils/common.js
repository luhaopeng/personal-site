const toQueryString = obj => {
    if (obj) {
        return Object.keys(obj)
            .filter(k => obj[k] || obj[k] === 0 || obj[k] === false)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
            .join('&')
    }
}

const errorMsg = error => {
    let { response } = error
    switch (response.status) {
        case 400:
            if (/duplicate key/i.test(response.data.message)) {
                return '标题不能重复'
            }
            return response.data.message
        case 401:
            return '登录过期，请重新登录'
        default:
            return response.statusText
    }
}

const translateCategory = category => {
    switch (category) {
        case 'article':
            return '文章'
        case 'essay':
            return '随笔'
        case 'translate':
            return '翻译'
    }
}

export { toQueryString, errorMsg, translateCategory }
