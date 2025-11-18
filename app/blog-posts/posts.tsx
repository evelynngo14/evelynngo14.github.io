import ReactMarkdown from "react-markdown";
import BlogPost from "../components/BlogPost";

const post03_md = `
  in this post i'm going to document how i created the dropdown menus for my random song generator project.
  &nbsp;
  i learned that i *do not need to use a library* to create dropdown menus. modern css and html work perfectly fine to create the foundation of simple components.
  this is also something i learned with datepickers for my event planning project, i thought i needed a library for that too-- but a datelocal-time HTML element worked well for my use.
  javascript would then be used to handle user interactions such as opening and closing the dropdown menu and sending data to the server.
  knowing the foundational capabilities of modern css and html helps with creating reusable and accessible components without the complexity of a library.
  `

const post01_md = `i coded the retro computer window from scratch, but it took forever to get it looking how i wanted it to! i found a few websites that were life-savers for helping me visualize my layouts and understand what i was doing.  
  &nbsp;  
  \ni found good results using a grid layout with a fixed width and height for each cell using absolute positioning. elements like the scroll bar and chevron arrows had to be manually positioned using top / right / bottom / left utilities. hopefully once i'm able to optimize the code i'll consider sharing it as a react component.`;

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
      title="creating simple dropdown menus for my song randomizer project"
      description=""
      date="11/18/2025"
      content={<ReactMarkdown>{post03_md}</ReactMarkdown>}
    />
  )
};
