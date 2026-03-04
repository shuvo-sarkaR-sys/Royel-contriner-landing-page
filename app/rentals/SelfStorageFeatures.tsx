import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Car, Clock, HelpingHand, Lock } from "lucide-react";

const features = [
  {
    title: "Offloading service",
    description:
      "Our Effortless Offloading Service is designed to simplify your storage journey. we handle the entire offloading process for you. Whether it's unloading items from a van, truck, or any other vehicle, our experts ensure that your belongings are carefully and efficiently moved into our secure storage units.",
    image: {
      src: "/img/moving_help.jpg",
      className: "-mt-10",
    },
    icon: HelpingHand,
    badgeText: "Complimentary",
  },
  {
    title: "Pull up and load advantage",
    description:
      "Say goodbye to the hassle of carrying items across long distances. With our drive-up access, you can conveniently load and unload your belongings directly from your vehicle, making the moving process a breeze.",
    image: {
      src: "/img/pull_up.jpg",
      // className: "md:h-full",
    },
    icon: Car,
  },
  {
    title: "Uncompromizing Security",
    description:
      "We strive to provide you with a storage experience where you can have complete confidence in the safety of your belongings. With our comprehensive security measures in place, you can focus on what matters while we handle the protection of your valuables.",
    image: {
      src: "/img/lock.jpg",
    },
    icon: Lock,
  },
  {
    title: "24-Hour Access",
    description:
      "Enjoy the convenience of accessing your storage unit at any time. Our 24-hour access feature ensures that you have the flexibility to retrieve your belongings whenever it suits you. If you need access after-hours, please get in touch with us 24 hours ahead of time to arrange access.",
    image: {
      src: "/img/open_unit.jpg",
      className: "-mt-16",
    },
    icon: Clock,
  },
];
export const SelfStorageFeatures: React.FC = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center">
        <div className="max-w-3xl items-center text-center space-y-1 mb-10">
          <h2 className="font-bold text-3xl">
            Self Storage Services. For all your needs.
          </h2>
          {/* <p>
            {`At RoyalRentals, we are dedicated to delivering storage solutions that
          cater to your unique needs. Whether you're looking for convenience,
          security, affordability, or a combination of all three, we have the
          services and expertise to make your storage experience exceptional.`}
          </p> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {features.map((feature) => {
          return (
            <div
              key={feature.title}
              className="relative grid rounded-xl grid-rows-2 overflow-hidden max-h-[600px] border"
            >
              <div>
                <img
                  src={feature.image.src}
                  className={cn(
                    "object-cover rounded-t-xl",
                    feature.image.className
                  )}
                />
              </div>
              <div className="absolute top-1/2 left-5 translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 drop-shadow">
                <feature.icon className="size-10" />
              </div>
              <div className="bg-white p-5 pt-12 space-y-5">
                <div className="flex gap-3">
                  <h3 className="font-semibold text-xl">{feature.title}</h3>
                  {feature.badgeText && (
                    <Badge variant={"outline"}>{feature.badgeText}</Badge>
                  )}
                </div>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
