const themes = {
  rejeicao: {
    name: "Rejeição",
    description: "O receio de não ser aceito pode aparecer quando você se cala, se afasta ou se cobra para caber nas expectativas dos outros.",
    prompt: "Em que momento eu me calei por medo de não ser aceito? O que eu gostaria de ter dito?"
  },
  abandono: {
    name: "Abandono",
    description: "O medo de perder um vínculo pode aparecer como busca constante por confirmação ou inquietação quando alguém se distancia.",
    prompt: "Quando senti medo de ficar só, de que apoio eu realmente precisava? A quem eu poderia pedir esse apoio?"
  },
  humilhacao: {
    name: "Humilhação",
    description: "A vergonha pode aparecer como vontade de se esconder, diminuir o que você sente ou evitar situações em que possa ser julgado.",
    prompt: "Que situação me fez sentir vergonha? Como eu falaria com uma pessoa querida que passou pelo mesmo?"
  },
  traicao: {
    name: "Traição",
    description: "Quando confiar parece arriscado, é comum querer prever as decisões dos outros ou assumir tudo para evitar uma nova decepção.",
    prompt: "Em que situação eu tentei controlar tudo? Que acordo claro teria me ajudado a lidar com a incerteza?"
  },
  injustica: {
    name: "Injustiça",
    description: "A sensação de que você precisa fazer tudo certo pode aparecer como autocobrança ou dificuldade de aceitar erros e pedir ajuda.",
    prompt: "Que cobrança eu fiz a mim hoje? O que seria suficiente nessa situação se eu me tratasse com mais gentileza?"
  }
};

