import "@/css/markdown.css";

// load local data
// load dependencies
import { getArticleList, fetchArticle } from "@/ts/article";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import Giscus from "../../components/Giscus";
import Image from "next/image";
import path from "node:path";
import { metadata as metadataMain } from "../layout";

import { Source_Code_Pro } from "next/font/google";

const monofont = Source_Code_Pro({ subsets: ["latin", "latin-ext"] });

interface PageParams {
  params: {
    slug:string;
  }
}

export const metadata = metadataMain;

export default function Page(params:PageParams) {
  const slug = params.params.slug;
  const articleData = fetchArticle(slug);

  if(articleData == null) {
    return <></>;
  }

  metadata.title = articleData.article.title;
  if(metadata.openGraph) {
    metadata.openGraph.title = articleData.article.title;
    metadata.openGraph.description = articleData.article.description;
  }
  

  return <div className="w-[100%] mb-[60px]">
    <div className="">
      <div className="text-[--black] text-2xl font-semibold leading-10">
        {articleData.article.title}
      </div>
      <div className="text-[--gray-weak] text-base">
        {articleData.article.dateString}
      </div>
    </div>
    <div className="animate-stretchRight mx-0 my-[15px] relative w-[100%] h-[1px] bg-[--gray]"></div>
    <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypePrism]}
        className="markdown animation-fadeout"
        components={{
          img: (props) => {
            let {src, alt} = props;
            
            src = src ?? "";
            const {width, height} = articleData.imageSizes[path.join(src) ?? ""];

            src = `${prefix}/_posts/${src}`;

            return (
              <Image
                className="image"
                src={src ?? ""}
                alt={alt ?? ""}
                width={width}
                height={height}
              />
            );
          },
          code: (props) => {
            return <code className={`${monofont.className} ${props.className}`}>
              {props.children}
            </code>
          }
        }}
      >
        {articleData.article.content}
      </Markdown>
      <Giscus />
  </div>
}

export async function generateStaticParams() {
  return getArticleList().map(value => {return {slug:value.slug}});
}