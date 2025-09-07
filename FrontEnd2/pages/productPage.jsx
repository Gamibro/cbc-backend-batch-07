import { useEffect, useState } from "react";
import Loader from "../components/loader";
import axios from "axios";
import ProductCard from "../components/productCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      axios
        .get(import.meta.env.VITE_BASE_URL + "/api/product")
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [isLoading]);
  return (
    <div className=" w-full h-[calc(100vh-100px)]  flex flex-row flex-wrap justify-center p-10 gap-5 overflow-y-scroll">
      {isLoading ? (
        <Loader />
      ) : (
        products.map((item) => {
          return <ProductCard item={item} key={item.productId} />;
        })
      )}
    </div>
  );
}
