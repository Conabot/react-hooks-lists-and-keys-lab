import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkLis = links.map((link) => <a key={link} href={`#${link}`}>{link}</a>)
  return <nav>
    {/* display an <a> tag for each link here */}
;    {linkLis}
    </nav>;
  ;
}

export default NavBar;
