import BlogPost from "../components/BlogPost";
import StyledMarkdown from "../components/StyledMarkdown";
import fs from "fs";
import path from "path";

// Read the markdown file at build time
const post05_md = fs.readFileSync(
  path.join(process.cwd(), "app/blog/markdown/post05.md"),
  "utf-8"
);

const post04_md = fs.readFileSync(
  path.join(process.cwd(), "app/blog/markdown/post04.md"),
  "utf-8"
);

const post03_md = fs.readFileSync(
  path.join(process.cwd(), "app/blog/markdown/post03.md"),
  "utf-8"
);

const post02_md = fs.readFileSync(
  path.join(process.cwd(), "app/blog/markdown/post02.md"),
  "utf-8"
);

const post01_md = fs.readFileSync(
  path.join(process.cwd(), "app/blog/markdown/post01.md"),
  "utf-8"
);

export function Post01() {
  return (
    <BlogPost
      title="hello world"
      description=""
      date="11/17/2025"
      content={<StyledMarkdown>{post01_md}</StyledMarkdown>}
    />
  );
}

export function Post02() {
  return (
    <BlogPost
      title="css"
      description=""
      date="11/17/2025"
      content={<StyledMarkdown>{post02_md}</StyledMarkdown>}
    />
  );
}

export function Post03() {
  return (
    <BlogPost
      title="creating simple dropdown menus for my song randomizer project"
      description=""
      date="11/18/2025"
      content={<StyledMarkdown>{post03_md}</StyledMarkdown>}
    />
  )
};

export function Post04() {
  return (
    <BlogPost
      title="future blog features"
      description=""
      date="11/18/2025"
      content={<StyledMarkdown>{post04_md}</StyledMarkdown>}
    />
  )
};

export function Post05() {
  return (
    <BlogPost
      title="hitting myself over the head (tailwindcss)"
      description=""
      date="11/19/2025"
      content={
        <StyledMarkdown>{post05_md}</StyledMarkdown>
      }
    />
  )
}
