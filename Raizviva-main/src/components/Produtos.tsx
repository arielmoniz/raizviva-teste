import { Sparkles, Shield, BarChart3, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Produtos() {
  return (
    <section id="produtos" className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Nossos Produtos</h2>
          <div className="w-20 h-1 bg-[#5F7A4E] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bioinsumos regenerativos de alta qualidade, desenvolvidos com
            biotecnologia de ponta
          </p>
        </div>

        {/* Produto Principal */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Imagem */}
              <div className="relative h-64 md:h-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1574081106041-f16966db53d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMG9yZ2FuaWN8ZW58MXx8fHwxNzY0MDQ5Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Bioinsumo regenerativo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#5F7A4E] text-white px-4 py-2 rounded-full">
                  100% Natural
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-[#5F7A4E]" size={28} />
                  <h3 className="text-3xl text-gray-900">Bioinsumo Regenerativo</h3>
                </div>

                <p className="text-lg text-gray-700 mb-6">
                  Nosso bioinsumo é produzido a partir de resíduos do processamento do
                  café, transformados através de processos biotecnológicos avançados.
                  Uma solução sustentável que regenera o solo e aumenta a produtividade
                  da sua lavoura.
                </p>

                {/* Benefícios */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#5F7A4E] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-gray-800">
                        <strong>Regeneração do Solo:</strong> Aumenta a matéria orgânica
                        e melhora a estrutura do solo
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#5F7A4E] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-gray-800">
                        <strong>Maior Produtividade:</strong> Estimula o crescimento
                        saudável das plantas de café
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#5F7A4E] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-gray-800">
                        <strong>Sustentabilidade:</strong> Reduz custos e promove uma
                        agricultura mais limpa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#5F7A4E] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-gray-800">
                        <strong>Economia Circular:</strong> Aproveita resíduos locais,
                        fechando o ciclo produtivo
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-[#5F7A4E] hover:bg-[#4d6440] text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 inline-flex items-center justify-center">
                  Entre em Contato
                </button>
              </div>
            </div>
          </div>

          {/* Diferenciais Técnicos */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#5F7A4E]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-[#5F7A4E]" size={24} />
              </div>
              <h4 className="text-xl mb-2 text-gray-900">Comprovado</h4>
              <p className="text-gray-600">
                Resultados validados cientificamente em testes de campo
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#5F7A4E]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-[#5F7A4E]" size={24} />
              </div>
              <h4 className="text-xl mb-2 text-gray-900">Alto Desempenho</h4>
              <p className="text-gray-600">
                Aumento significativo na saúde e produtividade das plantas
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#5F7A4E]/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-[#5F7A4E]" size={24} />
              </div>
              <h4 className="text-xl mb-2 text-gray-900">Inovação</h4>
              <p className="text-gray-600">
                Tecnologia proprietária desenvolvida com pesquisa de ponta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
