import Image from "next/image";
import lamp from "@/components/assesst/lamp.png"
import pink from "@/components/assesst/pink.png"
import bottle from "@/components/assesst/bottle.png"
import bluechair from "@/components/assesst/bluechair.png"
import Link from "next/link"
const listing = () => {
    return (
        <>
        
        
        <div className="w-full sm:h-[761px] h-[1301px] sm:pt-0 pt-[450px] ">
            <div className="sm:px-[85px] px-5">
                <p className="sm:leading-[39.36px] leading-6 text-xl sm:text-[32px] font-normal font-[clash display]">
                New ceramics
                </p>
            </div>
            <div className=" sm:flex sm:gap-5 gap-4 grid grid-cols-2">
            {/* 1st picture */}
            <div className=""> <div className=" py-[24px] sm:pl-[85px] pl-4 ">
<Image src={bluechair} alt='chair image ' width={335} height={420}/>
            </div>
            <div className="font-[clash display] font-normal text-xl sm:pl-[85px] leading-7 px-2">
                <h1>
                The Dandy chair
                </h1>
                <p className="font-[satoshi] text-lg leading-[27px] font-normal">
                £250
                </p>
            </div></div>
            {/* 2nd picture */}
           
            <div className=""> <div className=" py-[24px] pr-4 sm:pr-0 sm:pl-2 ">
<Image src={pink} alt='pink vase image ' width={335} height={420}/>
            </div>
            <div className="font-[clash display] font-normal text-xl leading-7 px-2">
                <h1>
                Rustic Vase Set
                </h1>
                <p className="font-[satoshi] text-lg leading-[27px] font-normal">
                £155
                </p>
            </div></div>
            {/* 3rd picture */}
            <div className="">
            <div className=" py-[24px] sm:pl-2 pl-4">
<Image src={bottle} alt='vase ' width={335} height={420}/>
            </div>
            <div className="font-[clash display] font-normal text-xl leading-7 px-2">
                <h1>
                The Silky Vase
                </h1>
                <p className="font-[satoshi] text-lg leading-[27px] font-normal">
                £125
                </p>
            </div></div>
            {/* 4th picture */}
           <div className=""><div className=" sm:pl-2 py-[24px] sm:pr-0 pr-4">
<Image src={lamp} alt='lamp ' width={335} height={420}/>
            </div>
            <div className="font-[clash display] font-normal text-xl leading-7 px-2">
                <h1>
                The Lucy Lamp 
                </h1>
                <p className="font-[satoshi] text-lg leading-[27px] font-normal">
                £399
                </p>
            </div>
           
     </div> </div>
     <div className=" px-5  py-11 sm:py-20 sm:px-[550px]">
   <Link href=" /Blackchair">
     <button className="sm:w-[170px] h-[56px] w-[342px] top-[649px] pt-[16px] pb-[32px] gap-[10px] hover:bg-slate-300 bg-[#F9F9F9]">
        <h1 className=" font-[satoshi] font-normal text-[16px] leading-6 text-[#2A254B]">
        View collection  </h1></button>
        </Link>
        </div>
        </div> 
     </>
    )
}
export default listing