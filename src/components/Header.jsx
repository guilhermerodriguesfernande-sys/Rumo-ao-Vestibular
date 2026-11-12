import React from 'react';
import { User, ChevronDown, Menu } from './Icons';

export default function Header({ onToggleSidebar, onNavigate }) {
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
