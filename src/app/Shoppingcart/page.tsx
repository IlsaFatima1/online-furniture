import product from "@/components/assesst/Product Image.png"
import Image from "next/image"
import Navbar from "@/components/navbar1"
export default function Shoppingcart() {
    return (
        <div className="">
            <Navbar />
            <div className="px-20 " >
                <h1 className="leading-[50.4px] py-10 text-[36px] font-[clash display] font-normal">Your shopping cart</h1>

                <ul className="grid grid-cols-3 justify-between">
                    <li className="px-20 leading-[19.6px] text-sm font-normal font-[clash display]">Product</li>
                    <li>Quantity</li>
                    <li className="px-20">Total</li>
                </ul><hr />
                
                {/* image no 1 */}
                <div className=""></div>
                <div className="py-5 flex">
                    <Image src={product} alt="product image" width={109} height={134} />
                   <div className="px-4"> <h1 className="font-normal font-[clash display] leading-7 text-xl">Graystone vase</h1>
                    <p className="py-3 font-[satoshi] font-normal text-sm leading-[21px] w-[179px] h-[42px]">A timeless ceramic vase with
                        a tri color grey glaze.</p>
                        <p className="font-normal py-5 font-[satoshi] text-base leading-6">£85</p>
                </div>
                
                <div className="">
                {/* image no 2 */}
                {/* <div className="py-5 flex">
                    <Image src={product} alt="product image" width={109} height={134} />
                   <div className="px-4"> <h1 className="font-normal font-[clash display] leading-7 text-xl">Graystone vase</h1>
                    <p className="py-3 font-[satoshi] font-normal text-sm leading-[21px] w-[179px] h-[42px]">A timeless ceramic vase with
                        a tri color grey glaze.</p>
                        <p className="font-normal py-5 font-[satoshi] text-base leading-6">£85</p>
                </div>
                </div> */}
            </div></div>
        </div></div>
    )
}