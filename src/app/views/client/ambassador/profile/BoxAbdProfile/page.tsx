export default function BoxAbdProfilePage() {
    return (
        <div className="w-[260px] h-[383px] flex flex-col items-center bg-white p-5">
            <div className="h-[140px] w-[140px] flex justify-center items-center bg-[#cbcaca] rounded-[50%]">
                <i className="fa-regular fa-user text-[50px] text-[#eceaea]"></i>
            </div>
            <div className="mt-[20px] flex flex-col items-center ">
                <p className="text-[22px] font-[600]">Name Surname</p>
                <p className="mt-[10px] text-[10px] border-2 border-black w-[109px] h-[30px] font-bold flex items-center justify-center rounded-full">@username</p>
                <div className="mt-[15px] flex gap-2 text-[18px]">
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    );
}