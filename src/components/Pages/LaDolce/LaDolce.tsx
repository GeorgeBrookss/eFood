import PratosMold from '../../../models/PratosMold'
import PratosList from '../../PratosList/Pratos'
import pizza from '../../../assets/images/pizza.png'
import Header from '../../Header/Header'
import {
  DestaqueStyled,
  NomeDoRestaurante,
  TemaDoRestaurante,
  ContainerStyle
} from './LaDolce.styles'

const destaques: PratosMold[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const LaDolce = () => {
  console.log('Renderizando ladolce')

  return (
    <>
      <Header />
      <DestaqueStyled>
        <ContainerStyle>
          <TemaDoRestaurante>Italiana</TemaDoRestaurante>
          <NomeDoRestaurante>La Dolce Vita Trattoria</NomeDoRestaurante>
        </ContainerStyle>
      </DestaqueStyled>
      <PratosList pratos={destaques} title="" />
    </>
  )
}

export default LaDolce
