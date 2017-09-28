 function cargarvehiculo(tipo,vehiculo,subtipo,estado) {
    var right = document.getElementById("right");
    var left = document.getElementById("left");
    var elem = crearThumbnail(estado,vehiculo,tipo,subtipo);
   
    //console.log(div.childElementCount);
    if(right.childElementCount==left.childElementCount){
        left.appendChild(elem);
    }
    else{
        right.appendChild(elem);
    }
    
    
}
function cargarDestacados() {
    var vehiculos = JSON.parse(data_destacados);
    console.log(vehiculos);
    for (var index = 0; index < vehiculos.length; index++) {
        vehiculo = vehiculos[index];
        acargar = getVehiculo(vehiculo.estado,vehiculo.tipo,vehiculo.subtipo,vehiculo.id);
        var left = document.getElementById("left");
        var mid = document.getElementById("mid");
        var lerightft = document.getElementById("right");
        var elem = crearThumbnail(vehiculo.estado,acargar,vehiculo.tipo,vehiculo.subtipo);
        
        if(right.childElementCount==left.childElementCount&&right.childElementCount==mid.childElementCount){
            left.appendChild(elem);
        }
        else if(left.childElementCount>mid.childElementCount&&right.childElementCount==mid.childElementCount){
            mid.appendChild(elem);
    }
        else if(left.childElementCount==mid.childElementCount&&mid.childElementCount>right.childElementCount){
            right.appendChild(elem);
        }
    
}
}
function crearThumbnail(estado,vehiculo,tipo,subtipo){
    var thumbnail = document.createElement("div");
        thumbnail.innerHTML =`
        <div class="row">
        <div >
            <div class="thumbnail">
            <img alt="100%x200" style="height: 100px; width: 150px;" src="`+vehiculo.foto +`" >
            <div class="caption">
                <h3>`+vehiculo.marca+`</h3>
                <h4>`+vehiculo.modelo+`</h4>
                <h4 class="text-success">`+vehiculo.precio+`</h4>
                <p><a href="ficha.html#`+estado+`/`+tipo+`/`+subtipo+`/`+vehiculo.id+`" class="btn btn-primary btn-block" role="button">Ver info</a></p>
            </div>
            </div>
        </div>
        </div>
        `;
        return thumbnail;
}
 function mostrarsubtipo() {
                var select = document.getElementById("tipo");
                var tipo = select.options[select.selectedIndex].value;
                var subtipo = document.getElementById("sub");
                subtipo.innerHTML = '';
                //console.log(tipo);
                if (tipo=="autos") {
                    var selectsubtipo = document.createElement("select");
                    selectsubtipo.innerHTML = '<option value="segmentoa">Segmento A</option><option value="segmentob">Segmento B</option>';
                    selectsubtipo.className="form-control";
                    selectsubtipo.id="subtipo";
                    subtipo.appendChild(selectsubtipo);
                }
                else if (tipo=="camionetas") {
                    var selectsubtipo = document.createElement("select");
                    selectsubtipo.innerHTML = '<option value="suv">SUV</option><option value="pickup">Pick Up</option><option value="utilitarios">Utilitarios</option>';
                    selectsubtipo.className="form-control";
                    selectsubtipo.id="subtipo";
                    subtipo.appendChild(selectsubtipo);
                }
                else{
                    subtipo.innerHTML = '';
                }
                
            }
function listar() {
                var select = document.getElementById("tipo");
                var tipo = select.options[select.selectedIndex].value;
                var select2= "";
                if(document.getElementById("subtipo")){
                    //console.log("entro");
                    select2 = document.getElementById("subtipo");
                    var subtipo = select2.options[select2.selectedIndex].value;
                    buscar("nuevo",tipo,subtipo);
                }
                else{
                    //console.log("no entro");
                    buscar("nuevo",tipo,select2);
                }
                

                
            }
function listarUsados() {
    var select = document.getElementById("tipo");
    var tipo = select.options[select.selectedIndex].value;
    var select2= "";
    if(document.getElementById("subtipo")){
        //console.log("entro");
        select2 = document.getElementById("subtipo");
        var subtipo = select2.options[select2.selectedIndex].value;
        buscar("usado",tipo,subtipo);
        }
        else{
            //console.log("no entro");
            buscar("usado",tipo,select2);
            }
                

                
            }
