import { Button } from "@/components/ui/button";
import { Phone, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ura-reversa.jpg";
import teleinLogo from "@/assets/telein-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="mb-2">
              <img src={teleinLogo} alt="Telein" className="h-12 w-auto" />
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              14 anos no mercado • +10.000 clientes atendidos
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-telein-blue block">Multiplique suas vendas</span>
                com o robô que liga,
                <span className="text-telein-orange block">oferece e qualifica</span>
                automaticamente
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Sistema liga para sua lista de contatos, filtra quem demonstrou interesse e chama no Whatsapp Automáticamente.
              </p>
              <p className="text-sm text-muted-foreground/80 mt-2">
                *Tecnologia URA Reversa
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="animate-pulse-glow">
                <Phone className="mr-2" />
                Teste Grátis (2000 Ligações)
              </Button>
              <Button variant="outline_light" size="xl">
                <Zap className="mr-2" />
                Ver Demonstração
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Users className="text-telein-blue" />
                <span className="text-sm">+10.000 clientes confiam</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-telein-orange" />
                <span className="text-sm">Planos flexíveis sem fidelidade</span>
              </div>
            </div>
          </div>
          
          {/* Comparison Section */}
          <div className="lg:justify-self-end">
            <div className="bg-card shadow-telein-card rounded-2xl p-8 space-y-6 animate-float">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Humano vs Robô Telein
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comparativo de performance em 1 hora
                </p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;