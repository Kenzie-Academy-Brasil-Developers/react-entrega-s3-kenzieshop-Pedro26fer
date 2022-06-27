import { useDispatch } from "react-redux"
import { BsFillCartDashFill } from 'react-icons/bs'
import { removeCart } from "../../store/modules/cart/actions"
import { CurrentSale } from "./style"

const CardCart = ({product}) => {

    const dispatch = useDispatch()

    const {name,img,description,price,id} = product

    return(
        <CurrentSale>
            <img src={img} alt={name} />
            <div>
                <h3>{name}</h3>
                <p> {description} </p>
            </div>
            <span> {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </span>
            <button onClick={() => dispatch(removeCart(id))}>Remover <BsFillCartDashFill/> </button>
        </CurrentSale>
    )


}

export default CardCart