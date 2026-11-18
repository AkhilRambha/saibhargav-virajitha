import React, { useRef, useState } from 'react';
import { photoGalleryData } from '../weddingConfig';

export default function GallerySection({ onOpenImage }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const photoCount = photoGalleryData.length;
  const swipeStartRef = useRef(null);
  const suppressCardClickRef = useRef(false);

  const moveCarousel = (direction) => {
    setActiveIndex((index) => (index + direction + photoCount) % photoCount);
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === 'touch') {
      swipeStartRef.current = { x: event.clientX, y: event.clientY };
      suppressCardClickRef.current = false;
    }
  };

  const handlePointerUp = (event) => {
    const start = swipeStartRef.current;
    swipeStartRef.current = null;
    if (event.pointerType !== 'touch' || !start) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return;

    suppressCardClickRef.current = true;
    moveCarousel(deltaX < 0 ? 1 : -1);
    window.setTimeout(() => {
      suppressCardClickRef.current = false;
    }, 0);
  };

  const handlePointerCancel = () => {
    swipeStartRef.current = null;
  };

  const handleImageError = (e) => {
    e.target.style.visibility = 'hidden';
    if (e.target.parentElement) {
      e.target.parentElement.style.background =
        'linear-gradient(135deg, #e8ece3, #efe9de)';
    }
  };

  return (
    <section className="gallery section-pad" id="gallery">
      <div className="section-heading reveal reveal-up">
        <div className="heading-badge">
          <span>✦</span>
          <span>MOMENTS IN TIME</span>
          <span>✦</span>
        </div>
        <h2>
          Our Photo <em>Gallery</em>
        </h2>
        <p>A few cherished glimpses into our joy, smiles, and celebrations.</p>
      </div>

      <div
        className="photo-carousel-stage section-inner"
        role="region"
        aria-label="Wedding photo carousel"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {photoGalleryData.map((photo, index) => {
          const rawOffset = (index - activeIndex + photoCount) % photoCount;
          const offset = rawOffset > photoCount / 2 ? rawOffset - photoCount : rawOffset;
          const distance = Math.abs(offset);
          const isVisible = distance <= 2;

          return (
            <button
              key={photo.id}
              type="button"
              className={`photo-carousel-card ${index === activeIndex ? 'is-active' : ''}`}
              style={{
                transform: `translate(-50%, -50%) translateX(${offset * 172}px) translateZ(${-distance * 90}px) rotateY(${-offset * 24}deg) scale(${1 - distance * 0.1})`,
                opacity: isVisible ? 1 - distance * 0.24 : 0,
                zIndex: photoCount - distance,
                pointerEvents: isVisible ? 'auto' : 'none',
                visibility: isVisible ? 'visible' : 'hidden'
              }}
              onClick={() => {
                if (suppressCardClickRef.current) {
                  suppressCardClickRef.current = false;
                  return;
                }
                onOpenImage(index);
              }}
              aria-label={`View ${photo.caption || 'wedding photograph'}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              aria-hidden={!isVisible}
              tabIndex={isVisible ? 0 : -1}
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                loading="lazy"
                onError={handleImageError}
              />
              <div className="photo-carousel-overlay">
                <span className="photo-carousel-caption">{photo.caption || photo.alt}</span>
                <span className="photo-carousel-zoom" aria-hidden="true">⤢</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="photo-carousel-controls" aria-label="Gallery controls">
        <button type="button" aria-label="Previous photo" onClick={() => moveCarousel(-1)}>
          ‹
        </button>
        <span aria-live="polite">{activeIndex + 1} / {photoCount}</span>
        <button type="button" aria-label="Next photo" onClick={() => moveCarousel(1)}>
          ›
        </button>
      </div>

      <p className="gallery-note">
        Swipe through the photos, use the arrows, or select a photo to view it full size.
      </p>
    </section>
  );
}
