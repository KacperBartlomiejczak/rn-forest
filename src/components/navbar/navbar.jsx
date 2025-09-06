import { useEffect, useState } from "react";

import NavbarLink from "./navbarLink";
import NavbarHeading from "./navbarHeading";
import NavbarBurger from "./navbarBurger";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  // Add/remove body class to disable scrolling when menu is open
  useEffect(() => {
    const cls = "no-scroll";
    if (isOpen) document.body.classList.add(cls);
    else document.body.classList.remove(cls);

    return () => document.body.classList.remove(cls);
  }, [isOpen]);
  return (
    <nav className="flex justify-center items-center  bg-white p-4">
      <div className="container flex flex-row items-center justify-between">
        <NavbarHeading />
        <ul
          className={`fixed w-screen h-screen bg-white top-0 right-0 flex flex-col justify-center items-center gap-3  ${
            isOpen ? "translate-x-0" : "translate-x-[101%]"
          } transition-transform duration-300 md:gap-4 lg:relative lg:w-auto lg:h-auto lg:flex-row lg:gap-4 lg:translate-x-0 `}
        >
          <NavbarLink onClose={handleClose}>Home</NavbarLink>
          <NavbarLink onClose={handleClose}>O nas</NavbarLink>
          <NavbarLink onClose={handleClose}>Oferta</NavbarLink>
          <NavbarLink onClose={handleClose}>Kontakt</NavbarLink>
        </ul>
        <NavbarBurger onOpen={handleOpen} isOpen={isOpen} />
      </div>
    </nav>
  );
}
