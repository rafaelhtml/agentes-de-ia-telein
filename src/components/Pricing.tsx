import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Star } from "lucide-react";
import { buildSignupUrl } from "@/lib/url-utils";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      whatsappAccounts: "1",
      price: "79",
      credits: "200",
      popular: false,
      description: "Ideal para testar"
    },
    {
      name: "Growth", 
      whatsappAccounts: "2",
      price: "149",
      credits: "500",
      popular: true,
      description: "Para pequenas empresas"
    },
    {
      name: "Pro",
      whatsappAccounts: "5",
      price: "349", 
      credits: "1500",
      popular: true,
      description: "Para empresas em crescimento"
    },
    {
      name: "Enterprise",
      whatsappAccounts: "10+",
      price: "Custom",
      credits: "Ilimitados",
      popular: false,
      description: "Solução personalizada"
    }
  ];

  const features = [
    "Atendimento 24/7 no WhatsApp",
    "Respostas humanizadas com IA", 
    "Agendamento automático",
    "Responde dúvidas frequentes",
    "Recomendação de produtos",
    "Qualificação de leads",
    "Transferência inteligente para humano",
    "Integração com CRMs via webhook",
    "Dashboard com métricas",
    "Suporte técnico incluído"
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Preços transparentes 
            <span className="text-telein-blue block">sem surpresas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="text-telein-orange font-bold">R$ 79,90/mês</span> por conta de WhatsApp conectada + 
            <span className="text-telein-blue font-bold"> créditos de consumo</span>. 
            Cada resposta gerada consome créditos de acordo com o modelo de IA utilizado.
            <span className="block mt-2 text-sm">
              🎁 <strong>Crie seu agente grátis</strong> e teste sem compromisso - Sem cartão de crédito!
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-background rounded-2xl p-6 shadow-telein-card hover:shadow-telein-glow transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-telein-orange' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-4 bg-telein-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
                  POPULAR
                </div>
              )}

              {/* Header */}
              <div className="bg-telein-blue text-white rounded-lg p-4 text-center mb-6">
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="text-sm opacity-90">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                {plan.price !== "Custom" ? (
                  <>
                    <div className="flex items-baseline justify-center">
                      <span className="text-telein-orange text-sm">R$</span>
                      <span className="text-telein-orange text-4xl font-bold">{plan.price}</span>
                      <span className="text-telein-orange text-sm">,90</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">por mês</p>
                  </>
                ) : (
                  <div className="text-telein-orange text-3xl font-bold">Sob Consulta</div>
                )}
              </div>

              {/* Plan Details */}
              <div className="space-y-3 mb-6">
                <div className="bg-gradient-feature rounded-lg p-3">
                  <p className="text-sm font-semibold text-accent-foreground">
                    📱 {plan.whatsappAccounts} Conta{plan.whatsappAccounts !== "1" ? "s" : ""} WhatsApp
                  </p>
                  <p className="text-xs text-accent-foreground/80 mt-1">
                    💳 {plan.credits} créditos inclusos
                  </p>
                </div>
                
                {features.slice(0, 6).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-telein-blue flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.popular ? "cta" : "outline"} 
                className="w-full"
                onClick={() => window.location.href = buildSignupUrl()}
              >
                {plan.price === "Custom" ? "FALAR COM VENDAS" : "COMEÇAR GRÁTIS"}
              </Button>
            </div>
          ))}
        </div>

        {/* Free Trial CTA */}
        <div className="text-center max-w-2xl mx-auto bg-gradient-to-r from-telein-orange/10 to-telein-blue/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            🎁 Crie seu agente de IA <span className="text-telein-orange">gratuitamente</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            Configure em poucos minutos e converse com seu agente sem custo algum. 
            Só pague quando decidir conectar ao WhatsApp e começar a atender clientes.
          </p>
          <Button 
            variant="cta" 
            size="xl"
            onClick={() => window.location.href = buildSignupUrl()}
          >
            <Phone className="mr-2" />
            Criar Agente Grátis Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
