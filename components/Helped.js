import React from "react";

const Helped = () => {
  return (
    <div className="w-full h-auto px-10 py-3">
      <div>
        <div className="txt flex flex-col gap-5">
          <h1 className="text-4xl text-center font-bold">
            We have helped innovative companies
          </h1>
          <p className="text-zinc-700 text-center">
            We have helped numerous innovative companies transform their digital
            presence and achieve their business goals through cutting-edge
            solutions and strategic partnerships.
          </p>
        </div>
        <div className="w-full rateing flex justify-between items-center gap-10 mt-10 flex-wrap">
          <div className="w-1/3">
            <h1 className="text-2xl font-bold mb-2 ">24%</h1>
            <p className="text-green-600 ">Monthly revenue growth </p>
          </div>
          <div className="w-1/3">
            <h1 className="text-2xl font-bold mb-2 ">180k</h1>
            <p className="text-green-600">Successful transactions processed </p>
          </div>
          <div className="w-1/3">
            <h1 className="text-2xl font-bold mb-2 ">10+</h1>
            <p className="text-green-600">Years of experience </p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-green-700 capitalize py-10 text-center ">
        membership
      </h1>
      <div className="w-full flex flex-wrap sm:flex-nowrap justify-center gap-8 mt-16">
        <div className="bg-white sm:w-1/2 w-full p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
          <h1 className="text-2xl font-bold mb-4">Plus</h1>
          <p className="text-gray-600 text-lg">2.99/month</p>
        </div>
        <div className="bg-emerald-700 w-full sm:w-1/2 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
          <h1 className="text-2xl font-bold mb-4">Premium</h1>
          <p className="text-white text-lg">6.99/month</p>
        </div>
      </div>{" "}
      <div className="w-full py-5 px-10 rounded-md mt-10 bg-emerald-900 text-white">
        <div>
          <h1 className="text-4xl ">Ready to level up your payment process?</h1>
          <p className="text-sm">
            Take your payment processing to the next level with our innovative
            solutions and expert support. Transform your business today.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="bg-white text-emerald-900 px-6 py-2 rounded-md font-semibold hover:bg-emerald-100 transition-colors duration-300">
            register now
          </button>
          <button className="border-2 border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-emerald-900 transition-colors duration-300">
            learn more
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Helped;
