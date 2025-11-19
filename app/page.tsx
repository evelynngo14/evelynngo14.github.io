import Image from "next/image";
import HeroSection from "./components/HeroSection";
import BlogPost from "./components/BlogPost";
import Markdown from "react-markdown";
import Post01, { Post02, Post03 } from "./blog/posts";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Navbar />
      <div className="flex flex-col h-auto bg-blogBG text-blogText gap-20 pb-20 pt-10">
        <Post03 />
        <Post01 />
        <Post02 />
      </div>
    </>
  );
}
