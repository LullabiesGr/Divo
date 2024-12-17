// Scroll Animation Observer
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
};

// Typewriter Effect
const initTypewriter = () => {
  const elements = document.querySelectorAll('[data-typewriter]');
  elements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    let index = 0;

    const type = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    };

    type();
  });
};

// Interactive Cards
const initInteractiveCards = () => {
  const cards = document.querySelectorAll('.interactive-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
};

// Terminal Text Effect
const initTerminalEffect = () => {
  const terminals = document.querySelectorAll('.terminal-text');
  
  terminals.forEach(terminal => {
    const text = terminal.getAttribute('data-text');
    let index = 0;
    
    const typeTerminal = () => {
      if (index < text.length) {
        terminal.textContent += text.charAt(index);
        index++;
        setTimeout(typeTerminal, Math.random() * 100 + 50);
      }
    };
    
    typeTerminal();
  });
};

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  initTypewriter();
  initInteractiveCards();
  initTerminalEffect();
});