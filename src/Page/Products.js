import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://task-4-server-nine.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className=" px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 mx-auto ">
      <div className=" py-6 text-center">
        <h2 className="text-5xl text-orange-400  products-h py-5">Our Product </h2>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3  py-8">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <div className="text-center py-6">
        {" "}
        <Link to={`/products`}>
          {" "}
          <button className="btn btn-outline border-orange-400 text-orange-400 hover:text-white-800 hover:bg-orange-500">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
