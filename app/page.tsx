import HeroSection from "./components/HeroSection";
import * as posts from "./blog/posts";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Navbar />
      <div className="h-auto bg-blogBG text-blogText pt-6">
        <posts.Post05 />
        <posts.Post04 />
        <posts.Post03 />
        <posts.Post02 />
        <posts.Post01 />
      </div>
    </>
  );
}
