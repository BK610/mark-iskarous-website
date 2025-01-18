import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as createAstro, d as renderComponent, b as renderHead, f as renderSlot } from './astro/server_CmZNpkAT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$NavBarItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavBarItem;
  const { location, title, target } = Astro2.props;
  const { pathname } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`border border-b-neutral-900 rounded-sm
  ${pathname == location ? "bg-neutral-100 border-neutral-900 shadow-md" : "border-transparent"}`, "class")}${addAttribute(location, "href")}${addAttribute(target, "target")}> <div class="px-3 hover:opacity-70"> ${title} </div> </a>`;
}, "/Users/baileykane/Programming/mark-iskarous-website/src/components/NavBarItem.astro", undefined);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="py-4 px-4 flex justify-end space-x-2"> ${renderComponent($$result, "NavBarItem", $$NavBarItem, { "location": "/", "title": "Home" })} ${renderComponent($$result, "NavBarItem", $$NavBarItem, { "location": "/research", "title": "Research" })} ${renderComponent($$result, "NavBarItem", $$NavBarItem, { "location": "/teaching", "title": "Teaching" })} ${renderComponent($$result, "NavBarItem", $$NavBarItem, { "location": "/cv.pdf", "title": "CV", "target": "_blank" })} </nav>`;
}, "/Users/baileykane/Programming/mark-iskarous-website/src/components/NavBar.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="m-0 w-full h-full"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Mark Iskarous</title>${renderHead()}</head> <body class="m-0 w-full h-full"> <div class="px-2 mx-auto max-w-screen-xl"> ${renderComponent($$result, "NavBar", $$NavBar, {})} <!-- <slot /> tags are used by Astro to determine where to inject child content.
			  See https://docs.astro.build/en/basics/astro-components/#slots--> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/baileykane/Programming/mark-iskarous-website/src/layouts/Layout.astro", undefined);

const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="mt-10 pb-4 text-3xl font-bold text-center sm:text-left"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/baileykane/Programming/mark-iskarous-website/src/components/PageHeader.astro", undefined);

export { $$PageHeader as $, $$Layout as a };
