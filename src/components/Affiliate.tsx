import { Button } from "@/components/ui/button";
import { Users, Link, DollarSign, TrendingUp } from "lucide-react";

const Affiliate = () => {
  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-8 w-8 text-telein-orange" />
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Indique e Ganhe!
              </h2>
              <Users className="h-8 w-8 text-telein-orange" />
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Indique nosso sistema e ganhe 5% de todas as recargas realizadas por 12 meses. 
              Seu amigo ainda ganha R$50,00 de desconto!
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-telein-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-telein-orange text-white rounded-full p-3">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-telein-blue">5% por 12 Meses</h3>
                    <p className="text-muted-foreground">De todas as recargas do seu indicado</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-telein-blue mt-1" />
                    <div>
                      <h4 className="font-semibold">Seu Amigo Ganha R$50,00</h4>
                      <p className="text-sm text-muted-foreground">Desconto na primeira recarga</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-telein-blue mt-1" />
                    <div>
                      <h4 className="font-semibold">Você Ganha 5%</h4>
                      <p className="text-sm text-muted-foreground">De todas as recargas por 12 meses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-telein-blue mt-1" />
                    <div>
                      <h4 className="font-semibold">Pagamento Automático</h4>
                      <p className="text-sm text-muted-foreground">Receba diretamente na sua conta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="bg-telein-blue text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Texto para Enviar</h3>
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <p className="text-sm leading-relaxed">
                    "Olá, estou te enviando um desconto de R$ 50,00 Reais para conhecer a URA 
                    Reversa da IPTX Inteligente Telein, basta clicar no link e se cadastrar agora 
                    para utilizar hoje mesmo."
                  </p>
                </div>
                
                <h4 className="font-semibold mb-3">Como Funciona:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="bg-telein-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                    <p>Envie o texto acima para seus contatos</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-telein-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                    <p>Eles ganham R$50 de desconto</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-telein-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                    <p>Você ganha 5% por 12 meses</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Participar do Programa
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  💰 Ganhe 5% por 12 meses de cada indicação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliate;