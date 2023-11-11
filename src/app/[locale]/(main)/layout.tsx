"use client";
import { AnimatePresence, Spring, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const transitionSpringPhysics: Spring = {
  type: "spring",
  mass: 0.1,
  stiffness: 80,
  damping: 10,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <motion.div
          style={{
            backgroundColor: "#00A8B5",
            position: "fixed",
            width: "100vw",
            zIndex: 1000,
            bottom: 0,
          }}
          transition={transitionSpringPhysics}
          animate={{ height: "0vh", display: "none" }}
          exit={{ height: "100vh", display: "flex" }}
          className="flex justify-center items-center text-white text-2xl"
        >
          LOGO
        </motion.div>
        <motion.div
          style={{
            backgroundColor: "#00A8B5",
            position: "fixed",
            width: "100vw",
            zIndex: 1000,
            top: 0,
          }}
          transition={transitionSpringPhysics}
          initial={{ height: "100vh" }}
          animate={{ height: "0vh", transition: { delay: 0 } }}
        />

        <main className="md:mx-auto min-h-screen">{children}</main>
      </motion.div>
    </AnimatePresence>
  );
}
