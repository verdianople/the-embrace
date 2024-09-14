import pluginWebc from "@11ty/eleventy-plugin-webc";
import {stat} from 'node:fs';

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginWebc, {
        components: [
            "src/view/component/**/*.webc",
        ]
    });

    /**
     * Remove the organization "doc" tag; we don't need to display it.
     */
    eleventyConfig.addFilter("filterDisplayTags", (tags) => {
        return tags.filter((tag) => tag !== 'doc');
    })

    eleventyConfig.addFilter("getTagUrl", async function(tagName, collections) {
        console.log(collections)
    })
};

export const config = {
    dir: {
      input: "src",
      includes: "view/include",
      layouts: "view/layout",
      output: "dist",
    }
}