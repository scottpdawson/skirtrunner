const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-es");
const htmlmin = require("html-minifier");
const slugify = require("slugify");
const moment = require("moment");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter("galleryImage", (img) => {
    let resizeType = img.includes(".png") ? "fit" : "smartcrop";
    return img + "?nf_resize=" + resizeType + "&w=213&h=213";
  });

  eleventyConfig.addFilter("heroImage", (img) => {
    let resizeType = img.includes(".png") ? "fit" : "smartcrop";
    return img + "?nf_resize=" + resizeType + "&w=723&h=560";
  });

  eleventyConfig.addFilter("contentImage", (img) => {
    return img + "?nf_resize=fit&w=700";
  });

  eleventyConfig.addFilter("squash", require("./filters/squash.js"));

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("momentDate", (dateObj) => {
    return moment.utc(dateObj).format("MMMM D, YYYY");
  });

  eleventyConfig.addFilter("momentYear", (dateObj) => {
    return moment.utc(dateObj).format("YYYY");
  });

  eleventyConfig.addFilter("momentUnix", (dateObj) => {
    return moment(dateObj).valueOf();
  });

  eleventyConfig.addFilter("getYearArray", (collection) => {
    let yearArray = [];
    collection.forEach((item) => {
      yearArray.push(moment.utc(item.date).format("YYYY"));
    });
    return [...new Set(yearArray)];
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function (code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  eleventyConfig.addCollection("allPosts", (collection) => {
    return collection.getFilteredByGlob("posts/*.md").filter((item) => {
      const nav = item.data.navigation;
      return nav ? item : false;
    });
  });

  eleventyConfig.addCollection("trainingPosts", (collection) => {
    return collection.getFilteredByGlob("posts/*.md").filter((item) => {
      const nav = item.data.navigation;
      return nav && nav.toLowerCase() === "training" ? item : false;
    });
  });

  eleventyConfig.addCollection("racingPosts", (collection) => {
    return collection.getFilteredByGlob("posts/*.md").filter((item) => {
      const nav = item.data.navigation;
      return nav && nav.toLowerCase() === "racing" ? item : false;
    });
  });

  eleventyConfig.addCollection("swimmingPosts", (collection) => {
    return collection.getFilteredByGlob("posts/*.md").filter((item) => {
      const nav = item.data.navigation;
      return nav && nav.toLowerCase() === "swimming" ? item : false;
    });
  });

  eleventyConfig.addCollection("hikingPosts", (collection) => {
    return collection.getFilteredByGlob("posts/*.md").filter((item) => {
      const nav = item.data.navigation;
      return nav && nav.toLowerCase() === "hiking" ? item : false;
    });
  });

  eleventyConfig.addCollection("musingPosts", (collection) => {
    return collection.getFilteredByGlob("posts/*.md").filter((item) => {
      const nav = item.data.navigation;
      return nav && nav.toLowerCase() === "musing" ? item : false;
    });
  });

  eleventyConfig.addCollection("tagList", require("./utils/getTagList.js"));

  eleventyConfig.addNunjucksShortcode("lightbox", function (arr) {
    let imageString = "";
    for (i = 0; i < arr.length; i++) {
      imageString =
        imageString +
        `<div class="carousel-cell">
        <img 
          src="${arr[i].image}?nf_resize=fit&h=800" 
          title="${arr[i].caption}" 
          title="${arr[i].caption}" />
      </div>`;
    }
    return `<div class="main-carousel" data-flickity='{ "fullscreen": true, "wrapAround": "true", "autoPlay": "3000", "pauseAutoPlayOnHover": true }'>${imageString}</div>`;
  });

  const embedVimeo = require("eleventy-plugin-vimeo-embed");
  eleventyConfig.addPlugin(embedVimeo);

  const pluginEmbedTweet = require("eleventy-plugin-embed-tweet");
  let tweetEmbedOptions = {
    useInlineStyles: true,
    autoEmbed: true,
  };
  eleventyConfig.addPlugin(pluginEmbedTweet, tweetEmbedOptions);

  const embedInstagram = require("eleventy-plugin-embed-instagram");
  eleventyConfig.addPlugin(embedInstagram);

  const pluginRss = require("@11ty/eleventy-plugin-rss");
  eleventyConfig.addPlugin(pluginRss);

  const readingTime = require("eleventy-plugin-reading-time");
  eleventyConfig.addPlugin(readingTime);

  eleventyConfig.addShortcode("picture", require("./utils/picture.js"));
  eleventyConfig.addShortcode("pictureRt", require("./utils/pictureRt.js"));
  eleventyConfig.addShortcode("pictureRtSm", require("./utils/pictureRtSm.js"));
  eleventyConfig.addShortcode("githubGist", require("./utils/githubGist.js"));
  eleventyConfig.addShortcode("currentYear", function () {
    const year = new Date().getFullYear();
    return `${year}`;
  });

  eleventyConfig.addShortcode("youtube", (videoURL, title) => {
    const url = new URL(videoURL);
    const id = url.searchParams.get("v");
    return `
<iframe class="yt-embed" style="height: 50vw; margin: 1rem 0; max-height: 25rem; width: 100%;" src="https://www.youtube.com/embed/${id}" title="YouTube video player${
      title ? ` for ${title}` : ""
    }" frameborder="0" allowfullscreen></iframe>
`;
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Universal slug filter strips unsafe chars from URLs
  eleventyConfig.addFilter("slugify", function (str) {
    return slugify(str, {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@]/g,
    });
  });

  eleventyConfig.addFilter("has_tag", function (arr, key, value) {
    return arr.filter((item) => {
      const keys = key.split(".");
      const reduce = keys.reduce((object, key) => {
        return object[key];
      }, item);
      const str = String(reduce);

      return str.includes(value) ? item : false;
    });
  });

  eleventyConfig.addFilter("lacks_tag", function (arr, key, value) {
    return arr.filter((item) => {
      const keys = key.split(".");
      const reduce = keys.reduce((object, key) => {
        return object[key];
      }, item);
      const str = String(reduce);

      return str.includes(value) ? false : item;
    });
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("static/");
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_includes/assets/");

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  var markdownItAttrs = require("markdown-it-attrs");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let opts = {
    permalink: false,
  };

  eleventyConfig.setLibrary(
    "md",
    markdownIt(options).use(markdownItAnchor, opts).use(markdownItAttrs, {
      leftDelimiter: "{",
      rightDelimiter: "}",
      allowedAttributes: [], // empty array = all attributes are allowed
    })
  );

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
