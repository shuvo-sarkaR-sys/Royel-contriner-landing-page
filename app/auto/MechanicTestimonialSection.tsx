import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "These guys have serviced our fleet of vehicles and equipment for over 2 years and we couldn’t be more pleased. They are reliable, good with communication and very nice people. I would recommended them to anyone.",
    customer: { name: "Luc Waldron", title: "Owner of Oakhill Outdoor" },
    imageSource: "/img/testimonial_1.jpg",
  },
  {
    text: "Royal Auto is a great place to get vehicle service.  The owner goes out of his way to serve his customers.  The work they did for me was high quality and prompt.  I highly recommend Royal Auto to all of my friends.",
    customer: { name: "James Moore" },
    imageSource: "/img/testimonial_2.jpg",
  },
  {
    text: "Took my SUV to the dealer three times and left it with them for a total of three weeks without my starting problem getting fixed. Royal had it at their shop for one day and fixed my problem for $200. Best shop in HRM!!!",
    customer: { name: "Doug MacDonald", title: "" },
    imageSource: "/img/testimonial_2.jpg",
  },
  {
    text: "So I blew a tire at work and got myself another tire. I called these guys and they told me to come by and they’d do it for me right away!  Excellent folks. Great and easy to talk to. Efficient and a friendly. Reasonable pricing for work and reasonable hourly rate. Would 100% recommend and will 100% return when I need work done.",
    customer: { name: "Michelle Elliott", title: "" },
    imageSource: "/img/testimonial_3.jpg",
  },
];
export const MechanicTestimonialSection: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center pb-10">
        <h2 className="font-semibold text-3xl">
          {`Don't listen to us. Listen to our customers.`}
        </h2>
      </div>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {testimonials.map((testimonial) => {
            return (
              <CarouselItem key={testimonial.customer.name}>
                <div className="flex flex-col-reverse md:grid md:grid-cols-3 w-full gap-10">
                  <div className="col-span-2 h-full flex flex-col justify-center p-10">
                    <div className="text-yellow-500 flex gap-2">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <svg
                            key={i}
                            width="25"
                            height="25"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        ))}
                    </div>
                    <div className="text-3xl py-5 italic">
                      {testimonial.text}
                    </div>
                    <div>
                      <div className="font-semibold">
                        {testimonial.customer.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.customer.title}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl w-full md:max-w-64 h-96 border overflow-hidden">
                    <img
                      src={testimonial.imageSource}
                      alt="Image of a happy customer"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          id="mechanic-testimonial-previous"
          className="hidden md:inline-flex"
        />
        <CarouselNext
          id="mechanic-testimonial-next"
          className="hidden md:inline-flex"
        />
      </Carousel>
      {/* <div className="flex gap-2">
        {Array(testimonials.length)
          .fill(null)
          .map((_, i) => {
            return <div className="size-4 rounded-full bg-black"></div>;
          })}
      </div> */}
    </div>
  );
};
