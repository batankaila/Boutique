import { useEffect, useState } from "react";
import api from "../api/axios";
import Crad from "../components/Crad";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function BestSeller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/products");
        const responseData = response.data;
        setProducts(responseData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className=" h-32"></div>
      <div className="mx-max h-full">
        <div className="mb-5">
          <BackButton />
        </div>
        <section className="mb-5">
          <div className=" mb-5">
            <h2 className="font-semibold text-center">Best Seller</h2>
            <p>
            Shop for all styles of flower bundles, including romantic rose arrangements, cheerful sunflower mixes, and elegant lily bouquets.. Browse flower
              for
              <span> </span>
              <Link to={"/Bundle"} className="text-black">
                <span className=" underline hover:font-semibold">Bundle</span>
              </Link>
              .
            </p>
          </div>
          {products.length === 0 && <p>No products to display.</p>}
          <div className="grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products
            
              .map((product) => (
                <Crad
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  listing={product.listing}
                  image={`http://localhost:8000${product.image}`}
                  price={product.price}
                />
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
