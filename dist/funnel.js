const temas = {
  rejeicao: {
    nome: "Rejeição",
    sinais: "Você pode guardar opiniões ou vontades por receio de que mostrar quem é coloque um vínculo em risco.",
    exemplo: "Você pensa em sugerir algo numa conversa, mas acaba concordando com todo mundo para evitar atrito.",
    pergunta: "O que eu deixei de dizer naquela situação? Qual seria uma maneira respeitosa de expressar isso hoje?",
    pratica: "Escolha uma conversa de baixo risco e diga uma preferência simples, como o que gostaria de fazer no fim de semana.",
    oracao: "Deus, dá-me coragem para dizer o que sinto com respeito e para lembrar que minha dignidade permanece quando alguém discorda de mim."
  },
  solidao: {
    nome: "Solidão",
    sinais: "Mesmo na companhia de outras pessoas, pode faltar espaço para dividir o que está pesando e se sentir ouvido.",
    exemplo: "Quando alguém pergunta como você está, você responde que está tudo bem, embora esteja precisando de companhia.",
    pergunta: "Em que momento eu senti falta de companhia? Eu precisava de conselho, de presença ou só de alguém que me ouvisse?",
    pratica: "Pense numa pessoa de confiança e faça um pedido específico, como conversar por dez minutos esta semana.",
    oracao: "Deus, acolhe o silêncio que me pesa e ajuda-me a reconhecer as pessoas com quem posso dividir o que sinto."
  },
  vergonha: {
    nome: "Vergonha",
    sinais: "Uma lembrança de exposição ou julgamento pode fazer você se esconder ou tratar um erro como se ele definisse seu valor.",
    exemplo: "Depois de errar numa conversa, você revê cada frase e prefere evitar o próximo encontro.",
    pergunta: "O que de fato aconteceu? O que eu diria a uma pessoa querida que tivesse passado pela mesma situação?",
    pratica: "Escreva uma frase sobre o que aconteceu e outra sobre como gostaria de se tratar ao lembrar disso.",
    oracao: "Deus, ensina-me a lembrar dos meus erros com verdade e misericórdia, sem esquecer o bem que ainda posso fazer."
  },
  confianca: {
    nome: "Quebra de confiança",
    sinais: "Depois de uma decepção, você pode tentar prever tudo ou evitar depender de alguém para se proteger.",
    exemplo: "Mesmo com um combinado feito, você volta a checar cada detalhe porque tem medo de uma nova decepção.",
    pergunta: "O que estava sob meu controle naquela situação? Que acordo ou limite teria me dado mais clareza?",
    pratica: "Escolha um combinado simples e deixe explícitos o prazo, a responsabilidade de cada pessoa e quando vocês vão conversar de novo.",
    oracao: "Deus, dá-me discernimento para reconhecer em quem posso confiar e firmeza para cuidar dos meus limites."
  },
  autocobranca: {
    nome: "Autocobrança",
    sinais: "Você pode sentir que precisa fazer tudo certo antes de descansar, pedir ajuda ou reconhecer o que já fez.",
    exemplo: "Mesmo depois de terminar uma tarefa importante, você só consegue pensar no que ainda poderia ter feito melhor.",
    pergunta: "O que teria sido suficiente nessa situação? Que parte da exigência vinha de mim?",
    pratica: "Antes de começar uma tarefa pequena, escreva o que já seria suficiente e experimente encerrar quando chegar lá.",
    oracao: "Deus, ajuda-me a reconhecer o valor do que faço e a aceitar o descanso de que preciso."
  },
  culpa: {
    nome: "Culpa",
    sinais: "Você pode repassar decisões antigas e carregar uma responsabilidade que hoje precisa ser olhada com mais clareza.",
    exemplo: "Você volta mentalmente a uma escolha antiga e julga aquela decisão com informações que só tem agora.",
    pergunta: "Qual parte era realmente minha? Existe algo que eu ainda possa reparar, pedir ou esclarecer?",
    pratica: "Divida uma página em duas partes. De um lado, escreva uma reparação possível. Do outro, escreva o que já não está ao seu alcance.",
    oracao: "Deus, dá-me coragem para reparar o que posso e misericórdia para acolher o que já não posso mudar."
  },
  perda: {
    nome: "Perdas e despedidas",
    sinais: "O fim de uma fase, vínculo ou projeto pode deixar saudade e mudar o que você esperava do futuro.",
    exemplo: "Algo simples no dia a dia faz você lembrar de uma fase que acabou, e você segue o dia sem dar espaço ao que sentiu.",
    pergunta: "Do que sinto falta nessa despedida? Há uma lembrança ou valor que eu gostaria de levar comigo?",
    pratica: "Escolha uma lembrança que possa guardar com carinho e pense em uma forma de honrá-la no seu ritmo.",
    oracao: "Deus, acolhe minha saudade e ajuda-me a encontrar um lugar para o que foi importante na minha história."
  }
};

