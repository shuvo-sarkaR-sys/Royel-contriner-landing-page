"use client";

import { Calendar, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { ContactSectionDescription } from "./ContactSectionDescription";
import { ContactSectionHeader } from "./ContactSectionHeader";
import { displayPhoneNumber } from "@/lib/phoneUtils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import * as React from "react";

export const ContactSection: React.FC = () => {
  const highlightedItem = useHighlightedItem();
  return (
    <div className="pb-40 pt-32">
      <div className="relative bg-opacity-0" id="contact-us">
        <div
          className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(0deg,transparent_0%,black_25%)] -z-10"
          style={{ backgroundImage: `url('/img/line.svg')` }}
        />
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl py-10">Get in touch</h2>
          <div className="max-w-6xl grid md:grid-cols-2 gap-20 md:gap-10 m-auto px-5">
            <div
              id="contact-visit-us"
              className={cn({
                ["opacity-70"]: Boolean(highlightedItem),
              })}
            >
              <ContactSectionHeader>Visit us</ContactSectionHeader>
              <ContactSectionDescription>
                Chat with us in person
              </ContactSectionDescription>
              <div className="text-sm py-5 flex">
                <div className="pt-1 pr-1">
                  <MapPin className="size-4 " />
                </div>
                <Link
                  href={"https://maps.app.goo.gl/WPedRTFphXyKPVJ88"}
                  target="_blank"
                >
                  <div>
                    <div>1467 Hammonds Plains Road</div>
                    <div>Hammonds Plains, Nova Scotia, Canada</div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              id="contact-self-storage"
              className={cn({
                ["py-5 pl-5 border-l-8"]: highlightedItem === "rentals",
                ["opacity-70"]:
                  Boolean(highlightedItem) && highlightedItem !== "rentals",
              })}
            >
              <ContactSectionHeader>
                Looking for self storage?
              </ContactSectionHeader>
              <ContactSectionDescription>
                Our brand new, locally owned self storage location is now open.
              </ContactSectionDescription>
              <div className="flex flex-col gap-2 py-5 text-sm">
                <div className="flex flex-row items-center">
                  <Phone className="size-4 mr-2" />
                  <a href="tel:+19022015101">
                    {displayPhoneNumber("9022015101")}
                  </a>
                </div>
                <div className="flex flex-row items-center">
                  <Mail className="size-4 mr-2" />
                  <a href="mailto:royalcontainershfx@gmail.com">
                    {"royalcontainershfx@gmail.com"}
                  </a>
                </div>
              </div>
              <div className="">
                <Link href={"/rentals#units"}>
                  <Button variant={"outline"}>Explore available units</Button>
                </Link>
              </div>
            </div>

            <div
              id="contact-containers"
              className={cn({
                ["opacity-70"]:
                  Boolean(highlightedItem) && highlightedItem !== "containers",
              })}
            >
              <div
                className={cn({
                  ["py-5 pl-5 border-l-8"]: highlightedItem === "containers",
                })}
              >
                <ContactSectionHeader>
                  Purchase a container?
                </ContactSectionHeader>
                <ContactSectionDescription>
                  Submit a container purchase request and someone from our team
                  will be in touch.
                </ContactSectionDescription>
                <div className="flex flex-col gap-2 py-5 text-sm">
                  <div className="flex flex-row items-center">
                    <Phone className="size-4 mr-2" />
                    <a href="tel:+19022015101">
                      {displayPhoneNumber("9022015101")}
                    </a>
                  </div>
                  <div className="flex flex-row items-center">
                    <Mail className="size-4 mr-2" />
                    <a href="mailto:royalcontainershfx@gmail.com">
                      {"royalcontainershfx@gmail.com"}
                    </a>
                  </div>
                </div>
                <div className="">
                  <Link href={"https://tally.so/r/nGo5Oz"} target="_blank">
                    <Button variant={"outline"}>
                      Submit a container purchase request
                      <ExternalLink className="size-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="contact-mechanic-shop"
              className={cn({
                ["py-5 pl-5 border-l-8"]: highlightedItem === "auto",
                ["opacity-70"]:
                  Boolean(highlightedItem) && highlightedItem !== "auto",
              })}
            >
              <ContactSectionHeader>Mechanic shop</ContactSectionHeader>
              <ContactSectionDescription>
                Give us a call to book an appointment or discuss your mechanic
                needs.
              </ContactSectionDescription>
              <div className="flex flex-col gap-2 py-5 text-sm">
                <div className="flex flex-row items-center">
                  <Phone className="size-4 mr-2" />
                  <a href="tel:+19028329067">
                    {displayPhoneNumber("9028329067")}
                  </a>
                </div>
                <div className="flex flex-row items-center">
                  <Mail className="size-4 mr-2" />
                  <a href="mailto:alisarmain@gmail.com">
                    {"alisarmain@gmail.com"}
                  </a>
                </div>
                <div className="text-sm flex">
                  <div className="pt-1 pr-1">
                    <MapPin className="size-4 " />
                  </div>
                  <Link
                    href={"https://maps.app.goo.gl/WPedRTFphXyKPVJ88"}
                    target="_blank"
                  >
                    <div>
                      <div>1467 Hammonds Plains Road</div>
                      <div>Hammonds Plains, Nova Scotia, Canada</div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex py-5">
                <Link
                  href="https://www.shopsparkify.com/appt/royal"
                  target="_blank"
                >
                  <Button
                    id="rentals-explore-units2"
                    className="w-full"
                    variant={"outline"}
                  >
                    <Calendar className="size-4 mr-2" />
                    <span>Book an appointment today</span>
                  </Button>
                </Link>
              </div>
              <div>
                <div className="italic">Hours of operation</div>
                <div className="grid grid-cols-3 text-sm">
                  {[
                    { day: "Monday", from: "8:00am", to: "6:00pm" },
                    { day: "Tuesday", from: "8:00am", to: "6:00pm" },
                    { day: "Wednesday", from: "8:00am", to: "6:00pm" },
                    { day: "Thursday", from: "8:00am", to: "6:00pm" },
                    { day: "Friday", from: "8:00am", to: "6:00pm" },
                    { day: "Saturday", from: "10:00am", to: "6:00pm" },
                    { day: "Sunday", from: "10:00am", to: "4:00pm" },
                  ].map(({ day, from, to }, i) => {
                    return (
                      <React.Fragment key={i}>
                        <div>{day}</div>
                        <div>{from}</div>
                        <div>{to}</div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
              <div className="mt-5">
                <Link
                  href={"https://www.facebook.com/RoyalAutomotiveLtd"}
                  target="_blannk"
                >
                  <Button className="" size="sm" variant={"outline"}>
                    <img src={"/img/facebook.png"} className="size-4 mr-2" />
                    <span>Follow us on Facebook</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function useHighlightedItem() {
  const pathname = usePathname();
  switch (pathname) {
    case "/rentals":
      return "rentals";
    case "/auto":
      return "auto";
    case "/containers":
      return "containers";
    default:
      return undefined;
  }
}
