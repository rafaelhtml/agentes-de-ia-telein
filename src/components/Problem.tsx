import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";

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
          <div className="bg-gradient-hero rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-telein-orange mb-4">
              Pare de depender de indicações e de esperar o cliente lembrar que você existe
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Enquanto você espera passivamente por indicações ou pelo cliente te procurar, 
              seus concorrentes estão sendo proativos e conquistando esses mesmos clientes primeiro.
            </p>
            <div className="bg-card/50 rounded-xl p-6 border border-telein-orange/20">
              <p className="text-lg font-semibold text-foreground">
                🎯 Seja você quem encontra o cliente, não quem espera ser encontrado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;