const alternativa = (texto, tema = null, resumo = texto) => ({ texto, tema, resumo });
const etapas = [
  { id: "inicio", tipo: "inicio" },
  {
    id: "reacao", tipo: "unica", grupo: "O que você sente",
    titulo: "Quando algo mexe com você, qual costuma ser sua primeira reação?",
    instrucao: "Escolha sua reação mais comum.",
    opcoes: [
      alternativa("Guardo o que sinto por medo de rejeição ou julgamento.", ["rejeicao", "vergonha"]),
      alternativa("Fico com raiva e me sinto mal"),
      alternativa("Fico alerta, tentando evitar que aconteça de novo.", "confianca"),
      alternativa("Busco uma pessoa pra desabafar")
    ]
  },
  {
    id: "areas", tipo: "multipla", grupo: "O que você sente",
    titulo: "Onde esse peso aparece com mais força?",
    instrucao: "Marque uma ou mais áreas da sua vida.",
    opcoes: [
      alternativa("Nos meus relacionamentos.", null, "nos seus vínculos afetivos"),
      alternativa("na minha família", null, "na convivência familiar"),
      alternativa("no trabalho", null, "na rotina profissional"),
      alternativa("nas minhas amizades", null, "na relação com seus amigos"),
      alternativa("Quando estou só", null, "nos momentos que passa a sós")
    ]
  },
  {
    id: "pensamento", tipo: "unica", grupo: "O que você sente",
    titulo: "Depois que a situação passa, qual pensamento fica?",
    instrucao: "Qual frase mais combina com você?",
    opcoes: [
      alternativa("“Será que sou importante para as pessoas ao meu redor?”", ["rejeicao", "solidao"]),
      alternativa("“Queria apagar o que aconteceu ou ter agido diferente.”", ["vergonha", "culpa"]),
      alternativa("“Tenho medo de sofrer de novo com uma decepção ou despedida.”", ["confianca", "perda"]),
      alternativa("“Preciso fazer mais e acertar da próxima vez.”", "autocobranca")
    ]
  },
  {
    id: "tentativas", tipo: "auto", grupo: "O que se repete",
    titulo: "O que você costuma fazer para aliviar esse peso?",
    instrucao: "Pense no que você costuma fazer.",
    opcoes: [
      alternativa("Me ocupo com outras coisas e espero passar."),
      alternativa("Tento entender o que sinto escrevendo ou conversando com alguém."),
      alternativa("Busco apoio na oração ou na minha fé."),
      alternativa("Ainda estou procurando um jeito de lidar com isso.")
    ]
  },
  {
    id: "acolhimento", tipo: "pausa", grupo: "O que se repete",
    titulo: "Você não precisa carregar tudo em silêncio.",
    texto: "Há dores que ficam guardadas por anos e podem reaparecer na maneira como você decide, se relaciona ou reage a uma situação.",
    destaque: "Sentir essa dor não diminui sua fé nem sua força.",
    complemento: "Às vezes, falta espaço para reconhecer o que aconteceu e olhar com cuidado para o que ainda pesa.",
    convite: "Continue para descobrir qual das <strong>7 dores silenciosas</strong> mais aparece nas suas respostas e encontrar um <strong>primeiro passo de cura para hoje.</strong>"
  },
  {
    id: "sentimentos", tipo: "multipla", grupo: "O que se repete",
    titulo: "Quais desses sentimentos você mais se identifica?",
    instrucao: "Pode marcar mais de um.",
    opcoes: [
      alternativa("Rejeição", "rejeicao"),
      alternativa("Solidão", "solidao"),
      alternativa("Vergonha", "vergonha"),
      alternativa("Quebra de confiança", "confianca"),
      alternativa("Autocobrança", "autocobranca"),
      alternativa("Culpa", "culpa"),
      alternativa("Perdas e despedidas", "perda")
    ]
  },
  {
    id: "custo", tipo: "unica", grupo: "O que se repete",
    titulo: "Você sente que ama mais as pessoas queridas do que elas te amam de volta?",
    instrucao: "Pense nas suas relações mais próximas.",
    opcoes: [
      alternativa("Sim", ["rejeicao", "solidao"]),
      alternativa("Algumas vezes", ["rejeicao", "solidao"]),
      alternativa("Não...")
    ]
  },
  {
    id: "frequencia", tipo: "auto", grupo: "O que se repete",
    titulo: "Quem costuma te dar mais apoio nos momentos difíceis?",
    instrucao: "Escolha quem mais está presente.",
    opcoes: ["A família", "Amigos", "Parceiro/a", "Sinto que não recebo apoio..."].map(texto => alternativa(texto))
  },
  { id: "caminho", tipo: "caminho", grupo: "Seu primeiro passo" },
  {
    id: "objetivo", tipo: "unica", grupo: "Seu primeiro passo",
    titulo: "Qual mudança você mais gostaria de praticar?",
    instrucao: "Indique o que mais deseja mudar.",
    opcoes: [
      alternativa("Expressar o que preciso e pedir apoio com mais clareza.", null, "comunicar suas necessidades e se sentir mais à vontade para pedir ajuda"),
      alternativa("Responder com calma em situações difíceis.", null, "encontrar mais equilíbrio ao lidar com momentos difíceis"),
      alternativa("Olhar para minha história com mais gentileza.", null, "acolher seu passado com mais compreensão"),
      alternativa("Abrir espaço para falar sobre isso em oração.", null, "levar seus sentimentos para a sua conversa com Deus")
    ]
  },
  {
    id: "preferencia", tipo: "auto", grupo: "Seu primeiro passo",
    titulo: "Você tem o costume de se abrir nas suas orações?",
    instrucao: "Pense em como costuma orar.",
    opcoes: [
      alternativa("Sempre", null, "oracao"),
      alternativa("Nem assim eu me abro", null, "escrita"),
      alternativa("Não tenho costume de orar...", null, "leitura")
    ]
  },
  {
    id: "oportunidade", tipo: "auto", grupo: "Seu primeiro passo",
    titulo: "Se você pudesse identificar o motivo da sua dor hoje e <em>curá-la</em>, você aproveitaria essa oportunidade?",
    opcoes: [
      alternativa("Com certeza"),
      alternativa("Prefiro que nada mude")
    ]
  },
  { id: "analise", tipo: "analise" },
  { id: "resultado", tipo: "resultado" },
  { id: "oferta", tipo: "oferta" }
];

