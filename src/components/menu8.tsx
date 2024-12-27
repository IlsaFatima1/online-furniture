import React from "react";
import { AiFillFacebook } from "react-icons/ai";

import { BsInstagram } from "react-icons/bs";
import { FaSkype } from "react-icons/fa";

import { FaPinterest } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";



const Menu = () => {
    return (
        <>
            <div className="sm:h-[420px] h-[868px]  w-screen bg-[#2A254B] text-white">
                <div className="sm:flex ">
<div className="flex ">
                    {/* list no 1 */}
                    <div className="w-[175px] h-[108px] top-[58px] px-[82px] py-20">
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
                    <div className="w-[175px] h-[108px] top-[58px] sm:px-[100px] px-56 py-20">
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
                    <div className="w-[175px] h-[108px] top-[58px] px-[100px]  py-52 sm:py-20">
                        <ul className="">
                            <li className="w-[108px] leading-[19.68px] text-base py-1 font-normal font-[clash display]">Our company</li>
                            <li className="w-[72px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">About us</li>
                            <li className="w-[69px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Vacancies</li>
                            <li className="w-[99px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Contact us</li>
                            <li className="w-[108px] leading-[18.8px] py-2 text-sm font-normal font-[satoshi]">Privacy </li>
                            <li className="w-[120px] leading-[18.8px] py-1 text-sm font-normal font-[satoshi]">Return privacy</li>
                        </ul>
                    </div>
                    {/* heading */}

                    <div className="sm:px-20 py-[50px] px-11 sm:py-20" >
                        <h1 className="font-normal font-[clash display] leading-[19.68px] pb-6 text-base">Join our mailing list</h1>
                        {/* box */}
                        <div className="flex"> <div className="box w-[324px] sm:w-[509px] h-[56px] bg-[#FFFFFF26]">
                            <h1 className="leading-[21.6px] text-base font-normal font-[satoshi] py-4 px-8"> your@email.com</h1>
                        </div>


                            <button className="w-[118px] h-[56px] bg-white text-black">
                                <h1 className="">Sign up</h1>
                            </button>
                        </div>
                    </div>
                </div><div className="sm:py-[90px] sm:px-20 px-14 ">
                    <div className="sm:w-[1150px] w-[450px] h-[1px] bg-[#4E4D93]"></div>
                
                    <span className="flex">
                        <div className=" sm:py-8 py-7  w-[164px] sm:px-20 px-[170px]">
                            <h1 className="leading-[18.9px]  w-[164px] font-normal font-[satoshi] text-sm">
                                Copyright 2022 Avion LTD</h1></div>
                        {/* icons */}
                        <div className="flex  text-white py-8 px-[700px]   space-x-8">
                            <SiLinkedin  aria-label="LinkedIn" />
                            <AiFillFacebook aria-label="Facebook" />
                            <BsInstagram aria-label="Instagram" />
                            <FaSkype aria-label="Skype" />
                            <FaTwitter aria-label="Twitter" />
                            <FaPinterest aria-label="Pinterest" />
                        </div>

                    </span>
                    </div>
                </div>
            
        </>
    )

}
export default Menu
