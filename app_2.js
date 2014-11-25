var mistack = new Stack();
var divContainer = document.getElementById('container');


var TextoDeArea = document.createElement('textarea');
    TextoDeArea.setAttribute('type','textarea');
    TextoDeArea.setAttribute('id','texto');
    divContainer.appendChild(TextoDeArea);

var botonComprovar = document.createElement('input');
	botonComprovar.setAttribute('type','button');
	botonComprovar.setAttribute('value','Comprovar');
	botonComprovar.setAttribute('id','botonComprovar');
    divContainer.appendChild(botonComprovar);

var botonClear = document.createElement('input');
	botonClear.setAttribute('type','button');
	botonClear.setAttribute('value','Limpiar');
	botonClear.setAttribute('id','botonLimpiar');
    divContainer.appendChild(botonClear);


function capturarDatos() {
    var miTexto = document.getElementById('texto').value;
    for (var i = 0; i < miTexto.length; i++) {
    	if (miTexto[i] == "("){
    		mistack.push(i);
    	}if(miTexto[i] == ")"){
    		mistack.pop()
    	}

	}
	
	var aux = "";
	for(var i = (miTexto.length-1); i >= 0; i--){
		if(i==mistack.peek()){
			aux ='<span class="vermell">'+miTexto[i]+'</span>'+aux;
			mistack.pop();
		}else{
			aux = miTexto[i]+aux;
		}
	}

	var divResultado = document.getElementById('resultado');
	divResultado.innerHTML= aux;

}

function limpiar() {
	var divResultado = document.getElementById('resultado');
	divResultado.innerHTML = "";
	mistack.clear();
	
	var TextoDeArea = document.getElementById('texto');
	TextoDeArea.value = '';
}

botonComprovar.addEventListener('click', capturarDatos);
botonClear.addEventListener('click', limpiar);