"use client";
import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home(ref: any) {
  const { setTheme } = useTheme();
  return (
    <div className="flex  flex-col items-center justify-between ">
      <Hero />
    </div>
  );
}
