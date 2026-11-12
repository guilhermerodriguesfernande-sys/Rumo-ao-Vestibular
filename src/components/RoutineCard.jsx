import React from 'react';
import { Calendar, ChevronRight } from './Icons';

export default function RoutineCard({ activities = [], onToggleStatus, onNavigate }) {
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
