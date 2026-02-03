
import React, { useEffect, useState, useRef } from 'react';
import { 
  ShieldCheck, 
  Gamepad2, 
  Heart, 
  WifiOff, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Play,
  PlayCircle,
  Clock,
  MessageCircle,
  HelpCircle,
  Trophy,
  Zap,
  Users,
  Gift,
  FileText,
  Palette,
  Timer
} from 'lucide-react';

// Importe sua imagem aqui (certifique-se que o nome do arquivo na pasta assets é igual)
import heroImage from './src/assets/hero-tablet.png';

// --- Constants & Types ---

const TESTIMONIALS = [
  { name: "Ana Silva", city: "São Paulo, SP", text: "Meus filhos amam as histórias do Davi. É seguro e educativo! O melhor é que não tem anúncios.", rating: 5 },
  { name: "Ricardo M.", city: "Curitiba, PR", text: "Finalmente um app que ensina valores bíblicos de verdade. Meus filhos trocaram os desenhos bobos por isso.", rating: 5 },
  { name: "Juliana Costa", city: "Fortaleza, CE", text: "O melhor investimento que fiz. As atividades de colorir são ótimas para tirar eles do celular um pouco.", rating: 5 }
];

const FAQS = [
  { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com todas as instruções para acessar o aplicativo." },
  { q: "O pagamento é mensal?", a: "Não! O pagamento é ÚNICO. Você paga uma vez R$ 37 e tem acesso para sempre, sem cobranças futuras." },
  { q: "Funciona em quais dispositivos?", a: "O Bíblia Kids funciona em qualquer celular ou tablet Android e iOS (iPhone/iPad)." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro sem perguntas." }
];

const QUIZ_QUESTIONS = [
  { id: 1, text: "O que seu filho mais gosta de fazer?", options: ["Ouvir Histórias", "Colorir e Desenhar", "Resolver Desafios"] },
  { id: 2, text: "Qual tema desperta mais curiosidade?", options: ["Animais e Natureza", "Heróis e Batalhas", "Milagres e Jesus"] }
];

// --- Components ---

const ScarcityBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(599); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-red-600 text-white py-2.5 px-4 text-center font-black text-sm md:text-base sticky top-0 z-[60] flex items-center justify-center gap-3 shadow-lg">
      <Timer className="w-5 h-5 animate-pulse" />
      <span className="uppercase tracking-tighter">Oferta de lançamento expira em: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
      <a href="#oferta" className="hidden sm:inline-block bg-white text-red-600 px-3 py-0.5 rounded-full text-xs hover:bg-slate-100 transition-colors">PEGAR DESCONTO AGORA</a>
    </div>
  );
};

const WhatsAppButton: React.FC = () => (
  <a 
    href="https://wa.me/5561982041094" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    title="Falar com Suporte"
  >
    <MessageCircle className="w-8 h-8 fill-current" />
    <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Dúvida? Fale conosco!
    </span>
  </a>
);

const FomoNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentName, setCurrentName] = useState("Maria");

  useEffect(() => {
    const names = ["Carlos", "Beatriz", "Pedro", "Mariana", "Lucas", "Fernanda", "Gabriel", "Rafaela"];
    const interval = setInterval(() => {
      setCurrentName(names[Math.floor(Math.random() * names.length)]);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-4 z-50 animate-in slide-in-from-left-full duration-500 bg-white shadow-2xl rounded-2xl p-4 border-2 border-green-100 flex items-center gap-4 max-w-[300px]">
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-6 h-6 text-white" />
      </div>
      <div>
        <p className="text-sm font-black text-slate-900 leading-tight">{currentName} acabou de garantir o acesso!</p>
        <p className="text-[11px] text-green-600 font-bold flex items-center gap-1 mt-1">
          <Zap className="w-3 h-3 fill-current" /> Inscrição confirmada via PIX
        </p>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => (
  <nav className="bg-white/90 backdrop-blur-md z-50 border-b border-sky-100">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-sky-500 p-1.5 rounded-lg shadow-lg">
          <Star className="text-white w-5 h-5 fill-current" />
        </div>
        <span className="font-kids font-bold text-xl text-sky-600">Bíblia Kids</span>
      </div>
      <div className="hidden md:flex gap-6 text-slate-600 font-bold text-sm">
        <a href="#diferenciais" className="hover:text-sky-500 transition-colors">Benefícios</a>
        <a href="#interatividade" className="hover:text-sky-500 transition-colors">Quiz</a>
        <a href="#bonus" className="hover:text-sky-500 transition-colors">Bônus</a>
      </div>
      <a 
        href="#oferta" 
        className="bg-green-500 hover:bg-green-600 text-white font-black py-2.5 px-6 rounded-xl transition-all text-sm shadow-md"
      >
        QUERO O DESCONTO
      </a>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="pt-16 pb-12 px-4 blob-bg overflow-hidden relative">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-sky-400 rounded-full blur-3xl opacity-20"></div>
        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-xs font-black mb-6 uppercase tracking-widest border border-yellow-200">
          <Trophy className="w-4 h-4" /> App Nº 1 de Educação Cristã
        </div>
        
        <h1 className="font-kids font-bold text-4xl md:text-6xl text-slate-900 leading-tight mb-6">
          Proteja o coração do seu filho com <span className="gradient-text">Valores Eternos</span> 
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 mb-10 font-medium leading-relaxed">
          Substitua desenhos sem propósito por histórias que <span className="text-sky-600 font-bold">edificam, ensinam e divertem</span>. O app interativo que os pais cristãos confiam.
        </p>
        
        <div className="flex flex-col gap-4">
          <a 
            href="#oferta" 
            className="group bg-green-500 hover:bg-green-600 hover:scale-105 transform transition-all text-white font-black py-5 px-10 rounded-2xl text-xl shadow-[0_8px_0_0_#15803d] active:shadow-none active:translate-y-[8px] flex items-center justify-center gap-3"
          >
            QUERO O MEU ACESSO VITALÍCIO <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-slate-400 text-sm font-bold flex items-center justify-center lg:justify-start gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" /> Acesso imediato após o pagamento
          </p>
        </div>
      </div>

      <div className="relative flex justify-center pt-8">
        <div className="relative animate-float max-w-[320px] md:max-w-[400px]">
          <div className="absolute -inset-4 bg-sky-200 rounded-[4rem] blur-2xl opacity-30 -z-10 animate-pulse"></div>
          <img 
            src={heroImage} 
            alt="Tablet App Bíblia Kids" 
            className="w-full rounded-[3.5rem] shadow-2xl border-[12px] border-slate-900"
          />
        </div>
      </div>
    </div>
  </section>
);

const QuizSection: React.FC = () => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(false);

  const handleNext = () => {
    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep(prev => prev + 1);
    } else {
      setResult(true);
    }
  };

  return (
    <section id="interatividade" className="py-20 px-4 bg-sky-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <Star className="absolute top-10 left-10 w-20 h-20" />
         <Star className="absolute bottom-10 right-10 w-32 h-32" />
      </div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {!result ? (
          <>
            <h2 className="font-kids font-bold text-3xl md:text-4xl mb-6">Descubra a Jornada do seu Filho! 🗺️</h2>
            <p className="text-sky-100 mb-12">Responda 2 perguntas rápidas e veja qual área do app ele mais vai amar.</p>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
              <div className="mb-4 text-sky-300 font-bold uppercase text-xs tracking-widest">Etapa {step + 1} de {QUIZ_QUESTIONS.length}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-10">{QUIZ_QUESTIONS[step].text}</h3>
              <div className="grid gap-4">
                {QUIZ_QUESTIONS[step].options.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={handleNext}
                    className="bg-white text-sky-900 font-black py-5 px-6 rounded-2xl hover:bg-sky-100 transition-all text-xl shadow-lg active:scale-95"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl shadow-2xl border-4 border-white">🎨</div>
            <h2 className="font-kids font-bold text-4xl md:text-5xl mb-6">Seu filho é um Pequeno Desbravador!</h2>
            <p className="text-sky-100 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Ele vai se encantar com as histórias de <strong>"Heróis da Fé"</strong> e os desafios interativos que preparamos para crianças criativas como ele!
            </p>
            <a href="#oferta" className="inline-flex items-center gap-3 bg-yellow-400 text-yellow-950 font-black py-6 px-12 rounded-2xl text-2xl hover:bg-yellow-300 transition-all hover:scale-105 shadow-[0_10px_0_0_#ca8a04] active:shadow-none active:translate-y-[10px]">
              QUERO COMEÇAR AGORA <ArrowRight className="w-8 h-8" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

const BonusSection: React.FC = () => {
  const bonuses = [
    { title: "Livro de Colorir (Digital)", desc: "Mais de 50 desenhos bíblicos para imprimir e pintar fora das telas.", icon: <Palette className="w-8 h-8" />, value: "R$ 29,90" },
    { title: "Guia de Devocional Familiar", desc: "Um passo a passo para fazer o culto doméstico com as crianças.", icon: <FileText className="w-8 h-8" />, value: "R$ 47,00" },
    { title: "Músicas Bíblicas Kids", desc: "Playlist exclusiva com as canções das histórias para ouvir no carro.", icon: <Gift className="w-8 h-8" />, value: "R$ 19,90" }
  ];

  return (
    <section id="bonus" className="py-24 px-4 bg-amber-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-amber-200 text-amber-900 px-4 py-1 rounded-full text-xs font-black inline-block mb-4 uppercase tracking-widest">Presente Exclusivo</div>
          <h2 className="font-kids font-bold text-4xl md:text-5xl text-slate-900 mb-6">Você ainda leva 3 Super Bônus!</h2>
          <p className="text-slate-700 text-lg font-medium">Comprando hoje, você ganha mais de R$ 90,00 em bônus inteiramente grátis.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((b, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-amber-200 relative group overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white font-black text-[10px] py-1 px-4 rounded-bl-xl">GRÁTIS</div>
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="font-kids font-bold text-xl text-slate-900 mb-3">{b.title}</h3>
              <p className="text-slate-600 mb-4 text-sm font-medium leading-relaxed">{b.desc}</p>
              <p className="text-slate-400 text-xs line-through font-bold">Valor normal: {b.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GuaranteeSection: React.FC = () => (
  <section id="garantia" className="py-20 px-4 bg-white">
    <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-10 md:p-16 border-2 border-slate-100 flex flex-col md:flex-row items-center gap-10">
      <img 
        src="https://img.icons8.com/color/512/guarantee.png" 
        alt="Garantia 7 Dias" 
        className="w-48 h-48 drop-shadow-xl"
      />
      <div>
        <h2 className="font-kids font-bold text-3xl md:text-4xl text-slate-900 mb-6">Risco Zero: Garantia de 7 Dias!</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
          Estamos tão confiantes de que seu filho vai amar o Bíblia Kids que oferecemos uma garantia blindada. Se em até 7 dias você achar que o app não é para vocês, basta nos enviar um e-mail e <span className="text-slate-900 font-black">devolvemos cada centavo</span>. Sem letras miúdas.
        </p>
        <div className="flex items-center gap-2 text-green-600 font-black uppercase text-sm tracking-widest">
           <ShieldCheck className="w-5 h-5" /> Seu investimento está 100% protegido
        </div>
      </div>
    </div>
  </section>
);

const Pricing: React.FC = () => (
  <section id="oferta" className="py-24 px-4 relative overflow-hidden bg-sky-600">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[3.5rem] shadow-3xl p-8 md:p-16 text-center relative z-10">
        <div className="absolute top-6 left-6 -rotate-12 bg-red-600 text-white font-black py-2 px-6 rounded-lg text-sm animate-bounce shadow-xl">
          MENOR PREÇO DO ANO
        </div>

        <h2 className="font-kids font-bold text-4xl md:text-6xl text-slate-900 mb-10 italic leading-tight">
          "O valor de um lanche para investir na <span className="text-sky-600 underline">Fé</span> do seu filho"
        </h2>
        
        <div className="my-10 bg-sky-50 py-10 rounded-[2.5rem] border-2 border-sky-100">
          <p className="text-slate-400 text-2xl line-through mb-2 font-bold decoration-slate-400 decoration-2">De R$ 97,00</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-4xl font-bold text-slate-900 self-start mt-6">Por</span>
            <span className="text-8xl md:text-[10rem] font-black text-green-500 tracking-tighter leading-none">R$ 37</span>
            <span className="text-4xl font-bold text-slate-900 self-end mb-6">,00</span>
          </div>
          <p className="text-slate-800 font-black mt-8 text-2xl uppercase tracking-tighter">🚀 PAGAMENTO ÚNICO • SEM MENSALIDADE</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-xl mx-auto">
          {["Acesso Vitalício Para Sempre", "Todos os Bônus Inclusos", "Ambiente 100% Seguro", "Atualizações Gratuitas"].map((t, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-700 font-bold text-base">
              <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0" />
              <span>{t}</span>
            </div>
          ))}
        </div>

        <a href="https://pay.wiapy.com/NkRyjvREC" className="w-full bg-green-500 hover:bg-green-600 hover:scale-[1.03] transform transition-all text-white font-black py-8 px-10 rounded-[2.5rem] text-2xl md:text-4xl shadow-[0_12px_0_0_#15803d] active:shadow-none active:translate-y-[12px] flex items-center justify-center gap-4 mb-10 group">
          GARANTIR MINHA VAGA AGORA <ChevronRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
        </a>
        
        <div className="flex flex-col items-center gap-6">
           <img src="https://logodownload.org/wp-content/uploads/2015/03/pix-logo-1.png" className="h-8 opacity-70" alt="Pix" />
           <p className="text-slate-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
             <ShieldCheck className="w-5 h-5 text-green-500" /> Compra processada em ambiente seguro
           </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-white py-20 px-4">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
      <div className="col-span-1">
        <div className="flex items-center gap-2 mb-8">
          <Star className="text-sky-500 w-8 h-8 fill-current" />
          <span className="font-kids font-bold text-3xl tracking-tight">Bíblia Kids</span>
        </div>
        <p className="text-slate-400 leading-relaxed text-lg">
          Ajudando famílias a ensinarem o caminho que se deve andar, de forma leve, lúdica e bíblica.
        </p>
      </div>
      
      <div>
        <h4 className="font-bold text-xl mb-8 border-b border-slate-800 pb-2 w-fit">Acesso Rápido</h4>
        <ul className="space-y-4 text-slate-400 text-lg">
          <li><a href="#oferta" className="hover:text-white transition-colors">Comprar agora</a></li>
          <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
          <li><a href="https://wa.me/5511999999999" className="hover:text-green-400 transition-colors">Suporte WhatsApp</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-xl mb-8 border-b border-slate-800 pb-2 w-fit">Políticas</h4>
        <ul className="space-y-4 text-slate-400 text-lg">
          <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-10 border-t border-slate-900 text-center">
      <p className="text-slate-500 text-xs mb-4">© {new Date().getFullYear()} Bíblia Kids • Todos os direitos reservados.</p>
      <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">Desenvolvido com amor para edificar sua família.</p>
    </div>
  </footer>
);

const VideoSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 px-4 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-kids font-bold text-3xl md:text-5xl text-slate-900 mb-6">Veja como o Bíblia Kids funciona!</h2>
        <p className="text-slate-600 text-xl font-medium">Histórias interativas que prendem a atenção no que realmente importa.</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div 
          className="relative group cursor-pointer overflow-hidden rounded-[3rem] shadow-2xl border-[12px] border-white ring-1 ring-slate-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="aspect-video bg-slate-900 flex items-center justify-center relative">
            {isHovered ? (
              <iframe
                className="absolute inset-0 w-full h-full pointer-events-none"
                src="https://www.youtube.com/embed/NjY8XeRns3c?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=NjY8XeRns3c&fs=0&disablekb=1&iv_load_policy=3&playsinline=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1512418490979-92798ccc13b0?auto=format&fit=crop&w=1200&q=80" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60" 
                  alt="Video Bíblia Kids"
                />
                <div className="z-10 flex flex-col items-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/30 shadow-2xl">
                    <Play className="text-white w-12 h-12 fill-current ml-2" />
                  </div>
                  <p className="text-white font-black mt-6 text-2xl uppercase tracking-widest drop-shadow-lg">Passe o mouse para assistir</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Differentials: React.FC = () => (
  <section id="diferenciais" className="py-24 px-4 bg-white relative">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-kids font-bold text-4xl md:text-5xl text-slate-900 mb-6">A Melhor Escolha para sua Família</h2>
        <div className="h-2 w-32 bg-sky-400 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Zero Anúncios", desc: "Ambiente seguro e sem interrupções para seu filho.", icon: <ShieldCheck className="w-8 h-8 text-sky-500" />, color: "bg-sky-50" },
          { title: "Gamificação", desc: "Desafios que tornam o aprendizado bíblico uma diversão.", icon: <Gamepad2 className="w-8 h-8 text-purple-500" />, color: "bg-purple-50" },
          { title: "Princípios", desc: "Ensino focado no caráter e no temor a Deus.", icon: <Heart className="w-8 h-8 text-rose-500" />, color: "bg-rose-50" },
          { title: "Modo Offline", desc: "Perfeito para viagens e lugares sem internet.", icon: <WifiOff className="w-8 h-8 text-amber-500" />, color: "bg-amber-50" }
        ].map((item, idx) => (
          <div key={idx} className="p-10 rounded-[3rem] border border-slate-100 hover:border-sky-300 hover:shadow-2xl transition-all duration-500 bg-slate-50">
            <div className={`${item.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8`}>{item.icon}</div>
            <h3 className="font-kids font-bold text-2xl text-slate-900 mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection: React.FC = () => (
  <section className="py-24 px-4 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-kids font-bold text-4xl text-slate-900 mb-6 underline decoration-sky-400 underline-offset-8">Aprovado por Pais Reais</h2>
        <div className="flex justify-center gap-1 text-yellow-400 mb-8">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 relative group hover:-translate-y-2 transition-transform">
             <MessageCircle className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-sky-100 transition-colors" />
             <p className="text-slate-700 mb-8 text-lg font-medium leading-relaxed italic">"{t.text}"</p>
             <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-black text-slate-900 text-lg">{t.name}</p>
                  <p className="text-sm text-slate-400 font-bold">{t.city}</p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FaqSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <HelpCircle className="w-20 h-20 text-sky-500 mx-auto mb-6" />
          <h2 className="font-kids font-bold text-4xl text-slate-900 mb-4">Ainda tem dúvidas?</h2>
          <p className="text-slate-500 font-bold">Nós respondemos as mais comuns aqui:</p>
        </div>
        
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-8 text-left flex items-center justify-between font-black text-xl text-slate-800 hover:bg-slate-100 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronRight className={`w-6 h-6 text-sky-500 transition-transform ${open === i ? 'rotate-90' : ''}`} />
              </button>
              {open === i && (
                <div className="p-8 pt-0 text-slate-600 text-lg leading-relaxed font-medium">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScarcityBanner />
      <Navbar />
      <Hero />
      <VideoSection />
      <Differentials />
      <QuizSection />
      <BonusSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FaqSection />
      <Pricing />
      <Footer />
      
      <FomoNotification />
      <WhatsAppButton />
      
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-xl border-t-2 border-slate-100 z-[70] transition-all duration-700 md:hidden flex gap-4 items-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)] ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex-1">
          <p className="text-[10px] text-red-500 font-black uppercase tracking-widest">Oferta Vitalícia</p>
          <p className="font-black text-slate-900 text-2xl leading-none">R$ 37,00</p>
        </div>
        <a 
          href="https://pay.wiapy.com/NkRyjvREC" 
          className="bg-green-500 text-white font-black py-4 px-8 rounded-2xl flex items-center justify-center gap-2 shadow-lg animate-pulse"
        >
          COMPRAR AGORA <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default App;
