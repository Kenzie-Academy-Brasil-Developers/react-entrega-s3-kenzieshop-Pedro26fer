import { BsFillCartPlusFill, BsFillCartDashFill } from 'react-icons/bs'
import { CardProduct } from './style.'
import { useDispatch } from 'react-redux'
import { addCart, removeCart } from '../../store/modules/cart/actions'


const Product = ({product, isItOnCart = false}) => {

    const dispatch = useDispatch()
    const {img,name,description,price,id} = product

    return(
        <CardProduct>
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <p>{description}</p>
            <span>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            {
                !isItOnCart? (
                    <button onClick={() => dispatch(addCart(product))}>Adicionar <BsFillCartPlusFill/> </button>
                ) : (
                    <button onClick={() => dispatch(removeCart(id))}>Remover <BsFillCartDashFill/> </button>
                )
            }
        </CardProduct>
    )
}

export default Product