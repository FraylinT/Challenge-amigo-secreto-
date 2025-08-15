    let amigos = [];
    //funcion para agregar amigos
    function agregarAmigo() {
        const imput = document.getElementById('amigo');
        const nombre = imput.value.trim();

        if (nombre === ''){
            alert('por favor agregue un nombre valido')
            return;
        }
        //evitar nombres duplicados
        if (amigos.includes(nombre)){
            alert('este nombre fue añadido.')
            imput.value = '';
            imput.focus();
        return;
        }
        amigos.push(nombre)
        const lista = document.getElementById('listaAmigos');
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);

        imput.value = '';
        imput.focus();
    }
    //funcion para limpiar la listra de agregar nuevos elementos
    function actualizarListaAmigos () {
        const lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        amigos.forEach(nombre => {
        const item = `<li>${nombre}</li>`;
        lista.innerHTML += item;
    });

    }
    //funcion para sortear el amigo secreto   
    function sortearAmigo(){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML= '';

    if (amigos === 0 ){
    resultado.innerHTML = '<li>No hay amigos para sortear.</li>';
    return;
    }
    const indiceAleatorio = Math.floor(Math.random()* amigos.length);
    const nombreSorteado = amigos[indiceAleatorio]

    resultado.innerHTML = `<li> El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
    }
