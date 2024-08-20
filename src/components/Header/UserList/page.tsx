import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
export function DropdownMenuUser() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="outline-none">
                    <div className="flex items-center font-bold"><i className="fa-regular fa-user mx-1"></i>User</div>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-white shadow-[#a6a6a6] rounded-none w-[310px] h-[540px] mt-3 text-center p-5">
                <div className="">
                    <p className="text-[17px] font-bold">SIGN IN</p>
                </div>
                <div className="text-start mt-[27px]">
                    <form>
                        <div>
                            <label className="text-[12px] font-bold">Username</label> <br />
                            <input className="h-[40px] w-full p-2 border-2 border-black text-[12px]" type="text" placeholder="Enter Username" />
                        </div>
                        <div>
                            <label className="text-[12px] font-bold">Password</label><br />
                            <input className="h-[40px] w-full p-2 border-2 border-black text-[12px]" type="text" placeholder="Enter Password" />
                        </div>
                        <div className="text-end mt-[15px] text-[12px] font-bold ">
                            <a href="" className="underline">Forgot Password?</a>
                        </div>
                        <div className="mt-[15px] text-center">
                            <button className="w-[156px] h-[55px] bg-black text-white font-bold text-[16px]">
                                SIGN IN
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mt-[15px] text-[14px]">
                    <p className="font-bold">OR</p>
                    <div className="w-[187px] h-[46px] border-2 border-black flex justify-center items-center gap-2 font-bold mx-auto">
                        <i className="fa-brands fa-facebook"></i> Login with Facebook
                    </div>
                    <div className="w-[187px] h-[46px] border-2 border-black flex justify-center items-center mt-[15px] gap-2 font-bold mx-auto">
                        <i className="fa-brands fa-square-google-plus"></i> Login with Google +
                    </div>
                </div>
                <div className="mt-[30px] text-[14px] font-bold">
                    New Member? <label className="underline"><Link className="" href="/views/client/registration">Register Now</Link></label>
                </div>


            </DropdownMenuContent>
        </DropdownMenu >
    )
}
