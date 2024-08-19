"use client";
import { useState } from "react";
export default function TrackingPricePage() {
    const [showTrackingPrice, setShowTrackingPrice] = useState(false);

    const handleTrackRateClick = (event: any) => {
        event.preventDefault();
        setShowTrackingPrice(true);
    };
    return (
        <div className="bg-[#e0e0e0] shadow-xl w-[530px] h-[600px] fixed top-[70px]">
            <div className="w-[530px] h-[500px] relative">
                <div className="absolute rounded-full bg-white border-2 border-black w-[25px] h-[25px] flex items-center justify-center right-[-10px] top-[-10px]">
                    <i onClick={handleTrackRateClick} className="fa-solid fa-xmark"></i>
                </div>
                <div className="p-[50px]">
                    <div className="flex gap-10">
                        <div className="w-[116px] h-[100px] bg-[#e0e0e0] flex items-center justify-center">
                            <i className="fa-solid fa-image text-[40px] "></i>
                        </div>
                        <div>
                            <p className="text-[14px] font-bold">BRAND</p>
                            <p className="text-[22px] font-bold">Product Name Goes Here</p>
                            <div className="flex gap-5 mt-[30px]">
                                <div className="flex gap-2 text-[17px]">
                                    <del className="text-[#C4C4C4]">AED 32.00</del> <p className="font-bold">AED 25.60</p>
                                </div>
                                <div className="font-bold text-[12px] border-2 border-black px-2 ">30% Off</div>
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
    );
}