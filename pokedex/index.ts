interface PokemonProps {
  id: number
  name: string
  height: number
  weight: number
  abilities: string[]
}

export class Pokemon {
  props: PokemonProps

  constructor(props: PokemonProps) {
    this.props = props
  }
}