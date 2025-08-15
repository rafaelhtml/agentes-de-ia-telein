import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    employees: "",
    segment: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Capturar parâmetros da URL se existirem
      const urlParams = new URLSearchParams(window.location.search);
      
      // Preparar dados para envio
      const dataToSend = {
        origem: "UraReversa",
        Nome: formData.name,
        Email: formData.email,
        "Qual_seu_segmento?": formData.segment,
        "Seu_Whatsapp": formData.whatsapp,
        "Quantidade_de_Funcionários": formData.employees,
        Empresa: formData.company,
        ...(urlParams.get('anuncio') && { anuncio: urlParams.get('anuncio') }),
        ...(urlParams.get('campanha') && { campanha: urlParams.get('campanha') }),
        ...(urlParams.get('posicionamento') && { posicionamento: urlParams.get('posicionamento') }),
        ...(urlParams.get('conjuntodeanuncio') && { conjuntodeanuncio: urlParams.get('conjuntodeanuncio') })
      };

      console.log('Enviando dados para webhook:', dataToSend);

      // Enviar dados para o webhook
      const response = await fetch('https://webhook.site/68193ed4-1102-49ea-aee8-4e2f153e8963', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });

      console.log('Resposta do webhook:', response);

      // Redirecionar para o pixel do WhatsApp
      window.location.href = 'https://ipbxinteligente.com.br/pixel_whatsapp.php';
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      // Em caso de erro, ainda redireciona
      window.location.href = 'https://ipbxinteligente.com.br/pixel_whatsapp.php';
    }
  };

  const segments = [
    "Crédito Consignado",
    "Imobiliário", 
    "Seguros",
    "Consórcios",
    "Telecom",
    "Cobrança",
    "Lançamentos Digitais",
    "E-commerce",
    "Outros"
  ];

  return (
    <section id="contact-form" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Form description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-telein-orange block">PREENCHA O FORMULÁRIO PARA</span>
                <span className="text-foreground block">FALAR CONOSCO NO WHATSAPP E</span>
                <span className="text-telein-blue block">GANHE 2000 LIGAÇÕES GRÁTIS.</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>✅ Teste completo por 5 horas</p>
                <p>✅ 3 robôs trabalhando simultaneamente</p>
                <p>✅ Configuração gratuita com suporte</p>
                <p>✅ Sem compromisso ou fidelidade</p>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-card rounded-2xl p-8 shadow-telein-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-sm font-medium">
                    Seu Whatsapp
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="Seu Whatsapp com DDD"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm font-medium">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium">
                    Quantidade de Funcionários
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, employees: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="1 até 3" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1 até 3</SelectItem>
                      <SelectItem value="4-10">4 até 10</SelectItem>
                      <SelectItem value="11-50">11 até 50</SelectItem>
                      <SelectItem value="51-100">51 até 100</SelectItem>
                      <SelectItem value="100+">Mais de 100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">
                    Qual seu segmento?
                  </Label>
                  <RadioGroup 
                    value={formData.segment}
                    onValueChange={(value) => setFormData({...formData, segment: value})}
                    className="space-y-2"
                  >
                    {segments.map((segment) => (
                      <div key={segment} className="flex items-center space-x-2">
                        <RadioGroupItem value={segment} id={segment} />
                        <Label htmlFor={segment} className="text-sm">
                          {segment}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <Button 
                  type="submit"
                  variant="cta" 
                  size="xl" 
                  className="w-full text-lg py-6"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  🟢 Falar no Whatsapp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;