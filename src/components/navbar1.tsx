import Link from "next/link"
import search from "@/components/assesst/Search.png"
import cart from "@/components/assesst/Shopping--cart.png"
import Image from "next/image"
import avatar from "@/components/assesst/User--avatar.png"
export default function Navbar() {
  return (
    <>
      <div className="h-full w-full text-black bg-[#FFFFFF]">

        <div className="w-[65px] h-[30px] sm:left-[687px]  m-5 items-center
"><br />
          <div className="hidden sm:flex ">
            <Image className="" src={search} alt="search bar" />
          </div>
          <h1 className="sm:px-[600px] px-5 sm:top-[5px] top-3 py-4 sm:py-1 font-[clash display] font-normal text-2xl leading-[29.52px]">Avion</h1>
        </div>
        <div className="flex  sm:hidden">
          <div className="pl-[250px] px-6  sm:hidden">
            <Image className="" src={search} alt="search bar" width={15} height={15} />
          </div><div >
            <Link href="/Shoppingcart"><Image src={cart} alt="shopping cart" width={15} height={15} /></Link></div>
          {/* ham burger */}
          <div className="px-7">
          <button className="  block sm:hidden my-1   rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-3 h-[1px] bg-gray-600 mb-[2px]"></div>
            <div className="w-3 h-[1px] bg-gray-600 mb-[2px]"></div>
            <div className="w-3 h-[1px] bg-gray-600 mb-[2px]"></div>
            <div className="w-3 h-[1px] bg-gray-600 "></div>
            <div className="absolute left-[350px] h-[435px] w-32 bg-white border opacity-0
        group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul className="flex flex-col items-center w-full text-base cursor-pointer pb-11 pt-10">
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Plantpots</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Ceramics</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Tables</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Chairs</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Crockery</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Tableware</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Cutlery</li>
              </ul>
            </div>
          </button>
          </div>
        </div>

        <br /><br />
        <div className="hidden sm:flex sm:pl-[1525px] sm:top-4 sm:gap-[20px]">
          <Link href="/Shoppingcart"><Image src={cart} alt="shopping cart" /></Link>
          <Image src={avatar} alt="avatar"></Image>
        </div>
        <hr className="hidden sm:flex" />
        <div className="pt-7  sm:flex hidden">
          <ul className="flex flex-row w-[675px] h-[22px] px-[350px] top-[90px] left-[382px] gap-[44px]">
            <a href="#"> <li className="font-[satoshi] font-normal text-base leading-[21.6px]">Plantpots</li></a>
            <a href="#"> <li className="font-[satoshi] font-normal text-base leading-[21.6px]">Ceramics</li></a>
            <a href="#"> <li className="font-[satoshi] font-normal text-base leading-[21.6px]">Tables</li></a>
            <a href="#"> <li className="font-[satoshi] font-normal text-base leading-[21.6px]">Chairs</li></a>
            <a href="#"> <li className="font-[satoshi] font-normal text-base leading-[21.6px]">Crockery</li></a>
            <a href="#"> <li className="font-[satoshi] font-normal text-base leading-[21.6px]">Tableware</li></a>
            <a href="#"> <li className="font-[satoshi] font-normal text-base leading-[21.6px]">Cutlery</li></a>
          </ul>
        </div>



      </div> </>
  )
}