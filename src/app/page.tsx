import Postlist from "../components/Postlist";
import { Suspense } from "react";
import { getArticleList } from "@/ts/article";

export default function Page() {
  return <div className="w-[100%] pb-[50px]">
    <div className="h-[--header-height]">
      <div className="text-[--black] text-3xl font-normal">Posts</div>
      <div className="text-[--gray-weak] text-lg font-normal">다양한 주제로 글을 씁니다.</div>
    </div>
    <div className="line mx-0 my-[15px] relative" />
    <Suspense fallback="loading...">
      <Postlist articleList={getArticleList()} />
    </Suspense>
  </div>
}
