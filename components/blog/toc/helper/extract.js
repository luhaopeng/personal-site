import Slugger from './slugger'

const titleReg = /(?<=(\n|^)+( *))#{1,6}( +).*/g
const hashReg = /^#{1,6}(?= +)/g
const strongReg = /__([^\s_])__(?!_)|\*\*([^\s*])\*\*(?!\*)|__([^\s].*?[^\s])__(?!_)|\*\*([^\s].*?[^\s])\*\*(?!\*)/g
const emReg = /_([^\s_])_(?!_)|\*([^\s*"<[])\*(?!\*)|_([^\s][\s\S]*?[^\s_])_(?!_|[^\s])|_([^\s_][\s\S]*?[^\s])_(?!_|[^\s])|\*([^\s"<[][\s\S]*?[^\s*])\*(?!\*)|\*([^\s*"<[][\s\S]*?[^\s])\*(?!\*)/g

function extract(src) {
    src = lexer(src)
    let titles = String.prototype.match.call(src, titleReg) || []
    let slugger = new Slugger()
    return titles.map(function categorize(val) {
        let hashTag = val.match(hashReg)[0]
        let level = hashTag.length
        let content = inlineParse(val.replace(hashTag, '').trim())
        let slug = slugger.slug(content)
        return { content, slug, level }
    })
}

function lexer(src) {
    src = src
        .replace(/\r\n|\r/g, '\n')
        .replace(/\t/g, '    ')
        .replace(/\u00a0/g, ' ')
        .replace(/\u2424/g, '\n')
        .replace(/^ +$/gm, '')
    return src
}

function inlineParse(src) {
    let cap
    // strong replace
    do {
        cap = strongReg.exec(src)
        if (cap) {
            src = src.replace(cap[0], cap[1] || cap[2] || cap[3] || cap[4])
        }
    } while (cap)

    // em replace
    do {
        cap = emReg.exec(src)
        if (cap) {
            src = src.replace(
                cap[0],
                cap[1] || cap[2] || cap[3] || cap[4] || cap[5] || cap[6]
            )
        }
    } while (cap)

    return src
}

export default extract
