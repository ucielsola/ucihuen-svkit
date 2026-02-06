import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D-oNWNAJ.js","_app/immutable/chunks/DSduQYlM.js","_app/immutable/chunks/BC4EkEQe.js","_app/immutable/chunks/Chc-wPu7.js","_app/immutable/chunks/DyxHvis7.js","_app/immutable/chunks/Bdl1seu_.js","_app/immutable/chunks/sznfKMQ3.js","_app/immutable/chunks/CN1uJvll.js","_app/immutable/chunks/kckne7wd.js","_app/immutable/chunks/7PdrsQZO.js","_app/immutable/chunks/DnP7PCZ_.js"];
export const stylesheets = ["_app/immutable/assets/0.5MDGRp3L.css"];
export const fonts = [];
