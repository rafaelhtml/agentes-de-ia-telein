import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 text-sm font-medium bg-blue-100 text-blue-800 px-4 py-2">
              <HelpCircle className="h-4 w-4 mr-2" />
              Perguntas Frequentes
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tire suas Dúvidas
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Encontre respostas para as principais dúvidas sobre nossa solução de URA Reversa
            </p>
          </div>

          {/* FAQ Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 py-2"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Não encontrou a resposta que procurava?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:08006099350"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                📞 0800 609 9350
              </a>
              <a 
                href="mailto:contato@telein.com.br"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                ✉️ contato@telein.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;