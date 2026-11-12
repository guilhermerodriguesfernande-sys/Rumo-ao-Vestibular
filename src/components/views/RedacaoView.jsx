import React, { useState } from 'react';
import {
  PenLine,
  Lightbulb,
  Check,
  Trash2,
  FileText,
  Plus,
  ArrowLeft
} from '../Icons';
import { ENEM_THEMES } from '../../utils/storage';

export default function RedacaoView({ essays, onUpdateEssays, onNavigate }) {
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
