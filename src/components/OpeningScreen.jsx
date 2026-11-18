import React, { useState } from 'react';
import { weddingConfig } from '../weddingConfig';

export default function OpeningScreen({ isVisible, onEnter, onStartMusic, onOpening }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    onOpening?.();
    onStartMusic?.();
    setIsOpening(true);
    window.setTimeout(onEnter, 1000);
  };

  return (
    <div
      className={`invitation-opening-screen ${!isVisible ? 'hidden' : ''} ${isOpening ? 'is-opening' : ''}`}
      id="openingScreen"
      aria-live="polite"
    >
      <div className="invitation-card">
        <img
          className="invitation-door invitation-door-left"
          src="/images/opening-plaque-background.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="invitation-door invitation-door-right"
          src="/images/opening-plaque-background.png"
          alt=""
          aria-hidden="true"
        />
        <button
          className="invitation-plaque-button"
          type="button"
          onClick={handleOpen}
          disabled={isOpening}
          aria-label="Tap to open the wedding invitation"
        >
          <span className="invitation-plaque-names">{weddingConfig.coupleDisplay}</span>
          <span className="invitation-plaque-action">
            {isOpening ? 'Opening...' : 'Tap to open'}
          </span>
        </button>
      </div>
    </div>
  );
}
