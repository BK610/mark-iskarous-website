import '../chunks/page-ssr_C3qV7agV.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CmZNpkAT.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Sanity = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>Blog</h1> <ul> <!-- {posts.map((post) => (
    <li>
      <a href={'/posts/' + post.slug.current} class="post-link">
        {post.title}
      </a>
    </li>
  ))} --> </ul>`;
}, "/Users/baileykane/Programming/mark-iskarous-website/src/pages/sanity.astro", undefined);

const $$file = "/Users/baileykane/Programming/mark-iskarous-website/src/pages/sanity.astro";
const $$url = "/sanity";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sanity,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
