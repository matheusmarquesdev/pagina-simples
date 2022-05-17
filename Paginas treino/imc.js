
var botaoAdicionar = document.querySelector("#adicionar-calculo");
botaoAdicionar.addEventListener('click',function(event){
    event.preventDefault();

    var form = document.querySelector("#formulario-in");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;



    var alunoTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");


    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculadora(peso,altura);


    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(pesoTd);
    alunoTr.appendChild(alturaTd);
    alunoTr.appendChild(gorduraTd);
    alunoTr.appendChild(imcTd);
    
    var table = document.querySelector("#adicionar__imc");
    table.appendChild(alunoTr);
    }
)
function calculadora (peso,altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);

}