function listarMotos(estado) {
    if (estado=="nuevo") {
        var datos = JSON.parse(data_nuevos);
    }
    else if(estado=="usado"){
        var datos = JSON.parse(data_usados);
    }
    
    var alistar = datos["motos"];
    
    //console.log("entro listarmotos");
    cargarMotos(alistar,estado);
    
}
function cargarMotos(motos,estado) {
    for (var index = 0; index < motos.length; index++) {
        cargarvehiculo("motos",motos[index],"",estado);
        
    }
   
}