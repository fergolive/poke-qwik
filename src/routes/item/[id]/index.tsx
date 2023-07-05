import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { PokeImage } from '~/components/pokemons/pokeimage';

export const usePokemonId = routeLoader$<number>(({params, redirect})=>{

    const id=Number(params.id);
    console.log(id);
    
    if(isNaN(id)) {
      console.log('no existe');
      
      redirect(301,'/');
    }
    if(id<=0) redirect(301,'/');
    if(id>1000) redirect(301,'/');
    
    return id
})

export default component$(() => {

  const pokemonId=usePokemonId();

  return (
    <>
      <span>{pokemonId}</span>
      <PokeImage id={pokemonId.value} />
    </>
  )
});