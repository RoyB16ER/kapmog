import React from "react";
import ReactDOM from "react-dom/client";

function Navbar() {
  const pages = ["index", "about"];
  const navLinks = pages.map((page) => {
    return <a href={"./" + page + ".html"}>&nbsp;{page}</a>;
  });

  return <nav>{navLinks}</nav>;
}
export default Navbar;
