export default function ProductPage() {
    return (
        <div className="h-[442[px]">
            <div className="w-[254px] h-[248px] bg-[#c7c7c7] flex justify-center items-center relative">
                <div className="">
                    <a href="/views/client/product/detail">
                        <i className="fa-solid fa-image text-[100px]"></i>
                    </a>
                </div>
                <div className="">
                    <button className="w-[68px] absolute h-[24px] left-0 bottom-0 p-1 bg-black text-white text-[10px] font-bold">
                        SKIN CARE
                    </button>
                </div>
            </div>
            <div>
                <p className="font-bold text-[18px] mt-5">Product Title Goes Here</p>
                <p className="font-bold text-[12px]">BRAND</p>
                <div className="flex gap-5">
                    <div className="text-[14px] flex gap-2">
                        <del className="text-[#C4C4C4]">AED 32.00</del> <p className="font-bold">AED 25.60</p>
                    </div>
                    <div className="font-bold text-[12px] border-2 border-black px-2 ">30% Off</div>
                </div>
            </div>
        </div>
    );
}