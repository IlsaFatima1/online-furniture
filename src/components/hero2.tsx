import Image from "next/image"
import chair from "@/components/assesst/Right Image.png"
const Hero = ()=>{
  return(
  <>
    <div className="w-[1200px] h-[704px] " >
        
        
<div className=" flex w-[600px] top h-[702px] sm:w-[1100px] sm:h-[584px]  sm:top-[60px] sm:mx-[90px] sm:my-[60px] bg-[#2A254B] ">
<div className=" px-11 sm:w-[513px] sm:h-[187px] sm:top-[60px] sm:left-[60px] sm:gap-[px] opacity: 0px;
">
    <div className=" w-[500px]  h-[135px] top-[40px] left-[24px] sm:left-6 sm:w-[513px] sm:h-[90px]  ">
<h1 className="font-[clash display] font-normal py-11 px-14 text-white leading-[60px] text-[40px] sm:text-[32px] sm:leading-[44.8px]">
The furniture brand for the future, with timeless designs
</h1></div><br />
<div className=" hidden sm:flex w-[170px] h-[56px] py-[16px] px-[32px] gap-[10px] m-16 bg-[#F9F9F926]">
    <h2 className="font-[satoshi] font-normal text-base leading-6 text-white ">View collection</h2>
</div>


<div className=" p-11 w-[390px] h-[135px] sm:w-[602px] sm:h-[81px] py-40 sm:py-36 text-white sm:px-11 sm:top-[443px] sm:left-[60px]">
    <h3 className="font-[satoshi] font-normal text-lg sm:leading-7 leading-10">A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</h3>
</div>
<div className="py-20 px-11">
<div className="w-[342px] sm:hidden py-4 px-28  h-[56px]  bg-[#F9F9F926]">
    <h2 className=" font-[satoshi]  font-normal text-base leading-6 text-white ">View collection</h2>
</div></div></div>
<div className="hidden sm:flex  left-0 ">
          <div className="mx-20 w-[520px] h-[704px] ">
          <Image src={chair} alt="chair" ></Image>
          </div></div>
</div>
</div>
    </>
)}
export default Hero