const stage = document.querySelector("#stage");
const back = document.querySelector("#back");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector("#progress-bar");
const progressStep = document.querySelector("#progress-step");
const progressPercent = document.querySelector("#progress-percent");
const answers = new Map();
const analysisIndex = etapas.findIndex(({ tipo }) => tipo === "analise");
const symbol = '<span class="sunburst" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>';
let current = 0;
let analysisTimer;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function heading(title, subtitle = "", kicker = "") {
  return `<header class="screen-header">
    ${kicker ? `<p class="kicker">${kicker}</p>` : ""}
    <h1 id="stage-title" tabindex="-1">${title}</h1>
    ${subtitle ? `<p class="muted lead">${subtitle}</p>` : ""}
  </header>`;
}

function primary(label, action = "next", disabled = false) {
  return `<button type="button" class="primary" data-action="${action}" ${disabled ? "disabled" : ""}>${label} <span aria-hidden="true">→</span></button>`;
}

function selecionadas(id) {
  const etapa = etapas.find(item => item.id === id);
  return (answers.get(id) ?? []).map(index => etapa.opcoes[index]);
}

function resultado() {
  const notas = Object.fromEntries(Object.keys(temas).map(tema => [tema, 0]));
  for (const etapa of etapas) {
    for (const opcao of selecionadas(etapa.id)) {
      // Cada resposta distribui um ponto entre os temas que representa.
      const temasDaResposta = [opcao.tema].flat().filter(Boolean);
      for (const tema of temasDaResposta) {
        notas[tema] += 1 / temasDaResposta.length;
      }
    }
  }
  const prioridades = [selecionadas("custo")[0]?.tema].flat();
  const ordem = Object.keys(temas).sort((a, b) => notas[b] - notas[a] || Number(prioridades.includes(b)) - Number(prioridades.includes(a)));
  const principal = ordem[0];
  const sentimentos = selecionadas("sentimentos").map(opcao => opcao.tema);
  const feridas = ordem.filter(id => sentimentos.includes(id)).slice(0, 2).map(id => temas[id]);
  if (!feridas.length) feridas.push(temas[principal]);
  return {
    tema: feridas[0],
    feridas,
    areas: selecionadas("areas").map(({ resumo }) => resumo),
    objetivo: selecionadas("objetivo")[0]?.resumo,
    preferencia: selecionadas("preferencia")[0]?.resumo
  };
}

