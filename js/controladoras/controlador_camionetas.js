function listarCamionetas(estado,subtipo) {
    //console.log("entro a listarCamionetas");
    if (estado=="nuevo") {
        var datos = JSON.parse(data_nuevos);
    }
    else if(estado=="usado"){
        var datos = JSON.parse(data_usados);
    }
    
    var alistar = datos["camionetas"][subtipo];
    cargarCamionetas(alistar,subtipo,estado);
    
}
function cargarCamionetas(camionetas,subtipo,estado) {
    for (var index = 0; index < camionetas.length; index++) {
        cargarvehiculo("camionetas",camionetas[index],subtipo,estado);
        
    }
   
}