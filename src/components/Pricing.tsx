import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      robots: "1 Robô",
      price: "379",
      period: "Mensal",
      discagens: "1500",
      users: "3",
      popular: true
    },
    {
      robots: "3 Robôs", 
      price: "398",
      period: "Semanal",
      discagens: "4500",
      users: "6",
      popular: false
    },
    {
      robots: "3 Robôs",
      price: "958", 
      period: "Mensal",
      discagens: "4500",
      users: "8",
      popular: true
    },
    {
      robots: "5 Robôs",
      price: "143",
      period: "Diário", 
      discagens: "7500",
      users: "6",
      popular: false
    }
  ];

  const features = [
    "Telefonia inclusa",
    "Bina números de celular", 
    "Bina inteligente (mesmo DDD)",
    "Interface Web",
    "Áudio Gratuito",
    "Reconhecimento de Voz com IA",
    "Fala nome do cliente",
    "Implantação imediata"
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Escolha o plano ideal para 
            <span className="text-telein-blue block">sua empresa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Planos flexíveis sem fidelidade. Únicos no mercado com opções diárias, semanais e mensais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-background rounded-2xl p-6 shadow-telein-card hover:shadow-telein-glow transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-telein-orange' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-4 bg-telein-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
                  POPULAR
                </div>
              )}

              {/* Header */}
              <div className="bg-telein-blue text-white rounded-lg p-4 text-center mb-6">
                <h3 className="text-lg font-bold">{plan.robots}</h3>
                <p className="text-sm opacity-90">Em média {plan.discagens} Discagens/{plan.period === 'Diário' ? 'Dia' : plan.period === 'Semanal' ? 'Semana' : 'Mês'}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-telein-orange text-sm">R$</span>
                  <span className="text-telein-orange text-4xl font-bold">{plan.price}</span>
                  <span className="text-telein-orange text-sm">,90</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.period}</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-telein-blue flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-telein-blue flex-shrink-0" />
                  <span className="text-sm">{plan.users} Usuários de Acesso</span>
                </div>
              </div>

              {/* Discagens Info */}
              <div className="flex items-center gap-2 mb-6 p-3 bg-gradient-feature rounded-lg">
                <Phone className="h-4 w-4 text-accent-foreground" />
                <span className="text-sm text-accent-foreground font-medium">
                  Em média {plan.discagens} Discagens/{plan.period === 'Diário' ? 'Dia' : plan.period === 'Semanal' ? 'Semana' : 'Mês'}
                </span>
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.popular ? "cta" : "outline"} 
                className="w-full"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                CONTRATAR
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Plans */}
        <div className="bg-gradient-hero rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-telein-orange" />
            <h3 className="text-2xl font-bold text-telein-blue">
              Precisa de algo diferente?
            </h3>
            <Star className="h-6 w-6 text-telein-orange" />
          </div>
          
          <p className="text-lg text-muted-foreground mb-6">
            Temos outros planos disponíveis e também podemos customizar de acordo com sua necessidade específica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline_light" size="lg">
              Ver Outros Planos
            </Button>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Plano Customizado
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            💡 Fale conosco e montamos o plano perfeito para seu volume de vendas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
