import React from "react";
import { Link, useLocation } from "react-router";

const NAV_LINKS = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/listed-books",
    label: "Listed Books",
  },
  {
    to: "/pages-to-read",
    label: "Pages to read",
  },
];

const Nav = ({className=""}) => {
  const location = useLocation();

  return (
    <nav className={className} >
      <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
        {NAV_LINKS.map((nav, i) => (
          <li key={i} className="w-full md:w-auto" >
            <Link
              to={nav.to}
              className={`hover:border-primary border border-solid  rounded-md px-4 py-2 hover:text-primary md:w-auto w-full md:inline-block flex items-center justify-center ${
                location.pathname === nav.to
                  ? "border-primary text-primary"
                  : "border-transparent text-dark-light"
              }`}
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
