import ReactMarkdown from "react-markdown";
import BlogPost from "../components/BlogPost";

const post03_md = `
  in this post i'm going to document how i created the dropdown menus for my random song generator project.
  
  `

const post01_md = `i coded the retro computer window from scratch, but it took forever to get it looking how i wanted it to! i found a few websites that were life-savers for helping me visualize my layouts and understand what i was doing.  
  &nbsp;  
  \ni got good results using a grid layout with a fixed width and height for each cell using a absolute position. elements like the scroll bar and chevron arrows had to be manually positioned using top / right / bottom / left utilities. hopefully once i'm able to optimize the code i'll consider sharing it as a react component.`;

const post02_md =
  "i'm starting this blog to share my learning journey and exploration into web development. <3";

export default function Post01() {
  return (
    <BlogPost
      title="css"
      description=""
      date="11/17/2025"
      content={<ReactMarkdown>{post01_md}</ReactMarkdown>}
    />
  );
}
export function Post02() {
  return (
    <BlogPost
      title="hello world"
      description=""
      date="11/17/2025"
      content={<ReactMarkdown>{post02_md}</ReactMarkdown>}
    />
  );
}

export function Post03() {
  return (
    <BlogPost
      title="creating a simple dropdown for my song app"
      description=""
      date="11/18/2025"
      content={<ReactMarkdown>{post03_md}</ReactMarkdown>}
    />
  )
};
