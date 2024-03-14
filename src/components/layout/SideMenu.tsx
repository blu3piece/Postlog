import Link from "next/link";
import Image from "next/image";

export default function SideMenu() {
  return <div className="flex fixed w-[--sidebar-width] h-[100vh] flex-col items-center px-[30px] top-0 bg-[--menu-background-color]">
    <Link className="flex mt-[30px] mb-[50px] decoration-none items-center justify-center text-[--black] text-2xl font-semibold" href="/">
      {/* <Image src={`${prefix}/favicon-128.png`} alt="favicon" width={32} height={32} style={{ borderRadius: 6 }}></Image> */}
      Chayhan
    </Link>
    <Image className="rounded-full" width={100} height={100} src="https://avatars.githubusercontent.com/u/65532873?v=4" alt="profile-picture-error" />
    <div className="my-[10px] text-[--black] text-lg font-medium">Chayhan’s blog</div>
    <div className="my-[10px] text-center text-[--black-weak] text-sm">
      신념 있는 개발자. <br />
      오버피팅이 없는 개발자, <br />
      chayhan 입니다.
    </div>
    <div className="my-[30px] w-[100%] bg-[--whitegray-weak] h-[1px]"/>
    <div className="flex gap-2 flex-col items-center *:text-base *:text-light *:transition *:cursor-pointer hover:*:text-[--gray] *:text-[--black-weak]">
      <div>
        <Link href="https://github.com/chayhan">
          Github
        </Link>
      </div>
      <div>
        <Link href="https://discord.gg/w8xnMDgcxA">
          Discord
        </Link>
      </div>
      <div>
        <Link href="https://solved.ac/profile/blu3fishez">
          Solved.ac
        </Link>
      </div>
    </div>
  </div>
}