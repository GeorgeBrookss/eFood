class PratosMold {
  descricao: string
  image: string
  title: string
  id: number

  constructor(id: number, title: string, image: string, descricao: string) {
    this.descricao = descricao
    this.id = id
    this.image = image
    this.title = title
  }
}

export default PratosMold
