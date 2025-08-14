import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, CheckCircle } from "lucide-react";

const CTA = () => {
  const guarantees = [
    "Teste gratuito: 5h com 3 robôs (~2000 ligações)",
    "Configuração com vídeos e suporte",
    "Planos diários, semanais e mensais",
    "Sem contratos de fidelidade"
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
            🚀 ACELERE SUAS VENDAS - Comece hoje mesmo sem fidelidade
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tenha seu próprio
            <span className="text-telein-blue block">robô de vendas hoje</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Único no mercado com planos flexíveis (diários, semanais, mensais) e sem fidelidade. 
            Só precisa da lista de contatos - o resto fazemos por você!
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
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-3 h-6 w-6" />
              TESTE GRÁTIS (2000 LIGAÇÕES)
            </Button>
            
            <Button 
              variant="outline_light" 
              size="xl"
              className="text-xl py-6 px-12"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageSquare className="mr-3 h-6 w-6" />
              Falar com Especialista
            </Button>
          </div>
          
          {/* Value Proposition */}
          <div className="bg-card rounded-2xl p-8 shadow-telein-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-telein-orange mb-4">
              O que você ganha começando hoje:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-telein-blue mb-2">14 anos</div>
                <p className="text-muted-foreground">De experiência no mercado</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-telein-orange mb-2">+10k</div>
                <p className="text-muted-foreground">Clientes já atendidos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-telein-blue mb-2">0 min</div>
                <p className="text-muted-foreground">Setup automático com vídeos</p>
              </div>
            </div>
          </div>
          
          {/* Final Urgency */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              ⏰ Seus concorrentes não vão esperar você decidir
            </p>
            <p className="text-telein-orange font-semibold">
              Comece agora e saia na frente!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;