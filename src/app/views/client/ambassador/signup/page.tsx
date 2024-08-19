export default function AmbassadorSignUpPage() {
    return (
        <div className="px-[230px] bg-[#d8d8d8] pb-[50px] pt-[30px]">
            <div className="bg-white ">
                <div className="pt-[50px]">
                    <p className="text-center text-[25px] font-bold">Welcome NAME SUR NAME</p>
                </div>
                <div className="pt-[80px]">
                    <p className="text-[18px] font-[600] text-center">Please fill in the complete details in the form below</p>
                    <div className="mt-[50px] flex flex-col justify-center items-center">
                        <p className="text-[18px] font-bold">Profile Picture</p>
                        <div className="w-[150px] h-[150px] mt-[15px] border-2 border-black relative flex justify-center items-center">
                            <i className="fa-solid fa-plus text-[40px] text-gray-500"></i>
                            <p className="absolute bottom-0 font-bold text-gray-500">Upload Image</p>
                        </div>
                    </div>
                </div>
                <div className="px-[220px] mt-[30px]">
                    <p className="text-[18px] font-bold">Personal Details</p>
                    <form>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-[16px]">Profile Picture</p>
                            <div className="w-[150px] h-[150px] border-2 border-black mt-[15px] relative p-2 flex justify-center">
                                <p className="absolute bottom-0 text-[12px] text-[#B9B9B9] font-bold">Upload Image</p>
                            </div>
                        </div>
                        <div className="mt-[50px]">
                            <p className="font-bold text-[16px]">Personal Details</p>
                            <div>
                                <div className="flex justify-between">
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">First Name </label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Last Name </label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Display Name</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Gender</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Email Address</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Mobile Number</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Instagram</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Youtube</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Set Password</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Repeat Password</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                </div>
                                <div className="mt-[15px] flex gap-3">
                                    <input type="checkbox" /> <p className="font-bold text-[14px]">I Agree to the <span className="underline">Term & Conditions</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-[50px] pb-[50px]">
                            <button className="w-[145px] h-[50px] bg-black text-white font-bold text-[16px]">
                                REGISTER
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}