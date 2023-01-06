import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const EditDetails = () => {
  const navigate = useNavigate();
  const router = useParams();
  const { id } = router;
  const updates = useLoaderData();
  // console.log(updates);

  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const email = form.email.value;

    const data = {
      name,
      email,
      price,
      description,
    };
    // console.log(data);

    fetch(`https://task-4-server-nine.vercel.app/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(" Update Successfully");
          navigate("/dashboard/manageProduct");
        }
      });
  };

  return (
    <div className="w-6/12  px-6 py-16 rounded-md mx-auto">
      <form
        onSubmit={handleUpdate}
        className="self-stretch mx-auto space-y-3 ng-untouched ng-pristine ng-valid  "
      >
        <div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            defaultValue={updates?.name}
            className="w-full rounded-md focus:ring border focus:ring-orange-400 border-gray-700 p-5"
            readOnly
          />
        </div>

        <div>
          <input
            name="price"
            type="number"
            placeholder="Price"
            min={0}
            defaultValue={updates?.price}
            className="w-full rounded-md focus:ring border focus:ring-orange-400 border-gray-700 p-5"
          />
        </div>
        <div>
          <input
            name="description"
            type="text"
            placeholder=" Description"
            defaultValue={updates?.description}
            className="w-full rounded-md focus:ring border focus:ring-orange-400 border-gray-700 p-5"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            defaultValue={user?.email}
            className="w-full rounded-md focus:ring border focus:ring-orange-400 border-gray-700 p-5"
            readOnly
          />
        </div>

        <button
          type="submit"
          className="w-6/12 py-2 font-semibold rounded bg-orange-400 text-gray-900 mx-auto"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditDetails;
