document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Envelope entry gate ---------- */
  const gate = document.getElementById('envelopeGate');
  const envelopeWrap = document.getElementById('envelopeWrap');
  const gateHeading = document.getElementById('gateHeading');
  let opened = false;

  if (envelopeWrap && gate) {
    document.body.classList.add('gate-active');

    envelopeWrap.addEventListener('click', () => {
      if (opened) return;
      opened = true;
      envelopeWrap.classList.add('open');
      if (gateHeading) gateHeading.classList.add('fade');

      setTimeout(() => {
        envelopeWrap.classList.add('hidden');
      }, 950);

      setTimeout(() => {
        gate.classList.add('gate-hidden');
        document.body.classList.remove('gate-active');
        revealOnScroll(); // trigger any already-visible sections
      }, 1500);
    });
  }

  /* ---------- Ambient hero petals ---------- */
  const petalField = document.querySelector('.petal-field');
  if (petalField) {
    const symbols = ['✦', '❈', '❁', '❀'];
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('span');
      p.className = 'petal';
      p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      p.style.left = Math.random() * 100 + '%';
      p.style.fontSize = (12 + Math.random() * 14) + 'px';
      p.style.animationDuration = (10 + Math.random() * 12) + 's';
      p.style.animationDelay = (Math.random() * 12) + 's';
      petalField.appendChild(p);
    }
  }

  /* ---------- Reveal-on-scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 })
    : null;

  function revealOnScroll() {
    revealEls.forEach(el => {
      if (observer) {
        observer.observe(el);
      } else {
        el.classList.add('visible'); // fallback: no IO support
      }
    });
  }
  revealOnScroll();

  /* ---------- Countdown ---------- */
  const countdown = document.querySelector('.countdown[data-event-date]');
  if (countdown) {
    const target = new Date(countdown.dataset.eventDate).getTime();
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
      const now = Date.now();
      let diff = target - now;
      if (diff < 0) diff = 0;

      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);

      if (daysEl) daysEl.textContent = pad(days);
      if (hoursEl) hoursEl.textContent = pad(hours);
      if (minsEl) minsEl.textContent = pad(mins);
      if (secsEl) secsEl.textContent = pad(secs);

      if (diff <= 0) clearInterval(timer);
    }
    tick();
    const timer = setInterval(tick, 1000);
  }
});
