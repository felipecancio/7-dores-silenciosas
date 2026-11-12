// Preencha os dados reais e mude demonstracao para false para ativar a venda.
const demonstracao = true;
const ofertaReal = {
  checkoutUrl: "",
  preco: "",
  precoReferencia: "",
  garantiaDias: 0,
  // Cada relato autorizado tem nome, tema e texto.
  depoimentos: []
};

const ofertaExemplo = {
  preco: "R$ 47,00",
  precoReferencia: "R$ 97,00",
  checkoutUrl: "",
  garantiaDias: 7,
  depoimentos: [
    {
      ilustrativo: true,
      nome: "Helena",
      tema: "Sobre dar nome ao que sente",
      texto: "A pergunta sobre pedir ajuda me fez pensar em quantas vezes eu dizia que estava tudo bem, mesmo querendo conversar."
    },
    {
      ilustrativo: true,
      nome: "Marina",
      tema: "Sobre os exercícios de escrita",
      texto: "Escrevi sobre uma situação pequena do meu dia. Colocar aquilo no papel me ajudou a entender por que eu fiquei tão mexida."
    },
    {
      ilustrativo: true,
      nome: "Clara",
      tema: "Sobre retomar a oração",
      texto: "Gostei de ter uma oração curta para começar. Foi um jeito de falar com Deus sobre algo que eu vinha evitando."
    }
  ]
};

const oferta = {
  demonstracao,
  titulo: "As 7 Dores Silenciosas",
  subtitulo: "Como Curar a Alma",
  formato: "Guia digital de leitura, escrita e oração",
  ...(demonstracao ? ofertaExemplo : ofertaReal)
};
