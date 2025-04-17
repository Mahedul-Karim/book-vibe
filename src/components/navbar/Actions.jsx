import React from "react";
import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";

const Actions = ({ className = "", closeOnClick = false }) => {
  const actionButtons = closeOnClick ? (
    <>
      {" "}
      <SheetClose asChild>
        <Button className="w-full md:w-auto">Sign In</Button>
      </SheetClose>{" "}
      <SheetClose asChild>
        <Button variant="secondary" className="text-white w-full md:w-auto">
          Sign Up
        </Button>
      </SheetClose>{" "}
    </>
  ) : (
    <>
      <Button className="w-full md:w-auto">Sign In</Button>
      <Button variant="secondary" className="text-white w-full md:w-auto">
        Sign Up
      </Button>
    </>
  );

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 ${className} `}
    >
      {actionButtons}
    </div>
  );
};

export default Actions;
