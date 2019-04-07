const slugReg = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g

function Slugger() {
    this.seen = {}
}

Slugger.prototype.slug = function(value) {
    let slug = value
        .toLowerCase()
        .trim()
        .replace(slugReg, '')
        .replace(/\s/g, '-')

    if (this.seen.hasOwnProperty(slug)) {
        let originalSlug = slug
        do {
            this.seen[originalSlug]++
            slug = originalSlug + '-' + this.seen[originalSlug]
        } while (this.seen.hasOwnProperty(slug))
    }
    this.seen[slug] = 0

    return slug
}

export default Slugger
