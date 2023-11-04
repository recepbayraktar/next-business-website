import Link from "next/link";
import { Button } from "../ui/button";
import { AlignJustify, HelpCircle, Sun, User2 } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export default function Nav() {
  const { setTheme, theme } = useTheme();
  const pathName = usePathname();
  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <nav className="sticky top-0 z-10  bg-background dark:bg-secondary-foreground shadow-md px-4 lg:px-0">
      <div className="grid md:grid-cols-3 grid-cols-2 items-center max-w-7xl m-auto ">
        <div className="w-20 h-20 flex items-center">
          <a href="/">LOGO</a>
        </div>

        <ul className="w-full hidden md:flex justify-between   ">
          <li>
            <Button asChild variant={"ghost"}>
              <Link className={pathName == "/" ? "text-primary" : ""} href="/">
                Home
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant={"ghost"}>
              <Link
                className={pathName == "/services" ? "text-primary" : ""}
                href="/services"
              >
                Services
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant={"ghost"}>
              <Link
                className={pathName == "/about-us" ? "text-primary" : ""}
                href="/about-us"
              >
                About
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant={"ghost"}>
              <Link
                className={pathName == "/contact" ? "text-primary" : ""}
                href="/about-us"
              >
                Contact
              </Link>
            </Button>
          </li>
        </ul>
        <ul className="w-full hidden md:flex justify-end gap-2 md:gap-4 ">
          <li>
            <Button
              className="border"
              onClick={handleThemeChange}
              variant={"ghost"}
              size={"icon"}
            >
              <Sun size={16} />
            </Button>
          </li>
          <li>
            <Button variant={"ghost"} size={"icon"}>
              <HelpCircle size={16} />
            </Button>
          </li>

          <li>
            <Button variant={"ghost"} size={"icon"}>
              <User2 size={16} />
            </Button>
          </li>
        </ul>
        <div className="flex justify-end   md:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size={"icon"}>
                <AlignJustify size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="w-full h-full flex flex-col  ">
                <ul>
                  <li>
                    <Button asChild className="w-full" variant={"ghost"}>
                      <Link
                        className={pathName == "/" ? "text-primary" : ""}
                        href="/"
                      >
                        Home
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button asChild className="w-full" variant={"ghost"}>
                      <Link
                        className={pathName == "/" ? "text-primary" : ""}
                        href="/services"
                      >
                        Services
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button asChild className="w-full" variant={"ghost"}>
                      <Link
                        className={pathName == "/" ? "text-primary" : ""}
                        href="/about-us"
                      >
                        About
                      </Link>
                    </Button>
                  </li>
                </ul>
                <div className="flex justify-between mt-auto">
                  <Button
                    className="border"
                    onClick={handleThemeChange}
                    variant={"ghost"}
                    size={"icon"}
                  >
                    <Sun size={16} />
                  </Button>
                  <Button variant={"ghost"} size={"icon"}>
                    <HelpCircle size={16} />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
