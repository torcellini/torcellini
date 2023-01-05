module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("feed", require("./_11ty/feed.js"));
};