function inicio() {
  return `<div class="screen intro">
    <div class="intro-ornament">${symbol}</div>
    <div class="intro-copy">
      ${heading("Que dor você tem carregado <em>em silêncio?</em>", "Responda a algumas perguntas para reconhecer o que tem pesado na sua vida e encontrar um primeiro passo de cura.", "Quiz de reflexão")}
      ${primary("Começar")}
      <p class="micro">Leva apenas <strong>1 minuto</strong></p>
    </div>
  </div>`;
}

function pergunta(etapa) {
  const selected = answers.get(etapa.id) ?? [];
  const multiple = etapa.tipo === "multipla";
  const confirm = etapa.tipo !== "auto";
  return `<div class="screen question">
    ${heading(etapa.titulo, etapa.instrucao)}
    <div class="choices" role="group" aria-labelledby="stage-title">
      ${etapa.opcoes.map(({ texto }, index) => `<button class="choice" type="button" data-choice="${index}" ${confirm ? `aria-pressed="${selected.includes(index)}"` : ""}>
        <span class="indicator ${multiple ? "indicator-square" : ""}" aria-hidden="true"></span>
        <span>${texto}</span>
        <span class="choice-arrow" aria-hidden="true">›</span>
      </button>`).join("")}
    </div>
    ${confirm ? primary("Continuar", "next", !selected.length) : ""}
  </div>`;
}

function pausa(etapa) {
  return `<div class="screen acolhimento">
    <div class="acolhimento-header">
      ${symbol}
      ${heading(etapa.titulo)}
    </div>
    <div class="acolhimento-copy">
      <p class="muted">${etapa.texto}</p>
      <div class="acolhimento-destaque">
        <p><strong>${etapa.destaque}</strong></p>
        <p>${etapa.complemento}</p>
      </div>
      <p class="acolhimento-convite">${etapa.convite}</p>
      ${primary("Continuar")}
    </div>
  </div>`;
}

function telaResultado() {
  const { feridas, areas, objetivo } = resultado();
  return `<div class="screen centered">
    <div class="symbol-tile">${symbol}</div>
    ${heading(`Suas principais feridas vêm da:<br><em>${joinList(feridas.map(tema => tema.nome.toLowerCase()))}</em>`, "", "Seu resultado")}
    ${feridas.map(tema => `<p class="muted">${tema.sinais}</p>`).join("")}
    <div class="insight">
      <p><strong>Onde você sente isso</strong><br>Esse desconforto aparece ${joinList(areas)}.</p>
      <p><strong>O que você quer mudar</strong><br>Seu desejo é ${objetivo}.</p>
    </div>
    ${primary("Ver por onde começar")}
    <p class="micro">Esta leitura é uma sugestão de reflexão com base nas suas respostas.</p>
  </div>`;
}

