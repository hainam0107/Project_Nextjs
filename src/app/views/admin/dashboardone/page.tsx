
export default function DashboardOnePage() {
    return (
        <div>
            <div className="px-[230px] bg-[#d8d8d8] pb-[50px]">
                <div className="font-bold text-[12px] flex gap-5 pt-[15px]">
                    <p>Home</p>
                    <p><i className="fa-solid fa-chevron-right"></i></p>
                    <p>Dashboard</p>
                    <p><i className="fa-solid fa-chevron-right"></i></p>
                    <p>Add Review</p>
                </div>
                <div className="mt-[35px]">
                    <p className="font-bold text-[28px]">ADD REVIEW</p>
                </div>
                <div className="bg-white px-[210px] py-[50px] mt-[50px]">
                    <div className="">
                        <p className="text-[22px] font-bold">Add Review</p>
                    </div>
                    <form action="">
                        <div className="">
                            <div className="flex justify-between">
                                <div className="mt-[25px]">
                                    <label className="font-bold text-[13px]">Select Brand</label> <br />
                                    <select className="w-[300px] h-[45px] text-[13px] border-2 mt-[5px] border-black outline-none p-1 font-bold" name="" id="">
                                        <option value="">Personal</option>
                                    </select>
                                </div>
                                <div className="mt-[25px]">
                                    <label className="font-bold text-[13px]">Select Product</label> <br />
                                    <select className="w-[300px] h-[45px] text-[13px] border-2 mt-[5px] border-black outline-none p-1 font-bold" name="" id="">
                                        <option value="">Personal</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-[30px]">
                                <p className="text-[18px] font-bold">
                                    You have selected Product Name
                                </p>
                                <div>
                                    <div className="mt-[25px]">
                                        <label className="font-bold text-[13px]">Upload Image</label> <br />
                                        <input className="w-[300px] h-[45px] text-[13px] border-2 mt-[5px] border-black outline-none p-1 font-bold" placeholder="Choose an image" type="file" />
                                    </div>
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[13px]">Video URL</label> <br />
                                        <input className="w-[300px] h-[45px] text-[13px] border-2 mt-[5px] border-black outline-none p-1 font-bold" type="text" />
                                    </div>
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[13px]">Summary</label> <br />
                                        <input className="w-full h-[100px] text-[13px] border-2 mt-[5px] border-black outline-none p-1 font-bold" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[30px]">
                                <p className="text-[13px] font-bold">
                                    Select Options
                                </p>
                                <div className="grid grid-cols-5 gap-3 mt-[15px]">
                                    <div className="flex gap-3 text-[13px] font-bold">
                                        <input type="checkbox" /> <label htmlFor="">Lorem Ipsem</label>
                                    </div>
                                    <div className="flex gap-3 text-[13px] font-bold">
                                        <input type="checkbox" /> <label htmlFor="">Lorem Ipsem</label>
                                    </div>
                                    <div className="flex gap-3 text-[13px] font-bold">
                                        <input type="checkbox" /> <label htmlFor="">Lorem Ipsem</label>
                                    </div>
                                    <div className="flex gap-3 text-[13px] font-bold">
                                        <input type="checkbox" /> <label htmlFor="">Lorem Ipsem</label>
                                    </div>
                                    <div className="flex gap-3 text-[13px] font-bold">
                                        <input type="checkbox" /> <label htmlFor="">Lorem Ipsem</label>
                                    </div>
                                    <div className="flex gap-3 text-[13px] font-bold">
                                        <input type="checkbox" /> <label htmlFor="">Lorem Ipsem</label>
                                    </div>
                                    <div className="flex gap-3 text-[13px] font-bold">
                                        <input type="checkbox" /> <label htmlFor="">Lorem Ipsem</label>
                                    </div>
                                    <div className="flex gap-3 text-[13px] font-bold">
                                        <input type="checkbox" /> <label htmlFor="">Lorem Ipsem</label>
                                    </div>
                                    <div className="flex gap-3 text-[13px] font-bold">
                                        <input type="checkbox" /> <label htmlFor="">Lorem Ipsem</label>
                                    </div>
                                    <div className="flex gap-3 text-[13px] font-bold">
                                        <input type="checkbox" /> <label htmlFor="">Lorem Ipsem</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-center mt-[35px]">
                                    <button className="w-[156px] h-[55px] bg-black text-white font-bold text-sm">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}