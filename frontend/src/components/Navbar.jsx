import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <h1 className="font-bebas text-4xl cursor-pointer">e-Commerce</h1>
          </Link>
        </div>
        <div>
          <ul className="font-manrope text-xl font-semibold flex gap-8">
            <Link to="/categories">
              <li>Catégories</li>
            </Link>
            <Link to="produit">
              <li>Page Produit</li>
            </Link>
            <li className="relative">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="absolute text-[14px] bg-white rounded-full h-6 w-6 flex items-center justify-center -top-3 -right-4 ">
                0
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
