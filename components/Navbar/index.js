import { useState, useEffect } from "react";
import styles from "./styles";
import Link from "next/link";

import close from "../../public/images/close.svg";
import humburguer from "../../public/images/menu.svg";
import logo from "../../public/images/logo.png";

const list = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Quienes Somos",
    link: "/about",
  },
  {
    name: "Servicios",
    link: "/services",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contacto",
    link: "/contact",
  },
];

export default function Navbar() {
  const [selected, setSelected] = useState(list[0].link);
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);

  const scrollHandler = (_) => {
    if (window.scrollY > 100) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  };

  useEffect(() => {
    setSelected(window.location.pathname);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", () => scrollHandler);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          backgroundColor: scrollDown ? "white" : "transparent",
          transition: "all 300ms ease-in-out",
        }}
      >
        <div
          className={`navbar-filter ${openMenu ? "navbar-filter-active" : ""}`}
        ></div>
        {openMenu ? (
          <span className="nav-icon">
            <img
              src="/images/close.svg"
              onClick={() => setOpenMenu(!openMenu)}
              alt="Close Icon"
              style={{ cursor: "pointer" }}
            />
          </span>
        ) : (
          <span className="nav-icon">
            <img
              src="/images/menu.svg"
              onClick={() => setOpenMenu(!openMenu)}
              alt="Menu"
              style={{ cursor: "pointer" }}
            />
          </span>
        )}
        <Link href="/">
          <div className="logo-container">
            <img
              className="logo"
              src="/images/logo.png"
              alt="Logo"
              style={{ cursor: "pointer" }}
            />
          </div>
        </Link>
        <ul className={`${openMenu ? "active" : ""}`}>
          {list.map((e, i) => (
            <Link href={e.link} onClick={() => setSelected(e.link)} key={i}>
              <a>
                <li
                  className={`${selected === e.link ? "selected" : ""}`}
                  style={{
                    color: scrollDown || openMenu ? "black" : "white",
                    transition: "all 300ms ease-in-out",
                  }}
                >
                  {e.name}
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </nav>
      <style jsx>{styles}</style>
    </>
  );
}
