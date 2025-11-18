import Image from "next/image";
import HeroSection from "./components/HeroSection";
import BlogPost from "./components/BlogPost";
import Markdown from "react-markdown";
import Post01, { Post02 } from "./blog-posts/posts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col h-300 bg-blogBG text-blogText gap-5">
        <Post01 />
        <Post02 />
      </div>
    </>
  );
}
