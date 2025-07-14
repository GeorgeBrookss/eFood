import PratosMold from '../../models/PratosMold'
import { PratosListaStyle, TituloPrato } from './Pratos.styles'
import PratoProd from '../Prato/Prato'

export type Props = {
  title: string
  pratos: PratosMold[]
  onPratoClick?: (id: number) => void
}

const PratosList = ({ title, pratos, onPratoClick }: Props) => (
  <div>
    <TituloPrato>{title}</TituloPrato>
    <PratosListaStyle>
      {pratos.map((prato) => (
        <PratoProd
          image={prato.foto}
          descricao={prato.descricao}
          title={prato.nome}
          key={prato.id}
          onClick={() => onPratoClick?.(prato.id)}
        />
      ))}
    </PratosListaStyle>
  </div>
)

export default PratosList
