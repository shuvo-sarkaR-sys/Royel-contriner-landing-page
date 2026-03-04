import { Suspense } from "react";
import { ContainerProductForm } from "./ContainerProductForm";
import { Metadata } from "next";
import Link from "next/link";
import { ContainerProductImage } from "./ContainerProductImage";
import { ContainersTestimonialSection } from "./ContainersTestimonialSection";
import { Badge } from "@/components/ui/badge";

export default function PurchasePage() {
  return (
    <Suspense>
      <div className="md:max-w-6xl md:m-auto space-y-10 px-5 py-20">
        <div className="flex flex-col items-center">
          <Badge variant={"outline-white"}>Locally owned and operated</Badge>
          <h1 className="font-bold text-4xl">
            Custom Shipping Containers at Your Doorstep
          </h1>
        </div>
        <div className="grid md:grid-cols-2 pb-10 md:gap-10">
          <div className="flex flex-col">
            <div className="w-full rounded-lg overflow-hidden">
              <ContainerProductImage />
            </div>
            <div className="pt-10 space-y-5">
              <div className="text-lg font-bold text-muted-foreground">
                Locally owned and operated in Halifax, Nova Scotia
              </div>
              <div>
                Find the perfect shipping container for your needs. We offer a
                variety of sizes and free consultations for custom
                modifications.
              </div>

              <div className="text-sm italic">
                * Modifications are available for an extra charge. Please
                provide information about the modifications in{" "}
                <Link
                  href={"https://tally.so/r/nGzYbQ"}
                  target="_blank"
                  className="text-primary font-semibold hover:underline"
                >
                  your request
                </Link>
                . A team member will reach out to you for next steps.
              </div>
            </div>
          </div>
          <div className="">
            <ContainerProductForm />
          </div>
        </div>
        <div>
          <ContainersTestimonialSection />
        </div>
      </div>
    </Suspense>
  );
}

export const metadata: Metadata = {
  title: "Royal Containers",
  description:
    "Purchase from the leading shipping container suppliers in Atlantic Canada.",
};
