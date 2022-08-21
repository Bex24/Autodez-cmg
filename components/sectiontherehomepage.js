import Image from "next/image";
//import Image1 from "../public/img23.jpg";

const ContentThere = () => {
  return (
    <div className="flex flex-col space-y-12 items-center justify-center  w-full py-12 px-6" id="contact">
      <div className="text-center space-y-3 ">
        <p className="text-xl font-medium text-amber-600">UNDE NE GASESTI?</p>
        {/* <p className="text-4xl font-light text-gray-600">
          Proudly Serving the Oakland Area Since 2007
        </p> */}
         <div className='mapWrapper'>
              <iframe
                width="700"
                height="440"
                src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=top%20autodez%20cmg+(top%20autodez%20cmg)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                className="sm: max-w-full"
              ></iframe>
            </div>
      </div>
      <div className="">
        {/* <Image src={Image1} alt="Picture of the author" /> */}
      </div>
    </div>
  );
};
export default ContentThere;
