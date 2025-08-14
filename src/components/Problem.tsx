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
      description: "Muitos leads não qualificados chegam até seus vendedores"
    },
    {
      icon: Users,
      title: "Equipe sobrecarregada",
      description: "Vendedores gastam tempo com prospecção em vez de vender"
    },
    {
      icon: AlertTriangle,
      title: "Oportunidades perdidas",
      description: "Leads interessados não são contactados no momento certo"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sua equipe de vendas está 
            <span className="text-telein-orange block">perdendo dinheiro</span>
            todos os dias?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se você ainda faz prospecção manual, está deixando milhares de reais na mesa. 
            Veja os problemas que a maioria das empresas enfrentam:
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
              Resultado: Vendas estagnadas e equipe desmotivada
            </h3>
            <p className="text-lg text-muted-foreground">
              Enquanto você faz ligações manuais, seus concorrentes já estão automatizando 
              e fechando muito mais vendas com menos esforço.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;