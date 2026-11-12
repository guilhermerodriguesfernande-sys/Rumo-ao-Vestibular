import React from 'react';

export default function Banner() {
  return (
    <section className="banner-card">
      <div className="banner-content">
        <span className="banner-tag">RUMO AO VESTIBULAR</span>
        <h2 className="banner-greeting">Olá, Guilherme!</h2>
        <h3 className="banner-heading">Pronto para continuar seus estudos?</h3>
        <p className="banner-description">
          Aqui você encontra tudo o que precisa para se organizar, acompanhar seu progresso e chegar mais perto do seu objetivo.
        </p>
      </div>

      <div className="banner-visual">
        <div className="banner-quote-wrapper">
          <span className="banner-handwritten">Seu futuro começa agora!</span>
          <svg className="banner-handwritten-swoosh" viewBox="0 0 140 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 14C35 4 80 3 136 12" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="banner-image-container">
          <img 
            src="/banner-books.png" 
            alt="Mesa de estudos com livros, caderno e canetas" 
            className="banner-image"
          />
        </div>
      </div>
    </section>
  );
}
