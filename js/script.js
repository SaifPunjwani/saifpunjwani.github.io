// UX enhancements: smooth scrolling, progress bar, active nav, theme toggle
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling to anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Ignore if href is just '#'
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const top = Math.max(0, target.offsetTop - 80);
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Progress bar at the top
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  document.body.prepend(progressBar);
  window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height ? (winScroll / height) * 100 : 0;
    progressBar.style.width = scrolled + '%';
  });

  // Active nav link based on scroll
  function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav a');
    let current = '';
    const y = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const bottom = top + section.offsetHeight;
      if (y >= top && y < bottom) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href').substring(1) === current);
    });
  }
  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  // Theme toggle with localStorage
  const root = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');
  const key = 'theme';
  const saved = localStorage.getItem(key);
  if (saved === 'dark') root.setAttribute('data-theme', 'dark');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      root.setAttribute('data-theme', isDark ? 'light' : 'dark');
      localStorage.setItem(key, isDark ? 'light' : 'dark');
      toggleBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Hide header spinner once assets load
  window.addEventListener('load', () => {
    const spinner = document.getElementById('spinner');
    if (spinner) spinner.style.display = 'none';
  });
});
