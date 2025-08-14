import { CheckCircle, Play, Clock, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const EasySetup = () => {
  const features = [
    {
      icon: Clock,
      title: "Ativação Imediata",
      description: "Seu robô fica pronto em minutos após a contratação"
    },
    {
      icon: UserCheck,
      title: "Sem Conhecimento Técnico",
      description: "Interface simples e intuitiva para qualquer pessoa usar"
    },
    {
      icon: CheckCircle,
      title: "Só Precisa da Lista",
      description: "Envie seus contatos e pronto - começamos a ligar"
    },
    {
      icon: Play,
      title: "Vídeos de Configuração",
      description: "Biblioteca completa de tutoriais passo a passo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-telein-orange text-white px-6 py-2 rounded-full inline-block mb-8 font-semibold">
            ✅ CONFIGURAÇÃO SUPER SIMPLES
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comece a vender em 
            <span className="text-telein-blue block">poucos minutos!</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Não precisa ser técnico nem entender de tecnologia. Nossa plataforma é tão simples 
            que você configura tudo sozinho assistindo nossos vídeos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-feature rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-telein-blue">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-telein-card">
            <h3 className="text-2xl font-bold text-telein-orange mb-4">
              🎯 Como é simples:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="bg-telein-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Envie sua lista</h4>
                  <p className="text-sm text-muted-foreground">Upload do arquivo Excel/CSV com seus contatos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-telein-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Configure sua oferta</h4>
                  <p className="text-sm text-muted-foreground">Defina o que será oferecido seguindo nossos vídeos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-telein-orange text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Robô começa a ligar</h4>
                  <p className="text-sm text-muted-foreground">Sistema inicia as ligações automaticamente</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button variant="cta" size="xl" className="animate-pulse-glow">
              <Play className="mr-2" />
              Quero Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasySetup;