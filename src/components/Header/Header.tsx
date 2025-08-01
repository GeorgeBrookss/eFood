import { Link } from 'react-router-dom'
import { NavStyled, Menu, ReturnButton, CarrinhoStyled } from './Header.styled'
import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootReducer) => state.cart.items)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <header>
      <div>
        <NavStyled>
          <Menu>
            <li>
              <Link to="/">
                <ReturnButton>Restaurantes</ReturnButton>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={logo} alt="Logo"></img>
              </Link>
            </li>
            <li>
              <CarrinhoStyled onClick={openCart}>
                {items.length} produto(s) no carrinho
              </CarrinhoStyled>
            </li>
          </Menu>
        </NavStyled>
      </div>
    </header>
  )
}

export default Header
