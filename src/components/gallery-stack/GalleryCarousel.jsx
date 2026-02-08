import { useEffect, useRef, useState } from 'react';
import './GalleryCarousel.css';

export default function GalleryCarousel({ cards = [] }) {
  const cardCount = cards.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);
  const scrollerRef = useRef(null);
  const itemRefs = useRef([]);
  const currentIndexRef = useRef(0);
  const isEmpty = cardCount === 0;

  const scrollToIndex = (index) => {
    const scroller = scrollerRef.current;
    const item = itemRefs.current[index];
    if (!scroller || !item) return;
    const left = item.offsetLeft - (scroller.clientWidth - item.clientWidth) / 2;
    scroller.scrollTo({ left, behavior: 'smooth' });
  };

  const handleNext = () => {
    const nextIndex = Math.min(cardCount - 1, currentIndex + 1);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(prevIndex);
  };

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    if (cardCount === 0) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let rafId = null;
    const updateTransforms = () => {
      const rect = scroller.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = (itemCenter - center) / rect.width;
        const absDistance = Math.min(1, Math.abs(distance * 2));

        if (Math.abs(distance) < nearestDistance) {
          nearestDistance = Math.abs(distance);
          nearestIndex = index;
        }

        const rotate = distance * 90;
        const translateZ = -320 * absDistance;
        const translateX = distance * 130;
        const scale = 1.24 - absDistance * 0.34;
        const opacity = 1 - absDistance * 0.65;
        const zIndex = Math.round((1 - absDistance) * 100);

        item.style.setProperty('--rotateY', `${rotate}deg`);
        item.style.setProperty('--translateZ', `${translateZ}px`);
        item.style.setProperty('--translateX', `${translateX}px`);
        item.style.setProperty('--scale', `${scale}`);
        item.style.setProperty('--opacity', `${opacity}`);
        item.style.zIndex = String(zIndex);
      });

      if (nearestIndex !== currentIndexRef.current) {
        currentIndexRef.current = nearestIndex;
        setCurrentIndex(nearestIndex);
      }

      rafId = null;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateTransforms);
    };

    const onWheel = (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        scroller.scrollLeft += event.deltaY;
      }
    };

    updateTransforms();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    scroller.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', updateTransforms);

    return () => {
      scroller.removeEventListener('scroll', onScroll);
      scroller.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', updateTransforms);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [cardCount]);

  useEffect(() => {
    if (cardCount === 0) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const id = window.requestAnimationFrame(() => scrollToIndex(0));
    return () => window.cancelAnimationFrame(id);
  }, [cardCount]);

  if (isEmpty) {
    return (
      <div style={{ color: 'white', padding: '50px', textAlign: 'center' }}>
        No images to display
      </div>
    );
  }

  return (
    <div className="carousel-container">
      <div className="carousel-frame">
        <div className="carousel-scroller" ref={scrollerRef}>
          <ul className="carousel-track">
            {cards.map((card, index) => (
              <li
                key={card.id ?? index}
                className="carousel-item"
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => {
                  if (index === currentIndex) {
                    const imgSrc = card.content?.props?.src;
                    if (imgSrc) setZoomedImage(imgSrc);
                  } else {
                    scrollToIndex(index);
                  }
                }}
              >
                <div className={`carousel-card ${index === currentIndex ? 'center' : ''}`}>
                  {card.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        className="carousel-nav prev" 
        onClick={handlePrev}
        aria-label="Previous"
      >
        &lt;
      </button>
      <button 
        className="carousel-nav next" 
        onClick={handleNext}
        aria-label="Next"
      >
        &gt;
      </button>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="zoom-modal"
          onClick={() => setZoomedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.95)',
            cursor: 'zoom-out',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          <img
            src={zoomedImage}
            alt="Zoomed"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '16px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
              animation: 'zoomIn 0.3s ease',
            }}
          />
        </div>
      )}
    </div>
  );
}
