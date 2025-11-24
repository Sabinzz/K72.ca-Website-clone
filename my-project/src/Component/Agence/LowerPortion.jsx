import React, { useRef, useState } from "react";

const LowerPortion = () => {
  const [ImageIndex, setImageIndex] = useState(0);
  const ImageRef = useRef();

  const SecondColorRef = useRef();
  const ThirdColorRef = useRef();
  const FourthColorRef = useRef();
  const FifthColorRef = useRef();
  const SixthColorRef = useRef();
  const SeventhColorRef = useRef();

  const Images = [
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
  ];

  const handleEnter = (ref, index) => {
    ref.current.style.height = "100%";
    ImageRef.current.style.opacity = "1";   // fade in
    setImageIndex(index);
  };

  const handleLeave = (ref) => {
    ref.current.style.height = "0%";
    ImageRef.current.style.opacity = "0";   // fade out
  };

  return (
    <div className="bg-black h-full w-screen relative">

      {/* ROW 1 */}
      <div
        className="w-full h-[10vh] overflow-hidden border-t-2 border-b-2 border-white"
        onMouseEnter={() => handleEnter(SecondColorRef, 0)}
        onMouseLeave={() => handleLeave(SecondColorRef)}
      >
        <div
          ref={SecondColorRef}
          className="relative px-3 bg-[#d3fd50] cursor-pointer transition-all h-full w-full"
        >
          <div className="text-white hover:text-black  flex justify-between items-center px-3 absolute top-0 w-full">
            <p>Directeur Principal</p>
            <h1 className="text-4xl mr-8 my-4">CARL GODBOUT</h1>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div
        className="w-full h-[10vh] overflow-hidden border-b-2 border-white"
        onMouseEnter={() => handleEnter(ThirdColorRef, 1)}
        onMouseLeave={() => handleLeave(ThirdColorRef)}
      >
        <div
          ref={ThirdColorRef}
          className="relative px-3 bg-[#d3fd50] cursor-pointer transition-all h-full w-full"
        >
          <div className="flex text-white hover:text-black justify-between items-center px-3 absolute top-0 w-full">
            <p>Directeur Principal</p>
            <h1 className="text-4xl mr-8 my-4">CAMILLE BRIERE</h1>
          </div>
        </div>
      </div>

      {/* ROW 3 */}
      <div
        className="w-full h-[10vh] overflow-hidden border-b-2 border-white"
        onMouseEnter={() => handleEnter(FourthColorRef, 2)}
        onMouseLeave={() => handleLeave(FourthColorRef)}
      >
        <div
          ref={FourthColorRef}
          className="relative px-3 bg-[#d3fd50] cursor-pointer transition-all h-full w-full"
        >
          <div className="text-white hover:text-black  flex justify-between items-center px-3 absolute top-0 w-full">
            <p>Directeur Principal</p>
            <h1 className="text-4xl mr-8 my-4">STEPHANIE BRUNELLE</h1>
          </div>
        </div>
      </div>

      {/* ROW 4 */}
      <div
        className="w-full h-[10vh] overflow-hidden border-b-2 border-white"
        onMouseEnter={() => handleEnter(FifthColorRef, 3)}
        onMouseLeave={() => handleLeave(FifthColorRef)}
      >
        <div
          ref={FifthColorRef}
          className="relative px-3 bg-[#d3fd50] cursor-pointer transition-all h-full w-full"
        >
          <div className="text-white hover:text-black  flex justify-between items-center px-3 absolute top-0 w-full">
            <p>Directeur Principal</p>
            <h1 className="text-4xl mr-8 my-4">PIERRE-LUC PAIEMENT</h1>
          </div>
        </div>
      </div>

      {/* ROW 5 */}
      <div
        className="w-full h-[10vh] overflow-hidden border-b-2 border-white"
        onMouseEnter={() => handleEnter(SixthColorRef, 4)}
        onMouseLeave={() => handleLeave(SixthColorRef)}
      >
        <div
          ref={SixthColorRef}
          className="relative px-3 bg-[#d3fd50] cursor-pointer transition-all h-full w-full"
        >
          <div className="text-white hover:text-black  flex justify-between items-center px-3 absolute top-0 w-full">
            <p>Directeur Principal</p>
            <h1 className="text-4xl mr-8 my-4">MELANIE LAVIOLETTE</h1>
          </div>
        </div>
      </div>

      {/* ROW 6 */}
      <div
        className="w-full h-[10vh] overflow-hidden border-b-2 border-white"
        onMouseEnter={() => handleEnter(SeventhColorRef, 5)}
        onMouseLeave={() => handleLeave(SeventhColorRef)}
      >
        <div
          ref={SeventhColorRef}
          className="relative px-3 bg-[#d3fd50] cursor-pointer transition-all h-full w-full"
        >
          <div className="text-white hover:text-black  flex justify-between items-center px-3 absolute top-0 w-full">
            <p>Directeur Principal</p>
            <h1 className="text-4xl mr-8 my-4">MEGGIE LAVOIE</h1>
          </div>
        </div>
      </div>

      {/* FLOATING IMAGE */}
      <div
        ref={ImageRef}
        className="opacity-0 transition-opacity duration-300 h-[64vh] w-[20vw]
        absolute -top-20 left-[350px] rounded-2xl overflow-hidden z-[1000] pointer-events-none"
      >
        <img
          src={Images[ImageIndex]}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default LowerPortion;
