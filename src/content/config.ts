import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: ({image})=> z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image().optional(),

        // Relation
        // author: z.string(),
        author: reference('author'),
        tags: z.array(z.string()),
        isDraft: z.boolean().default(false)
    })
})

const authorCollection = defineCollection({
    type: "data",
    schema: ({image})=> z.object({
        name: z.string(),
        avatar: image().optional()
    })
})

export const collections = {
    blog: blogCollection,
    author: authorCollection
}