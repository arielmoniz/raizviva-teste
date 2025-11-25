import { Leaf, Recycle, TrendingUp } from 'lucide-react';

export function QuemSomos() {
  // Área preparada para adicionar logos dos programas
  // Basta descomentar e adicionar as imagens
  const programas = [
    // { nome: 'Programa 1', logo: '/caminho/para/logo1.png' },
    // { nome: 'Programa 2', logo: '/caminho/para/logo2.png' },
    // { nome: 'Programa 3', logo: '/caminho/para/logo3.png' },
  ];

  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Quem Somos</h2>
          <div className="w-20 h-1 bg-[#5F7A4E] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Raiz Viva é uma startup deeptech de biotecnologia que revoluciona a
            cafeicultura através da economia circular
          </p>
        </div>

        {/* Nossa História */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-6">
            Desenvolvemos soluções inovadoras que transformam os resíduos do
            processamento do café em bioinsumos regenerativos de alta qualidade.
            Nossa tecnologia proprietária permite que cafeicultores reduzam custos,
            aumentem a produtividade e pratiquem uma agricultura mais sustentável.
          </p>
          <p className="text-lg text-gray-700">
            Através da biotecnologia aplicada, criamos um ciclo virtuoso onde o que
            antes era descartado se torna recurso valioso, promovendo a regeneração
            dos solos e a saúde das plantações de café.
          </p>
        </div>

        {/* Diferenciais */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-[#F5F1E8]">
            <div className="w-16 h-16 bg-[#5F7A4E] rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="text-white" size={32} />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Economia Circular</h3>
            <p className="text-gray-600">
              Transformamos resíduos em recursos valiosos, fechando o ciclo produtivo
              do café
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-[#F5F1E8]">
            <div className="w-16 h-16 bg-[#5F7A4E] rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="text-white" size={32} />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Biotecnologia</h3>
            <p className="text-gray-600">
              Soluções científicas avançadas para regeneração do solo e aumento de
              produtividade
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-[#F5F1E8]">
            <div className="w-16 h-16 bg-[#5F7A4E] rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Impacto Real</h3>
            <p className="text-gray-600">
              Resultados comprovados em sustentabilidade e rentabilidade para
              cafeicultores
            </p>
          </div>
        </div>

        {/* Programas de Aceleração - Área para adicionar logos */}
        {programas.length > 0 && (
          <div className="mt-16">
            <h3 className="text-center text-2xl mb-8 text-gray-900">
              Programas que Participamos
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {programas.map((programa, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src="https://centev.ufv.br/wp-content/uploads/2023/08/avanca-cafe-e1692364989304-300x260.png"
                    className="h-20 w-auto grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instruções para adicionar logos (comentário visual para desenvolvedores) */}
        <div className="mt-16 p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-center text-gray-600">
            <strong>📋 Para adicionar logos de programas:</strong>
            <br />
            Edite o arquivo <code className="bg-gray-200 px-2 py-1 rounded">/components/QuemSomos.tsx</code>
            <br />
            Descomente e adicione os logos no array <code className="bg-gray-200 px-2 py-1 rounded">programas</code> (linhas 5-9)
          </p>
        </div>
      </div>
    </section>
  );
}
