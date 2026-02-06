export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/open-sans/open-sans-v27-latin-300.woff","fonts/open-sans/open-sans-v27-latin-300.woff2","fonts/open-sans/open-sans-v27-latin-600.woff","fonts/open-sans/open-sans-v27-latin-600.woff2","fonts/open-sans/open-sans-v27-latin-regular.woff","fonts/open-sans/open-sans-v27-latin-regular.woff2","fonts/ovo/ovo-v15-latin-regular.woff","fonts/ovo/ovo-v15-latin-regular.woff2","fonts/ruluko/ruluko-v19-latin-regular.woff","fonts/ruluko/ruluko-v19-latin-regular.woff2","global.css","icons/agua.webp","icons/airbnb.webp","icons/almohada.webp","icons/auto.webp","icons/booking.webp","icons/botiquin.webp","icons/calefaccion.webp","icons/cocina.webp","icons/extintor.webp","icons/fumadores.webp","icons/higiene.webp","icons/mascota.webp","icons/parrilla.webp","icons/patio.webp","icons/pin.webp","icons/sabanas.webp","icons/secador.webp","icons/tele.webp","icons/toggle.webp","icons/whatsapp.webp","icons/wifi.webp","images/cab-1.webp","images/cab-2.webp","images/cover.webp","images/ucihuen_open_graph.png","images/vertical_banner.webp","images/whatsapp.png","reset.css"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".css":"text/css",".webp":"image/webp"},
	_: {
		client: {start:"_app/immutable/entry/start.B5Ktu_jK.js",app:"_app/immutable/entry/app.8agxBanB.js",imports:["_app/immutable/entry/start.B5Ktu_jK.js","_app/immutable/chunks/DnP7PCZ_.js","_app/immutable/chunks/BC4EkEQe.js","_app/immutable/entry/app.8agxBanB.js","_app/immutable/chunks/BC4EkEQe.js","_app/immutable/chunks/DSduQYlM.js","_app/immutable/chunks/DyxHvis7.js","_app/immutable/chunks/sznfKMQ3.js","_app/immutable/chunks/qIX1-8Og.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/galeria",
				pattern: /^\/galeria\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
