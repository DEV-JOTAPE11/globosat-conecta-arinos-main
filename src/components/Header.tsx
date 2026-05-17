import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import globosatLogo from "@/assets/globosat-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Início", id: "inicio" },
    { label: "Sobre Nós", id: "sobre" },
    { label: "Serviços", id: "servicos" },
    { label: "Starlink", id: "starlink" },
    { label: "Internet Rural", id: "internet-rural" },
    { label: "Galeria", id: "galeria" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 transition-all duration-300 sm:top-4 sm:px-4 md:top-5 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between rounded-full border border-white/15 bg-slate-950/45 px-3 pl-5 shadow-[0_18px_50px_rgba(2,6,23,0.32),inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 sm:h-16 sm:pl-6 lg:h-[68px] lg:px-4 lg:pl-7">
          <div className="flex min-w-0 items-center">
            <img 
              src={globosatLogo} 
              alt="Globosat Antenas" 
              className="h-9 w-auto object-contain sm:h-10 lg:h-11"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 active:scale-[0.98] xl:text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+5538999584543">
              <Button variant="hero" size="lg" className="h-10 rounded-full px-4 text-xs shadow-none xl:text-sm">
                <Phone className="mr-1.5 h-4 w-4" />
                Pedir Orçamento
              </Button>
            </a>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-white hover:bg-white/10 hover:text-white"
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="rounded-md text-left text-lg font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </button>
                ))}
                <a href="tel:+5538999584543" className="mt-4" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full">
                    <Phone className="mr-2 h-5 w-5" />
                    Pedir Orçamento
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
