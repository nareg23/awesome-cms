import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div className="bg-[#081421] ">
      <div className="p-3">
        <Link className="flex items-center text-white gap-2" href={"/"}>
          <ArrowUturnLeftIcon className="h-6 w-6" /> Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
