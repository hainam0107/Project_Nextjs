export default function BoxProDashBoardPage() {
    return (
        <div className="h-[442[px]">
            <div className="w-[262px] h-[248px] bg-[#c7c7c7] flex justify-center items-center relative">
                <div className="">
                    <a href="">
                    <i className="fa-regular fa-circle-play text-[40px] text-gray-500"></i>
                    </a>
                </div>
            </div>
            <div className="bg-[#dcdcdc] w-[262px] p-2">
                <p className="font-bold text-[18px]">Product Title Goes Here</p>
                <p className="font-bold text-[12px]">BRAND</p>
                <div className="flex">
                    <div className="text-[13px] flex gap-2">
                        <del className="text-[#C4C4C4]">AED 32.00</del> <p className="font-bold">AED 25.60</p>
                    </div>
                    <div className="font-bold text-[12px] border-2 border-black px-2 ml-4">30% Off</div>
                </div>
            </div>
        </div>
    );
}