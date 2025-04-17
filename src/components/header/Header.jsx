import React from "react";
import Logo from "../navbar/Logo";
import Nav from "../navbar/Nav";
import Actions from "../navbar/Actions";

import { AlignRight } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <Logo />
      <Nav className="md:block hidden" />
      <Actions className="md:flex hidden" />
      <div className="md:hidden block">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <AlignRight />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className='h-full' >
              <SheetTitle className={"flex items-center justify-center"}>
                <Logo />
              </SheetTitle>
              <SheetDescription asChild>
                <div className="flex flex-col justify-between h-full mt-4">
                  <Nav />
                  <Actions  closeOnClick />
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