const option = (label, theme, icon = "›") => ({ label, theme, icon });
const stages = [
  {
    id: "profile", type: "profile",
    title: "Descubra qual ferida mais aparece na sua história",
    subtitle: "Comece escolhendo como você se identifica.",
    options: [
      { ...option("Homem"), image: "man", symbol: "♂" },
      { ...option("Mulher"), image: "woman", symbol: "♀" }
    ]
  },
  {
    id: "age", type: "ages", title: "Qual é a sua faixa etária?",
    options: ["18 a 29", "30 a 39", "40 a 49", "50 ou mais"].map(label => option(label))
  },
  {
    id: "moment", type: "single", title: "Como você tem se sentido ultimamente?",
    options: [
      option("Evito falar do que sinto por medo de não ser compreendido.", "rejeicao"),
      option("Fico inquieto quando sinto que alguém está se afastando.", "abandono"),
      option("Tenho dificuldade de baixar a guarda depois de me decepcionar.", "traicao"),
      option("Por fora parece que dou conta de tudo, mas a cobrança me cansa.", "injustica")
    ]
  },
  {
    id: "goal", type: "auto", title: "O que você mais gostaria de mudar agora?",
    options: [
      option("Entender por que repito certas reações.", null, "↻"),
      option("Olhar para uma lembrança que ainda dói.", null, "♡"),
      option("Voltar a encontrar espaço para a fé.", null, "✦"),
      option("Melhorar a forma como me relaciono.", null, "↗")
    ]
  },
  {
    id: "phrase", type: "single", title: "Qual destas frases mais se parece com você?",
    options: [
      option("Às vezes acho que preciso mudar quem sou para ser aceito.", "rejeicao"),
      option("Fico revivendo momentos em que me senti exposto.", "humilhacao"),
      option("É mais fácil fazer tudo sozinho do que correr o risco de confiar.", "traicao"),
      option("Mesmo quando faço bastante, sinto que devia ter feito mais.", "injustica")
    ]
  },
  {
    id: "impact", type: "multiple", title: "Onde você percebe mais impacto no dia a dia?",
    options: [
      option("Na liberdade de expressar o que penso.", "rejeicao", "◇"),
      option("Na tranquilidade quando estou só.", "abandono", "☾"),
      option("Na segurança para ser visto e ouvido.", "humilhacao", "✧"),
      option("Na capacidade de confiar nos outros.", "traicao", "♡"),
      option("Na liberdade de descansar ou errar.", "injustica", "≈")
    ]
  },
  {
    id: "past", type: "single", title: "Você já reservou um tempo para entender esse padrão?",
    options: [
      option("Sim, já consegui perceber algumas situações que o despertam."),
      option("Já tentei, mas ainda me sinto confuso sobre o que acontece."),
      option("Conversei com alguém e quero continuar refletindo."),
      option("Esta é uma das primeiras vezes em que paro para pensar nisso.")
    ]
  },
  {
    id: "reaction", type: "single", title: "Quando algo toca num ponto sensível, como você costuma reagir?",
    options: [
      option("Procuro sinais de que a outra pessoa ainda se importa.", "abandono"),
      option("Quero que ninguém perceba o quanto aquilo me afetou.", "humilhacao"),
      option("Tento tomar as rédeas para que nada me surpreenda.", "traicao"),
      option("Repasso tudo na cabeça procurando onde errei.", "injustica")
    ]
  },
  {
    id: "pause", type: "message", icon: "♡", title: "Dê a si um momento de pausa",
    subtitle: "Algumas perguntas podem trazer lembranças. Respire, vá no seu ritmo e escolha o que mais se aproxima da sua experiência de hoje."
  },
  {
    id: "behavior", type: "multiple", title: "Que reações você reconhece em si?",
    options: [
      option("Fico quieto quando tenho receio de não me encaixar.", "rejeicao", "◇"),
      option("Insisto em conversar logo quando sinto alguém distante.", "abandono", "☾"),
      option("Evito me expor por medo de passar vergonha.", "humilhacao", "✧"),
      option("Confiro tudo porque delegar me deixa desconfortável.", "traicao", "♡"),
      option("Tenho dificuldade de aceitar que algo ficou apenas bom.", "injustica", "≈")
    ]
  },
  {
    id: "duration", type: "single", title: "Há quanto tempo você percebe esse padrão?",
    options: [
      option("Comecei a notar há menos de um ano."),
      option("Percebo há alguns anos."),
      option("Reconheço desde a infância ou a adolescência."),
      option("Ainda não consigo dizer.")
    ]
  },
  {
    id: "perspective", type: "message", icon: "✦", title: "Reconhecer um padrão já é um começo",
    subtitle: "Ao dar nome ao que sente, você pode perceber com mais clareza em quais situações precisa de cuidado, espaço ou apoio."
  },
  {
    id: "future", type: "single", title: "Como você gostaria de se sentir daqui para frente?",
    options: [
      option("Mais à vontade para ser quem sou.", "rejeicao", "◇"),
      option("Mais seguro nos meus vínculos e quando estou só.", "abandono", "☾"),
      option("Mais livre para falar sobre o que sinto.", "humilhacao", "✧"),
      option("Mais aberto a confiar e pedir ajuda.", "traicao", "♡"),
      option("Mais tranquilo diante dos meus próprios erros.", "injustica", "≈")
    ]
  },
  {
    id: "pattern", type: "single", title: "Em uma relação importante, o que mais mexe com você?",
    options: [
      option("Sentir que não sou bem-vindo.", "rejeicao"),
      option("Perceber que a pessoa está se afastando.", "abandono"),
      option("Ser exposto ou ridicularizado.", "humilhacao"),
      option("Descobrir que um combinado não foi respeitado.", "traicao"),
      option("Ser cobrado de forma que considero injusta.", "injustica")
    ]
  },
  {
    id: "ready", type: "auto", title: "Quer ver o que suas respostas sugerem?",
    options: [
      option("Sim, quero ver meu resultado.", null, "✓"),
      option("Sim, quero refletir sobre minhas respostas.", null, "✦")
    ]
  },
  { id: "analysis", type: "analysis", title: "Organizando suas respostas…" },
  { id: "result", type: "result" },
  { id: "plan", type: "plan", title: "Seu próximo passo" }
];

const stage = document.querySelector("#stage");
const back = document.querySelector("#back");
const progress = document.querySelector("#progress-bar");
const progressStep = document.querySelector("#progress-step");
const progressPercent = document.querySelector("#progress-percent");
const answers = new Map();
const analysisIndex = stages.findIndex(({ type }) => type === "analysis");
const scoredSteps = stages.filter(item => item.options?.some(choice => choice.theme)).length;
let current = 0;
let analysisTimer;

function headline(title, subtitle = "") {
  return `<header class="screen-header">
    <h1 id="stage-title" tabindex="-1">${title}</h1>
    ${subtitle ? `<p class="muted">${subtitle}</p>` : ""}
  </header>`;
}

