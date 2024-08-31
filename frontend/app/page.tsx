import { Card, CardContent } from "@/components/ui/card";
import { ShortBlogCard } from "./lib/types";
import { getPosts } from "./utils";
import { urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
    const data: ShortBlogCard[] = await getPosts();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
            {data.map((post, index) => (
                <Card key={index}>
                    <Image className="rounded-t-lg h-[200px] object-cover" src={urlFor(post.image).url()} alt={post.title} width={500} height={380} />
                    <CardContent className="mt-5">
                        <h3 className="text-xl line-clamp-2 font-bold">{post.title}</h3>
                        <p className="text-small line-clamp-4 text-gray-600 dark:text-gray-300 mt-2">{post.shortDescription}</p>
                        <Button asChild className="w-full mt-7">
                            <Link href={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
