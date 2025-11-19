interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  content: React.ReactNode;
}

export default function BlogPost(props: BlogPostProps) {
  return (
    <div className="box-content self-center text-left px-7 min-h-auto max-w-3xl md:px-50 sm:px-10">
      <header className="">
        <h1 className="text-lg lg:text-2xl text-pink-500">{props.title}</h1>
        <p className="">{props.description}</p>
        <p className="text-xs lg:text-sm py-2 text-gray-300">Posted on {props.date}</p>
      </header>
      <br></br>
      <div className="sm:text-2xl md:text-sm lg:text-base">{props.content}</div>
    </div>
  );
}
