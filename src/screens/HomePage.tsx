import React from 'react';

const FirstPage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center">
      <div>
        <picture>
          <source media="(max-width: 640px)" srcSet="/images/mobile/home.png" />
          <img
            src={`${process.env.PUBLIC_URL ?? ""}/images/background.png`}
            alt="Background"
            className="fixed inset-0 -z-10 w-full h-f ull object-cover"
          />
        </picture>
      </div>

      <div className="w-full flex flex-col items-center pb-8 sm:pb-16">
        <div className="bg-white w-[50%] sm:w-[40%] md:w-[219px] aspect-[219/165] rounded-[25px] flex items-center justify-center shadow-lg mt-6">
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/mobile/logo.svg" />
            <img
              src="/images/logosite.svg"
              alt="Logo"
              className="w-[70%] h-auto object-contain"
            />
          </picture>
        </div>

        <div className="bg-white w-[95%] md:w-[800px] rounded-[25px] shadow-lg px-6 sm:px-6 md:px-16 mt-16 md:mt-6 flex flex-col pb-6 md:pb-0">
          <div className="w-full h-[10px] md:h-[15px] bg-gray-200 rounded-full mt-8 mb-4 md:mb-12"></div>

          <h1 className="text-left text-3xl sm:text-2xl md:text-3xl font-bold mb-12 md:mb-6 pb-4">
            Bitte wählen Sie das gewünschte Produkt aus:
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-4 w-full">
            <div className="relative bg-gray-100 rounded-[25px] cursor-pointer overflow-hidden flex flex-col items-center justify-center aspect-square">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/mobile/carport.svg"
                />
                <img
                  src="/images/desktop/Carport.svg"
                  alt="Terrassenüberdachung"
                />
              </picture>
              <p className="mt-4 text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-black pb-2">
                Terrassenüberdachung
              </p>
            </div>

            <div className="relative bg-gray-100 rounded-[25px] cursor-pointer overflow-hidden flex flex-col items-center justify-center aspect-square">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/mobile/carport.svg"
                />
                <img
                  src="/images/desktop/Carport.svg"
                  alt="Carport"
                />
              </picture>
              <p className="mt-4 text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-black pb-2">
                Carport
              </p>
            </div>

            <div className="relative bg-gray-100 rounded-[25px] cursor-pointer overflow-hidden flex flex-col items-center justify-center aspect-square sm:col-span-1">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/mobile/carport.svg"
                />
                <img
                  src="/images/desktop/Carport.svg"
                  alt="Wintergarten"
                />
              </picture>
              <p className="mt-4 text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-black pb-2">
                Wintergarten
              </p>
            </div>
          </div>

          <div className="text-red-600 font-bold text-center mt-16 md:mt-6 md:mt-0 md:mb-1 sm:mb-1">
            ERROR MESSAGE
          </div>
        </div>

        <div
          className="bg-white w-[90%] md:w-[800px] h-[60px] rounded-[25px] shadow-lg mt-12 md:mt-6 flex items-center justify-between px-4"
        >
          <div className="w-1/2 flex justify-center"></div>

          <div
            className="w-[2px] h-[40px] bg-red-600 mx-2"
            style={{
              backgroundColor: "rgba(197, 14, 16, 1)",
            }}
          ></div>

          <button className="w-1/2 h-full flex items-center justify-center text-sm sm:text-base lg:text-lg font-bold">
            <span className="text-black">Weiter</span>
            <span className="text-red-600 ml-2">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
