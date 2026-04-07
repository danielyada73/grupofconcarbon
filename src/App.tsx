import React, { useEffect, useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, ChevronLeft, ChevronRight, Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="fixed left-0 top-0 h-full w-20 border-r border-white/10 bg-[#15191E]/80 backdrop-blur-sm z-50 flex flex-col items-center justify-between py-10 max-lg:hidden">
        <div className="text-[#c5a47e] font-kiona font-bold text-3xl">
          01 <span className="text-sm text-gray-500 font-normal">/ 03</span>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="transform -rotate-90 whitespace-nowrap text-xs tracking-[0.3em] text-gray-400 uppercase font-kiona font-semibold">
            Construções e Infraestrutura
          </div>
        </div>

        <div className="flex flex-col gap-6 text-gray-500">
          <a href="#" className="hover:text-[#c5a47e] transition-colors"><Instagram size={16} /></a>
          <a href="#" className="hover:text-[#c5a47e] transition-colors"><Twitter size={16} /></a>
          <a href="#" className="hover:text-[#c5a47e] transition-colors"><Linkedin size={16} /></a>
          <a href="#" className="hover:text-[#c5a47e] transition-colors"><Facebook size={16} /></a>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="lg:ml-20 relative z-10">
        
        {/* Header */}
        <header className={`fixed top-0 left-0 lg:left-20 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#15191E]/95 backdrop-blur-md py-3 md:py-4 border-b border-white/10' : 'bg-transparent py-4 md:py-6'}`}>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="text-xl sm:text-2xl md:text-3xl font-kiona font-bold tracking-wider flex items-center gap-1 sm:gap-2">
                <span className="text-white">FCON</span>
                <span className="text-[#c5a47e]">CARBON</span>
              </div>
              <div className="block text-sm font-kiona text-gray-400 tracking-widest font-medium max-md:hidden">
                (11) 93740-8195
              </div>
            </div>

            <nav className="flex items-center gap-6 lg:gap-8 text-sm font-kiona font-semibold tracking-[0.2em] uppercase text-gray-300 max-md:hidden">
              <a href="#" className="text-[#c5a47e]">Home</a>
              <a href="#about" className="hover:text-[#c5a47e] transition-colors">Serviços</a>
              <a href="#projects" className="hover:text-[#c5a47e] transition-colors">Portfólio</a>
              <a href="#contact" className="hover:text-[#c5a47e] transition-colors">Contato</a>
            </nav>

            <button className="text-white p-2 max-md:block md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
                <a href="#" className="hover:text-[#c5a47e] transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-[#c5a47e] transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-[#c5a47e] transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-[#c5a47e] transition-colors"><Facebook size={20} /></a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1541888087425-ce81dfc46928?q=80&w=2000" 
              alt="Infraestrutura" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#15191E] via-[#15191E]/80 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex justify-between items-center w-full">
            <div className="flex items-center gap-4 text-sm font-kiona font-semibold tracking-[0.2em] text-gray-400 uppercase max-lg:hidden">
              <button className="hover:text-[#c5a47e] flex items-center gap-2 transition-colors">
                <ChevronLeft size={16} /> Prev
              </button>
              <button className="hover:text-[#c5a47e] flex items-center gap-2 transition-colors">
                Next <ChevronRight size={16} />
              </button>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl lg:ml-auto lg:text-right"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-kiona font-bold leading-none mb-4 sm:mb-6 uppercase tracking-wide">
                25 anos de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">experiência em</span><br />
                loteamentos e infraestrutura
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
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800" 
                    alt="Abstract Architecture" 
                    className="w-full h-full object-cover grayscale opacity-80"
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
              <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800" alt="Gabião" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191E] via-[#15191E]/50 to-transparent"></div>
              <div className="absolute top-6 sm:top-10 left-6 sm:left-8 right-6 sm:right-8">
                <h3 className="text-xl sm:text-2xl font-kiona font-bold uppercase tracking-wide">Gabião</h3>
              </div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-8">
                <div className="transform -rotate-90 origin-bottom-left whitespace-nowrap text-xs sm:text-sm font-kiona font-semibold tracking-[0.3em] text-[#c5a47e] uppercase">
                  Infraestrutura
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
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800" alt="Portarias e Club House" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191E] via-[#15191E]/50 to-transparent"></div>
              <div className="absolute top-6 sm:top-10 left-6 sm:left-8 right-6 sm:right-8">
                <h3 className="text-xl sm:text-2xl font-kiona font-bold uppercase tracking-wide">Portarias e<br/>Club House</h3>
              </div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-8">
                <div className="transform -rotate-90 origin-bottom-left whitespace-nowrap text-xs sm:text-sm font-kiona font-semibold tracking-[0.3em] text-[#c5a47e] uppercase">
                  Edificações
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
              <img src="https://images.unsplash.com/photo-1541888087425-ce81dfc46928?q=80&w=800" alt="Infraestrutura" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191E] via-[#15191E]/50 to-transparent"></div>
              <div className="absolute top-6 sm:top-10 left-6 sm:left-8 right-6 sm:right-8">
                <h3 className="text-xl sm:text-2xl font-kiona font-bold uppercase tracking-wide">Infraestrutura<br/>Urbana</h3>
              </div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-8">
                <div className="transform -rotate-90 origin-bottom-left whitespace-nowrap text-xs sm:text-sm font-kiona font-semibold tracking-[0.3em] text-[#c5a47e] uppercase">
                  Loteamentos
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
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" alt="Urbanismo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191E] via-[#15191E]/50 to-transparent"></div>
              <div className="absolute top-6 sm:top-10 left-6 sm:left-8 right-6 sm:right-8">
                <h3 className="text-xl sm:text-2xl font-kiona font-bold uppercase tracking-wide">Urbanismo</h3>
              </div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-8">
                <div className="transform -rotate-90 origin-bottom-left whitespace-nowrap text-xs sm:text-sm font-kiona font-semibold tracking-[0.3em] text-[#c5a47e] uppercase">
                  Planejamento
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
              Anos de experiência em loteamentos e infraestrutura de alto padrão
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

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
              }}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center w-full"
            >
              {[
                { name: 'Cipasa', src: '/logos/cipasa.png' },
                { name: 'Alphaville', src: '/logos/alphaville.png' },
                { name: 'Direcional', src: '/logos/direcional.png' },
                { name: 'Zopone', src: '/logos/zopone.png' },
                { name: 'Tamboré', src: '/logos/tambore.png' },
                { name: 'Lote5', src: '/logos/lote5.png' },
                { name: 'Five5', src: '/logos/five5.png' },
              ].map((client) => (
                <motion.div 
                  key={client.name}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer flex justify-center items-center"
                >
                  <img 
                    src={client.src} 
                    alt={client.name} 
                    className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden text-center font-kiona font-bold text-xl md:text-2xl tracking-wider uppercase">
                    {client.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

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
                
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input 
                      type="text" 
                      placeholder="Nome Completo" 
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors placeholder-gray-600"
                    />
                    <input 
                      type="tel" 
                      placeholder="Telefone" 
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors placeholder-gray-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input 
                      type="email" 
                      placeholder="E-mail*" 
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors placeholder-gray-600"
                    />
                    <select defaultValue="" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors text-gray-400 appearance-none">
                      <option value="" disabled>Cargo na empresa</option>
                      <option value="diretor" className="bg-[#1a1a1a]">Diretor</option>
                      <option value="gerente" className="bg-[#1a1a1a]">Gerente</option>
                      <option value="outro" className="bg-[#1a1a1a]">Outro</option>
                    </select>
                  </div>

                  <select defaultValue="" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors text-gray-400 appearance-none">
                    <option value="" disabled>Tipo de Projeto</option>
                    <option value="infraestrutura" className="bg-[#1a1a1a]">Infraestrutura urbana</option>
                    <option value="loteamento" className="bg-[#1a1a1a]">Loteamento</option>
                    <option value="edificacao" className="bg-[#1a1a1a]">Edificação</option>
                  </select>

                  <textarea 
                    placeholder="Mensagem" 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#c5a47e] transition-colors placeholder-gray-600 resize-none"
                  ></textarea>

                  <div className="flex justify-end pt-4">
                    <button type="submit" className="bg-[#c5a47e] hover:bg-[#b08d65] text-white text-sm font-kiona font-bold tracking-[0.2em] uppercase py-4 px-10 rounded-sm transition-all flex items-center gap-3">
                      Solicitar Orçamento <ArrowRight size={16} />
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
                <div className="text-2xl sm:text-3xl font-kiona font-bold tracking-wider flex items-center gap-2 mb-4 sm:mb-6">
                  <span className="text-white">FCON</span>
                  <span className="text-[#c5a47e]">CARBON</span>
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

            <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-gray-600">
              <div className="font-bold tracking-wider text-white">
                FCON <span className="text-[#c5a47e]">CARBON</span>
              </div>
              <div className="text-center">
                © 2026 Carbon FCON. Todos os direitos reservados. Site Desenvolvido por <a href="#" className="text-[#c5a47e] hover:underline">Alpha Marketing Digital</a>
              </div>
            </div>
          </motion.div>
        </footer>

      </div>
    </div>
  );
}
