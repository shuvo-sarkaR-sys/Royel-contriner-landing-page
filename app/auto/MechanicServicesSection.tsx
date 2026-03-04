import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";

const services = [
  {
    badge: "Our specialty",
    title: "Tire Sales: New & Quality Used",
    subtitle: "Roll with Confidence and Value",
    description:
      "Find the perfect tires for your vehicle at great prices. We offer a wide selection of premium new tires and gently used tires that provide excellent value. Whether you're looking for durability, performance, or fuel efficiency, our expert team will help you find the right tires to meet your needs and budget, ensuring you drive away with confidence.",
  },
  {
    badge: "Licensed MVI Center",
    title: "Motor Vehicle Inspection (MVI)",
    subtitle: "Certified Safety and Compliance Checks",
    description:
      "Ensure your vehicle's safety and compliance with Canadian standards through our Motor Vehicle Inspection (MVI) service. Our licensed technicians conduct essential checks and recommend only necessary repairs, guaranteeing honesty and integrity in meeting the highest safety requirements.",
  },
  {
    badge: "Atlantic Canada Dealer",
    title: "Battery Replacement and Electrical Systems Service",
    subtitle: "Power Up Your Vehicle",
    description:
      "Keep your vehicle's electrical system in peak condition. From battery replacements to complex electrical repairs, our experts ensure your car starts every time and runs smoothly.",
  },
  {
    title: "Regular Maintenance Services",
    subtitle: "Keep Your Ride Smooth",
    description:
      "Regular maintenance is the key to your vehicle's longevity. Our services include oil changes, brake checks, tire rotations, and more, designed to keep your vehicle running reliably and efficiently.",
  },
  {
    title: "Engine Repair & Rebuilds",
    subtitle: "Revitalize Your Engine",
    description:
      "Experience top-tier engine repair and rebuild services. Whether it's restoring performance or a complete rebuild, our experts bring your engine back to life, using only the highest quality parts and techniques.",
  },
  {
    title: "Transmission Services",
    subtitle: "Shift Smoothly with Confidence",
    description:
      "Our skilled technicians specialize in repairing, servicing, and replacing transmissions. We ensure your vehicle shifts smoothly, providing a reliable and enjoyable driving experience.",
  },
  {
    title: "Brake Services",
    subtitle: "Ensure Your Safety",
    description:
      "Effective brakes are crucial for your safety. We offer comprehensive brake services, including inspections, pad replacements, and fluid checks, to keep you and your passengers safe on the road.",
  },
  {
    title: "Tire Services and Alignment",
    subtitle: "Stay on Track",
    description:
      "Maximize your vehicle's performance with our tire services. From new tire sales and installations to precision wheel alignments, we ensure your ride is smooth, stable, and safe.",
  },
  {
    title: "Air Conditioning and Heating Services",
    subtitle: "Comfort in Any Season",
    description:
      "Whether it's the heat of summer or the cold of winter, our HVAC services ensure your vehicle's interior is always comfortable. Enjoy efficient air conditioning and heating, no matter the weather.",
  },
  {
    title: "Exhaust System Services",
    subtitle: "Breathe Easy on the Road",
    description:
      "An efficient exhaust system is vital for your vehicle's performance and the environment. Our services cover inspections, repairs, and replacements, ensuring your car runs cleanly and quietly.",
  },
  {
    title: "Suspension and Steering Services",
    subtitle: "Navigate with Ease",
    description:
      "A smooth ride and precise steering are crucial for your driving experience. Our suspension and steering services ensure your vehicle handles perfectly, providing comfort and control in every turn.",
  },
  {
    title: "Have another issue?",
    subtitle: "Get in touch!",
    description:
      "Our customer service team will be happy to assist with any automotive needs you might have. Contact us today, and let us assist you.",
  },
];
export const MechanicServicesSection: React.FC = () => {
  return (
    <div className="py-20 relative">
      <div className="bg-custom-gradiant h-full bg-custom-radial w-full min-h-60 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
      <div className="flex items-center flex-col pb-10 box-decoration-clone relative">
        <h2 className="text-4xl font-semibold bg-white">Our services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 box-decoration-clone relative text-center">
        {services.map((service) => {
          return (
            <div
              key={service.title}
              className="flex-col flex rounded-xl border p-5 relative bg-white"
            >
              {service.badge && (
                <div className="mb-2">
                  <Badge variant={"outline"}>{service.badge}</Badge>
                </div>
              )}
              <h4 className="font-bold">
                <span className="bg-white box-decoration-clone">
                  {service.title}
                </span>
              </h4>
              <h5 className="text-sm text-muted-foreground mb-5">
                <span className="bg-white box-decoration-clone">
                  {service.subtitle}
                </span>
              </h5>
              <p className="text-sm">
                <span className="bg-white box-decoration-clone">
                  {service.description}
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center mt-10 relative">
        <Link href="https://www.shopsparkify.com/appt/royal" target="_blank">
          <Button id="rentals-explore-units2" size={"lg"} className="w-full">
            <Calendar className="size-4 mr-2" />
            <span>Book an appointment today</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
