import { useState } from 'react';
import { Mail, User, CheckCircle, AlertCircle } from 'lucide-react';

export function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Criar o corpo do email
      const subject = encodeURIComponent('Novo Cadastro - Raiz Viva');
      const body = encodeURIComponent(
        `Novo cadastro recebido!\n\nNome: ${nome}\nE-mail: ${email}\n\nData: ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}`
      );

      // Abrir cliente de email
      const mailtoLink = `mailto:raiz.viva@outlook.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      // Simular sucesso após um pequeno delay
      setTimeout(() => {
        setStatus('success');
        setMensagem('Cadastro realizado com sucesso! Você receberá nossas atualizações em breve.');
        setNome('');
        setEmail('');

        // Reset status após 5 segundos
        setTimeout(() => {
          setStatus('idle');
          setMensagem('');
        }, 5000);
      }, 1000);
    } catch (error) {
      setStatus('error');
      setMensagem('Ocorreu um erro ao processar seu cadastro. Por favor, tente novamente.');

      setTimeout(() => {
        setStatus('idle');
        setMensagem('');
      }, 5000);
    }
  };

  return (
    <section id="cadastro" className="py-20 bg-[#5F7A4E] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Fique por Dentro</h2>
            <div className="w-20 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-xl text-white/90">
              Cadastre-se para receber atualizações sobre nossos produtos e novidades
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="space-y-6">
              {/* Campo Nome */}
              <div>
                <label htmlFor="nome" className="block mb-2 text-gray-700">
                  Nome Completo
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#5F7A4E] focus:outline-none transition-colors text-gray-900"
                    placeholder="Seu nome completo"
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {/* Campo E-mail */}
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  E-mail
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#5F7A4E] focus:outline-none transition-colors text-gray-900"
                    placeholder="seu@email.com"
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {/* Botão Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#5F7A4E] hover:bg-[#4d6440] text-white py-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center justify-center"
              >
                {status === 'loading' ? 'Enviando...' : 'Receber Atualizações'}
              </button>

              {/* Mensagens de Status */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <p className="text-green-800">{mensagem}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                  <p className="text-red-800">{mensagem}</p>
                </div>
              )}

              {/* Informação de Privacidade */}
              <p className="text-sm text-gray-500 text-center">
                Seus dados estão seguros conosco e não serão compartilhados com terceiros.
              </p>
            </div>
          </form>

          {/* Informação adicional */}
          <div className="mt-8 text-center text-white/80">
            <p className="text-sm">
              Ao se cadastrar, você receberá atualizações sobre o nosso produto
              e conteúdos exclusivos sobre biotecnologia e cafeicultura sustentável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
