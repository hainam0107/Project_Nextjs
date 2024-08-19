import ProductInformationPage from "./ProductInformation/page";
import ProductAmbFeelbackPage from "./ProductAmbFeelback/page";
import ProductContentDetailPage from "./ProductContentDetail/page";
import ProductCommentPage from "./ProductComment/page";
import ProductProlatedPage from "./ProductProlated/page"
export default function ProductDetailPage() {
    return (
        <div className="bg-[#d8d8d8]">
            <ProductInformationPage />
            <ProductAmbFeelbackPage />
            <ProductContentDetailPage />
            <ProductCommentPage />
            <ProductProlatedPage />
        </div>
    );
}