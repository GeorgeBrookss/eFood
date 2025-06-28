import RestauranteMold from '../../../models/Restaurante'
import Banner from '../../Banner/banner'
import RestaurantesList from '../../RestaurantesList/restauranteslist'
import hiokiSushi from '../../../assets/images/hiokiSushi.png'
import { Estrela } from '../../Restaurante/restaurante.styled'
import LaDolceFoto from '../../../assets/images/LaDolceFoto.png'

const destaques: RestauranteMold[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    image: hiokiSushi,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'japonesa'],
    nota: 4.6,
    redirecionador: '',
    imageNota: Estrela
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    image: LaDolceFoto,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    nota: 4.6,
    redirecionador: '/LaDolce',
    imageNota: Estrela
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    image: LaDolceFoto,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    nota: 4.6,
    redirecionador: '/LaDolce',
    imageNota: Estrela
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    image: LaDolceFoto,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    nota: 4.6,
    redirecionador: '/LaDolce',
    imageNota: Estrela
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    image: LaDolceFoto,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    nota: 4.6,
    redirecionador: '/LaDolce',
    imageNota: Estrela
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    image: LaDolceFoto,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    nota: 4.6,
    redirecionador: '/LaDolce',
    imageNota: Estrela
  }
]

const Home = () => {
  console.log('Renderizando Home')

  return (
    <>
      <Banner />
      <RestaurantesList restaurantes={destaques} title="" />
    </>
  )
}

export default Home
