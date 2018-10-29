const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')
const postCssCustomMedia = require('postcss-custom-media')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    require('tailwindcss')(tailwindJS),
    require('autoprefixer'),
    postCssCustomMedia({
      extensions: {
        '--larger-than-skyscraper': '(min-width:160px)',
        '--larger-than-iphone-se': '(min-width:374px)',
        '--larger-than-mobile': '(min-width:414px)',
        '--larger-than-phablet': '(min-width:550px)',
        '--larger-than-leaderboard': '(min-width:728px)',
        '--larger-than-tablet': '(min-width:750px)',
        '--larger-than-desktop': '(min-width:1000px)',
        '--larger-than-ipad': '(min-width:1024px)',
        '--larger-than-desktop-hd': '(min-width:1200px)',
        '--full-size': '(min-width:1440px)'
      }
    }),
    postcssPresetEnv({
      stage: 0,
      browsers: 'cover 90%, last 2 major versions'
    })
  ]
}
