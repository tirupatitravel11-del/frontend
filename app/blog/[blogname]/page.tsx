
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import { useParams, useRouter } from "next/navigation";
import BlogViewer from "@/_components/BlogViewer";
import { ArrowBack } from "@mui/icons-material";


export function cleanTiptapJSON(node: any) {
    if (!node) return null;

    // ❌ Remove empty text nodes
    if (node.type === "text") {
        if (!node.text || node.text.trim() === "") {
            return null;
        }
        return node;
    }

    // ✅ Recursively clean content
    if (node.content) {
        const cleanedContent = node.content
            .map(cleanTiptapJSON)
            .filter(Boolean);

        return {
            ...node,
            content: cleanedContent,
        };
    }

    return node;
}

type BlogType = {
    title: string;
    slug: string;
    author: string;
    content: {
        type: string;
        content?: any[];
    };
    publisheddate: string;

};
const page = () => {
    const params = useParams();
    const blogName = params?.blogname || "";
    // const [currentblog, setCurrentBlog] = useState<BlogType>({title:"", slug:"", author:"", content:{type:"", content:[]}});
    const [blogContent, setBlogContent] = useState<any>([])
    const [currentblog, setCurrentBlog] = useState<BlogType>()
    const router = useRouter();


    const getEditorBlog = async () => {
        try {
            const result = await axios.post(process.env.apiUrl + `/api/get-blog`,
                { slug: blogName }, { withCredentials: true })

            if (!result?.data?.blog) return;
            setCurrentBlog(result?.data?.blog)
            const blogcontent = cleanTiptapJSON(result?.data?.blog?.content)
            setBlogContent(blogcontent)
            // console.log(result?.data?.blog?.content?.content, "blog result")
            // setCurrentTitle(result?.data?.blog?.title)
        } catch (error) {
            console.log(error, "blogerror")
        }
    }

    useEffect(() => {
        getEditorBlog()
    }, [])


    function addTargetBlank(html: string) {
        return html.replace(
            /<a\s+([^>]*href="[^"]*"[^>]*)>/g,
            '<a target="_blank" rel="noopener noreferrer" $1>'
        );
    }
    // return (
    //     <div className="app bg-white min-h-screen flex flex-col">
    //         <CustomCursor />
    //         <Navbar />

    //         <main className="flex-grow pt-20 w-full">
    //             <section className="max-w-4xl mx-auto px-4 py-16 text-black">
    //                 {/* Section Header */}
    //                 {/* {currentblog.map((data: any, index: number) => ( */}
    //                 <h2 className=" text-black text-4xl sm:text-5xl font-bold text-text-gray-500 mb-8 leading-tight justify capitalize">
    //                     {currentblog.title
    //                     }
    //                 </h2>
    //                 <div className="flex items-center text-md text-gray-900 mb-6 gap-4 text-xl w-full">
    //                     <div className="flex items-center space-x-1 text-gray-900 ">
    //                         <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    //                             <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    //                         </svg>
    //                         <span className="text-lg px-2.5 py-0.5 rounded-full nowrap">
    //                             {currentblog?.publisheddate
    //                                 ? DateTime.fromISO(currentblog?.publisheddate).toFormat(
    //                                     "LLL dd, yyyy"
    //                                 )
    //                                 : "--"}
    //                         </span>
    //                     </div>
    //                     <div className="flex items-center space-x-1 ">
    //                         <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    //                             <path d="M5.121 17.804A4.992 4.992 0 017 16h10a4.992 4.992 0 011.879.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    //                         </svg>
    //                         <span className="text-lg">{currentblog?.author}</span>
    //                     </div>
    //                 </div>
    //                 <div className="w-full">
    //                     {currentblog?.content?.blocks.map((block: any) => {
    //                         switch (block.type) {
    //                             case "header":
    //                                 return (
    //                                     <h1
    //                                         key={block.id}
    //                                         className={`mb-4 ${block.data.level === 1
    //                                             ? "text-5xl font-bold text-text-gray-500 mb-8 leading-tight"
    //                                             : block.data.level === 2
    //                                                 ? "text-3xl font-bold text-text-gray-500 mb-8 leading-tight"
    //                                                 : block.data.level === 3
    //                                                     ? "text-2xl font-semibold text-text-gray-500 mb-8 leading-tight"
    //                                                     : block.data.level === 4
    //                                                         ? "text-xl font-semibold text-text-gray-500 mb-8 leading-tight"
    //                                                         : block.data.level === 5
    //                                                             ? "text-lg font-semibold text-text-gray-500 mb-8 leading-tight"
    //                                                             : "text-md font-semibold text-text-gray-500 mb-8 leading-tight"
    //                                             }`}
    //                                         dangerouslySetInnerHTML={{ __html: block.data.text }}
    //                                     />
    //                                 );

    //                             case "paragraph":
    //                                 return (
    //                                     <div key={block.id} className="">
    //                                         <p
    //                                             // key={block.id}
    //                                             className="mb-4 text-gray-900 text-xl [&_a]:text-blue-600 [&_a]:font-semibold [&_a]:underline"
    //                                             dangerouslySetInnerHTML={{
    //                                                 __html: addTargetBlank(block.data.text),
    //                                             }}
    //                                         />

    //                                     </div>
    //                                 );

    //                             case "image":
    //                                 return (
    //                                     <div key={block.id} className="mb-8 relative group rounded-xl overflow-hidden shadow-xl">
    //                                         <img
    //                                             src={block.data.file.url}
    //                                             alt={block.data.caption || ""}
    //                                             className="w-full h-[400px] object-fill transition-transform duration-500 group-hover:scale-105"
    //                                         />

    //                                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-500 rounded-xl" />
    //                                     </div>


    //                                 );

    //                             case "list":
    //                                 return block.data.style === "ordered" ? (
    //                                     <ol key={block.id} className="list-decimal pl-10 space-y-2 text-xl py-3">
    //                                         {block.data.items.map((item: any, i: number) => (
    //                                             <li key={i} dangerouslySetInnerHTML={{ __html: item.content }} />
    //                                         ))}
    //                                     </ol>
    //                                 ) : (
    //                                     <ul key={block.id} className="list-disc pl-10 space-y-2 text-[1.2rem] prose prose-invert prose-lg max-w-none text-content py-3">
    //                                         {block.data.items.map((item: any, i: number) => (
    //                                             <li key={i} dangerouslySetInnerHTML={{ __html: item?.content }} />
    //                                         ))}
    //                                     </ul>
    //                                 );


    //                             default:
    //                                 return null;
    //                         }
    //                     })}
    //                 </div>
    //             </section>
    //         </main>
    //         <Footer />
    //     </div>
    // );

    return (
        <div className="app bg-white min-h-screen flex flex-col">
     

            <main className="flex-grow pt-20 w-full">
                <section className="max-w-4xl mx-auto px-4 py-16 text-black min-h-80">

                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 mb-6 group"
                    >
                        <ArrowBack className="text-xl transition-transform duration-300 group-hover:-translate-x-1" />
                        <span className="font-medium">Back to Blogs</span>
                    </button>
                    {/* Section Header */}
                    <h2 className=" text-black text-4xl sm:text-5xl font-bold text-text-gray-500 mb-8 leading-tight justify capitalize">
                        {currentblog?.title}
                    </h2>
                    {currentblog ? <><div className="flex items-center text-md text-gray-900 mb-6 gap-4 text-xl w-full">
                        <div className="flex items-center space-x-1 text-gray-900 ">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-lg px-2.5 py-0.5 rounded-full nowrap">
                                {currentblog?.publisheddate
                                    ? DateTime.fromISO(currentblog?.publisheddate).toFormat(
                                        "LLL dd, yyyy"
                                    )
                                    : "--"}
                            </span>
                        </div>
                        <div className="flex items-center space-x-1 ">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path d="M5.121 17.804A4.992 4.992 0 017 16h10a4.992 4.992 0 011.879.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-lg">{currentblog?.author}</span>
                        </div>
                    </div></> : <div className="flex justify-center space-x-1 text-gray-900 text-4xl text-center w-full"><span>Coming Soon</span></div>}


                    <BlogViewer content={blogContent} />
                </section>
            </main>
        </div>
    )
};

export default page;
