import Image from "next/image"
import down from "@/components/assesst/Caret--down (1).png"
import Navbar from "@/components/navbar1"
import frame from "@/components/assesst/Frame 143.png"
import lamp from "@/components/assesst/lamp.png"
import pink from "@/components/assesst/pink.png"
import bottle from "@/components/assesst/bottle.png"
import bluechair from "@/components/assesst/bluechair.png"
import yellow from "@/components/assesst/yellow.png"
import multiple from "@/components/assesst/multiplechairs.png"
import photo1 from "@/components/assesst/Photo (1).png"
import brownlamp from "@/components/assesst/brownlamp.png"
import Menu from "@/components/menu8"
import page from "@/components/assesst/Page Headers.png"
const ProductListing = () => {
    return (
        <div className="">
            <Navbar />
            <div className="py-5 hidden sm:block">
                <Image src={frame} alt="background image" width={1634} height={209} />
            </div>
            <div className="py-5 sm:hidden ">
                <Image src={page} alt="background image" />
            </div>
            <div className="hidden sm:flex items-center">
                <ul className=" flex gap-[40px]">
                    <li className="flex gap-1 pl-12">Category
                        <Image src={down} alt="" />
                    </li>
                    <li className="flex gap-1">Product type
                        <Image src={down} alt="" />
                    </li>
                    <li className="flex gap-1">Price
                        <Image src={down} alt="" />
                    </li>
                    <li className="flex gap-1">Brand
                        <Image src={down} alt="" />
                    </li>
                </ul>
                <div className=" pl-[900px] flex items-center gap-9 ">
                    <h2 className="font-[satoshi] font-normal text-sm leading-[21px]">Sorting by:</h2>
                    <h1 className="font-[satoshi] font-normal text-base leading-6 flex">Date added
                        <Image src={down} alt="" />
                    </h1>
                </div>
            </div>
                <div className="sm:hidden gap-20 flex text-black">
                    <button className="h-[56px] w-[163px] px-6 flex bg-[#f9f9f9] m-2"><h3 className="font-[satoshi] font-normal text-base leading-6 p-4">Filter</h3>
                    <Image className="mx-1 my-5"  src={down} alt="" />
                    </button>
                    <button className="h-[56px] w-[163px]  bg-[#f9f9f9] flex m-2"><h3 className="font-[satoshi] font-normal text-base leading-6 p-4"> Sorting</h3>
                    <Image className ="mx-1 my-5" src={down} alt="" />
                    </button>
                </div>
            {/* first section images */}
            <div className=" sm:flex hidden sm:gap-5 py-5 ">
                {/* 1st picture */}
                <div className=""> <div className=" py-[24px] sm:pl-[85px] ">
                    <Image className="sm:hidden" src={bluechair} alt='chair image ' width={280} height={375} />
                    <Image className=" hidden sm:block" src={bluechair} alt='chair image ' width={335} height={420} />
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
                    <Image className="sm:hidden" src={pink} alt='vase image ' width={280} height={375} />
                    <Image className="sm:block hidden" src={pink} alt='vase image ' width={335} height={420} />
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
                        <Image className="sm:hidden" src={bottle} alt='vase ' width={280} height={375} />
                        <Image className="sm:block hidden" src={bottle} alt='vase ' width={335} height={420} />
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
                    <Image className="sm:hidden" src={lamp} alt='lamp image' width={280} height={375} />
                    <Image className="sm:block hidden" src={lamp} alt='lamp image' width={335} height={420} />

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
            {/* second section images */}
            <div className=" sm:flex sm:py-5 py-2 sm:gap-5 gap-5 sm:p-0 p-3 grid grid-cols-2">
                {/* 1st picture */}
                <div className=""> <div className=" py-[24px] sm:pl-[85px] ">
                    <Image className="sm:hidden" src={brownlamp} alt='Brown lamps image ' width={280} height={375} />
                    <Image className="sm:block hidden" src={brownlamp} alt='Brown lamps image ' width={335} height={420} />

                </div>
                    <div className="font-[clash display] font-normal text-xl sm:pl-[85px] leading-7 px-2">
                        <h1 className="w-52">
                            The Brown Lamps
                        </h1>
                        <p className="font-[satoshi] text-lg leading-[27px] font-normal">
                            £250
                        </p>
                    </div></div>
                {/* 2nd picture */}

                <div className=""> <div className=" py-[24px] sm:pl-2 ">
                    <Image className="sm:hidden" src={photo1} alt='Small vase image ' width={280} height={375} />
                    <Image className="sm:block hidden" src={photo1} alt='Small vase image ' width={335} height={420} />

                </div>
                    <div className="font-[clash display] font-normal text-xl leading-7 px-2">
                        <h1>
                            The Small Vase
                        </h1>
                        <p className="font-[satoshi] text-lg leading-[27px] font-normal">
                            £155
                        </p>
                    </div></div>
                {/* 3rd picture */}
                <div className="">
                    <div className=" py-[24px] sm:pl-2 ">
                        <Image className="sm:hidden" src={yellow} alt='Yellow chair image ' width={280} height={375} />
                        <Image className="sm:block hidden" src={yellow} alt='Yellow chair image ' width={335} height={420} />

                    </div>
                    <div className="font-[clash display] font-normal text-xl leading-7 px-2">
                        <h1>
                            The Yellow Chair
                        </h1>
                        <p className="font-[satoshi] text-lg leading-[27px] font-normal">
                            £125
                        </p>
                    </div></div>
                {/* 4th picture */}
                <div className=""><div className=" sm:pl-2 py-[24px] ">
                    <Image className="sm:hidden" src={multiple} alt='multiple chairs image' width={280} height={375} />
                    <Image className="sm:block hidden" src={multiple} alt='multiple chairs image' width={335} height={420} />

                </div>
                    <div className="font-[clash display] font-normal text-xl leading-7 px-2">
                        <h1 className="w-52">
                            The Multiple Chairs
                        </h1>
                        <p className="font-[satoshi] text-lg leading-[27px] font-normal">
                            £399
                        </p>
                    </div>

                </div> </div>
                {/* third setion images */}
                <div className=" sm:flex sm:py-5 py-2 sm:gap-5 gap-5 sm:p-0 p-3  grid grid-cols-2">
                {/* 1st picture */}
                <div className=""> <div className=" py-[24px] sm:pl-[85px] ">
                    <Image className="sm:hidden" src={bluechair} alt='chair image ' width={280} height={375} />
                    <Image className="sm:block hidden" src={bluechair} alt='chair image ' width ={335} height={420} />

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
                    <Image className="sm:hidden" src={pink} alt='vase image ' width={280} height={375} />
                    <Image className="sm:block hidden" src={pink} alt='vase image ' width={335} height={420} />

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
                        <Image className="sm:hidden" src={bottle} alt='vase ' width={280} height={375} />
                        <Image className="sm:block hidden" src={bottle} alt='vase ' width={335} height={420} />

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
                    <Image className="sm:hidden" src={lamp} alt='lamp image' width={280} height={375} />
                    <Image className="sm:block hidden" src={lamp} alt='lamp image' width={335} height={420} />

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
                <Menu />
        </div>
    )
}
export default ProductListing