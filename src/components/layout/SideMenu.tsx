import Link from "next/link";
import Image from "next/image";
import CollapseButton from "../../../public/collapse.svg";
import { Noto_Serif_KR } from "next/font/google";

const serifFont = Noto_Serif_KR({
  weight: "400",
  subsets: ["latin"],
});

export default function SideMenu() {
  return (
    <>
      <div className="z-10 flex py-[10px] fixed w-[--sidebar-width] h-[100vh] flex-col items-center px-[10px] top-0 bg-[--menu-background-color] transition duration-700">
        <div className="z-20 left-[--sidebar-width] self-end cursor-pointer text-[--gray]">
          <Image src={CollapseButton} alt={""} width={16} height={16} />
        </div>
        <Image
          className="rounded-full mb-[20px] my-[60px]"
          width={100}
          height={100}
          src="https://avatars.githubusercontent.com/u/65532873?v=4"
          alt="profile-picture-error"
        />
        <div className="mb-[50px] text-[--black] text-lg font-light">
          blu3fishez’s blog
        </div>
        <div
          className={`${serifFont.className} mt-5 text-center text-[--black-weak] text-sm`}
        >
          Categories
        </div>
        <div className="mt-[10px] mb-[30px] w-[180px] bg-[--whitegray-weak] h-[1px]" />
        <div
          className={`${serifFont.className} flex gap-2 flex-col items-center *:transition *:duration-700 *:text-base *:text-light *:cursor-pointer hover:*:text-[--gray] *:text-[--black-weak]`}
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
