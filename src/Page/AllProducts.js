import React from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
const AllProduct = ({ product }) => {
  const { image, price, name, description } = product;
  return (
    <div>
      <div className="">
        <div className="card card-compact w-96  bg-base-100 shadow-xl h-[500px]">
          <figure className="rounded-lg">
            {/* <img className="img-h rounded-lg" src={img} alt="Shoes" /> */}
            <PhotoProvider
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            <PhotoView src={image}>
              <img
                src={image}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 cursor: zoom-in"
              />
            </PhotoView>
          </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{name}</h2>
            <p>
              {description}
            </p>
            <p className="font-semibold text-orange-500 text-2xl">
              Price: ${price}
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
