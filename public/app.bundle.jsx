// Rumo ao Vestibular – Bundle Standalone Funcional para Apresentação TCC
const { useState, useEffect } = React;

// --- src/utils/storage.js ---
// Utilitários de persistência e dados iniciais para o Rumo ao Vestibular

const INITIAL_ACTIVITIES = [
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

const INITIAL_SESSIONS = [
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

const ENEM_THEMES = [
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

const INITIAL_ESSAYS = [
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

const INITIAL_GOALS = [
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

const SIMULADO_QUESTIONS = [
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

function getStoredData(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.warn(`Erro ao ler localStorage para chave ${key}:`, e);
    return fallback;
  }
}

function setStoredData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`Erro ao salvar no localStorage para chave ${key}:`, e);
  }
}


// --- src/components/Icons.jsx ---


function GraduationCap({ size = 24, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function Home({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BookOpen({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function BarChart2({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
    </svg>
  );
}

function PenLine({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      <path d="m15 5 3 3" />
    </svg>
  );
}

function FileText({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

function Target({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function Mountain({ size = 24, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function User({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ChevronDown({ size = 16, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronRight({ size = 16, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ArrowRight({ size = 16, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowLeft({ size = 16, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function Calendar({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function Clock({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function Menu({ size = 24, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function X({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function Play({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function Pause({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function RotateCcw({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

function Plus({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function Trash2({ size = 18, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}

function Check({ size = 18, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CheckCircle2({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function XCircle({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}

function Lightbulb({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function Award({ size = 20, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}


// --- src/components/Sidebar.jsx ---



function Sidebar({ isOpen, onClose, currentView, onNavigate }) {
  const menuItems = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'plano', label: 'Plano de Estudos', icon: BookOpen },
    { id: 'desempenho', label: 'Desempenho', icon: BarChart2 },
    { id: 'redacao', label: 'Redação', icon: PenLine },
    { id: 'simulados', label: 'Simulados', icon: FileText },
    { id: 'metas', label: 'Metas', icon: Target },
  ];

  const handleItemClick = (e, id) => {
    e.preventDefault();
    onNavigate(id);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Backdrop para mobile */}
      {isOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={onClose} 
          aria-hidden="true" 
        />
      )}

      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        {/* Mobile close button */}
        <button 
          className="sidebar-close-btn" 
          onClick={onClose}
          aria-label="Fechar menu lateral"
        >
          <X size={20} />
        </button>

        {/* Brand / Logo */}
        <div 
          className="sidebar-brand" 
          onClick={(e) => handleItemClick(e, 'inicio')}
          style={{ cursor: 'pointer' }}
          title="Ir para Início"
        >
          <div className="brand-icon-wrapper">
            <GraduationCap className="brand-icon" size={26} strokeWidth={2.2} />
          </div>
          <div className="brand-text">
            <h1 className="brand-title">Rumo ao Vestibular</h1>
            <span className="brand-subtitle">Plano Estuda+</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleItemClick(e, item.id)}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    title={item.label}
                  >
                    <Icon className="nav-icon" size={20} />
                    <span className="nav-label">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer Area */}
        <div className="sidebar-footer">
          <div className="footer-mountain-box">
            <Mountain size={28} className="mountain-icon" strokeWidth={1.8} />
          </div>
          <p className="footer-quote">
            “Grandes conquistas começam com pequenas escolhas diárias.”
          </p>
          <div className="footer-brand-sub">
            <div className="footer-brand-name">Rumo ao Vestibular</div>
            <div className="footer-brand-plan">Plano Estuda+</div>
          </div>
        </div>
      </aside>
    </>
  );
}


// --- src/components/Header.jsx ---



function Header({ onToggleSidebar, onNavigate }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('inicio');
  };

  return (
    <header className="top-header">
      <div className="header-left">
        <button 
          className="mobile-menu-trigger" 
          onClick={onToggleSidebar}
          aria-label="Abrir menu de navegação"
        >
          <Menu size={22} />
        </button>
      </div>

      <div className="header-right">
        <button 
          className="user-profile-badge" 
          onClick={handleClick}
          title="Estudante conectado: Guilherme (Clique para ir ao Início)"
        >
          <div className="user-avatar">
            <User size={18} className="user-icon" />
          </div>
          <span className="user-name">Olá, Guilherme!</span>
          <ChevronDown size={16} className="user-chevron" />
        </button>
      </div>
    </header>
  );
}


// --- src/components/Banner.jsx ---


function Banner() {
  return (
    <section className="banner-card">
      <div className="banner-content">
        <span className="banner-tag">RUMO AO VESTIBULAR</span>
        <h2 className="banner-greeting">Olá, Guilherme!</h2>
        <h3 className="banner-heading">Pronto para continuar seus estudos?</h3>
        <p className="banner-description">
          Aqui você encontra tudo o que precisa para se organizar, acompanhar seu progresso e chegar mais perto do seu objetivo.
        </p>
      </div>

      <div className="banner-visual">
        <div className="banner-quote-wrapper">
          <span className="banner-handwritten">Seu futuro começa agora!</span>
          <svg className="banner-handwritten-swoosh" viewBox="0 0 140 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 14C35 4 80 3 136 12" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="banner-image-container">
          <img 
            src="/banner-books.png" 
            alt="Mesa de estudos com livros, caderno e canetas" 
            className="banner-image"
          />
        </div>
      </div>
    </section>
  );
}


// --- src/components/ProgressCard.jsx ---



function ProgressCard({ percentage = 72, onNavigate }) {
  const handleDetailsClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('desempenho');
  };

  return (
    <div className="card progress-overview-card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-title-icon-wrapper target-icon-bg">
            <Target size={18} className="card-title-icon" />
          </div>
          <h3 className="card-title">Seu progresso geral</h3>
        </div>
        <a 
          href="#desempenho" 
          onClick={handleDetailsClick} 
          className="card-action-link"
          title="Ver detalhes do progresso geral"
        >
          Ver detalhes <ArrowRight size={14} className="arrow-icon" />
        </a>
      </div>

      <div className="progress-content">
        <div className="progress-value-row">
          <span className="progress-large-number">{percentage}%</span>
        </div>

        <div className="progress-bar-track" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-bar-fill main-fill" style={{ width: `${percentage}%` }}></div>
        </div>

        <p className="progress-motivational-text">
          {percentage >= 70 ? 'Você está indo bem! Continue assim.' : 'Mantenha o foco e cumpra suas atividades diárias!'}
        </p>
      </div>
    </div>
  );
}


// --- src/components/RoutineCard.jsx ---



function RoutineCard({ activities = [], onToggleStatus, onNavigate }) {
  // Pegar as 3 primeiras atividades para a rotina de hoje
  const displayItems = activities.slice(0, 3);

  const getStatusColor = (status) => {
    if (status === 'Concluído') return 'success';
    if (status === 'Em andamento') return 'warning';
    return 'purple';
  };

  const handleRowClick = (item) => {
    if (onToggleStatus) {
      onToggleStatus(item.id);
    }
  };

  const handleHeaderClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('plano');
  };

  return (
    <div className="card routine-card">
      <div className="card-header">
        <div 
          className="card-title-group"
          onClick={handleHeaderClick}
          style={{ cursor: 'pointer' }}
          title="Ver plano de estudos completo"
        >
          <div className="card-title-icon-wrapper calendar-icon-bg">
            <Calendar size={18} className="card-title-icon" />
          </div>
          <h3 className="card-title">Sua rotina de hoje</h3>
        </div>
        <span className="routine-sample-date">16 de setembro de 2025</span>
      </div>

      <div className="routine-table-wrapper">
        <div className="routine-table-header">
          <span className="col-subject">Matéria</span>
          <span className="col-activity">Atividade</span>
          <span className="col-status">Status</span>
          <span className="col-action"></span>
        </div>

        <div className="routine-list">
          {displayItems.length === 0 ? (
            <div className="empty-routine-note">
              Nenhuma atividade cadastrada. Clique para adicionar ao seu Plano de Estudos.
            </div>
          ) : (
            displayItems.map((item) => (
              <div 
                key={item.id} 
                className="routine-row"
                onClick={() => handleRowClick(item)}
                role="button"
                tabIndex={0}
                title="Clique para alternar o status da atividade"
              >
                <div className="col-subject subject-name-cell">
                  <span 
                    className="subject-bullet" 
                    style={{ backgroundColor: item.subjectColor || '#2563eb' }}
                    aria-hidden="true"
                  />
                  <span className="subject-label">{item.subject}</span>
                </div>

                <div className="col-activity activity-text">
                  {item.activity}
                </div>

                <div className="col-status">
                  <span className={`status-badge status-${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>

                <div className="col-action">
                  <ChevronRight size={16} className="routine-row-chevron" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}


// --- src/components/SubjectProgress.jsx ---



function SubjectProgress({ onNavigate }) {
  const subjects = [
    { name: 'Matemática', progress: 65, color: '#2563eb' },
    { name: 'Português', progress: 48, color: '#10b981' },
    { name: 'Redação', progress: 32, color: '#8b5cf6' },
    { name: 'História', progress: 58, color: '#f59e0b' },
    { name: 'Geografia', progress: 70, color: '#06b6d4' }
  ];

  const handleDetailsClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('desempenho');
  };

  return (
    <div className="card subject-progress-card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-title-icon-wrapper chart-icon-bg">
            <BarChart2 size={18} className="card-title-icon" />
          </div>
          <h3 className="card-title">Sua evolução por matéria</h3>
        </div>
        <a 
          href="#desempenho" 
          onClick={handleDetailsClick} 
          className="card-action-link"
          title="Ver desempenho completo"
        >
          Ver desempenho <ArrowRight size={14} className="arrow-icon" />
        </a>
      </div>

      <div className="subject-grid">
        {subjects.map((item) => (
          <div 
            key={item.name} 
            className="subject-mini-card"
            onClick={handleDetailsClick}
            style={{ cursor: 'pointer' }}
            title={`Clique para ver desempenho em ${item.name}`}
          >
            <span className="subject-mini-name">{item.name}</span>
            <span className="subject-mini-percent">{item.progress}%</span>
            <div 
              className="mini-progress-track" 
              role="progressbar" 
              aria-valuenow={item.progress} 
              aria-valuemin={0} 
              aria-valuemax={100}
            >
              <div 
                className="mini-progress-fill" 
                style={{ 
                  width: `${item.progress}%`,
                  backgroundColor: item.color 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// --- src/components/FeatureCard.jsx ---



function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = 'blue',
  onClick
}) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick();
  };

  return (
    <div 
      className={`feature-card feature-variant-${variant}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      title={`Acessar ${title}`}
    >
      <div className="feature-icon-wrapper">
        <Icon size={24} className="feature-icon" strokeWidth={2} />
      </div>

      <div className="feature-info">
        <h4 className="feature-title">{title}</h4>
        <p className="feature-description">{description}</p>
      </div>

      <div className="feature-arrow-wrapper">
        <ArrowRight size={18} className="feature-arrow" />
      </div>
    </div>
  );
}


// --- src/components/views/PlanoEstudosView.jsx ---



function PlanoEstudosView({ activities, onUpdateActivities, onNavigate }) {
  const [subject, setSubject] = useState('Matemática');
  const [customSubject, setCustomSubject] = useState('');
  const [activity, setActivity] = useState('');
  const [day, setDay] = useState('Segunda-feira');
  const [filter, setFilter] = useState('todos');

  const defaultSubjects = [
    { name: 'Matemática', color: '#2563eb' },
    { name: 'Português', color: '#10b981' },
    { name: 'Redação', color: '#8b5cf6' },
    { name: 'História', color: '#f59e0b' },
    { name: 'Geografia', color: '#06b6d4' },
    { name: 'Física', color: '#ef4444' },
    { name: 'Química', color: '#ec4899' },
    { name: 'Biologia', color: '#14b8a6' },
    { name: 'Outra...', color: '#64748b' }
  ];

  const daysOfWeek = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
  ];

  const handleAddActivity = (e) => {
    e.preventDefault();
    if (!activity.trim()) return;

    const chosenSubject = subject === 'Outra...' ? (customSubject.trim() || 'Geral') : subject;
    const foundColor = defaultSubjects.find(s => s.name === chosenSubject)?.color || '#2563eb';

    const newActivity = {
      id: 'act-' + Date.now(),
      subject: chosenSubject,
      activity: activity.trim(),
      day: day,
      status: 'Pendente',
      subjectColor: foundColor
    };

    onUpdateActivities([newActivity, ...activities]);
    setActivity('');
    if (subject === 'Outra...') setCustomSubject('');
  };

  const handleToggleStatus = (id) => {
    const updated = activities.map(item => {
      if (item.id === id) {
        const nextStatus = item.status === 'Concluído' ? 'Pendente' : 'Concluído';
        return { ...item, status: nextStatus };
      }
      return item;
    });
    onUpdateActivities(updated);
  };

  const handleDelete = (id) => {
    const updated = activities.filter(item => item.id !== id);
    onUpdateActivities(updated);
  };

  const completedCount = activities.filter(a => a.status === 'Concluído').length;
  const pendingCount = activities.length - completedCount;

  const filteredActivities = activities.filter(item => {
    if (filter === 'concluidos') return item.status === 'Concluído';
    if (filter === 'pendentes') return item.status !== 'Concluído';
    return true;
  });

  return (
    <div className="view-container">
      {/* Top Header da Seção */}
      <div className="view-header">
        <button 
          className="btn-back" 
          onClick={() => onNavigate('inicio')}
          title="Voltar ao Início"
        >
          <ArrowLeft size={18} /> Voltar ao Painel
        </button>

        <div className="view-header-title-box">
          <div className="view-icon-badge badge-blue">
            <BookOpen size={24} />
          </div>
          <div>
            <h2 className="view-title">Plano de Estudos</h2>
            <p className="view-subtitle">Organize suas matérias, assuntos e acompanhe suas atividades diárias.</p>
          </div>
        </div>

        {/* Mini contadores */}
        <div className="view-stats-row">
          <div className="stat-pill">
            <span className="stat-pill-label">Total de Atividades</span>
            <span className="stat-pill-val">{activities.length}</span>
          </div>
          <div className="stat-pill stat-pill-success">
            <span className="stat-pill-label">Concluídas</span>
            <span className="stat-pill-val">{completedCount}</span>
          </div>
          <div className="stat-pill stat-pill-warning">
            <span className="stat-pill-label">Pendentes</span>
            <span className="stat-pill-val">{pendingCount}</span>
          </div>
        </div>
      </div>

      <div className="view-grid-layout">
        {/* Formulário de Cadastro */}
        <div className="card form-card">
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-title-icon-wrapper target-icon-bg">
                <Plus size={18} className="card-title-icon" />
              </div>
              <h3 className="card-title">Nova Atividade</h3>
            </div>
          </div>

          <form onSubmit={handleAddActivity} className="app-form">
            <div className="form-group">
              <label className="form-label">Matéria</label>
              <select 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                className="form-control"
              >
                {defaultSubjects.map(s => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            {subject === 'Outra...' && (
              <div className="form-group">
                <label className="form-label">Nome da Matéria</label>
                <input 
                  type="text" 
                  value={customSubject} 
                  onChange={(e) => setCustomSubject(e.target.value)} 
                  placeholder="Ex: Filosofia ou Literatura"
                  className="form-control"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Assunto a estudar</label>
              <input 
                type="text" 
                value={activity} 
                onChange={(e) => setActivity(e.target.value)} 
                placeholder="Ex: Termodinâmica e Calorimetria" 
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Dia de Estudo</label>
              <select 
                value={day} 
                onChange={(e) => setDay(e.target.value)} 
                className="form-control"
              >
                {daysOfWeek.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              <Plus size={18} /> Adicionar Atividade
            </button>
          </form>
        </div>

        {/* Lista de Atividades */}
        <div className="card list-card">
          <div className="card-header-with-filters">
            <div className="card-title-group">
              <div className="card-title-icon-wrapper calendar-icon-bg">
                <Calendar size={18} className="card-title-icon" />
              </div>
              <h3 className="card-title">Cronograma de Estudos</h3>
            </div>

            <div className="filter-buttons">
              <button 
                className={`filter-btn ${filter === 'todos' ? 'active' : ''}`}
                onClick={() => setFilter('todos')}
              >
                Todos ({activities.length})
              </button>
              <button 
                className={`filter-btn ${filter === 'pendentes' ? 'active' : ''}`}
                onClick={() => setFilter('pendentes')}
              >
                Pendentes ({pendingCount})
              </button>
              <button 
                className={`filter-btn ${filter === 'concluidos' ? 'active' : ''}`}
                onClick={() => setFilter('concluidos')}
              >
                Concluídos ({completedCount})
              </button>
            </div>
          </div>

          {filteredActivities.length === 0 ? (
            <div className="empty-state">
              <p>Nenhuma atividade encontrada neste filtro.</p>
            </div>
          ) : (
            <div className="activities-table">
              {filteredActivities.map((item) => {
                const isDone = item.status === 'Concluído';
                return (
                  <div key={item.id} className={`activity-row ${isDone ? 'activity-done' : ''}`}>
                    <div className="activity-main">
                      <button 
                        className={`btn-check-toggle ${isDone ? 'checked' : ''}`}
                        onClick={() => handleToggleStatus(item.id)}
                        title={isDone ? 'Marcar como pendente' : 'Marcar como concluída'}
                      >
                        {isDone && <Check size={14} strokeWidth={3} />}
                      </button>

                      <div className="activity-details">
                        <div className="activity-title-line">
                          <span 
                            className="subject-bullet" 
                            style={{ backgroundColor: item.subjectColor || '#2563eb' }}
                          />
                          <span className="activity-subject-badge">{item.subject}</span>
                          <span className="activity-day-tag">{item.day}</span>
                        </div>
                        <p className={`activity-text-name ${isDone ? 'line-through' : ''}`}>
                          {item.activity}
                        </p>
                      </div>
                    </div>

                    <div className="activity-actions">
                      <span className={`status-badge ${isDone ? 'status-success' : 'status-warning'}`}>
                        {item.status}
                      </span>
                      <button 
                        className="btn-icon-danger"
                        onClick={() => handleDelete(item.id)}
                        title="Excluir atividade"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


// --- src/components/views/TempoEstudoView.jsx ---



function TempoEstudoView({ sessions, onUpdateSessions, onNavigate }) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('Matemática');

  const subjects = [
    'Matemática',
    'Português',
    'Redação',
    'História',
    'Geografia',
    'Física',
    'Química',
    'Biologia'
  ];

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const handleSaveSession = () => {
    if (seconds < 5) {
      alert('Estude pelo menos alguns segundos antes de registrar a sessão!');
      return;
    }

    const now = new Date();
    const dateFormatted = now.toLocaleDateString('pt-BR') + ' ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    const newSession = {
      id: 'sess-' + Date.now(),
      subject: selectedSubject,
      durationSeconds: seconds,
      date: dateFormatted
    };

    onUpdateSessions([newSession, ...sessions]);
    resetTimer();
  };

  const handleDeleteSession = (id) => {
    onUpdateSessions(sessions.filter(s => s.id !== id));
  };

  const formatTime = (totalSec) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDurationFriendly = (totalSec) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    if (hrs > 0) return `${hrs}h ${mins}m`;
    if (mins > 0) return `${mins}m ${secs}s`;
    return `${secs}s`;
  };

  const totalStudiedSeconds = sessions.reduce((acc, curr) => acc + (curr.durationSeconds || 0), 0) + seconds;

  return (
    <div className="view-container">
      <div className="view-header">
        <button 
          className="btn-back" 
          onClick={() => onNavigate('inicio')}
          title="Voltar ao Início"
        >
          <ArrowLeft size={18} /> Voltar ao Painel
        </button>

        <div className="view-header-title-box">
          <div className="view-icon-badge badge-green">
            <Clock size={24} />
          </div>
          <div>
            <h2 className="view-title">Tempo de Estudo</h2>
            <p className="view-subtitle">Controle o tempo dedicado aos seus estudos com cronômetro em tempo real e histórico.</p>
          </div>
        </div>

        <div className="view-stats-row">
          <div className="stat-pill stat-pill-success">
            <span className="stat-pill-label">Tempo Total Acumulado</span>
            <span className="stat-pill-val">{formatDurationFriendly(totalStudiedSeconds)}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-label">Sessões Registradas</span>
            <span className="stat-pill-val">{sessions.length}</span>
          </div>
        </div>
      </div>

      <div className="view-grid-layout">
        {/* Painel do Cronômetro */}
        <div className="card stopwatch-card">
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-title-icon-wrapper calendar-icon-bg">
                <Clock size={18} className="card-title-icon" />
              </div>
              <h3 className="card-title">Cronômetro de Foco</h3>
            </div>
            <span className={`timer-status-pill ${isActive ? 'timer-active' : ''}`}>
              {isActive ? 'Estudando agora...' : 'Pausado'}
            </span>
          </div>

          <div className="stopwatch-display">
            <div className="time-digits">{formatTime(seconds)}</div>
          </div>

          <div className="form-group timer-subject-select">
            <label className="form-label">Qual matéria você está estudando?</label>
            <select 
              value={selectedSubject} 
              onChange={(e) => setSelectedSubject(e.target.value)} 
              className="form-control"
              disabled={isActive}
            >
              {subjects.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="timer-controls">
            <button 
              className={`btn ${isActive ? 'btn-warning' : 'btn-primary'} btn-lg`}
              onClick={toggleTimer}
            >
              {isActive ? (
                <>
                  <Pause size={18} /> Pausar
                </>
              ) : (
                <>
                  <Play size={18} /> {seconds > 0 ? 'Continuar' : 'Iniciar'}
                </>
              )}
            </button>

            <button 
              className="btn btn-secondary btn-lg"
              onClick={resetTimer}
              disabled={seconds === 0}
            >
              <RotateCcw size={18} /> Zerar
            </button>

            <button 
              className="btn btn-success btn-lg"
              onClick={handleSaveSession}
              disabled={seconds < 5}
            >
              <CheckCircle2 size={18} /> Salvar Sessão
            </button>
          </div>
        </div>

        {/* Histórico das Sessões */}
        <div className="card list-card">
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-title-icon-wrapper target-icon-bg">
                <Clock size={18} className="card-title-icon" />
              </div>
              <h3 className="card-title">Histórico de Sessões</h3>
            </div>
          </div>

          {sessions.length === 0 ? (
            <div className="empty-state">
              <p>Nenhuma sessão registrada ainda. Inicie o cronômetro para marcar seus estudos!</p>
            </div>
          ) : (
            <div className="sessions-list">
              {sessions.map((sess) => (
                <div key={sess.id} className="session-item">
                  <div className="session-info">
                    <span className="session-subject">{sess.subject}</span>
                    <span className="session-date">{sess.date}</span>
                  </div>

                  <div className="session-right">
                    <span className="session-duration-badge">
                      {formatDurationFriendly(sess.durationSeconds)}
                    </span>
                    <button 
                      className="btn-icon-danger"
                      onClick={() => handleDeleteSession(sess.id)}
                      title="Excluir registro"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


// --- src/components/views/RedacaoView.jsx ---




function RedacaoView({ essays, onUpdateEssays, onNavigate }) {
  const [currentId, setCurrentId] = useState(null);
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState('');
  const [content, setContent] = useState('');
  const [saveFeedback, setSaveFeedback] = useState(false);

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const charCount = content.length;
  const lineCount = content ? content.split('\n').filter(l => l.trim().length > 0).length : 0;

  const handleSelectTheme = (selectedTheme) => {
    setTheme(selectedTheme.title);
    if (!title) {
      setTitle('Redação: ' + selectedTheme.title.slice(0, 35) + '...');
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      alert('Escreva algo na sua redação antes de salvar!');
      return;
    }

    const now = new Date();
    const dateFormatted = now.toLocaleDateString('pt-BR');

    if (currentId) {
      // Edit existing
      const updated = essays.map(item => {
        if (item.id === currentId) {
          return {
            ...item,
            title: title.trim() || 'Redação Sem Título',
            theme: theme.trim() || 'Tema Livre',
            content: content,
            date: dateFormatted
          };
        }
        return item;
      });
      onUpdateEssays(updated);
    } else {
      // New essay
      const newEssay = {
        id: 'ess-' + Date.now(),
        title: title.trim() || 'Redação Sem Título',
        theme: theme.trim() || 'Tema Livre',
        content: content,
        date: dateFormatted
      };
      onUpdateEssays([newEssay, ...essays]);
      setCurrentId(newEssay.id);
    }

    setSaveFeedback(true);
    setTimeout(() => setSaveFeedback(false), 2500);
  };

  const handleNewEssay = () => {
    setCurrentId(null);
    setTitle('');
    setTheme('');
    setContent('');
  };

  const handleLoadEssay = (essay) => {
    setCurrentId(essay.id);
    setTitle(essay.title);
    setTheme(essay.theme);
    setContent(essay.content);
  };

  const handleDeleteEssay = (id, e) => {
    e.stopPropagation();
    if (currentId === id) {
      handleNewEssay();
    }
    onUpdateEssays(essays.filter(ess => ess.id !== id));
  };

  return (
    <div className="view-container">
      <div className="view-header">
        <button 
          className="btn-back" 
          onClick={() => onNavigate('inicio')}
          title="Voltar ao Início"
        >
          <ArrowLeft size={18} /> Voltar ao Painel
        </button>

        <div className="view-header-title-box">
          <div className="view-icon-badge badge-purple">
            <PenLine size={24} />
          </div>
          <div>
            <h2 className="view-title">Laboratório de Redação</h2>
            <p className="view-subtitle">Pratique redações dissertativo-argumentativas com temas reais do ENEM e contagem de palavras em tempo real.</p>
          </div>
        </div>

        <div className="view-stats-row">
          <div className="stat-pill stat-pill-purple">
            <span className="stat-pill-label">Palavras Escritas</span>
            <span className="stat-pill-val">{wordCount}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-label">Caracteres</span>
            <span className="stat-pill-val">{charCount}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-label">Redações Salvas</span>
            <span className="stat-pill-val">{essays.length}</span>
          </div>
        </div>
      </div>

      <div className="view-grid-layout">
        {/* Editor de Redação */}
        <div className="card essay-editor-card">
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-title-icon-wrapper chart-icon-bg">
                <PenLine size={18} className="card-title-icon" />
              </div>
              <h3 className="card-title">{currentId ? 'Editar Redação' : 'Nova Redação'}</h3>
            </div>
            
            <div className="header-actions">
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={handleNewEssay}
              >
                <Plus size={16} /> Limpar / Nova
              </button>
            </div>
          </div>

          <form onSubmit={handleSave} className="essay-form">
            <div className="form-group">
              <label className="form-label">Título da Redação</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Ex: A importância do registro civil para a cidadania"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tema da Redação</label>
              <input 
                type="text" 
                value={theme} 
                onChange={(e) => setTheme(e.target.value)} 
                placeholder="Selecione uma sugestão ao lado ou digite o tema..."
                className="form-control"
              />
            </div>

            <div className="form-group">
              <div className="textarea-label-row">
                <label className="form-label">Texto da Redação</label>
                <span className="meta-counter">
                  <strong>{wordCount}</strong> palavras (recomendado ENEM: 300 - 450)
                </span>
              </div>
              <textarea 
                rows="14"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Escreva sua introdução, desenvolvimento 1, desenvolvimento 2 e proposta de intervenção detalhada aqui..."
                className="form-control essay-textarea"
                required
              />
            </div>

            <div className="essay-footer-bar">
              <div className="word-count-badge">
                <span>{wordCount} palavras</span>
                <span>•</span>
                <span>{charCount} caracteres</span>
                <span>•</span>
                <span>{lineCount} parágrafos/linhas</span>
              </div>

              <button type="submit" className="btn btn-primary btn-save-essay">
                {saveFeedback ? (
                  <>
                    <Check size={18} /> Salvo com Sucesso!
                  </>
                ) : (
                  <>
                    <FileText size={18} /> Salvar Redação
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Coluna Direita: Sugestões de Temas e Redações Salvas */}
        <div className="essay-sidebar-column">
          {/* Sugestões de Temas do ENEM */}
          <div className="card themes-card">
            <div className="card-header">
              <div className="card-title-group">
                <div className="card-title-icon-wrapper calendar-icon-bg">
                  <Lightbulb size={18} className="card-title-icon" />
                </div>
                <h3 className="card-title">Temas do ENEM</h3>
              </div>
            </div>

            <div className="themes-list">
              {ENEM_THEMES.map((item) => (
                <div 
                  key={item.id} 
                  className="theme-item"
                  onClick={() => handleSelectTheme(item)}
                  title="Clique para utilizar este tema na redação"
                >
                  <div className="theme-meta">
                    <span className="theme-year-badge">{item.year}</span>
                    <span className="theme-category">{item.category}</span>
                  </div>
                  <p className="theme-title-text">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Minhas Redações Salvas */}
          <div className="card list-card">
            <div className="card-header">
              <div className="card-title-group">
                <div className="card-title-icon-wrapper target-icon-bg">
                  <FileText size={18} className="card-title-icon" />
                </div>
                <h3 className="card-title">Minhas Redações ({essays.length})</h3>
              </div>
            </div>

            {essays.length === 0 ? (
              <div className="empty-state">
                <p>Nenhuma redação salva ainda. Escreva e salve sua primeira produção textual!</p>
              </div>
            ) : (
              <div className="saved-essays-list">
                {essays.map((essay) => (
                  <div 
                    key={essay.id} 
                    className={`saved-essay-item ${currentId === essay.id ? 'active' : ''}`}
                    onClick={() => handleLoadEssay(essay)}
                  >
                    <div className="saved-essay-info">
                      <span className="saved-essay-title">{essay.title}</span>
                      <span className="saved-essay-theme">{essay.theme}</span>
                      <span className="saved-essay-date">Salva em: {essay.date}</span>
                    </div>

                    <button 
                      className="btn-icon-danger"
                      onClick={(e) => handleDeleteEssay(essay.id, e)}
                      title="Excluir redação"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


// --- src/components/views/DesempenhoView.jsx ---



function DesempenhoView({ activities, sessions, goals, simuladoResult, onNavigate }) {
  // Cálculos do progresso geral
  const totalActivities = activities.length;
  const completedActivities = activities.filter(a => a.status === 'Concluído').length;
  const activityPercentage = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;

  // Tempo total estudado
  const totalSecs = sessions.reduce((acc, curr) => acc + (curr.durationSeconds || 0), 0);
  const totalHours = (totalSecs / 3600).toFixed(1);

  // Metas
  const totalGoals = goals.length;
  const completedGoals = goals.filter(g => g.completed).length;
  const goalsPercentage = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

  // Desempenho por matéria calculado a partir das atividades
  const subjectMap = {};
  activities.forEach(item => {
    if (!subjectMap[item.subject]) {
      subjectMap[item.subject] = { total: 0, completed: 0, color: item.subjectColor || '#2563eb' };
    }
    subjectMap[item.subject].total += 1;
    if (item.status === 'Concluído') {
      subjectMap[item.subject].completed += 1;
    }
  });

  const subjectStats = Object.keys(subjectMap).map(subj => {
    const data = subjectMap[subj];
    const pct = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
    return {
      name: subj,
      percentage: pct,
      total: data.total,
      completed: data.completed,
      color: data.color
    };
  });

  return (
    <div className="view-container">
      <div className="view-header">
        <button 
          className="btn-back" 
          onClick={() => onNavigate('inicio')}
          title="Voltar ao Início"
        >
          <ArrowLeft size={18} /> Voltar ao Painel
        </button>

        <div className="view-header-title-box">
          <div className="view-icon-badge badge-rose">
            <BarChart2 size={24} />
          </div>
          <div>
            <h2 className="view-title">Meu Desempenho</h2>
            <p className="view-subtitle">Acompanhe métricas consolidadas de conclusão de atividades, horas de foco e evolução por disciplina.</p>
          </div>
        </div>

        <div className="view-stats-row">
          <div className="stat-pill stat-pill-success">
            <span className="stat-pill-label">Conclusão de Estudos</span>
            <span className="stat-pill-val">{activityPercentage}%</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-label">Horas Dedicadas</span>
            <span className="stat-pill-val">{totalHours}h</span>
          </div>
          <div className="stat-pill stat-pill-warning">
            <span className="stat-pill-label">Metas Atingidas</span>
            <span className="stat-pill-val">{completedGoals}/{totalGoals}</span>
          </div>
        </div>
      </div>

      {/* Cards de Métricas Chave */}
      <div className="metrics-summary-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Progresso das Atividades</span>
            <div className="metric-icon-box icon-box-blue">
              <CheckCircle2 size={20} />
            </div>
          </div>
          <div className="metric-value-row">
            <span className="metric-number">{activityPercentage}%</span>
            <span className="metric-sub">{completedActivities} de {totalActivities} concluídas</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill main-fill" style={{ width: `${activityPercentage}%` }} />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Cumprimento de Metas</span>
            <div className="metric-icon-box icon-box-amber">
              <Target size={20} />
            </div>
          </div>
          <div className="metric-value-row">
            <span className="metric-number">{goalsPercentage}%</span>
            <span className="metric-sub">{completedGoals} de {totalGoals} objetivos</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${goalsPercentage}%`, backgroundColor: '#f59e0b' }} />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Tempo Total de Estudo</span>
            <div className="metric-icon-box icon-box-green">
              <Clock size={20} />
            </div>
          </div>
          <div className="metric-value-row">
            <span className="metric-number">{totalHours}h</span>
            <span className="metric-sub">{sessions.length} sessões registradas</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${Math.min(100, Math.round((totalSecs / 18000) * 100))}%`, backgroundColor: '#10b981' }} />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Último Simulado</span>
            <div className="metric-icon-box icon-box-cyan">
              <Award size={20} />
            </div>
          </div>
          <div className="metric-value-row">
            <span className="metric-number">
              {simuladoResult ? `${Math.round((simuladoResult.correct / simuladoResult.total) * 100)}%` : '80%'}
            </span>
            <span className="metric-sub">
              {simuladoResult ? `${simuladoResult.correct} de ${simuladoResult.total} acertos` : '4 de 5 acertos'}
            </span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${simuladoResult ? Math.round((simuladoResult.correct / simuladoResult.total) * 100) : 80}%`, backgroundColor: '#06b6d4' }} />
          </div>
        </div>
      </div>

      {/* Gráfico Visual de Barras por Disciplina */}
      <div className="card chart-section-card">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-title-icon-wrapper chart-icon-bg">
              <BarChart2 size={18} className="card-title-icon" />
            </div>
            <h3 className="card-title">Evolução e Aproveitamento por Matéria</h3>
          </div>
          <span className="chart-legend-tag">Taxa de Conclusão Real</span>
        </div>

        {subjectStats.length === 0 ? (
          <div className="empty-state">
            <p>Cadastre atividades no Plano de Estudos para ver seu gráfico de desempenho.</p>
          </div>
        ) : (
          <div className="custom-bar-chart">
            {subjectStats.map((item) => (
              <div key={item.name} className="chart-bar-row">
                <div className="chart-subject-info">
                  <span className="subject-bullet" style={{ backgroundColor: item.color }} />
                  <span className="chart-subject-name">{item.name}</span>
                  <span className="chart-subject-sub">({item.completed}/{item.total} atividades)</span>
                </div>

                <div className="chart-track-container">
                  <div className="chart-bar-track">
                    <div 
                      className="chart-bar-fill" 
                      style={{ 
                        width: `${item.percentage}%`, 
                        backgroundColor: item.color 
                      }} 
                    />
                  </div>
                  <span className="chart-percent-badge">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


// --- src/components/views/MetasView.jsx ---



function MetasView({ goals, onUpdateGoals, onNavigate }) {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [filter, setFilter] = useState('todas');

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newGoal = {
      id: 'goal-' + Date.now(),
      title: title.trim(),
      deadline: deadline || new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      completed: false
    };

    onUpdateGoals([newGoal, ...goals]);
    setTitle('');
    setDeadline('');
  };

  const handleToggleGoal = (id) => {
    const updated = goals.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    onUpdateGoals(updated);
  };

  const handleDeleteGoal = (id) => {
    onUpdateGoals(goals.filter(item => item.id !== id));
  };

  const totalGoals = goals.length;
  const completedGoals = goals.filter(g => g.completed).length;
  const pendingGoals = totalGoals - completedGoals;
  const percentComplete = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

  const filteredGoals = goals.filter(item => {
    if (filter === 'concluidas') return item.completed;
    if (filter === 'pendentes') return !item.completed;
    return true;
  });

  const formatDeadline = (dateStr) => {
    if (!dateStr) return 'Sem prazo';
    try {
      const [year, month, day] = dateStr.split('-');
      if (year && month && day) {
        return `${day}/${month}/${year}`;
      }
      return dateStr;
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="view-container">
      <div className="view-header">
        <button 
          className="btn-back" 
          onClick={() => onNavigate('inicio')}
          title="Voltar ao Início"
        >
          <ArrowLeft size={18} /> Voltar ao Painel
        </button>

        <div className="view-header-title-box">
          <div className="view-icon-badge badge-amber">
            <Target size={24} />
          </div>
          <div>
            <h2 className="view-title">Minhas Metas</h2>
            <p className="view-subtitle">Defina objetivos claros com prazos determinados para manter a constância nos seus estudos.</p>
          </div>
        </div>

        <div className="view-stats-row">
          <div className="stat-pill stat-pill-warning">
            <span className="stat-pill-label">Progresso das Metas</span>
            <span className="stat-pill-val">{percentComplete}%</span>
          </div>
          <div className="stat-pill stat-pill-success">
            <span className="stat-pill-label">Concluídas</span>
            <span className="stat-pill-val">{completedGoals}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-label">Pendentes</span>
            <span className="stat-pill-val">{pendingGoals}</span>
          </div>
        </div>
      </div>

      {/* Barra de Progresso Geral das Metas */}
      <div className="card goals-progress-banner">
        <div className="goals-progress-top">
          <span className="goals-progress-title">Seu progresso nas metas</span>
          <span className="goals-progress-ratio"><strong>{completedGoals}</strong> de {totalGoals} metas concluídas ({percentComplete}%)</span>
        </div>
        <div className="progress-bar-track">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${percentComplete}%`, backgroundColor: '#f59e0b' }} 
          />
        </div>
      </div>

      <div className="view-grid-layout">
        {/* Formulário de Criação de Meta */}
        <div className="card form-card">
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-title-icon-wrapper target-icon-bg">
                <Plus size={18} className="card-title-icon" />
              </div>
              <h3 className="card-title">Nova Meta de Estudo</h3>
            </div>
          </div>

          <form onSubmit={handleAddGoal} className="app-form">
            <div className="form-group">
              <label className="form-label">Descrição da Meta</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Ex: Resolver 100 questões de Física Clássica"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Data Limite / Prazo</label>
              <input 
                type="date" 
                value={deadline} 
                onChange={(e) => setDeadline(e.target.value)} 
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-warning btn-block">
              <Plus size={18} /> Criar Meta
            </button>
          </form>
        </div>

        {/* Lista de Metas */}
        <div className="card list-card">
          <div className="card-header-with-filters">
            <div className="card-title-group">
              <div className="card-title-icon-wrapper target-icon-bg">
                <Target size={18} className="card-title-icon" />
              </div>
              <h3 className="card-title">Metas Definidas</h3>
            </div>

            <div className="filter-buttons">
              <button 
                className={`filter-btn ${filter === 'todas' ? 'active' : ''}`}
                onClick={() => setFilter('todas')}
              >
                Todas ({totalGoals})
              </button>
              <button 
                className={`filter-btn ${filter === 'pendentes' ? 'active' : ''}`}
                onClick={() => setFilter('pendentes')}
              >
                Pendentes ({pendingGoals})
              </button>
              <button 
                className={`filter-btn ${filter === 'concluidas' ? 'active' : ''}`}
                onClick={() => setFilter('concluidas')}
              >
                Concluídas ({completedGoals})
              </button>
            </div>
          </div>

          {filteredGoals.length === 0 ? (
            <div className="empty-state">
              <p>Nenhuma meta encontrada neste filtro.</p>
            </div>
          ) : (
            <div className="goals-list">
              {filteredGoals.map((item) => (
                <div key={item.id} className={`goal-item ${item.completed ? 'goal-completed' : ''}`}>
                  <div className="goal-main">
                    <button 
                      className={`btn-check-toggle ${item.completed ? 'checked' : ''}`}
                      onClick={() => handleToggleGoal(item.id)}
                      title={item.completed ? 'Marcar como pendente' : 'Marcar como concluída'}
                    >
                      {item.completed && <Check size={14} strokeWidth={3} />}
                    </button>

                    <div className="goal-details">
                      <p className={`goal-text ${item.completed ? 'line-through' : ''}`}>
                        {item.title}
                      </p>
                      <div className="goal-deadline-row">
                        <Calendar size={14} className="deadline-icon" />
                        <span>Prazo: {formatDeadline(item.deadline)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="goal-actions">
                    <span className={`status-badge ${item.completed ? 'status-success' : 'status-warning'}`}>
                      {item.completed ? 'Concluída' : 'Em andamento'}
                    </span>
                    <button 
                      className="btn-icon-danger"
                      onClick={() => handleDeleteGoal(item.id)}
                      title="Excluir meta"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


// --- src/components/views/SimuladosView.jsx ---




function SimuladosView({ onSimuladoComplete, onNavigate }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState(null);

  const handleSelectOption = (questionId, optionId) => {
    if (isFinished) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleFinish = () => {
    const answeredCount = Object.keys(selectedAnswers).length;
    if (answeredCount < SIMULADO_QUESTIONS.length) {
      const confirmFinish = window.confirm(`Você respondeu ${answeredCount} de ${SIMULADO_QUESTIONS.length} questões. Deseja finalizar mesmo assim?`);
      if (!confirmFinish) return;
    }

    let correctCount = 0;
    SIMULADO_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const total = SIMULADO_QUESTIONS.length;
    const errors = total - correctCount;
    const percentage = Math.round((correctCount / total) * 100);

    const resultData = {
      correct: correctCount,
      errors: errors,
      total: total,
      percentage: percentage,
      date: new Date().toLocaleDateString('pt-BR')
    };

    setResults(resultData);
    setIsFinished(true);
    onSimuladoComplete(resultData);
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setIsFinished(false);
    setResults(null);
  };

  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="view-container">
      <div className="view-header">
        <button 
          className="btn-back" 
          onClick={() => onNavigate('inicio')}
          title="Voltar ao Início"
        >
          <ArrowLeft size={18} /> Voltar ao Painel
        </button>

        <div className="view-header-title-box">
          <div className="view-icon-badge badge-cyan">
            <FileText size={24} />
          </div>
          <div>
            <h2 className="view-title">Simulados Vestibular & ENEM</h2>
            <p className="view-subtitle">Treine com questões interdisciplinares de múltipla escolha e avalie seus acertos em tempo real.</p>
          </div>
        </div>

        <div className="view-stats-row">
          <div className="stat-pill stat-pill-cyan">
            <span className="stat-pill-label">Total de Questões</span>
            <span className="stat-pill-val">{SIMULADO_QUESTIONS.length}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-label">Respondidas</span>
            <span className="stat-pill-val">{answeredCount} de {SIMULADO_QUESTIONS.length}</span>
          </div>
          {isFinished && results && (
            <div className="stat-pill stat-pill-success">
              <span className="stat-pill-label">Aproveitamento</span>
              <span className="stat-pill-val">{results.percentage}%</span>
            </div>
          )}
        </div>
      </div>

      {/* Se o simulado foi finalizado, mostrar o Dashboard de Resultados no topo */}
      {isFinished && results && (
        <div className="card simulado-result-banner">
          <div className="result-banner-left">
            <div className="result-trophy-wrapper">
              <Award size={36} className="result-trophy-icon" />
            </div>
            <div>
              <h3 className="result-banner-title">
                {results.percentage >= 70 ? 'Parabéns pelo excelente desempenho!' : 'Bom treino! Continue revisando os pontos fracos.'}
              </h3>
              <p className="result-banner-text">
                Você acertou <strong>{results.correct}</strong> de <strong>{results.total}</strong> questões ({results.percentage}% de aproveitamento).
              </p>
            </div>
          </div>

          <div className="result-banner-right">
            <div className="score-summary-pills">
              <div className="score-pill score-pill-green">
                <CheckCircle2 size={16} /> {results.correct} Acertos
              </div>
              <div className="score-pill score-pill-red">
                <XCircle size={16} /> {results.errors} Erros
              </div>
            </div>

            <button 
              className="btn btn-secondary btn-sm"
              onClick={handleRestart}
            >
              <RotateCcw size={16} /> Refazer Simulado
            </button>
          </div>
        </div>
      )}

      {/* Lista de Questões */}
      <div className="simulado-questions-list">
        {SIMULADO_QUESTIONS.map((question, index) => {
          const userChoice = selectedAnswers[question.id];
          const isCorrect = userChoice === question.correctAnswer;
          const isAnswered = !!userChoice;

          return (
            <div 
              key={question.id} 
              className={`card question-card ${isFinished ? (isCorrect ? 'question-correct-card' : 'question-error-card') : ''}`}
            >
              <div className="question-header">
                <div className="question-tag-row">
                  <span className="question-number-badge">Questão {index + 1}</span>
                  <span className="question-discipline-badge">{question.discipline}</span>
                </div>

                {isFinished && (
                  <div className="question-result-badge">
                    {isCorrect ? (
                      <span className="badge-correct"><CheckCircle2 size={16} /> Resposta Correta</span>
                    ) : (
                      <span className="badge-error"><XCircle size={16} /> Resposta Incorreta</span>
                    )}
                  </div>
                )}
              </div>

              <div className="question-statement">
                {question.statement}
              </div>

              {/* Alternativas */}
              <div className="options-list">
                {question.options.map((opt) => {
                  const isSelected = userChoice === opt.id;
                  const isThisCorrect = opt.id === question.correctAnswer;

                  let optClass = 'option-btn';
                  if (isSelected) optClass += ' option-selected';

                  if (isFinished) {
                    if (isThisCorrect) {
                      optClass += ' option-correct-highlight';
                    } else if (isSelected && !isThisCorrect) {
                      optClass += ' option-error-highlight';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      className={optClass}
                      onClick={() => handleSelectOption(question.id, opt.id)}
                      disabled={isFinished}
                    >
                      <span className="option-letter">{opt.id}</span>
                      <span className="option-text">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explicação pedagógica quando finalizado */}
              {isFinished && (
                <div className="question-feedback-box">
                  <strong>Gabarito Comentado (Alternativa {question.correctAnswer}):</strong>
                  <p>{question.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Barra de Ação Final */}
      {!isFinished && (
        <div className="simulado-bottom-bar">
          <span className="answered-status-text">
            {answeredCount} de {SIMULADO_QUESTIONS.length} questões respondidas
          </span>
          <button 
            className="btn btn-primary btn-lg btn-finish-simulado"
            onClick={handleFinish}
          >
            Finalizar Simulado <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}


// --- src/App.jsx ---











// Novas Views Funcionais







// Utilitários de dados


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('inicio');

  // Estados persistidos com localStorage
  const [activities, setActivities] = useState(() => getStoredData('rumo_atividades', INITIAL_ACTIVITIES));
  const [sessions, setSessions] = useState(() => getStoredData('rumo_sessoes', INITIAL_SESSIONS));
  const [essays, setEssays] = useState(() => getStoredData('rumo_redacoes', INITIAL_ESSAYS));
  const [goals, setGoals] = useState(() => getStoredData('rumo_metas', INITIAL_GOALS));
  const [simuladoResult, setSimuladoResult] = useState(() => getStoredData('rumo_simulado_result', null));

  // Efeitos para persistência
  useEffect(() => {
    setStoredData('rumo_atividades', activities);
  }, [activities]);

  useEffect(() => {
    setStoredData('rumo_sessoes', sessions);
  }, [sessions]);

  useEffect(() => {
    setStoredData('rumo_redacoes', essays);
  }, [essays]);

  useEffect(() => {
    setStoredData('rumo_metas', goals);
  }, [goals]);

  useEffect(() => {
    if (simuladoResult) {
      setStoredData('rumo_simulado_result', simuladoResult);
    }
  }, [simuladoResult]);

  // Rolar para o topo ao trocar de view
  const handleNavigate = (viewId) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle status de atividade pela RoutineCard na tela inicial
  const handleToggleRoutineActivity = (id) => {
    const updated = activities.map(item => {
      if (item.id === id) {
        let nextStatus = 'Concluído';
        if (item.status === 'Concluído') nextStatus = 'Pendente';
        else if (item.status === 'Pendente') nextStatus = 'Em andamento';
        return { ...item, status: nextStatus };
      }
      return item;
    });
    setActivities(updated);
  };

  // Cálculo da taxa de conclusão para o card de progresso geral
  const completedActivitiesCount = activities.filter(a => a.status === 'Concluído').length;
  const overallPercentage = activities.length > 0 
    ? Math.round((completedActivitiesCount / activities.length) * 100) 
    : 72;

  const features = [
    {
      id: 'plano',
      title: 'Plano de Estudos',
      description: 'Organize as matérias e os assuntos que precisa estudar.',
      icon: BookOpen,
      variant: 'blue',
      target: 'plano'
    },
    {
      id: 'tempo',
      title: 'Tempo de Estudo',
      description: 'Controle o tempo dedicado aos seus estudos.',
      icon: Clock,
      variant: 'green',
      target: 'tempo'
    },
    {
      id: 'redacao',
      title: 'Redação',
      description: 'Tenha um espaço para praticar suas redações.',
      icon: PenLine,
      variant: 'purple',
      target: 'redacao'
    },
    {
      id: 'desempenho',
      title: 'Meu Desempenho',
      description: 'Veja sua evolução por matéria e dificuldade.',
      icon: BarChart2,
      variant: 'rose',
      target: 'desempenho'
    },
    {
      id: 'metas',
      title: 'Minhas Metas',
      description: 'Acompanhe os objetivos definidos para seus estudos.',
      icon: Target,
      variant: 'amber',
      target: 'metas'
    },
    {
      id: 'simulados',
      title: 'Simulados',
      description: 'Confira seus resultados e acompanhe seu desempenho.',
      icon: FileText,
      variant: 'cyan',
      target: 'simulados'
    }
  ];

  return (
    <div className="app-layout">
      {/* Sidebar fixo / retrátil no mobile com navegação ativa */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Área principal do conteúdo */}
      <div className="main-wrapper">
        <Header 
          onToggleSidebar={() => setSidebarOpen(prev => !prev)} 
          onNavigate={handleNavigate}
        />

        <main className="dashboard-content">
          <div className="content-container">
            {/* VIEW: 1. Início / Painel Principal */}
            {currentView === 'inicio' && (
              <>
                <Banner />

                <section className="dashboard-grid-middle">
                  <div className="middle-left-column">
                    <ProgressCard 
                      percentage={overallPercentage} 
                      onNavigate={handleNavigate}
                    />

                    <SubjectProgress 
                      onNavigate={handleNavigate}
                    />
                  </div>

                  <div className="middle-right-column">
                    <RoutineCard 
                      activities={activities}
                      onToggleStatus={handleToggleRoutineActivity}
                      onNavigate={handleNavigate}
                    />
                  </div>
                </section>

                <section className="dashboard-features-section">
                  <h3 className="section-heading">O que você quer fazer?</h3>
                  
                  <div className="features-grid">
                    {features.map((feature) => (
                      <FeatureCard
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        variant={feature.variant}
                        onClick={() => handleNavigate(feature.target)}
                      />
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* VIEW: 2. Plano de Estudos */}
            {currentView === 'plano' && (
              <PlanoEstudosView 
                activities={activities}
                onUpdateActivities={setActivities}
                onNavigate={handleNavigate}
              />
            )}

            {/* VIEW: 3. Tempo de Estudo */}
            {currentView === 'tempo' && (
              <TempoEstudoView 
                sessions={sessions}
                onUpdateSessions={setSessions}
                onNavigate={handleNavigate}
              />
            )}

            {/* VIEW: 4. Redação */}
            {currentView === 'redacao' && (
              <RedacaoView 
                essays={essays}
                onUpdateEssays={setEssays}
                onNavigate={handleNavigate}
              />
            )}

            {/* VIEW: 5. Meu Desempenho */}
            {currentView === 'desempenho' && (
              <DesempenhoView 
                activities={activities}
                sessions={sessions}
                goals={goals}
                simuladoResult={simuladoResult}
                onNavigate={handleNavigate}
              />
            )}

            {/* VIEW: 6. Minhas Metas */}
            {currentView === 'metas' && (
              <MetasView 
                goals={goals}
                onUpdateGoals={setGoals}
                onNavigate={handleNavigate}
              />
            )}

            {/* VIEW: 7. Simulados */}
            {currentView === 'simulados' && (
              <SimuladosView 
                onSimuladoComplete={(result) => setSimuladoResult(result)}
                onNavigate={handleNavigate}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}


// --- src/main.jsx ---





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

