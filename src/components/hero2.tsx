import Link from "next/link"
import Image from "next/image"
import chair from "@/components/assesst/Right Image.png"
const Hero = () => {
    return (
        <>
            <div className="w-[1200px] sm:h-[704px]  " >


                <div className=" flex w-[600px]  h-[600px] sm:w-[1200px] sm:h-[584px]  sm:top-[60px] sm:mx-[90px] sm:my-[60px] bg-[#2A254B] ">
                    <div className=" sm:px-11 sm:w-[513px] sm:h-[187px] sm:top-[60px] sm:left-[60px] sm:gap-[px] opacity: 0px;">
                        <div className="w-[342px] top-[40px] left-[24px] sm:left-6 sm:w-[513px] h-[90px]  ">
                            <h1 className="font-[clash display] font-normal py-11 px-5 sm:px-14 text-white text-[32px] leading-[44.8px]">
                                The furniture brand for the future, with timeless designs
                            </h1></div><br />
                            <Link href="/ProductListing"> <button className=" hidden sm:flex hover:bg-[#F9F9F910] w-[170px] h-[56px] py-[16px] px-[32px] gap-[10px] m-16 bg-[#F9F9F926]">
                            <h2 className="font-[satoshi] font-normal text-base leading-6 text-white ">View collection</h2>
                        </button></Link>


                        <div className=" px-5 sm:p-11 w-[390px] h-[135px] sm:w-[602px] sm:h-[81px] py-40 sm:py-36 text-white sm:px-11 sm:top-[443px] sm:left-[60px]">
                            <h3 className="font-[satoshi] font-normal text-lg sm:leading-7 leading-10">A new era in eco friendly furniture with Avelon, the French luxury retail brand
                                with nice fonts, tasteful colors and a beautiful way to display things digitally
                                using modern web technologies.</h3>
                        </div>
                        <div className="py-20 sm:px-11 px-5">
                        <Link href="/ProductListing">
                          <button className="w-[342px] hover:bg-[#F9F9F910] sm:hidden py-4 px-28  h-[56px]  bg-[#F9F9F926]">
                                 <h2 className=" font-[satoshi]  font-normal text-base leading-6 text-white ">View collection</h2>
                            </button>
                            </Link>
                            </div>
                            </div>
                    <div className="hidden sm:flex  left-0 ">
                        <div className="mx-[300px] w-[520px] h-[704px] ">
                            <Image src={chair} alt="chair" ></Image>
                        </div></div>
                </div>
            </div>
        </>
    )
}
export default Hero