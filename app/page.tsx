import { Header } from "@/components/Header/header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Box, Calendar, Container, Wrench } from "lucide-react";
import  HeroSection  from "@/components/HeroSection"; 
import Link from "next/link";
import Service from "@/components/Service";
import OurContainar from "@/components/OurContainar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const services = [
  {
    name: "Self storage",
    icon: Box,
    href: "rentals/#units",
    ctaText: "Explore Royal Rentals",
    description:
      "Affordable self storage. Where security meets convenience without the stress.",
  },
  {
    name: "Shipping containers",
    icon: Container,
    href: "/containers",
    ctaText: "Explore Royal Containers",
    description:
      "Customizable shipping containers for sale in all sizes and configurations.",
  },
  {
    name: "Mechanic shop",
    icon: Wrench,
    href: "/auto",
    ctaText: "Explore Royal Auto",
    description:
      "Full service, licensed auto shop. MVI, new/used tires, alignment, tire rotation, breaks & more.",
  },
] as const;
export default function Home() {
  return (
    <>
      <Header theme="royal" />
      <HeroSection  />
      <Service/>
      <OurContainar/>
      <Contact/>
      <Footer/>
    </>
  );
}
