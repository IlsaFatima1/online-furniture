import Image from "next/image"
import delivery from "@/components/assesst/Delivery.png"
import vector from "@/components/assesst/Vector.png"
import cart from "@/components/assesst/Shopping--cart.png"
import search from "@/components/assesst/Search.png"
import avatar from "@/components/assesst/User--avatar.png"
import black from "@/components/assesst/blackchair.png"
import lamp from "@/components/assesst/lamp.png"
import pink from "@/components/assesst/pink.png"
import bottle from "@/components/assesst/bottle.png"
import bluechair from "@/components/assesst/bluechair.png"
import Link from "next/link"
import Feature from "@/components/feature3"
import Get from "@/components/get6"
import React from "react";
import { AiFillFacebook } from "react-icons/ai";

import { BsInstagram } from "react-icons/bs";
import { FaSkype } from "react-icons/fa";

import { FaPinterest } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
const Blackchair = () => {
    return (
        <>
            <div className="h-[900px] sm:h-[1050px]">
                <div className="sm:h-[41px] h-[60px] w-full bg-[#2A254B]">
                    <div className="flex justify-center items-center gap-2 py-3 sm:mx-[500px] px-3  sm:w-[440px] w-[350px] sm:py-2">
                        <Image className="text-[#2A254B]" src={delivery} alt="delivery truck" width={20} height={20} />
                        <p className="font-satoshi text-white text-sm">

                            Free delivery on all orders over £50 with code easter checkout.{" "}


                        </p>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-3 right-4 sm:pr-16  flex">
                        <Image src={vector} alt="vector" width={16} height={16} />
                    </div>
                </div>
                <div className="sm:hidden items-center flex  gap-2">
                    <h1 className="  font-[clash display] font-normal text-2xl leading-[29.8px] p-5">Avion</h1>
<div className="ml-[150px] flex gap-3">
                    
                    <Image src={search} alt="search bar" width={15} height={15} />
                    <Link  href="/Shoppingcart">
                    <Image src={cart} alt="shopping cart" width={15} height={15} /> </Link>
                    <Image src={avatar} alt="avatar" width={15} height={15} />
                    </div>
                    {/* ham burger */}
                    <button className="  block sm:hidden my-1 px-2 py-2  rounded focus:outline-none hover:bg-gray-200 group">
                        <div className="w-3 h-[1px] bg-gray-600 mb-[2px]"></div>
                        <div className="w-3 h-[1px] bg-gray-600 mb-[2px]"></div>
                        <div className="w-3 h-[1px] bg-gray-600 mb-[2px]"></div>
                        <div className="w-3 h-[1px] bg-gray-600 "></div>
                        <div className="absolute left-[250px] h-[440px] w-32 bg-white border opacity-0
        group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                            <ul className="flex flex-col items-center w-full text-base cursor-pointer pb-11 pt-10">
                                <li className="hover:bg-gray-200 py-4 px-6 w-full">Plants pot</li>
                                <li className="hover:bg-gray-200 py-4 px-6 w-full">Ceramics</li>
                                <li className="hover:bg-gray-200 py-4 px-6 w-full">Tables</li>
                                <li className="hover:bg-gray-200 py-4 px-6 w-full">Chairs</li>
                                <li className="hover:bg-gray-200 py-4 px-6 w-full">Crockery</li>
                                <li className="hover:bg-gray-200 py-4 px-6 w-full">Tableware</li>
                                <li className="hover:bg-gray-200 py-4 px-6 w-full">Cutlery</li>
                            </ul>
                        </div>
                    </button>
                </div>
                <div className="sm:flex hidden">
                    <h1 className="font-[clash display] px-11 font-normal text-2xl leading-[29.8px] p-5">Avion</h1>


                    <br />
                    {/* images */}
                    <div className="sm:flex py-8 pl-[1150px] gap-4 mx-10 hidden">
                        <Image className="" src={search} alt="search bar" height={16} width={16} />
                        <Link href="/Shoppingcart">  <Image src={cart} alt="shopping cart" height={16} width={16} /> </Link>
                        <Image src={avatar} alt="" height={16} width={16} />
                    </div>
                </div>
              

                {/* image blackchair */}
                <div className="sm:flex">
                    < Image className="hidden sm:block " src={black} alt="black chair" />
                    <Image className="sm:hidden" src={black} alt="black chair" width={390} height={300} />
                    {/* text */}
                    <div className="sm:p-14 px-5 sm:py-0 py-7">
                        <h1 className="sm:leading-[44.6px] leading-[33.6px] text-2xl sm:text-[36px] font-[clash display] font-normal">The Dandy Chair</h1>
                        <p className=" py-3 leading-6 sm:leading-[32px] text-xl sm:text-2xl font-[satoshi] pb-11 font-normal">£250</p>


                        <h1 className="leading-[19.68px] pb-4 text-base font-[clash display] font-normal"> Product description</h1>
                        <p className="sm:w-[498px] sm:h-[56px] w-[312px] h-[84px] leading-[21.6px] text-sm sm:text-base font-[satoshi] font-normal">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair
                            is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                        <ul className="py-8">
                            <li className="leading-[21.6px]  text-base font-[satoshi] font-normal"> * Premium material</li>
                            <li className="leading-[21.6px] text-base font-[satoshi] font-normal">* Handmade upholstery</li>
                            <li className="leading-[21.6px] text-base font-[satoshi] font-normal">* Quality timeless classic</li>
                        </ul>

                         <h2 className="leading-[19.68px] font-[clash display] text-base font-normal py-5">Dimensions</h2>
                     <div className="flex items-center gap-20"> 
                        <ul className="">
                            <li className="leading-[17.22px] font-[clash display] text-sm font-normal">Height</li>
                            <li className="leading-[21.6px] font-[clash display] sm:py-4 py-2 text font-normal">110cm</li>
                        </ul>
                        <ul className=" ">
                            <li className="leading-[21.6px] font-[clash display] text-base font-normal">Width</li>
                            <li className="leading-[21.6px] font-[clash display] sm:py-4 py-2 text-base font-normal">50cm</li>

                        </ul>
                        <ul>    
                            <li className="leading-[17.22px] font-[clash display] text-sm font-normal">Depth</li>
                            <li className="leading-[21.6px] font-[clash display] sm:py-4 py-2 text-base font-normal">75cm</li>
                        </ul>
                        </div> 
                        <div className="sm:flex py-12 items-center gap-4">
                            <h1 className="text-base leading-[22.4px] font-[clash display] font-normal hidden sm:block">Amount</h1>
                            <h1 className=" px-5 text-base leading-[22.4px] font-[clash display] font-normal pb-5 sm:hidden">Quantity</h1>
                            <div className="box sm:w-[122px] w-[342px] h-[46px] flex justify-between sm:h-[42px] bg-[#f9f9f9]">
                                <p className="px-3 text-[#CAC6DA] py-2">-</p>
                                <p className="text-center py-2">1</p>
                                <p className="px-3 text-[#CAC6DA] py-2">+</p>

                            </div>
                            <div className="sm:px-52 py-5 sm:py-0 ">
                               <Link href="/Shoppingcart"> <button className="w-[342px] sm:w-[143px] h-[56px] hover:bg-[#2A2fdd] bg-[#2A254B]">
                                    <p className="font-[satoshi] font-normal text-base leading-6 text-white">Add to cart</p>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second section */}
            <div className="w-full  sm:h-[761px] h-[1351px] sm:pt-0 pt-[450px] ">,
                <div className="sm:px-[85px] px-9 ">
                    <p className="leading-[39.36px] text-[32px] font-normal font-[clash display]">
                        You might also like
                    </p>
                </div>
                <div className=" sm:flex sm:gap-5 gap-4 grid grid-cols-2">
                    {/* 1st picture */}
                    <div className=""> <div className=" py-[24px] pl-4 sm:pl-[85px] ">
                    <Image className="sm:hidden " src={bluechair} alt='chair image ' width={280} height={375} />
                        <Image className="sm:block hidden" src={bluechair} alt='chair image ' width={335} height={420} />
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

                    <div className=""> <div className=" py-[24px] sm:pl-2 sm:pr-0 pr-4 ">
                        <Image className="sm:hidden" src={pink} alt='pink vase image ' width={280} height={375} />
                        <Image className="sm:block hidden" src={pink} alt='pink vase image ' width={335} height={420} />

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
                        <div className=" py-[24px]  sm:pl-2 pl-4 ">
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
                    <div className=""><div className=" sm:pl-2 py-[24px] pr-4 sm:pr-0 ">
                        <Image className="sm:hidden" src={lamp} alt='lamp ' width={280} height={375} />
                        <Image className="sm:block hidden" src={lamp} alt='lamp ' width={335} height={420} />

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
                <Link href="/ProductListing">    <button className="sm:w-[170px] sm:h-[56px] w-[342px] h-[56px] top-[649px] pt-[16px] hover:bg-slate-300 pb-[32px] gap-[10px] bg-[#F9F9F9]">
                        <h1 className=" font-[satoshi] font-normal text-[16px] leading-6 text-[#2A254B]">
                            View collection  </h1></button></Link>
                </div>
            </div>
          <div className="sm:h-[300px] h-[850px]">  <Feature /></div>
            <Get />
            {/* menu */}
            <div className="sm:h-[420px] h-[668px]  w-screen bg-[#2A254B] text-white">
                            <div className="sm:flex ">
            <div className="flex ">
              {/* list no 1A */}
              <div className="w-[175px] h-[108px] top-[58px] px-6 sm:px-[82px] py-14 sm:py-20">
                <h1 className="font-[clash display] leading-[50.4px] text-4xl font-normal">Avion</h1>
                <ul className="ga">
                  <li className="w-[144px] h-[19px] leading-[18.8px] py-6 text-sm font-normal font-[satoshi]">21 New York Street</li>
                  <li className="w-[89px] h-[19px] leading-[18.8px] py-4 text-sm font-normal font-[satoshi]">New York City</li>
                  <li className="w-[152px] h-[19px] leading-[18.8px] py-4 text-sm font-normal font-[satoshi]">United States of America</li>
                  <li className="w-[72px] h-[19px] leading-[18.8px] py-4 text-sm font-normal font-[satoshi]">432 34</li>
                </ul>
              </div>
                                    {/* icons */}
                                  <div className=" py-[70px] sm:px-[120px]">
                                    <h1 className="font-[clash display] font-normal px-20 text-base leading-[19px]">Social links</h1>
                                    <div className="sm:flex  text-white py-7 items-center space-x-8">
             
                                         <h2 className="flex gap-6 px-20 sm:px-0"><SiLinkedin  aria-label="LinkedIn" />
                                        <AiFillFacebook aria-label="Facebook" />
                                        <BsInstagram aria-label="Instagram" />
                                        </h2>
                                       <h2 className="flex gap-6 px-12 sm:px-0 py-5"> <FaSkype aria-label="Skype" />
                                        <FaTwitter aria-label="Twitter" />
                                        <FaPinterest aria-label="Pinterest" /></h2>
                                    </div></div>
                                {/* list no 1 */}
            
                                <div className="w-[175px] h-[108px] top-[58px] hidden sm:block sm:px-[100px] py-14 sm:py-20">
                                    <ul className="text-white">
                                        <li className="leading-[19.68px] text-base py-1 font-normal font-[clash display]">Menu</li>
                                        <li className="w-[72px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">New arrivals</li>
                                        <li className="w-[69px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Best sellers</li>
                                        <li className="w-[99px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Recently viewed</li>
                                        <li className="w-[108px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Popular this week</li>
                                        <li className="w-[74px] leading-[18.8px] py-1 text-sm font-normal font-[satoshi]">All products</li>
                                    </ul>
                                </div>
                                {/* list no 2 */}
                                <div className="w-[175px] h-[108px] top-[58px] sm:px-[150px] px-12 py-14 sm:py-20">
                                    <ul className="text-white">
                                        <li className="leading-[19.68px] text-base py-1 font-normal font-[clash display]">Categories</li>
                                        <li className="w-[72px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Crockery</li>
                                        <li className="w-[69px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Furniture</li>
                                        <li className="w-[99px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Homeware</li>
                                        <li className="w-[108px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Plant pots</li>
                                        <li className="w-[74px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Chairs</li>
                                        <li className="w-[74px] leading-[18.8px] py-1  text-sm font-normal font-[satoshi]">Crockery</li>
                                    </ul>
                                </div></div>
                                {/* list no 3 */}
                              <div className="flex"> 
                                 <div className="w-[175px] h-[108px] top-[58px] sm:px-[110px] px-6  py-14 sm:py-20">
                                    <ul className="">
                                        <li className="w-[108px] leading-[19.68px] text-base py-1 font-normal font-[clash display]">Our company</li>
                                        <li className="w-[72px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">About us</li>
                                        <li className="w-[69px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Vacancies</li>
                                        <li className="w-[99px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Contact us</li>
                                        <li className="w-[108px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Privacy </li>
                                        <li className="w-[120px] leading-[18.8px] py-1 text-sm font-normal font-[satoshi]">Return privacy</li>
                                    </ul>
                              
                            </div>
                            {/* list no 1 repeat */}
                            <div className="w-[175px] h-[108px] top-[58px] sm:hidden px-6  py-14 ">
                                    <ul className="text-white">
                                        <li className="leading-[19.68px] text-base py-1 font-normal font-[clash display]">Menu</li>
                                        <li className="w-[72px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">New arrivals</li>
                                        <li className="w-[69px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Best sellers</li>
                                        <li className="w-[99px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Recently viewed</li>
                                        <li className="w-[108px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Popular this week</li>
                                        <li className="w-[74px] leading-[18.8px] py-1 text-sm font-normal font-[satoshi]">All products</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="sm:py-[90px] sm:px-20 px-14 py-44 ">
                              {/* line */}
                                <div className="sm:w-[1550px] w-[300px] h-[1px] bg-[#4E4D93]"></div>
                            
                                <span className="flex">
                                    <div className=" sm:py-8 py-7  w-[164px] sm:px-5 px-[60px]">
                                        <h1 className="leading-[18.9px]  w-[164px] font-normal font-[satoshi] text-sm">
                                            Copyright 2022 Avion LTD</h1></div>
            
                                </span>
                                </div>
            
            
                  </div>

        </>
    )
}
export default Blackchair