function buscar(estado,tipo,subtipo) {
		var diractual = window.location;
		diractual = diractual.href.split("/");
		diractual[diractual.length-1]="vehiculos.html#"+estado;
		diractual.push(tipo);
		diractual.push(subtipo);
		diractual=diractual.join("/");
        window.location = diractual;
    
}
function iniciarlista() {
    //console.log("entro a iniciarlista");
    var info = location.hash.replace("#", "");
    var datos = info.split("/");
    var estado = datos[0];
    var tipo = datos[1];
    var subtipo = datos[2];
    /*
    console.log(estado);
    console.log(tipo);
    console.log(subtipo);
    */
    if(tipo == "autos"){
        listarAutos(estado,subtipo);
    }
    else if(tipo == "motos"){
        listarMotos(estado);

    }
    else if(tipo == "camiones"){
        listarCamiones(estado);

    }
    else if(tipo ==  "camionetas"){
        listarCamionetas(estado,subtipo);
    }
}
function cargarficha() {
    //console.log("entro a cargarficha");
    var info = location.hash.replace("#", "");
    var datos = info.split("/");
    var estado = datos[0];
    var tipo = datos[1];
    var subtipo = datos[2];
    var id = datos[3];
    var vehiculo = getVehiculo(estado,tipo,subtipo,id);
    //carga titulo
    var titulo = document.getElementById("titulo");
    titulo.innerHTML='<h2>'+vehiculo.marca+' '+vehiculo.modelo+'</h2>';
    //carga foto
    var foto = document.getElementById("foto");
    foto.innerHTML = crearSlider(vehiculo);
    //foto.innerHTML = '<img src="'+vehiculo.foto+'" style="width: 70%; height: 70%" alt="imgficha" class="img-rounded">';
    //carga tabla
    var tabla = document.getElementById("tabla");
    var tablebody = document.createElement("tbody");
    var marca = document.createElement("td");
    marca.innerHTML=vehiculo.marca;
    var modelo = document.createElement("td");
    modelo.innerHTML = vehiculo.modelo;
    var anio = document.createElement("td");
    anio.innerHTML = vehiculo.anio;
    var potencia = document.createElement("td");
    potencia.innerHTML = vehiculo.cv;
    var precio = document.createElement("td");
    var b = document.createElement("b");
    precio.className = ("text-success");
    b.innerHTML = vehiculo.precio;
    precio.appendChild(b);
    tablebody.appendChild(marca);
    tablebody.appendChild(modelo);
    tablebody.appendChild(anio);
    tablebody.appendChild(potencia);
    tablebody.appendChild(precio);
    tabla.appendChild(tablebody);
    //carga descripcion
    var descripcion = document.getElementById("descripcion");
    var desc = document.createElement("h4")
    desc.innerHTML = vehiculo.descripcion;
    descripcion.appendChild(desc);
    //carga video
    var video = document.getElementById("video");
    video.innerHTML = '<iframe width="854" height="480" src="'+vehiculo.video+'" frameborder="0" allowfullscreen></iframe>';


}
function getVehiculo(estado,tipo,subtipo,id) {
    
    if (estado=="nuevo") {
        
        var vehiculos = JSON.parse(data_nuevos);
    }
    else if(estado=="usado"){
        var vehiculos = JSON.parse(data_usados);
    }
    vehiculos = vehiculos[tipo];
    if(tipo=="autos"){
        vehiculos = vehiculos[subtipo];
        for (var index = 0; index < vehiculos.length; index++) {
            if (vehiculos[index].id==id) {
                return vehiculos[index];
            }
            
        }
      }
      else if(tipo=="camionetas"){
        //console.log("entragetcamionetas");
        vehiculos = vehiculos[subtipo];
        for (var index = 0; index < vehiculos.length; index++) {
            if (vehiculos[index].id==id) {
                return vehiculos[index];
            }
            
        }
      }
      if(tipo=="motos"){
        for (var index = 0; index < vehiculos.length; index++) {
            if (vehiculos[index].id==id) {
                return vehiculos[index];
            }
            
        }
      }
      if(tipo=="camiones"){
        for (var index = 0; index < vehiculos.length; index++) {
            if (vehiculos[index].id==id) {
                return vehiculos[index];
            }
            
        }
      }
    
}

function crearSlider(vehiculo) {
    if (vehiculo.galeria.length<1) {
        return `<img src="`+vehiculo.foto+`" style="max-height:400px" alt="imgficha" class="img-rounded">`;
    }
    else{
        var indicators = `<div id="carousel-example-generic" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>`;
        for (var index = 1; index < vehiculo.galeria.length; index++) {
            
            indicators = indicators + `<li data-target="#carousel-example-generic" data-slide-to="`+index+`"></li>`;
            
        }
        indicators = indicators + ` </ol>`;
        var slides = `<div class="carousel-inner" role="listbox">
        <div class="item active">
        <img src="`+vehiculo.galeria[0] +`" alt="imagen" style="max-height:400px">
        </div>`;
        for (var index = 1; index < vehiculo.galeria.length; index++) {
            slides = slides+`<div class="item">
        <img src="`+vehiculo.galeria[index]+`" alt="imagen" style="max-height:400px">
        
        </div>`;
            
        }
        slides = slides + `</div>`;

        var controls = ` <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>`;
        
    
        return indicators+slides+controls+`</div>`;
    }
    
}
