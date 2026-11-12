import React, { useState, useEffect } from 'react';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  Plus,
  Trash2,
  CheckCircle2,
  ArrowLeft
} from '../Icons';

export default function TempoEstudoView({ sessions, onUpdateSessions, onNavigate }) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('Matemática');

  const subjects = [
    'Matemática',
    'Português',
    'Redação',
    'História',
    'Geografia',
    'Física',
    'Química',
    'Biologia'
  ];

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const handleSaveSession = () => {
    if (seconds < 5) {
      alert('Estude pelo menos alguns segundos antes de registrar a sessão!');
      return;
    }

    const now = new Date();
    const dateFormatted = now.toLocaleDateString('pt-BR') + ' ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    const newSession = {
      id: 'sess-' + Date.now(),
      subject: selectedSubject,
      durationSeconds: seconds,
      date: dateFormatted
    };

    onUpdateSessions([newSession, ...sessions]);
    resetTimer();
  };

  const handleDeleteSession = (id) => {
    onUpdateSessions(sessions.filter(s => s.id !== id));
  };

  const formatTime = (totalSec) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDurationFriendly = (totalSec) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    if (hrs > 0) return `${hrs}h ${mins}m`;
    if (mins > 0) return `${mins}m ${secs}s`;
    return `${secs}s`;
  };

  const totalStudiedSeconds = sessions.reduce((acc, curr) => acc + (curr.durationSeconds || 0), 0) + seconds;

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
          <div className="view-icon-badge badge-green">
            <Clock size={24} />
          </div>
          <div>
            <h2 className="view-title">Tempo de Estudo</h2>
            <p className="view-subtitle">Controle o tempo dedicado aos seus estudos com cronômetro em tempo real e histórico.</p>
          </div>
        </div>

        <div className="view-stats-row">
          <div className="stat-pill stat-pill-success">
            <span className="stat-pill-label">Tempo Total Acumulado</span>
            <span className="stat-pill-val">{formatDurationFriendly(totalStudiedSeconds)}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-label">Sessões Registradas</span>
            <span className="stat-pill-val">{sessions.length}</span>
          </div>
        </div>
      </div>

      <div className="view-grid-layout">
        {/* Painel do Cronômetro */}
        <div className="card stopwatch-card">
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-title-icon-wrapper calendar-icon-bg">
                <Clock size={18} className="card-title-icon" />
              </div>
              <h3 className="card-title">Cronômetro de Foco</h3>
            </div>
            <span className={`timer-status-pill ${isActive ? 'timer-active' : ''}`}>
              {isActive ? 'Estudando agora...' : 'Pausado'}
            </span>
          </div>

          <div className="stopwatch-display">
            <div className="time-digits">{formatTime(seconds)}</div>
          </div>

          <div className="form-group timer-subject-select">
            <label className="form-label">Qual matéria você está estudando?</label>
            <select 
              value={selectedSubject} 
              onChange={(e) => setSelectedSubject(e.target.value)} 
              className="form-control"
              disabled={isActive}
            >
              {subjects.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="timer-controls">
            <button 
              className={`btn ${isActive ? 'btn-warning' : 'btn-primary'} btn-lg`}
              onClick={toggleTimer}
            >
              {isActive ? (
                <>
                  <Pause size={18} /> Pausar
                </>
              ) : (
                <>
                  <Play size={18} /> {seconds > 0 ? 'Continuar' : 'Iniciar'}
                </>
              )}
            </button>

            <button 
              className="btn btn-secondary btn-lg"
              onClick={resetTimer}
              disabled={seconds === 0}
            >
              <RotateCcw size={18} /> Zerar
            </button>

            <button 
              className="btn btn-success btn-lg"
              onClick={handleSaveSession}
              disabled={seconds < 5}
            >
              <CheckCircle2 size={18} /> Salvar Sessão
            </button>
          </div>
        </div>

        {/* Histórico das Sessões */}
        <div className="card list-card">
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-title-icon-wrapper target-icon-bg">
                <Clock size={18} className="card-title-icon" />
              </div>
              <h3 className="card-title">Histórico de Sessões</h3>
            </div>
          </div>

          {sessions.length === 0 ? (
            <div className="empty-state">
              <p>Nenhuma sessão registrada ainda. Inicie o cronômetro para marcar seus estudos!</p>
            </div>
          ) : (
            <div className="sessions-list">
              {sessions.map((sess) => (
                <div key={sess.id} className="session-item">
                  <div className="session-info">
                    <span className="session-subject">{sess.subject}</span>
                    <span className="session-date">{sess.date}</span>
                  </div>

                  <div className="session-right">
                    <span className="session-duration-badge">
                      {formatDurationFriendly(sess.durationSeconds)}
                    </span>
                    <button 
                      className="btn-icon-danger"
                      onClick={() => handleDeleteSession(sess.id)}
                      title="Excluir registro"
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
