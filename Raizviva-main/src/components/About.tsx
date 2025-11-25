import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sprout, Target } from 'lucide-react';

export function About() {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F9F5F0] text-[#5F7A4E] px-4 py-2 rounded-full mb-6">
              <Sprout size={18} className="flex-shrink-0" />
              <span className="text-sm">Quem Somos</span>
            </div>
            
            <h2 className="text-gray-900 mb-6">
              Aumentando a produtividade de forma sustentável
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Somos uma startup que transforma resíduos da cafeicultura em bioinsumos que regeneram o solo e valorizam o grão.
            </p>
            
            {/* Mission Highlight */}
            <div className="bg-gradient-to-br from-[#F9F5F0] to-[#F5E6D3] border-l-4 border-[#5F7A4E] p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Target className="text-[#5F7A4E] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-[#4A5F3D] italic leading-relaxed">
                    Nossa missão é tornar a agricultura mais eficiente, regenerando a terra e fortalecendo quem cuida dela.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752775312083-1cefe2f93358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwc29pbHxlbnwxfHx8fDE3NjI3MDk2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Solo regenerativo"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5F7A4E] rounded-2xl -z-10 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#8B6F47] rounded-full -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
