import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  ArrowRight,
  ArrowLeft
} from '../Icons';
import { SIMULADO_QUESTIONS } from '../../utils/storage';

export default function SimuladosView({ onSimuladoComplete, onNavigate }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState(null);

  const handleSelectOption = (questionId, optionId) => {
    if (isFinished) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleFinish = () => {
    const answeredCount = Object.keys(selectedAnswers).length;
    if (answeredCount < SIMULADO_QUESTIONS.length) {
      const confirmFinish = window.confirm(`Você respondeu ${answeredCount} de ${SIMULADO_QUESTIONS.length} questões. Deseja finalizar mesmo assim?`);
      if (!confirmFinish) return;
    }

    let correctCount = 0;
    SIMULADO_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const total = SIMULADO_QUESTIONS.length;
    const errors = total - correctCount;
    const percentage = Math.round((correctCount / total) * 100);

    const resultData = {
      correct: correctCount,
      errors: errors,
      total: total,
      percentage: percentage,
      date: new Date().toLocaleDateString('pt-BR')
    };

    setResults(resultData);
    setIsFinished(true);
    onSimuladoComplete(resultData);
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setIsFinished(false);
    setResults(null);
  };

  const answeredCount = Object.keys(selectedAnswers).length;

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
          <div className="view-icon-badge badge-cyan">
            <FileText size={24} />
          </div>
          <div>
            <h2 className="view-title">Simulados Vestibular & ENEM</h2>
            <p className="view-subtitle">Treine com questões interdisciplinares de múltipla escolha e avalie seus acertos em tempo real.</p>
          </div>
        </div>

        <div className="view-stats-row">
          <div className="stat-pill stat-pill-cyan">
            <span className="stat-pill-label">Total de Questões</span>
            <span className="stat-pill-val">{SIMULADO_QUESTIONS.length}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-label">Respondidas</span>
            <span className="stat-pill-val">{answeredCount} de {SIMULADO_QUESTIONS.length}</span>
          </div>
          {isFinished && results && (
            <div className="stat-pill stat-pill-success">
              <span className="stat-pill-label">Aproveitamento</span>
              <span className="stat-pill-val">{results.percentage}%</span>
            </div>
          )}
        </div>
      </div>

      {/* Se o simulado foi finalizado, mostrar o Dashboard de Resultados no topo */}
      {isFinished && results && (
        <div className="card simulado-result-banner">
          <div className="result-banner-left">
            <div className="result-trophy-wrapper">
              <Award size={36} className="result-trophy-icon" />
            </div>
            <div>
              <h3 className="result-banner-title">
                {results.percentage >= 70 ? 'Parabéns pelo excelente desempenho!' : 'Bom treino! Continue revisando os pontos fracos.'}
              </h3>
              <p className="result-banner-text">
                Você acertou <strong>{results.correct}</strong> de <strong>{results.total}</strong> questões ({results.percentage}% de aproveitamento).
              </p>
            </div>
          </div>

          <div className="result-banner-right">
            <div className="score-summary-pills">
              <div className="score-pill score-pill-green">
                <CheckCircle2 size={16} /> {results.correct} Acertos
              </div>
              <div className="score-pill score-pill-red">
                <XCircle size={16} /> {results.errors} Erros
              </div>
            </div>

            <button 
              className="btn btn-secondary btn-sm"
              onClick={handleRestart}
            >
              <RotateCcw size={16} /> Refazer Simulado
            </button>
          </div>
        </div>
      )}

      {/* Lista de Questões */}
      <div className="simulado-questions-list">
        {SIMULADO_QUESTIONS.map((question, index) => {
          const userChoice = selectedAnswers[question.id];
          const isCorrect = userChoice === question.correctAnswer;
          const isAnswered = !!userChoice;

          return (
            <div 
              key={question.id} 
              className={`card question-card ${isFinished ? (isCorrect ? 'question-correct-card' : 'question-error-card') : ''}`}
            >
              <div className="question-header">
                <div className="question-tag-row">
                  <span className="question-number-badge">Questão {index + 1}</span>
                  <span className="question-discipline-badge">{question.discipline}</span>
                </div>

                {isFinished && (
                  <div className="question-result-badge">
                    {isCorrect ? (
                      <span className="badge-correct"><CheckCircle2 size={16} /> Resposta Correta</span>
                    ) : (
                      <span className="badge-error"><XCircle size={16} /> Resposta Incorreta</span>
                    )}
                  </div>
                )}
              </div>

              <div className="question-statement">
                {question.statement}
              </div>

              {/* Alternativas */}
              <div className="options-list">
                {question.options.map((opt) => {
                  const isSelected = userChoice === opt.id;
                  const isThisCorrect = opt.id === question.correctAnswer;

                  let optClass = 'option-btn';
                  if (isSelected) optClass += ' option-selected';

                  if (isFinished) {
                    if (isThisCorrect) {
                      optClass += ' option-correct-highlight';
                    } else if (isSelected && !isThisCorrect) {
                      optClass += ' option-error-highlight';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      className={optClass}
                      onClick={() => handleSelectOption(question.id, opt.id)}
                      disabled={isFinished}
                    >
                      <span className="option-letter">{opt.id}</span>
                      <span className="option-text">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explicação pedagógica quando finalizado */}
              {isFinished && (
                <div className="question-feedback-box">
                  <strong>Gabarito Comentado (Alternativa {question.correctAnswer}):</strong>
                  <p>{question.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Barra de Ação Final */}
      {!isFinished && (
        <div className="simulado-bottom-bar">
          <span className="answered-status-text">
            {answeredCount} de {SIMULADO_QUESTIONS.length} questões respondidas
          </span>
          <button 
            className="btn btn-primary btn-lg btn-finish-simulado"
            onClick={handleFinish}
          >
            Finalizar Simulado <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
