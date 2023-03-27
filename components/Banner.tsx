import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-between flex-col lg:flex-row px-10 py-5">
      <div className="flex-1 space-y-4">
        <h1 className="text-7xl">Daily Blogs</h1>
        <p className="text-2xl">Welcome to the daily blog</p>
      </div>
      <p className="text-gray-400 max-w-sm break-all">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        placeat dolorem corporis autem assumenda illum laboriosam similique a
        expedita, aut ipsam ipsum laudantium.
      </p>
    </div>
  );
};

export default Banner;
