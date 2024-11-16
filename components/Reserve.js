import React from "react";

const Reserve = () => {
  const data = [
    {
      id: 1,
      title: "Open your Account",
      description:
        "Get started by creating your free account in minutes. Simply provide your basic information and you're ready to begin your financial journey with us.",
    },
    {
      id: 2,
      title: "Transfer your Money",
      description:
        "Send and receive money instantly to any account. Make secure transfers between accounts with just a few clicks, anytime and anywhere.",
      imag: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3207296/account-multiple-icon-md.png",
    },
    {
      id: 3,
      title: "Watch your balnce grow ",
      description:
        "Earn competitive interest rates on your savings. Your money works harder for you with our attractive interest rates and regular growth opportunities.",
    },
  ];
  return (
    <div className="flex flex-col w-full h-screen bg-emerald-900 text-white px-10 py-20 justify-center items-center">
      <div className="div">
        <h1 className=" capitalize text-2xl">
          maximize your returns with a reserve account that generates
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {data.map((item) => (
          <div key={item.id} className="p-6 bg-emerald-800 rounded-lg">
            <h1 className="text-xl ">{item.id}</h1>
            <h2 className="text-xl font-bold mb-3">{item.title}</h2>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reserve;
