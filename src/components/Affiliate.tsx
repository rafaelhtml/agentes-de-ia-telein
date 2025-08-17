import { Button } from "@/components/ui/button";
import { Users, DollarSign, TrendingUp } from "lucide-react";

const Affiliate = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="h-10 w-10 text-orange-500" />
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
                Indique e Ganhe!
              </h2>
              <Users className="h-10 w-10 text-orange-500" />
            </div>
            <p className="text-2xl text-gray-800 max-w-4xl mx-auto font-medium">
              Indique nosso sistema e ganhe 5% de todas as recargas realizadas por 12 meses. 
              Seu amigo ainda ganha R$50,00 de desconto!
            </p>
          </div>

          {/* Main Content */}
          <div className="flex justify-center">
            {/* Benefits Card */}
            <div className="bg-gray-900 rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-2xl w-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-orange-500 text-white rounded-full p-4">
                  <DollarSign className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">5% por 12 Meses</h3>
                  <p className="text-gray-300 text-lg">De todas as recargas do seu indicado</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <DollarSign className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-lg">Seu Amigo Ganha R$50,00</h4>
                    <p className="text-gray-300">Desconto na primeira recarga</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <TrendingUp className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-lg">Você Ganha 5%</h4>
                    <p className="text-gray-300">De todas as recargas por 12 meses</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Users className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-lg">Pagamento Automático</h4>
                    <p className="text-gray-300">Receba diretamente na sua conta</p>
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-white text-xl mb-6">Como Funciona:</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">1</div>
                  <p className="text-white text-lg font-medium">Tenha seu cadastro na URA Reversa</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">2</div>
                  <p className="text-white text-lg font-medium">Acesse seu link na página de recargas</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">3</div>
                  <p className="text-white text-lg font-medium">Compartilhe e ganhe 5% por 12 meses</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button 
              variant="default" 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Participar do Programa
            </Button>
            <p className="text-white text-lg mt-4 font-medium">
              💰 Ganhe 5% por 12 meses de cada indicação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliate;