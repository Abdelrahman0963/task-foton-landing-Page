import React, { useEffect } from "react";
import "./Navbar.css";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { Dropdown } from "flowbite";
import { IoIosMenu } from "react-icons/io";

const NavbarLinks = [
  {
    label: "Home",
    Dropdown: [
      {
        label: "Home 1",
      },
      {
        label: "Home 2",
      },
      {
        label: "Home 3",
      },
    ],
  },
  {
    label: "pages",
    Dropdown: [
      {
        label: "pages 1",
      },
      {
        label: "pages 2",
      },
      {
        label: "pages 3",
      },
    ],
  },
  {
    label: "Portfolio",
    Dropdown: [
      {
        label: "Portfolio 1",
      },
      {
        label: "Portfolio 2",
      },
      {
        label: "Portfolio 3",
      },
    ],
  },
  {
    label: "Shop",
    Dropdown: [
      {
        label: "Shop 1",
      },
      {
        label: "Shop 2",
      },
      {
        label: "Shop 3",
      },
    ],
  },
  {
    label: "Blog",
    Dropdown: [
      {
        label: "Blog 1",
      },
      {
        label: "Blog 2",
      },
      {
        label: "Blog 3",
      },
    ],
  },
  {
    label: "Elements",
    Dropdown: [
      {
        label: "Elements 1",
      },
      {
        label: "Elements 2",
      },
      {
        label: "elements 3",
      },
    ],
  },
];
export default function Navbar() {
  const [active, setActive] = React.useState(null);
  const [scroll, setScroll] = React.useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <React.Fragment>
      <nav className={`navbar !py-6 !px-12 ${scroll ? "activeScroll" : ""}`}>
        <div className="Navbar-container w-full flex md:justify-between">
          <div className="nav-mune-inlargeScreen flex md:hidden">
            <IoIosMenu className="text-3xl cursor-pointer" />
          </div>
          <div className="navbar-brand flex justify-center items-center w-full md:w-auto">
            <img
              className="w-20 md:w-30"
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/07/logo1.png"
              alt="logo"
            />
          </div>
          <div className="navbar-links hidden md:flex">
            <ul className="flex gap-8">
              {NavbarLinks.map((item, index) => (
                <li
                  className="relative cursor-pointer"
                  key={item}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                >
                  <a
                    href="#"
                    className={`transition duration-300 hover:text-[#FF8A73] ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                  {item.Dropdown.length > 0 && active === index && (
                    <ul className="dropdown absolute top[-30em] left-0 mt-0 bg-white shadow-md z-50  w-[200px] h-[auto] rounded-md !p-5  leading-[2]">
                      {item.Dropdown.map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className={
                              active === index && index === 0 ? "active" : ""
                            }
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-mune-search-addToCard flex gap-3 items-center  hidden md:flex">
            <div className="addTOCard">
              <RiShoppingCart2Line className="icon text-3xl text-[#58468C] hover:text-[#FF8A73]" />
            </div>
            <div className="search">
              <IoSearchOutline className="text-3xl text-[#58468C] hover:text-[#FF8A73]" />
            </div>
            <div className="menu bg-[#58468C] w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#FF8A73]">
              <IoMenuOutline className="text-3xl text-[#fff]" />
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
