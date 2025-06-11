import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="w-screen px-4 items-center flex-1 bg-primary">
      {/* First Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center text-white py-10">
        {/* Text Content */}
        <div className="flex flex-col gap-6 items-start max-w-[600px] mx-6 order-2 md:order-1">
          <h1 className="text-4xl font-bold">Theophile IYAMUREMYE</h1>
          <p className="text-lg">
            Growing up with a father who worked in construction, I used to spend all my free time on project sites watching him interpret ideas from start to finish. It motivated me to pursue an architecture career.
          </p>
        </div>
        {/* Image */}
        <div className="flex w-full max-w-[600px] order-1 md:order-2 mb-8 md:mb-0">
          <Image
            src="/images/Ceo.jpg"
            alt="Theophile IYAMUREMYE"
            layout="responsive"
            width={1000}
            height={1500}
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center text-white py-10">
        {/* Image */}
        <div className="flex w-full max-w-[600px] mb-8 md:mb-0">
          <Image
            src="/images/howstart.jpg"
            alt="How we started"
            layout="responsive"
            width={1000}
            height={1500}
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col gap-6 items-start max-w-[600px] mx-6">
          <h1 className="text-4xl font-bold">How we started</h1>
          <p className="text-lg">
            After graduating college, I made a big step by opening my own architectural firm, Ever Design. With the help of my team members, we are now a fast-growing company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;