import { Calendar, ArrowRight } from 'lucide-react';

export function Noticias() {
  // Área preparada para adicionar notícias
  // Basta descomentar e adicionar as informações
  const noticias = [
    // {
    //   titulo: 'Título da Notícia',
    //   resumo: 'Breve descrição da notícia que será exibida no card...',
    //   data: '15 de Novembro, 2024',
    //   imagem: '/caminho/para/imagem-noticia.jpg',
    //   link: 'https://link-para-noticia.com'
    // },
  ];

  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Notícias</h2>
          <div className="w-20 h-1 bg-[#5F7A4E] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe as últimas novidades e conquistas da Raiz Viva
          </p>
        </div>

        {/* Grid de Notícias */}
        {noticias.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {noticias.map((noticia, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={noticia.imagem}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    <span>{noticia.data}</span>
                  </div>

                  <h3 className="text-xl mb-3 text-gray-900 group-hover:text-[#5F7A4E] transition-colors">
                    {noticia.titulo}
                  </h3>

                  <p className="text-gray-600 mb-4">{noticia.resumo}</p>

                  {noticia.link && (
                    <a
                      href={noticia.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#5F7A4E] hover:gap-3 transition-all"
                    >
                      Ler mais
                      <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Placeholder quando não há notícias */
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
              <div className="w-16 h-16 bg-[#5F7A4E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-[#5F7A4E]" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">
                Em breve, novidades por aqui!
              </h3>
              <p className="text-gray-600 mb-6">
                Estamos preparando conteúdos incríveis sobre nossas inovações e
                conquistas.
              </p>

              {/* Instruções para adicionar notícias */}
              <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200 text-left">
                <p className="text-gray-700 mb-2">
                  <strong>📋 Para adicionar notícias:</strong>
                </p>
                <ol className="text-gray-600 space-y-2 ml-4">
                  <li>
                    1. Abra o arquivo{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      /components/Noticias.tsx
                    </code>
                  </li>
                  <li>
                    2. Descomente o array{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      noticias
                    </code>{' '}
                    (linhas 5-12)
                  </li>
                  <li>
                    3. Adicione os dados da notícia: título, resumo, data, imagem e
                    link
                  </li>
                  <li>4. A notícia aparecerá automaticamente formatada</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Exemplo de estrutura visual para adicionar mais notícias */}
        {noticias.length > 0 && (
          <div className="mt-12 text-center">
            <button className="bg-[#5F7A4E] hover:bg-[#4d6440] text-white px-8 py-3 rounded-lg transition-all inline-flex items-center justify-center">
              Ver Todas as Notícias
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
