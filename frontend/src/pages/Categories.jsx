import React from "react";

const Categories = () => {
  return (
    <section className=" px-32 py-8 flex">
      <div className="w-[25%]">
        <h2 className=" text-4xl pb-2">Sexe</h2>
        <div className="flex flex-col gap-2 font-manrope font-semibold">
          <div>
            <input type="checkbox" />
            <label htmlFor="" className=" pl-2">
              Femme
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="" className=" pl-2">
              Homme
            </label>
          </div>
        </div>

        <h2 className=" text-4xl pt-6 pb-2">Catégorie</h2>
        <div className="flex flex-col gap-2 font-manrope font-semibold">
          <div>
            <input type="checkbox" />
            <label htmlFor="" className=" pl-2">
              Tee-shirt
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="" className=" pl-2">
              Veste
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="" className=" pl-2">
              Jeans
            </label>
          </div>
        </div>
        <h2 className="text-4xl pt-6 pb-2">Prix</h2>
        <div className="flex flex-col gap-">
          <div className="flex flex-col gap-2 font-manrope font-semibold">
            <div>
              <input type="checkbox" />
              <label htmlFor="" className=" pl-2">
                - 25€
              </label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="" className=" pl-2">
                + 25€
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[75%] grid grid-cols-3 gap-8">
        <div className="relative ">
          <h1 className="absolute text-6xl font-bebas top-2 left-2 ">Super</h1>
          <h3 className="absolute price top-16 left-2 beige ">50€</h3>
          <img className=" rounded-lg " src="./assets/femme2.jpg" alt="" />
          <div className="absolute bottom-6 right-12">
            <button className="button-black hover:button-black">Achat</button>
          </div>
        </div>
        <div className="relative ">
          <h1 className="absolute text-6xl font-bebas top-2 left-2 ">Super</h1>
          <h3 className="absolute price top-16 left-2 beige ">50€</h3>
          <img className=" rounded-lg " src="./assets/femme2.jpg" alt="" />
          <div className="absolute bottom-6 right-12">
            <button className="button-black hover:button-black">Achat</button>
          </div>
        </div>
        <div className="relative ">
          <h1 className="absolute text-6xl font-bebas top-2 left-2 ">Super</h1>
          <h3 className="absolute price top-16 left-2 beige ">50€</h3>
          <img className=" rounded-lg " src="./assets/femme2.jpg" alt="" />
          <div className="absolute bottom-6 right-12">
            <button className="button-black hover:button-black">Achat</button>
          </div>
        </div>
        <div className="relative ">
          <h1 className="absolute text-6xl font-bebas top-2 left-2 ">Super</h1>
          <h3 className="absolute price top-16 left-2 beige ">50€</h3>
          <img className=" rounded-lg " src="./assets/femme2.jpg" alt="" />
          <div className="absolute bottom-6 right-12">
            <button className="button-black hover:button-black">Achat</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
