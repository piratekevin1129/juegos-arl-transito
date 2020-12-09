var mision4 = {
    title: 'Prueba 4: Evita los accidentes',
    test:String('<p>En la siguiente prueba deberás ir a donde indica la flecha evitando tocar la calle.</p><br /><h6>Objetivos:</h6><p class="modal-content-list">Camina con cuidado y evita circular por la calle.</p><p class="modal-content-list">Procura no equivocarte o perderás una oportunidad.</p>'),
    carros:[
        {
			id:1,
            name:'',
            size:{w:49,h:49},
			animation_data:[],
			frame:0,
			animacion:null,
			startAnimation: function(ind){
				mision2.carros[ind].animacion = setInterval(function(){animacionCarro2(ind)},50)
			},
			stopAnimation:function(ind){
				clearInterval(mision2.carros[ind].animacion)
				mision2.carros[ind].animacion = null
			}
        },
    ]
}