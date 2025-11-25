import { Handshake } from 'lucide-react';

export function Partners() {
  // Instruções: Para adicionar logos de parceiros, substitua o src="" pelas URLs ou imports das imagens
  // Exemplo: src={logoPartner1} ou src="https://url-da-logo.com/logo.png"
  
  const partners = [
    {
      name: 'Parceiro 1',
      category: 'Incubação',
      logo: '', // Adicione a logo aqui
    },
    {
      name: 'Parceiro 2',
      category: 'Pesquisa',
      logo: '', // Adicione a logo aqui
    },
    {
      name: 'Parceiro 3',
      category: 'Agronegócio',
      logo: '', // Adicione a logo aqui
    },
    {
      name: 'Parceiro 4',
      category: 'Aceleração',
      logo: '', // Adicione a logo aqui
    },
    {
      name: 'Parceiro 5',
      category: 'Universidade',
      logo: '', // Adicione a logo aqui
    },
    {
      name: 'Parceiro 6',
      category: 'Tecnologia',
      logo: '', // Adicione a logo aqui
    },
  ];

  return (
    <section id="parceiros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F9F5F0] text-[#5F7A4E] px-4 py-2 rounded-full mb-6">
            <Handshake size={18} className="flex-shrink-0" />
            <span className="text-sm">Ecossistema de Inovação</span>
          </div>
          
          <h2 className="text-gray-900 mb-4">
            Nossos parceiros e programas de inovação
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            A Raiz Viva faz parte de ecossistemas que impulsionam startups de impacto e sustentabilidade.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-[#5F7A4E]/20 rounded-xl p-6 flex flex-col items-center justify-center hover:border-[#5F7A4E] hover:shadow-lg transition-all duration-300 min-h-[160px]"
              >
                {partner.logo ? (
                  // Quando a logo for adicionada, ela será exibida aqui
                  <div className="w-full h-24 flex items-center justify-center mb-3">
                    <img
                      src="https://centev.ufv.br/wp-content/uploads/2023/08/avanca-cafe-e1692364989304-300x260.png"
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ) : (
                  // Placeholder enquanto a logo não for adicionada
                  <div className="w-full h-24 flex items-center justify-center mb-3 bg-[#F9F5F0] rounded-lg">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-[#5F7A4E]/20 rounded-full flex items-center justify-center">
                        <Handshake className="text-[#5F7A4E]" size={24} />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Partner Info - pode ser removido após adicionar as logos */}
                <div className="text-center">
                  <p className="text-gray-400 text-xs mb-1">{partner.category}</p>
                  <p className="text-gray-500 text-sm">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Instructions Box */}
          <div className="mt-12 bg-gradient-to-br from-[#F9F5F0] to-[#F5E6D3] border border-[#5F7A4E]/30 rounded-xl p-6">
            <h4 className="text-[#4A5F3D] mb-3">
              📝 Instruções para adicionar logos dos parceiros:
            </h4>
            <div className="text-[#6B6B6B] text-sm space-y-2">
              <p>
                <strong>1.</strong> Abra o arquivo <code className="bg-white/50 px-2 py-0.5 rounded">/components/Partners.tsx</code>
              </p>
              <p>
                <strong>2.</strong> No array <code className="bg-white/50 px-2 py-0.5 rounded">partners</code>, adicione o caminho da logo no campo <code className="bg-white/50 px-2 py-0.5 rounded">logo</code>
              </p>
              <p>
                <strong>3.</strong> Você pode usar URLs externas ou fazer import das imagens (recomendado)
              </p>
              <p>
                <strong>Exemplo:</strong> <code className="bg-white/50 px-2 py-0.5 rounded">logo: "https://exemplo.com/logo.png"</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
