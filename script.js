const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual país vc acha a melhor cúlinaria?",
        alternativas: [
            {
                texto: "Ítalia",
                afirmacao: "Comida tipica desse país é: Pizza"
            },
            {
                texto: "Brasil",
                afirmacao: "Comida tipica desse país é:Feijoada"
            },
            {
                 texto: "USA",
                afirmacao: "Comida tipica desse país é:Hamburguer"
            },
            {
                 texto: "França",
                afirmacao: "Comida tipica desse país é:Ratatouille"
            }
            
        ]
    },
    {
        enunciado: "Qual dos sabores vc prefere?",
        alternativas: [
            {
                texto: "salgado",
                afirmacao: "Essa pessoa prefere salgado."
            },
            {
                texto: "doce",
                afirmacao: "Essa pessoa prefere doce."
            },
            {
               texto: "azedo",
                afirmacao: "Essa pessoa prefere azedo"
            },
            {
                texto: "amargo",
                afirmacao: "Essa pessoa prefere amargo"  
            }
        ]
    },
    {
        enunciado: "Se vc fosse escolher uma gastronomia qual seria? ",
        alternativas: [
            {
                texto: "italiana",
                afirmacao: "A culinária italiana é conhecida por sua simplicidade e sabores autênticos, baseados em ingredientes frescos como massas artesanais, molhos de tomate e queijos aromáticos. Os italianos apreciam não apenas a comida, mas também o ato de compartilhar refeições longas e conviviais, que celebram a união e a alegria de estar juntos à mesa. Essa culinária é uma verdadeira embaixadora da cultura italiana, cativando paladares ao redor do mundo."
            },
            {
                texto: "Brasileira",
                afirmacao: " A culinária brasileira é uma fusão vibrante de influências indígenas, africanas, europeias e asiáticas, destacando-se pela diversidade de ingredientes como açaí, mandioca, feijão-preto e frutos do mar. Pratos icônicos como a feijoada e técnicas variadas de preparo de frutos do mar exemplificam a rica tradição gastronômica do país, que celebra não apenas sabores, mas também a cultura e a festividade.
. "
            },
            {
                texto: "Asiatica",
                afirmacao: "A culinária asiática é famosa pela diversidade de sabores e técnicas culinárias que refletem a rica cultura do continente. Com ingredientes frescos como gengibre, soja e especiarias variadas, cada região oferece pratos únicos que equilibram sabores e texturas de maneira harmoniosa, proporcionando uma experiência gastronômica incomparável." 
            },
            {
                texto: "Francesa",
                afirmacao: "A culinária francesa é famosa por sua sofisticação e técnica refinada, usando ingredientes frescos como manteiga, ervas, queijos e vinhos. Cada região da França contribui com pratos distintos, como boeuf bourguignon e ratatouille, além de sobremesas icônicas como macarons e crème brûlée, tornando-a uma das mais admiradas do mundo."
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "Obrigada por responder o Quizz ;)";

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
    caixaPerguntas.textContent = "Obrigada por responder o Quizz ;)";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
