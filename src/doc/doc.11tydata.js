module.exports = {
    tags: [
        "Doc",
    ],
    layout: "doc.webc",
     permalink: function({page:{fileSlug}}) {
        return `/doc/${this.slugify(fileSlug)}/`;
    }
}