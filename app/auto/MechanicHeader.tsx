import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall } from "lucide-react";
import Link from "next/link";

export const MechanicHeader: React.FC = () => {
  return (
    <div className="relative grid md:grid-cols-2 gap-10">
      <div className="text-card-foreground space-y-5">
        <div className="space-y-1">
          <Badge variant={"outline-white"}>Locally owned and operated</Badge>
          <h1 className={"text-4xl md:text-5xl mb-5 font-bold"}>
            Your vehicle repaired. <br />
            Hassle free.
          </h1>
        </div>
        <h3 className="text-base font-normal">
          Our fully licensed, locally owned mechanic shop will serve all your
          vehicle needs. With 3 generations and decades of experience, no
          mechanic repair is too small or too big. We are a full-service
          mechanic shop that helps keep you safe on the road.
        </h3>
        <div className="text-sm italic">We sell new and used tires.</div>
        <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
          <Link href="https://www.shopsparkify.com/appt/royal" target="_blank">
            <Button id="rentals-explore-units" size={"lg"} className="w-full">
              <Calendar className="size-4 mr-2" />
              <span>Book an appointment today</span>
            </Button>
          </Link>
          <Link href="#contact-mechanic-shop">
            <Button
              id="rentals-contact-us"
              variant={"outline"}
              size={"lg"}
              className="w-full md:w-auto"
            >
              <PhoneCall className="size-4 mr-2" />
              Contact us
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex items-center h-full">
        <div className="h-full rounded-lg">
          <img
            src="/img/mechanic.webp"
            className="rounded-lg object-cover size-full"
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};
