import {
  Overlay,
  CartContainer,
  Sidebar,
  Quantity,
  CartItem,
  Preco
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { AdicionarBtn } from '../Prato/prato.styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>
                  {item.preco.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} prato(s) no carrinho</Quantity>
        <Preco>
          Total de{' '}
          {getTotalPrice().toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </Preco>
        <AdicionarBtn
          title="Clique aqui para continuar com a entrega"
          type="button"
        >
          Continuar com a entrega
        </AdicionarBtn>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
