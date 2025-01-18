import '../chunks/page-ssr_C3qV7agV.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, e as createAstro, d as renderComponent } from '../chunks/astro/server_CmZNpkAT.mjs';
import 'kleur/colors';
import { $ as $$PageHeader, a as $$Layout } from '../chunks/PageHeader_CoXJ3W10.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$InlineLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$InlineLink;
  const { href, target = "_blank" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="underline hover:text-neutral-600"${addAttribute(href, "href")}${addAttribute(target, "target")}>${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/baileykane/Programming/mark-iskarous-website/src/components/InlineLink.astro", undefined);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row flex-wrap sm:gap-x-4 basis-1/3 sm:flex-nowrap"> <div class="w-full sm:w-72 m-auto sm:m-0 flex flex-col"> <div class="w-full pb-2"> <img class="mx-auto rounded-md border border-neutral-900 shadow-lg object-top object-cover w-72 h-72" src="mark-iskarous.jpeg" alt="Headshot of Mark Iskarous."> </div> <div>Social media accounts here...</div> <p class="hidden text-lg pb-4"> <code class="text-neutral-600 whitespace-pre">is a:&#9;</code>${renderComponent($$result, "InlineLink", $$InlineLink, { "href": "https://www.linkedin.com/in/mark-iskarous/" }, { "default": ($$result2) => renderTemplate`Postdoctoral Scholar
` })}<br> <code class="text-neutral-600 whitespace-pre">in the:&#9;</code>${renderComponent($$result, "InlineLink", $$InlineLink, { "href": "https://voices.uchicago.edu/bionics/" }, { "default": ($$result2) => renderTemplate`Sensorimotor Bionics Research Group` })}<br> <code class="text-neutral-600 whitespace-pre">at the:&#9;</code>${renderComponent($$result, "InlineLink", $$InlineLink, { "href": "https://www.uchicago.edu/" }, { "default": ($$result2) => renderTemplate`University of Chicago` })} </p> </div> <div class="m-auto sm:m-0 flex flex-col gap-y-2 basis-2/3 grow"> <h3 class="text-xl font-semibold w-full border-b-2">About</h3> <p>
Mark M. Iskarous (S'14-GS'18-M'24) was born in Nashville, TN, USA in 1993.
      He received the B.S. degree in electrical engineering and computer science
      from the University of California, Berkeley, CA, USA in 2015, and the
      Ph.D. degree in biomedical engineering at Johns Hopkins University,
      Baltimore, MD, USA in the Neuroengineering and Biomedical Instrumentation
      Laboratory in 2024.
</p> <p>
From 2015 to 2017, he was a Hardware Development Engineer at Amazon
      Lab126, Sunnyvale, CA, USA working on consumer electronic devices. He is
      currently a postdoctoral scholar in the department of Organismal Biology
      and Anatomy at the University of Chicago, Chicago, IL, USA. His current
      research interests include sensorimotor brain-computer interfaces,
      neuroprostheses, neuromorphic models of sensory information, and
      neuromorphic computing. His work has been published in Proceedings of the
      IEEE and he has presented at the IEEE EMBS Conference on Neural
      Engineering.
</p> <p>
Dr. Iskarous is a member of the Society for Neuroscience. He is a
      recipient of the NIH Ruth L. Kirschtein Predoctoral Individual National
      Service Award (F31), the NSF AccelNet NeuroPAC Fellowship, and the
      MWC/ARCS Foundation 2022-2023 Forster Family Foundation Scholarship.
</p> </div> </div>`;
}, "/Users/baileykane/Programming/mark-iskarous-website/src/components/About.astro", undefined);

const $$Astro$1 = createAstro();
const $$ResearchPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResearchPreview;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border border-black bg-neutral-100 rounded-md hover:opacity-90 transition hover:scale-[1.02] shadow-md hover:shadow-xl"> <a class="divide-y divide-neutral-900"${addAttribute(`/research#${title.toLowerCase()}`, "href")}> <div class="p-2"> <h3 class="text-xl font-serif font-semibold">${title}</h3> <p>${description}</p> </div> <div class=""> <img class="object-cover w-full"${addAttribute(`https://picsum.photos/seed/${title}/300/200`, "src")}> </div> </a> </div>`;
}, "/Users/baileykane/Programming/mark-iskarous-website/src/components/ResearchPreview.astro", undefined);

const $$ResearchIntro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pt-4 sm:pt-14 w-full"> <h2 class="mb-2 text-2xl font-semibold border-b-2">Research</h2> <p class="pb-2">Here's a little intro to my research topics.</p> <ul class="list-none grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2"> <li> ${renderComponent($$result, "ResearchPreview", $$ResearchPreview, { "title": "First topic", "description": "A quick little description of my wonderful research topic." })} </li> <li> ${renderComponent($$result, "ResearchPreview", $$ResearchPreview, { "title": "Second topic", "description": "A quick little description of my wonderful research topic." })} </li> <li> ${renderComponent($$result, "ResearchPreview", $$ResearchPreview, { "title": "Third topic", "description": "A quick little description of my wonderful research topic." })} </li> </ul> </div>`;
}, "/Users/baileykane/Programming/mark-iskarous-website/src/components/ResearchIntro.astro", undefined);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, {}, { "default": ($$result3) => renderTemplate`Mark Iskarous` })} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "ResearchIntro", $$ResearchIntro, {})} ` })}`;
}, "/Users/baileykane/Programming/mark-iskarous-website/src/pages/index.astro", undefined);

const $$file = "/Users/baileykane/Programming/mark-iskarous-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
