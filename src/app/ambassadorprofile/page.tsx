import BoxAbdProfilePage from "./BoxAbdProfile/page";
import BoxProductfilePage from "./BoxProProfile/page";
export default function AmbassarDorProfilePage() {
    return (
        <div className="px-[230px] bg-[#d8d8d8] pb-[50px] pt-[30px]">
            <div className="bg-white ">
                <div className="flex flex-col justify-center items-center">
                    <BoxAbdProfilePage />
                    <p className="text-[14px] font-[600] px-[180px]">
                        Enim expedita torquent! Animi sunt beatae laoreet nec. Euismod rutrum pariatur! Nunc dolorum nisl eum quos quisquam ea. Nobis Perspiciatis, quidem! Sint esse neque viverra rerum nullam, ex aut exercitationem leo dolores, netus ipsum eveniet esse ligula saepe possimus.
                    </p>
                </div>
                <div className="h-[335px] mt-[40px] relative bg-[#c8c8c8] flex justify-center items-center">
                    <div className="w-full flex justify-center items-center">
                        <div>
                            <i className="fa-solid fa-image text-[70px]"></i>
                        </div>
                    </div>
                    <div className=" flex gap-3 justify-center mt-20 absolute bottom-5">
                        <div className="w-[12px] h-[12px] rounded-full border-1 bg-[#5F5F5F]"></div>
                        <div className="w-[12px] h-[12px] rounded-full border-2 border-black "></div>
                        <div className="w-[12px] h-[12px] rounded-full border-2 border-black "></div>
                        <div className="w-[12px] h-[12px] rounded-full border-2 border-black "></div>
                    </div>
                </div>
                <div className="mt-[30px] px-[150px] grid grid-cols-3 gap-7 pb-[100px]">
                    <BoxProductfilePage />
                    <BoxProductfilePage />
                    <BoxProductfilePage />
                    <BoxProductfilePage />
                    <BoxProductfilePage />
                    <BoxProductfilePage />
                    <BoxProductfilePage />
                    <BoxProductfilePage />
                    <BoxProductfilePage />
                </div>
            </div>
        </div>
    );
}