import React, { useEffect, useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, ChevronLeft, ChevronRight, Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/send_email.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
    setIsSubmitting(false);
  };

  const heroMedia = [
    { type: 'youtube', src: 'f6p4Hk9CWbU' },
    { type: 'image', src: 'https://drive.google.com/thumbnail?id=1GrdlehQFNLSyKJ2e41LQf2Dv4QTnpAzH&sz=w1920' },
    { type: 'image', src: 'https://drive.google.com/thumbnail?id=17t81KRJVULC3IohMjgUkTwIf0PDgW2Pr&sz=w1920' },
    { type: 'image', src: 'https://drive.google.com/thumbnail?id=1_uItFPRJL3jZVfbhf4PSYrnIW30gN_oi&sz=w1920' },
    { type: 'image', src: 'https://drive.google.com/thumbnail?id=1RRyManbrAuLxg0PKuS8Fu9pkQ5hbkx-Q&sz=w1920' },
    { type: 'image', src: 'https://drive.google.com/thumbnail?id=1Kks75AGidDGednkCJfO9A_LkR54H9fQm&sz=w1920' }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroMedia.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#15191E] text-white font-montserrat selection:bg-[#c5a47e] selection:text-white relative overflow-x-hidden">
      {/* Background Vertical Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-evenly">
        <div className="w-px h-full bg-white/5"></div>
        <div className="w-px h-full bg-white/5"></div>
        <div className="w-px h-full bg-white/5"></div>
        <div className="w-px h-full bg-white/5"></div>
      </div>

      {/* Left Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 border-r border-white/10 bg-[#15191E]/80 backdrop-blur-sm z-50 flex flex-col items-center justify-between py-10 max-lg:hidden lg:flex">
        <div className="text-[#c5a47e] font-kiona font-bold text-3xl opacity-0 select-none pointer-events-none">
          01 <span className="text-sm text-gray-500 font-normal">/ 03</span>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="transform -rotate-90 whitespace-nowrap text-xs tracking-[0.3em] text-gray-400 uppercase font-kiona font-semibold">
            Urbanização e Alto Padrão
          </div>
        </div>

        <div className="flex flex-col gap-6 text-gray-500">
          <a href="https://www.instagram.com/fcon_engenharia/" target="_blank" rel="noreferrer" className="hover:text-[#c5a47e] transition-colors"><Instagram size={16} /></a>
          <a href="https://www.linkedin.com/company/fcon---engenharia-e-construcoes/about/" target="_blank" rel="noreferrer" className="hover:text-[#c5a47e] transition-colors"><Linkedin size={16} /></a>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="lg:ml-20 relative z-10">
        
        {/* Header */}
        <header className={`fixed top-0 left-0 lg:left-20 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#15191E]/95 backdrop-blur-md py-3 md:py-4 border-b border-white/10' : 'bg-transparent py-4 md:py-6'}`}>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="text-xl sm:text-2xl md:text-3xl font-kiona font-bold tracking-wider flex items-center gap-4 sm:gap-6">
                <img src="/logo-fcon-engenharia-construcoes-01-custom-276x276%201.png.png" alt="FCON" className="h-8 sm:h-12 w-auto object-contain brightness-0 invert" />
                <img src="/logo-carbon-construcoes-instalacoes-aprovado-03-medium-1%201.png.png" alt="CARBON" className="h-6 sm:h-8 w-auto object-contain brightness-0 invert" />
              </div>
              <div className="hidden md:block text-sm font-kiona text-gray-400 tracking-widest font-medium">
                (11) 93740-8195
              </div>
            </div>

            <nav className="flex items-center gap-6 lg:gap-8 text-sm font-kiona font-semibold tracking-[0.2em] uppercase text-gray-300 max-md:hidden md:flex">
              <a href="#" className="hover:text-[#c5a47e] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#c5a47e] transition-colors">Serviços</a>
              <a href="#projects" className="hover:text-[#c5a47e] transition-colors">Portfólio</a>
              <a href="#contact" className="hover:text-[#c5a47e] transition-colors">Contato</a>
            </nav>

            <button className="text-white p-2 max-md:block md:hidden block" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-[#15191E]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
            >
              <nav className="flex flex-col items-center gap-8 text-lg font-kiona font-semibold tracking-[0.2em] uppercase text-gray-300">
                <a href="#" className="text-[#c5a47e]" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#about" className="hover:text-[#c5a47e] transition-colors" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
                <a href="#projects" className="hover:text-[#c5a47e] transition-colors" onClick={() => setMobileMenuOpen(false)}>Portfólio</a>
                <a href="#contact" className="hover:text-[#c5a47e] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contato</a>
              </nav>
              <div className="text-sm font-kiona text-gray-400 tracking-widest font-medium mt-4">
                (11) 93740-8195
              </div>
              <div className="flex gap-6 text-gray-500 mt-4">
                <a href="https://www.instagram.com/fcon_engenharia/" target="_blank" rel="noreferrer" className="hover:text-[#c5a47e] transition-colors"><Instagram size={20} /></a>
                <a href="https://www.linkedin.com/company/fcon---engenharia-e-construcoes/about/" target="_blank" rel="noreferrer" className="hover:text-[#c5a47e] transition-colors"><Linkedin size={20} /></a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[#15191E]">
            <AnimatePresence mode="popLayout">
              {heroMedia[currentHeroImage].type === 'youtube' ? (
                <motion.div
                  key={`yt-${currentHeroImage}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-[#15191E]"
                >
                  <iframe 
                    src={`https://www.youtube.com/embed/${heroMedia[currentHeroImage].src}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&start=5&end=15&loop=1&playlist=${heroMedia[currentHeroImage].src}&playsinline=1`}
                    className="absolute top-1/2 left-1/2 w-[300%] h-[300%] sm:w-[150vw] sm:h-[150vh] lg:w-[110vw] lg:h-[110vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                  />
                </motion.div>
              ) : heroMedia[currentHeroImage].type === 'image' ? (
                <motion.img
                  key={`img-${currentHeroImage}`}
                  src={heroMedia[currentHeroImage].src}
                  alt="FCON Carbon Urbanização"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <motion.video
                  key={`vid-${currentHeroImage}`}
                  src={heroMedia[currentHeroImage].src}
                  autoPlay
                  muted
                  playsInline
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  onTimeUpdate={(e) => {
                    const video = e.currentTarget;
                    if (video.currentTime >= 15) {
                      video.currentTime = 5;
                    }
                  }}
                />
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-[#15191E] via-[#15191E]/80 to-[#15191E]/20"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex justify-between items-center w-full">
            <div className="flex items-center gap-4 text-sm font-kiona font-semibold tracking-[0.2em] text-gray-400 uppercase max-lg:hidden lg:flex">
              <button 
                onClick={() => setCurrentHeroImage((prev) => (prev - 1 + heroMedia.length) % heroMedia.length)}
                className="hover:text-[#c5a47e] flex items-center gap-2 transition-colors z-20 cursor-pointer"
              >
                <ChevronLeft size={16} /> Prev
              </button>
              <button 
                onClick={() => setCurrentHeroImage((prev) => (prev + 1) % heroMedia.length)}
                className="hover:text-[#c5a47e] flex items-center gap-2 transition-colors z-20 cursor-pointer"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:ml-auto lg:text-right w-full max-w-6xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[5rem] font-kiona font-bold leading-tight mb-4 sm:mb-6 uppercase tracking-wider">
                <span className="block mb-2 md:mb-0">25 anos de experiência em</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-tight">urbanização</span>
              </h1>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-xl lg:ml-auto font-light">
                A solução completa para o seu empreendimento em São Paulo com alto padrão de qualidade.
              </p>
              <button className="bg-[#c5a47e] hover:bg-[#b08d65] text-white text-xs sm:text-sm font-kiona font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase py-3 sm:py-4 px-6 sm:px-8 rounded-sm transition-all flex items-center gap-3 lg:ml-auto">
                Solicitar Orçamento <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Infinite Cities Marquee */}
        <section className="bg-[#c5a47e] py-3 sm:py-4 overflow-hidden border-y border-[#c5a47e]/20 relative z-20 shadow-xl">
          <motion.div 
            className="flex whitespace-nowrap gap-8 sm:gap-16 items-center justify-start w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 150, repeat: Infinity }}
          >
            {[...Array(4)].flatMap(() => [
              "Americana", "Araçatuba", "Araraquara", "Bauru", "Campinas", "Cotia", "Franca", "Jundiaí", "Marília", 
              "Piracicaba", "Presidente Prudente", "Ribeirão Preto", "Santana de Parnaíba", "São Carlos", 
              "São José do Rio Preto", "São Paulo", "Sorocaba"
            ]).map((city, index) => (
              <div key={index} className="flex items-center gap-8 sm:gap-16">
                <span className="text-[#15191E] font-kiona font-bold text-xs sm:text-sm tracking-[0.2em] uppercase opacity-90">{city}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#15191E]/30"></div>
              </div>
            ))}
          </motion.div>
        </section>
        {/* About Section */}
        <section id="about" className="relative py-16 sm:py-24 md:py-32 overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-0 text-[10rem] md:text-[20rem] font-kiona font-bold text-white/[0.02] leading-none select-none -z-10 -translate-y-1/4 -translate-x-10">
            Ab
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-24">
              <h2 className="text-xs sm:text-sm font-kiona text-[#c5a47e] tracking-[0.3em] uppercase font-bold">Sobre a Fcon Carbon</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-kiona font-bold mb-6 sm:mb-8 leading-tight uppercase">
                  Atuação técnica em loteamentos, infraestrutura urbana e edificações de apoio.
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 sm:mb-10 font-light text-base sm:text-lg">
                  Com experiência acumulada em obras que exigem escala, organização e capacidade de entrega em São Paulo. Nossa equipe estabelece relacionamentos sólidos com parceiros para criar valor agregado em cada projeto.
                </p>
                <a href="#" className="text-sm font-kiona font-semibold text-white tracking-[0.2em] uppercase border-b border-[#c5a47e] pb-1 hover:text-[#c5a47e] transition-colors">
                  Saiba Mais
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col md:flex-row gap-12"
              >
                <div>
                  <h4 className="text-2xl font-kiona font-bold mb-8 uppercase tracking-wide">nossas<br/>especializações:</h4>
                  <ul className="space-y-8">
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm text-[#c5a47e]">
                        <MapPin size={18} />
                      </div>
                      <span className="text-sm font-kiona tracking-[0.2em] uppercase font-bold">Loteamentos</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm text-[#c5a47e]">
                        <Menu size={18} />
                      </div>
                      <span className="text-sm font-kiona tracking-[0.2em] uppercase font-bold">Infraestrutura</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm text-[#c5a47e]">
                        <MapPin size={18} />
                      </div>
                      <span className="text-sm font-kiona tracking-[0.2em] uppercase font-bold">Edificações</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <img 
                    src="https://drive.google.com/thumbnail?id=11L2YzqQ4as_3oKMIC-ihMCqVY4gs5D6o&sz=w1000" 
                    alt="Estrutura de Obras Fcon" 
                    className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24 md:py-32 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 mb-10 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-kiona text-[#c5a47e] tracking-[0.3em] uppercase font-bold text-center">Alguns dos nossos projetos</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-h-[300px] sm:min-h-[400px] md:h-[600px] w-full">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group overflow-hidden border-r border-white/5 min-h-[250px] sm:min-h-[300px]"
            >
              <img src="https://drive.google.com/thumbnail?id=1-NTyClfp1TVQ3dkUkiYjZnipPhwmK4kg&sz=w1200" alt="Gabião" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191E] via-[#15191E]/50 to-transparent"></div>
              <div className="absolute top-6 sm:top-10 left-6 sm:left-8 right-6 sm:right-8">
                <h3 className="text-xl sm:text-2xl font-kiona font-bold uppercase tracking-wide">Gabião</h3>
              </div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-8">
                <div className="transform -rotate-90 origin-bottom-left whitespace-nowrap text-xs sm:text-sm font-kiona font-semibold tracking-[0.3em] text-[#c5a47e] uppercase">
                  Obras Especiais
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group overflow-hidden border-r border-white/5 min-h-[250px] sm:min-h-[300px]"
            >
              <img src="https://drive.google.com/thumbnail?id=1CcDqIys9qp4N5rT2DFZYamCQtKs3x6c5&sz=w1200" alt="Portarias e Club House" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191E] via-[#15191E]/50 to-transparent"></div>
              <div className="absolute top-6 sm:top-10 left-6 sm:left-8 right-6 sm:right-8">
                <h3 className="text-xl sm:text-2xl font-kiona font-bold uppercase tracking-wide">Portarias e<br/>Club House</h3>
              </div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-8">
                <div className="transform -rotate-90 origin-bottom-left whitespace-nowrap text-xs sm:text-sm font-kiona font-semibold tracking-[0.3em] text-[#c5a47e] uppercase">
                  Urbanização e Alto Padrão
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group overflow-hidden border-r border-white/5 min-h-[250px] sm:min-h-[300px]"
            >
              <img src="https://drive.google.com/thumbnail?id=1eJVNLqPu8qarUN0EPaMcVJT8W6i9ucsL&sz=w1200" alt="Infraestrutura Urbana" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191E] via-[#15191E]/50 to-transparent"></div>
              <div className="absolute top-6 sm:top-10 left-6 sm:left-8 right-6 sm:right-8">
                <h3 className="text-xl sm:text-2xl font-kiona font-bold uppercase tracking-wide">Infraestrutura<br/>Urbana</h3>
              </div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-8">
                <div className="transform -rotate-90 origin-bottom-left whitespace-nowrap text-xs sm:text-sm font-kiona font-semibold tracking-[0.3em] text-[#c5a47e] uppercase">
                  Infraestrutura
                </div>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group overflow-hidden min-h-[250px] sm:min-h-[300px]"
            >
              <img src="https://drive.google.com/thumbnail?id=1SJsn-7wwVWI_gau0g3kfi1yB_Ih9mroq&sz=w1200" alt="Obras Comerciais" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191E] via-[#15191E]/50 to-transparent"></div>
              <div className="absolute top-6 sm:top-10 left-6 sm:left-8 right-6 sm:right-8">
                <h3 className="text-xl sm:text-2xl font-kiona font-bold uppercase tracking-wide">Obras Comerciais</h3>
              </div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-8">
                <div className="transform -rotate-90 origin-bottom-left whitespace-nowrap text-xs sm:text-sm font-kiona font-semibold tracking-[0.3em] text-[#c5a47e] uppercase">
                  Execução
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center"
          >
            <div className="text-[7rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-kiona font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#c5a47e] to-[#c5a47e]/20 leading-none mb-4" style={{ WebkitTextStroke: '1px rgba(197, 164, 126, 0.3)' }}>
              25
            </div>
            <div className="text-xs sm:text-sm md:text-lg font-kiona font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-300 max-w-xs sm:max-w-lg px-4">
              Anos de experiência em urbanização de alto padrão
            </div>
          </motion.div>
        </section>

        {/* Clients Section */}
        <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden border-b border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[15rem] font-kiona font-bold text-white/[0.02] leading-none select-none -z-10 w-full text-center">
            clients
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-10 sm:mb-16 md:mb-20">
              <h2 className="text-xs sm:text-sm font-kiona text-[#c5a47e] tracking-[0.3em] uppercase font-bold">Nossos Clientes</h2>
            </div>

            <div className="relative w-full max-w-6xl mx-auto overflow-hidden flex items-center h-24 sm:h-32 mask-image-gradient">
              <motion.div 
                className="flex whitespace-nowrap gap-16 md:gap-24 items-center justify-start w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 80, repeat: Infinity }}
              >
                {[...Array(3)].flatMap(() => [
                  { name: 'Cipasa', src: '/logos/cipasa_35_anos.png' },
                  { name: 'Alphaville', src: '/logos/alphaville.png' },
                  { name: 'Direcional', src: '/logos/direcional.png' },
                  { name: 'Zopone', src: '/logos/zopone.png' },
                  { name: 'Tamboré', src: '/logos/tambore_bauru.png' },
                  { name: 'Lote5', src: '/logos/lote5.png' },
                  { name: 'Five5', src: '/logos/five5.png' },
                ]).map((client, index) => (
                  <div key={`${client.name}-${index}`} className="flex justify-center items-center h-20 sm:h-24 px-4 group">
                    <img 
                      src={client.src} 
                      alt={client.name} 
                      className="max-h-12 sm:max-h-16 md:max-h-20 max-w-[120px] sm:max-w-[160px] md:max-w-[180px] object-contain opacity-60 hover:opacity-100 transition-all duration-300 brightness-0 invert" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="hidden text-center font-kiona font-bold text-lg md:text-xl tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                      {client.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-10 sm:mt-16 md:mt-20 text-center">
              <button className="bg-transparent border border-[#c5a47e] text-[#c5a47e] hover:bg-[#c5a47e] hover:text-white text-xs sm:text-sm font-kiona font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase py-3 sm:py-4 px-6 sm:px-10 rounded-sm transition-all inline-flex items-center gap-3">
                Trabalhe Conosco <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-[6rem] md:text-[15rem] font-kiona font-bold text-white/[0.02] leading-none select-none -z-10 translate-x-1/4">
            ontacts
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-24">
              <h2 className="text-xs sm:text-sm font-kiona text-[#c5a47e] tracking-[0.3em] uppercase font-bold">A conversa começa aqui</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-kiona font-bold mb-6 sm:mb-10 leading-tight uppercase">
                  Se o seu projeto exige capacidade técnica, escala e previsibilidade.
                </h3>
                
                <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12 md:mt-16">
                  <div className="flex items-center gap-4 text-gray-400 font-light">
                    <Phone className="text-[#c5a47e]" size={20} />
                    <span className="tracking-wider">(11) 93740-8195</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 font-light">
                    <Mail className="text-[#c5a47e]" size={20} />
                    <span className="tracking-wider">fabricio@fcon.com.br</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 font-light">
                    <MapPin className="text-[#c5a47e]" size={20} />
                    <span className="tracking-wider">Base em São Paulo - SP</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#26292c] p-6 sm:p-8 md:p-10 border border-white/5 relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a47e]"></div>
                <h4 className="text-sm font-kiona tracking-[0.2em] uppercase mb-8 font-bold">Preencha o Formulário abaixo</h4>
                
                <form className="space-y-8" onSubmit={handleEmailSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input 
                      type="text" 
                      name="nome"
                      placeholder="Nome Completo" 
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors placeholder-gray-600"
                    />
                    <input 
                      type="tel" 
                      name="telefone"
                      placeholder="Telefone" 
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors placeholder-gray-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input 
                      type="email" 
                      name="email"
                      placeholder="E-mail*" 
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors placeholder-gray-600"
                    />
                    <select name="cargo" defaultValue="" required className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors text-gray-400 appearance-none">
                      <option value="" disabled>Cargo na empresa</option>
                      <option value="diretor" className="bg-[#1a1a1a]">Diretor</option>
                      <option value="gerente" className="bg-[#1a1a1a]">Gerente</option>
                      <option value="outro" className="bg-[#1a1a1a]">Outro</option>
                    </select>
                  </div>

                  <select name="projeto" defaultValue="" required className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors text-gray-400 appearance-none">
                    <option value="" disabled>Tipo de Projeto</option>
                    <option value="infraestrutura" className="bg-[#1a1a1a]">Infraestrutura urbana</option>
                    <option value="loteamento" className="bg-[#1a1a1a]">Loteamento</option>
                    <option value="edificacao" className="bg-[#1a1a1a]">Edificação</option>
                  </select>

                  <textarea 
                    name="mensagem"
                    placeholder="Mensagem" 
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors placeholder-gray-600 resize-none"
                  ></textarea>

                  {formStatus === 'success' && <div className="text-green-500 text-sm font-semibold text-center mt-4 tracking-wider">MENSAGEM ENVIADA COM SUCESSO! A EQUIPE ENTRARÁ EM CONTATO.</div>}
                  {formStatus === 'error' && <div className="text-red-500 text-sm font-semibold text-center mt-4 tracking-wider">ERRO AO ENVIAR MENSAGEM. TENTE NOVAMENTE MAIS TARDE.</div>}

                  <div className="flex justify-end pt-4">
                    <button type="submit" disabled={isSubmitting} className="bg-[#c5a47e] hover:bg-[#b08d65] cursor-pointer text-white text-sm font-kiona font-bold tracking-[0.2em] uppercase py-4 px-10 rounded-sm transition-all flex items-center gap-3 disabled:opacity-50">
                      {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento'} <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#111] pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t border-white/10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 sm:px-6 md:px-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-16">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-kiona font-bold tracking-wider flex items-center gap-4 mb-4 sm:mb-6">
                  <img src="/logo-fcon-engenharia-construcoes-01-custom-276x276%201.png.png" alt="FCON" className="h-8 sm:h-12 w-auto object-contain brightness-0 invert" />
                  <img src="/logo-carbon-construcoes-instalacoes-aprovado-03-medium-1%201.png.png" alt="CARBON" className="h-6 sm:h-8 w-auto object-contain brightness-0 invert" />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
                  Construções e Infraestrutura.<br/>
                  Desenvolvimento sustentável para o futuro.
                </p>
              </div>

              <div>
                <h4 className="text-white font-kiona font-bold mb-6 tracking-wider uppercase text-sm">Contato</h4>
                <ul className="space-y-3 text-gray-500 text-sm font-light">
                  <li>Base em São Paulo - SP</li>
                  <li>(11) 93740-8195</li>
                  <li>fabricio@fcon.com.br</li>
                  <li>carbonconstrucoes.com.br</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-kiona font-bold mb-6 tracking-wider uppercase text-sm">Navegação Rápida</h4>
                <ul className="space-y-3 text-gray-500 text-sm font-light">
                  <li><a href="#" className="hover:text-[#c5a47e] transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-[#c5a47e] transition-colors">Serviços</a></li>
                  <li><a href="#projects" className="hover:text-[#c5a47e] transition-colors">Portfólio</a></li>
                  <li><a href="#contact" className="hover:text-[#c5a47e] transition-colors">Contato</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 sm:pt-8 flex justify-center items-center text-[10px] sm:text-xs text-gray-600 text-center">
              <div>
                © 2026 Fcon Carbon. Todos os direitos reservados. Site Desenvolvido por <a href="#" className="text-[#c5a47e] hover:underline">Alpha Marketing Digital</a>
              </div>
            </div>
          </motion.div>
        </footer>

        {/* WhatsApp Floating Button */}
        <motion.a
          href="https://wa.me/5511937408195"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
          title="Fale conosco no WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.897-5.335 11.9-11.894a11.83 11.83 0 00-3.415-8.414z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}

