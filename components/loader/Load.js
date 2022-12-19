// import React from "react";

const Load = () => {
  return (
    // <div className="relative h-[200px] w-[200px] rounded-full border-8 border-gray-600">
    //   <div className="animate-spin-reverse absolute inset-0 rounded-full border-8 border-gray-600"></div>
    //   <div className="absolute inset-0 animate-spin rounded-full border-8 border-white"></div>
    // </div>
    // <div className="flex rotate-180 border justify-center">
    //   <span className="animate-pulse-lg duration-2s delay-0.2s h-40 w-6 rounded-lg bg-yellow-600"></span>
    //   <span className="animate-pulse-lg duration-2s delay-0.4s h-40 w-6 rounded-lg bg-teal-400"></span>
    //   <span className="animate-pulse-lg duration-2s delay-0.6s h-40 w-6 rounded-lg bg-blue-600"></span>
    //   <span className="animate-pulse-lg duration-2s delay-0.8s h-40 w-6 rounded-lg bg-red-600"></span>
    //   <span className="animate-pulse-lg duration-2s delay-1s h-40 w-6 rounded-lg bg-yellow-600"></span>
    // </div>
    <div className="flex h-[70vh] rotate-180 items-center justify-center">
      {/* <section className="flex h-40 justify-center"> */}
        <span
          style={{ animationDelay: ".2s" }}
          className="mr-2 w-[36px]  animate-loading rounded-md bg-yellow-400"
        ></span>
        <span
          style={{ animationDelay: ".4s" }}
          className="mr-2 w-[36px] animate-loading rounded-md bg-teal-500"
        ></span>
        <span
          style={{ animationDelay: ".6s" }}
          className="mr-2 w-[36px] animate-loading rounded-md  bg-blue-600"
        ></span>
        <span
          style={{ animationDelay: ".8s" }}
          className="mr-2 w-[36px] animate-loading rounded-md bg-red-600"
        ></span>
        <span
          style={{ animationDelay: "1s" }}
          className="mr-2  w-[36px] animate-loading rounded-md bg-yellow-400"
        ></span>
      {/* </section> */}
    </div>
  );
};

export default Load;
