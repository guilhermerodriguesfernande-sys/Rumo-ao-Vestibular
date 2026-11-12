import React from 'react';
import { BarChart2, ArrowRight } from './Icons';

export default function SubjectProgress({ onNavigate }) {
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
