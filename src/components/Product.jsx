import React from "react";

function Product({ image, name }) {
  console.log(image);
  return (
    <div className="m-7 h-[500px] w-[400px] items-end bg-white text-black md:h-[380px] md:w-[250px]">
      <div className="flex h-full w-full flex-col">
        <div>
          <img src={image} className="" />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold uppercase leading-5">{name}</h2>
        </div>
        <div className="flex h-full place-content-end items-end  p-4 ">
          <a href="" className="text-sm font-bold text-myred">
            Pregunta por este producto.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
