"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Phone, PhoneCall, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { OptionsSelectionSection } from "./OptionsSelectionSection";
import { OptionsSelectionSectionTitle } from "./OptionsSelectionSectionTitle";
import { match } from "ts-pattern";
import Link from "next/link";
import { displayPhoneNumber } from "@/lib/phoneUtils";
import { displayPrice } from "@/lib/moneyUtils";
import { Badge } from "@/components/ui/badge";
import { ContainerSize, useContainerSize } from "./lib/useContainerSize";

export const ContainerProductForm: React.FC = () => {
  const {
    containerType,
    setContainerType,
    containerSize,
    setContainerSize,
    containerCondition,
    setContainerCondition,
    price,
  } = useFormData();
  return (
    <div className="flex flex-col gap-5 md:px-5 md:py-0 py-5">
      <div className="space-y-1 pb-5 box-decoration-clone">
        <h2 className="font-semibold text-lg bg-white">
          Choose your perfect container
        </h2>
        <p className="text-sm bg-white">
          {`We can accommodate a large range of container sizes and features. If you can't find your perfect container in the picker here, please get in touch.`}
        </p>
      </div>
      <OptionsSelectionSection>
        <OptionsSelectionSectionTitle>
          Container size
        </OptionsSelectionSectionTitle>
        <ToggleGroup
          value={containerSize}
          onValueChange={(newValue) => {
            if (newValue) {
              setContainerSize(newValue as ContainerSize);
            }
          }}
          className="flex-wrap"
          type="single"
        >
          {sizeOptions.map((sizeOption) => {
            return (
              <ToggleGroupItem
                variant={"solid"}
                value={sizeOption}
                key={sizeOption}
              >
                {sizeOptionToLabel(sizeOption)}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </OptionsSelectionSection>
      <OptionsSelectionSection>
        <OptionsSelectionSectionTitle>
          Container type
        </OptionsSelectionSectionTitle>
        <ToggleGroup
          value={containerType}
          onValueChange={(newValue) => {
            if (newValue) {
              setContainerType(newValue as ContainerType);
            }
          }}
          type="single"
          className="flex-wrap justify-start"
        >
          {containerTypes.map((containerType) => {
            return (
              <ToggleGroupItem
                variant={"solid"}
                value={containerType}
                key={containerType}
              >
                {containerTypeToLabel(containerType)}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </OptionsSelectionSection>
      <OptionsSelectionSection>
        <OptionsSelectionSectionTitle>
          Container condition
        </OptionsSelectionSectionTitle>
        <ToggleGroup
          value={containerCondition}
          onValueChange={(newValue) => {
            if (newValue) {
              setContainerCondition(newValue as ContainerType);
            }
          }}
          type="single"
          className="flex-wrap"
        >
          {containerConditions.map((containerCondition) => {
            return (
              <ToggleGroupItem
                variant={"solid"}
                value={containerCondition}
                key={containerCondition}
              >
                {containerConditionToLabel(containerCondition)}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </OptionsSelectionSection>
      <div className="py-8">
        <Separator />
        <div className="py-10 space-y-5">
          <div>
            {price !== undefined && (
              <span className="text-4xl">{displayPrice(price)}</span>
            )}
            {price === undefined && (
              <span className="text-4xl">Contact us.</span>
            )}
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-3">
              <Button
                onClick={() => {
                  window.open("https://buy.stripe.com/14kbKAdVw6l9fle6op");
                }}
              >
                <ShoppingCart className="size-4 mr-3" />
                Buy now
              </Button>
              <Link href="#contact-containers" className="w-full md:w-auto">
                <Button variant={"outline"} className="w-full md:w-auto">
                  <PhoneCall className="size-4 mr-3" />
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Phone className="size-4 mr-2" />
            Limited quantity, Call us today to order{" "}
            <a href="tel:+19022015101" className="ml-1">
              {displayPhoneNumber("9022015101")}
            </a>
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
};

function useFormData() {
  const { containerType, setContainerType } = useContainerType();
  const { containerSize, setContainerSize } = useContainerSize();
  const { containerCondition, setContainerCondition } = useContainerCondition();
  const price = match({ containerSize, containerCondition, containerType })
    .with(
      {
        containerSize: "20ft",
        containerCondition: "new",
        containerType: "standard",
      },
      () => {
        return 500000;
      }
    )
    .with(
      {
        containerSize: "20ft",
        containerCondition: "used",
        containerType: "standard",
      },
      () => {
        return 350000;
      }
    )
    .with({ containerSize: "20ft", containerType: "high_cube" }, () => {
      return undefined;
    })
    .with(
      {
        containerSize: "40ft",
        containerCondition: "new",
        containerType: "standard",
      },
      () => {
        return 575000;
      }
    )
    .with(
      {
        containerSize: "40ft",
        containerCondition: "used",
        containerType: "standard",
      },
      () => {
        return 500000;
      }
    )
    .with(
      {
        containerSize: "40ft",
        containerCondition: "new",
        containerType: "high_cube",
      },
      () => {
        return 625000;
      }
    )
    .with(
      {
        containerSize: "40ft",
        containerCondition: "used",
        containerType: "high_cube",
      },
      () => {
        return undefined;
      }
    )
    .exhaustive();
  return {
    containerSize,
    setContainerSize,
    containerType,
    setContainerType,
    containerCondition,
    setContainerCondition,
    price,
  };
}

const sizeOptions: ContainerSize[] = ["20ft", "40ft"];

function sizeOptionToLabel(size: ContainerSize): string {
  switch (size) {
    case "20ft":
      return "20 foot";
    case "40ft":
      return "40 foot";
  }
}

type ContainerType =
  | "standard"
  // | "open_side"
  // | "double_door"
  // | "multi_door"
  | "high_cube";

const containerTypes: ContainerType[] = [
  "standard",
  // "open_side",
  // "double_door",
  // "multi_door",
  "high_cube",
];

function containerTypeToLabel(containerType: ContainerType): string {
  switch (containerType) {
    // case "double_door":
    //   return "Double door";
    // case "multi_door":
    //   return "Multi door";
    // case "open_side":
    //   return "Open side";
    case "standard":
      return "Standard";
    case "high_cube":
      return "High cube";
  }
}

function useContainerType() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sizeString = searchParams.get("type");

  const setContainerType = (newSize: ContainerType) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    current.set("type", newSize);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${query}`, { scroll: false });
  };

  switch (sizeString) {
    // case "double_door":
    // case "multi_door":
    // case "open_side":
    case "standard":
    case "high_cube":
      return { containerType: sizeString, setContainerType } as const;
  }

  return { setContainerType, containerType: "standard" } as const;
}

type ContainerCondition = "new" | "used";

const containerConditions: ContainerCondition[] = ["new", "used"];

function containerConditionToLabel(condition: ContainerCondition): string {
  switch (condition) {
    case "new":
      return "New";
    case "used":
      return "Used";
  }
}

function useContainerCondition() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const conditionString = searchParams.get("condition");

  const setContainerCondition = (newSize: ContainerType) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    current.set("condition", newSize);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${query}`, { scroll: false });
  };

  switch (conditionString) {
    case "new":
    case "used":
      return {
        setContainerCondition,
        containerCondition: conditionString,
      } as const;
  }

  return { setContainerCondition, containerCondition: "new" } as const;
}
