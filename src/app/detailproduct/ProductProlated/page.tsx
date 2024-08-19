import ProductPage from "@/app/PageHome/Product/page";
export default function ProductProlatedPage() {
    return (
        <div className="bg-white p-[30px]  mt-[30px]">
            <div className="px-[230px]">
                <div className="">
                    <p className="font-bold text-[22px]">RELATED PRODUCTS</p>
                </div>
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="flex gap-3 mt-[20px] ">
                            <ProductPage />
                            <ProductPage />
                            <ProductPage />
                            <ProductPage />
                        </div>
                        <div className="flex items-center justify-center absolute left-[-3%] bottom-40 w-[21px] h-[74px] bg-[#BABABA] text-white"><i className="fa-solid fa-chevron-left"></i></div>
                        <div className="flex items-center justify-center absolute right-[-3%] bottom-40 w-[21px] h-[74px] bg-[#BABABA] text-white"><i className="fa-solid fa-chevron-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
}