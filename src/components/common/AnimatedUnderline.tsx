import  { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedUnderline = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();

      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0, 
        duration: 1.5, // Duree de l'animation
        ease: "power2.out", // Courbe d'acceleration
        delay: 0.5, 
      });
    }
  }, []);

  return (
    <svg width="487" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
      ref={pathRef}
      d="M4.00104 30C73.6317 10.3798 266.915 -17.0885 483.001 30" 
      stroke="#54BD95" 
      stroke-width="8" 
      stroke-linecap="round"
       />
    </svg>

  );
};

export default AnimatedUnderline;