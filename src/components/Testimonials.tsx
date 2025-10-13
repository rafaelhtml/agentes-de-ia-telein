import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Dono de Clínica Odontológica",
      content: "Reduziu em 70% o tempo da minha equipe com agendamentos. A IA responde na hora e já qualifica o paciente. Simplesmente revolucionou nosso atendimento!",
      rating: 5
    },
    {
      name: "Marina Costa",
      role: "Gerente de Vendas - E-commerce",
      content: "Conseguimos atender 3x mais clientes sem contratar ninguém. A IA recomenda produtos certeiros e aumentou nossa conversão em 45%.",
      rating: 5
    },
    {
      name: "Roberto Alves",
      role: "Proprietário de Loja de Autopeças",
      content: "Antes perdia muito cliente fora do horário comercial. Agora a IA atende 24/7, tira dúvidas e já agenda a visita. Faturamento subiu 30%!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empresas reais que aumentaram vendas e reduziram custos com nossos agentes de IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative hover:shadow-lg transition-shadow">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-telein-blue/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-telein-orange text-telein-orange" />
                ))}
              </div>

              <p className="text-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;