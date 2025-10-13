import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, CheckCircle, Phone } from "lucide-react";

const FAQ = () => {
  const faqItems = [
    {
      question: "O que é um Agente de IA?",
      answer: "É um assistente virtual inteligente que atende seus clientes no WhatsApp 24/7 de forma humanizada. Ele responde dúvidas, agenda serviços, recomenda produtos e qualifica leads automaticamente, transferindo para humanos apenas quando necessário."
    },
    {
      question: "Como funciona o Agente de IA?",
      answer: "Em poucos minutos você cria seu agente, adiciona informações sobre seu negócio, produtos e serviços. O agente aprende com essas informações e passa a atender automaticamente via WhatsApp, respondendo perguntas, agendando e qualificando leads em tempo real."
    },
    {
      question: "Quanto custa?",
      answer: "R$ 79,90/mês por número de WhatsApp conectado (API oficial ou não oficial) + créditos de consumo. Os créditos custam a partir de R$ 40,00 por 1.000 créditos. O custo final varia conforme o volume de atendimentos do seu negócio."
    },
    {
      question: "Posso testar gratuitamente?",
      answer: "Sim! Você pode criar e configurar seu agente de IA gratuitamente, adicionar informações do seu negócio e conversar com ele sem custo algum. Só paga quando decidir conectar ao WhatsApp para atender clientes reais."
    },
    {
      question: "Como funciona o consumo de créditos?",
      answer: "Cada resposta gerada pelo agente consome créditos. O consumo varia de acordo com o modelo de IA utilizado e o tamanho da resposta. Quanto mais atendimentos, mais créditos são necessários. Você recarrega quando precisar, sem mensalidades fixas além da conexão do WhatsApp."
    },
    {
      question: "Preciso saber programar?",
      answer: "Não! A plataforma é 100% no-code. Você configura tudo através de uma interface simples e intuitiva, sem necessidade de conhecimento técnico ou programação. Em poucos minutos seu agente está pronto para atender."
    },
    {
      question: "O agente atende 24 horas por dia?",
      answer: "Sim! O agente de IA funciona 24/7, respondendo seus clientes a qualquer hora do dia ou da noite, inclusive finais de semana e feriados. Seus clientes nunca ficam sem resposta."
    },
    {
      question: "Posso integrar com meu CRM?",
      answer: "Sim! O agente se integra com diversos sistemas via webhook, permitindo enviar informações de leads qualificados, agendamentos e interações diretamente para seu CRM ou sistema de gestão."
    },
    {
      question: "E se o agente não souber responder algo?",
      answer: "O agente possui transferência inteligente para atendimento humano. Se ele não souber responder ou o cliente solicitar falar com uma pessoa, a conversa é transferida automaticamente para sua equipe, garantindo que nenhum cliente fique sem atendimento."
    },
    {
      question: "Quais tipos de negócio podem usar?",
      answer: "Qualquer negócio que atende clientes via WhatsApp: clínicas, consultórios, lojas, prestadores de serviço, imobiliárias, academias, salões de beleza, assistências técnicas, entre outros. Se você atende por WhatsApp, o agente de IA pode ajudar!"
    },
    {
      question: "Como cancelo se não gostar?",
      answer: "Sem fidelidade! Você pode cancelar a qualquer momento sem multas ou taxas. Se não estiver satisfeito, basta cancelar a assinatura mensal do número conectado. Simples e transparente."
    },
    {
      question: "Tenho suporte técnico?",
      answer: "Sim! Oferecemos suporte técnico completo para ajudar na configuração, tirar dúvidas e resolver qualquer problema. Nossa equipe está sempre disponível para garantir que seu agente funcione perfeitamente."
    },
    {
      question: "Qual é o melhor plano para meu negócio?",
      answer: "O ideal é avaliar quantos atendimentos seu assistente de IA realizará mensalmente. Geralmente, estimamos entre 8-10 interações por atendimento, porém isso pode mudar conforme seu segmento. Outro fator importante é a quantidade de informações que você disponibiliza para treinar o assistente - quanto mais completo o treinamento, melhor o desempenho."
    },
    {
      question: "Como são calculados os créditos utilizados?",
      answer: "Sempre que seu Assistente de IA responde uma mensagem, são utilizados créditos. A quantidade depende do modelo de linguagem selecionado (GPT-4, GPT-4 mini, LLaMA 3.1, etc). Por exemplo: se você escolher um modelo que gasta 3 créditos por interação, e seu assistente enviar 10 respostas em uma conversa, serão consumidos 30 créditos no total. Quando precisar de mais, basta recarregar diretamente na plataforma."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-telein-blue p-3 rounded-2xl">
                <HelpCircle className="h-8 w-8 text-background" />
              </div>
              <Badge className="text-lg font-medium bg-card text-card-foreground px-6 py-3 border border-border">
                Perguntas Frequentes
              </Badge>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Tire suas <span className="text-telein-blue">Dúvidas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas para as principais dúvidas sobre Agentes de IA
            </p>
          </div>

          {/* FAQ Content */}
          <div className="bg-card rounded-3xl shadow-telein-card border border-border p-8">
            <Accordion type="single" collapsible className="space-y-6">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-telein-blue hover:no-underline px-6 py-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-telein-blue p-2 rounded-lg mt-1 flex-shrink-0">
                        <MessageCircle className="h-4 w-4 text-background" />
                      </div>
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-telein-orange p-2 rounded-lg mt-1 flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-background" />
                      </div>
                      <div>{item.answer}</div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ainda tem dúvidas?</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Entre em contato conosco pelo WhatsApp ou crie seu agente grátis agora mesmo!
              </p>
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = "https://iniciar.telein.com.br/?pixel_id=1701412423354782&conversion_name=agenteIA&produto=agenteIA"}
              >
                <Phone className="mr-2" />
                Criar Agente Grátis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;