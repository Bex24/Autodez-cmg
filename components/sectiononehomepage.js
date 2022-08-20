import { FaHashtag } from "react-icons/fa";
import Image from "next/image";
import Image1 from "../public/autodez.jpg";
import Image2 from "../public/autodez2.jpg";
import Image3 from "../public/audiA4.jpeg";
import Image4 from "../public/nissan.jpeg";
import Image5 from "../public/subaru.jpeg";
const Contents = () => {
  return (
    <div className="container mx-auto py-12  space-y-20 w-full">
      <div className=" lg:flex lg:flex-row justify-center px-12">
        <div className="max-w-lg">
          <Image src={Image1} alt="Logo" />
        </div>
        <div className="mt-12">
          <Image src={Image2} alt="another Logo" />
        </div>
      </div>
      <div className="px-12 flex flex-col justify-center items-center text-center space-y-6">
        <FaHashtag className="w-12 h-12 text-amber-600  p-1" />
        <p className="text-3xl font-light text-gray-600">
          Parcul nostru este un parc nou, inceput de la zero si am inceput cu
          gandul de a fi de ajutor tuturor celor care cauta piese auto second,
          dar originale si intr-o stare buna.
          <br />
        </p>
        {/* <p className="text-xl text-gray-500">ANDRO Tomas - CHAIRMAN CEO</p> */}
      </div>
      <div className="lg:grid lg:grid-cols-2 px-12">
        <div className="col-span-1 space-y-6 py-12 text-center px-8">
          <p className="text-3xl font-medium text-gray-600">DESPRE NOI </p>
          <p className="text-2xl font-light text-gray-500">
            TOP AUTODEZ CMG este un parc auto ce are ca principal obiect de
            activitate comercializarea de piese auto second hand. Dispunem de o
            gamă largă de piese auto pentru maşini de fabricaţie străină precum
            mărcile Audi, Bmw, Volkswagen, Opel, Nissan etc.
          </p>
          {/* <button
            type="button"
            className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button> */}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1 row-span-2">
            <Image src={Image3} alt="Picture of a car" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={Image4} alt="Picture of the author" />
          </div>
          {/* <div className="col-span-1 row-span-1">
            <Image src={Image5} alt="Picture of the author" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Contents;
