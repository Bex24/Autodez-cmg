import { FaEnvira, FaCodepen, FaBusAlt, FaDrawPolygon } from "react-icons/fa";
const Service = () => {
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-6 gap-6 py-24 px-12 items-center place-content-center justify-center" id="service">
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaEnvira className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Eco-friendly</p>
        <p className="text-gray-600">
          Lucrăm constant pentru a face planeta noastră mai ecologică, reciclând
          mașinile recuperate și menținând terenurile noastre libere de vehicule
          nedorite.{" "}
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaCodepen className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Preturi Rezonabile</p>
        <p className="text-gray-600">
          Dorim să oferim generațiilor viitoare un mediu mai curat și o economie
          mai puternică, oferind piese second hand de calitate la prețuri
          accesibile!
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaBusAlt className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">
          Vânzare de vehicule
        </p>
        <p className="text-gray-600">
          Aveți o mașină avariată și doriți să o vindeți la un preț bun,
          scutindu-vă în același timp de orice alergătură? Atunci contactați-ne
          la adresa{" "}
          <a href="mailto:autodezcmg@gmail.com" className="text-amber-600">autodezcmg@gmail.com </a>
        </p>
      </div>
      {/* <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaDrawPolygon className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Nationwide Service</p>
        <p className="text-gray-600">
          We provide our transportation services nationwide
        </p>
      </div> */}
    </div>
  );
};
export default Service;
