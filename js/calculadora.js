const rentabilidadeInicial = 1

function add() {

    const quantidade = Number(document.getElementById('numero').value);
    const data = Number(document.getElementById('data').value);
    var fixo = 1
    var fixo1 = 1
    let dias = 15

    switch(true){
        case(quantidade >= 1050):fixo = 3.2; break
        case(quantidade >= 900):fixo = 3.0; break
        case(quantidade >= 800):fixo = 2.8; break
        case(quantidade >= 750):fixo = 2.6; break
        case(quantidade >= 700):fixo = 2.4; break
        case(quantidade >= 650):fixo = 2.2; break
        case(quantidade >= 500):fixo = 2.0; break
        case(quantidade >= 250):fixo = 1.8; break
        case(quantidade >= 200):fixo = 1.6; break;
        case(quantidade >= 150):fixo = 1.4; break
        case(quantidade >= 100):fixo = 1.2; break;
    }

    switch(true){
        case(data >= dias*10):fixo1 = 1.9; break
        case(data >= dias*9):fixo1 = 1.8; break
        case(data >= dias*8):fixo1 = 1.7; break
        case(data >= dias*7):fixo1 = 1.6; break
        case(data >= dias*6):fixo1 = 1.5; break
        case(data >= dias*5):fixo1 = 1.4; break
        case(data >= dias*4):fixo1 = 1.3; break
        case(data >= dias*3):fixo1 = 1.2; break
        case(data >= dias*2):fixo1 = 1.1; break
        case(data >= dias):fixo1 = 1.0; break
    }

    let rentabilidade = rentabilidadeInicial * fixo * fixo1

    document.getElementById("rentabilidade").innerHTML = "Rentabilidade: " + (rentabilidade
    );

    let valorFinal = (rentabilidade*quantidade);

    document.getElementById("valorFinal").innerHTML = valorFinal;
}


function funcao() {

    document.getElementById("escolha_investimento").innerHTML = "Investimento Seguro";
    document.getElementById("rentabilidade").innerHTML = "Rentabilidade: " + rentabilidadeInicial;

}
