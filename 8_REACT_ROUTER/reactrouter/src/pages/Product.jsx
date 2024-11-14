import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  {
    /* 4- Rota dinâmica */
  }
  const { id } = useParams();

  // 5- Carregamento dado individual
  const url = "http://localhost:3000/products" + id;
  const { data: product, loading, error } = useFetch(url);
  console.log(product);

  return (
    <>
      <p>ID do produto: {id}</p>
    </>
  );
};

export default Product;
