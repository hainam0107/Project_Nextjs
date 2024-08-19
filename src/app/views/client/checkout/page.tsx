export default function CheckOutPage() {
    return (
        <div>
            <div className="px-[230px] bg-[#d8d8d8] pb-[50px]">
                <div className="font-bold text-[12px] flex gap-5 pt-[15px]">
                    <p>Home</p>
                    <p><i className="fa-solid fa-chevron-right"></i></p>
                    <p>CHECKOUT</p>
                </div>
                <div className="mt-[35px]">
                    <p className="font-bold text-[28px]">CHECK OUT</p>
                </div>
                <div className="flex justify-between mt-[50px] ">
                    <div className=" w-[700px] bg-white p-[30px]">
                        <div>
                            <input
                                type="range" value={0}
                                className="w-full bg-black outline-none opacity-70 transition-opacity duration-200"
                                style={{
                                    WebkitAppearance: 'none',
                                    appearance: 'none',
                                    height: '3px',
                                }}
                            />
                        </div>
                        <div className="mt-[30px] flex justify-between">
                            <p className="font-bold text-[22px]">Shipping Details</p>
                            <p className="font-bold text-[22px] text-gray-400">Billing Details</p>
                        </div>
                        <div>
                            <form action="">
                                <div className="">
                                    <div className="flex justify-between">
                                        <div className="mt-[15px]">
                                            <label className="font-bold text-[14px]">Type of Address</label> <br />
                                            <select className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" name="" id="">
                                                <option value="">Personal</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="mt-[15px]">
                                            <label className="font-bold text-[14px]">First Name </label> <br />
                                            <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                        </div>
                                        <div className="mt-[15px]">
                                            <label className="font-bold text-[14px]">Last Name </label> <br />
                                            <select className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" name="" id="">
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="mt-[15px]">
                                            <label className="font-bold text-[14px]">Street Address</label> <br />
                                            <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                        </div>
                                        <div className="mt-[15px]">
                                            <label className="font-bold text-[14px]">Area</label> <br />
                                            <select className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" name="" id="">
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="mt-[15px]">
                                            <label className="font-bold text-[14px]">City</label> <br />
                                            <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                        </div>
                                        <div className="mt-[15px]">
                                            <label className="font-bold text-[14px]">Phone Number</label> <br />
                                            <select className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" name="" id="">
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Delivery Instructions</label> <br />
                                        <textarea className="w-full h-[200px] p-3 border-2 border-black" name="" id=""></textarea>
                                    </div>
                                    <div className="mt-[15px]">
                                        <p className="text-[14px] font-bold">Molestias fringilla aliquam curae, taciti, vestibulum potenti sapien, tellus voluptatibus aliquid sapien. Nisi su aliquid sapien. Nisscipit, dapibus dapibus</p>
                                    </div>
                                    <div className="mt-[30px]">
                                        <button className="w-[140px] h-[50px] mt-[15px] text-[12px] text-white bg-black font-bold">CONTINUE</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="bg-white p-[30px] h-[300px]">
                        <div className="mt-[30px] w-[250px]">
                            <p className="text-[20px] font-bold">Summary</p>
                            <div className="flex justify-between mt-[30px] border-b-2 border-gray-300 pb-[15px]">
                                <p className="text-[13px] font-[600]">Price (4 items)</p>
                                <p className="text-[14px] font-bold">128.60 AED</p>
                            </div>
                            <div className="flex justify-between mt-[30px] border-b-2 border-gray-300 pb-[15px]">
                                <p className="text-[13px] font-[600]">Delivery Charge</p>
                                <p className="text-[14px] font-bold">AED 15.00</p>
                            </div>
                            <div className="flex justify-between mt-[30px] pb-[15px]">
                                <p className="text-[13px] font-[600]">Total Price</p>
                                <p className="text-[14px] font-bold">AED 143.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}