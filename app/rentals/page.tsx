import { TestimonialSection } from "../../components/TestimonialSection/TestimonialSection";
import { SelfStorageFeatures } from "./SelfStorageFeatures";
import { SelfStorageListings } from "./SelfStorageListings";
import { MainPage } from "./main_page";

export default function Home() {
  return (
    <>
      <main className="max-w-6xl m-auto pt-10 md:pt-20 px-5 space-y-40">
        <MainPage />
        <SelfStorageFeatures />
        <SelfStorageListings />
        {/* <TestimonialSection /> */}
      </main>
    </>
  );
}
