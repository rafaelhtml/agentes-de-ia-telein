import { Calendar, Clock, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildSignupUrl } from "@/lib/url-utils";
import whatsappDemo from "@/assets/whatsapp-scheduling-demo.png";

const GoogleCalendarIntegration = () => {
  const features = [
    {
      icon: Calendar,
      title: "Sincronização Automática",
      description: "Agendamentos vão direto para seu Google Calendar sem intervenção manual"
    },
    {
      icon: Clock,
      title: "Disponibilidade em Tempo Real",
      description: "O agente verifica horários livres e oferece opções disponíveis"
    },
    {
      icon: CheckCircle,
      title: "Confirmação Instantânea",
      description: "Cliente recebe confirmação imediata com todos os detalhes"
    },
    {
      icon: Sparkles,
      title: "Reagendamento Inteligente",
      description: "O agente gerencia alterações e cancelamentos automaticamente"
    }
  ];

  const useCases = [
    "Consultas médicas e odontológicas",
    "Apresentações comerciais",
    "Atendimentos presenciais",
    "Reuniões e demonstrações",
    "Agendamentos de serviços"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-telein-blue/10 border border-telein-blue/20 rounded-full px-4 py-2 mb-4">
              <Calendar className="w-5 h-5 text-telein-blue" />
              <span className="text-sm font-semibold text-telein-blue">Integração Google Calendar</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-telein-blue">Agendamentos Automáticos</span>
              <br />
              <span className="text-foreground">Direto no Seu Calendário</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O agente de IA verifica disponibilidade, marca compromissos e gerencia reagendamentos 
              automaticamente no Google Calendar — tudo pelo WhatsApp.
            </p>
          </div>

          {/* Demo Image + Features */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 items-center">
            {/* WhatsApp Demo */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border max-w-xs">
                <img 
                  src={whatsappDemo} 
                  alt="Demonstração do agente de IA agendando automaticamente via WhatsApp integrado ao Google Calendar"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Features */}
            <div className="order-1 lg:order-2 space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:border-telein-blue/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-telein-blue/10 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-telein-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-gradient-to-br from-telein-orange/5 to-telein-blue/5 border border-border rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Ideal Para:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-telein-orange flex-shrink-0" />
                  <span className="text-foreground">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = buildSignupUrl()}
            >
              Testar Agendamento Automático
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Configure em minutos • Sem necessidade de programação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleCalendarIntegration;