import React from 'react';
import {
  GraduationCap,
  Home,
  BookOpen,
  BarChart2,
  PenLine,
  FileText,
  Target,
  Mountain,
  X
} from './Icons';

export default function Sidebar({ isOpen, onClose, currentView, onNavigate }) {
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
