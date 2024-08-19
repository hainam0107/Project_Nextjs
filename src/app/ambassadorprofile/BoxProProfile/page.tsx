export default function BoxProductfilePage() {
    return (
        <div className="h-[442[px]">
            <div className="w-[247px] h-[248px] bg-[#c7c7c7] flex justify-center items-center relative">
                <div className="">
                    <a href="detailproduct">
                        <i className="fa-solid fa-image text-[100px]"></i>
                    </a>
                </div>
                <div className="">
                    <button className="w-[68px] absolute h-[24px] left-3 bottom-4 p-1 bg-black text-white text-[10px] font-bold">
                        SKIN CARE
                    </button>
                </div>
            </div>
            <div className="bg-[#dcdcdc] w-[247px] p-2">
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