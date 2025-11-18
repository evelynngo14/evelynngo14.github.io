interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  content: React.ReactNode;
}

export default function BlogPost(props: BlogPostProps) {
  return (
    <div className="box-content self-center text-left px-7 min-h-7 lg:100 max-w-3xl md:px-50 sm:px-10 pt-10">
      <header className="">
        <h1 className="text-lg lg:text-2xl">{props.title}</h1>
        <p className="">{props.description}</p>
        <p className="text-xs lg:text-sm">Posted on {props.date}</p>
      </header>
      <br></br>
      <div className="text-xs lg:text-base">{props.content}</div>
    </div>
  );
}
