import { urlFor } from "@/app/lib/sanity";
import { FullBlogPost } from "@/app/lib/types";
import { getPost } from "@/app/utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const data: FullBlogPost = await getPost(params.slug);

    return (
        <div className="w-full mt-8 flex items-center flex-col">
            <h1>
                <span className="block text-lg text-center text-primary font-semibold tracking-wide uppercase">Tim Nox - Blog</span>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <Image src={urlFor(data.image).url()} alt={data.title} width={800} height={500} className="mt-8 rounded-lg border" priority />
            <div className="px-4 max-w-5xl w-full mt-16 pb-10 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary pros-a:text-primary">
                <PortableText value={data.content} />
            </div>
        </div>
    );
}