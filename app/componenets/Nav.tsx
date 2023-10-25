import { HeaderLogo } from "../assetsComponents/images";
import { Hamburger } from "../assetsComponents/icons";
import { navLinks } from "../constants";
import Image from "next/image";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <HeaderLogo
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-monstserrt leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <Hamburger width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
