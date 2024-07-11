import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

export const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center justify-center  overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          <div className="flex w-full justify-center items-center">
            <h1 className="heading">
              My<span className="text-purple"> {" "}Skills</span>
            </h1>
          </div>
          <div className="flex w-full justify-center items-center grid grid-cols-5 lg:grid-cols-6">
          {companies.map(({ id, img, name,title }) => (
            <div key={id} className="flex flex-col items-center justify-center max-w-32 gap-2 md:max-w-60 py-10">
              <Image
                height={29}
                width={43}
                src={img}
                alt={`${name}'s logo`}
                className="w-5 md:w-10 h-5 md:h-10"
              />
              <p>{title}</p>
            </div>
          ))}
            </div>
        </div>
      </div>
    </section>
  );
};
