// import Image from "next/image";
// import image1 from "@/components/assesst/Image (1).png"
// const Studio = () => {
//     return (
//         <div className="sm:h-[603px] w-screen  sm:py-11 flex">
//             <div className="px-[85px] ">
//                 <h1 className="w-[514px] h-[68] font-[clash display] font-normal text-[24px] leading-[33.6px]">
//                     From a studio in London to a global brand with
//                     over 400 outlets
//                 </h1>
//                 <p className=" w-[536px] h-[] py-7  leading-[21.6px] text-base font-normal font-[clash display]">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
//                 </p>

//                 <p className=" w-[536px] h-[] leading-[21.6px] py-3 pb-48 text-base font-normal font-[clash display]"> Handmade, and lovingly crafted furniture and homeware is what we live, breathe
//                     and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
//                 <button className="w-[150px] h-[56px]  bg-[#F9F9F9]">
//                 <h1 className="font-[satoshi] font-normal text-base leading-6  text-[#2A254B]"> Get in touch</h1>

//                 </button>
//             </div>
//             <div className="">
//                 <Image src={image1} alt="Room Corner"width={720} height={603} />
//             </div>
//         </div>
//     )
// }
// export default Studio
import Image from "next/image";
import image1 from "@/components/assesst/Image (1).png";

const Studio = () => {
    return (
        <section className="w-screen flex flex-col sm:flex-row items-start justify-start">
            {/* Text Section */}
            <div className="px-4 sm:px-[85px] sm:w-1/2 ">
                <h1 className="w-full max-w-[514px] font-[clash-display] font-normal text-[24px] leading-[33.6px]">
                    From a studio in London to a global brand with over 400 outlets
                </h1>
                <p className="w-full max-w-[536px] py-6 leading-[21.6px] text-base font-normal font-[clash-display]">
                    When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
                </p>
                <p className="w-full max-w-[536px] py-4 leading-[21.6px] sm:pb-44 pb-14 text-base font-normal font-[clash-display]">
                    Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
                </p>
                <button
                    className="w-full  sm:w-[150px] h-[56px] bg-[#F9F9F9]"
                    aria-label="Get in touch">
                    <h1 className="font-[satoshi] font-normal text-base leading-6 text-[#2A254B]">
                        Get in touch
                    </h1>
                </button>
            </div>
            {/* Image Section */}
            <div className="sm:w-1/2 flex justify-center items-center">
                <Image
                    src={image1}
                    alt="Room Corner"
                    className="w-full max-w-[720px] h-auto"
                />
            </div>
        </section>
    );
};

export default Studio;
