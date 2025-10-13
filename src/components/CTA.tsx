import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, CheckCircle } from "lucide-react";
import { buildSignupUrl } from "@/lib/url-utils";

const CTA = () => {
  const guarantees = [
    "Crie seu agente grátis em minutos",
    "Configure sem programar",
    "R$ 79,90/mês + créditos de consumo",
    "Sem fidelidade - Cancele quando quiser"
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-telein-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-telein-orange rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Header */}
          <div className="bg-telein-orange text-white px-6 py-2 rounded-full inline-block mb-8 font-semibold animate-pulse">
            🤖 COMECE GRÁTIS - Configure seu agente de IA agora
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Crie seu agente de IA
            <span className="text-telein-blue block">em poucos minutos</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Configure gratuitamente, adicione informações do seu negócio e teste conversando com seu agente. 
            Só pague quando conectar ao WhatsApp para atender clientes reais!
          </p>
          
          {/* Guarantees */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-2 justify-center">
                <CheckCircle className="h-5 w-5 text-telein-blue" />
                <span className="text-sm">{guarantee}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              variant="cta" 
              size="xl" 
              className="text-xl py-6 px-12 animate-pulse-glow"
              onClick={() => window.location.href = buildSignupUrl()}
            >
              <Phone className="mr-3 h-6 w-6" />
              CRIAR AGENTE GRÁTIS
            </Button>
          </div>
          
          {/* Value Proposition */}
          <div className="bg-card rounded-2xl p-8 shadow-telein-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-telein-orange mb-4">
              Por que criar seu agente agora:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-telein-blue mb-2">Rápido</div>
                <p className="text-muted-foreground">Configure em poucos minutos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-telein-orange mb-2">Grátis</div>
                <p className="text-muted-foreground">Teste sem compromisso</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-telein-blue mb-2">Eficaz</div>
                <p className="text-muted-foreground">Resultados desde o primeiro dia</p>
              </div>
            </div>
          </div>
          
          {/* Final Urgency */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              ⏰ Cada minuto sem IA é uma oportunidade perdida
            </p>
            <p className="text-telein-orange font-semibold">
              Configure agora e comece a atender melhor hoje mesmo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;