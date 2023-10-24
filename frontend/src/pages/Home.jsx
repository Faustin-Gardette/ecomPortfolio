import React from "react";
import Header from "../components/Header";
import Trending from "../components/Trending";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <section className="px-32 py-16 h-[calc(100vh-2rem)] ">
        <Header />
      </section>
      <section className="bg-black text-[#e3ded3] px-32 py-16  text-center ">
        <h2 className="text-8xl font-bebas pb-8">DEVIENS SUPER STYLÉ</h2>
        <p className="px-20 font-manrope text-lg font-semibold tracking-wider ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat
          culpa deleniti iste pariatur. Assumenda, eum! Sit eligendi
          voluptatibus hic magnam, optio, eveniet tempora, dignissimos molestias
          pariatur libero eos consectetur! Delectus dolor quia quod! Ullam sunt
          doloribus obcaecati asperiores aperiam cumque ex magnam fuga libero
          vero illo, dolorum nisi sint rerum iure adipisci cum. Aliquid error
          odit cum quaerat iusto. Perspiciatis sunt, voluptas quod autem dicta
          reprehenderit praesentium nemo cupiditate suscipit iure pariatur,
          iusto illum aspernatur! Distinctio repellat, officia iure, sit iste
          laudantium neque, commodi accusantium harum dicta hic dolores.
        </p>
      </section>
      <section className="px-32 py-16 ">
        <Trending />
      </section>
      <section className="bg-black beige px-32 py-16  text-center">
        <h2 className="text-8xl font-bebas pb-8">REJOIGNEZ NOTRE NEWSLETTER</h2>
        <p className="px-20 font-manrope text-lg font-semibold tracking-wider "></p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Entrez votre email"
            className="w-1/3 font-manrope rounded-l-lg py-2 px-4 text-black focus:outline-none"
          />
          <button className="primary-back py-2 px-4 rounded-r-lg text-black ">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
