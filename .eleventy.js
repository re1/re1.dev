const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats('11ty.js,md')
  eleventyConfig.addPassthroughCopy('static')
  // add recursive font from Fontsource
  eleventyConfig.addPassthroughCopy({
    'node_modules/@fontsource/recursive/files/recursive-latin-variable-full-normal.woff2':
      'static/fonts/recursive.woff2',
  })
  // add syntax highlighting plugin
  eleventyConfig.addPlugin(syntaxHighlight)
  // minify html using html-minifier
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
    }

    return content
  })

  return {
    passtroughFileCopy: true,
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  }
}
