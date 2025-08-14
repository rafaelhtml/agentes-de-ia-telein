import { CreditCard, Home, Phone, Heart, Shield, Smartphone } from "lucide-react";

const Segments = () => {
  const segments = [
    {
      icon: CreditCard,
      title: "Consignados",
      description: "Ferramenta essencial para vendas de empréstimos consignados. Alcance mais clientes em menos tempo e supere a concorrência em um mercado cada vez mais competitivo."
    },
    {
      icon: Home,
      title: "Imobiliário",
      description: "Corretores aumentam sua carteira de clientes com ligações automatizadas. Qualifique leads interessados em compra, venda ou locação de imóveis rapidamente."
    },
    {
      icon: Phone,
      title: "Telefonia",
      description: "Operadoras e revendedoras de planos multiplicam suas vendas oferecendo serviços para uma base maior de contatos de forma automatizada e eficiente."
    },
    {
      icon: Heart,
      title: "Planos de Saúde",
      description: "Alcance mais pessoas interessadas em cuidar da saúde. Explique benefícios e condições dos planos automaticamente, gerando leads qualificados."
    },
    {
      icon: Shield,
      title: "Seguradoras",
      description: "Faça campanhas diárias para sua base de leads. Oferte seguros auto, vida e residencial aquecendo suas vendas com contatos interessados."
    },
    {
      icon: Smartphone,
      title: "Produtos Digitais",
      description: "Cursos online, aplicativos, software e infoprodutos. Qualifique leads interessados em soluções digitais e aumente suas conversões automaticamente."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quais segmentos podem utilizar a 
            <span className="text-telein-blue block">URA Reversa?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa tecnologia se adapta a diversos mercados, multiplicando resultados em vendas para empresas de todos os tamanhos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {segments.map((segment, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-8 shadow-telein-card hover:shadow-telein-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-feature rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <segment.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-telein-blue mb-4">
                {segment.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-feature rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">
              🎯 Seu segmento não está na lista?
            </h3>
            <p className="text-accent-foreground/80 text-lg">
              Nossa URA Reversa funciona para qualquer negócio que precise fazer ofertas por telefone. 
              <span className="block mt-2 font-semibold">Fale conosco e vamos adaptar para seu mercado!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Segments;