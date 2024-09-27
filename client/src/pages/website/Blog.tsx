// pages/website/Blog.js
import React from "react";

const Blog = () => {

  const khuonItems = [
    {
      title: "Tắm",
      description:
        "Sử dụng các sản phầm 100% được kiểm định về an toàn cho các bế",
      imageUrl: "/images/anh1.webp",
    },
    {
      title: "Tỉa lông",
      description: "Chuyên nghiệp - Gọn gàng - Đẹp mắt",
      imageUrl: "/images/anh2.webp",
    },
    {
      title: "Tiêm vắc xin",
      description:
        "Mô tả chĐược các bác sĩ thú y tư vấn và trực tiếp tiêm cho các béo khuôn 3",
      imageUrl: "/images/anh3.webp",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Banner Image */}
      <img
        className="w-full h-[450px] object-cover"
        src="/images/OIP.jpg"
        alt="PetSpa"
      />
      <div className="flex justify-center mt-10">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-4.35-4.35M18.5 10.5A7.5 7.5 0 1111 3a7.5 7.5 0 017.5 7.5z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mt-10">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {/* Hàng khuôn ảnh với tiêu đề và mô tả */}
          {khuonItems.map((khuon, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F2F0F2] p-4 rounded-lg shadow-lg"
            >
              <img
                src={khuon.imageUrl}
                alt={khuon.title}
                className="w-full h-[300px] object-cover rounded-md mb-2"
              />
              <h1 className="text-lg font-semibold">{khuon.title}</h1>
              <p className="text-sm text-center">{khuon.description}</p>
              <p className="text-sm text-center">
                Mô tả thêm về dịch vụ này.
              </p>{" "}
              {/* Thêm thẻ p thứ hai */}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
    {/* Hàng khuôn ảnh với tiêu đề và mô tả */}
    {khuonItems.map((khuon, index) => (
      <div
        key={index}
        className="flex flex-col items-center bg-[#F2F0F2] p-4 rounded-lg shadow-lg"
      >
        <img
          src={khuon.imageUrl}
          alt={khuon.title}
          className="w-full h-[300px] object-cover rounded-md mb-2"
        />
        <h1 className="text-lg font-semibold">{khuon.title}</h1>
        <p className="text-sm text-center">{khuon.description}</p>
        <p className="text-sm text-center">Mô tả thêm về dịch vụ này.</p> {/* Thêm thẻ p thứ hai */}
      </div>
    ))}
  </div>
</div>

<div className="flex flex-col items-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
    {/* Hàng khuôn ảnh với tiêu đề và mô tả */}
    {khuonItems.map((khuon, index) => (
      <div
        key={index}
        className="flex flex-col items-center bg-[#F2F0F2] p-4 rounded-lg shadow-lg"
      >
        <img
          src={khuon.imageUrl}
          alt={khuon.title}
          className="w-full h-[300px] object-cover rounded-md mb-2"
        />
        <h1 className="text-lg font-semibold">{khuon.title}</h1>
        <p className="text-sm text-center">{khuon.description}</p>
        <p className="text-sm text-center">Mô tả thêm về dịch vụ này.</p> {/* Thêm thẻ p thứ hai */}
      </div>
    ))}
  </div>
</div>


      <button className="mt-10 bg-[#064749] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300">
        Đọc thêm
      </button>
    </div>
  );
};

export default Blog;
