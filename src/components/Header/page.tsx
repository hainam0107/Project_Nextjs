import Script from "next/script";
import { DropdownMenuUser } from "./UserList/page";
export default function HeaderPage() {
    return (
        <div className="w-full flex font-mono justify-between py-[19px] px-[230px] bg-[#cccccc]">
            <Script src="https://kit.fontawesome.com/0f02d3980d.js"></Script>
            <div className="text-[39px] font-bold">
                <a href="/">
                    YOUR LOGO
                </a>
            </div>
            <div><input className="h-[50px] w-[402px] p-2 ml-[201px] border-2 border-black" type="text" placeholder="Type in and hit Enter" /></div>
            <div className="flex items-center">
                <a href="/views/client/cart">
                    <div className="flex items-center font-bold"><i className="fa-solid fa-cart-shopping mx-1"></i>Cart</div>
                </a>
                <div className="mx-3 h-[26px] w-[2px] bg-black"></div>
                <DropdownMenuUser />
                <div className="mx-3 h-[26px] w-[2px] bg-black"></div>
                <div>عربى</div>
            </div>
        </div>
    );
}
