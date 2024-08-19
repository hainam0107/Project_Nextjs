import BoxProductCartPage from "./BoxProductCart/page";
export default function CartPage() {
    return (
        <div className="px-[230px] bg-[#d8d8d8] pb-[50px]">
            <div className="font-bold text-[12px] flex gap-5">
                <p className="mt-[15px]">Home</p>
                <p><i className="fa-solid fa-chevron-right mt-[15px]"></i></p>
                <p className="mt-[15px]">Cart</p>
            </div>
            <div className="mt-[35px]">
                <p className="font-bold text-[28px]">CART</p>
            </div>
            <div className="flex mt-[50px] gap-8 ">
                <div className=" w-[700px] bg-white p-[30px]">
                    <BoxProductCartPage />
                    <BoxProductCartPage />
                    <BoxProductCartPage />
                    <BoxProductCartPage />
                </div>
                <div className="bg-white p-[30px]">
                    <p className="text-[20px] font-bold">Add Promo Code</p>
                    <input className="w-full h-[50px] outline-none border-2 mt-[15px] border-black rounded-none" type="text" name="" id="" />
                    <div className="">
                        <button className="w-[140px] h-[50px] mt-[15px] text-white bg-black  font-bold text-sm">ADD</button>
                    </div>
                    <div className="mt-[30px] ">
                        <p className="text-[20px] font-bold">Summary</p>
                        <div className="flex justify-between mt-[30px]">
                            <p className="text-[13px] font-[600]">Price (4 items)</p>
                            <p className="text-[14px] font-bold">128.60 AED</p>
                        </div>
                        <div className="flex justify-between mt-[30px]">
                            <p className="text-[13px] font-[600]">Delivery Charge</p>
                            <p className="text-[14px] font-bold">AED 15.00</p>
                        </div>
                        <div className="flex justify-between mt-[30px]">
                            <p className="text-[13px] font-[600]">Total Price</p>
                            <p className="text-[14px] font-bold">AED 143.00</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-2 ">
                        <button className="w-[140px] h-[50px] mt-[15px] text-[12px] border-2 border-black font-bold">CONTINUE SHOPPING</button>
                        <a href="/views/client/checkout">
                            <button className="w-[140px] h-[50px] mt-[15px] text-[12px] text-white bg-black font-bold">PLACE ORDER</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}