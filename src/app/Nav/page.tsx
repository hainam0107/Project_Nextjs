import { DropdownMenuDemo } from "./MenuList/page";


export default function NavPage() {
    return (
        <div className="flex items-center justify-between px-[230px] shadow-black">
            <div>
                <ul className="flex gap-7 text-[13px] font-bold">
                    <li><DropdownMenuDemo /></li>
                    <a href="categoryproduct"><li>SKINCARE</li></a>
                    <a href="categoryproduct"><li>MAKE UP</li></a>
                    <a href="categoryproduct"><li>HAIR CARE</li></a>
                    <a href="categoryproduct"><li>BATH & BODY</li></a>
                    <a href="categoryproduct"><li>BEAUTY & SUPPLEMENTS</li></a>
                    <a href="categoryproduct"><li>PROMOS</li></a>
                </ul>
            </div>
            <div className="">
                <button className="w-[156px] h-[55px] bg-black text-white font-bold text-sm">SELL WITH US</button>
            </div>
        </div>
    );
}