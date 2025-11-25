import { ImageWithFallback } from './figma/ImageWithFallback';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

export function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Raiz Viva é selecionada para o programa de pré-aceleração Avança Café',
      description: 'Fomos escolhidos dentre diversas startups para participar de programa exclusivo focado em inovação na cafeicultura, sendo a única startup do estado da Bahia.',
      date: '03 de Setembro de 2025',
      image: 'https://www.embrapa.br/image/journal/article?img_id=102898971&t=1757079827029&width=320',
      link: 'https://www.embrapa.br/en/tema-integracao-lavoura-pecuaria-floresta-ilpf/busca-de-noticias/-/noticia/102831225/avanca-cafe-seleciona-22-equipes-para-o-programa?p_auth=7Xjarhjb'
    }
  ];

  return (
    <section id="noticias" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F9F5F0] text-[#5F7A4E] px-4 py-2 rounded-full mb-6">
            <Newspaper size={18} className="flex-shrink-0" />
            <span className="text-sm">Notícias</span>
          </div>
          
          <h2 className="text-gray-900 mb-4">
            Acompanhe nossa trajetória
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            As últimas novidades sobre inovação, sustentabilidade e biotecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((news) => (
            <a
              key={news.id}
              href={news.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{news.date}</span>
                </div>
                
                <h3 className="text-gray-900 mb-3 group-hover:text-[#5F7A4E] transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-[#5F7A4E] group-hover:gap-3 transition-all">
                  <span className="text-sm">Ler mais</span>
                  <ArrowRight size={16} className="flex-shrink-0" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
