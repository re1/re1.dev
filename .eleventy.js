module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats('pug');
  eleventyConfig.addPassthroughCopy('static');

  return {
    passtroughFileCopy: true,
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};
