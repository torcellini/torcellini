module.exports = function(eleventyConfig) {
    eleventyConfig.addAsyncShortcode("feed", require("./_11ty/feed.js"));
};