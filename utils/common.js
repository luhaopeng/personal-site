const toQueryString = obj => {
    return Object.keys(obj)
        .map(key => {
            if (obj[key] !== undefined)
                return (
                    encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
                )
        })
        .join(' ')
        .trim()
        .split(/\s+/)
        .join('&')
}

const errorMsg = error => {
    let { response } = error
    switch (response.status) {
        case 400:
            if (/duplicate key/i.test(response.data.msg)) {
                return '标题不能重复'
            }
            return response.data.msg
        case 401:
            return '登录过期，请重新登录'
        default:
            return response.data.msg
    }
}

export { toQueryString, errorMsg }
