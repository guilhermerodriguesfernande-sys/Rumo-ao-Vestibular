// Utilitários de persistência e dados iniciais para o Rumo ao Vestibular

export const INITIAL_ACTIVITIES = [
  {
    id: 'act-1',
    subject: 'Matemática',
    activity: 'Funções Afim e Quadrática',
    day: 'Segunda-feira',
    status: 'Em andamento',
    subjectColor: '#2563eb'
  },
  {
    id: 'act-2',
    subject: 'Português',
    activity: 'Interpretação de texto e figuras de linguagem',
    day: 'Terça-feira',
    status: 'Concluído',
    subjectColor: '#10b981'
  },
  {
    id: 'act-3',
    subject: 'Redação',
    activity: 'Tema da semana: Cidadania e Direitos',
    day: 'Quarta-feira',
    status: 'Pendente',
    subjectColor: '#8b5cf6'
  },
  {
    id: 'act-4',
    subject: 'História',
    activity: 'Brasil Colônia e Economia Açucareira',
    day: 'Quinta-feira',
    status: 'Concluído',
    subjectColor: '#f59e0b'
  },
  {
    id: 'act-5',
    subject: 'Geografia',
    activity: 'Urbanização e Industrialização Brasileira',
    day: 'Sexta-feira',
    status: 'Concluído',
    subjectColor: '#06b6d4'
  }
];

export const INITIAL_SESSIONS = [
  {
    id: 'sess-1',
    subject: 'Matemática',
    durationSeconds: 2700, // 45 min
    date: '10/11/2026 15:30'
  },
  {
    id: 'sess-2',
    subject: 'Português',
    durationSeconds: 1800, // 30 min
    date: '11/11/2026 10:15'
  },
  {
    id: 'sess-3',
    subject: 'Redação',
    durationSeconds: 3000, // 50 min
    date: '11/11/2026 16:40'
  }
];

export const ENEM_THEMES = [
  {
    id: 'theme-1',
    title: 'Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil',
    year: 'ENEM 2023',
    category: 'Sociedade e Direitos'
  },
  {
    id: 'theme-2',
    title: 'Desafios para a valorização de comunidades e povos tradicionais no Brasil',
    year: 'ENEM 2022',
    category: 'Cultura e Cidadania'
  },
  {
    id: 'theme-3',
    title: 'Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil',
    year: 'ENEM 2021',
    category: 'Cidadania e Democracia'
  },
  {
    id: 'theme-4',
    title: 'O estigma associado às doenças mentais na sociedade brasileira',
    year: 'ENEM 2020',
    category: 'Saúde Pública'
  },
  {
    id: 'theme-5',
    title: 'Democratização do acesso ao cinema e à cultura no Brasil',
    year: 'ENEM 2019',
    category: 'Cultura e Educação'
  },
  {
    id: 'theme-6',
    title: 'Inteligência Artificial e a ética no futuro do trabalho juvenil',
    year: 'Proposta Atual',
    category: 'Tecnologia e Ética'
  }
];

export const INITIAL_ESSAYS = [
  {
    id: 'ess-1',
    title: 'A busca pela cidadania através do registro civil',
    theme: 'Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil',
    date: '08/11/2026',
    content: `Na obra modernista "Vidas Secas", de Graciliano Ramos, Fabiano e sua família enfrentam a desumanização gerada pela carência de direitos fundamentais. Fora da ficção, a ausência de registro civil no Brasil contemporâneo reproduz essa invisibilidade, impossibilitando milhões de indivíduos de exercerem sua plena cidadania. Nesse sentido, torna-se premente analisar a omissão governamental e a desinformação social como entraves centrais desse cenário.

Em primeiro lugar, cabe pontuar a ineficiência estatal no alcance às populações vulneráveis. Segundo o filósofo Thomas Hobbes, o Estado possui o dever de garantir a dignidade de seus cidadãos. Contudo, barreiras geográficas e burocráticas impedem que comunidades ribeirinhas e periféricas tenham acesso facilitado aos cartórios.

Portanto, medidas são urgentes para mitigar esse revés. Cabe ao Ministério dos Direitos Humanos, em parceria com os municípios, ampliar os postos móveis de emissão de certidão de nascimento nas áreas periféricas, assegurando que nenhum brasileiro permaneça invisível perante a lei.`
  }
];

export const INITIAL_GOALS = [
  {
    id: 'goal-1',
    title: 'Resolver 50 questões de Matemática (Álgebra e Funções)',
    deadline: '2026-11-20',
    completed: true
  },
  {
    id: 'goal-2',
    title: 'Escrever 2 redações completas no modelo ENEM',
    deadline: '2026-11-25',
    completed: false
  },
  {
    id: 'goal-3',
    title: 'Revisar o resumo de História do Brasil (Período Regencial)',
    deadline: '2026-11-18',
    completed: true
  },
  {
    id: 'goal-4',
    title: 'Realizar simulado de Ciências da Natureza e analisar erros',
    deadline: '2026-11-30',
    completed: false
  }
];

