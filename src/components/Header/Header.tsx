import { Link } from 'react-router-dom'
import { NavStyled, Menu, ReturnButton, CarrinhoStyled } from './Header.styled'
import logo from '../../assets/images/logo.png'
const Header = () => (
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
            <CarrinhoStyled>0 produto(s) no carrinho</CarrinhoStyled>
          </li>
        </Menu>
      </NavStyled>
    </div>
  </header>
)

export default Header
