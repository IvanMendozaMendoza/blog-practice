import rss from "@astrojs/rss"
import { type APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({params, request, site})=> {
    const blogCollection = await getCollection('blog');

    return rss({
        stylesheet: 'styles/rss.xsl',
        title: "The bieck's blog",
        description: "a simple practice blog",
        site: site ?? 'http://localhost:4321',
        items: blogCollection.map(({data, slug})=> ({
            title: data.title,
            description: data.description,
            pubDate: data.date,
            link: `/posts/${slug}`
        })),
        customData: `<language>es-mx</language>`
    })
}