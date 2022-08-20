import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneSquareAlt,
  FaVoicemail,
  FaCalendarWeek,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/cmgLogo2.png";
import { GoMail } from "react-icons/go";
const footer = () => {
  return (
    <div>
      <div className="bg-gray-100 pt-12 px-12">
        <div className="container mx-auto flex flex-col space-y-24 ">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">ADRESA</p>
                <p className="text-gray-600 font-medium">
                  Strada principal Nr. 452, Vlădești 247740, Vâlcea
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">TELEFOANE</p>
                <a href="tel:+40753917172">
                  <p className="text-gray-600 font-medium">0753 917 172</p>
                </a>
                <a href="tel:+40749316106">
                  <p className="text-gray-600 font-medium">0749 316 106</p>
                </a>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">PROGRAM</p>
                <p className="text-gray-600 font-medium">
                  Luni - Sambata: 09:00 - 18:00
                </p>
                <p className="text-gray-600 font-medium">Duminica: Inchis</p>
              </div>
            </div>
          </div>
          <div className="">
            {/* <div className="">
              <Image src={Logo} alt="Logo" />

              <p className="text-gray-500">
                DriverUP has provided car services in Oakland area since 2005.
                What started as a small company has grown into a premier
                limousine and private transportation company.
              </p>
             
            </div> */}
            {/* <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">OUR SERVICES</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Experiential Tours</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Wedding Limousine</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Corporate Travel</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Airport Transportation</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Nationwide Transportation</p>
                </div>
              </div>
            </div> */}
            {/* <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">DriverUP</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-gray-500  font-light" />
                  <p className="text-gray-500">
                    2507 Parker Boulevard, Oakland
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">(0481) 123 987 2411</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhoneSquareAlt className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">(0481) 123 987 2412</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500"> contact@autoride.com</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaCalendarWeek className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">Mon-Sat: 07:00 - 17:00</p>
                </div>
              </div>
            </div> */}
            {/* <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">SUBSCRIBE</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@flowbite.com"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-blue-300 font-medium   w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="py-8 container mx-auto flex flex-row justify-between">
        <p>Copyright 2022 Top Autodez CMG</p>
        <div className="flex flex-row space-x-3">
          <a
            href="https://www.facebook.com/Autodezcmg/?ref=py_c"
            target="_blank"
          >
            <FaFacebook className="w-6 h-6 text-gray-500" />
          </a>
          <a href="https://wa.me/+40753917172">
            <FaWhatsapp className="w-6 h-6 text-gray-500" />
          </a>
          <a href="mailto:autodezcmg@gmail.com">
            <GoMail className="w-6 h-6 text-gray-500" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default footer;
