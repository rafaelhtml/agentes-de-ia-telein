import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Tempo perdido com ligações manuais",
      description: "Sua equipe gasta horas ligando para leads frios que não convertem"
    },
    {
      icon: TrendingDown,
      title: "Baixa taxa de conversão",
      description: "Sem qualificação adequada, vendedores perdem tempo com leads frios"
    },
    {
      icon: Users,
      title: "Dificuldade para escalar vendas",
      description: "Equipe limitada não consegue ligar para toda a base de contatos"
    },
    {
      icon: AlertTriangle,
      title: "Dependência de sistemas complexos",
      description: "Plataformas caras com contratos longos e configuração complicada"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-telein-orange">Aumente as suas vendas</span>
            <span className="block">sem precisar aumentar a sua equipe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enquanto você liga manualmente para leads frios, poderia ter um robô fazendo isso todos os dias 
            e entregando apenas clientes interessados para sua equipe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 shadow-telein-card hover:shadow-telein-glow transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-feature rounded-lg p-3 w-fit mb-4">
                <problem.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-telein-orange/10 to-telein-blue/10 rounded-2xl p-8 max-w-5xl mx-auto border border-telein-orange/30">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-telein-glow">
              <h3 className="text-3xl font-bold mb-6">
                Pare de depender de <span className="text-telein-orange underline decoration-wavy">indicações</span> e de 
                <span className="text-telein-blue block mt-2">esperar o cliente lembrar que você existe</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-red-400 mb-2">❌ Estratégia passiva:</h4>
                    <p className="text-muted-foreground text-sm">
                      Aguardar indicações • Esperar o telefone tocar • Torcer para lembrarem de você
                    </p>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-green-400 mb-2">✅ Estratégia proativa:</h4>
                    <p className="text-muted-foreground text-sm">
                      Buscar clientes ativamente • Estar sempre na mente do prospect • Gerar oportunidades constantemente
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-telein-orange to-telein-blue p-6 rounded-xl text-white">
                <p className="text-xl font-bold mb-2">
                  🎯 Seja você quem encontra o cliente, não quem espera ser encontrado
                </p>
                <p className="text-white/90 mb-6">
                  Enquanto seus concorrentes esperam, você estará conquistando novos negócios todos os dias
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-telein-blue hover:bg-white/90 font-bold w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
                  >
                    🚀 Resolver Problemas
                  </Button>
                  <Button 
                    variant="outline_light" 
                    size="lg"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-white text-white hover:bg-white hover:text-telein-blue w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
                  >
                    📞 Falar com Especialista
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;