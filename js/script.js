let stone = document.getElementById('stone');
let roca = 0;
let paper = document.getElementById('paper');
let papel = 1;
let scissors = document.getElementById('scissors');
let tijeras = 2;

const empate = "¡Es un empate!";
const ganas = "¡Enhorabuena, has ganado!";
const pierdes = "Pringao, has perdido";

stone.addEventListener ('click', function() {
    const jugadaPc = Math.floor(Math.random()*3);
    console.log(jugadaPc)
})
paper.addEventListener ('click', function() {
    const jugadaPc = Math.floor(Math.random()*3);      
    console.log(jugadaPc)
})
scissors.addEventListener ('click', function() {
    const jugadaPc = Math.floor(Math.random()*3);
    console.log(jugadaPc)
})

function reglas(jugadaPc,jugadaUser) {
    if (jugadaUser === jugadaPc) {
        return empate;
    } else if (jugadaUser === roca && jugadaPc === papel) {
        return pierdes;
    } else if (jugadaUser === roca && jugadaPc === tijeras) {
        return ganas;
    } else if (jugadaUser === papel && jugadaPc === tijeras) {
        return pierdes;
    } else if (jugadaUser === papel && jugadaPc === roca) {
        return ganas;
    } else if (jugadaUser === tijeras && jugadaPc === roca) {
        return pierdes;
    } else if (jugadaUser === tijeras && jugadaPc === papel) {
        return ganas;
    }
    
}

