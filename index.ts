
import { 
  VENDORS_DATA, 
  ROADMAP_STEPS, 
  REVIEWS_DATA, 
  MARQUEE_SALES, 
  FAQ_DATA 
} from './data.js';

export {};

declare global {
  interface Window {
    openReviewModal: (index: number) => void;
    closeReviewModal: () => void;
    openCheckout: (name: string, price: string, desc: string, link: string, image: string) => void;
    closeCheckout: () => void;
    processCheckout: () => void;
    toggleFaq: (el: HTMLElement) => void;
  }
}

function renderAll() {
  renderMarquee();
  renderRoadmap();
  renderVendors();
  renderReviews();
  renderFAQ();
  setupScrollReveal();
  setupCursor();
}

function setupCursor() {
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
  });
}

function renderMarquee() {
  const container = document.getElementById('marquee-content');
  if (!container) return;
  
  const content = [...MARQUEE_SALES, ...MARQUEE_SALES, ...MARQUEE_SALES].map(text => `
    <div class="flex items-center gap-4">
      <div class="w-3 h-3 rounded-full bg-accent1 shadow-[0_0_10px_#6ee7b7]"></div>
      <span class="text-[12px] font-black uppercase tracking-[0.4em] text-white/40 italic whitespace-nowrap">${text}</span>
    </div>
  `).join('');
  
  container.innerHTML = content;
}

