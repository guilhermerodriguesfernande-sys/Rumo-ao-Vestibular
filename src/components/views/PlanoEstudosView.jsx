import React, { useState } from 'react';
import {
  BookOpen,
  Plus,
  Trash2,
  Check,
  RotateCcw,
  Calendar,
  ArrowLeft
} from '../Icons';

export default function PlanoEstudosView({ activities, onUpdateActivities, onNavigate }) {
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
