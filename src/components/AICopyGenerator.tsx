import { Button } from "@/components/ui/button";
import { Brain, Target, MessageCircle, Sparkles, Zap, TrendingUp } from "lucide-react";

const AICopyGenerator = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Inteligente",
      description: "Algoritmo avançado que entende seu produto e público-alvo"
    },
    {
      icon: Target,
      title: "Qualquer Nicho",
      description: "Funciona para qualquer segmento ou tipo de produto/serviço"
    },
    {
      icon: MessageCircle,
      title: "Múltiplas Abordagens",
      description: "Gera diferentes formas de abordar o mesmo cliente"
    },
    {
      icon: Sparkles,
      title: "Copy Persuasivo",
      description: "Textos otimizados para conversão e engajamento"
    }
  ];

  const benefits = [
    "Nunca mais fique sem ideias para abordar clientes",
    "Adapte a linguagem para diferentes perfis de público",
    "Aumente suas taxas de conversão com copy otimizado",
    "Economize horas de criação manual de textos",
    "Teste diferentes abordagens automaticamente"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Brain className="h-8 w-8 text-telein-orange" />
              <h2 className="text-3xl md:text-5xl font-bold">
                IA para Geração de 
                <span className="text-telein-blue block">Copy de Prospecção</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Nossa inteligência artificial cria automaticamente textos persuasivos personalizados 
              para qualquer nicho, produto ou público-alvo
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-feature rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-telein-blue text-white rounded-full p-3">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-telein-blue">Como Funciona?</h3>
                  <p className="text-muted-foreground">Processo simples em 4 passos</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-telein-orange text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Informe seu Produto e Nicho</h4>
                    <p className="text-sm text-muted-foreground">Descreva o que você vende e qual seu mercado alvo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-telein-orange text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">IA Gera Múltiplas Ideias</h4>
                    <p className="text-sm text-muted-foreground">Sistema cria várias opções de copy personalizadas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-telein-orange text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Escolha sua Favorita</h4>
                    <p className="text-sm text-muted-foreground">Selecione a abordagem que mais gostou</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-telein-orange text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Converta em Áudio</h4>
                    <p className="text-sm text-muted-foreground">Use IA para gerar áudio ou grave com sua própria voz</p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-card/50 rounded-xl p-4 text-center">
                    <feature.icon className="h-6 w-6 text-telein-blue mx-auto mb-2" />
                    <h4 className="font-semibold text-sm text-foreground mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Testar IA de Copy Agora
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                🚀 Crie textos persuasivos e converta em áudio automaticamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICopyGenerator;