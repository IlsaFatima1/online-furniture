import Image from "next/image"
import large from "@/components/assesst/Large.png"
import photo2 from "@/components/assesst/Photo (2).png"
import photo3 from "@/components/assesst/Photo (3).png"
import lamp from "@/components/assesst/lamp.png"
import pink from "@/components/assesst/pink.png"
import Link from "next/link"
const Product = () => {
    return (
        
      <div className="h-[580px] sm:h-[744px] w-screen sm:py-0 ">
        
        <div className="sm:pl-[85px] pl-3">
            <h1 className="font-[clash display] font-normal text-[20px] leading-[24px] sm:text-[32px] sm:leading-[44.8px]">Our popular products</h1>
        </div>
        <div className=" sm:flex gap-5 grid grid-cols-2">
            {/* 1st picture */}
            <div className="hidden  sm:block"> 
                <div className=" py-[24px] sm:pl-[85px] hidden sm:block ">

            <Image src={large} alt="Sofa Image"width={700} height={420}/>
    
            </div >
           
            <div className="font-[clash display] font-normal text-xl sm:pl-[85px] leading-7 px-2 hidden sm:block">
                <h1 className="">
                The Poplar suede sofa
                </h1>
                <p className="hidden sm:block font-[satoshi] text-lg leading-[27px] font-normal">
                £980
                </p>
            </div></div>
            {/* 1st B picture */}
            <div className="sm:hidden block"> <div className=" py-[24px] pl-2 ">

            <Image src={lamp} alt="Lamp Image"width={305} height={375}/>
    
            </div >
           
            <div className="font-[clash display] font-normal text-xl sm:pl-[85px] leading-7 px-2">
                <h1>
                The Lucy Lamp
                </h1>
                <p className="font-[satoshi] text-lg leading-[27px] font-normal">
                £399
                </p>
            </div></div>
            {/* 1st C picture */}
            <div className="sm:hidden block"> <div className=" py-[24px] pr-2 ">

<Image src={pink} alt=" pinkVase Image"width={305} height={375}/>

</div >

<div className="font-[clash display] sm:hidden block font-normal text-xl sm:pl-[85px] leading-7 px-2">
    <h1>
    Rustic Vase Set
    </h1>
    <p className="font-[satoshi] text-lg leading-[27px] font-normal">
    £155
    </p>
</div></div>
            {/* 2nd picture */}
           
            <div className=""> <div className=" py-[24px] sm:pl-2 sm:block hidden">
<Image src={photo2} alt='Chair Image ' width={335} height={420}/>
            </div>
           
            <div className="hidden sm:block font-[clash display] font-normal text-xl leading-7 px-2">
                <h1>
                The Dandy chair
                </h1>
                <p className="font-[satoshi] text-lg leading-[27px] font-normal">
                £250
                </p>
            </div></div>
            {/* 3rd picture */}
            <div className="">
            <div className=" py-[24px] sm:pl-2 sm:block hidden">
<Image src={photo3} alt='Chair Image' width={335} height={420}/>
            </div>
            <div className=" sm:block hidden font-[clash display] font-normal text-xl leading-7 px-2">
                <h1>
                The Dandy chair
                </h1>
                <p className="font-[satoshi] text-lg leading-[27px] font-normal">
                £250
                </p>
            </div></div>
        </div>
            <div className=" px-5  py-11 sm:py-20 sm:px-[700px]">
                <Link href="/ProductListing">
    
     <button className="sm:w-[170px] h-[56px] w-[342px] top-[649px] pt-[16px] pb-[32px] gap-[10px] hover:bg-slate-300 bg-[#F9F9F9]">
        <h1 className=" font-[satoshi] font-normal text-[16px] leading-6 text-[#2A254B]">
        View collection  </h1></button>
      </Link>
      </div>
       </div> 
    )
}
export default Product