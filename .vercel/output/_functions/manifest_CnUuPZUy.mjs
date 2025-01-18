import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B9BtccRQ.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_CmZNpkAT.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/baileykane/Programming/mark-iskarous-website/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"research/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/research","isIndex":false,"type":"page","pattern":"^\\/research\\/?$","segments":[[{"content":"research","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/research.astro","pathname":"/research","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"sanity/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sanity","isIndex":false,"type":"page","pattern":"^\\/sanity\\/?$","segments":[[{"content":"sanity","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sanity.astro","pathname":"/sanity","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"teaching/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/teaching","isIndex":false,"type":"page","pattern":"^\\/teaching\\/?$","segments":[[{"content":"teaching","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/teaching.astro","pathname":"/teaching","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/baileykane/Programming/mark-iskarous-website/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/baileykane/Programming/mark-iskarous-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/baileykane/Programming/mark-iskarous-website/src/pages/research.astro",{"propagation":"none","containsHead":true}],["/Users/baileykane/Programming/mark-iskarous-website/src/pages/teaching.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/admin/_---params_.astro.mjs","\u0000@astro-page:src/pages/research@_@astro":"pages/research.astro.mjs","\u0000@astro-page:src/pages/sanity@_@astro":"pages/sanity.astro.mjs","\u0000@astro-page:src/pages/teaching@_@astro":"pages/teaching.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/baileykane/Programming/mark-iskarous-website/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_KR6Ub5UJ.mjs","\u0000@astrojs-manifest":"manifest_CnUuPZUy.mjs","@astrojs/react/client.js":"_astro/client.elo0zQhS.js","/Users/baileykane/Programming/mark-iskarous-website/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.h0ZdIjmV.js","/Users/baileykane/Programming/mark-iskarous-website/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.Bhd_2RdS.js","/Users/baileykane/Programming/mark-iskarous-website/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.DSKWQ5z9.js","/Users/baileykane/Programming/mark-iskarous-website/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.ho31yFcE.js","/Users/baileykane/Programming/mark-iskarous-website/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.kqBFpibl.js","/Users/baileykane/Programming/mark-iskarous-website/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.BUT4NMWY.js","/Users/baileykane/Programming/mark-iskarous-website/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.DsP37bGC.js","/Users/baileykane/Programming/mark-iskarous-website/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.PWLYeEvf.js","/Users/baileykane/Programming/mark-iskarous-website/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.C0BZxuxG.js","/Users/baileykane/Programming/mark-iskarous-website/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.CZg3fvkD.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.CUe-mnEm.css","/cv.pdf","/favicon.svg","/mark-iskarous.jpeg","/_astro/ViteDevServerStopped.ho31yFcE.js","/_astro/browser.kG3i7svf.js","/_astro/client.Dm-eYAro.js","/_astro/client.elo0zQhS.js","/_astro/index.PWLYeEvf.js","/_astro/index2.C0BZxuxG.js","/_astro/index3.DsP37bGC.js","/_astro/resources.h0ZdIjmV.js","/_astro/resources2.DSKWQ5z9.js","/_astro/resources3.Bhd_2RdS.js","/_astro/resources4.BUT4NMWY.js","/_astro/stegaEncodeSourceMap.kqBFpibl.js","/_astro/studio-component.CZg3fvkD.js","/_astro/studio-component.MHjKTRAc.js","/research/index.html","/sanity/index.html","/teaching/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Os6bk245MmdvSDorg+zZw38ABi1zAMkugKKFMCsC/Pg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
