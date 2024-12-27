import Image from "next/image";
import photo1 from "@/components/assesst/Photo (1).png"
import parent from "@/components/assesst/Parent.png"
import parent1 from "@/components/assesst/Parent (1).png"
import photo from "@/components/assesst/Photo.png"
const listing = () => {
    return (
        <>
        
        
        <div className="w-full sm:h-[761px] h-[811px] sm:pt-0 pt-[450px] ">
            <div className="sm:px-[85px] px-9">
                <p className="leading-[39.36px] text-[32px] font-normal font-[clash display]">
                New ceramics
                </p>
            </div>
            <div className=" sm:flex  grid grid-cols-2">
            {/* 1st picture */}
            <div className=""> <div className=" py-[24px] sm:pl-[85px] ">
<Image src={photo1} alt='chair image ' width={280} height={375}/>
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
           
            <div className=""> <div className=" py-[24px] sm:pl-2 ">
<Image src={parent} alt='vase image ' width={280} height={375}/>
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
            <div className=" py-[24px] sm:pl-2 ">
<Image src={parent1} alt='vase ' width={280} height={375}/>
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
           <div className=""><div className=" sm:pl-2 py-[24px] ">
<Image src={photo} alt='lamp ' width={280} height={375}/>
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
     <div className=" px-52  py-11 sm:py-20 sm:px-[550px]">
     <button className="sm:w-[120px] sm:h-[56px] top-[649px] pt-[16px] pb-[32px] gap-[10px] bg-[#F9F9F9]">
        <h1 className="w-[124px] h-[24px] font-[satoshi] font-normal text-[16px] leading-6 text-[#2A254B]">
        View collection  </h1></button>
        </div>
        </div> 
     </>
    )
}
export default listing