"use client";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { analytics } from "@/lib/segment";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { cn } from "@/lib/utils";
import { Crown, Menu, PhoneCall } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Theme } from "../providers/ThemeProvider";
import { HeaderLogo } from "./HeaderLogo";

const navs = [
  { href: "/rentals", label: "Self storage" },
  { href: "/containers", label: "Shipping containers" },
  { href: "/auto", label: "Mechanic shop" },
] as const;

export const Header: React.FC<{ theme: Theme }> = ({ theme }) => {
  const pathname = usePathname();
  const isDesktop = useIsDesktop();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="w-full flex-none bg-opacity-0">
      <div className="max-w-6xl mx-auto">
        <div className="py-4 border-slate-900/10 md:border-0 dark:border-slate-300/10 px-5">
          <div className="relative flex items-center min-h-[50px]">
            <Link
              href={"/"}
              className="left-0 absolute top-1/2 -translate-y-1/2"
            >
              <HeaderLogo theme={theme} />
            </Link>
            <nav className="hidden md:block m-auto font-semibold text-muted-foreground">
              <ul className="flex gap-x-8 items-center">
                {navs.map((item) => {
                  return (
                    <li className="" key={item.label}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors",
                          pathname === item.href
                            ? "bg-primary font-medium text-white"
                            : "text-muted-foreground hover:text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Link
              href="#contact-us"
              className="right-0 absolute top-1/2 -translate-y-1/2 hidden md:block"
              onClick={() => {
                analytics.track("Header contact us clicked");
              }}
            >
              <Button
                id="header-contact-us"
                variant={"outline"}
                className="w-full md:w-auto"
              >
                <PhoneCall className="size-4 mr-3" />
                Contact us
              </Button>
            </Link>
            <div className="ml-auto block md:hidden">
              <Drawer
                open={isDrawerOpen && !isDesktop}
                onOpenChange={(newOpen) => setIsDrawerOpen(newOpen)}
              >
                <DrawerTrigger asChild>
                  <Button id="mobile-header-open-drawer" variant="ghost">
                    <Menu size={25} />
                    <span className="sr-only">Open Drawer</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <nav className="m-auto font-semibold py-20">
                    <ul className="flex flex-col gap-y-8 items-center">
                      {[{ href: "/", label: "Royal" }, ...navs].map((item) => {
                        return (
                          <li className="hover:text-primary" key={item.label}>
                            <Link
                              href={item.href}
                              className={cn(
                                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                                pathname === item.href
                                  ? "bg-muted font-medium text-primary"
                                  : "text-muted-foreground"
                              )}
                              onClick={() => {
                                setIsDrawerOpen(false);
                              }}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
