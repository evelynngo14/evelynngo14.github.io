import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className=" bg-blogBG span">
      <ul className="flex flex-row gap-3 lg:gap-9 px-7 pt-5 justify-center text-[.8rem] lg:text-base">
        <li className="text-rose-200">blog 🎵 </li>
        <li><Link href="/resources">resources</Link></li>
        <li><Link href="/projects">projects</Link></li>
        <li><Link href="/links">links</Link></li>
      </ul>
    </nav>
  )
}
