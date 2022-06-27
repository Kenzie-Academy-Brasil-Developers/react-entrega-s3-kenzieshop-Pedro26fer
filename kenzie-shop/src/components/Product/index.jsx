import { BsFillCartPlusFill } from "react-icons/bs";
import { CardProduct } from "./style.";
import { useDispatch } from "react-redux";
import { addProductThunk } from "../../store/modules/cart/thunk";

const Product = ({ product}) => {
  const dispatch = useDispatch();
  const { img, name, description, price} = product;

  return (
    <CardProduct>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p>{description}</p>
      <span>
        {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </span>

      <button onClick={() => dispatch(addProductThunk(product))}>
        Adicionar <BsFillCartPlusFill />
      </button>
    </CardProduct>
  );
};

export default Product;
