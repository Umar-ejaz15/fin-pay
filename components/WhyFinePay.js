import React from "react";

const WhyFinePay = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col py-10 justify-center items-center gap-10">
        <h1 className="font-medium text-2xl md:text-4xl text-center">Why They Prefer Fine Pay</h1>

        <div className="flex gap-5 md:gap-10 w-full px-4 md:px-10 flex-col md:flex-row leading-9">
          <div className="px-6 w-full py-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <h1 className="text-4xl md:text-6xl py-3 md:py-5 text-green-700 font-bold">3k+</h1>
            <p className="text-sm md:text-base text-gray-700 font-medium">Business Already Running On FinePay</p>
          </div>
          <div className="px-6 w-full py-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <h1 className="text-4xl md:text-6xl py-3 md:py-5 text-blue-600 font-bold">24/7</h1>
            <p className="text-sm md:text-base text-gray-700 font-medium">Instant Withdraw Your Funds</p>
          </div>
        </div>        <div className="flex gap-5 md:gap-10 w-full px-4 md:px-10 flex-col md:flex-row leading-9">
          <div className="w-full">
            <img 
              src="https://foxlearn.com/images/slim-free-material-ui-admin-dashboard-template-react-45e2175f-61bf.jpg" 
              alt="dashboard preview" 
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyFinePay;