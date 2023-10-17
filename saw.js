var puntajeJugador = 0;
var puntajeMaquina = 0;
var rondasJugadas = 0;

function jugar(opcionJugador) {
    var opciones = ['piedra', 'papel', 'tijera'];
    var opcionMaquina = opciones[Math.floor(Math.random() * opciones.length)];

    var resultadoTexto = document.getElementById('resultadoTexto');
    var maquinaSeleccion = document.getElementById('maquinaSeleccion');

    maquinaSeleccion.textContent = 'Máquina: ' + opcionMaquina;

    if (opcionJugador === opcionMaquina) {
        resultadoTexto.textContent = '¡Empate!';
    } else if (
        (opcionJugador === 'piedra' && opcionMaquina === 'tijera') ||
        (opcionJugador === 'papel' && opcionMaquina === 'piedra') ||
        (opcionJugador === 'tijera' && opcionMaquina === 'papel')
    ) {
        resultadoTexto.textContent = '¡Ganaste!';
        puntajeJugador++;
    } else {
        resultadoTexto.textContent = '¡Perdiste!';
        puntajeMaquina++;
    }

    var puntajeJugadorElement = document.getElementById('puntajeJugador');
    puntajeJugadorElement.textContent = 'Jugador: ' + puntajeJugador;

    var puntajeMaquinaElement = document.getElementById('puntajeMaquina');
    puntajeMaquinaElement.textContent = 'Máquina: ' + puntajeMaquina;

    rondasJugadas++;

    if (rondasJugadas === 3) {
        if (puntajeJugador === 3) {
            alert('¡Ganaste tu libertad!');
            reiniciarJuego();
        } else if (puntajeMaquina === 3) {
            alert('¡Nueren tu y tu compañero!');
            reiniciarJuego();
        } else {
            alert('El juego terminó en empate.');
            reiniciarJuego();
        }
    }
}

function reiniciarJuego() {
    puntajeJugador = 0;
    puntajeMaquina = 0;
    rondasJugadas = 0;

    var puntajeJugadorElement = document.getElementById('puntajeJugador');
    puntajeJugadorElement.textContent = 'Jugador: 0';

    var puntajeMaquinaElement = document.getElementById('puntajeMaquina');
    puntajeMaquinaElement.textContent = 'Máquina: 0';

    var resultadoTexto = document.getElementById('resultadoTexto');
    resultadoTexto.textContent = '';
    var maquinaSeleccion = document.getElementById('maquinaSeleccion');
    maquinaSeleccion.textContent = '';
}

