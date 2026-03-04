import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export function MainPage() {
  return (
    <div className="relative grid md:grid-cols-2 gap-10">
      <div className="text-card-foreground space-y-5">
        <div className="space-y-1">
          <Badge variant={"outline-white"}>Locally owned and operated</Badge>
          <h1 className={"text-4xl md:text-6xl mb-5 font-bold"}>
            Secure Self Storage in Halifax
          </h1>
        </div>
        <h3 className="text-base font-normal">
          Our brand new units are ready to safely house your belongings small
          and large. Affordable prices and 24/7 security for your piece of mind.
        </h3>
        <div className="text-sm italic">3 different unit sizes available</div>
        <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
          <Link href="/rentals/#units">
            <Button id="rentals-explore-units" size={"lg"} className="w-full">
              Explore units
            </Button>
          </Link>
          <Link href="#contact-self-storage">
            <Button
              id="rentals-contact-us"
              variant={"outline"}
              size={"lg"}
              className="w-full md:w-auto"
            >
              <PhoneCall className="size-4 mr-3" />
              Contact us
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex items-center h-full">
        <div className="h-full rounded-lg">
          <img
            src="/img/self_storage/units.webp"
            className="rounded-lg object-cover size-full"
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
