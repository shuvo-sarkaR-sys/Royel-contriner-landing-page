"use client";

import { useContainerSize } from "./lib/useContainerSize";

export const ContainerProductImage = () => {
  const containerImage = useCotainerImage();
  return (
    <img
      src={containerImage}
      className="rounded-lg object-cover "
      alt="Picture of the author"
    />
  );
};

function useCotainerImage() {
  const { containerSize } = useContainerSize();
  switch (containerSize) {
    case "20ft":
      return "/img/containers/20ft_container.webp";
    case "40ft":
    default:
      return "/img/containers/40ft_container.webp";
  }
}
