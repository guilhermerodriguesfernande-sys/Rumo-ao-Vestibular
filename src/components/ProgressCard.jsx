import React from 'react';
import { Target, ArrowRight } from './Icons';

export default function ProgressCard({ percentage = 72, onNavigate }) {
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
