import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ManageProductCart = ({ product, refetch }) => {
  const {
    name,

    price,

    description,

    image,
  } = product;
  const navigate = useNavigate();

  // Deleting:
  const handleDeleteProduct = (product) => {
    fetch(`https://task-4-server-nine.vercel.app/products/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Product ${product.name} deleted successfully`);

          refetch();
        }
      });
  };

  const handleEdit = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      <article className="flex bg-white transition shadow-lg py-6  lg:h-[230px] ">
        <div className="rotate-180 p-4 [writing-mode:_vertical-lr]">
          <time
            dateTime="2023-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2023</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
          </time>
        </div>

        <div className=" sm:block sm:basis-56 md:block md:basis-72">
          <img
            alt="Guitar"
            src={image}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between px-8">
          <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <Link href="#">
              <h3 className="font-bold uppercase text-gray-900">{name}</h3>
            </Link>

            <p className="">
              <strong className="mr-1"> Price: </strong>
              <span className="text-red-500">$</span> {price}{" "}
            </p>

            <p className="lg:block hidden">
              <strong className="mr-1"> Description: </strong>
              {description}{" "}
            </p>
          </div>

          <div className="flex  justify-end items-center mx-2">
            <label
              onClick={() => handleDeleteProduct(product)}
              className="btn btn-xs btn-error text-white mx-8"
            >
              Delete
            </label>
            <button>
              <Link
                to={`/products/${product._id}`}
                onClick={() => handleEdit(product._id)}
                className="btn  bg-red-500 text-white btn-xs"
              >
                Edit
              </Link>
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ManageProductCart;
