
import React, { useState, useEffect } from 'react';
import { VENDORS, TESTIMONIALS, FAQS, GALLERY_IMAGES } from './constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 rounded-2xl bg-brand-gradient flex items-center justify-center font-black text-brandBg text-xl shadow-lg shadow-accent2/30 group-hover:scale-110 transition-transform duration-300">FZ</div>
          <div className="hidden sm:block">
            <h1 className="font-black text-xl tracking-tight text-white">FlipZone</h1>
            <p className="text-[10px] text-brandMuted uppercase tracking-[0.2em] font-bold leading-none">Balkan Premium</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold text-brandMuted hover:text-white transition-colors">O nama</a>
            <a href="#pricing" className="text-sm font-semibold text-brandMuted hover:text-white transition-colors">Cijene</a>
            <a href="#faq" className="text-sm font-semibold text-brandMuted hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#pricing" className="px-6 py-3 rounded-2xl bg-brand-gradient text-brandBg font-extrabold text-sm hover:shadow-[0_0_20px_rgba(110,231,183,0.4)] hover:-translate-y-0.5 transition-all">
            Pridruži se
          </a>
        </div>
      </div>
    </nav>
  );
};

const FAQItem: React.FC<{ faq: typeof FAQS[0] }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`glass rounded-[2rem] p-6 cursor-pointer transition-all duration-500 group border border-white/5 hover:border-white/20 ${isOpen ? 'bg-white/[0.05]' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h3 className={`font-bold text-lg transition-colors ${isOpen ? 'text-accent1' : 'text-white'}`}>{faq.question}</h3>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-accent1 text-brandBg rotate-180' : 'bg-white/5 text-brandMuted group-hover:bg-white/10'}`}>
          <i className="fa-solid fa-chevron-down text-sm"></i>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-brandMuted text-base leading-relaxed border-t border-white/5 pt-4">{faq.answer}</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const filteredVendors = filter === 'all' 
    ? VENDORS 
    : VENDORS.filter(v => v.category === filter);

  return (
    <div className="min-h-screen font-sans selection:bg-accent1 selection:text-brandBg">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 px-6">
        {/* Dynamic Background Elements */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent2/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent1/10 blur-[150px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-accent1/20">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent1 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent1"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent1">Slobodna mjesta za Mart 2024</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black leading-[1] tracking-tighter">
                Dominiraj <br />
                <span className="text-gradient italic">Marketom.</span>
              </h1>
              
              <p className="text-xl text-brandMuted max-w-xl leading-relaxed font-medium">
                Pristupi elitnim dobavljačima, nauči provjerene strategije i skaliraj svoj profit uz vodeću zajednicu na Balkanu.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 rounded-[2rem] bg-brand-gradient text-brandBg font-black text-lg hover:shadow-[0_20px_40px_rgba(110,231,183,0.3)] hover:-translate-y-1 transition-all"
                >
                  Započni Edukaciju
                </button>
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-5 rounded-[2rem] glass font-black text-lg hover:bg-white/10 transition-all flex items-center gap-3"
                >
                  <i className="fa-solid fa-circle-play text-accent2"></i>
                  Besplatan Demo
                </button>
              </div>

              <div className="flex items-center gap-12 pt-8">
                <div>
                  <h4 className="text-3xl font-black text-white">2k+</h4>
                  <p className="text-[10px] font-bold text-brandMuted uppercase tracking-widest">Aktivnih Članova</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <h4 className="text-3xl font-black text-white">50+</h4>
                  <p className="text-[10px] font-bold text-brandMuted uppercase tracking-widest">Video Modula</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <h4 className="text-3xl font-black text-white">4.9/5</h4>
                  <p className="text-[10px] font-bold text-brandMuted uppercase tracking-widest">Ocjena Kursa</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="absolute inset-0 bg-brand-gradient blur-[100px] opacity-10 -z-10 animate-float"></div>
              <div className="glass rounded-[3rem] p-4 border-white/10 overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 group">
                <img src="https://picsum.photos/id/119/600/800" alt="Platform Preview" className="rounded-[2.5rem] w-full h-auto shadow-2xl group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-brandBg/80 via-transparent to-transparent flex items-end p-12">
                   <div className="space-y-2">
                     <p className="text-accent1 font-black text-sm uppercase tracking-widest">Dashboard Preview</p>
                     <h3 className="text-2xl font-black text-white leading-tight">Svi dobavljači na dohvat ruke.</h3>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Elite Sourcing', icon: 'fa-truck-fast', color: 'text-accent1', desc: 'Direktni kontakti tvornica koje niko drugi ne deli. Kvalitet na prvom mestu.' },
              { title: 'Marketing Mastery', icon: 'fa-chart-pie', color: 'text-accent2', desc: 'Od vizuelnog identiteta do naprednih oglasa. Kreiramo brend, ne samo oglas.' },
              { title: 'Community Support', icon: 'fa-users-gear', color: 'text-white', desc: 'Naš Discord nije samo chat, to je tvoj board direktora dostupan 24/7.' }
            ].map((box, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-accent1/20 transition-all duration-500 group card-glow">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${box.icon} text-3xl ${box.color}`}></i>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 italic">{box.title}</h3>
                <p className="text-brandMuted leading-relaxed font-medium">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM PREVIEW */}
      <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
           <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl lg:text-6xl font-black tracking-tight">Put do <span className="text-gradient">Profitabilnosti</span></h2>
             <p className="text-brandMuted max-w-2xl mx-auto text-lg">Svaka lekcija je pažljivo osmišljena da ukloni nagađanje iz tvog biznisa.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
             {[
               { id: '01', title: 'Legal & Mindset', desc: 'Osnivanje, porezi i kako razmišlja top 1% prodavaca.' },
               { id: '02', title: 'The Supply Chain', desc: 'Kako prepoznati vrhunski batch i dogovoriti najbolju cijenu.' },
               { id: '03', title: 'Visual Sales', desc: 'Psihologija fotografije i video materijala za maksimalnu konverziju.' },
               { id: '04', title: 'Ads Strategy', desc: 'Facebook, Instagram i TikTok strategije koje troše malo, a donose mnogo.' },
               { id: '05', title: 'Customer Experience', desc: 'Kako izgraditi bazu lojalnih kupaca koji se stalno vraćaju.' },
               { id: '06', title: 'Scaling Up', desc: 'Delegiranje zadataka i širenje na strana tržišta.' }
             ].map((item) => (
               <div key={item.id} className="p-8 rounded-[2rem] glass border border-white/5 flex gap-6 group hover:bg-white/[0.04] transition-all">
                 <span className="text-4xl font-black text-white/10 group-hover:text-accent1/30 transition-colors">{item.id}</span>
                 <div>
                   <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                   <p className="text-sm text-brandMuted leading-relaxed font-medium">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* PRICING & VENDORS */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-black italic">Izaberi svoj <br/><span className="text-gradient">Arsenal</span></h2>
              <p className="text-brandMuted font-medium max-w-sm">VIP pristup za potpunu kontrolu ili pojedinačni kontakti za specifične potrebe.</p>
            </div>
            
            <div className="flex flex-wrap gap-2 p-1.5 glass rounded-2xl border-white/5 no-scrollbar overflow-x-auto">
              {['all', 'odjeca', 'obuca', 'elektronika', 'satovi', 'ostalo'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${filter === cat ? 'bg-brand-gradient text-brandBg shadow-lg' : 'text-brandMuted hover:text-white'}`}
                >
                  {cat === 'all' ? 'Svi Moduli' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredVendors.map((vendor) => (
              <div 
                key={vendor.id} 
                className={`flex flex-col h-full rounded-[2.5rem] transition-all duration-500 relative group ${vendor.id === 'vip' ? 'scale-105 z-10 shadow-[0_30px_60px_-12px_rgba(110,231,183,0.3)]' : 'hover:-translate-y-2'}`}
              >
                <div className={`flex flex-col h-full p-6 glass rounded-[2.5rem] border ${vendor.id === 'vip' ? 'border-accent1/30 bg-accent1/[0.03]' : 'border-white/5'}`}>
                   {vendor.id === 'vip' && (
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-brand-gradient text-brandBg text-[10px] font-black uppercase tracking-[0.2em] shadow-xl whitespace-nowrap">
                       Najtraženije
                     </div>
                   )}
                   
                   <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative">
                      <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <span className="px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase text-white tracking-widest">{vendor.category}</span>
                      </div>
                   </div>

                   <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-extrabold text-white mb-2 leading-tight">{vendor.name}</h3>
                      <p className="text-sm text-brandMuted font-medium mb-6 flex-1">{vendor.description}</p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-brandMuted uppercase tracking-widest">Cena</span>
                          <span className="text-3xl font-black text-white leading-none">{vendor.price}</span>
                        </div>
                        {vendor.id === 'vip' && <div className="text-accent1 text-xs font-bold italic underline">Lifetime Access</div>}
                      </div>

                      <button 
                        onClick={() => window.open(vendor.stripeLink, '_blank')}
                        className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${vendor.id === 'vip' ? 'bg-brand-gradient text-brandBg shadow-xl' : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'}`}
                      >
                        Osiguraj Pristup
                        <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                      </button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REZULTATI / GALLERY */}
      <section className="py-32 px-6 bg-white/[0.01]">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-20 text-center">
               <h2 className="text-4xl lg:text-5xl font-black mb-6">Rezultati govore <span className="text-gradient">sve.</span></h2>
               <div className="h-1 w-32 bg-brand-gradient rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {GALLERY_IMAGES.map((img, i) => (
                <div 
                  key={i} 
                  className="relative rounded-3xl overflow-hidden aspect-square glass cursor-pointer group"
                  onClick={() => setLightboxImg(img)}
                >
                  <img src={img} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3" alt="Uspjeh" />
                  <div className="absolute inset-0 bg-accent2/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 scale-50 group-hover:scale-100 transition-all duration-500">
                      <i className="fa-solid fa-plus text-white text-xl"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8 no-scrollbar overflow-x-auto pb-12 snap-x">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="min-w-[340px] md:min-w-[420px] glass p-10 rounded-[3rem] snap-center border border-white/5 relative group">
                <i className="fa-solid fa-quote-left absolute top-10 right-10 text-4xl text-white/5 group-hover:text-accent1/10 transition-colors"></i>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star text-[10px] text-accent1"></i>)}
                </div>
                <p className="text-lg font-medium text-brandText leading-relaxed mb-10 italic">"{t.text.replace(/"/g, '')}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gradient flex items-center justify-center font-black text-brandBg text-xs">{t.name[0]}</div>
                  <div>
                    <p className="font-black text-white text-sm">{t.name}</p>
                    <p className="text-[10px] text-brandMuted uppercase tracking-widest font-bold">Verifikovan Član</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black italic">Imaš Pitanja?</h2>
            <p className="text-brandMuted font-medium">Sve što trebaš znati prije nego što napraviš prvi korak.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map(faq => <FAQItem key={faq.id} faq={faq} />)}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-32 px-6 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full max-h-[400px] bg-brand-gradient opacity-10 blur-[150px] -z-10"></div>
         <div className="max-w-6xl mx-auto glass rounded-[4rem] p-12 md:p-20 text-center border border-accent1/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent1/20 blur-3xl -z-10"></div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 italic tracking-tighter">Ostani u <span className="text-gradient">Zoni.</span></h2>
            <p className="text-brandMuted text-xl mb-16 max-w-2xl mx-auto font-medium">Za sva pitanja oko plaćanja, onboardinga ili biznis saradnje, javi nam se direktno.</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Email Support', val: 'romanoflipzone@gmail.com', icon: 'fa-envelope', link: 'mailto:romanoflipzone@gmail.com' },
                { label: 'Telegram Hub', val: '@flipzone', icon: 'fa-paper-plane', link: 'https://t.me/flipzone' },
                { label: 'Instagram', val: '@flipzone_balkan', icon: 'fa-instagram', link: 'https://instagram.com/flipzone_balkan' },
                { label: 'TikTok', val: '@flipzone_balkan', icon: 'fa-tiktok', link: 'https://tiktok.com/@flipzone_balkan' }
              ].map((c, i) => (
                <a key={i} href={c.link} target="_blank" rel="noreferrer" className="p-8 rounded-[2.5rem] glass border border-white/5 hover:border-accent2/40 hover:bg-white/5 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-accent2/10 transition-all">
                    <i className={`fa-solid ${c.icon} text-2xl text-accent2`}></i>
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent2 mb-2">{c.label}</h4>
                  <p className="text-sm font-bold truncate">{c.val}</p>
                </a>
              ))}
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-32 pb-16 px-6 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-gradient flex items-center justify-center font-black text-brandBg text-xl shadow-lg shadow-accent2/30">FZ</div>
            <div>
              <h1 className="font-black text-xl tracking-tight text-white leading-none">FlipZone</h1>
              <p className="text-[10px] text-brandMuted uppercase tracking-[0.2em] font-bold">Balkan Premium Community</p>
            </div>
          </div>
          <div className="md:text-right space-y-2">
            <p className="text-sm font-medium text-brandMuted italic">"Tvoj profit je naša jedina metrika uspeha."</p>
            <p className="text-[10px] font-black text-brandMuted uppercase tracking-[0.3em]">© {new Date().getFullYear()} FlipZone Balkan • Crafted by Romano</p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-brandBg/95 backdrop-blur-2xl flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightboxImg} alt="Uvećano" className="w-full h-auto rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10" />
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute -top-16 right-0 w-12 h-12 rounded-full glass flex items-center justify-center text-white text-2xl hover:bg-white/10 transition-all"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}

      {/* DEMO VIDEO MODAL */}
      {isDemoOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-brandBg/95 backdrop-blur-2xl flex items-center justify-center p-6"
          onClick={() => setIsDemoOpen(false)}
        >
          <div className="relative max-w-6xl w-full aspect-video glass rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl" onClick={e => e.stopPropagation()}>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="FlipZone Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <button 
              onClick={() => setIsDemoOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-all border border-white/10"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
