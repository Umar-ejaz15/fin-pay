import React from "react";

const Hero = () => {
  return (
    <>
      {/* For Mobile  */}
      <div className="w-full h-screen sm:hidden px-10 ">
        <div className="w-full h-1/2 flex gap-10 justify-center flex-col items-center">
          <div className="txt flex flex-col justify-center items-center text-center gap-2">
            <h1 className="text-4xl tracking-tighter leading-none font-bold capitalize">
              Get Payid early save automaatically all your pay
            </h1>
            <p className=" capitalize">
              support small business with simple invoicing and cash flow
              managment tool
            </p>
          </div>
          <div className="input w-full flex flex-col gap-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-500 py-2 px-4 text-white rounded-md transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>{" "}
        </div>
        <div className="w-full h-1/2 flex justify-center items-center">
          <img
            className="w-2/3 h-2/3  object-top "
            src="https://www.transparentpng.com/thumb/payment-method/6tlSu3-payment-method-virtual-shopping-transparent.png"
            alt=""
          />
        </div>
      </div>
      {/* For Laptop */}
      <div className="hidden sm:block">
        <div className="flex px-20 w-full h-screen  ">
          <div className="w-1/2 h-full flex gap-10 justify-center flex-col items-center">
            <div className="txt flex flex-col justify-center items-left text-center gap-5">
              <h1 className="text-6xl tracking-tighter leading-none text-left font-bold capitalize">
                Get Payid early save automaatically all your pay
              </h1>
              <p className=" capitalize text-left text-2xl">
                support small business with simple invoicing and cash flow
                managment tool
              </p>
            </div>
            <div className="input w-full flex flex-col gap-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-500 py-2 px-4 text-white rounded-md transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>{" "}
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <img
              className="w-2/3 h-1/2 object-top "
              src="https://www.transparentpng.com/thumb/payment-method/6tlSu3-payment-method-virtual-shopping-transparent.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
