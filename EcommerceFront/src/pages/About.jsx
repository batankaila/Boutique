import React from "react";

export default function About() {
  return (
    <>
      <div className=" h-20"></div>
      <div className="container h-auto">
        <div className=" flex flex-col justify-center mx-2 text-sm lg:text-base ">
          <h1 className=" text-black font-bold text-2xl">About Us</h1>
          <div className=" flex justify-center w-full">
            <img className="h-60 mb-2" src="/images/logo.png" alt="LOGO" />
          </div>
          <p className=" font-semibold text-justify">
          Flower Boutique is an online flower shop dedicated to providing fresh, beautifully arranged flowers for every occasion. We offer a wide variety of floral arrangements, from classic bouquets to modern, custom-designed pieces, ensuring there's something for everyone. Our commitment to quality and customer satisfaction means each order is carefully crafted and delivered with the utmost care. At Flower Boutique, we bring the beauty of flowers right to your doorstep, making it easy to brighten someone's day or celebrate special moments.
          </p>
        </div>
      </div>
    </>
  );
}
