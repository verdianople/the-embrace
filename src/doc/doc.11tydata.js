export default {
    tags: [
        "doc",
    ],
    layout: "page.webc",
     permalink: function({page:{fileSlug}}) {
        return `/doc/${this.slugify(fileSlug)}/`;
    }
}