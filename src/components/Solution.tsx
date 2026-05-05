import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageSquare, Target, Zap, Bot, Plug, Wallet } from "lucide-react";
import { buildSignupUrl } from "@/lib/url-utils";

const Solution = () => {
  const benefitGroups = [
    {
      icon: Bot,
      title: "Inteligência humanizada",
      color: "text-telein-blue",
      bg: "bg-telein-blue/10",
      items: [
        "Respostas naturais com IA avançada",
        "Qualifica leads automaticamente",
        "Transfere para humano só quando necessário",
        "Configure sem programar, em minutos",
      ],
    },
    {
      icon: Zap,
      title: "Atende e converte por você",
      color: "text-telein-orange",
      bg: "bg-telein-orange/10",
      items: [
        "Disponível 24/7 no WhatsApp e Instagram",
        "Realiza agendamentos automaticamente",
        "Responde dúvidas frequentes na hora",
        "Recomenda produtos pelo perfil do cliente",
      ],
    },
    {
      icon: Plug,
      title: "Conectado ao seu negócio",
      color: "text-telein-blue",
      bg: "bg-telein-blue/10",
      items: [
        "Integração via URL/API em tempo real",
        "CRM Kanban com movimentação automática",
        "Galerias de imagens enviadas na conversa",
        "Funciona com seu ERP, CRM ou agenda",
      ],
    },
    {
      icon: Wallet,
      title: "Modelo justo, sem surpresas",
      color: "text-telein-orange",
      bg: "bg-telein-orange/10",
      items: [
        "Apenas R$ 79,90/mês de mensalidade fixa",
        "Você paga só os créditos que usar",
        "Custo acompanha sua demanda real",
        "Sem fidelidade — cancele quando quiser",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      icon: Phone,
      title: "Configure em minutos",
      description: "Crie seu agente de IA gratuitamente em poucos cliques",
      highlight: false
    },
    {
      step: "2", 
      icon: Target,
      title: "IA aprende seu negócio",
      description: "Adicione informações sobre produtos, serviços e processos",
      highlight: false
    },
    {
      step: "3",
      icon: MessageSquare,
      title: "Teste grátis - Valide sua IA",
      description: "Converse e teste seu agente quantas vezes quiser - sem custo algum",
      highlight: true
    },
    {
      step: "4",
      icon: Zap,
      title: "Contrate e coloque em produção",
      description: "Só pague quando estiver pronto - R$ 79,90/mês + créditos de uso"
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

        {/* Benefit groups */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            Por que escolher nosso <span className="text-telein-orange">Agente de IA</span>?
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefitGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-telein-card border border-border hover:shadow-telein-glow transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`${group.bg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-6 w-6 ${group.color}`} />
                  </div>
                  <h4 className="text-xl font-bold">{group.title}</h4>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 ${group.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-20">
          <Button
            variant="cta"
            size="xl"
            onClick={() => (window.location.href = buildSignupUrl())}
          >
            <Phone className="mr-2" />
            Criar Meu Agente Grátis
          </Button>
        </div>
        
        {/* Process Steps */}
        <div className="bg-card rounded-2xl p-8 shadow-telein-card">
          <h3 className="text-2xl font-bold text-center mb-4">
            Como começar a <span className="text-telein-blue">atender com IA</span> em 4 passos:
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            Teste gratuitamente antes de contratar!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div 
                key={index} 
                className={`text-center ${item.highlight ? 'relative' : ''}`}
              >
                {item.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-telein-orange text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                    🎯 TESTE GRÁTIS
                  </div>
                )}
                <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${
                  item.highlight ? 'bg-telein-orange animate-pulse' : 'bg-gradient-feature'
                }`}>
                  <item.icon className={`h-8 w-8 ${item.highlight ? 'text-white' : 'text-accent-foreground'}`} />
                </div>
                <div className="bg-telein-orange text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {item.step}
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${item.highlight ? 'text-telein-blue' : ''}`}>
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.location.href = buildSignupUrl()}
            >
              <Phone className="mr-2" />
              Começar Teste Grátis Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;