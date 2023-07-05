import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  
  return (
    <>
      
      <div>Hello Qwik! SSR</div>
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