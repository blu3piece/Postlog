'use client';

// import styles from "./Postlist.module.css";
import { useSearchParams } from "next/navigation";
import { Article } from "@/ts/article";

import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface PostlistParam {
  articleList:Article[];
}

export default function Postlist(params:PostlistParam) {
  let pageNumberQuery = Number(useSearchParams().get('page'));
  const {articleList} = params;
  
  if(Number.isNaN(pageNumberQuery) || pageNumberQuery == 0) pageNumberQuery = 1;

  let pageNumbers:JSX.Element[] = [];
  const lastPageIdx = Math.floor(articleList.length / 4) + (articleList.length % 4 ? 1 : 0);

  for(let i=1; i<=lastPageIdx; ++i) {
    if(pageNumberQuery == i || pageNumberQuery == i-1 || pageNumberQuery == i + 1)
      pageNumbers.push(<Link key={i} className={`leading-7 align-center font-bold ${pageNumberQuery == i ? "text-[--black] text-base" : "text-[--gray] text-base"}`} href={`/?page=${i}`}>
        {i}
      </Link>);
  }
  
  const displayArticles = articleList.slice((pageNumberQuery-1)*4, (pageNumberQuery-1)*4 + 4 > articleList.length ? articleList.length : (pageNumberQuery-1)*4 + 4);

  return <div className="flex flex-col min-h-[600px] justify-between *:m-0 *:transition">
    <div className="flex flex-col justify-start py-[30px]">
      {displayArticles.map((value, index) => {
        return <div className="mb-[32px]" key={index}>
        <div className="text-[--black] text-lg underline underline-offset-4 inline-block">
          <Link href={`/${value.slug}`}>
            {value.title}
          </Link>
        </div>
        <div className="text-[--gray] text-base">
          {value.description}
        </div>
        <div className="mt-[8px] text-[--whitegray] text-base">
          {value.dateString}
        </div>
      </div>
      })}
    </div>
    <div className="text-[--black] flex flex-row justify-between">
      <div className="toFirst">
        <Link href={"/?page=1"} >
          <ArrowBackIcon />
        </Link>
      </div>
      {pageNumbers}
      <div className="toLast">
        <Link href={`/?page=${lastPageIdx}`} >
          <ArrowForwardIcon />
        </Link>
      </div>
    </div>
  </div>
}
