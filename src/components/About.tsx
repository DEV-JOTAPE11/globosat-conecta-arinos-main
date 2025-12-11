import { Card } from "@/components/ui/card";
import { Award, Users, Shield, MapPin } from "lucide-react";
import storeImage from "@/assets/unnamed.webp";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Sobre</span> a Globo Sat
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de 15 anos conectando pessoas e levando tecnologia para toda a região de Arinos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-up">
            <img
              src={storeImage}
              alt="Loja Globosat"
              className="rounded-2xl shadow-strong hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl font-bold text-foreground">
              Sua Conexão com o Mundo
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-primary">Globo Sat Antenas</strong>, liderada por <strong>Roney Carneiro</strong>, 
              é referência em soluções de conectividade e entretenimento em Arinos e região. Nossa missão é levar 
              internet de alta velocidade via satélite e a melhor programação de TV para todos, especialmente 
              para quem vive na zona rural.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos parceiros credenciados das maiores marcas do mercado como <strong className="text-secondary">HughesNet</strong> e
              <strong className="text-secondary"> Star-link</strong>, 
              oferecendo produtos de qualidade e assistência técnica especializada.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa equipe de técnicos qualificados está pronta para atender você com rapidez, 
              profissionalismo e o melhor custo-benefício da região.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-up border-t-4 border-t-primary">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h4 className="text-xl font-bold mb-2">Parceiro Credenciado</h4>
            <p className="text-muted-foreground">
              Autorizado HughesNet, SKY e Star-link com garantia de fábrica
            </p>
          </Card>

          <Card className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-up border-t-4 border-t-secondary" style={{ animationDelay: "0.1s" }}>
            <Users className="h-12 w-12 text-secondary mb-4" />
            <h4 className="text-xl font-bold mb-2">Atendimento Especializado</h4>
            <p className="text-muted-foreground">
              Equipe técnica experiente e atendimento personalizado
            </p>
          </Card>

          <Card className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-up border-t-4 border-t-primary" style={{ animationDelay: "0.2s" }}>
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h4 className="text-xl font-bold mb-2">Garantia Total</h4>
            <p className="text-muted-foreground">
              Todos os serviços com garantia e suporte pós-venda
            </p>
          </Card>

          <Card className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-up border-t-4 border-t-secondary" style={{ animationDelay: "0.3s" }}>
            <MapPin className="h-12 w-12 text-secondary mb-4" />
            <h4 className="text-xl font-bold mb-2">Loja Física</h4>
            <p className="text-muted-foreground">
              Localização central em Arinos com produtos em estoque
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
