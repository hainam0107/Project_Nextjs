import { DropdownMenuDemo } from "./MenuList/page";
import Link from "next/link";

export default function NavPage() {
    return (
        <div className="flex items-center justify-between px-[230px] shadow-black">
            <div>
                <ul className="flex gap-7 text-[13px] font-bold">
                    <li><DropdownMenuDemo /></li>
                    <Link href="/views/client/product/category"><li>SKINCARE</li></Link>
                    <Link href="/views/client/product/category"><li>MAKE UP</li></Link>
                    <Link href="/views/client/product/category"><li>HAIR CARE</li></Link>
                    <Link href="/views/client/product/category"><li>BATH & BODY</li></Link>
                    <Link href="/views/client/product/category"><li>BEAUTY & SUPPLEMENTS</li></Link>
                    <Link href="/views/client/product/category"><li>PROMOS</li></Link>
                </ul>
            </div>
            <div className="">
                <button className="w-[156px] h-[55px] bg-black text-white font-bold text-sm">SELL WITH US</button>
            </div>
        </div>
    );
}