export default function BannerSaleOffPage() {
    return (
        <div className="px-[230px]">
            <div className="h-[177px] mt-12 bg-[#c7c7c7] grid grid-cols-2 justify-center items-center">
                <div className="text-center ">
                    <i className="fa-solid fa-image text-[120px]"></i>
                </div>
                <div className="flex items-center gap-20">
                    <div>
                        <p className="text-[51px] font-bold">50% OFF</p>
                        <p className="text-[37px] font-[300]">On ALL Items</p>
                    </div>
                    <div>
                        <button className="font-bold text-[16px] border-2 border-black py-5 px-10">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
}