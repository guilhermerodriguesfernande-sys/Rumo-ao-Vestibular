import React from 'react';
import { ArrowRight } from './Icons';

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = 'blue',
  onClick
}) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick();
  };

  return (
    <div 
      className={`feature-card feature-variant-${variant}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      title={`Acessar ${title}`}
    >
      <div className="feature-icon-wrapper">
        <Icon size={24} className="feature-icon" strokeWidth={2} />
      </div>

      <div className="feature-info">
        <h4 className="feature-title">{title}</h4>
        <p className="feature-description">{description}</p>
      </div>

      <div className="feature-arrow-wrapper">
        <ArrowRight size={18} className="feature-arrow" />
      </div>
    </div>
  );
}
