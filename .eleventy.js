module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats('pug');
  eleventyConfig.addPassthroughCopy('static');

  return {
    passtroughFileCopy: true,
  };
};
