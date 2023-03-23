import React from "react";
import Image from "next/image";

const Logo = (props: any) => {
  return (
    <div className="flex items-center justify-center ">
      <div>
        <Image
          className="rounded object-cover object-bottom"
          src={"/logo.svg"}
          height={60}
          width={60}
          alt="logo"
        />
      </div>
      <>{props.renderDefault()}</>
    </div>
  );
};

export default Logo;
