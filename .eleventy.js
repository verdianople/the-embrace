module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-webc"), {
        components: [
            "src/view/component/**/*.webc",
        ]
    });

    eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));

    /**
     * Remove organizational tags to show only display tags.
     */
    eleventyConfig.addFilter("filterDisplayTags", (tags) => {
        if (!Array.isArray(tags)) {
            return [];
        }
        const nonDisplay = ['doc', 'tag'];
        return tags.filter((tag) => {
            return ! nonDisplay.includes(tag.toLowerCase());
        });
    });

    return {
        dir: {
        input: "src",
        includes: "view/include",
        layouts: "view/layout",
        output: "dist",
        }
    }
};