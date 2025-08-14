import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";
import salesImage from "@/assets/sales-growth.jpg";

const Results = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "300%",
      label: "Aumento médio em conversões",
      color: "text-telein-blue"
    },
    {
      icon: Clock,
      number: "80%",
      label: "Redução no tempo de prospecção",
      color: "text-telein-orange"
    },
    {
      icon: Users,
      number: "5x",
      label: "Mais leads qualificados por dia",
      color: "text-telein-blue"
    },
    {
      icon: DollarSign,
      number: "R$ 50k",
      label: "Aumento médio no faturamento mensal",
      color: "text-telein-orange"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Empresa de Seguros",
      result: "Aumentamos 250% nossas vendas em 3 meses",
      quote: "A URA Reversa da Telein revolucionou nossa prospecção. Agora nossa equipe só fala com clientes interessados."
    },
    {
      name: "Marina Santos",
      company: "Imobiliária Premium",
      result: "15 vendas extras por mês",
      quote: "Antes perdiamos muito tempo com ligações que não convertiam. Hoje focamos apenas em fechar negócios."
    },
    {
      name: "Roberto Costa",
      company: "Consultoria Financeira",
      result: "ROI de 400% no primeiro mês",
      quote: "O investimento se pagou rapidamente. É impressionante como chegam leads qualificados direto no WhatsApp."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Results Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Resultados que nossos clientes
            <span className="text-telein-blue block">estão alcançando</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas de todos os tamanhos estão multiplicando suas vendas com nossa URA Reversa
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 text-center shadow-telein-card hover:shadow-telein-glow transition-all duration-300"
            >
              <div className="bg-gradient-feature rounded-lg p-3 w-fit mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Results Image + Testimonials */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src={salesImage} 
              alt="Crescimento de vendas" 
              className="w-full rounded-2xl shadow-telein-card"
            />
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-telein-orange">
              O que nossos clientes dizem:
            </h3>
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 shadow-telein-card"
              >
                <div className="mb-4">
                  <h4 className="font-semibold text-telein-blue">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-sm text-telein-orange font-semibold">{testimonial.result}</p>
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <div className="mt-20 bg-gradient-hero rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-telein-blue mb-4">
            Case de Sucesso: Empresa Triplicou Vendas em 60 Dias
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            "Implementamos a URA Reversa da Telein e em apenas 2 meses saímos de 20 vendas para 60 vendas mensais. 
            Nossa equipe agora trabalha apenas com leads qualificados e o resultado é fantástico."
          </p>
          <div className="text-telein-orange font-semibold">
            - Diretor Comercial, Empresa de Tecnologia
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;