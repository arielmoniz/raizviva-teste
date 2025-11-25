import { ImageWithFallback } from './figma/ImageWithFallback';
import { Leaf, Recycle, MessageCircle } from 'lucide-react';

export function Solutions() {
  const whatsappNumber = 'XXXXXXXXXXX'; // Número formatado sem caracteres especiais
  const whatsappMessage = 'Olá! Tenho interesse em vender meus resíduos de café.';
  const whatsappUrl = `https://wa.me/5571996178589}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="solucoes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F9F5F0] text-[#5F7A4E] px-4 py-2 rounded-full mb-6">
            <Leaf size={18} className="flex-shrink-0" />
            <span className="text-sm">Nossas Soluções</span>
          </div>
          
          <h2 className="text-gray-900 mb-4">
            Do resíduo à regeneração
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desenvolvemos um ciclo completo de sustentabilidade na cafeicultura
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bioinsumo Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1668511237388-404cc7e56e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW90ZWNobm9sb2d5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjI3MDk2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bioinsumo"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-8">
              <div className="inline-flex items-center gap-2 bg-[#F9F5F0] text-[#5F7A4E] px-3 py-1 rounded-full mb-4">
                <Leaf size={16} className="flex-shrink-0" />
                <span className="text-sm">Produto</span>
              </div>
              
              <h3 className="text-gray-900 mb-4">
                Bioinsumo Regenerativo
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Um produto natural desenvolvido a partir de resíduos de café, que aumenta a sua produtividade.
              </p>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#5F7A4E] hover:bg-[#4A5F3D] text-white px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle size={18} className="flex-shrink-0" />
                <span>Solicitar informações</span>
              </a>
            </div>
          </div>

          {/* Compra de Resíduos Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607278967701-20022b62a6fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB3YXN0ZSUyMGdyb3VuZHN8ZW58MXx8fHwxNzYyNzIyODk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Resíduos de café"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-8">
              <div className="inline-flex items-center gap-2 bg-[#F5E6D3] text-[#6F4E37] px-3 py-1 rounded-full mb-4">
                <Recycle size={16} className="flex-shrink-0" />
                <span className="text-sm">Economia Circular</span>
              </div>
              
              <h3 className="text-gray-900 mb-4">
                Compra de Resíduos
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Compramos os resíduos de café dos produtores parceiros e os transformamos em insumos de alto valor agregado, fortalecendo a economia circular do campo.
              </p>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#8B6F47] hover:bg-[#6F4E37] text-white px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle size={18} className="flex-shrink-0" />
                <span>Venda seus resíduos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
