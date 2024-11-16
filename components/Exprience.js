import React from "react";

const Exprience = () => {
  const data = [
    {
      id: 1,
      title: "Free Transaction",
      description:
        "Experience seamless financial transactions with zero fees. Our platform enables you to send and receive money without any hidden charges or transaction costs, making it easier to manage your finances efficiently.",
      imag: "https://th.bing.com/th/id/OIP.EhIryBj4GdLPkYUR7JJTPQHaHa?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      title: "Multiple accounts",
      description:
        "Manage multiple accounts effortlessly with our platform. Create and oversee various accounts for different purposes, whether personal or business, all from a single dashboard. Stay organized and in control of your finances across multiple accounts.",
      imag: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3207296/account-multiple-icon-md.png",
    },
    {
      id: 3,
      title: "unmatch Security",
      description:
        "Experience unmatched security with our platform. We prioritize the safety and security of your financial information. Our advanced security measures, including encryption and multi-factor authentication, ensure that your data remains protected at all times.",
      img: "https://www.svgrepo.com/show/38698/secure.svg",
    },
  ];
  return (
    <div className="w-full h-auto px-10 ">
      <div className="flex flex-col sm:flex sm:justify-center sm:items-center  gap-5 sm:gap-20 px-4 md:px-10 w-full h-auto">
        <div className="sm:flex-row sm:flex  sm:items-center">
          <div className="w-full flex   sm:items-center flex-col gap-2">
            <h1 className="uppercase text-green-500 font-bold">Publisment</h1>
            <h1 className="text-2xl md:text-3xl font-semibold">
              Exprience That Grow With your scale
            </h1>
          </div>
          <div className="w-full ">
            <p className="text-gray-500">
              Discover a platform that evolves with your needs, offering
              scalable solutions for businesses of all sizes. Our innovative
              features and robust infrastructure adapt seamlessly as your
              operations expand, ensuring consistent performance and reliability
              throughout your growth journey.{" "}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white/80  p-6 rounded-lg shadow-md"
            >
              <img
                src={item.imag || item.img}
                alt={item.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exprience;