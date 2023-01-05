let Parser = require('rss-parser');
let parser = new Parser();
// use luxon to make the date look nice
// generate a new array sorted by date before looping, so the posts are in the right order
module.exports = async function(url) {
    let feed = await parser.parseURL(url);
    let html = '<h3>Latest</h3>'
    feed.items.forEach(function(entry) {
        html = html + `<li><a href="${entry.link}">${entry.title}&nbsp;${entry.pubDate}</a>`;
    })
    return html;
}
// fetch url
    // parse to array of objects
    // generate html list
    // do this all async


