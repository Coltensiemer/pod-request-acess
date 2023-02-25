import React from 'react';
import Pattern from './assets/desktop/bg-pattern-dots.svg';
import './index.css'; 

export default function Footer() {
    const [pattern, setPattern] = React.useState(window.innerWidth > 699);
  
    React.useEffect(() => {
      function handleWidth() {
        if (window.innerWidth > 699) {
          setPattern(true);
        } else {
          setPattern(false);
        }
      }
  
      window.addEventListener('resize', handleWidth);
  
      return () => {
        window.removeEventListener('resize', handleWidth);
      };
    }, []);
  
    return (
      <footer className="footer">
        {pattern && <img src={Pattern} alt="pattern" />}
      </footer>
    );
  }