function joinList(values) {
  return new Intl.ListFormat("pt-BR").format(values);
}

function telaCaminho() {
  return `<div class="screen author-screen">
    ${heading("Você está a um passo de se livrar <em>dessa dor</em>")}
    <figure class="author-portrait">
      <img src="padre-autor.png" width="1537" height="1023" alt="Padre autor do ebook, segurando um livro dentro de uma igreja">
      <figcaption>Padre Felipe Pinheiros (Paróquia São Benedito - RJ)</figcaption>
    </figure>
    <div class="author-copy">
      <p>Parabéns se você chegou até aqui! De verdade, nunca é fácil encarar nossos medos e traumas, e o mais importante é que você quer uma mudança na sua vida!</p>
      <p>Me chamo Felipe Pinheiros, sou Bacharel em Teologia e Ciências da Religião. Hoje sou encarregado de um projeto que já auxiliou mais de 2 mil famílias a entenderem e curarem suas dores mais profundas.</p>
      <p class="author-invitation">Hoje eu convido você também a ser mais uma dessas pessoas abençoadas com a paz interior e um espírito forte e livre. Falta só algumas perguntas pra eu te indicar o melhor caminho 🙏</p>
    </div>
    ${primary("Continuar Perguntas")}
  </div>`;
}

function checkoutUrl() {
  if (!oferta.demonstracao && oferta.checkoutUrl) {
    try {
      const url = new URL(oferta.checkoutUrl);
      if (url.protocol === "https:") return url.href;
    } catch {
      return "";
    }
  }
  return "";
}

function purchaseButton() {
  const url = checkoutUrl();
  if (url) return `<a class="primary" href="${escapeHtml(url)}">Quero meu guia <span aria-hidden="true">→</span></a>`;
  if (oferta.demonstracao) return primary("Quero meu guia", "purchase");
  return '<a class="primary" href="#amostra">Ler uma amostra <span aria-hidden="true">→</span></a>';
}

function price() {
  if (!oferta.preco) return "";
  return `<div class="price">
    ${oferta.precoReferencia ? `<del>${escapeHtml(oferta.precoReferencia)}</del>` : ""}
    <strong>${escapeHtml(oferta.preco)}</strong>
    ${oferta.demonstracao ? '<span class="micro">Valores ilustrativos</span>' : ""}
  </div>`;
}

function testimonials() {
  const depoimentos = oferta.depoimentos.filter(item => oferta.demonstracao || !item.ilustrativo);
  if (!depoimentos.length) return "";
  return `<section class="offer-section" aria-labelledby="proof-title">
    <div class="section-head">
      <p class="kicker">Experiências com o material</p>
      <h2 id="proof-title">${oferta.demonstracao ? "Exemplos de depoimentos" : "O que dizem os leitores"}</h2>
      ${oferta.demonstracao ? '<p class="muted">Relatos e nomes fictícios para ilustrar esta seção.</p>' : ""}
    </div>
    <div class="three-column">
      ${depoimentos.map(item => `<figure class="proof-card">
        <figcaption><strong>${escapeHtml(item.nome)}</strong><span>${escapeHtml(item.tema)}</span></figcaption>
        <blockquote>“${escapeHtml(item.texto)}”</blockquote>
      </figure>`).join("")}
    </div>
  </section>`;
}

function garantia() {
  const dias = oferta.garantiaDias;
  if (!dias) return "";
  return `<div class="guarantee"><span class="guarantee-number" aria-hidden="true">${dias}<small>DIAS</small></span>
    <div><strong>${oferta.demonstracao ? `Exemplo de garantia de ${dias} dias` : `Garantia de ${dias} dias`}</strong>
    <p>${oferta.demonstracao ? "Esta seção ilustra onde ficam as condições de reembolso da oferta." : "Confira no checkout as condições e o canal para solicitar o reembolso."}</p></div></div>`;
}

