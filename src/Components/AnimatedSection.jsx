import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  className = '', 
  threshold = 0.1 
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold });

  const getAnimationClass = () => {
    const baseClass = 'animate-on-scroll';
    if (isIntersecting) {
      return `${baseClass} visible`;
    }
    return baseClass;
  };

  const getDelayStyle = () => {
    return delay > 0 ? { animationDelay: `${delay}ms` } : {};
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={getDelayStyle()}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
