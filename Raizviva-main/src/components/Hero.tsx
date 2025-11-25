import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1746623691149-daeff6c67335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzY0MDQ5NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Plantação de café sustentável"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <h1 className="text-5xl md:text-7xl mb-6 max-w-4xl mx-auto">
          Transformando Resíduos em Regeneração
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
          Biotecnologia que converte resíduos do café em bioinsumos regenerativos
          para uma cafeicultura mais sustentável
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('cadastro')}
            className="bg-[#5F7A4E] hover:bg-[#4d6440] text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 inline-flex items-center justify-center"
          >
            Receba Atualizações
          </button>
          <button
            onClick={() => scrollToSection('produtos')}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg border-2 border-white transition-all inline-flex items-center justify-center"
          >
            Conheça Nossos Produtos
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/70" size={32} />
        </div>
      </div>
    </section>
  );
}