function telaOferta() {
  const { tema, objetivo } = resultado();
  return `<div class="sales">
    <section class="offer-hero" aria-labelledby="stage-title">
      <div class="offer-hero-art">
        <img src="mockup-7-dores.webp" width="1536" height="1024" alt="Mockup do guia As 7 Dores Silenciosas: Como Curar a Alma, com capa ameixa e detalhes em cobre">
      </div>
      <div class="offer-hero-copy">
        ${heading(`${escapeHtml(oferta.titulo)}<br><em>${escapeHtml(oferta.subtitulo)}</em>`, `Seu quiz apontou para <strong>${tema.nome.toLowerCase()}</strong>. Comece por esse capítulo e use o guia para entender em que situações esse tema aparece e como você pode responder a elas.`, escapeHtml(oferta.formato))}
        ${price()}
        ${purchaseButton()}
        <a class="text-link" href="#amostra">Ler uma amostra antes</a>
      </div>
    </section>

    <section class="offer-section" aria-labelledby="fit-title">
      <div class="section-head">
        <p class="kicker">Do resultado à prática</p>
        <h2 id="fit-title">Como o guia pode ajudar você</h2>
        <p class="muted">Você quer ${objetivo}. O capítulo sobre ${tema.nome.toLowerCase()} oferece uma situação para observar, uma pergunta para escrever e um passo para experimentar.</p>
      </div>
      <div class="comparison">
        <div><h3>O que pode acontecer hoje</h3><p>${tema.exemplo}</p></div>
        <div><h3>O que você pode praticar</h3><p>${tema.pratica}</p></div>
      </div>
    </section>

    <section class="offer-section chapter-section" aria-labelledby="chapters-title">
      <div class="section-head">
        <p class="kicker">Dentro do guia</p>
        <h2 id="chapters-title">Sete dores para reconhecer</h2>
        <p class="muted">Cada capítulo combina leitura, uma pergunta de escrita, uma prática e uma oração.</p>
      </div>
      <ul class="chapter-list">
        ${Object.values(temas).map(({ nome }) => `<li class="${nome === tema.nome ? "chapter-selected" : ""}"><span>${nome}</span>${nome === tema.nome ? '<small>Seu ponto de partida</small>' : ""}</li>`).join("")}
      </ul>
    </section>

    <section class="offer-section sample" id="amostra" aria-labelledby="sample-title" tabindex="-1">
      <div class="section-head">
        <p class="kicker">Amostra do seu capítulo</p>
        <h2 id="sample-title">${tema.nome}</h2>
        <p class="muted">${tema.sinais}</p>
      </div>
      <div class="sample-grid">
        <div><h3>Pergunta para escrever</h3><p>${tema.pergunta}</p></div>
        <div><h3>Oração para começar</h3><p>${tema.oracao}</p></div>
      </div>
    </section>

    ${testimonials()}

    <section class="offer-section faq" aria-labelledby="faq-title">
      <div class="section-head"><h2 id="faq-title">Perguntas frequentes</h2></div>
      <details><summary>Preciso ler os capítulos em ordem?</summary><p>Você pode começar pelo tema indicado no quiz e seguir na ordem que fizer sentido para você.</p></details>
      <details><summary>Que tipo de material vou encontrar?</summary><p>Um guia digital com sete temas, exemplos do dia a dia, exercícios de escrita e orações curtas para fazer no seu ritmo.</p></details>
      <details><summary>O guia substitui acompanhamento profissional?</summary><p>O guia é um recurso de reflexão e espiritualidade. Ele pode acompanhar o cuidado profissional que você já recebe ou venha a buscar.</p></details>
      ${oferta.garantiaDias ? `<details><summary>Como funciona a garantia?</summary><p>${oferta.demonstracao ? "A garantia exibida é ilustrativa. As condições finais deverão constar no checkout." : "O prazo e as condições para pedir reembolso constam no checkout."}</p></details>` : ""}
    </section>

    <section class="close-offer" aria-labelledby="close-title">
      ${symbol}
      <h2 id="close-title">Comece pela dor que apareceu nas suas respostas</h2>
      <p>Um guia para olhar para a sua história com tempo e encontrar uma prática que caiba no seu dia.</p>
      ${price()}
      ${purchaseButton()}
      ${garantia()}
    </section>

    <button class="restart" type="button" data-action="restart">Refazer o quiz</button>
    <div class="sticky-offer">${purchaseButton()}</div>
    ${oferta.demonstracao ? `<dialog id="checkout-demo" aria-labelledby="checkout-title">
      <form method="dialog"><button class="dialog-close" aria-label="Fechar">×</button></form>
      <p class="kicker">Simulação de compra</p>
      <h2 id="checkout-title">${escapeHtml(oferta.titulo)}</h2>
      <p class="muted">Nesta prévia, o botão demonstra o ponto de entrada para a compra. Nenhum pagamento é processado.</p>
      ${price()}
      <a class="primary" href="#amostra" data-action="sample">Voltar para a amostra</a>
    </dialog>` : ""}
  </div>`;
}

