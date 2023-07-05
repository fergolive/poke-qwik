import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
    <div class='header-list'>
      <span>Status</span>
      <span>Pagina actual:xxx</span>
      <span>Esta cargando pagina: zzzz</span>
    </div>

    <div class='card-container'>
      <div class='card'>
        <span>Pokemon finder</span>
        {/* <span class='pokemon-num'>{pokemonId}</span>
        <div onClick$={()=>goToPokemon(pokemonId.value)}>
          <PokeImage id={pokemonId.value} back={pokemonBack.value} />
        </div> */}
    
        <div class="options">
          
          <Link class="btn">less-</Link>
          <Link class="btn">more+</Link>

        </div>
      </div>
     </div>
    </>
  )
});

export const head: DocumentHead = {
  title: "List-Client",
  meta: [
    {
      name: "client rendering sample",
      content: "Qwik site using from client",
    },
  ],
};