import { type FC, useState } from "react";
import { NavLink, Link } from "react-router";
import { Star } from "lucide-react";
import { Divide as Hamburger } from "hamburger-react";
import {motion, AnimatePresence} from "motion/react"


export const links = [
    { name: "Home", url: "/" },
    { name: "Invitation", url: "/invitation" },
    { name: "Gift", url: "/gift" },
    { name: "Gallery", url: "/gallery" },
    { name: "Location", url: "/location" },
  ];

  const hamMenuVariant = {
    hidden: {
      x: "100vw",
      
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",

      },
      exit: {
        x: "100vw",
        transition: {
          duration: 0.3,
          ease: "easeIn",
          when: "beforeChildren",
        },
      }
    }
  } as const
  
  const linksVariants = {
  hidden: { opacity: 0,
    //  y: 20
     },
  visible: {
    opacity: 1,
    // y: 0,
    transition: { duration: 0.3, type: "spring", stiffness: 200 },
  },
} as const;
export const Navbar: FC = () => {
  const [isOpen, setOpen] = useState(false);
    return (
      <header className="w-full fixed top-0 left-0  py-4 px-[2.5%] ham-menu flex items-center flex-wrap">
        <nav className="w-[70%] md:w-1/2 flex items-center justify-start">
          <Link to="/" className="flex items-center  ">
            <Star className="size-4 text-yellow-800 mr-1" /> Sunshine & Daniel
          </Link>
        </nav>
        <nav className="w-1/2 md:flex hidden">
          <ul className="flex  w-full justify-between items-center  gap-4">
            {links.map((link) => (
              <li key={link.url} className="links">
                <NavLink
                  to={link.url}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex md:hidden w-[30%]  items-center justify-end">
          {/* <motion.button className="bg-transparent p-0 m-0"  layoutId="ham-menu"  transition={{ type: "spring" }} > */}
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            distance="md"
            rounded
            hideOutline={false}
          />
          {/* </motion.button> */}
          <AnimatePresence>
            {isOpen && (
              <motion.section
                key="modal"
                variants={hamMenuVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-0 left-0 h-dvh   w-full   flex items-center justify-end "
              >
                <div
                  className="w-full fixed top-0 left-0 h-full  z-10 blur-sm backdrop-blur-sm"
                  onClick={() => setOpen(false)}
                ></div>
                <motion.ul
                  className="h-dvh w-[70%] overflow-y-auto   fixed flex z-[30] gap-4 flex-col ham-menu items-center  justify-center "
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.3 }}
                >
                  {links.map((link) => {
                    return (
                      <motion.li
                        initial="hidden"
                        animate="visible"
                        key={link.name}
                        variants={linksVariants}
                        className="w-full flex justify-center items-center"
                      >
                        <Link
                          to={link.url}
                          className="w-full text-center"
                          onClick={() => setOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.section>
            )}
          </AnimatePresence>
        </nav>
      </header>
    );
}