function renderRoadmap() {
  const grid = document.getElementById('roadmap-grid');
  if (!grid) return;

  grid.innerHTML = ROADMAP_STEPS.map((step, idx) => `
    <div class="reveal glass p-10 rounded-3xl border-white/5 flex flex-col items-center text-center space-y-6 card-hover group" style="transition-delay: ${idx * 100}ms">
      <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent2 text-2xl group-hover:bg-accent2 group-hover:text-brandBg group-hover:rotate-[360deg] transition-all duration-700">
        <i class="fa-solid ${step.icon}"></i>
      </div>
      <div class="space-y-3">
        <span class="text-[10px] font-black text-accent1 tracking-[0.4em] uppercase">Phase ${step.id}</span>
        <h4 class="text-2xl font-black text-white italic">${step.title}</h4>
        <p class="text-sm text-brandMuted leading-relaxed font-medium">${step.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderVendors() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  grid.innerHTML = VENDORS_DATA.map(v => `
    <div class="reveal relative flex flex-col group bg-white/[0.01] border border-white/5 rounded-[2rem] overflow-hidden hover:border-accent1/30 transition-all duration-500 hover:bg-white/[0.03] hover:-translate-y-1">
      <div class="relative aspect-square w-full p-8 flex items-center justify-center bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
        <div class="absolute inset-0 bg-accent1/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700"></div>
        <img src="${v.image}" class="relative z-10 max-w-full max-h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-700" alt="${v.name}" loading="lazy" />
        <div class="absolute top-5 left-5 flex flex-col gap-2 z-20">
          ${v.isHot ? '<span class="px-3 py-1 bg-accent1 text-brandBg text-[8px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(110,231,183,0.5)] animate-pulse">Top Choice</span>' : ''}
          <span class="px-3 py-1 bg-white/10 backdrop-blur-md text-white/70 text-[7px] font-black uppercase tracking-[0.2em] rounded-full border border-white/10 inline-flex items-center gap-1"><i class="fa-solid fa-check-circle text-accent1"></i> Verified</span>
        </div>
      </div>
      <div class="p-6 pt-2 flex flex-col flex-1">
        <div class="mb-3">
          <span class="text-[9px] font-black text-accent2 uppercase tracking-[0.3em] opacity-80">${v.category}</span>
        </div>
        <h3 class="text-lg sm:text-xl font-black italic text-white leading-tight mb-2 group-hover:text-accent1 transition-colors">${v.name}</h3>
        <p class="text-[11px] text-brandMuted leading-relaxed font-medium line-clamp-2 opacity-60 mb-6 group-hover:opacity-90 transition-opacity">${v.description}</p>
        <div class="mt-auto pt-6 border-t border-white/5 flex items-center justify-between gap-4">
          <div class="flex flex-col">
            <span class="text-[8px] text-brandMuted font-black uppercase tracking-widest leading-none mb-1">Cijena</span>
            <span class="text-2xl font-black text-white tracking-tighter">${v.price}</span>
          </div>
          <button onclick="window.openCheckout('${v.name}', '${v.price}', '${v.description}', '${v.stripeLink}', '${v.image}')" 
                  class="h-12 w-12 sm:w-auto sm:px-6 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-brand-gradient hover:text-brandBg hover:border-transparent transition-all btn-active flex items-center justify-center gap-2 group/btn shadow-xl">
            <span class="hidden sm:inline">Kupi</span>
            <i class="fa-solid fa-cart-plus text-sm sm:text-xs opacity-60 group-hover/btn:opacity-100 transition-opacity"></i>
          </button>
        </div>
      </div>
      <div class="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[25deg] transition-all duration-1000 group-hover:left-[100%] pointer-events-none"></div>
    </div>
  `).join('');
}

function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;

  grid.innerHTML = REVIEWS_DATA.map((rev, idx) => `
    <div class="reveal glass rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border-white/5 hover:border-accent1/30 transition-all cursor-pointer group flex flex-col card-hover" onclick="window.openReviewModal(${idx})">
      <!-- Proof Image Container (More compact on mobile) -->
      <div class="relative aspect-[4/3] sm:aspect-video overflow-hidden">
        <img src="${rev.image}" class="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Profit Proof" />
        <div class="absolute inset-0 bg-gradient-to-t from-brandBg/90 via-transparent to-transparent"></div>
        
        <!-- Star Rating (More compact) -->
        <div class="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-0.5 px-2 py-1 rounded-full glass bg-brandBg/40 backdrop-blur-md border-white/5">
           ${Array(rev.stars).fill('<i class="fa-solid fa-star text-[6px] sm:text-[8px] text-accent1"></i>').join('')}
        </div>
      </div>

      <!-- Content Area (Smaller padding on mobile) -->
      <div class="p-4 sm:p-8 space-y-3">
        <p class="text-brandText text-[11px] sm:text-[14px] font-medium italic leading-snug line-clamp-2 opacity-70 group-hover:opacity-100 transition-opacity">"${rev.text}"</p>
        
        <div class="flex items-center gap-2 sm:gap-4 pt-3 border-t border-white/5">
           <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-gradient flex items-center justify-center font-black text-brandBg text-[10px] sm:text-xs">${rev.initial}</div>
           <div class="min-w-0">
             <h4 class="font-black text-white italic tracking-tight text-[10px] sm:text-sm leading-none truncate">${rev.name}</h4>
             <p class="text-[7px] sm:text-[8px] text-accent1 font-black uppercase tracking-widest mt-1 opacity-60">Verified</p>
           </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFAQ() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = FAQ_DATA.map(f => `
    <div class="reveal faq-item glass rounded-[2rem] p-8 border-white/5 transition-all card-hover">
      <div class="flex items-center justify-between cursor-pointer" onclick="window.toggleFaq(this)">
        <h3 class="font-extrabold text-[17px] text-white pr-8">${f.q}</h3>
        <div class="faq-icon w-11 h-11 rounded-xl flex items-center justify-center transition-all bg-white/5">
          <i class="fa-solid fa-chevron-down text-[11px]"></i>
        </div>
      </div>
      <div class="faq-answer text-[15px] text-brandMuted leading-relaxed font-medium">${f.a}</div>
    </div>
  `).join('');
}

window.openReviewModal = (index: number) => {
  const rev = REVIEWS_DATA[index];
  if (!rev) return;

  const modal = document.getElementById('reviewModal');
  const img = document.getElementById('modalReviewImage') as HTMLImageElement;
  const stars = document.getElementById('modalReviewStars');
  const text = document.getElementById('modalReviewText');
  const initial = document.getElementById('modalReviewInitial');
  const name = document.getElementById('modalReviewName');
  const role = document.getElementById('modalReviewRole');

  if (img) img.src = rev.image;
  if (stars) stars.innerHTML = Array(rev.stars).fill('<i class="fa-solid fa-star text-accent1 drop-shadow-[0_0_10px_rgba(110,231,183,0.6)]"></i>').join('');
  if (text) text.innerText = `"${rev.text}"`;
  if (initial) initial.innerText = rev.initial;
  if (name) name.innerText = rev.name;
  if (role) role.innerText = rev.role;

  modal?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.closeReviewModal = () => {
  document.getElementById('reviewModal')?.classList.add('hidden');
  document.body.style.overflow = '';
};

let currentLink = '';
window.openCheckout = (name: string, price: string, desc: string, link: string, image: string) => {
  const title = document.getElementById('checkoutTitle');
  const pr = document.getElementById('checkoutPrice');
  const img = document.getElementById('checkoutProductImage') as HTMLImageElement;
  const subtotal = document.getElementById('checkoutSummarySubtotal');
  const total = document.getElementById('checkoutSummaryTotal');

  if (title) title.innerText = name;
  if (pr) pr.innerText = price;
  if (img) img.src = image;
  if (subtotal) subtotal.innerText = price;
  if (total) total.innerText = price;
  
  currentLink = link;

  const overlay = document.getElementById('checkoutOverlay');
  const sheet = document.getElementById('checkoutSheet');
  
  if (overlay && sheet) {
    overlay.classList.add('active');
    setTimeout(() => {
      sheet.classList.add('active');
    }, 50);
  }
  document.body.style.overflow = 'hidden';
};

window.closeCheckout = () => {
  const overlay = document.getElementById('checkoutOverlay');
  const sheet = document.getElementById('checkoutSheet');
  
  if (overlay && sheet) {
    sheet.classList.remove('active');
    setTimeout(() => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }, 400);
  }
};

window.processCheckout = () => {
  if (currentLink) window.open(currentLink, '_blank');
};

window.toggleFaq = (el: HTMLElement) => {
  const item = el.closest('.faq-item');
  const isOpen = item?.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item?.classList.add('open');
};

function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  reveals.forEach(el => observer.observe(el));
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav?.classList.add('glass-nav', 'py-4', 'border-b', 'border-white/5');
  } else {
    nav?.classList.remove('glass-nav', 'py-4', 'border-b', 'border-white/5');
  }
});

document.addEventListener('DOMContentLoaded', renderAll);
