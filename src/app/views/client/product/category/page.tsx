import ProductPage from "../../PageHome/Product/page";
export default function CategoryProductPage() {
    return (
        <div className="px-[230px] bg-[#d8d8d8]">
            <div className="font-bold text-[12px] flex gap-5">
                <p className="mt-[15px]">Home</p>
                <p><i className="fa-solid fa-chevron-right mt-[15px]"></i></p>
                <p className="mt-[15px]">Make up</p>
            </div>
            <div className="mt-[35px]">
                <p className="font-bold text-[28px]">MAKE UP</p>
            </div>
            <div className="flex justify-center items-center mt-[50px]">
                <div className="grid grid-cols-4 gap-5">
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                    <ProductPage />
                </div>
            </div>
        </div>
    );
}