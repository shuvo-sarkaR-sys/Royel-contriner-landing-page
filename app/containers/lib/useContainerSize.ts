import { useRouter, useSearchParams } from "next/navigation";

export function useContainerSize() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sizeString = searchParams.get("size");

  const setContainerSize = (newSize: ContainerSize) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    current.set("size", newSize);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${query}`, { scroll: false });
  };

  switch (sizeString) {
    case "20ft":
    case "40ft":
      return { containerSize: sizeString, setContainerSize } as const;
  }

  return { setContainerSize, containerSize: "20ft" } as const;
}

export type ContainerSize = "20ft" | "40ft";
