import { Button } from "@/components/ui/button";
import { Plug, Instagram, Images, KanbanSquare, Zap, ArrowRight, Phone } from "lucide-react";
import { buildSignupUrl } from "@/lib/url-utils";

const AdvancedFeatures = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-telein-orange/10 text-telein-orange px-4 py-2 rounded-full mb-6 font-semibold">
              <Zap className="h-4 w-4" />
              Recursos avançados
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Muito além de um chatbot:
              <span className="text-telein-blue block">um agente que age pelo seu negócio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conecte sua IA a qualquer sistema, atenda em mais canais e organize seus leads automaticamente.
            </p>
          </div>

          {/* Hero feature: API integration */}
          <div className="relative bg-gradient-to-br from-telein-blue to-telein-orange rounded-3xl p-1 mb-8 shadow-telein-glow">
            <div className="bg-card rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-telein-blue/10 text-telein-blue px-3 py-1 rounded-full mb-4 text-sm font-bold uppercase tracking-wide">
                    <Plug className="h-4 w-4" />
                    Destaque
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Integração via URL/API com{" "}
                    <span className="text-telein-orange">qualquer sistema</span>
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Sua IA não fica limitada a respostas prontas. Ela consulta seu ERP, CRM, sistema de
                    estoque, agendamento ou banco de dados em <strong className="text-foreground">tempo real</strong>{" "}
                    e ainda executa ações — tudo no meio da conversa com o cliente.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Consulta status de pedido, saldo, agenda e estoque ao vivo",
                      "Cria, atualiza e finaliza registros no seu sistema",
                      "Funciona com qualquer API REST via webhook/URL",
                      "Sem código: configure os endpoints diretamente no painel",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-telein-orange flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={() => (window.location.href = buildSignupUrl())}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Quero esse poder no meu atendimento
                  </Button>
                </div>

                <div className="relative">
                  <div className="bg-gradient-hero rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-telein-orange animate-pulse" />
                      Conversa ao vivo · IA consultando sistema externo
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="bg-card rounded-xl rounded-tl-none p-3 max-w-[85%]">
                        Oi! Qual o status do meu pedido <strong>#48291</strong>?
                      </div>
                      <div className="bg-telein-blue/10 border border-telein-blue/30 rounded-lg p-3 text-xs text-telein-blue font-mono">
                        → GET https://seu-erp.com/api/pedidos/48291
                      </div>
                      <div className="bg-telein-orange text-white rounded-xl rounded-tr-none p-3 max-w-[85%] ml-auto">
                        Seu pedido foi <strong>despachado hoje às 09:42</strong> e chega amanhã.
                        Quer o código de rastreio?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary features */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Instagram */}
            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-telein-card transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-telein-orange to-telein-blue w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <Instagram className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Atendimento no Instagram</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sua IA também responde no Instagram Direct. Mesma inteligência, mesmas integrações,
                em mais um canal onde seus clientes estão.
              </p>
            </div>

            {/* Image galleries */}
            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-telein-card transition-all duration-300 hover:-translate-y-1">
              <div className="bg-telein-blue w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <Images className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Galerias de imagens</h3>
              <p className="text-muted-foreground leading-relaxed">
                Crie galerias de produtos, catálogos ou portfólios. Durante a conversa, a IA envia
                automaticamente as imagens certas para cada cliente.
              </p>
            </div>

            {/* Kanban CRM */}
            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-telein-card transition-all duration-300 hover:-translate-y-1">
              <div className="bg-telein-orange w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <KanbanSquare className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">CRM Kanban automático</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quadro Kanban integrado: a IA atende e move cada cliente para a etapa correta do
                funil — de "Novo lead" a "Pronto para fechar" — sem você levantar um dedo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;