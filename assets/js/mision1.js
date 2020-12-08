var mision1 = {
	title:'Prueba 1: Cruzando la calle',
	test:String('<p>En esta prueba deberás ir hacia donde indica la flecha y cruzando en el momento adecuado</p><br /><h6>Objetivos:</h6><p class="modal-content-list">Camina con cuidado y evita circular por la calle</p><p class="modal-content-list">Cruza la calle cuando el semáforo esté en rojo o perderás una oportunidad.<p>'),
	animacion_semaforo:null,
	carros:[
		{
			id:1,
			name:'',
			animation_data:[
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157.4},
				{x:765,y:158.6},
				{x:765,y:160.7},
				{x:765,y:163.7},
				{x:765,y:167.4},
				{x:765,y:172},
				{x:765,y:177.5},
				{x:765,y:183.7},
				{x:765,y:190.9},
				{x:765,y:198.8},
				{x:765,y:207.6},
				{x:765,y:217.2},
				{x:765,y:227.7},
				{x:765,y:238.9},
				{x:765,y:251.1},
				{x:765,y:261.1},
				{x:765,y:271.1},
				{x:765,y:281.1},
				{x:765,y:291.1},
				{x:765,y:301.2},
				{x:765,y:311.2},
				{x:765,y:321.2},
				{x:765,y:331.2},
				{x:765,y:341.2},
				{x:765,y:351.2},
				{x:765,y:361.2},
				{x:765,y:371.3},
				{x:765,y:381.3},
				{x:765,y:391.3},
				{x:765,y:401.3},
				{x:765,y:411.3},
				{x:765,y:421.3},
				{x:765,y:431.3},
				{x:765,y:441.3},
				{x:765,y:451.4},
				{x:765,y:461.4},
				{x:765,y:471.4},
				{x:765,y:481.4},
				{x:765,y:491.4},
				{x:765,y:501.4},
				{x:765,y:511.5},
				{x:765,y:521.5},
				{x:765,y:531.5},
				{x:765,y:541.5},
				{x:765,y:551.5},
				{x:765,y:561.5},
				{x:765,y:571.5},
				{x:765,y:581.6},
				{x:765,y:591.6},
				{x:765,y:601.6},
				{x:765,y:611.6},
				{x:765,y:621.6},
				{x:765,y:631.6},
				{x:765,y:641.6},
				{x:765,y:651.7},
				{x:765,y:661.7},
				{x:765,y:671.7},
				{x:765,y:681.7},
				{x:765,y:691.7},
				{x:765,y:701.7},
				{x:765,y:711.7},
				{x:765,y:721.8},
				{x:765,y:731.8},
				{x:765,y:731.8},
				{x:765,y:731.8},
				{x:765,y:731.8},
				{x:765,y:731.8},
				{x:765,y:731.8},
				{x:765,y:731.8},
				{x:765,y:731.8},
				{x:765,y:-127.9},
				{x:765,y:-106.5},
				{x:765,y:-85.9},
				{x:765,y:-66.2},
				{x:765,y:-47.3},
				{x:765,y:-29.3},
				{x:765,y:-12.1},
				{x:765,y:4.3},
				{x:765,y:19.8},
				{x:765,y:34.6},
				{x:765,y:48.4},
				{x:765,y:61.5},
				{x:765,y:73.7},
				{x:765,y:85.1},
				{x:765,y:95.6},
				{x:765,y:105.3},
				{x:765,y:114.2},
				{x:765,y:122.2},
				{x:765,y:129.4},
				{x:765,y:135.8},
				{x:765,y:141.3},
				{x:765,y:146},
				{x:765,y:149.9},
				{x:765,y:152.9},
				{x:765,y:155.1},
				{x:765,y:156.4},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157},
				{x:765,y:157}
			],
			frame:0,
			animacion:null,
			startAnimation: function(ind){
				mision1.carros[ind].animacion = setInterval(function(){animacionCarro(ind)},35)
			},
			stopAnimation:function(ind){
				clearInterval(mision1.carros[ind].animacion)
				mision1.carros[ind].animacion = null
			}
		},

		{
			id:2,
			name:'',
			animation_data:[
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157},
				{x:808,y:157.4},
				{x:808,y:158.6},
				{x:808,y:160.7},
				{x:808,y:163.7},
				{x:808,y:167.4},
				{x:808,y:172},
				{x:808,y:177.5},
				{x:808,y:183.7},
				{x:808,y:190.9},
				{x:808,y:198.8},
				{x:808,y:207.6},
				{x:808,y:217.2},
				{x:808,y:227.7},
				{x:808,y:238.9},
				{x:808,y:251.1},
				{x:808,y:261.1},
				{x:808,y:271.1},
				{x:808,y:281.1},
				{x:808,y:291.1},
				{x:808,y:301.2},
				{x:808,y:311.2},
				{x:808,y:321.2},
				{x:808,y:331.2},
				{x:808,y:341.2},
				{x:808,y:351.2},
				{x:808,y:361.2},
				{x:808,y:371.3},
				{x:808,y:381.3},
				{x:808,y:391.3},
				{x:808,y:401.3},
				{x:808,y:411.3},
				{x:808,y:421.3},
				{x:808,y:431.3},
				{x:808,y:441.3},
				{x:808,y:451.4},
				{x:808,y:461.4},
				{x:808,y:471.4},
				{x:808,y:481.4},
				{x:808,y:491.4},
				{x:808,y:501.4},
				{x:808,y:511.5},
				{x:808,y:521.5},
				{x:808,y:531.5},
				{x:808,y:541.5},
				{x:808,y:551.5},
				{x:808,y:561.5},
				{x:808,y:571.5},
				{x:808,y:581.6},
				{x:808,y:591.6},
				{x:808,y:601.6},
				{x:808,y:611.6},
				{x:808,y:621.6},
				{x:808,y:631.6},
				{x:808,y:641.6},
				{x:808,y:651.7},
				{x:808,y:661.7},
				{x:808,y:671.7},
				{x:808,y:681.7},
				{x:808,y:691.7},
				{x:808,y:701.7},
				{x:808,y:711.7},
				{x:808,y:721.8},
				{x:808,y:731.8},
				{x:808,y:731.8},
				{x:808,y:731.8},
				{x:808,y:731.8},
				{x:808,y:731.8},
				{x:808,y:731.8},
				{x:808,y:731.8},
				{x:808,y:731.8},
				{x:808,y:-127.9},
				{x:808,y:-106.5},
				{x:808,y:-85.9},
				{x:808,y:-66.2},
				{x:808,y:-47.3},
				{x:808,y:-29.3},
				{x:808,y:-12.1},
				{x:808,y:4.3},
				{x:808,y:19.8},
				{x:808,y:34.6},
				{x:808,y:48.4},
				{x:808,y:61.5},
				{x:808,y:73.7},
				{x:808,y:85.1},
				{x:808,y:95.6},
				{x:808,y:105.3},
				{x:808,y:114.2},
				{x:808,y:122.2},
				{x:808,y:129.4},
				{x:808,y:135.8},
				{x:808,y:141.3},
				{x:808,y:146},
				{x:808,y:149.9},
				{x:808,y:152.9},
				{x:808,y:155.1},
				{x:808,y:156.4},
				{x:808,y:157}
			],
			frame:0,
			animacion:null,
			startAnimation: function(ind){
				mision1.carros[ind].animacion = setInterval(function(){animacionCarro(ind)},35)
			},
			stopAnimation:function(ind){
				clearInterval(mision1.carros[ind].animacion)
				mision1.carros[ind].animacion = null
			}
		},

		{
			id:3,
			name:'',
			animation_data:[
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219.4},
				{x:765,y:220.6},
				{x:765,y:222.7},
				{x:765,y:225.7},
				{x:765,y:229.4},
				{x:765,y:234},
				{x:765,y:239.5},
				{x:765,y:245.7},
				{x:765,y:252.9},
				{x:765,y:260.8},
				{x:765,y:269.6},
				{x:765,y:279.2},
				{x:765,y:289.7},
				{x:765,y:300.9},
				{x:765,y:313.1},
				{x:765,y:323.1},
				{x:765,y:333.1},
				{x:765,y:343.1},
				{x:765,y:353.1},
				{x:765,y:363.2},
				{x:765,y:373.2},
				{x:765,y:383.2},
				{x:765,y:393.2},
				{x:765,y:403.2},
				{x:765,y:413.2},
				{x:765,y:423.2},
				{x:765,y:433.3},
				{x:765,y:443.3},
				{x:765,y:453.3},
				{x:765,y:463.3},
				{x:765,y:473.3},
				{x:765,y:483.3},
				{x:765,y:493.3},
				{x:765,y:503.3},
				{x:765,y:513.4},
				{x:765,y:523.4},
				{x:765,y:533.4},
				{x:765,y:543.4},
				{x:765,y:553.4},
				{x:765,y:563.4},
				{x:765,y:573.5},
				{x:765,y:583.5},
				{x:765,y:593.5},
				{x:765,y:603.5},
				{x:765,y:613.5},
				{x:765,y:623.5},
				{x:765,y:633.5},
				{x:765,y:643.6},
				{x:765,y:653.6},
				{x:765,y:663.6},
				{x:765,y:673.6},
				{x:765,y:683.6},
				{x:765,y:693.6},
				{x:765,y:703.6},
				{x:765,y:713.7},
				{x:765,y:723.7},
				{x:765,y:733.7},
				{x:765,y:743.7},
				{x:765,y:753.7},
				{x:765,y:763.7},
				{x:765,y:773.7},
				{x:765,y:783.8},
				{x:765,y:793.8},
				{x:765,y:793.8},
				{x:765,y:793.8},
				{x:765,y:793.8},
				{x:765,y:793.8},
				{x:765,y:793.8},
				{x:765,y:793.8},
				{x:765,y:793.8},
				{x:765,y:-65.9},
				{x:765,y:-44.5},
				{x:765,y:-23.9},
				{x:765,y:-4.2},
				{x:765,y:14.7},
				{x:765,y:32.7},
				{x:765,y:49.9},
				{x:765,y:66.3},
				{x:765,y:81.8},
				{x:765,y:96.6},
				{x:765,y:110.4},
				{x:765,y:123.5},
				{x:765,y:135.7},
				{x:765,y:147.1},
				{x:765,y:157.6},
				{x:765,y:167.3},
				{x:765,y:176.2},
				{x:765,y:184.2},
				{x:765,y:191.4},
				{x:765,y:197.8},
				{x:765,y:203.3},
				{x:765,y:208},
				{x:765,y:211.9},
				{x:765,y:214.9},
				{x:765,y:217.1},
				{x:765,y:218.4},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219},
				{x:765,y:219}
			],
			frame:0,
			animacion:null,
			startAnimation: function(ind){
				mision1.carros[ind].animacion = setInterval(function(){animacionCarro(ind)},35)
			},
			stopAnimation:function(ind){
				clearInterval(mision1.carros[ind].animacion)
				mision1.carros[ind].animacion = null
			}
		},

		{
			id:4,
			name:'',
			animation_data:[
				{x:808,y:219},
				{x:808,y:219.4},
				{x:808,y:220.6},
				{x:808,y:222.7},
				{x:808,y:225.7},
				{x:808,y:229.4},
				{x:808,y:234},
				{x:808,y:239.5},
				{x:808,y:245.7},
				{x:808,y:252.9},
				{x:808,y:260.8},
				{x:808,y:269.6},
				{x:808,y:279.2},
				{x:808,y:289.7},
				{x:808,y:300.9},
				{x:808,y:313.1},
				{x:808,y:323.1},
				{x:808,y:333.1},
				{x:808,y:343.1},
				{x:808,y:353.1},
				{x:808,y:363.2},
				{x:808,y:373.2},
				{x:808,y:383.2},
				{x:808,y:393.2},
				{x:808,y:403.2},
				{x:808,y:413.2},
				{x:808,y:423.2},
				{x:808,y:433.3},
				{x:808,y:443.3},
				{x:808,y:453.3},
				{x:808,y:463.3},
				{x:808,y:473.3},
				{x:808,y:483.3},
				{x:808,y:493.3},
				{x:808,y:503.3},
				{x:808,y:513.4},
				{x:808,y:523.4},
				{x:808,y:533.4},
				{x:808,y:543.4},
				{x:808,y:553.4},
				{x:808,y:563.4},
				{x:808,y:573.5},
				{x:808,y:583.5},
				{x:808,y:593.5},
				{x:808,y:603.5},
				{x:808,y:613.5},
				{x:808,y:623.5},
				{x:808,y:633.5},
				{x:808,y:643.6},
				{x:808,y:653.6},
				{x:808,y:663.6},
				{x:808,y:673.6},
				{x:808,y:683.6},
				{x:808,y:693.6},
				{x:808,y:703.6},
				{x:808,y:713.7},
				{x:808,y:723.7},
				{x:808,y:733.7},
				{x:808,y:743.7},
				{x:808,y:753.7},
				{x:808,y:763.7},
				{x:808,y:773.7},
				{x:808,y:783.8},
				{x:808,y:793.8},
				{x:808,y:793.8},
				{x:808,y:793.8},
				{x:808,y:793.8},
				{x:808,y:793.8},
				{x:808,y:793.8},
				{x:808,y:793.8},
				{x:808,y:793.8},
				{x:808,y:-65.9},
				{x:808,y:-44.5},
				{x:808,y:-23.9},
				{x:808,y:-4.2},
				{x:808,y:14.7},
				{x:808,y:32.7},
				{x:808,y:49.9},
				{x:808,y:66.3},
				{x:808,y:81.8},
				{x:808,y:96.6},
				{x:808,y:110.4},
				{x:808,y:123.5},
				{x:808,y:135.7},
				{x:808,y:147.1},
				{x:808,y:157.6},
				{x:808,y:167.3},
				{x:808,y:176.2},
				{x:808,y:184.2},
				{x:808,y:191.4},
				{x:808,y:197.8},
				{x:808,y:203.3},
				{x:808,y:208},
				{x:808,y:211.9},
				{x:808,y:214.9},
				{x:808,y:217.1},
				{x:808,y:218.4},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219},
				{x:808,y:219}
			],
			frame:0,
			animacion:null,
			startAnimation: function(ind){
				mision1.carros[ind].animacion = setInterval(function(){animacionCarro(ind)},35)
			},
			stopAnimation:function(ind){
				clearInterval(mision1.carros[ind].animacion)
				mision1.carros[ind].animacion = null
			}
		}
	],
	startAnimationSemaforo:function(){
		getE('semaforo-mision-1').className = 'semaforo-start'
		mision1.animacion_semaforo = setTimeout(function(){
			clearTimeout(mision1.animacion_semaforo)
			mision1.animacion_semaforo = null

			getE('semaforo-mision-1').className = 'semaforo-stop'
		},4000)
	},
	stopAnimationSemaforo:function(){
		getE('semaforo-mision-1').className = 'semaforo-stop'
		clearTimeout(mision1.animacion_semaforo)
		mision1.animacion_semaforo = null
	},
	fallarMision:function(){
		var frase = '<p>Debes respetar los semáforos y esperar el momento indicado para cruzar.</p>'
		//console.log("atropeyar")
		avatar.classList.add('avatar-dead-1')

		//parar animaciones
		for(var i = 0;i<mision1.carros.length;i++){
			mision1.carros[i].stopAnimation(i)
		}
		mision1.stopAnimationSemaforo()

		getE('explosion-clip').className = 'spd_sprite explosion-clip-on'
		getE('explosion-clip').style.left = (avatar_data.left-(180/2))+'px'
		getE('explosion-clip').style.top = (avatar_data.top-(180/2))+'px'

		spdPlayAnimation({frame:1,stop:0,loop:false,callBack:function(){
			getE('explosion-clip').className = 'spd_sprite explosion-clip-off'
			setModal({
				close:false,
				title:'¡Muy mal Juan!',
				content:frase,
				button:true,
				value:'repetir',
				action:'repetirMission'
			})
		}},1)
	},
	aprobarMision:function(){
		//parar animaciones
		for(var i = 0;i<mision1.carros.length;i++){
			mision1.carros[i].stopAnimation(i)
		}
		mision1.stopAnimationSemaforo()

		var frase = '<p>Debes esperar a que el semáforo esté en rojo para poder cruzar.</p>'
		setModal({
			close:false,
			title:'¡Muy bien Juan!',
			content:frase,
			button:true,
			value:'continuar',
			action:'nextMission'
		})
	},
	cleanMision:function(){
		cleanMission()
	}
}

function animacionCarro(ind){
	//console.log("aqui")
	getE(mision1.carros[ind].name).style.left = mision1.carros[ind].animation_data[mision1.carros[ind].frame].x+'px'
	getE(mision1.carros[ind].name).style.top = mision1.carros[ind].animation_data[mision1.carros[ind].frame].y+'px'
	mision1.carros[ind].frame++
	if(mision1.carros[ind].frame==mision1.carros[ind].animation_data.length){
		mision1.carros[ind].frame = 0
		mision1.startAnimationSemaforo()
	}
	//if(ind==0){
		console.log("running "+ind)
	//}
	
}

function initMision1(){

}






















