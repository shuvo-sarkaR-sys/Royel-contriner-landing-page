export type SelfStorageListingFeature = string;
export type SelfStorageUnit = {
  monthly: number;
  features: SelfStorageListingFeature[];
  title: string;
  image_link: string;
  cta: {
    text: string;
    href: string;
  };
  is_most_popular: boolean;
};

export const selfStorageListings: SelfStorageUnit[] = [
  {
    monthly: 9999,
    features: [
      "35 Sq Feet",
      "7ft length, 5ft width, 7ft height",
      "Roll up unit",
      "24/7 security",
    ],
    title: "Studio apartment",
    cta: {
      text: "Reserve on U-Haul",
      href: "https://www.uhaul.com/Locations/Self-Storage-near-Hammonds-Plains-NS-B4B1P6/059360/",
    },
    image_link: `/img/self_storage/studio_apartment.webp`,
    is_most_popular: false,
  },
  {
    monthly: 19999,
    features: [
      "160 Sq Feet",
      "10ft length, 8ft width, 7ft height",
      "Roll up unit",
      "24/7 security",
    ],
    title: "1-2 Bedroom Home",
    cta: {
      text: "Reserve on U-Haul",
      href: "https://www.uhaul.com/Locations/Self-Storage-near-Hammonds-Plains-NS-B4B1P6/059360/",
    },
    image_link: `/img/self_storage/1_bedroom.webp`,
    is_most_popular: true,
  },
  {
    monthly: 29999,
    features: [
      "320 Sq Feet",
      "20ft length, 8ft width, 7ft height",
      "Roll up unit",
      "24/7 security",
    ],
    title: "2-3 Bedroom Home",
    cta: {
      text: "Reserve on U-Haul",
      href: "https://www.uhaul.com/Locations/Self-Storage-near-Hammonds-Plains-NS-B4B1P6/059360/",
    },
    image_link: `/img/self_storage/2_bedroom.webp`,
    is_most_popular: false,
  },
];
