import {BLOG_POSTS} from "@/shared/constants/common";
import {notFound} from "next/navigation";

export default function Page({params}) {
    let post = BLOG_POSTS.find((post) => post.id === params.slug)
    if (!post) return notFound();

    return (
        <article className='max-w-[1000px] p-5 mx-auto'>
            <h1 className="font-bold text-violet-400 text-xl text-left">{post.title}</h1>
            <p className="font-bold">{post.date}</p>
            <div
                dangerouslySetInnerHTML={{__html: post.content}}
            />
        </article>
    )
}