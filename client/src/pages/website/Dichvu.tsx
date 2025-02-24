import React from "react";

const Dichvu = () => {
  const rows = [
    {
      imageSrc: "/images/anh3.webp", // Đường dẫn ảnh mẫu
      title: "P.100",
      icon: (
        <svg
          className="h-8 w-8 text-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{" "}
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      description: "Vị trí 01  |  Tầng 1  |  Phòng bé",
      additionalInfo: "Trống 22/9/2024",
      time: "Từ 80.000 vnđ / ngày",
    },
    // Thêm các dòng khác ở đây theo mẫu
  ];

  return (
    <div className="container mx-auto p-8 flex">
      <div className="flex-1">
        {rows.map((row, index) => (
          <div
            key={index}
            className="flex items-center mb-6 p-4 bg-white shadow rounded-lg"
          >
            {/* Hình ảnh bên trái */}
            <div className="flex-shrink-0">
              <img
                src={row.imageSrc}
                alt={`image-${index}`}
                className="w-24 h-24 rounded-md"
              />
            </div>

            {/* Nội dung bên phải */}
            <div className="flex-1">
              {/* Tiêu đề */}
              <h1 className="text-xl font-bold text-gray-900">{row.title}</h1>
              {/* Icon và Chữ nằm cạnh nhau, căn giữa */}
              <div className="flex items-center mt-1">
                <span className="flex items-center justify-center mr-2">
                  {row.icon}
                </span>
                <p className="text-gray-600 flex items-center">1 thú cưng</p>
              </div>
              {/* Mô tả ngắn gọn */}
              <p className="text-gray-600 mt-2">{row.description}</p>
              {/* Thông tin bổ sung với nền màu #064749 */}
              <div
                className="mt-2 inline-flex items-center px-3 py-1 rounded-full"
                style={{ backgroundColor: "#064749" }}
              >
                <p className="text-white text-sm">{row.additionalInfo}</p>
              </div>
              <p className="text-gray-500">{row.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Thêm iframe Google Maps bên phải */}
      <div className="ml-8 flex-shrink-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3332506192323!2d105.79762327508054!3d21.019347780627584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5c0ce45feb%3A0x5c370d2686dbfca!2zMTQyIFAuIFbFqSBQaOG6oW0gSMOgbSwgWcOqbiBIb8OgLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1727451838418!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Dichvu;
