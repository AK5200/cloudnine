import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">CLOUDNINE</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
             {data[0].navbarLinks.map((element) => {
             return ( <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
             );
             })}
          </div>
          <Link to='menu' smooth={true}>
          <button className="menuBtn">RESTAURANTS</button>
          </Link>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;