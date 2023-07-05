import { $, component$ } from '@builder.io/qwik';
import { Link, type DocumentHead, routeLoader$, useNavigate } from '@builder.io/qwik-city';
import { PokeImage } from '~/components/pokemons/pokeimage';
import { PokemonListResponse,BasicPokemonInfo } from '~/interfaces/pokemon-list.response';


export const usePokemonList = routeLoader$<BasicPokemonInfo[]>(async()=>{
  const resp=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=10`);
  const data=await resp.json() as PokemonListResponse;
  return data.results;
})

export default component$(() => {
  const nav=useNavigate();
  const pokemonList = usePokemonList();
  
  
  const goToPokemon= $(async (id:number)=>{
    await nav(`/item/${id}/`)
  })

  return (
    
    <>
    <div class='header-list'>
      <span>Status</span>
      <span>Pagina actual:xxx</span>
      <span>Esta cargando pagina: zzzz</span>
    </div>

    <div class='card-container'>

      {
      pokemonList.value.map( (pokemon) => (

      
      <div key={pokemon.name} class='card'>
       
        <span class='pokemon-name'>{pokemon.name}</span>
        {/* <div >
          <PokeImage id={pokemonId.value} back={pokemonBack.value} />
        </div> */}
    
      </div>

      ))

      }

<div class="options">
          
          <Link class="btn">less-</Link>
          <Link class="btn">more+</Link>

        </div>
     </div>
    </>
    )
});

export const head: DocumentHead = {
  title: "List-SSR",
  meta: [
    {
      name: "ssr sample",
      content: "Qwik site using ssr",
    },
  ],
};