
function algIdade() {
    //variavéis
    let nome, idade; //essa é a mais usada
    //ou var

    /**prompt = comando utilizado para 
     * solicitar informações */
    nome = prompt('Digite seu nome');

    //string= é uma cadeia de caracteres ou seja uma sequencia texto podendo conter números, letras e caraceteres especiais

    //Number= converte um valor para número
    idade = Number(prompt('Digite sua idade'));

    //informação que vai aparecer pro usuario
    alert('Olá ' + nome + ' você tem ' + idade + ' anos.');

}

//algIdade();


function calcTerreno() {
    let largura, comprimento, area;

    largura = Number(prompt('Digite a largura do terreno'));

    comprimento = Number(prompt('Digite  comprimento do terreno'));

    area = largura * comprimento

    alert('A área do terreno é ' + area);

}

//calcTerreno();


function calcHaras() {

    let cavalos, total


    cavalos = Number(prompt('Digite a quantidade de cavalos do haras'));

    total = cavalos * 4
    alert('A quantidade de ferraduras necessária será ' + total)

}

/* calcHaras(); */

function verCNH() {
    let idade;

    idade = Number(prompt('Digite sua idade'));

    if (idade >= 18) {
        alert('Apto a tirar sua Habilitação')
    } else {
        alert('Inapto a tirar sua Habilitação')
    }

}

/* verCNH(); */

function sellApple() {
    let apples, total;

    apples = Number(prompt('Digite quantas maçãs deseja comprar'));

    if (apples >= 12) {
        total = apples * 1.00
    } else {
        total = apples * 1.30
    }

    alert('A quantidade de maças compradas foram de ' + apples + ' e o valor foi ' + total + ' reais')

}

/* sellApple(); */

function votos() {
    let today, birth, total;

    today = 2024;
    birth = Number(prompt('Digite seu ano de nascimento'));
    total = today - birth;

    if (total >= 18) {
        alert('Você poderá votar esse ano.')
    } else {
        alert('Você não poderá votar esse ano.')
    }

}

//votos();

function calcFrutas() {
    let apple, strawberry, total, qtdfrutas;

    apple = Number(prompt('Digite quantos quilos de maçãs deseja comprar'));

    strawberry = Number(prompt('Digite quantos quilos de morangos deseja comprar'));

    qtdfrutas = apple + strawberry;

    if (apple > 5 || strawberry > 5) {
        total = (apple * 1.5) + (strawberry * 2.2)
    } else {
        total = (apple * 1.8) + (strawberry * 2.5)
    }

    if (qtdfrutas > 8 || total > 25) {
        total = total - (total * 0.1)
    } else {
        total
    }

    alert('A quantidade de frutas compradas foram de ' + qtdfrutas + ' e o valor foi ' + total + ' reais')
}

calcFrutas();