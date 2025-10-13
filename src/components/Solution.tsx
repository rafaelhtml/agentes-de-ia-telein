import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageSquare, Target, Zap } from "lucide-react";
import whatsappImage from "@/assets/whatsapp-integration.jpg";
import { buildSignupUrl } from "@/lib/url-utils";

const Solution = () => {
  const benefits = [
    "✨ Configure em minutos sem programar",
    "💬 Atende em tempo real 24/7 no WhatsApp",
    "🧠 Respostas humanizadas com IA avançada",
    "📅 Realiza agendamentos automaticamente",
    "❓ Responde dúvidas frequentes instantaneamente",
    "🛍️ Recomenda produtos baseado no perfil do cliente",
    "👤 Transfere para humano apenas quando necessário",
    "📊 Qualifica leads automaticamente",
    "🔗 Integra com CRMs e sistemas via webhook",
    "💰 R$ 79,90/mês por WhatsApp conectado",
    "💳 Pague apenas pelos créditos que usar",
    "🚀 Teste grátis - Crie seu agente agora",
    "🎯 Sem fidelidade - Cancele quando quiser",
    "🛠️ Suporte especializado sempre disponível"
  ];

  const process = [
    {
      step: "1",
      icon: Phone,
      title: "Configure em minutos",
      description: "Crie seu agente de IA gratuitamente em poucos cliques"
    },
    {
      step: "2", 
      icon: Target,
      title: "IA aprende seu negócio",
      description: "Adicione informações sobre produtos, serviços e processos"
    },
    {
      step: "3",
      icon: MessageSquare,
      title: "Conecte ao WhatsApp",
      description: "Integração simples com seu número comercial"
    },
    {
      step: "4",
      icon: Zap,
      title: "Atenda automaticamente",
      description: "IA responde, qualifica e agenda - 24 horas por dia"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Main Solution */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O agente de IA que responde seus clientes 
            <span className="text-telein-blue block">como se fosse humano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em poucos minutos você cria um agente de IA personalizado que atende seus clientes no WhatsApp, 
            responde dúvidas, agenda serviços, recomenda produtos e qualifica leads automaticamente.
            <span className="block text-sm mt-2 opacity-75">*Teste grátis - Configure agora mesmo sem custo</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Benefits List */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-telein-orange mb-6">
              Por que escolher nosso Agente de IA?
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-telein-blue flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto"
              onClick={() => window.location.href = buildSignupUrl()}
            >
              <Phone className="mr-2" />
              Criar Meu Agente Grátis
            </Button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-telein-card">
              <img 
                src="/lovable-uploads/39213192-5281-40ae-b588-e665781e12ce.png" 
                alt="Integração WhatsApp Web e API Oficial" 
                className="w-full rounded-lg"
              />
              <div className="mt-6 text-center">
                <h4 className="text-lg font-semibold text-telein-blue mb-2">
                  Configure em minutos
                </h4>
                <p className="text-muted-foreground">
                  Tão simples quanto conectar no WhatsApp Web
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="bg-card rounded-2xl p-8 shadow-telein-card">
          <h3 className="text-2xl font-bold text-center mb-12">
            Como começar a <span className="text-telein-blue">atender com IA</span> em 4 passos:
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-feature rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <div className="bg-telein-orange text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;