var i = 0
var j = 0
var k = 0

function getRand(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function unorderArrayElementos(long,_test,counter){
	var desorden = []
	while(desorden.length<long){
		var a = getRand(0,(long-1))
		var a_exists = desorden.includes(a)
		while(a_exists){
			a = getRand(0,(long-1))
			a_exists = desorden.includes(a)
		}
		desorden.push(a)
	}

	if(counter==null||counter==undefined){
		counter = false
	}

	if(_test==null||_test==undefined){
		_test = new Array()
		for(k = 0;k<long;k++){
			if(counter){
				_test.push((k+1))	
			}else{
				_test.push(k)
			}
		}
	}

	var nuevo = []
	for(var ii = 0;ii<long;ii++){
		nuevo.push(_test[desorden[ii]])
	}
	return nuevo
}

var game = getE('game')
var game_scene = getE('game-scene')
game_scene.style.visibility = 'hidden'
var game_rect = game.getBoundingClientRect()
var game_width = game_rect.width
var game_height = game_rect.height
//console.log(game_width,game_height)

function setInstrucciones(start){
	var html = ''
	
    if(ismobile){
    	
    }else{
    	
    }

    if(start){
    	setModal({
	    	close:false,
			title:'Instrucciones',
			content:html,
			button:true,
			value:'jugar',
			orientation:'left',
			action:'empezarJuego',
			personaje:'off'
	    })
    }else{
    	setModal({
	    	close:false,
			title:'Instrucciones',
			content:html,
			button:true,
			value:'aceptar',
			orientation:'left',
			action:'seguirJuego',
			personaje:'off'
	    })
    }
}

var actual_page_inst = 1
var total_pages_inst = 4
//boton prev instrucciones oculto por defecto
getE('instrucciones-prev-btn').style.visibility = 'hidden'


function nextInstrucciones(){
	boton_mp3.play()
	actual_page_inst++
	getE('instrucciones-wrap').className = 'instrucciones-wrap-left-'+actual_page_inst
	if(actual_page_inst==total_pages_inst){
		getE('instrucciones-next-btn').style.visibility = 'hidden'
	}
	if(actual_page_inst>1){
		getE('instrucciones-prev-btn').style.visibility = 'visible'
	}

}
function prevInstrucciones(){
	boton_mp3.play()
	actual_page_inst--
	getE('instrucciones-wrap').className = 'instrucciones-wrap-left-'+actual_page_inst
	if(actual_page_inst==1){
		getE('instrucciones-prev-btn').style.visibility = 'hidden'
	}
	if(actual_page_inst<total_pages_inst){
		getE('instrucciones-next-btn').style.visibility = 'visible'
	}
}

var animacion_swipe = null
function empezarJuego(){
	underground_mp3.play()
	boton_mp3.play()
	getE('cargador').className = 'cargador-on'
	unsetModal(function(){
		game_scene.style.visibility = 'visible'
		getE('home-scene').style.display = 'none'

		getE('cargador').className = 'cargador-off'

		if(isresponsive){
			/*getE('cursor-swipe').classList.add('cursor-swipe-animation-1')
			getE('fondo-casilleros').classList.add('cursor-swipe-animation-2')
			getE('casilleros').classList.add('cursor-swipe-animation-2')
			getE('personaje').classList.add('cursor-swipe-animation-3')
			
			animacion_swipe = setTimeout(function(){
				getE('cursor-swipe').classList.remove('cursor-swipe-animation-1')
				getE('fondo-casilleros').classList.remove('cursor-swipe-animation-2')
				getE('casilleros').classList.remove('cursor-swipe-animation-2')
				getE('personaje').classList.remove('cursor-swipe-animation-3')
				getE('cursor-swipe').style.display = 'none'

				clearTimeout(animacion_swipe)
				animacion_swipe = null

				iniciarReloj()
			},6000)*/

		}else{
			
		}

		if(ismobile){
			getE('keys-pad-cont').className = "keys-pad-on keys-pad-show"
		}
		
		setMission(false)
	})
}

function setGame(){
	//cargar imagen del escenario
	loadImage({url:'assets/images/fondo_peaton_1.png',callBack:function(data){
		fondo_data = {width:data.width,height:data.height,src:data.src,src2:''}
		if(ismobile){
			fondo_data.height = (fondo_data.height+120)
		}
		loadImage({url:'assets/images/fondo_peaton_2.png',callBack:function(data){
			fondo_data.src2 = data.src
			setFloor(1,true)
			
			////////AQUI EMPIEZA TODOO///////
			
			animation_start = setTimeout(function(){
				clearTimeout(animation_start)
				animation_start = null

				getE('cargador').className = 'cargador-off'	
				setInstrucciones(true)
				//empezarJuego()
			},1000)
		}})
	}})
}

var actual_floor = 0
var container = getE('container')
var piso_container = getE('piso-container')
var piso_container_2 = getE('piso-container-2')
var piso_container_rect = piso_container.getBoundingClientRect()
var piso_container_rect_2 = piso_container_2.getBoundingClientRect()
var piso = getE('piso')
var piso_2 = getE('piso-2')
var paredes = getE('paredes')

var fondo_data = null
var piso_data = {
	left:0,
	top:0,
	width:0,
	height:0,
	paredes:[],
	elementos:[]
}


function setFloor(floor,start){
	actual_floor = floor
	var walls = []
	if(floor==1){
		piso_data.width = fondo_data.width
		piso_data.height = fondo_data.height

		piso_container.style.width = fondo_data.width+'px'
		piso_container.style.height = fondo_data.height+'px'
		piso.style.backgroundImage = 'url('+fondo_data.src+')'
		
		walls = paredes_peaton

		piso_container_2.style.width = fondo_data.width+'px'
		piso_container_2.style.height = fondo_data.height+'px'
		piso_2.style.backgroundImage = 'url('+fondo_data.src2+')'
		
	
	}else if(floor==2){
		//nunca llegará aqui
	}

	//poner paredes
	piso_data.paredes = []
	for(i = 0;i<walls.length;i++){
		var pared = document.createElement('div')
		pared.className = 'icono-pared'
		pared.style.width = walls[i].w+'px'
		pared.style.height = walls[i].h+'px'
		pared.style.left = walls[i].x+'px'
		pared.style.top = walls[i].y+'px'
		paredes.appendChild(pared)
		piso_data.paredes.push(pared)
	}
}

function clearFloor(walls){
	piso.innerHTML = ''
	piso_2.innerHTML = ''
	if(walls){
		paredes.innerHTML = ''
		piso_data = {
			left:0,
			top:0,
			width:0,
			height:0,
			paredes:[],
			elementos:[]
		}
	}else{
		piso_data.left = 0,
		piso_data.top = 0,
		piso_data.width = 0,
		piso_data.height = 0,
		piso_data.elementos = []
	}
	
	piso_data.left = 0
	piso_data.top = 0
	piso.style.left = '0px'
	piso.style.top = '0px'
	paredes.style.left = '0px'
	paredes.style.top = '0px'
	avatar_data.left = 0
	avatar_data.top = 0
	avatar.style.left = '0px'
	avatar.style.top = '0px'
}

///////////////MISIONES///////////////
var m = 1
var animacion_mision = null
function setMission(repeat){
	var html = ''
	if(m==1){
		//cuadrar posiciones del escenario y del personaje
		avatar_data.left = 447
		avatar_data.top = 289
		avatar_data.direccion = 'left'
		piso_data.left = -595
		piso_data.top = -215
		movex = 1
		movey = 1

		//put avatar
		avatar.style.top = avatar_data.top+'px'
		avatar.style.left = avatar_data.left+'px'
		avatar.className = 'avatar-'+avatar_data.direccion
		//set piso coords
		piso.style.top = piso_data.top+'px'
		piso.style.left = piso_data.left+'px'
		paredes.style.top = piso_data.top+'px'
		paredes.style.left = piso_data.left+'px'
		piso_2.style.top = piso_data.top+'px'
		piso_2.style.left = piso_data.left+'px'

		//poner elementos

		if(!repeat){
			//carros
			for(i = 0;i<mision1.carros.length;i++){
				var car = document.createElement('div')
				car.className = 'carro-mision-1'
				car.setAttribute('id',('carro'+mision1.carros[i].id+'-m1'))
				car.setAttribute('type','carro-m1')
				car.style.left = mision1.carros[i].animation_data[0].x+'px'
				car.style.top = mision1.carros[i].animation_data[0].y+'px'
				piso.appendChild(car)
				piso_data.elementos.push(car)
				mision1.carros[i].name = 'carro'+mision1.carros[i].id+'-m1'
			}

			//semaforo
			var semaforo = document.createElement('div')
			semaforo.className = 'semaforo-stop'
			semaforo.setAttribute('id','semaforo-mision-1')
			semaforo.setAttribute('type','semaforo')
			semaforo.innerHTML = '<div id="semaforo-green"></div><div id="semaforo-yellow"></div><div id="semaforo-red"></div>'
			piso.appendChild(semaforo)
			//piso_data.elementos.push(semaforo)

			//ppunto final
			var punto = document.createElement('div')
			punto.className = 'icono-punto'
			punto.setAttribute('id','punto-mision-1')
			punto.setAttribute('type','punto')
			piso.appendChild(punto)
			piso_data.elementos.push(punto)

			var luz = document.createElement('div')
			luz.className = 'icono-luz'
			luz.setAttribute('id','luz-mision-1')
			luz.setAttribute('type','luz')
			piso.appendChild(luz)
			//piso_data.elementos.push(luz)

			//flecha
			var flecha = document.createElement('div')
			flecha.className = 'flecha'
			flecha.setAttribute('id','flecha-mision-1')
			flecha.setAttribute('type','flecha')
			piso.appendChild(flecha)
			//piso_data.elementos.push(flecha)
		}else{
			//reubicar
			for(i = 0;i<mision1.carros.length;i++){
				var car = getE(mision1.carros[i].name)
				car.style.left = mision1.carros[i].animation_data[0].x+'px'
				car.style.top = mision1.carros[i].animation_data[0].y+'px'
				car.className = 'carro-mision-1'//resetear clases
				mision1.carros[i].frame = 0
			}
		}
		
		html = mision1.test
		
		animacion_mision = setTimeout(function(){
			clearTimeout(animacion_mision)
			animacion_mision = null

			setModal({
				close:false,
				title:mision1.title,
				content:html,
				button:true,
				value:'comenzar',
				action:'startMission'
			})
		},50)
	}

	else if(m==2){
		//animar hasta que se vea la flecha
		if(!repeat){
			/*avatar_data.left = 0
			avatar_data.top = 0*/
			avatar_data.direccion = 'left'
			/*piso_data.left = 0
			piso_data.top = 0
			movex = 1
			movey = 1*/
			
			//put avatar
			/*avatar.style.top = avatar_data.top+'px'
			avatar.style.left = avatar_data.left+'px'*/
			avatar.className = 'avatar-'+avatar_data.direccion
			/*piso.style.top = piso_data.top+'px'
			piso.style.left = piso_data.left+'px'
			paredes.style.top = piso_data.top+'px'
			paredes.style.left = piso_data.left+'px'
			piso_2.style.top = piso_data.top+'px'
			piso_2.style.left = piso_data.left+'px'*/
		}else{
			avatar_data.left = 384
			avatar_data.top = 254
			avatar_data.direccion = 'left'
			piso_data.left = -340
			piso_data.top = -185
			movex = 2
			movey = 2
			
			//put avatar
			avatar.style.top = avatar_data.top+'px'
			avatar.style.left = avatar_data.left+'px'
			avatar.className = 'avatar-'+avatar_data.direccion
			piso.style.top = piso_data.top+'px'
			piso.style.left = piso_data.left+'px'
			paredes.style.top = piso_data.top+'px'
			paredes.style.left = piso_data.left+'px'
			piso_2.style.top = piso_data.top+'px'
			piso_2.style.left = piso_data.left+'px'
		}

		//mover escenario
		top_speed = 10
		direccion_left = true
		direccion_right = false
		direccion_up = false
		direccion_down = false

		var steps = 0
		animacion_mision = setInterval(function(){
			if(steps<50){
				moveAvatar(true)
				steps++
			}else{
				clearInterval(animacion_mision)
				animacion_mision = null
				
				direccion_left = false
				direccion_right = false
				direccion_up = false
				direccion_down = false
				avatar_speed = 0
				top_speed = 2
				setMission2()
			}
		},20)
		
		function setMission2(){
			mision2.zebra = false
			//poner elementos
			if(!repeat){
				//carros
				for(i = 0;i<mision2.carros.length;i++){
					var car = document.createElement('div')
					car.className = 'carro-mision-2'
					car.setAttribute('id',('carro'+mision2.carros[i].id+'-m2'))
					car.setAttribute('type','carro-m2')
					car.style.left = mision2.carros[i].animation_data[0].x+'px'
					car.style.top = mision2.carros[i].animation_data[0].y+'px'
					car.style.transform = 'rotate('+mision2.carros[i].animation_data[0].r+'deg)'
					piso.appendChild(car)
					piso_data.elementos.push(car)
					mision2.carros[i].name = 'carro'+mision2.carros[i].id+'-m2'
				}

				//ppunto final
				var punto = document.createElement('div')
				punto.className = 'icono-punto'
				punto.setAttribute('id','punto-mision-2')
				punto.setAttribute('type','punto')
				piso.appendChild(punto)
				piso_data.elementos.push(punto)

				var luz = document.createElement('div')
				luz.className = 'icono-luz'
				luz.setAttribute('id','luz-mision-2')
				luz.setAttribute('type','luz')
				piso.appendChild(luz)
				//piso_data.elementos.push(luz)

				//flecha
				var flecha = document.createElement('div')
				flecha.className = 'flecha'
				flecha.setAttribute('id','flecha-mision-2')
				flecha.setAttribute('type','flecha')
				piso.appendChild(flecha)
				//piso_data.elementos.push(flecha)

				//zebra
				var zebra = document.createElement('div')
				zebra.className = 'zebra'
				zebra.setAttribute('id','zebra-mision-2')
				zebra.setAttribute('type','zebra')
				piso.appendChild(zebra)
				piso_data.elementos.push(zebra)
			}else{
				//reubicar
				for(i = 0;i<mision2.carros.length;i++){
					var car = getE(mision2.carros[i].name)
					car.style.left = mision2.carros[i].animation_data[0].x+'px'
					car.style.top = mision2.carros[i].animation_data[0].y+'px'
					car.style.transform = 'rotate('+mision2.carros[i].animation_data[0].r+'deg)'
					car.className = 'carro-mision-2'//resetear clases
					mision2.carros[i].frame = 0
				}
			}

			html = mision2.test
		
			animacion_mision = setTimeout(function(){
				clearTimeout(animacion_mision)
				animacion_mision = null

				setModal({
					close:false,
					title:mision2.title,
					content:html,
					button:true,
					value:'comenzar',
					action:'startMission'
				})
			},50)
		}
	}
}
function startMission(){
	if(m==1){
		unsetModal(function(){
			//emmpeezar animaciones
			for(i = 0;i<mision1.carros.length;i++){
				mision1.carros[i].startAnimation(i)
			}
			mision1.startAnimationSemaforo()

			setMensaje({
				content:'<p>Debo ir hasta donde indica la flecha cruzando correctamente la calle.</p>',
				delay:3000
			})
			addEvents()
		})
	}else if(m==2){
		unsetModal(function(){
			//emmpeezar animaciones
			for(i = 0;i<mision2.carros.length;i++){
				mision2.carros[i].startAnimation(i)
			}
			
			setMensaje({
				content:'<p>Debo cruzar por la zebra para no sufrir un accidente.</p>',
				delay:3000
			})
			addEvents()
		})
	}
}
function repetirMission(){
	if(m==1){
		setCargador2({callBack:function(){
			setMission(true)
			unsetCargador2()
		}})
	}else if(m==2){
		setCargador2({callBack:function(){
			//poner todo a cuando terminó la primera
			setMission(true)
			unsetCargador2()
		}})
	}
}
function continueMission(){
	if(m==1){
		//no comprobar nada, mostrar modal
		mision1.aprobarMision()
	}
}
function nextMission(){
	unsetModal(function(){
		if(m==1){
			mision1.cleanMision()
		}
		m++
		setMission(false)
	})
	
}
function cleanMission(walls){
	piso.innerHTML = ''
	piso_2.innerHTML = ''
	
	piso_data.elementos = []
}


///////////EVENTOS DEL TECLADO///////////
var avatar = getE('avatar')
var avatar_data = {
	left:0,
	top:0,
	width:30,
	height:28,
	area:8,
	direccion:'left',
	subarea:8,
	llaves:[],
	premios:[]
}
var avatar_speed = 0
var avatar_aceleration = 0.2
var top_speed = 2
var animacion_avatar = null
var animacion_avatar_2 = null//animacion para animar el avatar detras de escena
var animacion_colisiones = null

var direccion_x = null
var direccion_y = null
var direccion_right = false
var direccion_left = false
var direccion_up = false
var direccion_down = false

function addEvents(){
	if(ismobile){
		getE('keys-pad-cont').className = 'keys-pad-on keys-pad-show'
		getE('key-pad-left').addEventListener('touchstart',downKeyPad,false)
		getE('key-pad-right').addEventListener('touchstart',downKeyPad,false)
		getE('key-pad-up').addEventListener('touchstart',downKeyPad,false)
		getE('key-pad-down').addEventListener('touchstart',downKeyPad,false)

		getE('key-pad-left').addEventListener('touchend',upKeyPad,false)
		getE('key-pad-right').addEventListener('touchend',upKeyPad,false)
		getE('key-pad-up').addEventListener('touchend',upKeyPad,false)
		getE('key-pad-down').addEventListener('touchend',upKeyPad,false)
		key_pad_pressed = null
		key_pad_pressed_code = 0
	}else{
		window.addEventListener('keydown',downTecla, false)
		window.addEventListener('keyup',upTecla, false)
		//document.addEventListener("visibilitychange", onchange);
		//window.addEventListener('mouseout',focusOut, false)
		animacion_colisiones = setInterval(preDetectCollision,20)
	}
	avatar_moving = true
	animacion_avatar = setInterval(moveAvatar,20)
}
function removeEvents(){
	if(ismobile){
		getE('keys-pad-cont').className = 'keys-pad-on keys-pad-hide'
		getE('key-pad-left').removeEventListener('touchstart',downKeyPad,false)
		getE('key-pad-right').removeEventListener('touchstart',downKeyPad,false)
		getE('key-pad-up').removeEventListener('touchstart',downKeyPad,false)
		getE('key-pad-down').removeEventListener('touchstart',downKeyPad,false)

		getE('key-pad-left').removeEventListener('touchend',upKeyPad,false)
		getE('key-pad-right').removeEventListener('touchend',upKeyPad,false)
		getE('key-pad-up').removeEventListener('touchend',upKeyPad,false)
		getE('key-pad-down').removeEventListener('touchend',upKeyPad,false)

		getE('key-pad-left').className = ''
		getE('key-pad-right').className = ''
		getE('key-pad-up').className = ''
		getE('key-pad-down').className = ''

		key_pad_pressed = null
		key_pad_pressed_code = 0
	}else{
		window.removeEventListener('keydown',downTecla, false)
		window.removeEventListener('keyup',upTecla, false)
		clearInterval(animacion_colisiones)
		animacion_colisiones = null
	}

	direccion_right = false
	direccion_left = false
	direccion_up = false
	direccion_down = false

	avatar_speed = 0
	clearInterval(animacion_avatar)
	avatar_moving = false
	avatar_caminando = false
	spdStopAnimation(0)
}

function focusOut(){
	getE('focus-msg').className = 'focus-on'
}
function focusOn(){
	getE('focus-msg').className = 'focus-off'
}

var key_pressed = null

function downTecla(e){
	//console.log(e.keyCode)
	//console.log("llamando")
	var put_events = false
	var new_key = null
	
	if(e.keyCode==37){
		//izquierda
		direccion_left = true
		direccion_right = false
		direccion_up = false
		direccion_down = false
		new_key = 'left'

		put_events = true
		avatar.className = 'avatar-left'
	}else if(e.keyCode==39){
		//derecha
		direccion_left = false
		direccion_right = true
		direccion_up = false
		direccion_down = false
		new_key = 'right'

		put_events = true
		avatar.className = 'avatar-right'
	}else if(e.keyCode==38){
		//arriba
		direccion_left = false
		direccion_right = false
		direccion_up = true
		direccion_down = false
		new_key = 'up'
		
		put_events = true
		avatar.className = 'avatar-up'
	}else if(e.keyCode==40){
		//abajo
		direccion_left = false
		direccion_right = false
		direccion_up = false
		direccion_down = true
		new_key = 'down'

		put_events = true
		avatar.className = 'avatar-down'
	}

	//si ya hay una tecla presionada, resetear velocidad
	if(new_key!=key_pressed){
		//nueva tecla
		//console.log("nueva tecla")
		avatar_speed = 0
	}
	key_pressed = new_key

	if(put_events){
		if(!avatar_caminando){
			avatar_caminando = true
			//console.log("pone")
			spdPlayAnimation({frame:1,stop:0,loop:true},0)
			//window.removeEventListener('keydown',downTecla, false)
		}
	}
}

function upTecla(e){
	if(e.keyCode==37){
		//izquierda
		direccion_left = false
		
	}if(e.keyCode==39){
		//derecha
		direccion_right = false
		
	}
	if(e.keyCode==38){
		//arriba
		direccion_up = false

	}
	if(e.keyCode==40){
		//abajo
		direccion_down = false
		
	}
	if(!direccion_left&&!direccion_right&&!direccion_up&&!direccion_down){
		//window.addEventListener('keydown',downTecla, false)
		avatar_speed = 0
		avatar_caminando = false
		spdStopAnimation(0)
	}
}

var movex = 1
var movey = 1
var avatar_moving = false
var avatar_caminando = false

function moveAvatar(back){
	if(
		direccion_left==true||
		direccion_right==true||
		direccion_up==true||
		direccion_down==true
	){
		if(back==undefined||back==null){
			back = false
		}
		//console.log("back: "+back)
		
		var new_left = 0
		var check_collision = null

		if(direccion_left&&!direccion_right){
			if(movex==1){
				new_left = avatar_data.left-avatar_speed
				if(new_left<0){
					new_left = 0
				}
				if(
					new_left<(game_width/2)&&
					piso_data.left==(0-(piso_data.width-game_width))
				){
					movex = 2
				}
			}
			if(movex==2){
				new_left = piso_data.left+avatar_speed
				if(new_left>0){
					piso.style.left = '0px'
					paredes.style.left = '0px'
					piso_2.style.left = '0px'
					piso_data.left = 0
					movex = 1
					new_left = (game_width/2)
				}
			}

			if(movex==1){
				if(back){
					avatar.style.left = new_left+'px'
					avatar_data.left = new_left
				}else{
					check_collision = checkCollision(new_left,null,true,back)
					if(!check_collision.collision){
						avatar.style.left = new_left+'px'
						avatar_data.left = new_left
					}
				}
			}else if(movex==2){
				if(back){
					piso.style.left = new_left+'px'
					paredes.style.left = new_left+'px'
					piso_2.style.left = new_left+'px'
					piso_data.left = new_left
				}else{
					check_collision = checkCollision(new_left,null,false,back)
					if(!check_collision.collision){
						piso.style.left = new_left+'px'
						paredes.style.left = new_left+'px'
						piso_2.style.left = new_left+'px'
						piso_data.left = new_left
					}
				}
			}	
		}
		else if(!direccion_left&&direccion_right){
			if(movex==1){
				new_left = avatar_data.left+avatar_speed
				if(
					new_left>(game_width/2)&&
					piso_data.left==0
				){
					avatar.style.left = (game_width/2)+'px'
					avatar_data.left = (game_width/2)
					movex = 2
				}
				if(new_left>(game_width-avatar_data.width)){
					new_left = (game_width-avatar_data.width)
				}
			}
			if(movex==2){
				new_left = piso_data.left-avatar_speed
				if(new_left<(0-(piso_data.width-game_width))){
					piso.style.left = (0-(piso_data.width-game_width))+'px'
					paredes.style.left = (0-(piso_data.width-game_width))+'px'
					piso_2.style.left = (0-(piso_data.width-game_width))+'px'
					piso_data.left = (0-(piso_data.width-game_width))
					movex = 1
					new_left = (game_width/2)
				}
			}

			if(movex==1){
				if(back){
					avatar.style.left = new_left+'px'
					avatar_data.left = new_left	
				}else{
					check_collision = checkCollision(new_left,null,true,back)
					if(!check_collision.collision){
						avatar.style.left = new_left+'px'
						avatar_data.left = new_left	
					}
				}	
			}else if(movex==2){
				if(back){
					piso.style.left = new_left+'px'
					paredes.style.left = new_left+'px'
					piso_2.style.left = new_left+'px'
					piso_data.left = new_left
				}else{
					check_collision = checkCollision(new_left,null,false,back)
					if(!check_collision.collision){
						piso.style.left = new_left+'px'
						paredes.style.left = new_left+'px'
						piso_2.style.left = new_left+'px'
						piso_data.left = new_left
					}
				}
			}	
		}

		var new_top = 0
		
		if(direccion_up&&!direccion_down){
			if(movey==1){
				new_top = avatar_data.top-avatar_speed
				if(new_top<0){
					new_top = 0
				}
				if(
					new_top<(game_height/2)&&
					piso_data.top==(0-(piso_data.height-game_height))
				){
					movey = 2
				}
			}

			if(movey==2){
				new_top = piso_data.top+avatar_speed
				if(new_top>0){
					piso.style.top = '0px'
					paredes.style.top = '0px'
					piso_2.style.top = '0px'
					piso_data.top = 0
					movey = 1
					new_top = (game_height/2)
				}
			}
			
			if(movey==1){
				if(back){
					avatar.style.top = new_top+'px'
					avatar_data.top = new_top
				}else{
					check_collision = checkCollision(null,new_top,true,back)
					if(!check_collision.collision){
						avatar.style.top = new_top+'px'
						avatar_data.top = new_top
					}
				}
					
			}else if(movey==2){
				check_collision = checkCollision(null,new_top,false,back)
				if(!check_collision.collision){
					piso.style.top = new_top+'px'
					paredes.style.top = new_top+'px'
					piso_2.style.top = new_top+'px'
					piso_data.top = new_top
				}
			}
		}
		else if(!direccion_up&&direccion_down){
			if(movey==1){
				new_top = avatar_data.top+avatar_speed
				if(
					new_top>(game_height/2)&&
					piso_data.top==0
				){
					avatar.style.top = (game_height/2)+'px'
					avatar_data.top = (game_height/2)
					movey = 2
				}
				if(new_top>(game_height-avatar_data.height)){
					new_top = (game_height-avatar_data.height)
				}
			}
			if(movey==2){
				new_top = piso_data.top-avatar_speed
				if(new_top<(0-(piso_data.height-game_height))){
					piso.style.top = (0-(piso_data.height-game_height))+'px'
					paredes.style.top = (0-(piso_data.height-game_height))+'px'
					piso_2.style.top = (0-(piso_data.height-game_height))+'px'
					piso_data.top = (0-(piso_data.height-game_height))
					movey = 1
					new_top = (game_height/2)
				}
			}

			if(movey==1){
				if(back){
					avatar.style.top = new_top+'px'
					avatar_data.top = new_top
				}else{
					check_collision = checkCollision(null,new_top,true,back)
					if(!check_collision.collision){
						avatar.style.top = new_top+'px'
						avatar_data.top = new_top
					}
				}
					
			}else if(movey==2){
				if(back){
					piso.style.top = new_top+'px'
					paredes.style.top = new_top+'px'
					piso_2.style.top = new_top+'px'
					piso_data.top = new_top
				}else{
					check_collision = checkCollision(null,new_top,false,back)
					if(!check_collision.collision){
						piso.style.top = new_top+'px'
						paredes.style.top = new_top+'px'
						piso_2.style.top = new_top+'px'
						piso_data.top = new_top
					}
				}
			}
		}
		
		avatar_speed+=avatar_aceleration
		if(avatar_speed>top_speed){
			avatar_speed = top_speed
		}
	}
}

function moveAvatar2(){
	
	
}

var partial_x = undefined
var partial_y = undefined
var partial_a = undefined
var partial_b = undefined

function preDetectCollision(){
	var colli = false
	var colli_obj = null
	var detect_collision1 = detectCollision(false,false)
	if(!detect_collision1.stop){
		var detect_collision2 = detectCollision(true,false)
		if(!detect_collision2.stop){

		}else{
			colli_obj = detect_collision2
			colli = true
		}
	}else{
		colli_obj = detect_collision1
		colli = true
	}
	
	if(colli){
		removeEvents()
		if(m==1){
			if(colli_obj.type=='carro-m1'){
				//atropeyar
				colli_obj.params[0].classList.add('carro-m1-chocado')
				mision1.fallarMision()
			}else if(colli_obj.type=='punto'){
				//seguir con la misión
				continueMission()
			}
		}else if(m==2){
			if(colli_obj.type=='carro-m2'){
				//atropeyar
				colli_obj.params[0].classList.add('carro-m2-chocado')
				mision2.fallarMision()
			}else if(colli_obj.type=='punto'){
				//seguir con la misión
				continueMission()
			}
			
			if(colli_obj.type=='zebra'){
				mision2.zebra = true
			}else{
				mision2.zebra = false
			}
		}
	}
}

function detectCollision(a,b){
	var x = null
	var y = null
	
	var collision = false
	//comprobar colision

	var a_rect = null
	var dif_piso_x = 0
	var dif_piso_y = 0
	var rect_parent = paredes.getBoundingClientRect()
	//esto esta bien

	if(a){
		if(x==null){
			x = avatar_data.left
		}
		if(y==null){
			y = avatar_data.top
		}
		dif_piso_x = 0-piso_data.left
		dif_piso_y = 0-piso_data.top
		a_rect = {
			x:(x+(avatar_data.width/2))+dif_piso_x,
			y:(y+(avatar_data.height/2))+dif_piso_y
		}
	}else{
		if(x==null){
			x = piso_data.left
		}
		if(y==null){
			y = piso_data.top
		}
		dif_piso_x = 0-x
		dif_piso_y = 0-y
		a_rect = {
			x:(avatar_data.left+(avatar_data.width/2))+dif_piso_x,
			y:(avatar_data.top+(avatar_data.height/2))+dif_piso_y
		}
	}
	
	var type = ''
	var element = null
	var rect_element = null
	var stop = null
	
	var params = []

	if(!b){//si esta detras de camaras, no detectar colisiones con objetos
		
		for(var c = 0;c<piso_data.elementos.length;c++){
			var rect = piso_data.elementos[c].getBoundingClientRect()
			var pre_type = piso_data.elementos[c].getAttribute('type')
			
			var rect_elemento = rect_elemento = {
				w:piso_data.elementos[c].offsetWidth,
				h:piso_data.elementos[c].offsetHeight,
				x:(rect.left-rect_parent.left),
				y:(rect.top-rect_parent.top)
			}
			
			if(
				(a_rect.x+avatar_data.subarea)>=rect_elemento.x&&
				(a_rect.x-avatar_data.subarea)<=(rect_elemento.x+rect_elemento.w)&&
				(a_rect.y+avatar_data.subarea)>=rect_elemento.y&&
				(a_rect.y-avatar_data.subarea)<=(rect_elemento.y+rect_elemento.h)
			){
				//colision
				type = piso_data.elementos[c].getAttribute('type')
				element = piso_data.elementos[c]
				collision = true
				rect_element = rect_elemento
			}
		}

		if(type=='carro-m1'){
			stop = true
			params[0] = element
		}else if(type=='punto'){
			stop = true
		}
	}

	return {collision:collision,stop:stop,params:params,type:type}
}

function checkCollision(x,y,a,b){
	var collision = false
	//comprobar colision

	var a_rect = null
	var dif_piso_x = 0
	var dif_piso_y = 0
	var rect_parent = paredes.getBoundingClientRect()
	//esto esta bien

	if(a){
		if(x==null){
			x = avatar_data.left
		}
		if(y==null){
			y = avatar_data.top
		}
		dif_piso_x = 0-piso_data.left
		dif_piso_y = 0-piso_data.top
		a_rect = {
			x:(x+(avatar_data.width/2))+dif_piso_x,
			y:(y+(avatar_data.height/2))+dif_piso_y
		}
	}else{
		if(x==null){
			x = piso_data.left
		}
		if(y==null){
			y = piso_data.top
		}
		dif_piso_x = 0-x
		dif_piso_y = 0-y
		a_rect = {
			x:(avatar_data.left+(avatar_data.width/2))+dif_piso_x,
			y:(avatar_data.top+(avatar_data.height/2))+dif_piso_y
		}
	}
	
	if(!b){//si esta detras de camaras, no detectar colisiones con paredes
		for(var c = 0;c<piso_data.paredes.length;c++){
			var rect = piso_data.paredes[c].getBoundingClientRect()
			var rect_pared = {
				w:rect.width,
				h:rect.height,
				x:(rect.left-rect_parent.left),
				y:(rect.top-rect_parent.top)
			}

			if(
				(a_rect.x+avatar_data.area)>=rect_pared.x&&
				(a_rect.x-avatar_data.area)<=(rect_pared.x+rect_pared.w)&&
				(a_rect.y+avatar_data.area)>=rect_pared.y&&
				(a_rect.y-avatar_data.area)<=(rect_pared.y+rect_pared.h)
			){
				//colision
				//type = 'pared'
				collision = true
				//console.log("colision con "+c)
			}
		}
	}
	
	var type = ''
	var stop = null
	var params = []

	return {collision:collision,stop:stop,params:params,type:type}
}

////////////////////////////////////////////////////////////////
function getE(idname){
	return document.getElementById(idname)
}