import { component$, useSignal, useTask$ } from "@builder.io/qwik"

interface Props{
    id:number
    back?:boolean
}

export const PokeImage = component$(({id,back=false}:Props) => {

const imageLoaded=useSignal(false);
useTask$(({track})=>{
    track(()=>id)
    imageLoaded.value=false
})

  return (
    <>
        {!imageLoaded.value && <span>loading...</span>}
        <img 
        width="130" 
        height="130" 
        src={
             back ?
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            :
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
            } 
        alt=""
        onLoad$={()=>imageLoaded.value=true} 
        class={{'hidden':!imageLoaded.value}}
        />
    </>
  )
})