function primary(label, action = "next", disabled = false) {
  return `<button type="button" class="primary" data-action="${action}" ${disabled ? "disabled" : ""}>
    ${label} <span aria-hidden="true">→</span>
  </button>`;
}

function textButton(label, action, className = "text-button") {
  return `<button type="button" class="${className}" data-action="${action}">${label}</button>`;
}

function optionMarkup(choice, index, item, selected) {
  if (item.type === "profile") {
    return `<button type="button" class="profile" data-choice="${index}">
      <span class="portrait portrait--${choice.image}" data-symbol="${choice.symbol}" aria-hidden="true"></span>
      <span class="profile-label">${choice.label}<span aria-hidden="true">→</span></span>
    </button>`;
  }

  const multiple = item.type === "multiple";
  const confirm = multiple || item.type === "single";
  const age = item.type === "ages";
  return `<button type="button" class="choice" data-choice="${index}" ${confirm ? `aria-pressed="${selected}"` : ""}>
    ${age ? "" : `<span class="choice-symbol" aria-hidden="true">${choice.icon}</span>`}
    <span>${choice.label}</span>
    <span class="choice-end ${multiple ? "check" : ""}" aria-hidden="true">${selected ? "✓" : multiple ? "" : "›"}</span>
  </button>`;
}

function question(item) {
  const selected = answers.get(item.id) ?? [];
  const grid = item.type === "profile" ? "profile-grid" : item.type === "ages" ? "ages" : "";
  const confirm = item.type === "single" || item.type === "multiple";
  const subtitle = item.subtitle ?? (item.type === "multiple" ? "Você pode marcar mais de uma opção." : item.type === "single" ? "Escolha a opção que mais combina com você." : "");
  return `<div class="screen">
    ${headline(item.title, subtitle)}
    <div class="choices ${grid}" role="group" aria-labelledby="stage-title">
      ${item.options.map((choice, index) => optionMarkup(choice, index, item, selected.includes(index))).join("")}
    </div>
    ${confirm ? primary("Continuar", "next", !selected.length) : ""}
    ${grid ? textButton("Prefiro não responder", "skip", "skip") : ""}
    ${item.type === "profile" ? '<p class="time"><span aria-hidden="true">◷</span> Cerca de 2 minutos</p>' : ""}
  </div>`;
}

function ranking() {
  const counts = Object.fromEntries(Object.keys(themes).map(key => [key, 0]));
  for (const item of stages) {
    const matched = new Set((answers.get(item.id) ?? []).map(index => item.options[index].theme));
    for (const theme of matched) {
      if (theme) counts[theme] += 1;
    }
  }
  const pattern = stages.find(item => item.id === "pattern");
  const priority = pattern.options[answers.get(pattern.id)?.[0]]?.theme;
  return Object.keys(themes).sort((a, b) => counts[b] - counts[a] || Number(b === priority) - Number(a === priority))
    .map(key => ({ ...themes[key], count: counts[key] }));
}

function result() {
  const ranked = ranking();
  const lead = ranked[0];
  const tied = ranked.filter(theme => theme.count === lead.count);
  const title = tied.length === 1 ? `Em destaque: <strong>${lead.name}</strong>` : "Temas em destaque";
  const intro = tied.length === 1 ? lead.description : `As suas respostas apontaram com a mesma frequência para: ${tied.map(theme => theme.name.toLowerCase()).join(", ")}.`;
  return `<div class="screen">
    <div class="screen-icon" aria-hidden="true">♡</div>
    ${headline(title)}
    <p class="muted result-intro">${intro}</p>
    <ul class="result-list" aria-label="Menções a cada tema nas respostas">
      ${ranked.map(({ name, count }) => `<li class="result-row">
        <span>${name}</span><span class="result-bar" aria-hidden="true">
          <span class="result-fill" style="width:${100 * count / scoredSteps}%"></span>
        </span><span aria-label="${count} de ${scoredSteps} respostas">${count}</span>
      </li>`).join("")}
    </ul>
    <p class="result-note">As barras mostram quantas respostas se relacionam com cada tema. Resultado de reflexão pessoal, sem finalidade clínica.</p>
    ${primary("Ver meu próximo passo")}
  </div>`;
}

