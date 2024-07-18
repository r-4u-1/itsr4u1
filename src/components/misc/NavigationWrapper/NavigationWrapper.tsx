import * as React from "react";
import { useRef } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useDimensions } from "../../../utils/use-dimentions";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { Navigation } from "../Navigation/Navigation";

const sidebar = {
  open: (height = 1000) => ({
    x: "0px",
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    x: "-100px",
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const NavigationWrapper = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <AnimatePresence>
      <motion.nav
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        exit={{ x: "-100px"}}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </AnimatePresence>
  );
};
