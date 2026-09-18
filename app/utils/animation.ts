"use client";

export function setupIntersectionObserver() {
  // Add animation-related CSS
  const style = document.createElement('style');
  style.textContent = `
    .animate-fade-in {
      opacity: 0;
      animation: fadeIn 1s ease forwards;
    }
    
    .animate-fade-in-up {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 1s ease forwards;
    }
    
    .animate-scroll-down {
      animation: scrollDown 1.5s ease-in-out infinite;
    }
    
    .animate-pulse-slow {
      animation: pulseSlow 2s ease-in-out infinite;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes scrollDown {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(6px);
      }
    }
    
    @keyframes pulseSlow {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.05);
        opacity: 0.8;
      }
    }
    
    /* Grid pattern for backgrounds */
    .bg-grid-pattern {
      background-size: 20px 20px;
      background-image:
        linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    }
  `;
  document.head.appendChild(style);

  // Initialize animation observers if needed
  // This function can be expanded to include more complex animation logic
}