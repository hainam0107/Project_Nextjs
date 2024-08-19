import PageHomePage from "./PageHome/page";
import SlideBannerPage from "./PageHome/SlideBanner/page";
export default function Home() {
  return (
    <div className="bg-[#d8d8d8]">
      <SlideBannerPage />
      <PageHomePage />
    </div>
  );
}
