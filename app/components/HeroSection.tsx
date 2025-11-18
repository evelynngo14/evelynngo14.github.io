import { VscChevronLeft, VscChevronUp } from "react-icons/vsc";
import { RiCloseFill } from "react-icons/ri";
import { LuTextCursor } from "react-icons/lu";
import BlogPost from "./BlogPost";


export default function HeroSection() {
  return (
    <div className="fix-scale flex flex-col min-h-screen max-w-full items-center justify-center text-border">
      <RetroWindow>
        <h1 className="text-lg text-center font-bold p-3">
          welcome to my personal website
        </h1>
        <br></br>
        <div className="text-md flex">
          evelyn is coding . . .
          <div className="relative top-0.5 animate-blink">
            <LuTextCursor />
          </div>
        </div>
      </RetroWindow>
    </div>
  );
}

type Props = {
  children: React.ReactNode;
};

const RetroWindow = ({ children }: Props) => {
  return (
    <div className="lg:scale-125 max-w-md sm:w-1/2 h-4xl grid grid-rows-[25px_200px_15px] grid-cols-[1fr_15px] justify-center bg-white border-3 border-border rounded-md shadow-[-6px_6px_0_#3b467e]">
      <div className="rectangle col-span-full w-full h-full border-border bg-tabBlue rounded-t-xs border-b-2">
        <div className="relative top-0.5 justify-items-end text-white">
          <RiCloseFill />
        </div>
      </div>
      <div className="col-span-full row-start-2 row-span-1 py-3 flex flex-col justify-center items-center">
        {children}
      </div>

      <div className="flex rectangle relative right-0 col-start-2 row-start-2 row-end-auto border-1">
        <div className="relative right-0.5">
          <VscChevronUp />
        </div>
        <div className="flex rectangle top-0 right-0 absolute border-border border-b-1 w-full h-4"></div>
      </div>

      <div className="rectangle relative bottom-0 w-full row-start-3 col-span-1 border-1">
        <div className="relative bottom-1/10">
          <VscChevronLeft />
        </div>
        <div className="rectangle bottom-0 absolute border-border border-r-1 w-4 h-full"></div>
      </div>
    </div>
  );
};
