/* eslint-disable */
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
}

module.exports = withCss(
    withLess({
        lessLoaderOptions: {
            javascriptEnabled: true
        },
        stats: {
            warningsFilter: /Conflicting order between/
        }
    })
)
