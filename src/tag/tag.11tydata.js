export default  {
    layout: "tag.webc",
    tags: [
        "Tag",
    ],
    permalink: function({page:{fileSlug}}) {
        return `/tag/${this.slugify(fileSlug)}/`;
    }
}