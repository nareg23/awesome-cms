import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link href={"/"} className="flex space-x-2 items-start">
          <Image src={"/logo.svg"} height={50} width={50} alt="logo" />
          <h1 className="text-cyan-700">Awesome CMS</h1>
        </Link>
      </div>
      <div>
        <Link
          href={"https://naregtokatlian.com"}
          target="_blank"
          className="px-5 py-3 bg-cyan-700 text-white rounded-xl"
        >
          Portfolio
        </Link>
      </div>
    </header>
  );
};

export default Header;
