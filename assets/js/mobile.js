var ismobile = false
var isresponsive = false
var actual_dimension = 1
var tra_contenedor = document.getElementById('tra_contenedor')

function prepareWindow(){
    ismobile = isMobileDevice()
    //ismobile = true

    if(window.innerWidth<560){
    	isresponsive = true
    }
    //isresponsive = true
    console.log(ismobile,isresponsive)
    

    game_width = game.offsetWidth
    game_height = game.offsetHeight
    game.style.width = game_width+'px'
    game.style.height = game_height+'px'

    if(ismobile){
        //game_height = game.offsetHeight-150
        //game_scene.style.height = game_height+'px'
        //top_speed = 2
        avatar_aceleration = 2
    }
    if(isresponsive){
        
    }

    game_rect = game.getBoundingClientRect()
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

var key_pad_pressed = null
var key_pad_pressed_code = 0
function downKeyPad(e){
    var kp = this.getAttribute('key')
    var btn = this
    
    if(key_pad_pressed==null){
        key_pad_pressed = btn
        key_pad_pressed_code = kp
        //console.log("presionando")
        downTecla({keyCode:kp})
        
        if(kp==37){
            
        }else if(kp==39){
            
        }else if(kp==38){
            
        }else if(kp==40){
            
        }
        key_pad_pressed.className = 'key-pad-pressed'
    }
}
function upKeyPad(e){
    var kp = this.getAttribute('key')
    var btn = this

    if(key_pad_pressed_code==kp){
        key_pad_pressed.className = ''
        key_pad_pressed = null
        key_pad_pressed_code = 0
        //console.log("soltando")
        upTecla({keyCode:kp})

         if(kp==37){
            
        }else if(kp==39){
            
        }else if(kp==38){
            
        }else if(kp==40){
            
        }

    }
}

/////////////////////////////AUDIO/////////////////////////
function loadAudio(data){
    var url = data.src

    var audio_fx = null
    audio_fx = document.createElement('audio')
    audio_fx.setAttribute('src',url)
    audio_fx.load()
    audio_fx.addEventListener('loadeddata',function(){
        //alert("cargo")
        data.callBack(audio_fx)
    })
    audio_fx.addEventListener('error',function(){
        data.callBack(null)
    })
}
function loadImage(data){
    var img = new Image()
    img.onload = function(){
        img.onload = null
        img.onerror = null
        img = null
        
        data.callBack({src:this.src,width:this.width,height:this.height})
    }
    img.onerror = function(){
        img.onload = null
        img.onerror = null
        img = null
        console.log("error: "+data.url)
        data.callBack(this)
    }
    img.src = data.url
}

window.addEventListener("orientationchange", function() {
  // Announce the new orientation number
  //alert(window.orientation);
  location.reload()
}, false);