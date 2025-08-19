import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, MessageCircle, CheckCircle } from "lucide-react";

const FAQ = () => {
  const faqItems = [
    {
      question: "O que é a URA Reversa?",
      answer: "A URA Reversa da Telein é uma solução de robô de ligações telefônicas que automatiza o contato com listas de clientes ou leads, levando uma oferta, aviso de evento ou cobrança para uma grande audiência de forma eficiente e rápida. Com essa tecnologia, é possível alcançar uma lista de contatos sem o risco de bloqueio ou banimento de números."
    },
    {
      question: "Como funciona a URA Reversa?",
      answer: "Para usar a URA Reversa: 1) Defina o áudio - Grave ou escreva o texto da mensagem que o cliente ouvirá ao atender. 2) Suba a lista de contatos - Carregue uma lista de clientes em formato CSV. 3) Inicie a campanha - A URA Reversa começa a discar automaticamente. 4) Acompanhe os resultados - Veja quais clientes interagiram, gerando leads qualificados para retorno via WhatsApp."
    },
    {
      question: "Quanto custa a URA Reversa?",
      answer: "Oferecemos diferentes planos para atender suas necessidades, desde empresas pequenas até grandes corporações. Todos os planos incluem telefonia sem custo adicional por ligação. Entre em contato conosco para conhecer o plano ideal para seu volume de contatos e orçamento."
    },
    {
      question: "Posso testar antes de contratar?",
      answer: "Sim, oferecemos um teste gratuito com 3 robôs por 5 horas, onde serão feitas 2000 discagens, para que o cliente possa validar o funcionamento da ferramenta e ver na prática como nossa solução funciona antes de contratar um plano completo."
    },
    {
      question: "Quantas chamadas posso fazer por dia?",
      answer: "A capacidade varia conforme o plano: 1 robô realiza até 1.500 chamadas/dia, 3 robôs alcançam até 4.500 chamadas/dia, 20 robôs realizam aproximadamente 30.000 chamadas/dia. Os números podem variar conforme a taxa de atendimento da sua lista."
    },
    {
      question: "A URA Reversa integra com WhatsApp?",
      answer: "Sim! Após qualificar um lead, o sistema pode enviar automaticamente uma mensagem via WhatsApp ou SMS, direcionando o cliente para continuar o atendimento, aumentando suas chances de conversão."
    },
    {
      question: "Como personalizar o áudio das campanhas?",
      answer: "Você pode criar áudios personalizados diretamente na plataforma, transformando texto em áudio ou fazendo upload de gravações próprias. É possível inclusive personalizar com o nome do cliente para um atendimento mais humanizado."
    },
    {
      question: "Quais segmentos podem usar?",
      answer: "Empresas de todos os segmentos se beneficiam: telecomunicações, financeiras, eventos, varejo, cobrança, imobiliário, seguros, consórcios e muito mais. Qualquer negócio que precise alcançar grandes listas de contatos."
    },
    {
      question: "Qual o horário de funcionamento?",
      answer: "Os planos padrão operam das 9h às 19h (segunda a sexta) e 9h às 14h (sábados). Para campanhas fora desse horário, oferecemos planos customizados."
    },
    {
      question: "Como acompanho os resultados?",
      answer: "Nossa plataforma oferece painel em tempo real com número de chamadas atendidas, taxas de conversão, estatísticas de interação e relatórios detalhados para download e análise completa da campanha."
    },
    {
      question: "Há garantia de satisfação?",
      answer: "Sim! Oferecemos 7 dias de garantia. Se não ficar satisfeito, processamos seu reembolso de forma justa e transparente, descontando apenas os custos de telefonia dos dias utilizados."
    },
    {
      question: "Como funciona o programa Indique e Ganhe?",
      answer: "Clientes da URA Reversa ganham 5% de todas as recargas realizadas por seus indicados durante 12 meses. O indicado ainda recebe R$50 de desconto na primeira recarga. O link de indicação fica disponível na sua área de cliente."
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
              Encontre respostas para as principais dúvidas sobre nossa solução de URA Reversa
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
              <p className="text-muted-foreground text-lg">
                Use nosso formulário de contato acima para esclarecer suas questões. 
                Nossa equipe está pronta para ajudar você!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;