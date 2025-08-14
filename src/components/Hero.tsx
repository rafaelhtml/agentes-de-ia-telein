import { Button } from "@/components/ui/button";
import { Phone, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ura-reversa.jpg";

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
            {/* Logo Placeholder */}
            <div className="text-telein-blue text-2xl font-bold mb-2">
              Telein
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              14 anos no mercado • +10.000 clientes atendidos
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-telein-blue block">Automatize sua prospecção</span>
                e entregue apenas <span className="text-telein-orange">leads quentes</span>
                no WhatsApp da sua equipe
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Faz milhares de ligações automáticas, qualifica interessados e conecta direto no seu WhatsApp apenas quem demonstrou interesse real em comprar.
              </p>
              <p className="text-sm text-muted-foreground/80 mt-2">
                *Tecnologia URA Reversa
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="animate-pulse-glow">
                <Phone className="mr-2" />
                Quero Testar Grátis
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
          
          {/* Video/Demo Section */}
          <div className="lg:justify-self-end">
            <div className="bg-card shadow-telein-card rounded-2xl p-8 space-y-6 animate-float">
              <div className="bg-gradient-feature rounded-lg p-6 text-center">
                <Phone className="mx-auto mb-4 h-12 w-12 text-accent-foreground" />
                <h3 className="text-xl font-semibold text-accent-foreground mb-2">
                  Sistema Ativo Agora
                </h3>
                <p className="text-accent-foreground/80">
                  Realizando ligações automatizadas
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ligações hoje</span>
                  <span className="text-telein-blue font-semibold">2.847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Leads qualificados</span>
                  <span className="text-telein-orange font-semibold">342</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Taxa de conversão</span>
                  <span className="text-telein-blue font-semibold">12%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;