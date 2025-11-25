import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappNumber = '71996178589';
  const whatsappUrl = `https://wa.me/5571996178589`;

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F9F5F0] text-[#5F7A4E] px-4 py-2 rounded-full mb-6">
              <MessageCircle size={18} className="flex-shrink-0" />
              <span className="text-sm">Entre em Contato</span>
            </div>
            
            <h2 className="text-gray-900 mb-4">
              Fale com a nossa equipe
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas ou solicite mais informações
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-gray-900 mb-6">Informações de contato</h3>
              
              <div className="space-y-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-[#F9F5F0] rounded-lg hover:bg-[#F5E6D3] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#5F7A4E] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="text-white flex-shrink-0" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">WhatsApp</p>
                    <p className="text-gray-600">(71) 99617-8589</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-[#F9F5F0] rounded-lg">
                  <div className="w-12 h-12 bg-[#8B6F47] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white flex-shrink-0" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">E-mail</p>
                    <p className="text-gray-600">raiz.viva@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F9F5F0] rounded-lg">
                  <div className="w-12 h-12 bg-[#8B6F47] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white flex-shrink-0" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">Localização</p>
                    <p className="text-gray-600">Cidade / Estado</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#F9F5F0] to-[#F5E6D3] rounded-xl border border-[#5F7A4E]/30">
                <p className="text-[#4A5F3D] text-sm leading-relaxed">
                  <strong>Horário de atendimento:</strong><br />
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-gray-900 mb-6">Envie uma mensagem</h3>
              
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
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full min-h-[150px]"
                    placeholder="Digite sua mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#5F7A4E] hover:bg-[#4A5F3D] text-white py-4 rounded-lg transition-colors"
                >
                  <Send size={18} className="flex-shrink-0" />
                  <span>Enviar mensagem</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
