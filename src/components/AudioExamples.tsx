import { Bot, Megaphone, DollarSign, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const audioExamples = [
  {
    icon: Bot,
    title: "Robô com sua voz e reconhecimento de fala por IA",
    description: "Venda de serviços",
    audioSrc: "/audios/exemplo1.mp3"
  },
  {
    icon: Megaphone,
    title: "Divulgue grupos e produtos",
    description: "Marketing de produtos",
    audioSrc: "/audios/exemplo2.mp3"
  },
  {
    icon: DollarSign,
    title: "Empréstimos Consignado",
    description: "Serviços financeiros",
    audioSrc: "/audios/exemplo3.mp3"
  },
  {
    icon: Building2,
    title: "Captação de leads B2B",
    description: "Vendas corporativas",
    audioSrc: "/audios/exemplo4.mp3"
  }
];

const AudioExamples = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Exemplos Práticos da URA Reversa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ouça como nossa tecnologia funciona na prática em diferentes segmentos de negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audioExamples.map((example, index) => {
            const IconComponent = example.icon;
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground leading-tight">
                      {example.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <audio 
                      controls 
                      className="w-full h-12 rounded-lg"
                      preload="metadata"
                    >
                      <source src={example.audioSrc} type="audio/mpeg" />
                      Seu navegador não suporta o elemento de áudio.
                    </audio>
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">
                    {example.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Estes são apenas alguns exemplos. Nossa URA Reversa pode ser personalizada para qualquer segmento.
          </p>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Solicitar Demonstração Personalizada
          </button>
        </div>
      </div>
    </section>
  );
};

export default AudioExamples;