export default function SlideBannerPage() {
    return (
        <div className="bg-[#bdbdbd] h-[600px] flex justify-center items-center relative">
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-center items-center w-[30px] h-[107px] bg-[#c5c4c4] text-white"><i className="fa-solid fa-chevron-left"></i></div>
                <div>
                    <i className="fa-solid fa-image text-[350px]"></i>
                </div>
                <div className="flex justify-center items-center w-[30px] h-[107px] bg-[#BABABA] text-white"><i className="fa-solid fa-chevron-right"></i></div>
            </div>
            <div className=" flex gap-3 justify-center mt-20 absolute bottom-5">
                <div className="w-[12px] h-[12px] rounded-full border-1 bg-[#5F5F5F]"></div>
                <div className="w-[12px] h-[12px] rounded-full border-2 border-black "></div>
                <div className="w-[12px] h-[12px] rounded-full border-2 border-black "></div>
                <div className="w-[12px] h-[12px] rounded-full border-2 border-black "></div>
            </div>
        </div>

    );
}