import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../Page/Loading";

import ManageProductCart from "../ManageProductCart/ManageProductCart";

const ManageProducts = () => {
  // Loading Product's Data
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://task-4-server-nine.vercel.app/products"
        );
        const data = await res.json();
        return data;
      } catch (error) {
        toast.error(error);
      }
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mx-10 py-10">
      <h2 className="text-center text-3xl py-10 ">
        Manage products:-{products?.length}
      </h2>
      <div className="grid gap-5 md:grid-cols-1">
        {products &&
          products?.map((product) => (
            <ManageProductCart
              key={product._id}
              refetch={refetch}
              product={product}
            ></ManageProductCart>
          ))}
      </div>
    </div>
  );
};

export default ManageProducts;
