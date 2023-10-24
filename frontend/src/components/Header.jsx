import React from "react";

const Header = () => {
  return (
    <div className="flex gap-8 ">
      <div className="w-1/2">
        <div className="grid grid-cols-3 grid-rows-2 gap-6 ">
          <div>
            <img
              className="w-full h-full rounded-lg"
              src="./assets/femme3.jpg"
              alt=""
            />
          </div>
          <div className="row-span-2 col-span-2 relative">
            <img
              className=" w-full h-full rounded-lg"
              src="./assets/femme2.jpg"
              alt=""
            />
            <div className="absolute bottom-6 right-12">
              <button className="button-black hover:button-black">Femme</button>
            </div>
          </div>
          <div>
            <img
              className="w-full h-full  rounded-lg"
              src="./assets/femme1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <div className="grid grid-cols-3 grid-rows-2 gap-6 ">
          <div className="row-span-2 col-span-2 relative">
            <img
              className="w-full h-full rounded-lg"
              src="./assets/homme1.jpg"
              alt=""
            />
            <div className="absolute bottom-6 left-12">
              <button className="button-black hover:button-black">Homme</button>
            </div>
          </div>
          <div>
            <img
              className=" w-full h-full rounded-lg"
              src="./assets/homme2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full  rounded-lg"
              src="./assets/homme3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
