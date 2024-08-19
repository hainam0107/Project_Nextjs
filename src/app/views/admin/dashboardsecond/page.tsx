export default function DashboardSecondPage() {
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
                            <div className="w-[174px] h-[55px] border-2 border-black flex justify-center items-center">
                                <p>REVIEWED PRODUCTS</p>
                            </div>
                            <p>ANALYTICS</p>
                        </div>
                    </div>
                    <div className="px-[80px] pb-[100px] mt-[30px]">
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="text-[35px] font-bold">4565 Visitor</p>
                                <div>
                                    <i className="fa-solid fa-chart-line text-[380px]"></i>
                                </div>
                            </div>
                            <div>
                                <p className="text-[35px] font-bold">AED1430 Total Purchases </p>
                                <div>
                                    <i className="fa-solid fa-chart-line text-[380px]"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[50px]">
                            <p className="text-[22px] font-bold">Purchases by Product</p>
                            <div className="w-full">
                                <table className="border-collapse border-2 w-full border-black">
                                    <thead className="border-collapse border-2 border-black">
                                        <tr>
                                            <th className="w-[33%] py-5 px-10 text-start">Product</th>
                                            <th className="w-[33%]">Quantity</th>
                                            <th className="w-[33%]">Amoun</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="px-10 py-5 text-start">Product Name</th>
                                            <th>3 </th>
                                            <th>AED 159</th>
                                        </tr>
                                        <tr>
                                            <th className="px-10 py-5 text-start">Product Name</th>
                                            <th>3 </th>
                                            <th>AED 159</th>
                                        </tr><tr>
                                            <th className="px-10 py-5 text-start">Product Name</th>
                                            <th>3 </th>
                                            <th>AED 159</th>
                                        </tr><tr>
                                            <th className="px-10 py-5 text-start">Product Name</th>
                                            <th>3 </th>
                                            <th>AED 159</th>
                                        </tr><tr>
                                            <th className="px-10 py-5 text-start">Product Name</th>
                                            <th>3 </th>
                                            <th>AED 159</th>
                                        </tr><tr>
                                            <th className="px-10 py-5 text-start">Product Name</th>
                                            <th>3 </th>
                                            <th>AED 159</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}