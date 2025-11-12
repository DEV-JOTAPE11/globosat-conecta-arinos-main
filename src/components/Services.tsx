import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Satellite, Tv, Wrench, Camera, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Satellite,
      title: "Internet Rural HughesNet",
      description: "Levamos internet de alta velocidade para sua fazenda, sítio ou casa, não importa onde esteja. Conexão via satélite disponível em toda a região.",
      color: "primary",
      features: ["Até 25 Mbps", "Instalação Grátis", "Cobertura Total", "Suporte 24h"],
    },
    {
      icon: Tv,
      title: "SKY TV",
      description: "Venda, instalação e manutenção da melhor programação de TV por assinatura. Planos pré-pago e pós-pago disponíveis.",
      color: "secondary",
      features: ["HD e 4K", "Centenas de Canais", "SKY Pré-pago", "Instalação Rápida"],
    },
    {
      icon: Wrench,
      title: "Assistência Técnica",
      description: "Equipe qualificada para reparos, mudanças de ponto, apontamento de antena e solução de problemas técnicos.",
      color: "primary",
      features: ["Técnicos Certificados", "Visita Rápida", "Orçamento Grátis", "Garantia de Serviço"],
    },
    {
      icon: Camera,
      title: "Segurança Eletrônica",
      description: "Instalação de câmeras de segurança e equipamentos para proteger seu patrimônio com tecnologia de ponta.",
      color: "secondary",
      features: ["Câmeras HD", "Acesso Remoto", "Gravação em Nuvem", "Instalação Profissional"],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em conectividade, entretenimento e segurança para você
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-lg mb-6 ${
                  service.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                }`}>
                  <Icon className={`h-8 w-8 ${
                    service.color === "primary" ? "text-primary" : "text-secondary"
                  }`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        service.color === "primary" ? "bg-primary" : "bg-secondary"
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-up">
          <a href="https://wa.me/5538999584543" target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
