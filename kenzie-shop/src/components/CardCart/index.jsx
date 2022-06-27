import { useDispatch } from "react-redux"
import { BsFillCartDashFill } from 'react-icons/bs'
import { CurrentSale } from "./style"
import { removeCartThunk } from "../../store/modules/cart/thunk"

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
            <button onClick={() => dispatch(removeCartThunk(id))}>Remover   <BsFillCartDashFill/> </button>
        </CurrentSale>
    )


}

export default CardCart