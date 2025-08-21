
import { Button } from "@/components/ui/button";
import { Phone, Play } from "lucide-react";

const VSLMobile = () => {
  return (
    <section id="vsl-section" className="lg:hidden py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            Vídeo Explicativo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veja como a <span className="text-telein-blue">URA Reversa</span> vai
            <span className="text-telein-orange block">revolucionar suas vendas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explicação completa de como nosso robô multiplica suas vendas automaticamente
          </p>
        </div>
        
        <div className="max-w-sm mx-auto">
          <div className="bg-card shadow-telein-card rounded-2xl p-6">
            <div className="relative bg-black rounded-xl overflow-hidden" style={{ aspectRatio: '720/1280' }}>
              <video
                controls
                className="w-full h-full object-cover"
                poster="/placeholder.svg"
              >
                <source src="https://interface.telein.com.br/downloads/vsl-ura-reversa.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            
            <div className="mt-6 space-y-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="mr-2" />
                Teste Grátis (2000 Ligações)
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  ✅ Sem compromisso • ✅ Sem cartão de crédito
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLMobile;
