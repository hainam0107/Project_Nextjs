import BoxAbdPage from "./BoxAbd/page";
export default function AmbassadorsPage() {
    return (
        <div className="flex justify-center bg-[#dcdcdc] mt-[30px] py-[80px]">
            <div className="relative">
                <div className="flex items-center gap-5">
                    <p className="font-bold text-[28px] mx-3">AMBASSADORS</p>
                    <a className="underline decoration-solid font-bold mt-2 text-[14px]" href="#">VIEW ALL</a>
                </div>
                <div className="grid grid-cols-4 gap-3 mt-[50px]">
                    <BoxAbdPage />
                    <BoxAbdPage />
                    <BoxAbdPage />
                    <BoxAbdPage />
                </div>
                <div className="flex items-center justify-center absolute left-[-3%] bottom-40 w-[21px] h-[74px] bg-[#BABABA] text-white"><i className="fa-solid fa-chevron-left"></i></div>
                <div className="flex items-center justify-center absolute right-[-3%] bottom-40 w-[21px] h-[74px] bg-[#BABABA] text-white"><i className="fa-solid fa-chevron-right"></i></div>
            </div>
        </div>

    );
}