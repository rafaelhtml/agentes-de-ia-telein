import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Award, Clock } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm font-medium bg-blue-100 text-blue-800 px-4 py-2">
            Sobre a Telein
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Especialistas em Automação de Vendas
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Somos uma empresa pernambucana especializada em soluções de automação para vendas, 
            com foco em URA Reversa e integração com WhatsApp para maximizar seus resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem da Equipe */}
          <div className="relative">
            <img 
              src="/lovable-uploads/8e4f4413-b9a1-4094-a666-29aa5a7517e8.png"
              alt="Equipe Telein em confraternização da empresa"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border">
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="font-bold text-gray-900">Time Telein</span>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <MapPin className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Recife, PE</h3>
                <p className="text-gray-600 text-sm">
                  Empresa pernambucana com forte presença no mercado nordestino
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <Award className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Especialização</h3>
                <p className="text-gray-600 text-sm">
                  Foco total em automação de vendas e qualificação de leads
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <Users className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Equipe Dedicada</h3>
                <p className="text-gray-600 text-sm">
                  Profissionais experientes em telecomunicações e vendas
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <Clock className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Suporte 24/7</h3>
                <p className="text-gray-600 text-sm">
                  Atendimento contínuo para garantir o sucesso dos nossos clientes
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Nossa Missão</h3>
              <p className="text-blue-100 mb-4">
                Transformar a forma como empresas fazem vendas, automatizando processos 
                e entregando leads qualificados para maximizar resultados e reduzir custos.
              </p>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Conheça Nossa Solução
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Empresas Atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
            <div className="text-gray-600">Aumento Médio em Vendas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Suporte Disponível</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">5 Anos</div>
            <div className="text-gray-600">de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;