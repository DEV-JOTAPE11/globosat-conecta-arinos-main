import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Image as ImageIcon,
  Wifi,
  Shield,
  Truck,
  Plus,
  Store,
  Satellite,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// --- IMPORTAÇÃO DAS IMAGENS ---
// Certifique-se que os nomes aqui batem com os arquivos na pasta src/assets

// Destaques e Internet
import starlinkRoof from "@/assets/starlink-roof.jpg";
import starlinkFieldInstall from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11 (1).jpeg";
import storeCameraBoxes from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11 (2).jpeg";
import starlinkCloseOne from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11 (3).jpeg";
import starlinkCloseTwo from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11 (4).jpeg";
import starlinkStoreBox from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11 (5).jpeg";
import starlinkStoreBoxes from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11 (6).jpeg";
import storeCarCharger from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11 (7).jpeg";
import starlinkTileRoof from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11 (8).jpeg";
import starlinkMount from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11 (9).jpeg";
import starlinkRuralRoof from "@/assets/WhatsApp Image 2026-05-17 at 12.35.11.jpeg";
import teamHughes2 from "@/assets/team-hughesnet2.jpg"; // Técnico com cliente
import techFarm from "@/assets/tech-farm.jpg"; // Arte Tecnologia
import hughesPole from "@/assets/hughesnet-pole.jpg"; // Antena no poste

// Segurança
import cameraTree from "@/assets/camera-tree.jpg";
import installCamera from "@/assets/install-camera.jpg"; // Técnico na escada

// Equipe e Frota
import teamHughes from "@/assets/team-hughesnet.jpg"; // 3 técnicos
import carRoad from "@/assets/car-road.jpg";

// Loja (Estoque/Interior)
import storeCameras from "@/assets/store-cameras.jpg"; // Caixas de câmera
// Se tiver as fotos antigas da loja, mantenha aqui:
import storeFront from "@/assets/store-front.jpg";

// Tipo para os itens da galeria
type MediaItem = {
  id: number;
  category: "internet" | "seguranca" | "equipe" | "loja";
  src: string;
  alt: string;
  title: string;
  description?: string;
  badge?: "Starlink" | "HughesNet" | "Novo"; // Etiquetas especiais
  highlight?: boolean; // Se for true, a borda brilha (para Starlink)
};

