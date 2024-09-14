export default {
    tags: [
        "Doc",
    ],
    layout: "page.webc",
     permalink: function({page:{fileSlug}}) {
        return `/doc/${this.slugify(fileSlug)}/`;
    }
}