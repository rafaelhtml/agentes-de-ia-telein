import { Play } from "lucide-react";

const VideoDemo = () => {
  return (
    <section id="video-demo" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            Demonstração
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veja como a <span className="text-telein-blue">URA Reversa</span> funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Assista à demonstração completa de como configurar e usar o robô Telein para multiplicar suas vendas automaticamente
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl shadow-telein-card overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/O4-Tcrl7O_Q?rel=0&modestbranding=1"
                title="Demonstração URA Reversa - Telein"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-card rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-telein-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold mb-2">Configuração Simples</h3>
              <p className="text-sm text-muted-foreground">
                Aprenda a configurar sua URA Reversa em poucos minutos
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-telein-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Qualificação Automática</h3>
              <p className="text-sm text-muted-foreground">
                Veja como o robô identifica e qualifica leads interessados
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold mb-2">Resultados Reais</h3>
              <p className="text-sm text-muted-foreground">
                Conheça os resultados que nossos clientes estão obtendo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;