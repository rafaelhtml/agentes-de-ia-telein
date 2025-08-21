
import { Button } from "@/components/ui/button";
import { Phone, Users, Zap } from "lucide-react";

const Comparison = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-telein-blue">Humano vs Robô Telein</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare a performance e veja por que nosso robô é a escolha inteligente para sua empresa
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background shadow-telein-card rounded-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Comparativo de performance em 1 hora
              </h3>
            </div>
            
            {/* Comparison Table */}
            <div className="space-y-4">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 pb-2 border-b border-border">
                <div className="text-xs font-medium text-muted-foreground"></div>
                <div className="text-xs font-medium text-center text-muted-foreground">👤 Humano</div>
                <div className="text-xs font-medium text-center text-telein-blue">🤖 Robô Telein</div>
              </div>
              
              {/* Ligações */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <span className="text-sm">Ligações/hora</span>
                <span className="text-center text-sm">~20</span>
                <span className="text-center text-telein-blue font-semibold">150</span>
              </div>
              
              {/* Atendidas */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <span className="text-sm">Atendidas</span>
                <span className="text-center text-sm">~4</span>
                <span className="text-center text-telein-blue font-semibold">40</span>
              </div>
              
              {/* Leads qualificados */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <span className="text-sm">Leads qualificados</span>
                <span className="text-center text-sm">0-1</span>
                <span className="text-center text-telein-orange font-semibold">4-8</span>
              </div>
              
              {/* Custo */}
              <div className="grid grid-cols-3 gap-4 items-center pt-2 border-t border-border">
                <span className="text-sm font-medium">Custo mensal</span>
                <span className="text-center text-sm">R$ 3.000+</span>
                <span className="text-center text-telein-orange font-semibold">R$ 379,90</span>
              </div>
            </div>
            
            <div className="bg-gradient-feature rounded-lg p-4 text-center mt-6">
              <p className="text-xs text-accent-foreground/90 font-medium">
                💡 Você pode ter vários robôs trabalhando em paralelo
              </p>
              <p className="text-xs text-accent-foreground/70 mt-1">
                Multiplique seus resultados sem aumentar custos proporcionalmente
              </p>
            </div>
            
            <div className="text-center mt-8">
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="mr-2" />
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
