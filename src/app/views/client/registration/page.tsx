// import TestPage from "./a/page";
export default function RegistrationPage() {
    return (
        <div className="px-[230px] bg-[#d8d8d8] pb-[50px]">
            <div className="font-bold text-[12px] flex gap-5 pt-[15px] ">
                <p>Home</p>
                <p><i className="fa-solid fa-chevron-right"></i></p>
                <p>Registration</p>
            </div>
            <div className="mt-[50px]">
                <p className="font-bold text-[28px]">REGISTRATION</p>
            </div>
            <div className="px-[200px] mt-[30px] bg-white p-[30px]">
                <div className="flex justify-between gap-7 text-[12px]">
                    <div className="w-[200px] h-[46px] border-2 border-black flex justify-center items-center mt-[15px] gap-2 font-bold mx-auto">
                        <i className="fa-brands fa-square-google-plus"></i> Register with Google +
                    </div>
                    <div className="w-[200px] h-[46px] border-2 border-black flex justify-center items-center mt-[15px] gap-2 font-bold mx-auto">
                        <i className="fa-brands fa-facebook"></i> Register with Facebook
                    </div>
                    <div className="w-[200px] h-[46px] border-2 border-black flex justify-center items-center mt-[15px] gap-2 font-bold mx-auto">
                        <i className="fa-brands fa-square-google-plus"></i> Register with Instagram +
                    </div>
                </div>

                <div className="mt-[50px] text-center">
                    <p className="font-bold text-[14px]">OR</p>
                </div>
                <div className="mt-[60px]">
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
                                        <label className="font-bold text-[14px]">First Name *</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Last Name *</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Email Address *</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Mobile Number *</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[50px]">
                            <p className="font-bold text-[16px]">Address</p>
                            <div>
                                <div className="flex justify-between">
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Street</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Area</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mt-[15px]">
                                        <label className="font-bold text-[14px]">Emirate</label> <br />
                                        <input className="w-[300px] h-[45px] border-2 mt-[5px] border-black outline-none p-1" type="text" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-[50px]">
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