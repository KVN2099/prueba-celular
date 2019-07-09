
function objeto() {
    var proyecto = {
      "nombre" : "",
      "especialidad" : "",
      "grado" : "",
      "capitan_nombre" : "",
      "integrantes" : [],
      "seccion" : "",
      "profesor" : "",
      "capitan_correo" : ""
    }
    proyecto.integrantes[0] = document.getElementById('capitan-nombre').value;
    if (document.getElementById('div2') != null) {
      proyecto.integrantes[1] = document.getElementById('div2').value;
    }
    if (document.getElementById('div3') != null) {
      proyecto.integrantes[2] = document.getElementById('div3').value;
    }
    if (document.getElementById('div4') != null) {
      proyecto.integrantes[3] = document.getElementById('div4').value;
    }
    proyecto.nombre = document.getElementById('nombre').value;
    proyecto.especialidad = document.getElementById('especialidad').value;
    proyecto.grado = document.getElementById('grado').value;
    proyecto.capitan_nombre = document.getElementById('capitan-nombre').value;
    proyecto.seccion = document.getElementById('seccion').value;
    proyecto.profesor = document.getElementById('profesor').value;
    proyecto.capitan_correo = document.getElementById('correo_capitan').value;
    console.log(proyecto);
    	var qrcode = new QRCode("qr" , {
    		text : proyecto,
    		width : 300,
    		height : 300,
    		colorDark : "black",
    		colorLight : "white",
    		correctLevel : QRCode.CorrectLevel.H
    	});
      console.log(qrcode);
    //  CONEXION FIREBASE
  	console.log(firebase);
  	var database = firebase.database();
    var ref = database.ref('proyectos');
    ref.push(proyecto);
}
