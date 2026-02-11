import * as m from '$lib/paraglide/messages.js';

export const excursions = [
	{
		id: 1,
		title: m.excursion_1_title,
		description: m.excursion_1_desc,
		tags: [m.excursion_tag_nature, m.excursion_tag_trails, m.excursion_tag_trekking],
		image: '/paseos/puelo.webp',
		mapsUrl:
			'https://www.google.com/maps/dir/Caba%C3%B1as+Ucihuen,+Los+Coihues+entre+Los+Alerces,+Las+Lauras+y,+U8431+Lago+Puelo,+Chubut/Lago+Puelo+National+Park,+Unnamed+Road,,+Chubut/',
		websiteUrl: 'https://lagopuelo.gob.ar/turismo/a-donde-vamos/parque-nacional-lago-puelo/'
	},
	{
		id: 2,
		title: m.excursion_2_title,
		description: m.excursion_2_desc,
		tags: [m.excursion_tag_beach, m.excursion_tag_trekking, m.excursion_tag_nature],
		image: '/paseos/pasarela.webp',
		mapsUrl:
			'https://www.google.com/maps/dir/Caba%C3%B1as+Ucihuen,+Los+Coihues+entre+Los+Alerces,+Las+Lauras+y,+U8431+Lago+Puelo,+Chubut/Pasarela+R%C3%ADo+Azul,+costa+r%C3%ADo+azul,+C.+Roca+del+Tiempo,+U9211+Lago+Puelo,+Chubut/',
		websiteUrl:
			'https://lagopuelo.gob.ar/turismo/la-pasarela-del-rio-azul-balneario-en-la-corillera/'
	},
	{
		id: 3,
		title: m.excursion_3_title,
		description: m.excursion_3_desc,
		tags: [m.excursion_tag_beach, m.excursion_tag_nature, m.excursion_tag_trails],
		image: '/paseos/cayun.webp',
		mapsUrl:
			'https://www.google.com/maps/dir/Caba%C3%B1as+Ucihuen,+Los+Coihues+entre+Los+Alerces,+Las+Lauras+y,+U8431+Lago+Puelo,+Chubut/Balneario+Cayun,+Chubut/',
		websiteUrl: null
	},
	{
		id: 4,
		title: m.excursion_4_title,
		description: m.excursion_4_desc,
		tags: [m.excursion_tag_market, m.excursion_tag_gastronomy, m.excursion_tag_family],
		image: '/paseos/feria-artesana.webp',
		mapsUrl:
			'https://www.google.com/maps/dir/Caba%C3%B1as+Ucihuen,+Los+Coihues+entre+Los+Alerces,+Las+Lauras+y,+U8431+Lago+Puelo,+Chubut/Feria+Regional+El+Bols%C3%B3n,+Gral.+Roca,+R8430+El+Bols%C3%B3n,+R%C3%ADo+Negro/',
		websiteUrl: 'https://www.turismoelbolson.gob.ar/feria-regional-artesanos'
	},
	{
		id: 5,
		title: m.excursion_5_title,
		description: m.excursion_5_desc,
		tags: [m.excursion_tag_adventure, m.excursion_tag_nature, m.excursion_tag_family],
		image: '/paseos/laberinto.webp',
		mapsUrl:
			'https://www.google.com/maps/dir/Caba%C3%B1as+Ucihuen,+Los+Coihues+entre+Los+Alerces,+Las+Lauras+y,+U8431+Lago+Puelo,+Chubut/Laberinto+Patagonia,+km+3,7+Camino+a,+El+Desemboque,+U9211+El+Hoyo,+Chubut/',
		websiteUrl: 'https://laberintopatagonia.com/'
	},
	{
		id: 6,
		title: m.excursion_6_title,
		description: m.excursion_6_desc,
		tags: [m.excursion_tag_ski, m.excursion_tag_adventure, m.excursion_tag_trekking],
		image: '/paseos/ski.webp',
		mapsUrl:
			'https://www.google.com/maps/dir/Caba%C3%B1as+Ucihuen,+Los+Coihues+entre+Los+Alerces,+Las+Lauras+y,+U8431+Lago+Puelo,+Chubut/Cerro+Perito+Moreno,+R%C3%ADo+Negro+Province/',
		websiteUrl: 'https://www.laderas.com.ar/'
	},
	{
		id: 7,
		title: m.excursion_7_title,
		description: m.excursion_7_desc,
		tags: [m.excursion_tag_beach, m.excursion_tag_water_sports, m.excursion_tag_nature],
		image: '/paseos/patriada.webp',
		mapsUrl:
			'https://www.google.com/maps/dir/Caba%C3%B1as+Ucihuen,+Los+Coihues+entre+Los+Alerces,+Las+Lauras+y,+U8431+Lago+Puelo,+Chubut/Puerto+Patriada,+RFM5%2B3W,+El+Hoyo,+Chubut/',
		websiteUrl: 'https://turismoelhoyo.com.ar/puerto-patriada/'
	},
	{
		id: 8,
		title: m.excursion_8_title,
		description: m.excursion_8_desc,
		tags: [m.excursion_tag_nature, m.excursion_tag_trails, m.excursion_tag_family],
		image: '/paseos/confluencia.webp',
		mapsUrl:
			'https://www.google.com/maps/dir/Caba%C3%B1as+Ucihuen,+Los+Coihues+entre+Los+Alerces,+Las+Lauras+y,+U8431+Lago+Puelo,+Chubut/Pasarela+La+Confluencia,+Chubut/',
		websiteUrl: null
	},
	{
		id: 9,
		title: m.excursion_9_title,
		description: m.excursion_9_desc,
		tags: [m.excursion_tag_trekking, m.excursion_tag_viewpoint, m.excursion_tag_nature],
		image: '/paseos/mirador.webp',
		mapsUrl:
			'https://www.google.com/maps/dir/Caba%C3%B1as+Ucihuen,+Los+Coihues+entre+Los+Alerces,+Las+Lauras+y,+U8431+Lago+Puelo,+Chubut/Sendero+Mirador+del+Lago,+Chubut/',
		websiteUrl: 'https://lagopuelo.gob.ar/turismo/a-donde-vamos/parque-nacional-lago-puelo/'
	},
	{
		id: 10,
		title: m.excursion_10_title,
		description: m.excursion_10_desc,
		tags: [m.excursion_tag_history, m.excursion_tag_trails, m.excursion_tag_nature],
		image: '/paseos/pobladores.webp',
		mapsUrl:
			'https://www.google.com/maps/dir/Caba%C3%B1as+Ucihuen,+Los+Coihues+entre+Los+Alerces,+Las+Lauras+y,+U8431+Lago+Puelo,+Chubut/-42.082592,-71.5963947/@-42.0829035,-71.5967969,18.29z/data=!4m9!4m8!1m5!1m1!1s0x961bec990d4c5455:0xe7f57694b5338ff2!2m2!1d-71.6009084!2d-42.068482!1m0!3e0?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D',
		websiteUrl: 'https://lagopuelo.gob.ar/turismo/sendero-antiguos-pobladores/'
	}
];
