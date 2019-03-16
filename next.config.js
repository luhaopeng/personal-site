/* eslint-disable */
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
}

module.exports = withCss(
    withLess({
        lessLoaderOptions: {
            javascriptEnabled: true
        },
        webpack: config => {
            config.plugins.push(
                new FilterWarningsPlugin({
                    exclude: /Conflicting order between/
                })
            )
            return config
        }
    })
)
