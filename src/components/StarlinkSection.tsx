import { Button } from "@/components/ui/button";
import * as PricingCard from "@/components/ui/pricing-card";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  PackageCheck,
  Satellite,
  Wrench,
  Zap,
} from "lucide-react";
import starlinkBoxes from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11 (6).jpeg";
import starlinkClose from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11 (4).jpeg";
import starlinkRoof from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11.jpeg";

const whatsappUrl =
  "https://wa.me/5538999584543?text=Ol%C3%A1!%20Quero%20saber%20sobre%20venda%20e%20instala%C3%A7%C3%A3o%20de%20Starlink.";

const benefits = [
  "Venda do kit Starlink",
  "Instalação técnica local",
  "Suporte em Arinos e região",
  "Ideal para fazendas, sítios e áreas remotas",
];

const highlights = [
  {
    icon: PackageCheck,
    label: "Kit disponível",
    text: "Equipamentos Starlink para compra e instalação.",
  },
  {
    icon: Wrench,
    label: "Instalação local",
    text: "Equipe preparada para instalar no ponto ideal.",
  },
  {
    icon: MapPin,
    label: "Atendimento regional",
    text: "Suporte para Arinos, zona rural e região.",
  },
];

const StarlinkSection = () => {
  return (
    <section
      id="starlink"
      className="relative overflow-hidden bg-slate-950 py-20 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.14),transparent_34%),linear-gradient(135deg,rgba(198,5,47,0.28),transparent_36%),linear-gradient(315deg,rgba(0,82,153,0.38),transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-white/20"
      />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl">
              <Satellite className="h-4 w-4 text-white" />
              Starlink com venda e instalação
            </div>

            <h2 className="mb-6 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Starlink à pronta entrega em Arinos
            </h2>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/78 md:text-xl">
              Venda do kit, instalação e suporte técnico para zona rural,
              sítios, fazendas e empresas que precisam de internet via satélite
              com alta performance.
            </p>

            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl"
                  >
                    <Icon className="mb-3 h-5 w-5 text-white" />
                    <h3 className="mb-1 text-sm font-bold">{item.label}</h3>
                    <p className="text-xs leading-relaxed text-white/68">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full bg-white text-slate-950 hover:bg-white/90 sm:w-auto"
                >
                  Quero minha Starlink
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-slate-950"
                onClick={() =>
                  document
                    .getElementById("galeria")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver instalações
              </Button>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="order-2 grid grid-cols-2 gap-5 lg:order-1 lg:grid-cols-1">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl">
                <img
                  src={starlinkClose}
                  alt="Antena Starlink instalada em telhado"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl">
                <img
                  src={starlinkRoof}
                  alt="Instalação Starlink em área rural"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="order-1 space-y-5 lg:order-2">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl">
                <img
                  src={starlinkBoxes}
                  alt="Caixas do kit Starlink à pronta entrega"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/88 to-transparent p-5">
                  <p className="text-sm font-semibold text-white">
                    Kit Starlink disponível na loja
                  </p>
                </div>
              </div>

              <PricingCard.Card className="max-w-none border-white/15 bg-white text-slate-950 shadow-[0_24px_70px_rgba(2,6,23,0.38)]">
                <PricingCard.Header className="border-slate-200 bg-slate-100">
                  <PricingCard.Plan>
                    <PricingCard.PlanName>
                      <Zap className="text-primary" aria-hidden="true" />
                      <span>Starlink</span>
                    </PricingCard.PlanName>
                    <PricingCard.Badge>Internet via satélite</PricingCard.Badge>
                  </PricingCard.Plan>
                  <PricingCard.Price>
                    <PricingCard.MainPrice>R$ 179</PricingCard.MainPrice>
                    <PricingCard.Period>/ mês</PricingCard.Period>
                  </PricingCard.Price>
                  <Button variant="cta" className="w-full font-semibold" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Quero minha Starlink
                    </a>
                  </Button>
                </PricingCard.Header>

                <PricingCard.Body>
                  <PricingCard.List>
                    {benefits.map((item) => (
                      <PricingCard.ListItem key={item}>
                        <span className="mt-0.5">
                          <CheckCircle2
                            className="h-4 w-4 text-primary"
                            aria-hidden="true"
                          />
                        </span>
                        <span>{item}</span>
                      </PricingCard.ListItem>
                    ))}
                  </PricingCard.List>
                </PricingCard.Body>
              </PricingCard.Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarlinkSection;
