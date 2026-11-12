import React, { useState } from 'react';
import {
  Target,
  Plus,
  Trash2,
  Check,
  Calendar,
  ArrowLeft
} from '../Icons';

export default function MetasView({ goals, onUpdateGoals, onNavigate }) {
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
