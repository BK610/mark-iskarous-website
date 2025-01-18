import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Ch6QUb0W.mjs';
import { manifest } from './manifest_B6nvG61K.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/_---params_.astro.mjs');
const _page2 = () => import('./pages/research.astro.mjs');
const _page3 = () => import('./pages/sanity.astro.mjs');
const _page4 = () => import('./pages/teaching.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/research.astro", _page2],
    ["src/pages/sanity.astro", _page3],
    ["src/pages/teaching.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7638f328-0d7c-43f3-b6e4-4858b97e1172",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
