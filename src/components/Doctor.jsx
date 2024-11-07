import React from "react";
import drssagjura from "../images/drssagjura.jpg"; // Replace with actual image path
// import drssagjura from "../images/doctor2.jpg"; // Replace with actual image path

const Doctor = () => {
  const doctors = [
    {
      name: "Dr.ssa Drilona Gjura",
      specialization: "Cosmetic Dentistry",
      description:
        "Dr.ssa Drilona Gjura is a highly experienced dentist dedicated to providing the best care. He specializes in creating beautiful smiles with over 10 years of experience.",
      image: drssagjura,
      whatsapp: "https://wa.me/1234567890", // Replace with actual WhatsApp number
    },
    {
      name: "Dr.ssa Drilona Gjura",
      specialization: "Orthodontics",
      description:
        "Dr.ssa Drilona Gjura is passionate about helping patients achieve a perfect smile. She has over 8 years of experience in orthodontics and dental care.",
      image: drssagjura,
      whatsapp: "https://wa.me/0987654321", // Replace with actual WhatsApp number
    },
  ];

  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">
        Meet Our Doctors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-left flex flex-col items-center"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-blue-700">
              {doctor.name}
            </h3>
            <p className="text-lg text-blue-600 mt-2">
              {doctor.specialization}
            </p>
            <p className="text-gray-700 mt-4 mb-6 text-center">
              {doctor.description}
            </p>
            <a
              href={doctor.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full inline-flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.072 1.979a10 10 0 0 0-9.849 12.3l-.656 3.47a1 1 0 0 0 1.219 1.18l3.471-.657a10 10 0 1 0 5.815-16.293Zm5.442 14.388c-.276.779-1.573 1.515-2.175 1.594-.563.076-1.282.077-2.073-.152a15.68 15.68 0 0 1-5.195-2.6 13.88 13.88 0 0 1-2.963-3.7c-.701-1.208-.879-2.219-.58-2.847.267-.562.976-.926 1.573-1.053.396-.085.886-.017 1.362.279.196.119.463.358.81.804.334.429.505.672.55.758.174.313.058.601-.105.792-.091.108-.193.216-.289.322-.137.154-.27.305-.388.454-.109.14-.221.283-.145.459a10.6 10.6 0 0 0 1.956 2.549c.91.92 1.905 1.498 2.282 1.703.112.06.254.111.398.171.161.07.356.153.56.246.193.09.369.154.54.22.195.075.38.045.519-.128.164-.201.693-.81.908-1.085.163-.22.363-.248.617-.167a3.89 3.89 0 0 1 1.219.601c.214.137.515.34.787.481.28.143.45.238.515.373.062.126.062.726-.214 1.504Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctor;
