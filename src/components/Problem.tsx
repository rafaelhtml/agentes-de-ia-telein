import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Atendimento lento e limitado",
      description: "Sua equipe não consegue responder todos os clientes em tempo real"
    },
    {
      icon: TrendingDown,
      title: "Perda de oportunidades",
      description: "Clientes abandonam sem resposta e vão para a concorrência"
    },
    {
      icon: Users,
      title: "Equipe sobrecarregada",
      description: "Time gasta tempo com perguntas repetitivas que poderiam ser automatizadas"
    },
    {
      icon: AlertTriangle,
      title: "Custo alto de operação",
      description: "Manter equipe 24/7 é caro e inviável para a maioria das empresas"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-telein-orange">Seu atendimento está perdendo vendas</span>
            <span className="block">a cada minuto de espera</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enquanto sua equipe tenta dar conta de todos os atendimentos, clientes desistem e vão para a concorrência. 
            Um agente de IA pode resolver isso hoje mesmo.
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

        <p className="mt-16 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          A boa notícia: existe uma forma simples de virar esse jogo a partir de hoje.
        </p>
      </div>
    </section>
  );
};

export default Problem;