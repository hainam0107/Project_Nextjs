export default function BoxProductCartPage() {
    return (

        <div className="w-full h-[140px] mt-[20px] flex justify-between border-b-2 border-gray-300 ">
            <div className="flex gap-7">
                <div className="w-[120px] h-[120px] flex justify-center items-center bg-[#e0e0e0]">
                    <i className="fa-solid fa-image text-[30px]"></i>
                </div>
                <div className="flex flex-col">
                    <p className="text-[20px] font-bold">Product Title Goes Here</p>
                    <div className="flex gap-4 text-[18px]">
                        <del className="text-gray">AED 32.00</del>
                        <p className="font-bold">AED 25.60</p>
                    </div>
                    <div className="flex gap-5 items-center mt-[20px]">
                        <i className="fa-solid fa-minus"></i>
                        <input className="w-[40px] p-1 text-center border-2 border-black" type="number" value={1} />
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="">
                <button className="w-[156px] h-[55px] border-2 border-black  font-bold text-sm">REMOVE</button>
            </div>
        </div>
    );
}