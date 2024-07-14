import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { GETPRODUCT } from "../utils/API";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = localStorage.getItem("token");
  !auth && navigate("/login");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(GETPRODUCT, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProducts(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Home;
