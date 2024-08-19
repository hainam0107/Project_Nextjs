export default function FooterPage() {
    return (
        <div className="flex justify-center bg-[#cccccc]">
            <div className="flex mt-[100px] gap-8 px-[230px]">
                <div className="w-[200px]">
                    <div className="text-[33px] font-bold">YOUR LOGO</div>
                    <div className="mt-[15px] flex gap-5 text-[25px]">
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-square-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className="mt-[5px] w-[140px]">
                    <div>
                        <p className="font-[700] text-[18px]">MAIN PAGES</p>
                    </div>
                    <div className="mt-[30px]">
                        <ul className="text-[14px] font-[600]">
                            <li className="mt-[30px]">Sell With Us</li>
                            <li className="mt-[30px]">About Us</li>
                            <li className="mt-[30px]">Contact Us</li>
                            <li className="mt-[30px]">Promos </li>
                            <li className="mt-[30px]">Become An Ambassadors</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-[5px] w-[140px]">
                    <div>
                        <p className="font-[700] text-[18px]">POLICY</p>
                    </div>
                    <div className="mt-[30px]">
                        <ul className="text-[14px] font-[600]">
                            <li className="mt-[30px]">Terms of Usage</li>
                            <li className="mt-[30px]">Privacy Policy</li>
                            <li className="mt-[30px]">Return Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-[5px] w-[140px]">
                    <div>
                        <p className="font-[700] text-[18px]">CATEGORIES</p>
                    </div>
                    <div className="mt-[30px]">
                        <ul className="text-[14px] font-[600]">
                            <li className="mt-[30px]">Skincare</li>
                            <li className="mt-[30px]">Makeup</li>
                            <li className="mt-[30px]">Hair Care</li>
                            <li className="mt-[30px]">Bath & Body </li>
                            <li className="mt-[30px]">Beauty Suppliments</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-[5px] w-[310px]">
                    <div>
                        <p className="font-[700] text-[18px]">SUBSCRIBE</p>
                    </div>
                    <div className="mt-[30px]">
                        <p className="text-[14px] font-[600]">Subscribe to our newsletter, so that you can be the first to know about new offers and promotions.</p>
                    </div>
                    <div className="mt-[40px] w-full">
                        <input className="h-[50px] w-[200px] p-2 border-2 border-black text-[12px]" type="text" placeholder="Enter Email Adress" />
                        <button className="w-[100px] h-[50px] bg-black text-white font-bold text-[12px]">SELL WITH US</button>
                    </div>
                </div>
            </div>
        </div>
    );
}