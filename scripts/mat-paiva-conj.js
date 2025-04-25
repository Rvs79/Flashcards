//Lista de cards frente
var cards_frente = []; //Lista sem limite especificado
var caminho_frente = "cards/mat-paiva-pt1/Exercicios/"; //caminho onde estao as imagens - frente
// enquanto o contador i for menor ou igual a 41(numero de cards), a lista cards_frente recebe no final da lista(.push) o caminho + contador(identificar numero do card + png(tipo do arquivo)
for (var i = 1; i <= 41; i++){
    cards_frente.push(caminho_frente + i + ".png");
}
//Lista de cards verso
var cards_verso = []; //Lista sem limite especificado
var caminho_verso = "cards/mat-paiva-pt1/Respostas/"; //caminho onde estao as imagens - verso
// enquanto o contador i for menor ou igual a 41(numero de cards), a lista cards_verso recebe no final da lista(.push) o caminho + contador(identificar numero do card + png(tipo do arquivo)
for(var i = 1; i <= 41; i++){
    cards_verso.push(caminho_verso + i + ".png");
}

var imgAtual = cards_frente[contador]; //imagem atual = cards_frente[índice do array]
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
