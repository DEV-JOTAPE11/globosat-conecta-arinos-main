import { Button } from "@/components/ui/button";
import { Satellite, Wifi, Phone } from "lucide-react";
import heroImage from "@/assets/hero-antenna.jpg";
import globosatLogo from "@/assets/globosat-logo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Antena Globosat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-up">
            <div className="flex items-center justify-center mb-6">
              <img 
                src={globosatLogo} 
                alt="Globosat Antenas" 
                className="h-24 md:h-32 w-auto object-contain animate-fade-up"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sua melhor imagem e conexão em Arinos
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Especialistas em Vendas, Instalação e Assistência Técnica. A solução definitiva em internet rural e SKY para Arinos e região.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
              onClick={() => scrollToSection("servicos")}
            >
              <Wifi className="mr-2 h-5 w-5" />
              Ver Serviços
            </Button>
            <a href="https://wa.me/5538999584543" target="_blank" rel="noopener noreferrer">
              <Button
                variant="hero"
                size="lg"
                className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90"
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm uppercase tracking-wide">Anos de Experiência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-sm uppercase tracking-wide">Clientes Satisfeitos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wide">Garantia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-sm uppercase tracking-wide">Suporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
