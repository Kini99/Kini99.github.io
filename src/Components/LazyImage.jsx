import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, className, style, placeholder, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`lazy-image-container ${className || ''}`} style={style}>
      {!isLoaded && (
        <div className="lazy-image-placeholder">
          {placeholder || <div className="placeholder-shimmer" />}
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
