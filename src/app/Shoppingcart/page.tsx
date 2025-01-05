import Link from "next/link"
import product from "@/components/assesst/Product Image (3).png"
import Menu from "@/components/menu8"
import Image from "next/image"
import Navbar from "@/components/navbar1"
import white from "@/components/assesst/Product Image.png"
export default function Shoppingcart() {
    return (
        <div className="">
            <Navbar />
            <div className="sm:px-20 px-6 " >
                <h1 className="leading-[50.4px] py-10 sm:text-[36px] text-2xl font-[clash display] font-normal">Your shopping cart</h1>

                <ul className="sm:grid grid-cols-3 justify-between hidden ">
                    <li className="px-20 leading-[19.6px] text-sm font-normal font-[clash display]">Product</li>
                    <li>Quantity</li>
                    <li className="px-20">Total</li>
                </ul><hr className="hidden sm:block"/>

                {/* image no 1 */}
                <div className=" ">
                    <div className="py-5 flex">
                        <Image src={product} alt="product image" width={109} height={134} />
                        <div className="px-4"> <h1 className="font-normal font-[clash display] leading-7 text-base sm:text-xl">Graystone vase</h1>
                            <p className="py-3 font-[satoshi] font-normal text-sm leading-[21px] w-[170px] sm:w-[179px] h-[42px]">A timeless ceramic vase with
                                a tri color grey glaze.</p>
                            <p className="font-normal sm:py-5 py-2 font-[satoshi] text-base leading-6">£85</p>
                            <p className="w-[6px] sm:hidden h-[22px]">1</p>
                        </div>
                        <p className="  w-[6px] h-[22px] sm:block hidden px-[100px]">1</p>
                        <p className="hidden sm:block w-[33px] h-[27px] px-[330px]"> £85</p>
                    </div>
                    <div className="">
                        {/* image no 2 */}
                        <div className="sm:py-5 flex">
                            <Image src={white} alt="product image" width={109} height={134} />
                            <div className="px-4"> <h1 className="font-normal font-[clash display] leading-7 text-base sm:text-xl">Basic white vase</h1>
                                <p className="py-3 font-[satoshi] font-normal text-sm leading-[21px] w-[155px] sm:w-[179px] h-[42px]">Beautiful and simple this is
                                one for the classics</p>
                                <p className="font-normal sm:py-5 py-2 font-[satoshi] text-base leading-6">£85</p>
                                <p className="w-[6px] sm:hidden h-[22px]" > 1</p>
                            </div>
                            <p className="hidden sm:block w-[6px] h-[22px] px-[100px]">1</p>
                            <p className="hidden sm:block w-[33px] h-[27px] px-[330px]"> £125</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex py-3 sm:py-0 px-[170px] sm:px-[800px]">
                        <h1 className="font-[clash display] font-normal text-[20px] px-4 leading-7">Subtotal</h1>
                        <h2 className="text-2xl">£210</h2>
                    </div>
                    
                    <div className="sm:px-[700px] px-[80px] sm:py-3">
                        <p className=" w-[282px] h-[21px] font-[satoshi] font-normal text-sm leading-[21px]">Taxes and shipping are calculated at checkout</p>
                    </div>
                    <div className="sm:px-[800px] py-6 sm:py-2 sm:pb-14">
                    <Link href="/Aboutpage">  <button className="h-[56px] w-[330px] hover:bg-[#2A2520] sm:w-[172px] bg-[#2A254B] text-white">
                        <h1 className="font-[satoshi] font-normal text-base leading-6">Go to checkout</h1>
                        </button></Link>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    )
}