import { Search } from "lucide-react";
import Image from "next/image";
import { HiMiniHeart } from "react-icons/hi2";
import { TbBellFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="h-[124px] max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-8">
        {/* main logo & searchbar */}
        <div className="h-[44px] w-full lg:w-[1100px] flex items-center justify-between">
          {/* logo */}
          <div className="text-[#3563E9] text-5xl font-semibold ">
          <Link href="/">MORENT</Link>
          </div>
          {/* image box for reponsive screen */}
          <div className="lg:hidden h-[44px] w-[44px] border-2 text-2xl rounded-full flex items-center justify-center text-gray-500 bg-black">
          <Image  src={"/images/Image.png"} height={44} width={44} alt="img" />
          </div>
          {/* searchbar */}
          <div className="hidden lg:block h-[44px] w-[492px] lg:w-[350px] lg:mr-20 xl:mr-56 xl:w-[492px]  border-2 rounded-3xl items-center">
            <ul className="h-[44px] flex items-center justify-between text-[#596780] px-3">
              <li>
                <ul className="flex  gap-3">
                  <li className="pt-1"><Search /></li>
                  <li className="text-lg">Search something here</li>
                </ul>
              </li>
              <li>
                <Sheet>
                  <SheetTrigger><Image src={"/images/filter.png"} height={25} width={25} alt="icon" /></SheetTrigger>
                  <SheetContent className="bg-red-200">
                    <SheetHeader>
                      <SheetTitle>{`Pages we'r found's`}</SheetTitle>
                    </SheetHeader>
                    <Link href="/" className="text-2xl font-bold hover:text-4xl hover:text-teal-500">Home</Link>
                    <br />
                    <Link href="/category" className="text-2xl font-bold hover:text-3xl hover:text-yellow-600">Category</Link>
                    <br />
                    <Link href="/detail" className="text-2xl font-bold hover:text-3xl hover:text-yellow-600">{`Detail's`}</Link>
                    <br />
                    <Link href="/payment" className="text-2xl font-bold hover:text-3xl hover:text-yellow-600">{`Payment's`}</Link>
                    <br />
                    <Link href="/dashboard" className="text-2xl font-bold hover:text-3xl hover:text-yellow-600">Dashboard</Link>
                    
                  </SheetContent>
                </Sheet>
              </li>
            </ul>
          </div>
        </div>
        {/* searchbar for sm & md screen  */}
        <ul className="lg:hidden h-[44px] w-full flex items-center justify-between text-[#596780]  gap-3">
         <li className="border-2 h-[44px] w-full rounded-lg   flex items-center gap-3 pl-5"><Search  className="h-[36px] w-[36px] text-lg"/><input className="h-[42px] w-full rounded-lg border-none text-2xl" type="text" name="searchbar" placeholder="Search something here" /></li>
         <li className="border-2 h-[44px] w-[44px] rounded-lg  flex items-center justify-center"><Sheet>
                  <SheetTrigger><Image src={"/images/filter.png"} height={25} width={25} alt="icon" /></SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>{`Pages we Found's`}</SheetTitle>
                    </SheetHeader>
                    <Link href="/" className="text-2xl font-bold hover:text-4xl hover:text-teal-500">Home</Link>
                    <br />
                    <Link href="/category" className="text-2xl font-bold hover:text-3xl hover:text-yellow-600">Category</Link>
                    <br />
                    <Link href="/detail" className="text-2xl font-bold hover:text-3xl hover:text-yellow-600">{`Detail's`}</Link>
                    <br />
                    <Link href="/payment" className="text-2xl font-bold hover:text-3xl hover:text-yellow-600">{`Payment's`}</Link>
                    <br />
                    <Link href="/dashboard" className="text-2xl font-bold hover:text-3xl hover:text-yellow-600">Dashboard</Link>
                  </SheetContent>
                </Sheet></li>

        </ul>
        {/* icons box for responsive screen */}
       <div className="hidden lg:block xl:hidden">
       <ul className="h-[44px] w-[236px] flex justify-end gap-4">
          <li className="h-[44px] w-[44px] border-2 text-2xl rounded-full flex items-center justify-center text-gray-500"><IoMdSettings /></li>
          <li className="h-[44px] w-[44px] border-2 text-2xl rounded-full flex items-center justify-center text-gray-500 bg-black">
            <Image src={"/images/Image.png"} height={44} width={44} alt="img" />

          </li>
        </ul>
       </div>
       {/* icons box */}
       <div className="bg-zinc-900 hidden xl:block ">
       <ul className="bg-white h-[44px] w-[236px] flex justify-between ">
          <li className="h-[44px] w-[44px] border-2 text-2xl rounded-full flex items-center justify-center text-gray-500"><HiMiniHeart /></li>
          <li className="h-[44px] w-[44px] border-2 text-32xl rounded-full flex flex-col items-center justify-between text-gray-500"><GoDotFill className="ml-[28px] text-[#FF4423] h-[30px] w-[10px] " />
            <TbBellFilled className="h-[80px] w-[20px] mb-[6px] " /></li>
          <li className="h-[44px] w-[44px] border-2 text-2xl rounded-full flex items-center justify-center text-gray-500"><IoMdSettings /></li>
          <li className="h-[44px] w-[44px] border-2 text-2xl rounded-full flex items-center justify-center text-gray-500 bg-black">
            <Image  src={"/images/Image.png"} height={44} width={44} alt="img" />

          </li>
        </ul>
       </div>
        <hr/>
      </header>
    </>
  )
}

export default Header;