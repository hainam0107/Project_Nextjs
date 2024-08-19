import NewArrivalsFirstPage from "./NewArrivalsFirst/page";
import NewArrivalsSecondPage from "./NewArrivalsSecond/page";
import BannerSaleOffPage from "./BannerSaleOff/page";
import AmbassadorsPage from "./Ambassadors/page";
import TopSellerPage from "./TopSellers/page";
export default function PageHomePage() {
    return (
        <div>
            <NewArrivalsFirstPage />
            <NewArrivalsSecondPage />
            <BannerSaleOffPage />
            <TopSellerPage />
            <BannerSaleOffPage />
            <AmbassadorsPage />
        </div>
    );
}