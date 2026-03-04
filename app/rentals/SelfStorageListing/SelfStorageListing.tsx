import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SelfStorageUnit } from "./SelfStorageListingModel";
import Link from "next/link";

export interface ListingProps {
  unit: SelfStorageUnit;
}

export const SelfStorageListing: React.FC<ListingProps> = ({ unit }) => {
  const formattedMonthlyPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
  }).format(unit.monthly / 100);
  return (
    <>
      <div className="flex flex-col md:flex-col max-w-4xl gap-10 p-5 md:rounded-xl md:border relative bg-white w-full md:w-auto">
        <div className="flex flex-col items-center">
          <div className="md:size-[300px]">
            <img
              className="object_cover rounded-[calc(0.75rem-8px)]"
              src={unit.image_link}
              alt="Image of a container"
            />
          </div>
        </div>
        <div>
          {unit.is_most_popular && (
            <Badge variant={"default"}>Most popular</Badge>
          )}
          <div className="text-2xl font-semibold">{unit.title}</div>
          <div className="font-semibold text-muted-foreground">
            <span className="text-xl">{formattedMonthlyPrice} </span>
            <span className="text-sm">per month</span>
          </div>
          {/* {unit.vacantUnits < 5 && (
            <div className="font-bold">Only {unit.vacantUnits} units left!</div>
          )} */}
          <div className="">
            {/* <div className="font-semibold">
              {unit.squareFootage} Sq Foot Storage Unit
            </div> */}
            <div className="flex flex-col gap-2 text-sm py-8">
              {unit.features.map((feature) => {
                return (
                  <div key={feature}>
                    <span key={feature}>{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-3">
            <Link href={unit.cta.href} target="_blank">
              <Button id="listings-reserve-now" variant={"outline"}>
                {unit.cta.text}
              </Button>
            </Link>
            <Link href="#contact-self-storage">
              <Button variant={"ghost"}>Contact us</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
