const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("asDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj,{zone: 'utc'}).toFormat('dd/MM/yyyy');
  });

  eleventyConfig.addPassthroughCopy("src/_assets");  
  eleventyConfig.addPassthroughCopy("src/books/**/*.{jpg,png,css,pdf,svg}");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist",
    },
    passthroughFileCopy: true,
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  }
}
