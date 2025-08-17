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
      question: "Quem pode se beneficiar da URA Reversa?",
      answer: "Empresas de todos os segmentos, como telecomunicações, financeiras, eventos, varejo e cobrança, que precisam alcançar grandes listas de contatos para vender, informar ou lembrar de compromissos, podem se beneficiar da URA Reversa, automatizando o contato e otimizando o engajamento."
    },
    {
      question: "Quantas chamadas posso fazer com a URA Reversa?",
      answer: "A capacidade de chamadas depende do plano contratado. Por exemplo: 1 robô realiza até 1.500 chamadas por dia, 3 robôs alcançam até 4.500 chamadas por dia, 20 robôs realizam aproximadamente 30.000 chamadas por dia. Esses números podem variar de acordo com a taxa de atendimento da sua lista."
    },
    {
      question: "A URA Reversa pode enviar mensagens no WhatsApp?",
      answer: "Sim, após qualificar um lead com a URA Reversa, é possível configurar o sistema para enviar uma mensagem automática via WhatsApp ou SMS, direcionando o cliente para continuar o contato."
    },
    {
      question: "Posso testar antes de contratar?",
      answer: "Sim, a Telein oferece um teste gratuito de 7 dias, permitindo que você experimente a eficácia do sistema e veja os resultados antes de contratar um plano completo."
    },
    {
      question: "Como personalizar o áudio para minha campanha?",
      answer: "A plataforma permite que você crie áudios personalizados diretamente nela, seja transformando texto em áudio ou fazendo upload de uma gravação própria. Você pode também adicionar o nome do cliente no início da chamada para criar um atendimento mais personalizado."
    },
    {
      question: "Quais são os horários de funcionamento?",
      answer: "Os planos básicos cobrem o horário das 9h às 19h durante a semana e das 9h às 14h aos sábados. Se precisar rodar campanhas fora desse período, entre em contato com o suporte para um plano customizado."
    },
    {
      question: "Como monitoro os resultados da campanha?",
      answer: "A plataforma oferece um painel em tempo real onde você pode acompanhar o número de chamadas atendidas e taxas de conversão, verificar estatísticas de teclas digitadas pelos clientes e baixar relatórios com os dados dos leads gerados."
    },
    {
      question: "Como entrar em contato com a Telein?",
      answer: "Nossa equipe de suporte está disponível para ajudá-lo. Ligue para 0800 609 9350 ou envie um e-mail para contato@telein.com.br. Nosso atendimento funciona de segunda a sexta, das 8h às 22h."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <Badge className="text-lg font-medium bg-white/10 text-white px-6 py-3 backdrop-blur-sm border border-white/20">
                Perguntas Frequentes
              </Badge>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Tire suas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dúvidas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Encontre respostas para as principais dúvidas sobre nossa solução de URA Reversa
            </p>
          </div>

          {/* FAQ Content */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 p-8">
            <Accordion type="single" collapsible className="space-y-6">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-blue-400 hover:no-underline px-6 py-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mt-1 flex-shrink-0">
                        <MessageCircle className="h-4 w-4 text-white" />
                      </div>
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500 p-2 rounded-lg mt-1 flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
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
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ainda tem dúvidas?</h3>
              <p className="text-gray-300 text-lg">
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