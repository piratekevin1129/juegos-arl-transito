var mision3 = {
    init:{x:148,y:515},
    calles:[
        {w:125,h:719,x:183,y:0}
    ],
    title: 'Prueba 3: El puente peatonal',
    test:String('<p>En la siguiente prueba deberás ir a donde indica la flecha y cruzar por donde consideres más seguro (el puente o la calle).</p><br /><h6>Objetivos:</h6><p class="modal-content-list">Camina con cuidado y evita circular por la calle.</p><p class="modal-content-list">Consejo: No cruces por la calle si ves que el tráfico esta muy peligroso.</p>'),
    carros:[
        {
            id:1,name:'',x:-50,y:0,fragmento:0,duracion:0,active:false,frame:1
        },
        {
            id:2,name:'',x:-50,y:0,fragmento:0,duracion:0,active:false,frame:1
        },
        {
            id:3,name:'',x:-50,y:0,fragmento:0,duracion:0,active:false,frame:1
        },
        {
            id:4,name:'',x:-50,y:0,fragmento:0,duracion:0,active:false,frame:1
        },
        {
            id:5,name:'',x:-50,y:0,fragmento:0,duracion:0,active:false,frame:1
        },
        {
            id:6,name:'',x:-50,y:0,fragmento:0,duracion:0,active:false,frame:1
        }
    ],
    animacion_prepare_carros:null,
    animacion_carros:null,
    animacion_puente:null,
    carril:0,
    prepareCars:function(){
        mision3.animacion_prepare_carros = setInterval(function(){
            //tirar carro
            var carro_selected = getRand(0,(mision3.carros.length-1))
            var detectar_carro = mision3.carros[carro_selected].active
            var sacados = []
            while(detectar_carro){
                carro_selected = getRand(0,(mision3.carros.length-1))
                detectar_carro = mision3.carros[carro_selected].active
                if(!sacados.includes(carro_selected)){
                    sacados.push(carro_selected)
                }
                if(sacados.length==mision3.carros.length){
                    detectar_carro = false
                    carro_selected = -1
                    console.log("ya estan los 6")
                }
            }

            if(carro_selected!=-1){
                mision3.carros[carro_selected].active = true
                mision3.carros[carro_selected].duracion = getRand(2,3)
                mision3.carros[carro_selected].fragmento = fondo_data.width/((mision3.carros[carro_selected].duracion*1000)/50)
                mision3.carros[carro_selected].x = -50
                if(mision3.carril==0){
                    mision3.carril = 1
                    mision3.carros[carro_selected].y = 309
                }else{
                    mision3.carril = 0
                    mision3.carros[carro_selected].y = 348
                }
                getE(mision3.carros[carro_selected].name).style.top = mision3.carros[carro_selected].y+'px'
            }
        },500)
    },
    setAnimacionCarros:function(){
        mision3.animacion_carros = setInterval(function(){
            for(var i = 0;i<mision3.carros.length;i++){
                if(mision3.carros[i].active){
                    mision3.carros[i].x = mision3.carros[i].x+mision3.carros[i].fragmento
                    
                    mision3.carros[i].frame++
                    if(mision3.carros[i].frame>60){
                        //reset car
                        mision3.carros[i].x = -50
                        mision3.carros[i].y = 0
                        mision3.carros[i].active = false
                        mision3.carros[i].frame = 0
                        mision3.carros[i].duracion = 0
                        mision3.carros[i].fragmento = 0
                        
                    }
                    getE(mision3.carros[i].name).style.left = mision3.carros[i].x+'px'
                    getE(mision3.carros[i].name).style.top = mision3.carros[i].y+'px'
                }
            }
        },40)
    },
    cruzando:false,
    pasarPuente:function(){
        top_speed = 2
        var steps = 0


        /*avatar_data.left = 112
        avatar_data.top = 253
        piso_data.left = 0
        piso_data.top = -125
        movex = 1
        movey = 2*/
        
        updateStatus()
        
        ////preparar sentido 1////
		direccion_left = true
		direccion_right = false
		direccion_up = false
        direccion_down = false
        avatar_data.direccion = 'left'
        avatar.className = 'avatar-'+avatar_data.direccion
		spdPlayAnimation({frame:1,stop:0,loop:true},0)
        avatar_caminando = true
        getE('avatar').classList.add('avatar-frente')
        steps = 0
		
		mision3.animacion_puente = setInterval(function(){
			if(steps<38){
				moveAvatar(true)
				steps++
			}else{
                avatar_caminando = false
				spdStopAnimation(0)
				clearInterval(mision3.animacion_puente)
                mision3.animacion_puente = null
                
                direccion_left = false
                direccion_right = false
                direccion_up = true
                direccion_down = false
                avatar_data.direccion = 'up'
                avatar.className = 'avatar-'+avatar_data.direccion
                spdPlayAnimation({frame:1,stop:0,loop:true},0)
                avatar_caminando = true
                getE('avatar').classList.add('avatar-frente')
                steps = 0

                mision3.animacion_puente = setInterval(function(){
                    if(steps<51){
                        moveAvatar(true)
                        steps++
                    }else{
                        avatar_caminando = false
                        spdStopAnimation(0)
                        clearInterval(mision3.animacion_puente)
                        mision3.animacion_puente = null

                        direccion_left = false
                        direccion_right = true
                        direccion_up = false
                        direccion_down = false
                        avatar_data.direccion = 'right'
                        avatar.className = 'avatar-'+avatar_data.direccion
                        spdPlayAnimation({frame:1,stop:0,loop:true},0)
                        avatar_caminando = true
                        getE('avatar').classList.add('avatar-frente')
                        steps = 0

                        mision3.animacion_puente = setInterval(function(){
                            if(steps<40){
                                moveAvatar(true)
                                steps++
                            }else{
                                avatar_caminando = false
                                spdStopAnimation(0)
                                direccion_left = false
                                direccion_right = false
                                direccion_up = false
                                direccion_down = false
                                avatar_speed = 0
                                top_speed = 1
                
                                clearInterval(mision3.animacion_puente)
                                mision3.animacion_puente = null

                                mision3.cruzando = false
                                setMensaje({
                                    content:'<p>Buena idea cruzar el puente.</p>',
                                    delay:1000
                                })
                                addEvents()
                            }
                        },20)		
                    }
                },20)		
			}
		},20)
    },
    fallarMision:function(){
        unsetPitos()
        var frase = '<p>Cuando el tráfico está muy peligroso debes usar el puente peatonal</p>'
        //console.log("atropeyar")
        avatar.classList.add('avatar-dead-3')
        atropeyar_mp3.play()

        clearInterval(mision3.animacion_carros)
        mision3.animacion_carros = null
        clearInterval(mision3.animacion_prepare_carros)
        mision3.animacion_prepare_carros = null
        mision3.carril = 0

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
        unsetPitos()
        //parar animaciones
        clearInterval(mision3.animacion_carros)
        mision3.animacion_carros = null
        clearInterval(mision3.animacion_prepare_carros)
        mision3.animacion_prepare_carros = null
        mision3.carril = 0

        var frase = '<p>Hay que usar los puentes peatonales cuando el tráfico es muy peligroso.</p>'
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
    },
    
}