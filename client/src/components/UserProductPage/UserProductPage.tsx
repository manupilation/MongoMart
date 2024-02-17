import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { url } from "../../config/url";
import { UserProduct } from "../../types/product";

const UserProductPage = () => {
  const {id} = useParams();
  const [userProduct, setProduct] = useState<UserProduct | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      const getProductResponse = await fetch(url.backend + `ml/product/item/${id}`);
      const {product} = await getProductResponse.json();
      console.log(product);

      setProduct(product);
    }

    fetchProduct();
  }, []);

  function turnBack() {
    navigate(-1);
  }
  
  if(userProduct && userProduct.id)
  return (
    <div>
      <div>
        <img src={userProduct.thumbnail} alt="Product" />
      </div>

      <h1>{userProduct.title}</h1>

      <a onClick={() => turnBack()}>VOLTAR</a>
    </div>
  )

  return (
    <div>Carregando...</div>
  )
}

export default UserProductPage