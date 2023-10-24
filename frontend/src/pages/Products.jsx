import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Products = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="">
      <div className="flex gap-16 items-center px-32 py-8">
        <div className=" w-[40%] flex items-center">
          <img
            className="rounded-lg w-[80%]"
            src="./assets/femme2.jpg"
            alt=""
          />
        </div>
        <div className="w-[60%] ">
          <h2 className="font-bebas text-8xl">Article</h2>
          <div className="price beige mt-2 ">50 €</div>
          <div className=" flex items-center gap-2 my-8">
            <div className="font-manrope text-xl font-semibold  ">
              Taille :{" "}
            </div>
            <div className="grid grid-cols-5 items-center text-center gap-4  ">
              <span className="size text-lg font-semibold hover:bg-black hover:text-beige">
                S
              </span>
              <span className="size text-lg font-semibold hover:bg-black hover:text-beige">
                M
              </span>
              <span className="size text-lg font-semibold hover:bg-black hover:text-beige">
                L
              </span>
              <span className="size text-lg font-semibold hover:bg-black hover:text-beige">
                XL
              </span>
              <span className="size text-lg font-semibold hover:bg-black hover:text-beige">
                XXL
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 my-8">
            <div className="font-manrope text-xl font-semibold  ">
              Quantité :
            </div>
            <div className="grid grid-cols-3 items-center">
              <button
                className="size text-lg font-semibold hover:bg-black hover:text-beige"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              <div className="px-4 text-lg text-center">{quantity}</div>
              <button
                className="size text-lg font-semibold hover:bg-black hover:text-beige"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          <p className="text-lg mb-8 font-manrope">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            dolorem soluta explicabo iure sed xlculpa neque non nostrum facilis
            nam odit corrupti nesciunt, suscipit corporis tenetur error dolor
            distinctio consequuntur! Sunt nostrum, totam non fugiat, dolore
            dolorem atque nihil maiores, enim accusamus iste porro? Quisquam
            excepturi adipisci illo maxime, consequatur, ut harum alias iste
            odit, delectus eaque placeat eos assumenda?
          </p>
          <button className="achat hover:bg-[#a00000] hover:color-[#e3ded3] ">
            {" "}
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ marginRight: "10px" }}
            />{" "}
            Ajout au Panier
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
