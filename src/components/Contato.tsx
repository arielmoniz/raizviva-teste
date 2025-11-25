import { Mail, Linkedin, Instagram, MapPin } from 'lucide-react';

export function Contato() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Entre em Contato</h2>
          <div className="w-20 h-1 bg-[#5F7A4E] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem alguma dúvida ou quer saber mais sobre nossas soluções? Estamos aqui
            para ajudar!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <h3 className="text-2xl mb-6 text-gray-900">Fale Conosco</h3>

              {/* E-mail */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#5F7A4E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#5F7A4E]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">E-mail</p>
                  <a
                    href="mailto:raiz.viva@outlook.com"
                    className="text-lg text-gray-900 hover:text-[#5F7A4E] transition-colors"
                  >
                    raiz.viva@outlook.com
                  </a>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#5F7A4E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#5F7A4E]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Localização</p>
                  <p className="text-lg text-gray-900">Brasil</p>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="pt-6">
                <p className="text-sm text-gray-500 mb-4">Siga-nos nas redes sociais</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#5F7A4E] hover:bg-[#4d6440] rounded-lg flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#5F7A4E] hover:bg-[#4d6440] rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="text-white" size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário de Contato Rápido */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl mb-6 text-gray-900">Envie uma Mensagem</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const nome = formData.get('nome');
                  const email = formData.get('email');
                  const mensagem = formData.get('mensagem');

                  const subject = encodeURIComponent('Contato via Site - Raiz Viva');
                  const body = encodeURIComponent(
                    `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
                  );
                  window.location.href = `mailto:raiz.viva@outlook.com?subject=${subject}&body=${body}`;
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="contato-nome" className="block mb-2 text-gray-700 text-sm">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="contato-nome"
                    name="nome"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#5F7A4E] focus:outline-none transition-colors text-gray-900"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="contato-email" className="block mb-2 text-gray-700 text-sm">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="contato-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#5F7A4E] focus:outline-none transition-colors text-gray-900"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block mb-2 text-gray-700 text-sm">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#5F7A4E] focus:outline-none transition-colors resize-none text-gray-900"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5F7A4E] hover:bg-[#4d6440] text-white py-3 rounded-lg transition-all inline-flex items-center justify-center"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
