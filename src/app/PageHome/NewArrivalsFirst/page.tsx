import ProductPage from "../Product/page";
export default function NewArrivalsFirstPage() {
    return (
        <div className="flex justify-center">
            <div>
                <div>
                    <div className="mt-[65px]">
                        <div className="flex items-center gap-5">
                            <p className="font-bold text-[28px]">NEW ARRIVALS</p>
                            <a className="underline decoration-solid font-bold mt-2 text-[14px]" href="#">SEE ALL</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-[50px] gap-3">
                        <div className="h-[342px] flex flex-col justify-center items-center relative bg-[#c7c7c7]">
                            <div>
                                <i className="fa-solid fa-image text-[100px]"></i>
                            </div>
                            <div className="absolute bottom-6">
                                <button className="font-bold text-[16px] border-2 border-black py-5 px-10">SHOP NOW</button>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <ProductPage />
                            <ProductPage />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 mt-[50px] gap-3">
                        <div className="flex gap-3">
                            <ProductPage />
                            <ProductPage />
                        </div>
                        <div className="h-[342px] flex flex-col justify-center items-center relative bg-[#c7c7c7]">
                            <div>
                                <i className="fa-solid fa-image text-[100px]"></i>
                            </div>
                            <div className="absolute bottom-6">
                                <button className="font-bold text-[16px] border-2 border-black py-5 px-10">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}