module.exports = {
    layout: "tag.webc",
    tags: [
        "Tag",
    ],
    eleventyComputed: {
        /**
         * If no title is set, then use the filename. 
         */
        title: function(data) {
            if (!data.title) {
                return data.page.fileSlug
            }
            return data.title;
        },
    },
    /**
     * Filenames are effectively unique identifiers for tags,
     * but we want our URLs to look and parse nice. 
     */
    permalink: function({page:{fileSlug}}) {
        return `/tag/${this.slugify(fileSlug)}/`;
    }
}