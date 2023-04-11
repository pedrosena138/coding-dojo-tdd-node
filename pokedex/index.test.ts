import { describe, it, expect, vi } from 'vitest'
import { Pokemon } from './index'

describe('Pokémon test  case', () => {
  it('Should be able to create a Pokémon', () => {
    const pokemon = new Pokemon({
      name: 'Lapras', id: 132, height: 1.2, weight: 100,
      abilities: ['Tackle', 'ice beam', 'Psychic', 'surf']
    });

    expect(pokemon).toBeTruthy();
    expect(pokemon.props.name).toEqual('Lapras');
  });
});