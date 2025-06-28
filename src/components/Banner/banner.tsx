import hero from '../../assets/images/Hero.png'
import { BannerStyle, Container, Logo, TextoInicial } from './Banner.styles'
import logo from '../../assets/images/logo.png'

const Banner = () => (
  <BannerStyle style={{ backgroundImage: `url(${hero})` }}>
    <Container>
      <Logo src={logo} alt="Logo" />
      <TextoInicial>
        Viva experiências gastronômicas no conforto da sua casa
      </TextoInicial>
    </Container>
  </BannerStyle>
)

export default Banner
