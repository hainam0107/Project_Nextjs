import ProductPage from "../Product/page";
export default function NewArrivalsSecondPage() {
    return (
        <div className="flex justify-center">
            <div className="mt-[50px] relative">
                <div className="flex items-center gap-5">
                    <p className="font-bold text-[28px]">NEW ARRIVALS</p>
                    <a className="underline decoration-solid font-bold mt-2 text-[14px]" href="#">SEE ALL</a>
                </div>
                <div className="flex gap-3 mt-[50px]">
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                </div>
                <div className="flex items-center justify-center absolute left-[-3%] bottom-40 w-[21px] h-[74px] bg-[#BABABA] text-white"><i className="fa-solid fa-chevron-left"></i></div>
                <div className="flex items-center justify-center absolute right-[-3%] bottom-40 w-[21px] h-[74px] bg-[#BABABA] text-white"><i className="fa-solid fa-chevron-right"></i></div>
            </div>
        </div>
    );
}