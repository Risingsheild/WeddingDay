import { PageWrapper } from '../components/PageWrapper';
import { useState, useEffect, useCallback } from 'react';
import '../styles/Gallery.css';

export function Gallery() {
  const galleryImages = [
    { src: '/images/Weddingimg1.jpg', caption: "The Day She Said Yes" },
    { src: '/images/Weddingimg2.jpg', caption: "Beach Sunset" },
    { src: '/images/Weddingimg3.jpg', caption: "Mountain Adventure" },
    { src: '/images/Weddingimg4.jpg', caption: "City Lights" },
    { src: '/images/Weddingimg5.jpg', caption: "Coffee Date" },
    { src: '/images/Weddingimg6.jpg', caption: "Hiking Together" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryImages.length, isDragging]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [galleryImages.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  }, [galleryImages.length]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setIsDragging(false);
  };

  return (
    <PageWrapper>
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Our Story in Pictures</h2>
          <p>Capturing our journey together</p>
        </div>

        <div
          className="carousel-container"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            className="carousel-button prev"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            &#10094;
          </button>

          <div className="carousel-content">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].caption}
              className="carousel-image"
              loading="lazy"
              draggable="false"
            />
            <div className="carousel-caption">
              {galleryImages[currentIndex].caption}
            </div>
          </div>

          <button
            className="carousel-button next"
            onClick={goToNext}
            aria-label="Next image"
          >
            &#10095;
          </button>

          <button
            className="carousel-autoplay"
            onClick={toggleAutoPlay}
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? "⏸" : "▶"}
          </button>

          <div className="carousel-indicators">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}