// import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "Astro und TailwindCSS Learner | Blog",
    description: "Meine erste Webseite mit Astro und TailwindCSS",
    site: "https://www.my-site.dev",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      author: post.data.author,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>de-DE</language>`,
  });
}
