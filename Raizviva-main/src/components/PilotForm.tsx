import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Rocket, CheckCircle } from 'lucide-react';

export function PilotForm() {
  const [formData, setFormData] = useState({
    nome: '',
    fazenda: '',
    area: '',
    telefone: '',
    desafio: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nome: '',
        fazenda: '',
        area: '',
        telefone: '',
        desafio: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="piloto" className="py-20 bg-gradient-to-br from-[#5F7A4E] to-[#4A5F3D] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Rocket size={18} className="flex-shrink-0" />
              <span className="text-sm">Programa Piloto</span>
            </div>
            
            <h2 className="text-white mb-4">
              Quer participar do Programa Piloto Raiz Viva?
            </h2>
            
            <p className="text-white/90 text-lg">
              Estamos selecionando produtores interessados em testar gratuitamente nossos bioinsumos regenerativos.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-8 text-center">
              <CheckCircle className="mx-auto mb-4 text-[#5F7A4E]" size={64} />
              <h3 className="text-gray-900 mb-2">Obrigado!</h3>
              <p className="text-gray-600">
                Em breve entraremos em contato para conversar sobre o programa piloto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-gray-700 mb-2">
                    Nome *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="fazenda" className="block text-gray-700 mb-2">
                    Fazenda / Cidade *
                  </label>
                  <Input
                    id="fazenda"
                    name="fazenda"
                    type="text"
                    required
                    value={formData.fazenda}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Nome da fazenda ou cidade"
                  />
                </div>

                <div>
                  <label htmlFor="area" className="block text-gray-700 mb-2">
                    Tamanho da área *
                  </label>
                  <Input
                    id="area"
                    name="area"
                    type="text"
                    required
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Ex: 50 hectares"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-gray-700 mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="desafio" className="block text-gray-700 mb-2">
                    Desafio atual com o solo *
                  </label>
                  <Textarea
                    id="desafio"
                    name="desafio"
                    required
                    value={formData.desafio}
                    onChange={handleChange}
                    className="w-full min-h-[120px]"
                    placeholder="Descreva os principais desafios que você enfrenta com o solo..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-[#5F7A4E] hover:bg-[#4A5F3D] text-white py-4 rounded-lg transition-colors"
                >
                  Quero participar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
