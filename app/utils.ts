import { client } from "./lib/sanity"
import { FullBlogPost, ShortBlogCard } from "./lib/types"

export async function getPosts(): Promise<ShortBlogCard[]> {
    const query = `
        *[ _type == 'blog'] | order(_createdAt desc){
            title,
            image,
            shortDescription,
            'slug': slug.current
        }
    `

    const data = await client.fetch(query)

    return data
}

export async function getPost(slug: string): Promise<FullBlogPost> {
    const query = `
        *[ _type == 'blog' && slug.current == '${slug}'] {
            title,
            content,
            image,
            "slug": slug.current
        }[0]
    `

    const data = await client.fetch(query)

    return data;
}