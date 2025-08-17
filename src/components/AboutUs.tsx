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
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Empresa pernambucana com 14 anos de experiência em soluções de automação para vendas 
            e forte presença no mercado nacional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <MapPin className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Recife, PE</h3>
                <p className="text-gray-600 text-sm">
                  Empresa pernambucana com forte presença no mercado nacional
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <Award className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">14 Anos</h3>
                <p className="text-gray-600 text-sm">
                  Experiência consolidada em automação de vendas
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <Users className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Equipe Especializada</h3>
                <p className="text-gray-600 text-sm">
                  Profissionais experientes em telecomunicações
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <Clock className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Suporte Especializado</h3>
                <p className="text-gray-600 text-sm">
                  Atendimento técnico qualificado para garantir o sucesso dos nossos clientes
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Nossa Missão</h3>
              <p className="text-blue-100 mb-4">
                Automatizar processos de vendas e entregar leads qualificados 
                para maximizar resultados dos nossos clientes.
              </p>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Conheça Nossa Solução
              </Button>
            </div>
          </div>

          {/* Imagem da Equipe */}
          <div className="relative order-first lg:order-last">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/8e4f4413-b9a1-4094-a666-29aa5a7517e8.png"
                alt="Equipe Telein em confraternização da empresa"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="font-bold text-gray-900 text-sm">Time Telein</span>
                </div>
              </div>
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
            <div className="text-3xl font-bold text-orange-600 mb-2">Dedicado</div>
            <div className="text-gray-600">Suporte Especializado</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">14 Anos</div>
            <div className="text-gray-600">de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;