const allMediaItems: MediaItem[] = [
  // --- STARLINK & INTERNET ---
  {
    id: 1,
    category: "internet",
    src: starlinkRoof,
    alt: "Antena Starlink",
    title: "Instalação Starlink",
    description: "Alta velocidade via satélite LEO",
    badge: "Starlink",
    highlight: true,
  },
  {
    id: 2,
    category: "internet",
    src: techFarm,
    alt: "Tecnologia na Fazenda",
    title: "Conexão no Campo",
    badge: "HughesNet",
  },
  {
    id: 3,
    category: "internet",
    src: hughesPole,
    alt: "Instalação HughesNet",
    title: "Internet Rural Estável",
    badge: "HughesNet",
  },
  {
    id: 4,
    category: "internet",
    src: teamHughes2,
    alt: "Atendimento ao Cliente",
    title: "Satisfação Garantida",
    description: "Levamos a conexão até você",
  },

  {
    id: 11,
    category: "internet",
    src: starlinkFieldInstall,
    alt: "Starlink instalada em área rural",
    title: "Starlink no Campo",
    description: "Instalação para áreas remotas",
    badge: "Starlink",
    highlight: true,
  },
  {
    id: 12,
    category: "internet",
    src: starlinkCloseOne,
    alt: "Antena Starlink instalada em telhado",
    title: "Antena Starlink",
    description: "Equipamento instalado em ponto alto",
    badge: "Starlink",
  },
  {
    id: 13,
    category: "internet",
    src: starlinkCloseTwo,
    alt: "Close de antena Starlink instalada",
    title: "Instalação Starlink",
    description: "Ajuste técnico para melhor sinal",
    badge: "Starlink",
  },
  {
    id: 14,
    category: "internet",
    src: starlinkStoreBox,
    alt: "Caixa Starlink disponível na loja",
    title: "Kit Starlink",
    description: "Venda do kit com instalação local",
    badge: "Starlink",
  },
  {
    id: 15,
    category: "internet",
    src: starlinkStoreBoxes,
    alt: "Caixas Starlink à pronta entrega",
    title: "Pronta Entrega",
    description: "Equipamentos Starlink disponíveis",
    badge: "Starlink",
    highlight: true,
  },
  {
    id: 16,
    category: "internet",
    src: starlinkTileRoof,
    alt: "Starlink instalada em telhado de cerâmica",
    title: "Instalação em Telhado",
    description: "Solução para residências rurais",
    badge: "Starlink",
  },
  {
    id: 17,
    category: "internet",
    src: starlinkMount,
    alt: "Suporte de fixação para Starlink",
    title: "Suporte Starlink",
    description: "Acessório para fixação segura",
    badge: "Starlink",
  },
  {
    id: 18,
    category: "internet",
    src: starlinkRuralRoof,
    alt: "Starlink instalada em telhado rural",
    title: "Conexão Rural",
    description: "Internet via satélite para o campo",
    badge: "Starlink",
    highlight: true,
  },

  // --- SEGURANÇA ---
  {
    id: 5,
    category: "seguranca",
    src: cameraTree,
    alt: "Câmera na árvore",
    title: "Monitoramento Rural",
    description: "Instalações estratégicas e camufladas",
  },
  {
    id: 6,
    category: "seguranca",
    src: installCamera,
    alt: "Técnico instalando câmera",
    title: "Instalação Profissional",
    description: "Equipe qualificada em altura",
  },

  // --- EQUIPE & FROTA ---
  {
    id: 7,
    category: "equipe",
    src: carRoad,
    alt: "Carro na estrada",
    title: "Atendemos em Toda Região",
    description: "Chegamos onde ninguém mais chega",
  },
  {
    id: 8,
    category: "equipe",
    src: teamHughes,
    alt: "Time Globo Sat",
    title: "Técnicos Certificados",
    description: "Confiança e segurança para sua família",
  },

  // --- LOJA ---
  {
    id: 9,
    category: "loja",
    src: storeCameras,
    alt: "Estoque de Câmeras",
    title: "Produtos a Pronta Entrega",
    badge: "Novo",
  },
  {
    id: 10,
    category: "loja",
    src: storeFront,
    alt: "Fachada da Loja",
    title: "Visite Nossa Loja",
    description: "No centro de Arinos",
  },
  {
    id: 19,
    category: "loja",
    src: storeCameraBoxes,
    alt: "Estoque de câmeras inteligentes na loja",
    title: "Câmeras Inteligentes",
    description: "Produtos de segurança a pronta entrega",
    badge: "Novo",
  },
  {
    id: 20,
    category: "loja",
    src: storeCarCharger,
    alt: "Carregador veicular disponível na loja",
    title: "Acessórios Eletrônicos",
    description: "Itens para uso diário e instalação",
    badge: "Novo",
  },
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const getFilteredItems = (category: string) => {
    if (category === "todos") return allMediaItems;
    if (category === "starlink") {
      return allMediaItems.filter((item) => item.badge === "Starlink");
    }
    return allMediaItems.filter((item) => item.category === category);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <Wifi className="h-4 w-4 text-blue-600" />
            <span className="font-semibold text-sm text-foreground">
              Starlink, HughesNet e soluções rurais
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Galeria de <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como levamos tecnologia de ponta para o campo e a cidade.
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full animate-fade-up">
          {/* Menu de Abas (Scrollável no mobile) */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-4 scrollbar-hide">
            <TabsList className="h-auto p-1 bg-white shadow-sm border rounded-full gap-2">
              <TabsTrigger
                value="todos"
                className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Todos
              </TabsTrigger>
              <TabsTrigger
                value="internet"
                className="rounded-full px-4 py-2 gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Wifi className="h-4 w-4" /> Internet
              </TabsTrigger>
              <TabsTrigger
                value="starlink"
                className="rounded-full px-4 py-2 gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Satellite className="h-4 w-4" /> Starlink
              </TabsTrigger>
              <TabsTrigger
                value="seguranca"
                className="rounded-full px-4 py-2 gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Shield className="h-4 w-4" /> Segurança
              </TabsTrigger>
              <TabsTrigger
                value="equipe"
                className="rounded-full px-4 py-2 gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Truck className="h-4 w-4" /> Frota
              </TabsTrigger>
              <TabsTrigger
                value="loja"
                className="rounded-full px-4 py-2 gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Store className="h-4 w-4" /> Loja
              </TabsTrigger>
            </TabsList>
          </div>

          {["todos", "internet", "starlink", "seguranca", "equipe", "loja"].map(
            (tabValue) => {
              const items = getFilteredItems(tabValue);
              const visibleItems = items.slice(0, visibleCount);
              const hasMore = items.length > visibleCount;

              return (
                <TabsContent
                  key={tabValue}
                  value={tabValue}
                  className="space-y-8 mt-0"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visibleItems.map((item) => (
                      <Dialog key={item.id}>
                        <DialogTrigger asChild>
                          <Card
                            className={`group relative overflow-hidden cursor-pointer border-0 rounded-xl aspect-[4/5] shadow-md hover:shadow-xl transition-all duration-300 ${
                              item.highlight
                                ? "ring-2 ring-primary ring-offset-2"
                                : ""
                            }`}
                          >
                            <img
                              src={item.src}
                              alt={item.alt}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Etiqueta (Badge) */}
                            {item.badge && (
                              <div className="absolute top-3 right-3 z-20">
                                <Badge
                                  className={`${
                                    item.badge === "Starlink"
                                      ? "bg-black text-white hover:bg-black/90"
                                      : item.badge === "HughesNet"
                                      ? "bg-blue-600 text-white hover:bg-blue-700"
                                      : "bg-white text-black hover:bg-white/90"
                                  } font-bold shadow-lg`}
                                >
                                  {item.badge}
                                </Badge>
                              </div>
                            )}

                            {/* Legenda flutuante */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                              <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {item.title}
                              </p>
                              {item.description && (
                                <p className="text-white/80 text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                  {item.description}
                                </p>
                              )}
                              <div className="flex items-center gap-2 text-primary text-sm mt-3 font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                <ImageIcon className="h-4 w-4" />
                                <span>Ampliar foto</span>
                              </div>
                            </div>
                          </Card>
                        </DialogTrigger>

                        <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-black/95 border-none">
                          <div className="relative flex items-center justify-center h-[80vh]">
                            <img
                              src={item.src}
                              alt={item.alt}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>

                  {hasMore && (
                    <div className="flex justify-center pt-8">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handleLoadMore}
                        className="gap-2 bg-white hover:bg-gray-50"
                      >
                        <Plus className="h-4 w-4" />
                        Ver Mais Fotos
                      </Button>
                    </div>
                  )}
                </TabsContent>
              );
            }
          )}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
