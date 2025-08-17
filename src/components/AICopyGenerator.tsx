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

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="bg-gradient-feature rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-telein-blue text-white rounded-full p-3">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-telein-blue">Como Funciona?</h3>
                    <p className="text-muted-foreground">Processo simples em 3 passos</p>
                  </div>
                </div>

                <div className="space-y-6">
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
                      <h4 className="font-semibold text-foreground mb-1">IA Gera Ideias</h4>
                      <p className="text-sm text-muted-foreground">Nossa IA cria múltiplas abordagens personalizadas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-telein-orange text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Use e Converta</h4>
                      <p className="text-sm text-muted-foreground">Implemente os textos nos seus robôs e venda mais</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-telein-blue">Benefícios Principais:</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-telein-orange mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-telein-card hover:shadow-telein-glow transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-telein-blue mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Example Image */}
              <div className="bg-card rounded-xl p-6 shadow-telein-card">
                <h4 className="font-bold text-telein-blue mb-4 text-center">Veja o Gerador em Ação:</h4>
                <div className="bg-gradient-feature rounded-lg p-4">
                  <img 
                    src="/lovable-uploads/a18fe064-8278-4c2b-b855-2d46cd8577a4.png" 
                    alt="Exemplo do gerador de IA criando copy para energia solar"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="text-xs text-muted-foreground mt-3 text-center">
                    ⚡ IA gerando automaticamente 3 opções de copy para o nicho "Energia Solar"
                  </div>
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
                  🚀 Comece a criar textos persuasivos automaticamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICopyGenerator;