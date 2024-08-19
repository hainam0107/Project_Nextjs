import PageHomePage from "./views/client/PageHome/page";
import SlideBannerPage from "./views/client/PageHome/SlideBanner/page";
export default function Home() {
  return (
    <div className="bg-[#d8d8d8]">
      <SlideBannerPage />
      <PageHomePage />
    </div>
  );
}
