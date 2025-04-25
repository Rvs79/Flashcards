var cards_frente = [];
var caminho_frente = "cards/mat-paiva-pt1/Exercicios/";

for (var i = 1; i <= 41; i++){
    cards_frente.push(caminho_frente + i + ".png");
}

var cards_verso = [];
var caminho_verso = "cards/mat-paiva-pt1/Respostas/";

for(var i = 1; i <= 41; i++){
    cards_verso.push(caminho_verso + i + ".png");
}


var imgAtual = cards_frente[contador];
var imtAnterior;
var contador = 0;
let mostrando_frente = true;

document.getElementById("image-card").src = cards_frente[contador];

function proximo_card(){
    if(contador < cards_frente.length - 1){
        contador++;
        document.getElementById("image-card").src = cards_frente[contador];
    }
}

function anterior_card(){
    if(contador > 0){
        contador--;
        document.getElementById("image-card").src = cards_frente[contador];
    }
}

function troca_card(){
    let img = document.getElementById("image-card");

    if(mostrando_frente){
        img.src = cards_verso[contador];
        mostrando_frente = false;
    } else {
        img.src = cards_frente[contador];
        mostrando_frente = true;
    }

}
