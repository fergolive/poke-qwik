import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div>Hello Qwik! CLIENT</div>
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