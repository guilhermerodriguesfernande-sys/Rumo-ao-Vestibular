import React from 'react';
import {
  BarChart2,
  Target,
  Clock,
  CheckCircle2,
  Award,
  ArrowLeft
} from '../Icons';

export default function DesempenhoView({ activities, sessions, goals, simuladoResult, onNavigate }) {
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
