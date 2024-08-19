import BoxUserCommentPage from "./BoxUserComment/Page";
export default function ProductCommentPage() {
    return (
        <div className="px-[230px] mt-[30px] ">
            <div className="grid grid-cols-3 gap-10">
                <div className="bg-white p-[30px] col-span-2">
                    <div className="flex justify-between">
                        <div >
                            <p className="font-bold text-[22px]">Review (1480)</p>
                            <div className="font-bold">
                                <strong className="text-[22px]"><i className="fa-regular fa-star"></i> 4 / 5</strong> Average Rating
                            </div>
                        </div>
                        <div className="">
                            <button className="w-[156px] h-[55px] bg-black text-white font-bold text-sm">WRITE PREVIEW</button>
                        </div>
                    </div>
                    <div className="mt-[50px]">
                        <BoxUserCommentPage />
                        <BoxUserCommentPage />
                        <BoxUserCommentPage />
                    </div>
                    <div className="mt-[100px] flex justify-center items-center">
                        <p className="font-bold text-[14px] underline">View all</p>
                    </div>
                </div>
                <div className="bg-white p-[30px]">
                    <div>
                        <p className="font-bold text-[22px]">Top Reviews</p>
                    </div>
                    <div>
                        <BoxUserCommentPage />
                        <BoxUserCommentPage />
                    </div>
                </div>
            </div>
        </div>
    );
}