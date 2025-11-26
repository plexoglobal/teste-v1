import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  MessageCircle, 
  Clock, 
  Zap, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Users,
  Briefcase
} from 'lucide-react';
import { Button, Card, Section, Badge, FeatureItem } from './components/ui';

// Cute Owl Logo Component
const OwlLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <circle cx="50" cy="50" r="45" fill="#58cc02" />
    {/* Ears */}
    <path d="M20 25 L35 15 L35 30 Z" fill="#58cc02" />
    <path d="M80 25 L65 15 L65 30 Z" fill="#58cc02" />
    {/* Belly Patch */}
    <ellipse cx="50" cy="70" rx="30" ry="20" fill="#86efac" opacity="0.5" />
    {/* Glasses Frame */}
    <circle cx="35" cy="45" r="16" stroke="#1f2937" strokeWidth="6" fill="#ffffff" />
    <circle cx="65" cy="45" r="16" stroke="#1f2937" strokeWidth="6" fill="#ffffff" />
    <path d="M51 45 L49 45" stroke="#1f2937" strokeWidth="6" />
    {/* Eyes */}
    <circle cx="35" cy="45" r="6" fill="#1f2937" />
    <circle cx="65" cy="45" r="6" fill="#1f2937" />
    {/* Beak */}
    <path d="M45 60 L55 60 L50 68 Z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 14, minutes: 23 });
  
  // FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mock Notification Animation
  const [notificationVisible, setNotificationVisible] = useState(true);

  return (
    <div className="min-h-screen bg-primary-50/50 font-sans text-gray-900 selection:bg-primary-200">
      
      {/* --- Header --- */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <OwlLogo className="w-12 h-12 hover:rotate-12 transition-transform duration-300" />
              <span className="font-extrabold text-2xl tracking-tight text-primary-600 brand-font">OPORTUNIZAP</span>
            </div>

            <nav className="hidden md:flex gap-8 items-center font-bold text-gray-600">
              <a href="#como-funciona" className="hover:text-primary-600 transition-colors">Como funciona</a>
              <a href="#beneficios" className="hover:text-primary-600 transition-colors">Benefícios</a>
              <a href="#faq" className="hover:text-primary-600 transition-colors">Dúvidas</a>
              <Button onClick={scrollToPricing} size="sm" className="font-extrabold shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-[4px]">
                Começar Agora
              </Button>
            </nav>

            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 flex flex-col gap-4 shadow-lg absolute w-full z-50">
             <a href="#como-funciona" className="block py-2 text-gray-600 font-bold" onClick={() => setIsMenuOpen(false)}>Como funciona</a>
             <a href="#beneficios" className="block py-2 text-gray-600 font-bold" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
             <a href="#faq" className="block py-2 text-gray-600 font-bold" onClick={() => setIsMenuOpen(false)}>Dúvidas</a>
             <Button onClick={() => { scrollToPricing(); setIsMenuOpen(false); }} fullWidth className="font-bold">Começar Agora</Button>
          </div>
        )}
      </header>

      {/* --- Hero Section --- */}
      <Section className="pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm animate-bounce-slow">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              <span className="text-sm font-bold text-gray-600">Mais de 900 grupos monitorados</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] brand-font">
              Nunca Mais Perca uma <span className="text-primary-500 underline decoration-wavy decoration-primary-300 decoration-4">Oportunidade</span> nos Grupos do WhatsApp
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-medium">
              Enquanto você dorme, a corujinha do <strong className="text-primary-600">Oportunizap</strong> vigia. Dezenas de oportunidades surgem nos seus grupos. Nós te avisamos na hora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToPricing} size="xl" className="font-extrabold text-lg shadow-[0_6px_0_rgb(21,128,61)] active:shadow-none active:translate-y-[6px] hover:-translate-y-0.5 transition-all">
                COMEÇAR AGORA
              </Button>
            </div>
          </div>

          {/* Right Visual (Notification Mockup) */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-400/20 rounded-full blur-[80px]"></div>
            
            {/* Phone Mockup Container */}
            <div className="relative w-full max-w-sm mx-auto animate-float">
               {/* Floating Checkmark Sticker */}
               <div className="absolute -top-4 -right-4 z-30 hidden md:block">
                 <div className="relative animate-bounce-slow">
                   <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-xl"></div>
                   <div className="relative bg-white p-3 rounded-2xl shadow-2xl border-4 border-primary-200 rotate-12 hover:rotate-6 transition-transform duration-300">
                     <span className="text-3xl">✅</span>
                   </div>
                 </div>
               </div>
               
               <div className={`
                  bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-100 p-4 transition-all duration-500
                  ${notificationVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
               `}>
                  {/* Fake Dynamic Island/Top Bar */}
                  <div className="flex justify-between items-center mb-6 px-4 pt-2">
                    <span className="text-xs font-bold text-gray-400">9:41</span>
                    <div className="w-20 h-6 bg-gray-100 rounded-full mx-auto absolute left-0 right-0 top-5"></div>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>

                  {/* Notification Card */}
                  <div className="bg-gray-50 rounded-2xl p-4 shadow-sm border border-gray-200 mb-2 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-500"></div>
                    <div className="flex gap-3">
                       <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0 border border-primary-200">
                         <OwlLogo className="w-7 h-7" />
                       </div>
                       <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-gray-900 text-sm">OPORTUNIDADE DETECTADA!</h4>
                            <span className="text-xs text-gray-500">Há 2 min</span>
                          </div>
                          <p className="text-xs text-gray-600 font-medium mt-1">Grupo: Empreendedores SP</p>
                          <p className="text-xs text-gray-500 mt-0.5">Carlos Silva</p>
                          <div className="mt-2 bg-white p-2 rounded-lg border border-gray-100 text-sm text-gray-800 italic relative">
                            <div className="absolute -left-1 top-2 w-2 h-2 bg-white border-l border-b border-gray-100 rotate-45"></div>
                            "Preciso de alguém pra fazer automação no meu CRM urgente. Quem indica?"
                          </div>
                       </div>
                    </div>
                    <button className="w-full mt-3 bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-[0_3px_0_rgb(21,128,61)] active:translate-y-[3px] active:shadow-none">
                      VER DETALHES
                    </button>
                  </div>

                  {/* Blurred messages behind to simulate depth */}
                  <div className="space-y-3 opacity-30 blur-[1px] scale-95 origin-top">
                    <div className="h-16 bg-gray-100 rounded-2xl w-full"></div>
                    <div className="h-16 bg-gray-100 rounded-2xl w-full"></div>
                  </div>

               </div>
               
               {/* Decorative Element */}
               <div className="absolute -right-8 -bottom-8 bg-white p-3 rounded-2xl shadow-xl rotate-12 animate-bounce-slow">
                  <div className="text-3xl">💰</div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- Problem Section --- */}
      <section className="bg-white py-20 rounded-t-[3rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] z-20 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 brand-font">O Problema que Todo Empreendedor Enfrenta</h2>
            <div className="h-2 w-24 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               "Você participa de 5, 10, 15 grupos profissionais",
               "Centenas de mensagens por dia",
               "Impossível ler tudo em tempo real",
               "Oportunidades aparecem e desaparecem em minutos",
               "Quando você vê, alguém já respondeu primeiro",
               "Você perde negócios sem nem saber"
             ].map((item, idx) => (
               <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-red-50 border-2 border-red-100 hover:border-red-200 transition-colors">
                 <XCircle className="text-red-500 shrink-0" size={24} fill="#fee2e2" />
                 <p className="font-bold text-gray-700">{item}</p>
               </div>
             ))}
          </div>

          <div className="mt-12 bg-[#1f2937] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl border-b-8 border-gray-900">
             <h3 className="text-2xl md:text-3xl font-bold mb-2 brand-font">
               💸 Quantos reais você já perdeu por não ver uma mensagem a tempo?
             </h3>
             <p className="text-gray-400 mt-4 font-medium">Pare de deixar dinheiro na mesa.</p>
          </div>
        </div>
      </section>

      {/* --- Solution Section --- */}
      <Section id="como-funciona" className="bg-primary-50">
        <div className="text-center mb-16">
           <Badge>A Solução Definitiva</Badge>
           <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-6 brand-font">
             Apresentamos o Oportunizap
           </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
             Nossa corujinha monitora seus grupos 24/7 e te avisa quando surge uma oportunidade real.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 -z-10 transform translate-y-4"></div>

           {[
             {
               step: "1",
               title: "Conecte seus grupos",
               desc: "Adicione nossa corujinha aos seus grupos profissionais do WhatsApp. Leva 2 minutos.",
               icon: Users
             },
             {
               step: "2",
               title: "Deixe a IA trabalhar",
               desc: "Nossa inteligência artificial analisa TODA mensagem em tempo real e identifica quem está procurando serviços.",
               icon: Zap
             },
             {
               step: "3",
               title: "Alertas Instantâneos",
               desc: "Quando alguém pedir orçamento ou indicação, você recebe uma notificação na hora.",
               icon: Bell
             }
           ].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 text-center relative hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-sm border border-primary-200">
                  <item.icon size={32} strokeWidth={2.5} />
                </div>
                <div className="absolute top-4 right-4 text-6xl font-black text-gray-100 -z-10 select-none brand-font">{item.step}</div>
                <h3 className="text-xl font-extrabold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
             </div>
           ))}
        </div>

        <div className="mt-16 text-center">
          <Button onClick={scrollToPricing} size="lg" className="shadow-[0_4px_0_rgb(21,128,61)] active:translate-y-[4px] active:shadow-none">
            COMEÇAR AGORA
          </Button>
        </div>
      </Section>

      {/* --- Benefits Section --- */}
      <Section id="beneficios" className="bg-white">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-black text-gray-900 brand-font">O Que Você Ganha</h2>
           <p className="text-gray-600 mt-4 font-medium text-lg">Vantagens injustas sobre seus concorrentes</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureItem 
            icon={Clock} 
            title="Velocidade de Resposta" 
            description="Seja sempre o primeiro a responder. Quem chega primeiro, fecha o negócio."
          />
          <FeatureItem 
            icon={TrendingUp} 
            title="Zero Esforço" 
            description="Não precisa mais ficar rolando grupos o dia todo. Nossa corujinha faz isso por você."
          />
          <FeatureItem 
            icon={Target} 
            title="Precisão Cirúrgica" 
            description="IA treinada para ignorar conversas casuais e focar apenas em oportunidades reais."
          />
          <FeatureItem 
            icon={MessageCircle} 
            title="Contextualizado" 
            description="Receba não só o alerta, mas o contexto completo: quem perguntou, quando, em qual grupo."
          />
          <FeatureItem 
            icon={Users} 
            title="Multiplique sua Presença" 
            description="Monitore quantos grupos quiser simultaneamente. É como ter um assistente 24/7."
          />
          <FeatureItem 
            icon={Briefcase} 
            title="ROI Imediato" 
            description="Basta fechar 1 cliente por mês para pagar o investimento 10x."
          />
        </div>
      </Section>

      {/* --- Social Proof --- */}
      <Section className="bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#1f2937] text-white rounded-[3rem] mx-4 lg:mx-auto max-w-7xl my-10 overflow-hidden relative shadow-2xl border border-gray-700/50">
         {/* Decorative gradient overlay */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-primary-500/20 via-transparent to-primary-400/20"></div>
         <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         
         <div className="relative z-10 py-12 px-4 md:px-8">
            <div className="text-center mb-12">
               <Badge className="bg-primary-500/20 text-primary-300 border-primary-400/30 mb-4">Depoimentos Reais</Badge>
               <h2 className="text-3xl md:text-4xl font-black mb-4 brand-font">Quem já está usando e lucrando</h2>
               <p className="text-gray-400 font-medium">Veja o que nossos clientes estão dizendo</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 mt-6">
              {[
                {
                  role: "Agências Digitais", 
                  quote: "Capturamos 3 pedidos de orçamento na primeira semana. ROI imediato!", 
                  color: "border-l-4 border-blue-400",
                  icon: "💼",
                  name: "Maria Silva"
                },
                {
                  role: "Consultores", 
                  quote: "Fechei um projeto de R$ 15k que teria perdido se não fosse o alerta. Valeu cada centavo!", 
                  color: "border-l-4 border-primary-400",
                  icon: "🎯",
                  name: "Carlos Mendes"
                },
                {
                  role: "Freelancers", 
                  quote: "Agora eu durmo tranquilo sabendo que não vou perder nenhuma oportunidade. A corujinha trabalha enquanto eu descanso.", 
                  color: "border-l-4 border-purple-400",
                  icon: "✨",
                  name: "Ana Costa"
                },
              ].map((proof, i) => (
                <div key={i} className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-3xl ${proof.color} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-700/50 relative overflow-hidden`}>
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
                  
                  {/* Quote icon */}
                  <div className="text-4xl mb-4 opacity-80">{proof.icon}</div>
                  
                  <p className="text-gray-200 italic mb-6 text-base md:text-lg leading-relaxed relative z-10">"{proof.quote}"</p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-700/50">
                    <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300 font-bold">
                      {proof.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{proof.name}</p>
                      <p className="font-semibold text-primary-400 uppercase tracking-wider text-xs">{proof.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-gray-800 via-gray-800/90 to-gray-800 p-8 rounded-3xl border-2 border-primary-500/30 max-w-3xl mx-auto backdrop-blur-sm shadow-xl relative overflow-hidden">
               {/* Background decoration */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-400/10 rounded-full blur-2xl"></div>
               
               <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                     <span className="text-3xl">🏢</span>
                     <p className="font-bold text-primary-400 text-lg uppercase tracking-wide">Empresas de Serviço</p>
                  </div>
                  <p className="text-gray-200 font-semibold text-lg leading-relaxed italic">"Nosso time de vendas adora. Leads quentes chegando direto no WhatsApp. A corujinha não perde uma oportunidade!"</p>
                  <div className="mt-4 flex items-center justify-center gap-2 text-primary-300">
                     <span className="text-2xl">⭐</span>
                     <span className="text-2xl">⭐</span>
                     <span className="text-2xl">⭐</span>
                     <span className="text-2xl">⭐</span>
                     <span className="text-2xl">⭐</span>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* --- Included Features --- */}
      <Section className="bg-white">
        <div className="bg-primary-50 rounded-[3rem] p-8 md:p-12 border-4 border-primary-100 relative overflow-hidden">
           {/* Early Access Badge */}
           <div className="absolute top-6 right-6 z-10">
             <div className="bg-amber-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
               <span className="text-sm">✨</span>
               <span className="text-xs font-black uppercase tracking-wide">Benefícios de Early Adopter</span>
             </div>
           </div>
           
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-black text-gray-900 brand-font">Tudo que Você Precisa</h2>
                </div>
                <p className="text-sm text-amber-700 bg-amber-100 inline-block px-3 py-1 rounded-lg font-bold mb-6">
                  ⚡ Entre agora e garanta acesso antecipado a todas essas funcionalidades conforme forem liberadas – sem pagar nada a mais por isso.
                </p>
                <ul className="space-y-4">
                  {[
                    "Monitoramento 24/7 de todos os seus grupos",
                    "Análise por IA de cada mensagem",
                    "Alertas instantâneos via WhatsApp",
                    "Histórico completo de oportunidades",
                    "Filtros customizáveis por tipo de serviço",
                    "Suporte via WhatsApp",
                    "Atualizações automáticas"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-white p-1 rounded-full shadow-sm">
                        <CheckCircle2 className="text-primary-500 shrink-0" size={20} strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-bold">{feat}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm font-bold text-primary-700 bg-primary-100 inline-block px-4 py-2 rounded-xl">
                   ✨ Sem taxas escondidas. Sem limite de mensagens.
                </p>
              </div>
              <div className="flex justify-center">
                 {/* Visual Representation of Dashboard or Analytics */}
                 <div className="bg-white p-6 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] w-full max-w-sm rotate-3 hover:rotate-0 transition-transform duration-500 border-2 border-gray-100">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                       <h4 className="font-bold text-gray-800 flex items-center gap-2">
                         <OwlLogo className="w-6 h-6" />
                         Painel
                       </h4>
                       <span className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></span>
                    </div>
                    <div className="space-y-3">
                       <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-primary-500 hover:bg-gray-100 transition-colors cursor-pointer">
                          <p className="text-xs text-gray-500 mb-1 font-bold uppercase">Última captura</p>
                          <p className="text-sm font-bold text-gray-800">Procura-se Dev React</p>
                       </div>
                       <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-primary-500 hover:bg-gray-100 transition-colors cursor-pointer">
                          <p className="text-xs text-gray-500 mb-1 font-bold uppercase">20 min atrás</p>
                          <p className="text-sm font-bold text-gray-800">Indicação de Designer</p>
                       </div>
                       <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-primary-500 hover:bg-gray-100 transition-colors cursor-pointer">
                          <p className="text-xs text-gray-500 mb-1 font-bold uppercase">1 hora atrás</p>
                          <p className="text-sm font-bold text-gray-800">Orçamento Marketing</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* --- Pricing Section --- */}
      <Section id="pricing" className="relative">
        <div className="text-center mb-10">
          <Badge>Oferta de Fundadores</Badge>
          <h2 className="text-3xl md:text-4xl font-black mt-4 brand-font">Preço especial de lançamento</h2>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card highlight className="border-t-[10px] border-t-primary-500 overflow-hidden shadow-2xl rounded-[2rem]">
             
             <div className="absolute top-0 right-0 bg-red-100 text-red-600 px-4 py-2 text-xs font-black rounded-bl-2xl">
               🔥 RESTAM 14 VAGAS
             </div>

             <div className="text-center pt-10 pb-6 px-6">
                <p className="text-gray-400 line-through text-xl font-bold">R$ 67/mês</p>
                <div className="flex justify-center items-end gap-1 text-primary-600 mt-2">
                   <span className="text-3xl font-black mb-2">R$</span>
                   <span className="text-7xl font-black tracking-tighter">27</span>
                   <span className="text-gray-500 font-bold mb-2">/mês</span>
                </div>
                <p className="text-sm font-bold text-primary-600 bg-primary-50 inline-block px-3 py-1 rounded-full mt-4">
                  De R$ 67 por R$ 27/mês para os primeiros 20 clientes
                </p>
             </div>

             {/* Scarcity Bar */}
             <div className="px-8 mb-8">
               <div className="flex justify-between text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                 <span>Vendidos: 6</span>
                 <span>Total: 20</span>
               </div>
               <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                 <div className="bg-primary-500 h-full rounded-full w-[30%] stripe-pattern"></div>
               </div>
             </div>

             <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-8 mx-4">
               <ul className="space-y-4">
                 {[
                   "Acesso imediato",
                   "Todos os recursos inclusos",
                   "Sem fidelidade",
                   "Cancele quando quiser",
                   "Garantia de 7 dias"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-700 font-bold text-sm">
                     <CheckCircle2 size={18} className="text-primary-500 shrink-0" strokeWidth={3} /> {item}
                   </li>
                 ))}
               </ul>
             </div>

             <div className="px-4 pb-4">
               <a 
                 href="https://payment.ticto.app/O69866FB8" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block"
               >
                 <Button fullWidth size="xl" className="shadow-[0_6px_0_rgb(21,128,61)] active:shadow-none active:translate-y-[6px] text-lg font-black uppercase tracking-wide">
                   GARANTIR MINHA VAGA
                 </Button>
               </a>
             </div>
             
             <p className="text-xs text-center text-gray-400 mt-4 px-6 pb-6 font-medium leading-relaxed">
               Por que tão barato? Estamos na fase inicial e queremos construir casos de sucesso. Você entra agora pagando menos e ajuda a gente a melhorar o produto. Win-win.
             </p>
          </Card>
        </div>
      </Section>

      {/* --- FAQ Section --- */}
      <Section id="faq" className="bg-white">
        <h2 className="text-3xl font-black text-center mb-12 brand-font">Perguntas Frequentes</h2>
        <div className="max-w-2xl mx-auto space-y-4">
           {[
             { q: "Preciso saber programar?", a: "Não. É plug-and-play. Você só adiciona nossa corujinha no grupo e pronto." },
             { q: "Funciona em grupos que eu não sou admin?", a: "Sim! Basta adicionar nossa corujinha como participante normal." },
             { q: "Quantos grupos posso monitorar?", a: "Ilimitado. Monitore 1, 5, 10, 50 grupos. Sem custo adicional." },
             { q: "E se eu não gostar?", a: "7 dias de garantia. Não gostou? Devolvemos 100% do valor." },
             { q: "Como funciona a IA?", a: "Temos um sistema com as melhores IAs do mercado trabalhando 24 horas por dia para encontrar as oportunidades nas mensagens trocadas em TODOS os grupos que você faz parte." },
             { q: "Vai encher meu WhatsApp de notificação?", a: "Não! Só alertamos sobre oportunidades reais. Nada de spam." },
             { q: "E a privacidade dos grupos?", a: "Total. Nossa corujinha só analisa mensagens, nunca compartilha ou armazena conteúdo sensível." },
             { q: "Posso cancelar a qualquer momento?", a: "Sim. Sem multa, sem burocracia." }
           ].map((faq, index) => (
             <div key={index} className="border-2 border-gray-100 rounded-2xl overflow-hidden">
               <button 
                 className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 text-left transition-colors font-bold text-gray-800"
                 onClick={() => toggleFaq(index)}
               >
                 <span className="">{faq.q}</span>
                 {openFaqIndex === index ? <ChevronUp size={20} className="text-primary-500"/> : <ChevronDown size={20} className="text-gray-400"/>}
               </button>
               {openFaqIndex === index && (
                 <div className="p-5 bg-primary-50 text-gray-700 border-t-2 border-gray-100 text-sm leading-relaxed font-medium">
                   {faq.a}
                 </div>
               )}
             </div>
           ))}
        </div>
      </Section>

      {/* --- Guarantee --- */}
      <Section className="pb-24">
         <div className="bg-white border-4 border-gray-900 rounded-3xl p-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-[8px_8px_0px_0px_rgba(31,41,55,1)]">
            <div className="shrink-0 bg-gray-100 p-4 rounded-full">
               <ShieldCheck size={60} className="text-gray-900" strokeWidth={2} />
            </div>
            <div>
               <h3 className="text-2xl font-black mb-2 brand-font uppercase">GARANTIA INCONDICIONAL DE 7 DIAS</h3>
               <p className="text-gray-600 mb-4 font-medium text-lg">
                 Teste por 7 dias. Se não capturar pelo menos 1 oportunidade real, devolvemos 100% do seu dinheiro. Sem perguntas.
               </p>
            </div>
         </div>
      </Section>

      {/* --- Footer & Urgency Bar --- */}
      <footer className="bg-[#1f2937] text-gray-400 py-12 text-center text-sm">
        <div className="flex justify-center mb-6">
           <OwlLogo className="w-12 h-12" />
        </div>
        <div className="mb-4">
          <p className="mb-4 font-bold text-gray-300 text-lg">Alguma dúvida?</p>
          <a 
            href="https://wa.me/5519983034541" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Fale com a gente
          </a>
        </div>
        <p className="mt-8 text-xs text-gray-600 font-bold">© {new Date().getFullYear()} Oportunizap. Todos os direitos reservados.</p>
      </footer>

      {/* Sticky Bottom Bar for Mobile/Desktop Scarcity */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-40 md:hidden">
         <div className="flex items-center justify-between gap-4">
            <div className="text-xs">
               <p className="font-bold text-red-500">🔥 Restam 14 vagas</p>
               <p className="text-gray-500 font-medium">Preço sobe em breve</p>
            </div>
            <Button onClick={scrollToPricing} size="md" className="font-bold">Garantir R$ 67/mês</Button>
         </div>
      </div>
      
      {/* Desktop Floating Urgency (Bottom Right) */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40 animate-bounce-slow">
        <div className="bg-[#1f2937] text-white p-4 rounded-2xl shadow-2xl max-w-xs border-2 border-gray-700">
           <div className="flex justify-between items-center mb-2">
             <span className="text-yellow-400 font-bold flex items-center gap-1 uppercase text-xs tracking-wider"><Clock size={14}/> Oferta acaba em:</span>
           </div>
           <div className="text-2xl font-mono font-bold tracking-widest text-center bg-gray-800 rounded-lg p-2 border border-gray-700 text-primary-400">
             {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
           </div>
           <Button onClick={scrollToPricing} size="sm" className="w-full mt-3 bg-white text-gray-900 hover:bg-gray-100 font-bold border-none">
             Garantir Preço
           </Button>
        </div>
      </div>

    </div>
  );
}