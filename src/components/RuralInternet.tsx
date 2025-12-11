import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Globe, HeadphonesIcon } from "lucide-react";
import ruralImage from "@/assets/team-hughesnet2.jpg";

const RuralInternet = () => {
  const benefits = [
    "Cobertura em 100% do território nacional",
    "Instalação gratuita com equipamentos de última geração",
    "Velocidade de até 25 Mbps",
    "Sem necessidade de infraestrutura de cabos",
    "Ideal para fazendas, sítios e áreas remotas",
    "Suporte técnico especializado",
    "Planos flexíveis e acessíveis",
    "Conexão estável e confiável",
  ];

  return (
    <section id="internet-rural" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        {/* ... (cabeçalho da seção igual) ... */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
            <Zap className="h-4 w-4" />
            <span className="font-semibold">Solução Completa</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Internet Rural <span className="text-primary">HughesNet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conecte-se de qualquer lugar! Levamos internet de alta velocidade via satélite para toda a zona rural
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8 animate-fade-up">
            {/* ... (conteúdo de texto e benefícios igual) ... */}
            <div>
              <h3 className="text-3xl font-bold mb-6">
                A melhor internet para o campo
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A <strong className="text-secondary">HughesNet</strong> é a solução perfeita para quem vive ou trabalha 
                na zona rural e precisa de uma conexão confiável. Com tecnologia via satélite, você tem acesso à 
                internet de qualidade independente da localização.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <Card className="p-6 text-center bg-primary/5 border-primary/20">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Cobertura Rural</div>
              </Card>
              <Card className="p-6 text-center bg-secondary/5 border-secondary/20">
                <Zap className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">25 Mbps</div>
                <div className="text-sm text-muted-foreground">Velocidade</div>
              </Card>
              <Card className="p-6 text-center bg-primary/5 border-primary/20">
                <HeadphonesIcon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5538999584543" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="cta" size="lg" className="w-full">
                  Solicitar Instalação
                </Button>
              </a>
              <a href="tel:+5538999584543" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Ligar Agora
                </Button>
              </a>
            </div>
          </div>

          {/* PARTE ALTERADA: IMAGEM MENOR E CENTRALIZADA */}
          <div className="animate-fade-up flex justify-center" style={{ animationDelay: "0.2s" }}>
            <img
              src={ruralImage}
              alt="Instalação Internet Rural"
              // Adicionei w-full, max-w-md (limita largura) e object-cover
              className="rounded-2xl shadow-strong hover:scale-105 transition-transform duration-500 w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* ... (restante do código igual) ... */}
        <Card className="p-8 md:p-12 bg-gradient-to-r from-secondary to-primary text-white animate-fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              HughesNet é aqui na Globo Sat!
            </h3>
            <p className="text-lg mb-6 text-white/90">
              No campo, na praia e em mais de 5.000 municípios do Brasil. Somos parceiros credenciados 
              e oferecemos as melhores condições para você ter internet de qualidade onde estiver.
            </p>
            <a href="https://wa.me/5538999584543?text=Olá! Quero saber mais sobre a Internet Rural HughesNet" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="bg-white text-secondary hover:bg-white/90">
                Falar com Especialista
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RuralInternet;