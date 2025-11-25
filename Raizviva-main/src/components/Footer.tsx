import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import logoImage from 'figma:asset/54a6a2dbeea802b5359610e84e0ae94006412eca.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Raiz Viva" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-white">Raiz Viva</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformando resíduos de café em bioinsumos regenerativos. Tecnologia e sustentabilidade para uma agricultura mais eficiente.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#5F7A4E] rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="flex-shrink-0" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#5F7A4E] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="flex-shrink-0" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#5F7A4E] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} className="flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('quem-somos')}
                  className="text-gray-400 hover:text-[#7A9B6A] transition-colors"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solucoes')}
                  className="text-gray-400 hover:text-[#7A9B6A] transition-colors"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('noticias')}
                  className="text-gray-400 hover:text-[#7A9B6A] transition-colors"
                >
                  Notícias
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('parceiros')}
                  className="text-gray-400 hover:text-[#7A9B6A] transition-colors"
                >
                  Parceiros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-[#7A9B6A] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <span>(XX) XXXXX-XXXX</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <span>contato@raizviva.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Cidade / Estado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Raiz Viva. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#7A9B6A] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-[#7A9B6A] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
