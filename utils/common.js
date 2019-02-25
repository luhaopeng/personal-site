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

export { toQueryString }
