
i think i finally learned how to use tailwindcss properly.
at first, the inline syntax looked messy and confusing, UNTIL i learned how to make it more granular. all i had to do was create props for the classes. this makes the code more declarative. it seems obvious is retrospect, but hey, at least i'm learning! here's a code snippet from what my BlogPost component looks like right now:

```js
const title = [
  'text-lg/6',
  'lg:text-2xl',
  'text-pink-500'
]

const date = [
  'text-xs',
  'md:text-sm',
  'py-2',
  'text-gray-300',
  'italic'
]

const content = [
  'font-[family-name:var(--font-inter)]',
  'lg:text-lg'
]

export default function BlogPost(props: BlogPostProps) {
  return (
    <div className="box-content m-auto self-center text-left px-7 min-h-auto max-w-3xl md:px-50 sm:px-10 py-5">
      <header className="">
        <h1 className={title.join(' ')}>{props.title}</h1>
        <p className="">{props.description}</p>
        <p className={date.join(' ')}>Posted on {props.date}</p>
      </header>
      <div className={content.join(' ')}>{props.content}</div>
      <br></br>
    </div>
  );
}
```
