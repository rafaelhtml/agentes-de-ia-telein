import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Phone } from "lucide-react";
import { buildSignupUrl } from "@/lib/url-utils";

const Guarantee = () => {
  const guarantees = [
    "✅ Teste 100% grátis - Converse com seu agente antes de pagar",
    "✅ Configure em minutos sem precisar de programador",
    "✅ Sem fidelidade - Cancele quando quiser",
    "✅ Suporte especializado incluso",
    "✅ Atualizações e melhorias contínuas",
    "✅ Dados seguros e criptografados"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-telein-card">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-feature mb-6">
                <Shield className="h-10 w-10 text-telein-blue" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experimente <span className="text-telein-blue">sem risco</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Crie e teste seu agente de IA gratuitamente. Só contrate quando estiver 100% satisfeito!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-telein-blue flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{guarantee}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-feature rounded-xl p-6 mb-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  🎯 Como funciona o teste grátis:
                </h3>
                <div className="space-y-2 text-left max-w-2xl mx-auto">
                  <p className="text-foreground"><strong>1.</strong> Crie seu agente em minutos adicionando informações do seu negócio</p>
                  <p className="text-foreground"><strong>2.</strong> Converse e teste a IA quantas vezes quiser - sem custo</p>
                  <p className="text-foreground"><strong>3.</strong> Só contrate quando estiver pronto para colocar em produção</p>
                  <p className="text-sm text-muted-foreground mt-4 text-center italic">
                    *Sem cartão de crédito. Sem compromisso. Cancele quando quiser.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="xl"
                className="animate-pulse-glow"
                onClick={() => window.location.href = buildSignupUrl()}
              >
                <Phone className="mr-2" />
                Criar Meu Agente Grátis Agora
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                ⚡ Configuração em minutos • Teste ilimitado • Sem cartão
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;