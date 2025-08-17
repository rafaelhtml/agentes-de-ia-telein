import { Shield, CheckCircle, Clock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Shield className="h-12 w-12 text-green-600" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Garantia Incondicional
                <span className="text-green-600 block">de 7 Dias</span>
              </h2>
            </div>
          </div>

          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Estamos tão confiantes na qualidade da nossa solução que oferecemos 
            <strong> 7 dias de garantia total</strong>. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">7 Dias Completos</h3>
              <p className="text-gray-600">
                Teste todos os recursos por uma semana inteira sem compromisso
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sem Perguntas</h3>
              <p className="text-gray-600">
                Não gostou por qualquer motivo? Simples, é só solicitar o reembolso
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <RefreshCw className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% do Valor</h3>
              <p className="text-gray-600">
                Devolvemos todo o valor investido, sem taxas ou complicações
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experimente Sem Risco por 7 Dias
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Comece hoje mesmo e veja os resultados. Se não ficar satisfeito, 
              é só solicitar o reembolso total em até 7 dias.
            </p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 hover:bg-green-700"
            >
              Começar Agora - Garantia de 7 Dias
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              ✅ Sem risco • ✅ Reembolso garantido • ✅ Suporte completo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;