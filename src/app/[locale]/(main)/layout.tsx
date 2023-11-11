"use client";

import Footer from "@/components/layout/Footer";
import { AnimatePresence, Spring, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const transitionSpringPhysics: Spring = {
  type: "spring",
  mass: 0.2,
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
            backgroundColor: "rgba(0, 0, 0, 0.6)",
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
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            position: "fixed",
            width: "100vw",
            zIndex: 1000,
            top: 0,
          }}
          transition={transitionSpringPhysics}
          initial={{ height: "100vh" }}
          animate={{ height: "0vh", transition: { delay: 0.05 } }}
        />

        <main className="min-h-screen max-w-7xl md:mx-auto mx-4 ">
          {children}
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
