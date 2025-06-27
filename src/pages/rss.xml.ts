import rss from "@astrojs/rss"
import { type APIRoute } from "astro";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html"

const parser = new MarkdownIt()

export const GET: APIRoute = async ({ params, request, site }) => {
    const blogCollection = await getCollection('blog');

    return rss({
        stylesheet: 'styles/rss.xsl',
        title: "The bieck's blog",
        description: "a simple practice blog",
        site: site ?? 'https://bieck-astro-blog.netlify.app',
        items: blogCollection.map(({ data, slug, body }) => ({
            title: data.title,
            description: data.description,
            xmlns: {
                media: 'http://search.yahoo.com/mrss/',
              },              
            pubDate: data.date,
            link: `/posts/${slug}`,
            content: sanitizeHtml(parser.render(body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
            }),

            customData: `<media:content
             type="image/${data.image?.format === 'jpg' ? 'jpeg' : 'png'}"
             width="${data.image?.width}"
             height="${data.image?.height}"
             medium="image"
             url="${(site ?? 'https://bieck-astro-blog.netlify.app') + (data.image?.src ?? '')}" />
             `,
        })),
        customData: `<language>es-mx</language>`
    })
}