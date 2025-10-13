
import { Button } from "@/components/ui/button";
import { Phone, Users, Zap } from "lucide-react";
import { buildSignupUrl } from "@/lib/url-utils";

const Comparison = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-telein-blue">Humano vs Agente de IA Telein</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare a performance e veja por que nosso agente de IA é a escolha inteligente para sua empresa
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background shadow-telein-card rounded-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Comparativo de atendimentos em 1 dia
              </h3>
            </div>
            
            {/* Comparison Table */}
            <div className="space-y-4">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 pb-2 border-b border-border">
                <div className="text-xs font-medium text-muted-foreground"></div>
                <div className="text-xs font-medium text-center text-muted-foreground">👤 Humano</div>
                <div className="text-xs font-medium text-center text-telein-blue">🤖 IA Telein</div>
              </div>
              
              {/* Atendimentos */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <span className="text-sm">Atendimentos/dia</span>
                <span className="text-center text-sm">~40</span>
                <span className="text-center text-telein-blue font-semibold">Ilimitado</span>
              </div>
              
              {/* Disponibilidade */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <span className="text-sm">Disponibilidade</span>
                <span className="text-center text-sm">8h/dia</span>
                <span className="text-center text-telein-blue font-semibold">24/7</span>
              </div>
              
              {/* Tempo de resposta */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <span className="text-sm">Tempo de resposta</span>
                <span className="text-center text-sm">2-5 min</span>
                <span className="text-center text-telein-orange font-semibold">Instantâneo</span>
              </div>
              
              {/* Custo */}
              <div className="grid grid-cols-3 gap-4 items-center pt-2 border-t border-border">
                <span className="text-sm font-medium">Custo mensal</span>
                <span className="text-center text-sm">R$ 3.000+</span>
                <span className="text-center text-telein-orange font-semibold">A partir de R$ 297</span>
              </div>
            </div>
            
            <div className="bg-gradient-feature rounded-lg p-4 text-center mt-6">
              <p className="text-xs text-accent-foreground/90 font-medium">
                💡 Um único agente de IA atende múltiplos clientes simultaneamente
              </p>
              <p className="text-xs text-accent-foreground/70 mt-1">
                Escalabilidade infinita sem aumentar custos com equipe
              </p>
            </div>
            
            <div className="text-center mt-8">
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => window.location.href = buildSignupUrl()}
              >
                <Phone className="mr-2" />
                Criar Agente Grátis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
