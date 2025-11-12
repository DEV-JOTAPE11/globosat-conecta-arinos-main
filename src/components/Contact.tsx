import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\nServiço: ${formData.service}\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5538999584543?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será direcionado para continuar a conversa.",
    });
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você. Escolha a melhor forma de contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <Card className="p-8 animate-fade-up">
            <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefone/WhatsApp</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(38) 9 9999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="service">Serviço Desejado</Label>
                <select
                  id="service"
                  className="w-full p-2 border rounded-md bg-background"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Internet Rural">Internet Rural</option>
                  <option value="Instalação SKY">Instalação SKY</option>
                  <option value="Manutenção">Manutenção</option>
                  <option value="Câmeras">Câmeras de Segurança</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Descreva o que você precisa"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar pelo WhatsApp
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Telefones</h4>
                  <p className="text-muted-foreground mb-1">
                    <a href="tel:+5538999584543" className="hover:text-primary transition-colors">
                      (38) 9 9958-4543
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:+5538999264712" className="hover:text-primary transition-colors">
                      (38) 9 9926-4712
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua Francisco Antônio Pires, N° 214<br />
                    Centro, Arinos - MG<br />
                    CEP: 38680-000
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-primary to-secondary text-white">
              <h4 className="font-bold text-xl mb-3">Atendimento Rápido via WhatsApp</h4>
              <p className="mb-4 text-white/90">
                Prefere um contato mais rápido? Fale conosco agora mesmo pelo WhatsApp!
              </p>
              <a href="https://wa.me/5538999584543" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Abrir WhatsApp
                </Button>
              </a>
            </Card>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-medium h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d-46.1!3d-15.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU0JzAwLjAiUyA0NsKwMDYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Globo Sat Antenas"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
