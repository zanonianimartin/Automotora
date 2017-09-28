
function listarAutos(estado,subtipo) {
    if (estado=="nuevo") {
        var datos = JSON.parse(data_nuevos);
    }
    else if(estado=="usado"){
        var datos = JSON.parse(data_usados);
    }
    
    var alistar = datos["autos"][subtipo];
    cargarAutos(alistar,subtipo,estado);
    
}
function cargarAutos(autos,subtipo,estado) {
    for (var index = 0; index < autos.length; index++) {
        cargarvehiculo("autos",autos[index],subtipo,estado);
        
    }
   
}