function plan(item) {
  const [lead] = ranking();
  return `<div class="screen">
    <div class="screen-icon" aria-hidden="true">✦</div>
    ${headline(item.title, "Reserve alguns minutos e escolha um momento em que possa pensar com calma.")}
    <ol class="plan-list">
      <li><strong>1. Observe</strong><p class="muted">Lembre de uma situação recente ligada ao tema ${lead.name.toLowerCase()}. O que aconteceu antes da sua reação?</p></li>
      <li><strong>2. Escreva</strong><p class="muted">${lead.prompt}</p></li>
      <li><strong>3. Escolha uma pequena ação</strong><p class="muted">Pode ser conversar com alguém de confiança, fazer uma oração ou guardar uma pergunta para retomar amanhã.</p></li>
    </ol>
    <details class="practice">
      <summary>Uma oração para começar</summary>
      <p class="muted">Deus, ajuda-me a olhar para minha história com verdade e gentileza. Dá-me coragem para reconhecer o que sinto e sabedoria para dar o próximo passo.</p>
    </details>
    ${primary("Refazer o quiz", "restart")}
  </div>`;
}

function showAnalysis() {
  const meter = stage.querySelector("#analysis-bar");
  const value = stage.querySelector("#analysis-value");
  const started = performance.now();
  analysisTimer = window.setInterval(() => {
    const percent = Math.min(100, Math.round((performance.now() - started) / 13));
    meter.value = percent;
    value.textContent = `${percent}%`;
    if (percent === 100) go(current + 1);
  }, 50);
}

function render() {
  const item = stages[current];
  const finished = current >= analysisIndex;
  const percent = Math.round(100 * Math.min(current + 1, analysisIndex) / analysisIndex);
  back.hidden = current === 0 || item.type === "analysis";
  progressStep.textContent = finished ? "Quiz concluído" : `Etapa ${current + 1} de ${analysisIndex}`;
  progressPercent.textContent = `${percent}%`;
  progress.value = percent;

  if (item.type === "analysis") {
    stage.innerHTML = `<div class="screen interlude analysis">
      <div class="screen-icon" aria-hidden="true">✦</div>
      ${headline(item.title)}
      <progress id="analysis-bar" value="0" max="100" aria-label="Progresso da análise"></progress>
      <output id="analysis-value" aria-hidden="true">0%</output>
    </div>`;
    showAnalysis();
  } else if (item.type === "message") {
    stage.innerHTML = `<div class="screen interlude">
      <div class="screen-icon" aria-hidden="true">${item.icon}</div>
      ${headline(item.title, item.subtitle)}
      ${primary("Continuar")}
    </div>`;
  } else if (item.type === "result") {
    stage.innerHTML = result();
  } else if (item.type === "plan") {
    stage.innerHTML = plan(item);
  } else {
    stage.innerHTML = question(item);
  }
}

function go(index) {
  window.clearInterval(analysisTimer);
  current = index;
  render();
  window.scrollTo(0, 0);
  stage.querySelector("#stage-title").focus({ preventScroll: true });
}

back.addEventListener("click", () => {
  const previous = current - 1;
  go(previous === analysisIndex ? previous - 1 : previous);
});

stage.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;
  const item = stages[current];

  if (button.dataset.choice !== undefined) {
    const index = Number(button.dataset.choice);
    const selected = answers.get(item.id) ?? [];
    const multiple = item.type === "multiple";
    const updated = multiple
      ? selected.includes(index) ? selected.filter(choice => choice !== index) : [...selected, index]
      : [index];
    answers.set(item.id, updated);

    if (item.type === "single" || multiple) {
      for (const choice of stage.querySelectorAll("[data-choice]")) {
        const pressed = updated.includes(Number(choice.dataset.choice));
        choice.setAttribute("aria-pressed", pressed);
        choice.querySelector(".choice-end").textContent = pressed ? "✓" : multiple ? "" : "›";
      }
      stage.querySelector(".primary").disabled = updated.length === 0;
    } else {
      go(current + 1);
    }
    return;
  }

  switch (button.dataset.action) {
    case "skip":
      answers.delete(item.id);
      go(current + 1);
      break;
    case "next":
      go(current + 1);
      break;
    case "restart":
      answers.clear();
      go(0);
      break;
  }
});

render();
