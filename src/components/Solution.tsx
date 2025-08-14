import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageSquare, Target, Zap } from "lucide-react";
import whatsappImage from "@/assets/whatsapp-integration.jpg";

const Solution = () => {
  const benefits = [
    "Liga automaticamente para toda sua base de contatos",
    "Áudio com IA ou gravação com sua própria voz",
    "Assistente IA cria 3 opções de copy automaticamente",
    "Filtra e identifica apenas os contatos interessados",
    "Gera lista qualificada automaticamente",
    "Automatiza mensagens via WhatsApp (API oficial/não oficial)",
    "Envia SMS automatizado para leads interessados",
    "Integra com CRMs via webhook para informar outros sistemas",
    "Funciona seg-sex 9h às 19h e sáb 9h às 14h",
    "Planos diários, semanais e mensais - únicos no mercado",
    "Sem contrato de fidelidade - cancele quando quiser",
    "Integração com outros CRMs via webhook",
    "Suporte no horário comercial por email, WhatsApp e telefone"
  ];

  const process = [
    {
      step: "1",
      icon: Phone,
      title: "Robô faz as ligações",
      description: "Sistema automatizado liga para sua base de leads"
    },
    {
      step: "2", 
      icon: Target,
      title: "Filtra interessados",
      description: "Identifica e separa apenas contatos que demonstraram interesse real"
    },
    {
      step: "3",
      icon: MessageSquare,
      title: "Gera lista e automatiza contato",
      description: "Cria lista de interessados e oferece automação via WhatsApp, SMS ou webhook"
    },
    {
      step: "4",
      icon: Zap,
      title: "Sua equipe fecha",
      description: "Vendedores recebem apenas leads quentes e prontos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Main Solution */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O robô de vendas que sua empresa 
            <span className="text-telein-blue block">estava esperando</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nosso sistema liga para sua base de contatos, filtra quem demonstrou interesse real, gera uma lista qualificada e oferece automação de contato via WhatsApp, SMS ou integração com seu CRM via webhook.
            <span className="block text-sm mt-2 opacity-75">*Sistema URA Reversa Telein</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Benefits List */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-telein-orange mb-6">
              Benefícios
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-telein-blue flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button variant="cta" size="xl" className="w-full sm:w-auto">
              <Phone className="mr-2" />
              Quero Começar Agora
            </Button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-telein-card">
              <img 
                src={whatsappImage} 
                alt="Integração WhatsApp Business" 
                className="w-full rounded-lg"
              />
              <div className="mt-6 text-center">
                <h4 className="text-lg font-semibold text-telein-blue mb-2">
                  Integre facilmente com seu WhatsApp
                </h4>
                <p className="text-muted-foreground">
                  É tão fácil como conectar no Whatsapp Web
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="bg-card rounded-2xl p-8 shadow-telein-card">
          <h3 className="text-2xl font-bold text-center mb-12">
            Como sua empresa vai <span className="text-telein-blue">vender mais</span> em 4 passos:
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-feature rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <div className="bg-telein-orange text-background rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
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