interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  content: string;
}

export default function BlogPost(props: BlogPostProps) {
  return (
    <div className="box-content self-center text-left px-7 min-h-7 lg:100 max-w-3xl md:px-50 sm:px-10 pt-10">
      <header className="">
        <h1 className="pb-2 text-lg">{props.title}</h1>
        <p className="">{props.description}</p>
        <p className="text-xs">Posted on {props.date}</p>
      </header>
      <br></br>
      <div className="pt-3 text-xs">{props.content}</div>
    </div>
  );
}
