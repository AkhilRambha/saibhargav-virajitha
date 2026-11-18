import React from 'react';
import { weddingConfig } from '../weddingConfig';
import ScratchCardDate from './ScratchCardDate';

export default function HeroSection({ countdown, hasEntered }) {
  const scrollToStory = (e) => {
    e.preventDefault();
    const story = document.getElementById('story');
    if (story) story.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-art" aria-hidden="true">
        <img src="/images/hero-invitation-frame.png" alt="" />
      </div>
      <div className="hero-overlay"></div>

      <div className={`hero-content ${hasEntered ? 'hero-content-entered' : 'hero-content-waiting'}`}>
        <h1 className="hero-title">
          <span id="groomName">{weddingConfig.groomName}</span>
          <span className="ampersand">&amp;</span>
          <span id="brideName">{weddingConfig.brideName}</span>
        </h1>

        <div className="hero-monogram-tag">
          <span className="line"></span>
          <span className="tag-text">SAVE THE DATE</span>
          <span className="line"></span>
        </div>

        {/* Scratch the heart to reveal the wedding date */}
        <ScratchCardDate />

        <p className="invitation-line">We joyfully invite you to celebrate the union of</p>
        <div className="ornament">
          <span className="ornament-line"></span>
          <span className="ornament-gem">✦</span>
          <span className="ornament-text">A BEAUTIFUL BEGINNING</span>
          <span className="ornament-gem">✦</span>
          <span className="ornament-line"></span>
        </div>

        {/* Ultra-luxury glassmorphism countdown */}
        <div
          className="countdown"
          aria-label={countdown.ariaLabel || 'Countdown to the wedding'}
        >
          <div className="countdown-item">
            <span id="days">{countdown.days}</span>
            <small>Days</small>
          </div>
          <div className="countdown-colon">:</div>
          <div className="countdown-item">
            <span id="hours">{countdown.hours}</span>
            <small>Hours</small>
          </div>
          <div className="countdown-colon">:</div>
          <div className="countdown-item">
            <span id="minutes">{countdown.minutes}</span>
            <small>Minutes</small>
          </div>
          <div className="countdown-colon">:</div>
          <div className="countdown-item">
            <span id="seconds">{countdown.seconds}</span>
            <small>Seconds</small>
          </div>
        </div>
      </div>

      <a href="#story" onClick={scrollToStory} className="hero-scroll-indicator" aria-label="Scroll to explore our story">
        <span>Scroll to Explore</span>
        <div className="scroll-arrow-down"></div>
      </a>

      <div className="hero-corner">
        <span>EST. 2026</span>
        <span className="corner-divider">·</span>
        <span id="cornerDate">{weddingConfig.weddingShortDate}</span>
      </div>
    </section>
  );
}
