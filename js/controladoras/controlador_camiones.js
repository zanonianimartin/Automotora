function listarCamiones(estado) {
    if (estado=="nuevo") {
        var datos = JSON.parse(data_nuevos);
    }
    else if(estado=="usado"){
        var datos = JSON.parse(data_usados);
    }
    
    var alistar = datos["camiones"];
    //console.log("entro listarcamiones");
    cargarCamiones(alistar,estado);
    
}
function cargarCamiones(camiones,estado) {
    for (var index = 0; index < camiones.length; index++) {
        cargarvehiculo("camiones",camiones[index],"",estado);
        
    }
   
}