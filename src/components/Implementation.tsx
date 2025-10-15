import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { buildSignupUrl } from "@/lib/url-utils";

const Implementation = () => {
  const benefits = [
    "Análise completa do seu negócio e fluxo de atendimento",
    "Configuração profissional do agente de IA personalizado",
    "Treinamento da IA com base no seu modelo de negócio",
    "Entrega do agente funcionando e pronto para uso",
    "Suporte dedicado durante a implementação"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Serviço Premium
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prefere que nossa equipe faça tudo por você?
            </h2>
            <p className="text-xl text-muted-foreground">
              Oferecemos consultoria de implementação completa
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-card rounded-2xl shadow-telein-card p-8 md:p-12 border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-telein-blue/10 p-3 rounded-lg">
                <Rocket className="w-8 h-8 text-telein-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Consultoria de Implementação
                </h3>
                <p className="text-muted-foreground text-lg">
                  Nossa equipe especializada cuida de toda a configuração para você
                </p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <p className="font-semibold text-lg">O que está incluído:</p>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-telein-blue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-accent/20 rounded-xl p-6 text-center">
              <p className="text-lg mb-4">
                Interessado em ter seu agente de IA implementado por especialistas?
              </p>
              <p className="text-muted-foreground mb-6">
                Cadastre-se e entre em contato conosco pelo WhatsApp para conhecer os valores e detalhes do serviço de consultoria.
              </p>
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = buildSignupUrl()}
                className="w-full sm:w-auto"
              >
                <MessageCircle className="mr-2" />
                Falar com Consultor no WhatsApp
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              💡 Ideal para empresas que querem resultados rápidos sem se preocupar com a configuração técnica
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
