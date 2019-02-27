const toQueryString = obj => {
    return Object.keys(obj)
        .filter(k => obj[k] || obj[k] === 0 || obj[k] === false)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
        .join('&')
}

const errorMsg = error => {
    let { response } = error
    console.log(response) // eslint-disable-line
    switch (response.status) {
        case 400:
            if (/duplicate key/i.test(response.data.msg)) {
                return '标题不能重复'
            }
            return response.data.msg
        case 401:
            return '登录过期，请重新登录'
        default:
            return response.message
    }
}

export { toQueryString, errorMsg }
