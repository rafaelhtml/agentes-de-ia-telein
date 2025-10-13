import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildSignupUrl } from "@/lib/url-utils";

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
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-telein-orange/10 to-telein-blue/10 rounded-2xl p-8 max-w-5xl mx-auto border border-telein-orange/30">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-telein-glow">
              <h3 className="text-3xl font-bold mb-6">
                Pare de <span className="text-telein-orange underline decoration-wavy">perder clientes</span> por 
                <span className="text-telein-blue block mt-2">falta de atendimento imediato</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-red-400 mb-2">❌ Atendimento tradicional:</h4>
                    <p className="text-muted-foreground text-sm">
                      Cliente espera • Equipe sobrecarregada • Respostas demoradas • Oportunidades perdidas
                    </p>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-green-400 mb-2">✅ Com Agente de IA:</h4>
                    <p className="text-muted-foreground text-sm">
                      Resposta instantânea 24/7 • Múltiplos atendimentos simultâneos • Qualifica automaticamente • Equipe focada no que importa
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-telein-orange to-telein-blue p-6 rounded-xl text-white">
                <p className="text-xl font-bold mb-2">
                  🤖 Atenda em segundos, qualifique automaticamente, venda mais
                </p>
                <p className="text-white/90 mb-6">
                  Enquanto seus concorrentes perdem clientes na espera, você conquista todos com atendimento imediato
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => window.location.href = buildSignupUrl()}
                    className="bg-white text-telein-blue hover:bg-white/90 font-bold w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
                  >
                    🚀 Criar Agente Grátis
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