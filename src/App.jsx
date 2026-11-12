import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Clock,
  PenLine,
  BarChart2,
  Target,
  FileText
} from './components/Icons';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Banner from './components/Banner';
import ProgressCard from './components/ProgressCard';
import RoutineCard from './components/RoutineCard';
import SubjectProgress from './components/SubjectProgress';
import FeatureCard from './components/FeatureCard';

// Novas Views Funcionais
import PlanoEstudosView from './components/views/PlanoEstudosView';
import TempoEstudoView from './components/views/TempoEstudoView';
import RedacaoView from './components/views/RedacaoView';
import DesempenhoView from './components/views/DesempenhoView';
import MetasView from './components/views/MetasView';
import SimuladosView from './components/views/SimuladosView';

// Utilitários de dados
import {
  INITIAL_ACTIVITIES,
  INITIAL_SESSIONS,
  INITIAL_ESSAYS,
  INITIAL_GOALS,
  getStoredData,
  setStoredData
} from './utils/storage';

export default function App() {
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
