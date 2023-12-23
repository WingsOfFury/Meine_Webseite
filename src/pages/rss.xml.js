// import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "Astro und TailwindCSS Learner | Blog",
    description: "Meine erste Webseite mit Astro und TailwindCSS",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>de-DE</language>`,
  });
}
