
import check from "@/components/assesst/Checkmark--outline.png"
import purchase from "@/components/assesst/Purchase.png"
import sprout from "@/components/assesst/Sprout.png"
import Image from "next/image"
import delivery from "@/components/assesst/Delivery.png"
import cart from "@/components/assesst/Shopping--cart.png"
import search from "@/components/assesst/Search.png"
import Link from "next/link"
import avatar from "@/components/assesst/User--avatar.png"
import image from "@/components/assesst/Image.png"
import block from "@/components/assesst/Image Block.png"
import vector from "@/components/assesst/Vector.png"
import Get from "@/components/get6"
import React from "react";
import { AiFillFacebook } from "react-icons/ai";

import { BsInstagram } from "react-icons/bs";
import { FaSkype } from "react-icons/fa";

import { FaPinterest } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
const Aboutpage = () => {

  return (
    <>

      <div className="">
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
          <div className="sm:hidden items-center flex gap-3">
          <h1 className="  font-[clash display] font-normal text-2xl leading-[29.8px] p-5">Avion</h1>
          
          <Link className="ml-[200px] " href="/Shoppingcart"><Image src={cart} alt="shopping cart" width={15} height={15} /></Link>
          {/* ham burger */}
          <button className="  block sm:hidden my-1 px-2 py-2  rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-3 h-[1px] bg-gray-600 mb-[2px]"></div>
            <div className="w-3 h-[1px] bg-gray-600 mb-[2px]"></div>
            <div className="w-3 h-[1px] bg-gray-600 mb-[2px]"></div>
            <div className="w-3 h-[1px] bg-gray-600 "></div>
            <div className="absolute left-[250px] h-[210px] w-32 bg-white border opacity-0
        group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul className="flex flex-col items-center w-full text-base cursor-pointer pb-11 pt-10">
                <li className="hover:bg-gray-200 py-4 px-6 w-full">About us</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Contact</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Blog</li>
                
              </ul>
            </div>
          </button>
        </div>
        <div className="sm:flex hidden">
        <h1 className="font-[clash display] font-normal text-2xl leading-[29.8px] p-5">Avion</h1>

          <ul className="sm:flex py-6 pl-[1100px] hidden gap-12">
            <li>About us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <br />
          {/* images */}
          <div className="sm:flex py-9 gap-4 mx-10 hidden">
            <Image className="" src={search} alt="search bar" height={16} width={16} />
            <Link href="/Shoppingcart">  <Image src={cart} alt="shopping cart" height={16} width={16} /> </Link>
            <Image src={avatar} alt="" height={16} width={16} />
          </div>
        </div>
        <div className="bg-[#f9f9f9] sm:px-60 px-5 h-[64px] py-5">
          <ul className="flex  sm:gap-11 gap-11">
            <li className="font-[satoshi]  w-[94px] h-[22px] font-normal text-base leading-[21.6px]">Allproduct</li>
            <li className="font-[satoshi] font-normal text-base leading-[21.6px]">Plantspot</li>
            <li className="font-[satoshi] font-normal text-base leading-[21.6px]">Cermics</li>
            <li className="font-[satoshi] font-normal text-base leading-[21.6px]">Tables</li>
            <li className="font-[satoshi] hidden sm:block font-normal text-base leading-[21.6px]">Chairs</li>
            <li className="font-[satoshi] hidden sm:block font-normal text-base leading-[21.6px]">Crockery</li>
            <li className="font-[satoshi] hidden sm:block font-normal text-base leading-[21.6px]">Tableware</li>
            <li className="font-[satoshi] hidden sm:block font-normal text-base leading-[21.6px]">Cutlery</li>


          </ul>

        </div>
        <div className="sm:py-[40px] sm:px-[100px] p-5 sm:flex sm:gap-96 ">
          <h1 className="sm:leading-[50.4px] text-[32px] leading-[44px] sm:text-4xl font-normal  font-[clash display] w-[330px] h-[225px] sm:w-[704px] sm:h-[100px]">
            A brand built on the love of craftmanship, quality and outstanding customer service</h1>
<br className="sm:hidden" />
          <Link  href="/Blackchair"> <button className=" hover:bg-slate-300 w-[342px] sm:w-[192px] h-[56px] sm:py-3 bg-[#f9f9f9]">
            <h1 className="font-[satoshi] font-normal text-base leading-6">View our products</h1>
          </button></Link>

        </div>
        {/* 1ST PORTION */}
        <div className="sm:p-20 sm:flex sm:gap-5 px-5 py-9 ">
          <div className=" sm:h-[531px] w-[342px] h-[281px] sm:w-[700px] bg-[#2A254B] ">


            <div className="text-white p-7 sm:p-14  ">
              <h1 className="sm:leading-[39.6px] leading-7 text-[20px] sm:text-[32px] font-normal font-[clash display]">It started with a small idea</h1>

              <p className="font-[satoshi] leading-[21px] sm:leading-[23.4px] text-sm sm:text-lg font-normal w-[240px] sm:w-[450px] py-4 h-[63px] sm:h-[48px]"> A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
            </div>
            <div className="px-6 sm:px-14 py-14 sm:py-44">
             <Link href="/ProductListing"> <button className="sm:w-[170px] w-[278px] h-[56px] bg-[#F9F9F926] hover:bg-[#f9f9f910] text-white">
                <h1 className="font-[satoshi] font-normal text-base leading-6">View collection</h1>
              </button></Link>
            </div>
          </div>
          <div className="sm:py-0 py-5">
            {/* image */}
            <Image className="hidden sm:block" src={block} alt="block image" height={720} width={700} />
            <Image className ="sm:hidden" src={block} alt="block image" height={259} width={342} />
          </div>
        </div>
        {/* 2ND PORTION */}
        <div className="sm:py-20 sm:flex ">
          <div className="">
            {/* image */}
            <Image className="sm:block hidden" src={image} alt="furniture image" height={700} width={750} />
            <Image className="sm:hidden" src={image} alt="furniture image" height={358} width={390} />
          </div>
          <div className=" sm:h-[620px] sm:w-[900px] w-[750px] bg-[#f9f9f9] ">


            <div className=" sm:p-20 px-6 py-11 ">
              <h1 className="leading-[33.6px] text-[24px] font-normal sm:w-[461px] w-[280px] h-[84px] sm:h-[68px] font-[clash display]">Our service isn’t just
                personal, it’s actually hyper personally exquisite</h1>


              <div className="font-[satoshi] leading-[21.4px] text-base font-normal py-7 sm:py-4 w-[342px] h-[168px] sm:w-[500px] sm:h-[132px]"> When we started Avion, the idea
                was simple. Make high quality furniture affordable and available for the mass market.

                <p className="py-5"> Handmade, and lovingly crafted
                  furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London
                  interior design community.</p>
              </div>
            </div>
            <div className="sm:px-14 py-9 sm:py-36">
            <Link href="/Aboutpage">
              <button className="w-[342px] sm:w-[170px] h-[56px] hover:bg-[#fff6a2] bg-white ">
                <h1 className="font-[satoshi] font-normal text-base leading-6">Get in touch</h1>
              </button>
            </Link>
            </div>
          </div>
        </div>


        {/* features */}

        <div className="h-src w-src">
          <div className=" sm:top-[60px] sm:px-[450px] px-5 sm:py-0 py-5 sm:w-[500px] w-[400px] ">
            <h1 className="font-[clash display] w-[266px] sm:w-[366px] h-[34px] font-normal leading-[33.6px] text-[24px] ">
              What makes our brand different
            </h1>

          </div>
          <div className="sm:flex p-5  sm:p-2 sm:gap-5 sm:py-8 sm:px-14 py-16">
            {/* 1st card */}
            <div className=" sm:top-[145px] bg-[#f9f9f9] pt-6 sm:pb-5 pb-5 gap-[16px] px-5 sm:px-[30px] sm:py-7 py-2">
              <div className="">
                <Image src={delivery} alt="delivery van" />
              </div>
              <div className="py-3 ">  <h1 className="text-xl leading-7 w-[199px] h-[28px] font-[clash display] font-normal">Next day as standard</h1>
              </div>
              <div className="h-[48px] w-[250px]">
                <p className="font-[satoshi] font-normal text-base leading-6">Order before 3pm and get your order
                  the next day as standard</p></div>
            </div>
            <br />
            {/* 2nd card */}
            <div className=" top-[145px] pt-6 bg-[#f9f9f9] sm:pb-0 pb-5 py-2 px-5 sm:px-14 sm:py-7">
              <div className="">
                <Image src={check} alt="check mark" />
              </div>
              <div className="py-3">  <h1 className="text-xl leading-7 font-[clash display] font-normal">Made by true artisans</h1>
              </div>
              <div className="h-[48px] w-[250px]">
                <p className="font-[satoshi] font-normal text-base leading-6">Handmade crafted goods made with
                  real passion and craftmanship</p></div>
            </div>
            <br />
            {/* 3rd card */}
            <div className=" pt-6 top-[145px] bg-[#f9f9f9] sm:pb-0 pb-5 gap-[16px] px-5  py-2 sm:py-7">
              <div className="">
                <Image src={purchase} alt="purchase icon" />
              </div>
              <div className="py-3">  <h1 className="text-xl leading-7 font-[clash display] font-normal">Unbeatable prices</h1>
              </div>
              <div className="h-[48px] w-[250px]">
                <p className="font-[satoshi] font-normal text-base leading-6">For our materials and quality you won’t find
                  better prices anywhere</p></div>
            </div>
            <br />
            {/* 4th card */}
            <div className=" top-[145px] px-5 bg-[#f9f9f9] pt-6 sm:pb-0 pb-5 py-2 gap-[16px]  sm:py-7">
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
  </div>
    </>
  )
}
export default Aboutpage