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
              <h2 className="text-3xl md:text-5xl font-bold text-telein-blue">
                Programa de Indicação
              </h2>
              <Users className="h-8 w-8 text-telein-orange" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ganhe dinheiro divulgando nossa solução de vendas automatizada
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
                    <h3 className="text-2xl font-bold text-telein-blue">5% de Comissão Vitalícia</h3>
                    <p className="text-muted-foreground">Para cada cliente que você indicar</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Link className="h-5 w-5 text-telein-blue mt-1" />
                    <div>
                      <h4 className="font-semibold">Link Personalizado</h4>
                      <p className="text-sm text-muted-foreground">Receba seu link único de indicação</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-telein-blue mt-1" />
                    <div>
                      <h4 className="font-semibold">Comissão Automática</h4>
                      <p className="text-sm text-muted-foreground">Receba automaticamente 5% sobre todos os pagamentos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-telein-blue mt-1" />
                    <div>
                      <h4 className="font-semibold">Renda Vitalícia</h4>
                      <p className="text-sm text-muted-foreground">Ganhe enquanto seus indicados permanecerem clientes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="bg-telein-blue text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Como Funciona?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-telein-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <p>Cadastre-se no programa de indicação</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-telein-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <p>Receba seu link personalizado</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-telein-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <p>Divulgue para sua rede de contatos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-telein-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <p>Receba 5% de comissão vitalícia</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Quero Ser Afiliado
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  💰 Comece a ganhar dinheiro indicando nossa solução
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