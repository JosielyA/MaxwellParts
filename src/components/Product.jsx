import React from "react";

function Product(props) {
  return (
    <div className="bg-white w-[400px] md:w-[250px] h-[500px] md:h-[380px] m-7 text-black items-end">
      <div className="w-full h-full flex flex-col">
        <div>
          <img src={props.image} className="" />
        </div>
        <div className="p-4">
          <h2 className="font-bold text-lg leading-5 uppercase">
            {props.name}
          </h2>
          <h2 className="text-lg text-gray-800">Maxwell</h2>
        </div>
        <div className="flex h-full items-end place-content-end  p-4 ">
          <a href="" className="text-myred font-bold text-sm">
            Pregunta por este producto.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
