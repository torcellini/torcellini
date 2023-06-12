let Parser = require('rss-parser');
let parser = new Parser();
const { DateTime } = require("luxon");
const EleventyExtensionMap = require('@11ty/eleventy/src/EleventyExtensionMap');
// use luxon to make the date look nice
function readableDate(d) {
    return DateTime.fromISO(d, {zone: 'utc'}).
    toFormat("LLLL dd, yyyy");
};
// compare the dates for sorting
function compareDate(a, b) {
    aDate = Date.parse(a.isoDate);
    bDate = Date.parse(b.isoDate);
    return bDate - aDate;
};
// TODO: build error handling
module.exports = async function(url, number) {
    let feed = await parser.parseURL(url);
    let html = '<h3>Latest</h3><ol>';
    let array = feed.items.sort(compareDate);
    array.slice(0, number).forEach(function(entry) {
        html = html + `<li><a href="${entry.link}">${entry.title}&mdash;${readableDate(entry.isoDate)}</a></li>`;
    })
    html = html + "</ol>"
    return html;
}


