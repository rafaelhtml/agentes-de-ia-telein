import { Shield, TrendingUp, Clock, Sparkles } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "+10.000",
      label: "Clientes ativos",
      color: "text-telein-blue"
    },
    {
      icon: Clock,
      value: "14 anos",
      label: "No mercado",
      color: "text-telein-orange"
    },
    {
      icon: Shield,
      value: "99,9%",
      label: "De uptime",
      color: "text-green-600"
    },
    {
      icon: Sparkles,
      value: "24/7",
      label: "Suporte especializado",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/80 mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;