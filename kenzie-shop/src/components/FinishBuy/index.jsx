import { useSelector } from "react-redux";
import { ResumeBuy } from "./style";

const FinishBuy = () => {
  const listCart = useSelector(({ cart }) => cart);

  return (
    <ResumeBuy>
      <h1>Resumo do pedido</h1>
      
      <div>
        <h3>Total de produtos:</h3>
        <p>{listCart.length}</p>
      </div>

      <div>
        <h3>Valor total:</h3>
        <p>
          R${listCart
            .reduce((prev, curr) => prev + curr.price,0).toFixed(2)
            }
        </p>
      </div>
      <button>Finalizar Pedido</button>
    </ResumeBuy>
  );
};

export default FinishBuy