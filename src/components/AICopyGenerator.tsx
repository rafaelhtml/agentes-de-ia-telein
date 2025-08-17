import { Button } from "@/components/ui/button";
import { Brain, Target, MessageCircle, Sparkles, Zap, TrendingUp } from "lucide-react";
import processImage from "@/assets/ia-copy-process-enhanced.png";

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
            <div className="bg-gradient-to-br from-telein-blue to-blue-600 rounded-2xl p-8 mb-12 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white text-telein-blue rounded-full p-3 shadow-lg">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Como Funciona?</h3>
                  <p className="text-blue-100">Processo simples em 4 passos</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-telein-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">1</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Informe seu Produto e Nicho</h4>
                    <p className="text-blue-100">Descreva o que você vende e qual seu mercado alvo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-telein-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">2</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">IA Gera Múltiplas Ideias</h4>
                    <p className="text-blue-100">Sistema cria várias opções de copy personalizadas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-telein-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">3</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Escolha sua Favorita</h4>
                    <p className="text-blue-100">Selecione a abordagem que mais gostou</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-telein-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">4</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Converta em Áudio</h4>
                    <p className="text-blue-100">Use IA para gerar áudio ou grave com sua própria voz</p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center border border-white/30 shadow-lg">
                    <feature.icon className="h-6 w-6 text-white mx-auto mb-2" />
                    <h4 className="font-bold text-sm text-white mb-1">{feature.title}</h4>
                    <p className="text-xs text-blue-100">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Visual Example */}
              <div className="mt-8 text-center">
                <img 
                  src={processImage}
                  alt="Processo da IA para geração de copy em 4 passos com melhor contraste"
                  className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                />
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