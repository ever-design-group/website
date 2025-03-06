import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="w-screen items-center flex-1 xs:flex-col-reverse">
      <div className="flex xs:flex-col w-full">
        <Image
          src="/images/Meet.jpg"
          alt="About Us Image"
          layout="responsive"
          width={1000}
          height={1500}
        />
      </div>
    </section>
  );
};

export default Team;