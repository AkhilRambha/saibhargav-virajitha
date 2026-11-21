import React from 'react';
import { weddingConfig } from '../weddingConfig';

export default function StorySection() {
  return (
    <section className="story section-pad" id="story">
      <div className="section-inner story-grid">
        <div className="story-copy reveal reveal-left">
          <div className="story-eyebrow-wrap">
            <span className="eyebrow-decor">✦</span>
            <p className="eyebrow green">✦ OUR JOURNEY ✦ </p>
            <span className="eyebrow-decor">✦</span>
          </div>

          <h2>
            Two worlds<br />
            <em>One shared destiny.</em>
          </h2>

          <div className="small-divider">
            <span className="divider-line"></span>
            <span className="divider-heart">♡</span>
            <span className="divider-line"></span>
          </div>

          <p className="story-lead">
            Every great love story starts with a single moment that changes everything.
          </p>

          <p>
            Through seasons of laughter, effortless conversations, and standing side by side, we found our home in each other.
          </p>

          <p>
            As we step into a lifetime of togetherness, we warmly invite our dearest family and friends to celebrate with us and shower us with your love and blessings.
          </p>

          <div className="signature">
            <span className="signature-name">{weddingConfig.groomName}</span>
            <span className="sig-heart">♡</span>
            <span className="signature-name">{weddingConfig.brideName}</span>
          </div>
        </div>

        <div className="story-images story-photo-collage reveal reveal-right">
          <figure className="story-photo story-photo-top-left">
            <img
              src="/images/story1.jpeg"
              alt="Sai Bhargav and Virajitha together"
              loading="lazy"
            />
          </figure>

          <figure className="story-photo story-photo-top-right">
            <img
              src="/images/story2.jpeg"
              alt="A close-up of the couple's engagement rings"
              loading="lazy"
            />
          </figure>

          <figure className="story-photo story-photo-bottom-left">
            <img
              src="/images/story4.jpeg"
              alt="Sai Bhargav and Virajitha during their wedding celebration"
              loading="lazy"
            />
          </figure>

          <figure className="story-photo story-photo-bottom-right">
            <img
              src="/images/story3.jpeg"
              alt="A black-and-white portrait of the couple"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
