import '../chunks/page-ssr_C3qV7agV.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CmZNpkAT.mjs';
import 'kleur/colors';
import { $ as $$PageHeader, a as $$Layout } from '../chunks/PageHeader_CoXJ3W10.mjs';
export { renderers } from '../renderers.mjs';

const $$Research = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, {}, { "default": ($$result3) => renderTemplate`Research` })} ` })}`;
}, "/Users/baileykane/Programming/mark-iskarous-website/src/pages/research.astro", undefined);

const $$file = "/Users/baileykane/Programming/mark-iskarous-website/src/pages/research.astro";
const $$url = "/research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Research,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
