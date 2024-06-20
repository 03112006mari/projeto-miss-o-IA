const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: Qual país vc acha a melhor cúlinaria?",
        alternativas: [
            {
                texto: "Ítalia",
                afirmacao: "Pizza"
            },
            {
                texto: "Brasil",
                afirmacao: "Feijoada"
            },
            {
                 texto: "USA",
                afirmacao: "Hamburguer"
            },
            {
                 texto: "França",
                afirmacao: "Ratatouille"
            }
            
        ]
    },
    {
        enunciado: "Qual dos sabores vc prefere?",
        alternativas: [
            {
                texto: "salgado",
                afirmacao: "salgado."
            },
            {
                texto: "doce",
                afirmacao: "doce."
            },
            {
               texto: "azedo",
                afirmacao: "doce"
            },
            {
                texto: "amargo",
                afirmacao: "amargo"  
            }
        ]
    },
    {
        enunciado: "Se vc fosse escolher uma gastronomia qual seria? ",
        alternativas: [
            {
                texto: "italiana",
                afirmacao: "italiana"
            },
            {
                texto: "Brasileira",
                afirmacao: " Brasileira. "
            },
            {
                texto: "Asiatica",
                afirmacao: "Asiatica" 
            },
            {
                texto: "Francesa",
                afirmacao: "Francesa"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
