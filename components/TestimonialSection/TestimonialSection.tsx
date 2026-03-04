import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    text: "After calling  multiple people and looking through Facebook we asked Mohannad to buy a shipping container, not only was he responsive but he had it delivered the next day and for a great price. The container itself was also in great shape.",
    customer: {
      name: "Noah Harrington",
      title: "Onwer of Oakhill Landscaping ",
    },
    imageSource: "/img/testimonial_1.jpg",
  },
  {
    text: "We bought a 20’ sea can from these folks and they gave us a smoking deal. Moh was very easy to deal with, communication was on point, the service was fast and punctual. All around a great service.",
    customer: { name: "Ali Alizy ", title: "Owner of Carlton Landscaping " },
    imageSource: "/img/testimonial_2.jpg",
  },
  {
    text: "I recently purchased a 20-foot shipping container from [Royal Containers], and I couldn't be happier with the experience. They were trustworthy throughout the entire process, and the container arrived exactly as expected. Not to mention, the price was very reasonable. I highly recommend them for anyone in need of quality shipping containers.",
    customer: { name: "Nicole Mitchell", title: "" },
    imageSource: "/img/testimonial_3.jpg",
  },
  {
    text: "I bought a 20’ sea container from royal, best experience of my life. From start to finish it was a breeze within a few days I had my container delivered to property. We offered to help with unloading the container but they had it all covered. They leveled my container and dropped off into exact spot within minutes. Stress free no problems. I will be buying my next container from this company.",
    customer: { name: "", title: "Owner of Doucet Landscaping" },
    imageSource: "/img/testimonial_4.jpg",
  },
];
export const TestimonialSection: React.FC = () => {
  return (
    <div>
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
          id="testimonial-section-previous"
          className="hidden md:inline-flex"
        />
        <CarouselNext
          id="testimonial-section-next"
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
