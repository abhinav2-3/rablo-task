import { useState } from "react";
import axios from "axios";
import { ADDPRODUCT } from "../utils/API";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productId: "",
    name: "",
    price: "",
    featured: false,
    rating: "",
    createdAt: "",
    company: "",
  });

  const { productId, name, price, featured, rating, createdAt, company } =
    formData;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Name and Price are required");
      return;
    }
    if (isNaN(price)) {
      alert("Price must be a number");
      return;
    }
    try {
      const response = await axios.post(ADDPRODUCT, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // Clear the form
      if (response.status === 201) alert("Product is added");
      setFormData({
        productId: "",
        name: "",
        price: "",
        featured: false,
        rating: "",
        createdAt: "",
        company: "",
      });
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  return (
    <section className="bg-gray-800 text-white py-4">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={onSubmit} className="max-w-lg mx-auto p-4 shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Product ID</label>
          <input
            type="text"
            name="productId"
            value={productId}
            onChange={onChange}
            className="w-full p-2 border bg-transparent outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            className="w-full p-2 border bg-transparent outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={onChange}
            className="w-full p-2 border bg-transparent outline-none"
            required
          />
        </div>
        <div className="mb-4 flex gap-4 items-center">
          <label className="block text-sm font-bold mb-2">Featured</label>
          <input
            type="checkbox"
            name="featured"
            checked={featured}
            onChange={onChange}
            className="mr-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Rating</label>
          <input
            type="text"
            name="rating"
            value={rating}
            onChange={onChange}
            className="w-full p-2 border bg-transparent outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Created At</label>
          <input
            type="date"
            name="createdAt"
            value={createdAt}
            onChange={onChange}
            className="w-full p-2 border bg-transparent outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Company</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={onChange}
            className="w-full p-2 border bg-transparent outline-none"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Add Product
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
