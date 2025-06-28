import PratosMold from '../../models/PratosMold'
import { PratosListaStyle, TituloPrato } from './Pratos.styles'
import PratoProd from '../Prato/Prato'

export type Props = {
  title: string
  pratos: PratosMold[]
}

const PratosList = ({ title, pratos }: Props) => (
  <div>
    <TituloPrato>{title}</TituloPrato>
    <PratosListaStyle>
      {pratos.map((prato) => (
        <PratoProd
          image={prato.image}
          descricao={prato.descricao}
          title={prato.title}
          key={prato.id}
        />
      ))}
    </PratosListaStyle>
  </div>
)

export default PratosList
