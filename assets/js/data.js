var restaurantes = [
		{'tipo' : 'chilena',
		'nombre': 'Comida Chilena',
		'direccion': 'Huérfanos 812, Recoleta, Region Metropolitana', 
		'telefono': 226321416,
		'horario': '12:00 - 18:00',
		'evaluacion' : 3.8,
		'foto': "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2017-05/comida-chilena-santiago.jpg" 
	}, 
	{
		'tipo' : 'chilena',
		'nombre': 'Don Nacho restaurant',
		'direccion': 'Av. Beaucheff 1239, Santiago, Región Metropolitana', 
		'telefono': 226834004,
		'horario': '12:30 - 22:00',
		'evaluacion' : 4.1,
		'foto': "https://www.google.com/maps/contrib/112587514664584529247/photos/@-33.463377,-70.663889,3a,75y,90t/data=!3m7!1e2!3m5!1sAF1QipP3qS2Jkd-Apj92fLJNUhAy1FLQXFG9QdvNmQTr!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP3qS2Jkd-Apj92fLJNUhAy1FLQXFG9QdvNmQTr%3Dw203-h100-p-k-no!7i787!8i553!4m3!8m2!3m1!1e1"
	},
	{
		'tipo' : 'chilena',
		'nombre': 'Los Buenos Muchachos',
		'direccion': 'Ricardo Cumming 1031, Santiago, Región Metropolitana', 
		'telefono': 225664660,
		'horario': '12:30 - 00:00',
		'evaluacion' : 4.3,
		'foto': "https://www.google.cl/maps/uv?hl=es&pb=!1s0x9662c5b4aa6aa7b9%3A0xb4621d3facdd0c7a!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps%3A%2F%2Fpicasaweb.google.com%2Flh%2Fsredir%3Funame%3D102490774728064460505%26id%3D6445705499444311266%26target%3DPHOTO!5sBuscar%20con%20Google&imagekey=!1e10!2sAF1QipMTRpNXLWlPDxhT0Ufw_owNIoUurTXZicoKqIem"
	}, 
	{
		'tipo' : 'mexicana',
		'nombre': 'Restaurante Plaza Garibaldi',
		'direccion': 'Moneda 2319, Santiago, Región Metropolitana', 
		'telefono': 226994278,
		'horario': '12:30 - 00:00',
		'evaluacion' : 4.0,
		'foto': "https://www.google.cl/maps/uv?hl=es&pb=!1s0x9662c5ab5ba86df7:0x2c6d7eb1499fc53d!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps://picasaweb.google.com/lh/sredir?uname%3D112298214100717483967%26id%3D6356907089434164114%26target%3DPHOTO!5sBuscar+con+Google&imagekey=!1e3!2s--GToVtYdNcA/WDhFUUfiu5I/AAAAAAAAzD8/i5QHA45-m9Qqx_jv5w_Yxfa6YkURDIxHgCLIB"
	}, 
	{
		'tipo' : 'mexicana',
		'nombre': 'Los Cuates',
		'direccion': 'Av. Manuel Montt 235, Santiago, Región Metropolitana', 
		'telefono': 222642376,
		'horario': '09:30 - 00:00',
		'evaluacion' : 4.1,
		'foto': "https://www.google.cl/maps/uv?hl=es&pb=!1s0x9662cf7d25fd678d:0x973470a54eec5ba5!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps://picasaweb.google.com/lh/sredir?uname%3D113939530608369946501%26id%3D6375676709242948898%26target%3DPHOTO!5sBuscar+con+Google&imagekey=!1e3!2s-pBtyiSxw8kU/WHr0L_EoTSI/AAAAAAAAAOE/lmcjImH49rkru3aOWr2VI4dloDvme1KEwCLIB"
	}, 
	{
		'tipo' : 'mexicana',
		'nombre': 'Mexicana Restoran',
		'direccion': 'Seminario 621, Ñuñoa, Región Metropolitana', 
		'telefono': 226344413,
		'horario': '13:00 - 00:00',
		'evaluacion' : 4.4,
		'foto': "https://www.google.cl/maps/uv?hl=es&pb=!1s0x9662c57c4e37e861%3A0xe3126a64c13fea67!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps%3A%2F%2Fsantiago.restorando.cl%2Frestaurante%2Fmexicana-restoran!5sBuscar%20con%20Google&imagekey=!1e10!2sAF1QipMqHMqWQKYLD4gGoIMQndAOnrazVoER0kdL55Mv"
	}, 
	{
		'tipo' : 'peruana',
		'nombre': 'Lima Limón',
		'direccion': 'San Martín 70, Santiago, Región Metropolitana', 
		'telefono': 226960140,
		'horario': '12:00 - 23:00',
		'evaluacion' : 4.0,
		'foto': "https://www.google.cl/maps/uv?hl=es&pb=!1s0x9662c5a89c50e7f1:0xa189aefe01897890!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps://picasaweb.google.com/lh/sredir?uname%3D100449546764319540554%26id%3D6340995031468151026%26target%3DPHOTO!5sBuscar+con+Google&imagekey=!1e3!2s-dpVe4tBpRnk/V_-9YpUtEPI/AAAAAAAAAt8/HhWZNRCM0jQB5y_loVOOONlCAw6Y3__JQCLIBGAYYCw"
	}, 
	{
		'tipo' : 'peruana',
		'nombre': 'El Ají Seco',
		'direccion': 'San Antonio 530, Santiago, Región Metropolitana', 
		'telefono': 226388818,
		'horario': '12:30 - 23:30',
		'evaluacion' : 3.9,
		'foto': "https://www.google.cl/maps/uv?hl=es&pb=!1s0x9662c5a89c50e7f1:0xa189aefe01897890!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps://picasaweb.google.com/lh/sredir?uname%3D100449546764319540554%26id%3D6340995031468151026%26target%3DPHOTO!5sBuscar+con+Google&imagekey=!1e3!2s-dpVe4tBpRnk/V_-9YpUtEPI/AAAAAAAAAt8/HhWZNRCM0jQB5y_loVOOONlCAw6Y3__JQCLIBGAYYCw"
	}
  {
    'tipo' : 'peruana',
    'nombre': 'Perú Mío',
    'direccion': 'Matías Cousiño N°82, 1 y 2 subterráneo, Santiago, Región Metropolitana', 
    'telefono': 224809038,
    'horario': '12:00 - 21:00',
    'evaluacion' : 4.1,
    'foto': "https://www.google.cl/maps/uv?hl=es&pb=!1s0x9662c5a1169b76ab%3A0x66c24a168067975a!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps%3A%2F%2Fpicasaweb.google.com%2Flh%2Fsredir%3Funame%3D101111932120936221519%26id%3D6483882997514691634%26target%3DPHOTO!5sBuscar%20con%20Google&imagekey=!1e10!2sAF1QipM1r8g0L5irC87v6AUOiMKarkQoIZnB5HlMXoVV"
  }
  {
    'tipo' : 'italiana',
    'nombre': 'La Piccola Italia',
    'direccion': 'Hermanos Amunátegui 371, Santiago, Región Metropolitana', 
    'telefono': 226995523,
    'horario': '12:30 - 00:30',
    'evaluacion' : 3.8,
    'foto': "https://www.google.cl/maps/uv?hl=es&pb=!1s0x9662c5bc18bc09bd%3A0x1c5858176ae097ca!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps%3A%2F%2Fpicasaweb.google.com%2Flh%2Fsredir%3Funame%3D102860089861911601134%26id%3D6341827892085698242%26target%3DPHOTO!5sBuscar%20con%20Google&imagekey=!1e10!2sAF1QipOoSqfWmKQRp07o0UbfNmm6eqq74Z4dsGRZ7wWL"
  }
  {
    'tipo' : 'italiana',
    'nombre': 'Italissimo',
    'direccion': 'SanMartín 127, Santiago, Región Metropolitana', 
    'telefono': 226721878,
    'horario': '12:00 - 23:00',
    'evaluacion' : 4.1,
    'foto': "https://www.google.cl/maps/uv?hl=es&pb=!1s0x9662c5a8a8bf8e8d%3A0x2fbe60708d96f513!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps%3A%2F%2Fpicasaweb.google.com%2Flh%2Fsredir%3Funame%3D107325133712990211422%26id%3D6449379843811917746%26target%3DPHOTO!5sBuscar%20con%20Google&imagekey=!1e10!2sAF1QipNr4GxOrwdCD690C56YnDVZpfSCkSdGtmni-m84"
  }
  {
    'tipo' : 'italiana',
    'nombre': 'La Pizza Nostra Il Ristorante Italiano',
    'direccion': 'Av. Providencia 1975, Santiago, Providencia, Región Metropolitana', 
    'telefono': 222322556,
    'horario': '1:00 - 00:00',
    'evaluacion' : 4.2,
    'foto': "https://www.google.cl/maps/uv?hl=es&pb=!1s0x9662cf642d27be65:0x37ad29b44514fe60!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps://picasaweb.google.com/lh/sredir?uname%3D104456803885000412194%26id%3D6436413232637684594%26target%3DPHOTO!5sBuscar+con+Google&imagekey=!1e3!2s-y1QsfJIFDjI/WVK7u8b-K3I/AAAAAAAAAAo/2iYI7835psAaMLOozB-RSM16LZH9nB-xwCLIBGAYYCw"
  }

]; 

console.log(restorants); 