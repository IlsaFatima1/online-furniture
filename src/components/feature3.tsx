import Image from "next/image"
import check from "@/components/assesst/Checkmark--outline.png"
import purchase from "@/components/assesst/Purchase.png"
import  sprout from "@/components/assesst/Sprout.png"
import delivery from "@/components/assesst/Delivery.png"
const feature = () => {
    return(
<>
<div className="h-[355px] w-src">
    <div className=" top-[60px] sm:px-[450px] px-9 sm:py-0 py-14 sm:w-[500px] w-[400px] ">
<h1 className="font-[clash display] sm:w-[366px] w-[300px] h-[34px] font-normal leading-[33.6px] text-[24px] ">
What makes our brand different 
</h1>

    </div>
    <div className="sm:grid grid-cols-4 sm:py-8 py-0">
{/* 1st card */}
    <div className=" sm:top-[145px] pt-6 gap-[16px] px-9 sm:px-[85px] sm:py-7 py-0">
        <div className="">
            <Image src={delivery} alt="delivery van" />
        </div>
      <div className="py-3 ">  <h1 className="text-xl leading-7 w-[199px] h-[28px] font-[clash display] font-normal">Next day as standard</h1>
    </div>
   <div className="h-[48px] w-[250px]">
    <p className="font-[satoshi] font-normal text-base leading-6">Order before 3pm and get your order
    the next day as standard</p></div>
</div>
{/* 2nd card */}
<div className=" top-[145px] pt-6  py-0 px-9 sm:px-14 sm:py-7">
        <div className="">
            <Image src={check} alt="check mark" />
        </div>
      <div className="py-3">  <h1 className="text-xl leading-7 font-[clash display] font-normal">Made by true artisans</h1>
    </div>
   <div className="h-[48px] w-[250px]">
    <p className="font-[satoshi] font-normal text-base leading-6">Handmade crafted goods made with
    real passion and craftmanship</p></div>
</div>
{/* 3rd card */}
<div className=" pt-6 top-[145px] gap-[16px] px-9  py-0 sm:py-7">
        <div className="">
            <Image src={purchase} alt="purchase icon" />
        </div>
      <div className="py-3">  <h1 className="text-xl leading-7 font-[clash display] font-normal">Unbeatable prices</h1>
    </div>
   <div className="h-[48px] w-[250px]">
    <p className="font-[satoshi] font-normal text-base leading-6">For our materials and quality you won’t find
        better prices anywhere</p></div>
</div>
{/* 4th card */}
<div className=" top-[145px] px-9 pt-6 py-0 gap-[16px]  sm:py-7">
        <div className="">
            <Image src={sprout} alt="plant icon" />
        </div>
      <div className="py-3">  <h1 className="text-xl leading-7 font-[clash display] font-normal">Recycled packaging</h1>
    </div>
   <div className="h-[48px] w-[250px]">
    <p className="font-[satoshi] font-normal text-base leading-6">We use 100% recycled packaging to ensure
        our footprint is manageable</p></div>
</div>
</div>
</div>
</>
    )
}
 export default feature