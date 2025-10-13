
import { Button } from "@/components/ui/button";
import { Phone, Users, Zap, Play } from "lucide-react";
import heroImage from "@/assets/hero-ura-reversa.jpg";
import teleinLogo from "@/assets/telein-logo.png";
import teleinThumb from "@/assets/telein-thumb.png";
import VSLPlayer from "@/components/VSLPlayer";
import { buildSignupUrl } from "@/lib/url-utils";

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
                <span className="text-telein-blue block">Equipe sobrecarregada?</span>
                <span className="text-telein-orange block">Deixe a IA atender por você.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Um agente de IA responde em segundos, 24/7, qualifica e só passa o que importa pro humano — sem programar e com teste grátis.
              </p>
              <p className="text-sm text-muted-foreground/80 mt-2">
                *Atendimento humanizado com IA em tempo real
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="animate-pulse-glow"
                onClick={() => window.location.href = buildSignupUrl()}
              >
                <Phone className="mr-2" />
                Criar Agente de IA Grátis
              </Button>
              <Button 
                variant="outline_light" 
                size="xl"
                className="hidden lg:inline-flex"
                onClick={() => document.getElementById('vsl-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2" />
                Ver Vídeo Explicativo
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
          
          {/* VSL Section - Mobile Only */}
          <div className="lg:hidden mt-12">
            <div className="bg-card shadow-telein-card rounded-2xl p-6 max-w-sm mx-auto">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  Veja Como Funciona
                </h3>
                <p className="text-sm text-muted-foreground">
                  Explicação completa em vídeo
                </p>
              </div>
              
              <VSLPlayer
                src="https://interface.telein.com.br/tutorial.mp4"
                poster={teleinThumb}
                className="w-full"
                style={{ aspectRatio: '720/1280' }}
              />
            </div>
          </div>
          
          {/* VSL Section - Desktop Only */}
          <div className="hidden lg:flex lg:justify-center">
            <div className="bg-card shadow-telein-card rounded-2xl p-6 animate-float max-w-md">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  Veja Como Funciona
                </h3>
                <p className="text-sm text-muted-foreground">
                  Explicação completa em vídeo
                </p>
              </div>
              
              <div className="relative bg-black rounded-xl overflow-hidden" style={{ aspectRatio: '720/1280' }}>
                <VSLPlayer 
                  src="https://interface.telein.com.br/tutorial.mp4"
                  poster={teleinThumb}
                  className="w-full"
                  style={{ aspectRatio: '720/1280' }}
                />
              </div>
              
              <div className="mt-4 text-center">
                <Button 
                  variant="cta" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.location.href = buildSignupUrl()}
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Criar Agente de IA Grátis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
