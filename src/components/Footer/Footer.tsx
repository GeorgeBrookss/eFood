import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'
import {
  FooterStyle,
  ItemRedes,
  LogoFooter,
  RedesSociais,
  TextFooter
} from './Footer.styles'
const Footer = () => (
  <div>
    <FooterStyle>
      <LogoFooter src={logo} alt="Logo" />
      <RedesSociais>
        <li>
          <ItemRedes href="">
            <img src={instagram} alt="instagram" />
          </ItemRedes>
        </li>
        <li>
          <ItemRedes href="">
            <img src={twitter} alt="twitter" />
          </ItemRedes>
        </li>
        <li>
          <ItemRedes href="">
            <img src={facebook} alt="facebook" />
          </ItemRedes>
        </li>
      </RedesSociais>
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextFooter>
    </FooterStyle>
  </div>
)
export default Footer
