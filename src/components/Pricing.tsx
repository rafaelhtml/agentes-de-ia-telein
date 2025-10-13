import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Zap, DollarSign } from "lucide-react";
import { buildSignupUrl } from "@/lib/url-utils";

const Pricing = () => {
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
            Investimento transparente 
            <span className="text-telein-blue block">pague apenas pelo que usar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Sem mensalidades abusivas. Modelo flexível que se adapta ao seu volume de atendimentos.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* WhatsApp Connection */}
          <div className="bg-background rounded-2xl p-8 shadow-telein-card hover:shadow-telein-glow transition-all duration-300">
            <div className="bg-gradient-feature rounded-lg p-4 mb-6">
              <Phone className="h-12 w-12 text-accent-foreground mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-center">Conexão WhatsApp</h3>
            </div>
            
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-telein-orange text-sm">R$</span>
                <span className="text-telein-orange text-5xl font-bold">79</span>
                <span className="text-telein-orange text-sm">,90</span>
              </div>
              <p className="text-muted-foreground">por número conectado/mês</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-telein-blue flex-shrink-0" />
                <span>API Oficial ou Não Oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-telein-blue flex-shrink-0" />
                <span>Configuração em minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-telein-blue flex-shrink-0" />
                <span>Sem fidelidade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-telein-blue flex-shrink-0" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div className="bg-background rounded-2xl p-8 shadow-telein-card hover:shadow-telein-glow transition-all duration-300">
            <div className="bg-gradient-feature rounded-lg p-4 mb-6">
              <Zap className="h-12 w-12 text-accent-foreground mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-center">Créditos de IA</h3>
            </div>
            
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-telein-blue text-sm">A partir de R$</span>
                <span className="text-telein-blue text-5xl font-bold">40</span>
              </div>
              <p className="text-muted-foreground">por 1.000 créditos</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-telein-orange flex-shrink-0" />
                <span>Pague apenas pelo que usar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-telein-orange flex-shrink-0" />
                <span>Custo por resposta gerada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-telein-orange flex-shrink-0" />
                <span>Varia conforme volume</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-telein-orange flex-shrink-0" />
                <span>Recarregue quando precisar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-background rounded-2xl p-8 shadow-telein-card">
            <h3 className="text-2xl font-bold text-center mb-8 text-telein-blue">
              Tudo que está incluído
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-telein-blue flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Explanation */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-telein-orange/10 to-telein-blue/10 rounded-2xl p-8 border border-telein-orange/30">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-8 w-8 text-telein-orange" />
              <h3 className="text-xl font-bold">Como funciona o custo?</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              O custo final depende do volume de atendimentos do seu negócio:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-telein-orange font-bold">•</span>
                <span>Cada resposta gerada pelo agente consome créditos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-telein-orange font-bold">•</span>
                <span>Quanto mais atendimentos, mais créditos são necessários</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-telein-orange font-bold">•</span>
                <span>Modelo de IA utilizado influencia no consumo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-telein-orange font-bold">•</span>
                <span>Você tem controle total sobre quando e quanto recarregar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Free Trial CTA */}
        <div className="text-center max-w-2xl mx-auto bg-gradient-to-r from-telein-orange/10 to-telein-blue/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            🎁 Crie e teste <span className="text-telein-orange">gratuitamente</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            Configure seu agente de IA agora e converse com ele sem custo algum. 
            Só pague quando conectar ao WhatsApp para atender seus clientes reais.
          </p>
          <Button 
            variant="cta" 
            size="xl"
            onClick={() => window.location.href = buildSignupUrl()}
          >
            <Phone className="mr-2" />
            Criar Agente Grátis Agora
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            ✨ Sem cartão de crédito • ✨ Sem compromisso • ✨ Configure em minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
