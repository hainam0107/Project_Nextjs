"use client";

import { useState } from "react";

export default function ProductInformationPage() {
    const [showTrackingPrice, setShowTrackingPrice] = useState(false);

    const handleTrackRateClick = (event: any) => {
        event.preventDefault();
        setShowTrackingPrice(true);
    };

    const HiddenTrackRateClick = (event: any) => {
        event.preventDefault();
        setShowTrackingPrice(false);
    };

    return (
        <div className="px-[230px] flex justify-center">
            <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 transition-opacity duration-300 ${showTrackingPrice ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`} onClick={HiddenTrackRateClick}></div>
            <div className={`bg-white shadow-xl w-[530px] h-[600px] z-10 fixed top-[70px] transition-transform duration-300 ${showTrackingPrice ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <div className="w-[530px] h-[500px] relative">
                    <div onClick={HiddenTrackRateClick} className="absolute rounded-full bg-white border-2 border-black w-[25px] h-[25px] flex items-center justify-center right-[-10px] top-[-10px] cursor-pointer">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="p-[50px]">
                        <div className="flex gap-10">
                            <div className="w-[116px] h-[100px] bg-[#e0e0e0] flex items-center justify-center">
                                <i className="fa-solid fa-image text-[40px]"></i>
                            </div>
                            <div>
                                <p className="text-[14px] font-bold">BRAND</p>
                                <p className="text-[22px] font-bold">Product Name Goes Here</p>
                                <div className="flex gap-5 mt-[30px]">
                                    <div className="flex gap-2 text-[17px]">
                                        <del className="text-[#C4C4C4]">AED 32.00</del> <p className="font-bold">AED 25.60</p>
                                    </div>
                                    <div className="font-bold text-[12px] border-2 border-black px-2">30% Off</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[40px]">
                            <div>
                                <p className="text-[14px] font-bold">Desired price</p>
                                <input className="p-4 rounded-none outline-none border-2 border-black text-[14px] mt-[5px]" type="text" placeholder="Enter Desired price here" />
                            </div>
                            <div className="mt-[30px]">
                                <p className="text-[14px] font-bold">Email Address</p>
                                <input className="w-full p-4 rounded-none outline-none border-2 border-black text-[14px] mt-[5px]" type="text" placeholder="Enter Desired price here" />
                            </div>
                        </div>
                        <div className="mt-[15px]">
                            <p className="text-[13px] font-[700]">When price of this product hits your desired price, we will notify you by sending an email.</p>
                            <div className="text-center mt-[30px]">
                                <button className="w-[156px] h-[55px] bg-black text-white font-bold text-sm">TRACK PRICE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="font-bold text-[12px] mt-[30px] flex gap-5">
                    <p>Home</p>
                    <p><i className="fa-solid fa-chevron-right"></i></p>
                    <p>Skincare</p>
                    <p><i className="fa-solid fa-chevron-right"></i></p>
                    <p>Brand</p>
                    <p><i className="fa-solid fa-chevron-right"></i></p>
                    <p>Product name</p>
                </div>
                <div className="flex mt-[50px] bg-[#fff] p-[30px]">
                    <div className="flex w-[620px] h-[430px]">
                        <div className="w-[80px] flex flex-col gap-5">
                            <div className="w-[67px] h-[62px] bg-[#c7c7c7] flex justify-center items-center">
                                <i className="fa-solid fa-image text-[30px]"></i>
                            </div>
                            <div className="w-[67px] h-[62px] bg-[#c7c7c7] flex justify-center items-center">
                                <i className="fa-solid fa-image text-[30px]"></i>
                            </div>
                            <div className="w-[67px] h-[62px] bg-[#c7c7c7] flex justify-center items-center">
                                <i className="fa-solid fa-image text-[30px]"></i>
                            </div>
                            <div className="w-[67px] h-[62px] bg-[#c7c7c7] flex justify-center items-center">
                                <i className="fa-solid fa-image text-[30px]"></i>
                            </div>
                        </div>
                        <div className="flex w-[540px] justify-center items-center bg-[#c7c7c7]">
                            <div>
                                <i className="fa-solid fa-image text-[100px]"></i>
                            </div>
                        </div>
                    </div>
                    <div className="mx-5">
                        <p className="text-[14px] font-bold">BRAND</p>
                        <p className="text-[26px] font-bold">Product Name Goes Here</p>
                        <div className="text-[14px] font-[600] flex gap-2">
                            <i className="fa-regular fa-heart"></i>
                            <p>Add to Favourites</p>
                        </div>
                        <p className="text-[12px] font-[600] mt-[15px]">Nisl, do fames, consequat adipisicing. Recusandae platea neque, cum, accusamus</p>
                        <a href="" className="underline font-bold text-[12px]">Read More</a>
                        <div className="flex gap-5 mt-[30px]">
                            <div className="flex gap-2 text-[17px]">
                                <del className="text-[#C4C4C4]">AED 32.00</del> <p className="font-bold">AED 25.60</p>
                            </div>
                            <div className="font-bold text-[12px] border-2 border-black px-2">30% Off</div>
                        </div>
                        <div className="text-[12px] flex gap-2 font-[600] mt-[15px]">
                            <p>You can track the price of this product</p>
                            <a className="underline font-[700]" href="" onClick={handleTrackRateClick}>Track Rate</a>
                        </div>
                        <div className="mt-[20px] flex gap-4">
                            <button className="w-[156px] h-[55px] bg-black text-white font-bold text-sm">ADD TO CART</button>
                            <button className="w-[156px] h-[55px] bg-black text-white font-bold text-sm">BUY NOW</button>
                        </div>
                        <div className="flex gap-2 font-bold text-[14px] mt-[15px]">
                            <i className="fa-solid fa-heart"></i>
                            <p className="underline">View My Favourites List</p>
                        </div>
                        <div className="grid grid-cols-4 gap-10 mt-[20px]">
                            <div className="w-[84px] h-[33px] flex justify-center items-center bg-[#c7c7c7]"><p className="text-[11px] font-bold">Lorem Ipsum</p></div>
                            <div className="w-[84px] h-[33px] flex justify-center items-center bg-[#c7c7c7]"><p className="text-[11px] font-bold">Lorem Ipsum</p></div>
                            <div className="w-[84px] h-[33px] flex justify-center items-center bg-[#c7c7c7]"><p className="text-[11px] font-bold">Lorem Ipsum</p></div>
                            <div className="w-[84px] h-[33px] flex justify-center items-center bg-[#c7c7c7]"><p className="text-[11px] font-bold">Lorem Ipsum</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
