import React from "react";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <section className="bg-background py-10 xs:py-16 px-8 xs:px-12 lg:px-22 rounded-3xl mt-6 grid gap-8 md:gap-0 md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <h1 className="font-playfair text-2xl xs:text-3xl sm:text-4xl xl:text-5xl font-bold leading-[1.4]">Books to freshen up <br /> your bookshelf</h1>
        <div className="mt-4">
            <Button className="h-8 xs:h-9 px-3 sm:px-4 text-xs xs:text-sm" >View The List</Button>
        </div>
      </div>
      <div className="justify-self-center">
        <img
          src="/banner.png"
          alt=""
          className="max-h-[270px] sm:max-h-[330px] lg:max-h-[394px] xl:max-h-[400px] xl:max-w-[318px] object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;
