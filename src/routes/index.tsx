import { $, component$,useSignal } from "@builder.io/qwik";
import { Link, type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { PokeImage } from "~/components/pokemons/pokeimage";

export default component$(() => {
const nav=useNavigate();
const pokemonId = useSignal(1);
const pokemonBack=useSignal(false) ;

const changePokemon=$((value:number)=>{

    if(pokemonId.value+value<=0) return;
    pokemonId.value+=value
 }
 
);

const goToPokemon= $(async (id:number)=>{
  await nav(`/item/${id}/`)
})

  return (
    <>
    <div class='card-container'>
      <div class='card'>

     <span>Pokemon finder</span>
     <span class='pokemon-num'>{pokemonId}</span>
     
     <div onClick$={()=>goToPokemon(pokemonId.value)}>
      <PokeImage id={pokemonId.value} back={pokemonBack.value} />
     </div>
    

     <div class="options">
      
      <button class="btn" onClick$={()=>changePokemon(-1)}>prev</button>
      <button class="btn" onClick$={()=>pokemonBack.value=!pokemonBack.value}>volter</button>
      <button class="btn" onClick$={()=>changePokemon(1)}>next</button>

     </div>
      </div>
     </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
