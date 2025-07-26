import type { FC, ReactNode} from "react";
import {motion  } from "motion/react";


type ParentProps = {
    children: ReactNode
}
export const ParentComp: FC<ParentProps> = ({children}) => {

const containerVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      //   delay: 0.5,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeIn" },
  },
} as const;
    return (
        <motion.div  variants={containerVariant}
        
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full flex min-h-dvh pt-[80px] pb-8 px-[5%] flex-col items-center justify-center">{children}</motion.div>
    )
}