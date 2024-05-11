import {
  BellDot,
  Home,
  LayoutDashboard,
  LayoutGrid,
  Mail,
  MoonStar,
  Search,
  UserRound,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const scrolled = useScrollTop();

  return (
    <>
      <div
        className={cn(
          "flex items-center py-4 px-5 justify-between sticky top-0 z-50 bg-white mx-auto max-w-[110rem] border-b",
          scrolled && "border-b shadow-sm"
        )}
      >
        <div className="flex items-center gap-[20px]">
          <Link to="/">
            <span
              id="logo"
              className="select-none text-4xl bg-gradient-to-r text-transparent bg-clip-text from-violet-600 to-indigo-600 p-1"
            >
              LinkUp
            </span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="">
                  <Home />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Home</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="">
                  <MoonStar />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Mode</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="">
                  <LayoutGrid />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Dashboard</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex items-center gap-[10px] relative">
            <Search className=" absolute left-3 transform text-slate-500 w-5 h-5" />
            <Input
              type="text"
              className="border h-10 rounded-full pl-10 w-[25rem]"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <UserRound />
          <Mail />
          <BellDot />
          <div className="flex gap-3 items-center ">
            <img
              className="w-[35px] h-[35px] rounded-full object-cover"
              src="/src/assets/Ahmed-Moussa.png"
              alt=""
            />
            <p className="text-sm">Ahmed Moussa</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
