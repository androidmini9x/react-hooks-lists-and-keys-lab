import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const elmentLink = links.map((link, i) => {
    return <a href={"#"+link} key={i}>{link}</a>
  });

  return (<nav>{elmentLink}</nav>);
}

export default NavBar;
