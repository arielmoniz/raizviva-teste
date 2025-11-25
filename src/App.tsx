import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuemSomos } from './components/QuemSomos';
import { Produtos } from './components/Produtos';
import { Noticias } from './components/Noticias';
import { Cadastro } from './components/Cadastro';
import { Contato } from './components/Contato';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Produtos />
        <Noticias />
        <Cadastro />
        <Contato />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#5F7A4E] rounded-full flex items-center justify-center">
              <span className="text-white text-sm">RV</span>
            </div>
            <span className="text-lg">Raiz Viva</span>
          </div>
          <p className="text-gray-400 mb-2">
            Transformando resíduos do café em bioinsumos regenerativos
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Raiz Viva. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
