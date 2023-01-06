import React, { useEffect, useState } from "react";

import AllProduct from "./AllProducts";

const ProductsAllLoader = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://task-4-server-nine.vercel.app/productsAll")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="  ">
        <div className="text-center py-6">
          <p className="text-orange-400 text-4xl font-semibold py-2   ">
            Product
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-10">
          {products?.map((product) => (
            <AllProduct key={product._id} product={product}></AllProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsAllLoader;
