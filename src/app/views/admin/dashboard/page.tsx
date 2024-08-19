import BoxProDashBoardPage from "./BoxProDashBoard/page";
export default function DashboardPage() {
    return (
        <div>
            <div className="px-[230px] bg-[#d8d8d8] pb-[50px]">
                <div className="font-bold text-[12px] flex gap-5 pt-[15px]">
                    <p>Home</p>
                    <p><i className="fa-solid fa-chevron-right"></i></p>
                    <p>Dashboard</p>
                </div>
                <div className="mt-[35px]">
                    <p className="font-bold text-[28px]">DASHBOARD</p>
                </div>
                <div className="bg-white mt-[50px]">
                    <div className="pt-[50px]">
                        <p className="text-center text-[25px] font-bold">Welcome NAME SUR NAME</p>
                    </div>
                    <div className="pt-[80px] flex items-center justify-center">
                        <div className="w-[150px] h-[150px] bg-[#c7c7c7] flex justify-center items-center">
                            <i className="fa-regular fa-circle-user text-[60px] text-gray-500"></i>
                        </div>
                    </div>
                    <div className="px-[40px] mt-[30px]">
                        <div className="flex items-center gap-10 text-[14px] font-[600]">
                            <p>REVIEWED PRODUCTS</p>
                            <div className="w-[174px] h-[55px] border-2 border-black flex justify-center items-center">
                                <p>ANALYTICS</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[50px] text-center">
                        <p className="text-[22px] font-bold">Reviewed 16 Products</p>
                        <div className="mt-[15px]">
                            <button className="w-[156px] h-[55px] bg-black text-white font-bold text-[16px]">SELL WITH US</button>
                        </div>
                    </div>
                    <div className="mt-[30px] px-[95px] grid grid-cols-3 gap-[30px] pb-[150px]">
                        <BoxProDashBoardPage />
                        <BoxProDashBoardPage />
                        <BoxProDashBoardPage />
                        <BoxProDashBoardPage />
                        <BoxProDashBoardPage />
                        <BoxProDashBoardPage />
                        <BoxProDashBoardPage />
                        <BoxProDashBoardPage />
                        <BoxProDashBoardPage />
                        <BoxProDashBoardPage />
                        <BoxProDashBoardPage />
                        <BoxProDashBoardPage />
                    </div>
                </div>
            </div >
        </div >
    );
}