import { type FC, useState } from "react";
import { NavLink, Link } from "react-router";
import { Divide as Hamburger } from "hamburger-react";
import {motion, AnimatePresence} from "motion/react";


export const links = [
    { name: "Home", url: "/" },
    { name: "Story", url: "/story" },
    { name: "Invitation", url: "/invitation" },
    { name: "Gift", url: "/gift" },
    { name: "Gallery", url: "/gallery" },
    { name: "Location", url: "/location" },
  ];

  const hamMenuVariant = {
    hidden: {
      x: "100vw",
      opacity: 0,
      filter: "blur(20px)",
    },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    exit: {
      x: "100vw",
      opacity: 0,

      filter: "blur(20px)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
        when: "beforeChildren",
      },
    },
  } as const;
  
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
      <motion.header className="w-full  top-0 left-0  pt-20 md:pb-4 px-[2.5%]  flex items-center flex-wrap z-20">
     
        <div className="w-full flex items-center flex-col justify-center">
          <h1 className="text-5xl font-bold font-amatic w-full text-center pb-4 md:pb-10">
            Daniel & Sunshine
          </h1>
          <ul className=" hidden md:flex items-center justify-center gap-6 flex-wrap">
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
        </div>
        <nav className="flex md:hidden w-full  items-center justify-end">
          
          <div className="fixed top-4 right-[5%] rounded-md bg-background z-[300]">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={20}
              distance="md"
              rounded
              hideOutline={false}
            />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.section
                key="modal"
                variants={hamMenuVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="fixed top-0 left-0 h-dvh z-[199]  w-full   flex items-center justify-end "
              >
                <div
                  className="w-full fixed top-0 left-0 h-full  z-[120]"
                  onClick={() => setOpen(false)}
                ></div>
                <motion.ul
                  className="h-dvh w-[70%] overflow-y-auto px-4 py-10  fixed flex z-[130]  flex-col ham-menu  "
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.3 }}
                >
                  <li className="text-3xl font-bold font-amatic pb-2">
                    Sunshine & Daniel
                  </li>
                  {links.map((link) => {
                    return (
                      <motion.li
                        initial="hidden"
                        animate="visible"
                        key={link.name}
                        variants={linksVariants}
                        className="w-full  flex justify-center items-center"
                      >
                        <Link
                          to={link.url}
                          className="w-full text-left px-2 py-3 rounded-md hover:bg-secondary transition-color ease-in duration-300"
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
      </motion.header>
    );
}