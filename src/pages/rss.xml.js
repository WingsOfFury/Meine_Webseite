// import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

// import sanitizeHtml from "sanitize-html";
// import MarkdownIt from "markdown-it";
// const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "Astro und TailwindCSS Learner | Blog",
    description: "Meine erste Webseite mit Astro und TailwindCSS",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      author: post.data.author,
      link: `/posts/${post.slug}/`,
    })),
    // content: sanitizeHtml(parser.render(posts.body)),
    customData: `<language>de-DE</language>`,
  });
}