export const SIMULADO_QUESTIONS = [
  {
    id: 1,
    discipline: 'Matemática',
    statement: 'Um estudante organizou seu tempo de estudo de forma que, no primeiro dia, estudou 2 horas e, a cada dia seguinte, aumentou seu estudo em 30 minutos em relação ao dia anterior. Sabendo que manteve esse padrão por 5 dias consecutivos, quantas horas no total ele estudou nesse período?',
    options: [
      { id: 'A', text: '12 horas' },
      { id: 'B', text: '14 horas' },
      { id: 'C', text: '15 horas' },
      { id: 'D', text: '16 horas e 30 minutos' },
      { id: 'E', text: '18 horas' }
    ],
    correctAnswer: 'C',
    explanation: 'Progressão Aritmética: a1 = 2h, r = 0,5h. Os dias foram: 2h + 2,5h + 3h + 3,5h + 4h = 15 horas no total.'
  },
  {
    id: 2,
    discipline: 'Português',
    statement: 'No trecho: "A leitura liberta a mente e transforma o olhar sobre o mundo", a função da linguagem predominante e a relação sintática estabelecida pela conjunção "e" indicam, respectivamente:',
    options: [
      { id: 'A', text: 'Função metalinguística e relação de oposição.' },
      { id: 'B', text: 'Função referencial e relação de adição e consequência.' },
      { id: 'C', text: 'Função fática e relação de causa.' },
      { id: 'D', text: 'Função conativa e relação de condição.' },
      { id: 'E', text: 'Função emotiva e relação de concessão.' }
    ],
    correctAnswer: 'B',
    explanation: 'A frase informa objetivamente (função referencial) e a conjunção "e" coordena duas ações aditivas que culminam em uma consequência positiva.'
  },
  {
    id: 3,
    discipline: 'História',
    statement: 'A Lei de Terras de 1850 no Brasil teve como um dos seus principais impactos socioeconômicos:',
    options: [
      { id: 'A', text: 'A facilitação do acesso à terra para os imigrantes pobres e recém-libertos.' },
      { id: 'B', text: 'A divisão igualitária dos latifúndios no Nordeste açucareiro.' },
      { id: 'C', text: 'A obrigatoriedade da compra como único meio de obter terras públicas, concentrando a posse fundiária na elite.' },
      { id: 'D', text: 'O fim imediato da escravidão nas fazendas cafeeiras do Vale do Paraíba.' },
      { id: 'E', text: 'A estatização completa de todas as propriedades rurais do país.' }
    ],
    correctAnswer: 'C',
    explanation: 'A Lei de Terras de 1850 estabeleceu que as terras públicas só poderiam ser adquiridas por meio de compra, impedindo a posse por posseiros e imigrantes sem capital, consolidando a estrutura fundiária concentrada.'
  },
  {
    id: 4,
    discipline: 'Biologia',
    statement: 'Durante a respiração celular aeróbica, a etapa que ocorre nas cristas mitocondriais e resulta na maior produção de ATP por molécula de glicose é chamada de:',
    options: [
      { id: 'A', text: 'Glicólise.' },
      { id: 'B', text: 'Ciclo de Krebs.' },
      { id: 'C', text: 'Fermentação lática.' },
      { id: 'D', text: 'Fosforilação oxidativa (cadeia respiratória).' },
      { id: 'E', text: 'Ciclo de Calvin.' }
    ],
    correctAnswer: 'D',
    explanation: 'A fosforilação oxidativa ocorre nas cristas mitocondriais e utiliza o fluxo de elétrons e a ATP sintase para gerar a maior fração de ATP da respiração celular.'
  },
  {
    id: 5,
    discipline: 'Geografia',
    statement: 'O processo de crescimento desordenado das cidades sobre áreas periféricas, muitas vezes sem a devida infraestrutura básica e com conurbação entre municípios vizinhos, caracteriza o fenômeno de:',
    options: [
      { id: 'A', text: 'Segregação socioespacial e macrocefalia urbana.' },
      { id: 'B', text: 'Desmetropolização sustentável.' },
      { id: 'C', text: 'Gentrificação centralizada e ruralização.' },
      { id: 'D', text: 'Revolução verde.' },
      { id: 'E', text: 'Êxodo urbano generalizado.' }
    ],
    correctAnswer: 'A',
    explanation: 'O crescimento urbano acelerado no Brasil produziu macrocefalia urbana e intensa segregação socioespacial nas periferias das metrópoles.'
  }
];

export function getStoredData(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.warn(`Erro ao ler localStorage para chave ${key}:`, e);
    return fallback;
  }
}

export function setStoredData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`Erro ao salvar no localStorage para chave ${key}:`, e);
  }
}
