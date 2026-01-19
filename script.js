// ----------------------
// Theme toggle
// ----------------------
const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

// Check for saved preference or system preference
function getPreferredTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Initialize theme
setTheme(getPreferredTheme());

// Toggle on click
themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// ----------------------
// Header scroll effect
// ----------------------
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

// ----------------------
// Mobile nav
// ----------------------
const toggler = document.querySelector('.mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
toggler?.addEventListener('click', () => {
  const open = toggler.getAttribute('aria-expanded') === 'true';
  toggler.setAttribute('aria-expanded', String(!open));
  mobileMenu?.classList.toggle('show');
  mobileMenu.hidden = false;
});
mobileMenu?.addEventListener('click', e => {
  if(e.target.closest('a')){
    mobileMenu.classList.remove('show');
    toggler.setAttribute('aria-expanded','false');
  }
});

// ----------------------
// Smooth scroll for anchor links
// ----------------------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// ----------------------
// Intersection animations
// ----------------------
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en => {
    if (en.isIntersecting) en.target.classList.add('in');
  })
}, {threshold: .1});
document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));

// ----------------------
// Contact form (local demo)
// ----------------------
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Odesílám…';

  // Demo odeslání – zde bys připojila vlastní backend / formulářovou službu
  // Například: fetch('https://formspree.io/f/xyz', { method:'POST', body: new FormData(form) })
  await new Promise(r => setTimeout(r, 700));
  status.textContent = 'Díky! Ozveme se co nejdřív.';
  form.reset();
});

// ----------------------
// Utilities
// ----------------------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.getElementById('copy-address')?.addEventListener('click', async () => {
  const text = document.getElementById('addr')?.textContent?.trim();
  if (!text) return;
  try{
    await navigator.clipboard.writeText(text);
    alert('Adresa zkopírována!');
  } catch {
    alert('Nepodařilo se zkopírovat');
  }
});

document.getElementById('add-to-calendar')?.addEventListener('click', () => {
  // Vytvoří jednoduchý ICS soubor s otevírací dobou jako celodenní událostí
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth()+1).padStart(2,'0');
  const d = String(now.getDate()).padStart(2,'0');
  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//U4Zrnek//CZ//
BEGIN:VEVENT
UID:${Date.now()}@u4zrnek
DTSTAMP:${y}${m}${d}T080000Z
SUMMARY:Kavárna u 4 zrnek – otevřeno dnes
DESCRIPTION:Otevřeno 8:00–20:00. Těšíme se na tebe!
DTSTART:${y}${m}${d}T060000Z
DTEND:${y}${m}${d}T180000Z
END:VEVENT
END:VCALENDAR`;
  const blob = new Blob([ics], {type: 'text/calendar'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'u4zrnek-otevreno.ics';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});
