import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
  eleventyConfig.setTemplateFormats("11ty.js,md");
  eleventyConfig.addPassthroughCopy("static");
  // add syntax highlighting plugin
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    passtroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
