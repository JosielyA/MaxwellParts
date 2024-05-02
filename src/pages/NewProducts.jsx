import React from "react";
import { productsName } from "../data/data";

export const NewProducts = () => {
  return (
    <div>
      {productsName.map((product, i) => (
        <img key={i} src={`/src/images/${product.url}`} />
      ))}
    </div>
  );
};
