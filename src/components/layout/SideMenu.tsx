import Link from "next/link";
import Image from "next/image";

import { Noto_Serif_KR } from "next/font/google";

const serifFont = Noto_Serif_KR({
  weight: "400",
  subsets: ["latin"],
});

export default function SideMenu() {
  return (
    <>
    <div className="fixed">
      asdf
    </div>
    <div className="z-10 flex fixed w-[--sidebar-width] h-[100vh] flex-col items-center px-[30px] top-0 bg-[--menu-background-color]">
      <Image
        className="rounded-full"
        width={100}
        height={100}
        src="https://avatars.githubusercontent.com/u/65532873?v=4"
        alt="profile-picture-error"
      />
      <div className="my-[10px] text-[--black] text-lg font-light">
        blu3fishez’s blog
      </div>
      <div
        className={`${serifFont.className} mt-5 text-center text-[--black-weak] text-sm`}
      >
        Categories
      </div>
      <div className="my-[10px] w-[100%] bg-[--whitegray-weak] h-[1px]" />
      <div
        className={`${serifFont.className} flex gap-2 flex-col items-start *:transition *:duration-700 *:text-base *:text-light *:cursor-pointer hover:*:text-[--gray] *:text-[--black-weak]`}
      >
        <div>
          <Link href="https://github.com/blu3fishez">Github</Link>
        </div>
        <div>
          <Link href="https://discord.gg/w8xnMDgcxA">Discord</Link>
        </div>
        <div>
          <Link href="https://solved.ac/profile/blu3fishez">Solved.ac</Link>
        </div>
      </div>
    </div>
    </>
  );
}