function showAnalysis() {
  const meter = stage.querySelector("#analysis-bar");
  const started = performance.now();
  analysisTimer = window.setInterval(() => {
    const percent = Math.min(100, Math.round((performance.now() - started) / 8));
    meter.value = percent;
    if (percent === 100) go(current + 1);
  }, 40);
}

function render() {
  const etapa = etapas[current];
  document.body.dataset.view = etapa.tipo;
  back.hidden = current === 0 || etapa.tipo === "analise";
  progress.hidden = current === 0 || current >= analysisIndex;
  const percent = Math.round(100 * current / (analysisIndex - 1));
  progressStep.textContent = etapa.grupo ?? "";
  progressPercent.textContent = `${Math.min(percent, 100)}%`;
  progressBar.value = Math.min(percent, 100);

  switch (etapa.tipo) {
    case "inicio": stage.innerHTML = inicio(); break;
    case "pausa": stage.innerHTML = pausa(etapa); break;
    case "analise":
      stage.innerHTML = `<div class="screen centered"><div class="symbol-tile">${symbol}</div>
        ${heading("Preparando seu resultado…")}
        <progress id="analysis-bar" value="0" max="100" aria-label="Preparando resultado"></progress>
      </div>`;
      showAnalysis();
      break;
    case "resultado": stage.innerHTML = telaResultado(); break;
    case "caminho": stage.innerHTML = telaCaminho(); break;
    case "oferta": stage.innerHTML = telaOferta(); break;
    default: stage.innerHTML = pergunta(etapa);
  }
}

function go(index) {
  window.clearInterval(analysisTimer);
  current = index;
  render();
  window.scrollTo(0, 0);
  stage.querySelector("#stage-title").focus({ preventScroll: true });
}

back.addEventListener("click", () => go(current - 1 === analysisIndex ? current - 2 : current - 1));

stage.addEventListener("click", event => {
  const control = event.target.closest("[data-choice], [data-action]");
  if (!control) return;
  const etapa = etapas[current];

  if (control.dataset.choice !== undefined) {
    const index = Number(control.dataset.choice);
    const selected = answers.get(etapa.id) ?? [];
    if (etapa.tipo === "multipla") {
      answers.set(etapa.id, selected.includes(index) ? selected.filter(item => item !== index) : [...selected, index]);
    } else {
      answers.set(etapa.id, [index]);
    }
    if (etapa.tipo === "auto") {
      go(current + 1);
      return;
    }
    const updated = answers.get(etapa.id);
    for (const choice of stage.querySelectorAll("[data-choice]")) {
      choice.setAttribute("aria-pressed", updated.includes(Number(choice.dataset.choice)));
    }
    stage.querySelector(".primary").disabled = !updated.length;
    return;
  }

  switch (control.dataset.action) {
    case "next": go(current + 1); break;
    case "purchase": stage.querySelector("#checkout-demo").showModal(); break;
    case "sample": stage.querySelector("#checkout-demo").close(); break;
    case "restart":
      answers.clear();
      go(0);
      break;
  }
});

render();
