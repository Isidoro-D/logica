
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

//calcHaras();

function verCNH() {
    let idade;

    idade = Number(prompt('Digite sua idade'));

    if (idade >= 18) {
        alert('Apto a tirar sua Habilitação')
    } else {
        alert('Inapto a tirar sua Habilitação')
    }

}

//verCNH();

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

//sellApple();

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

//calcFrutas();

function escolaMedia() {
    let media;

    media = Number(prompt('Digite a média do aluno'))

    if (media < 5) {
        alert('Conceito D')
    } else if (media >= 5 && media < 7) {
        alert('Conceito C')
    } else if (media >= 7 && media < 9) {
        alert('Conceito B')
    } else if (media >= 9 && media <= 10) {
        alert('Conceito A')
    }
}
//escolaMedia();

//else if = usa-se quando se tem mais de uma opção

function calcIMC() {
    let altura, peso, total;

    altura = Number(prompt('Digite sua altura em metros'))
    peso = Number(prompt('Digite seu peso em quilos'))
    total = peso / (altura ^ 2)

    if (total < 18.5) {
        alert('Você está abaixo do peso')
    } else if (total >= 18.5 && total <= 25) {
        alert('Você está com peso normal')
    } else if (total >= 25 && total <= 30) {
        alert('Você está acima do peso')
    } else if (total >= 30)
        alert('Você está obeso')
}

//calcIMC();

function calcCar() {
    let category, popular, luxo, km, days, total;

    category = prompt('Digite se deseja a categoria Popular ou de Luxo')
    days = Number(prompt('Digite quantos dias você alugou o carro'))
    km = Number(prompt('Digite quantos quilometros você percorreu'))
    popular
    luxo

    if (category == 'popular') {
        if (km > 100) {
            total = km * 0.1
        } else {
            total = km * 0.2
        }
        total = total + days * 90
    } else if (category == 'luxo') {
        if (km < 200) {
            total = km * 0.25
        } else {
            total = km * 0.3
        }
        total = total + days * 150
    }

    alert('Você escolheu ' + category + ' e seu total pago foi ' + total)

}

//calcCar();

function atividadeFisica() {
    let hours, points, money;

    hours = Number(prompt('Digite quantas horas você treinou no mês.'))
    money = 0.05

    if (hours <= 10) {
        points = 2 * hours
    } else if (hours > 10 && hours <= 20) {
        points = 5 * hours
    } else if (hours > 20) {
        points = 10 * hours
    }
    money = points * money

    alert('Você treinou por ' + hours + ' horas no mês e adquiriu ' + points + ' pontos e ' + money + ' reais')
}

//atividadeFisica();

function calcIdade() {
    let ages, addAges, countAges;

    countAges = 1;
    addAges = 0;

    // While é a mesma coisa de "Enquanto", então "Enquanto ele não fizer o que eu pedi, ele vai continuar refazendo a mesma etapa até ir para a próxima"
    while (countAges <= 5) {
        ages = Number(prompt('Digite a idade da ' + countAges + 'º pessoa'));
        addAges = addAges + ages

        countAges++
    }

    alert('O total de idade somados são ' + addAges)
}

//calcIdade();

function idades() {
    let ages, countAges, adult;

    countAges = 1;
    adult = 0;

    while (countAges <= 5) {
        ages = Number(prompt('Digite a idade da ' + countAges + 'º pessoa'));
        countAges++ //é igual a 'countAges = countAges + 1'

        if (ages >= 18) {
            adult++
        }
    }

    alert('Tem um total de ' + adult + ' pessoas adultas')
}

//idades();

function menorIdade() {
    let ages, minorAges, countAges;

    minorAges = 0
    countAges = 1

    ages = Number(prompt('Digite a ' + countAges + 'º idade'));
    minorAges = ages

    while (countAges <= 4) {
        ages = Number(prompt('Digite a ' + countAges + 'º idade'));

        if (ages < minorAges) {
            minorAges = ages
        }
        countAges++
    }

    alert('A menor idade é ' + minorAges)
}

//menorIdade();

function gatos() {
    let racao, quilos, gramas, total;

    quilos = Number(prompt('Digite quantos quilos de ração você comprou'));

    quilos = quilos * 1000

    gramas = Number(prompt('Quantas gramas você forneceu para os gatos?'));

    gramas = gramas * 2

    racao = quilos - (gramas * 5);

    total = racao / 1000

    if (total <= 0) {
        alert('Sua ração acabou')
    }

    alert('A quantidade de ração que restou foi de ' + total + 'kg de ração');
}

//gatos();

function anoIdade() {
    let anoAtual, nasc, idade;

    nasc = Number(prompt('Digite seu ano de Nascimento'))
    anoAtual = 2024

    idade = anoAtual - nasc

    alert('Você tem ' + idade + ' ano(s)')
}

//anoIdade();

function whileIdade() {
    let question, idade, contIdade, somaIdade, media, contMaior;

    question = prompt('Deseja digitar informações de usuários? sim ou não?');
    idade = 0
    contMaior = 0
    contIdade = 0
    somaIdade = 0
    media = 0

    while (question == "sim") {
        idade = Number(prompt('Digite uma idade'));
        contIdade++
        somaIdade += idade
        if (idade >= 21) {
            contMaior++
        }
        question = prompt('Deseja digitar informações de usuários? sim ou não?');
    }
    media = somaIdade / contIdade;

    alert('Foram informadas ' + contIdade + ' idade, a média das idades digitadas é ' + media + ' e ' + contMaior + ' possuem 21 ou mais.')
}

//whileIdade();

function somaVal() {
    let pergunta, numeros, contNum, mediaNum, menorNum, somaNum;

    numeros = 0
    menorNum = 0
    contNum = 0
    mediaNum = 0
    somaNum = 0
    pergunta = prompt('Deseja digitar informações de usuários? sim ou não?');


    while (pergunta == "sim") {
        numeros = Number(prompt('Digite um número.'));
        contNum++
        somaNum += numeros
        if (numeros < menorNum || menorNum == 0) {
            menorNum = numeros
        }
        pergunta = prompt('Deseja digitar informações de usuários? sim ou não?');
    }

    mediaNum = somaNum / contNum;

    alert('Foram informados ' + somaNum + ' números, a média desses números é ' + mediaNum + ' e o menor número é ' + menorNum)
}

//somaVal();

function cadastro() {
    let question, name, age, sex, ageOlder = 0, womanYng, older, youngster = 0, somaAge = 0, countAge = 0, mediaAge = 0, mens30 = 0, womans18 = 0;

    question = prompt('Deseja digitar informações de usuários? sim ou não?');

    while (question == "sim") {
        name = prompt('Digite seu nome');
        age = Number(prompt('Digite sua idade'));
        sex = prompt('Digite seu sexo. (feminino ou masculino)');
        countAge++
        somaAge += age

        if (age > ageOlder) {
            ageOlder = age;
            older = name;
        }

        if (sex == "feminino" && age < youngster || youngster == 0) {
            youngster = age;
            womanYng = name;
        }

        if (sex == "masculino" && age >= 30) {
            mens30++
        }

        if (sex == "feminino" && age <= 18) {
            womans18++
        }

        mediaAge = somaAge / countAge

        question = prompt('Deseja digitar informações de usuários? sim ou não?');
    }


    alert('O nome da pessoa mais velha é ' + older + ', a mulher mais jovem se chama ' + womanYng + ' a média das idades é ' + mediaAge + ', tem um total de ' + mens30 + ' homens com 30 anos ou mais e há '+womans18+' mulheres com 18 anos ou menos.')
}

//cadastro();