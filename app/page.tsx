import Image from "next/image";
import HeroSection from "./components/HeroSection";
import BlogPost from "./components/BlogPost.tsx/BlogPost";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col h-300 bg-blogBG text-blogText gap-5">
        <BlogPost
          title="css flex and grid layouts"
          description=""
          date="11-18-2025"
          content="
        i coded the retro computer window from scratch, but it took forever to get it looking how i wanted it to!
        i found a few websites that were life-savers for helping me visualize my layouts and understand what i was doing.
        hopefully once i'm able to optimize the code i'll consider sharing it as a react component."
        />

        <BlogPost
          title="hello world"
          description=""
          date="11-18-2025"
          content="
          i'm starting this blog to share my learning journey and exploration into web development.
          <3"
        />
      </div>
    </>
  );
}
