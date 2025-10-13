import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, CheckCircle2, Zap, Clock, BarChart3 } from "lucide-react";

const ChatTelein = () => {
  const benefits = [
    {
      icon: Users,
      title: "Equipe Centralizada",
      description: "Todos os atendentes em um único painel, facilitando gestão e supervisão em tempo real"
    },
    {
      icon: MessageSquare,
      title: "Leads Qualificados",
      description: "A IA já fez a qualificação inicial, seus atendentes recebem apenas clientes prontos para conversão"
    },
    {
      icon: Zap,
      title: "Transferência Inteligente",
      description: "O cliente é direcionado automaticamente para o atendente mais adequado conforme o tipo de demanda"
    },
    {
      icon: Clock,
      title: "Histórico Completo",
      description: "Acesso instantâneo a todo o histórico da conversa com a IA antes de assumir o atendimento"
    },
    {
      icon: BarChart3,
      title: "Métricas em Tempo Real",
      description: "Acompanhe performance da equipe, tempo de resposta e satisfação dos clientes"
    },
    {
      icon: CheckCircle2,
      title: "Produtividade Máxima",
      description: "Atendentes focam apenas em fechar vendas, não em responder perguntas básicas"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-telein-orange p-3 rounded-2xl">
                <Users className="h-8 w-8 text-background" />
              </div>
              <Badge className="text-lg font-medium bg-card text-card-foreground px-6 py-3 border border-border">
                Chat Telein
              </Badge>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Centralize sua <span className="text-telein-orange">Equipe</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Plataforma completa para sua equipe receber os atendimentos iniciados pela IA, 
              com clientes já qualificados e prontos para conversão
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-telein-card transition-all duration-300"
                >
                  <div className="bg-telein-orange/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-telein-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-telein-orange to-telein-blue rounded-3xl p-12 text-center shadow-telein-glow">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Potencialize sua Equipe de Vendas
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              IA qualifica, sua equipe converte. Simples assim. 
              Comece gratuitamente e veja seus resultados dispararem.
            </p>
            <Button 
              variant="hero"
              size="lg"
              onClick={() => window.location.href = "https://iniciar.telein.com.br/?pixel_id=1701412423354782&conversion_name=agenteIA&produto=agenteIA"}
              className="text-lg px-8 py-6 h-auto"
            >
              Começar Agora Grátis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatTelein;
