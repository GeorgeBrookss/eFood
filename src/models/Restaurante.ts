class RestauranteMold {
  descricao: string
  image: string
  infos: string[]
  title: string
  id: number
  redirecionador: string
  nota: number
  imageNota: string

  constructor(
    id: number,
    title: string,
    image: string,
    descricao: string,
    infos: string[],
    redirecionador: string,
    nota: number,
    imageNota: string
  ) {
    this.descricao = descricao
    this.id = id
    this.image = image
    this.infos = infos
    this.title = title
    this.redirecionador = redirecionador
    this.nota = nota
    this.imageNota = imageNota
  }
}

export default RestauranteMold
