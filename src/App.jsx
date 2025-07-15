import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  BarChart3, 
  Package, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Star,
  Target,
  Layers,
  Settings,
  ShoppingCart,
  FactoryIcon,
  TruckIcon,
  Wrench,
  ChefHat,
  Heart
} from 'lucide-react';
import heroImage from './assets/hero-image.png';
import logo_footer from './assets/logo_footer.png';
import './App.css';
import { useRef, useState, useEffect } from 'react';
import Header from './Header';
import useActiveSection from './hooks/useActiveSection';
import AccordionBenefit from "./components/AccordionBenefit";
import demoVideo from './assets/demo.mp4';

function App() {
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const demoRef = useRef(null);
  const contactRef = useRef(null);

  const activeSection = useActiveSection({
    overview: overviewRef,
    features: featuresRef,
    benefits: benefitsRef,
    demo: demoRef,
    contact: contactRef,
  });

  const benefitItems = [
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: "Redução de Custos Operacionais",
      description: "Reduza perdas por obsolescência, extravios e excesso de estoque. Utilize melhor seus espaços e reduza o capital de giro imobilizado."
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Aumento da Eficiência",
      description: "Automatize processos manuais, minimize erros e otimize o fluxo operacional."
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
      title: "Decisões Mais Estratégicas",
      description: "Acesse dados precisos e indicadores em tempo real para decisões mais rápidas e assertivas."
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Melhoria na Qualidade do Serviço",
      description: "Garanta a disponibilidade de produtos, evite rupturas e aumente a satisfação do cliente com entregas pontuais."
    }
  ];

  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const [formEnviado, setFormEnviado] = useState(false);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay bloqueado, o usuário precisa clicar novamente:", err);
      });
    }
  }, [showVideo]);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Header */}
      <Header activeSection={activeSection} />

      <main>
        {/* Hero Section */}
        <section id="overview" ref={overviewRef} className="pt-36 pb-28 px-4 sm:px-6 lg:px-8 bg-secondary/30 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 lg:gap-x-20 xl:gap-x-32 items-center">
              <div>
                <Badge className="mb-4 text-xs px-3 py-1 font-medium rounded-full bg-muted text-muted-foreground">
                  Solução White-Label
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Otimize seu Inventário, 
                  <span className="text-accent"> Potencialize</span> seus Resultados
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Tenha controle total do seu estoque com uma solução white-label moderna. Visualize todo o inventário com tecnologia de ponta e indicadores de gestão que impulsionam resultados.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-md"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Começar Agora
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-foreground text-foreground hover:bg-foreground/10"
                    onClick={() => {
                      document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Assistir Demonstração
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Controle de Estoque" 
                  className="rounded-lg shadow-2xl w-full max-w-[500px] h-auto object-contain mx-auto"
                />
                <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white/60 backdrop-blur-md p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    <span className="text-sm font-semibold">+35% Eficiência</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="py-20 bg-background scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Funcionalidades Essenciais para uma Gestão Impecável
              </h2>
              <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto">
                Nosso sistema reúne funcionalidades robustas para otimizar todas as etapas da gestão de estoque.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="h-8 w-8 text-primary" />,
                  title: "Controle em Tempo Real",
                  description: "Acompanhe seu estoque em tempo real com registros precisos de itens, movimentações e localizações atualizadas automaticamente."
                },
                {
                  icon: <Package className="h-8 w-8 text-accent" />,
                  title: "Gestão de Entradas e Saídas",
                  description: "Registre movimentações com rastreabilidade total e histórico completo de entradas e saídas."
                },
                {
                  icon: <Layers className="h-8 w-8 text-primary" />,
                  title: "Otimização de Espaço",
                  description: "Organize seu armazém de forma inteligente, facilitando a localização rápida dos produtos."
                },
                {
                  icon: <Zap className="h-8 w-8 text-accent" />,
                  title: "Alertas Inteligentes",
                  description: "Receba notificações automáticas sobre estoque mínimo, validade de produtos e condições críticas."
                },
                {
                  icon: <Target className="h-8 w-8 text-primary" />,
                  title: "Relatórios Personalizáveis",
                  description: "Crie relatórios completos sobre desempenho, giro de produtos, custos e outros dados, sob medida para o seu negócio."
                },
                {
                  icon: <Settings className="h-8 w-8 text-accent" />,
                  title: "Integração Flexível",
                  description: "Conecte seu estoque a sistemas ERP ou CRM com integração fluida e sincronização contínua."
                }
              ].map((feature, index) => (
                <Card key={index} className="cursor-default border bg-white rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/30">
                  <CardHeader>
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section (Organizada em blocos) */}
        <section id="benefits" ref={benefitsRef} className="pt-20 bg-secondary scroll-mt-16 space-y-16">

          <div className="max-w-7xl mx-auto px-4">
            {/* BLOCO 1 */}
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Transforme sua Gestão de Estoque em Vantagem Competitiva
              </h2>
              <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto">
                Ao implementar nosso sistema, sua empresa alcançará benefícios concretos que impulsionarão seus resultados.
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-2">
              <AccordionBenefit items={benefitItems} />
            </div>

            {/* BLOCO 2 */}
            <div className="bg-muted pt-14 pb-6">
              <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Esquerda */}
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      Onde Nosso Sistema Faz a Diferença
                    </h3>
                    <p className="text-base text-muted-foreground">
                      Atende com excelência diversos setores e tipos de negócios.
                    </p>
                  </div>

                  {/* Direita */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { label: "Varejo", icon: <ShoppingCart className="h-5 w-5 text-primary" /> },
                      { label: "Indústria", icon: <FactoryIcon className="h-5 w-5 text-primary" /> },
                      { label: "Logística", icon: <TruckIcon className="h-5 w-5 text-primary" /> },
                      { label: "Serviços", icon: <Wrench className="h-5 w-5 text-primary" /> },
                      { label: "Alimentos", icon: <ChefHat className="h-5 w-5 text-primary" /> },
                      { label: "Saúde", icon: <Heart className="h-5 w-5 text-primary" /> }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-md shadow-sm ring-1 ring-muted hover:ring-primary/50 transition">
                        <div className="bg-accent/10 p-2 rounded-full">
                          {item.icon}
                        </div>
                        <span className="text-base font-medium text-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>  
              </div>
            </div>
          </div>

          {/* BLOCO 3 */}
          <div className="w-full bg-gradient-to-br from-[#1B2C40] to-[#2B3B55] text-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 max-h-[580px]">
              <div className="text-center mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Sua Marca, Sua Solução: Vantagens do Modelo White-Label
                </h3>
                <p className="text-base text-white/80 max-w-3xl mx-auto">
                  Personalize totalmente o sistema com a identidade da sua empresa e fortaleça sua presença no mercado.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Shield className="h-6 w-6" />,
                    title: "Impulsione sua Marca",
                    description: "Apresente uma solução robusta com sua identidade, ampliando o reconhecimento e a credibilidade."
                  },
                  {
                    icon: <Zap className="h-6 w-6" />,
                    title: "Economia de Recursos",
                    description: "Evite custos elevados e longos prazos de desenvolvimento. Tenha um produto pronto rapidamente."
                  },
                  {
                    icon: <Target className="h-6 w-6" />,
                    title: "Foco no Core Business",
                    description: "Concentre esforços nas atividades principais enquanto cuidamos da tecnologia e manutenção."
                  },
                  {
                    icon: <Settings className="h-6 w-6" />,
                    title: "Flexibilidade Total",
                    description: "Adapte a aparência e os recursos do sistema conforme as necessidades da sua empresa."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-md text-center transition-all hover:shadow-lg"
                  >
                    <div className="bg-accent/20 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-base font-semibold mb-2 text-white">{item.title}</h4>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" ref={demoRef} className="py-20 bg-secondary scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Entenda Como Funciona na Prática
              </h2>
              <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto">
                Assista à demonstração completa e descubra como nossa solução pode transformar sua gestão de estoque.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                <div className="relative w-full aspect-video rounded-t-lg overflow-hidden">
                  {!showVideo ? (
                    <video
                      className={`w-full h-full object-cover transition duration-500 ${!showVideo ? 'brightness-50' : 'brightness-100 opacity-100'}`}
                      src={demoVideo}
                      preload="metadata"
                      playsInline
                      onClick={() => setShowVideo(true)}
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover transition duration-300"
                      src={demoVideo}
                      controls
                      autoPlay
                    />
                  )}

                  {!showVideo && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-white/90 rounded-full p-3 sm:p-4 shadow-lg transition hover:scale-110">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 4l10 6-10 6V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
                <div className="px-6 pb-8 pt-8 bg-white">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {[
                      {
                        icon: <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2 transition-transform duration-200 group-hover:scale-110" />,
                        title: "Interface Intuitiva",
                      },
                      {
                        icon: <BarChart3 className="h-6 w-6 text-blue-500 mx-auto mb-2 transition-transform duration-200 group-hover:scale-110" />,
                        title: "Indicadores Avançados",
                      },
                      {
                        icon: <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2 transition-transform duration-200 group-hover:scale-110" />,
                        title: "Resultados Reais",
                      },
                    ].map((item, index) => (
                      <div key={index} className="group space-y-1 text-center">
                        {item.icon}
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-20 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Pronto para Otimizar seu Estoque?
              </h2>
              <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto">
                Agende uma demonstração personalizada e veja como podemos ajudar sua empresa a ter mais controle e resultado com o estoque.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Card className="h-full shadow-md border border-muted bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">Entre em Contato</CardTitle>
                    <CardDescription>
                      Preencha o formulário e nossa equipe retornará em breve.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {formEnviado ? (
                      <div className="text-center py-12 animate-fade-in">
                        <CheckCircle className="mx-auto h-10 w-10 text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">Mensagem enviada com sucesso!</h3>
                        <p className="text-muted-foreground text-sm">
                          Em breve entraremos em contato por e-mail ou WhatsApp. Obrigado pelo seu interesse!
                        </p>
                      </div>
                    ) : (
                      <form 
                        action="https://formspree.io/f/xnnzqpzv" 
                        method="POST" 
                        onSubmit={async (e) => {
                          e.preventDefault();

                          const form = e.target;
                          const data = new FormData(form);

                          try {
                            await fetch("https://formspree.io/f/xnnzqpzv", {
                              method: "POST",
                              body: data,
                              headers: {
                                Accept: "application/json"
                              }
                            });
                            setFormEnviado(true);
                            form.reset();
                          } catch (error) {
                            console.error("Erro ao enviar formulário:", error);
                          }
                        }}
                        className="space-y-4"
                      >
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                          <input 
                            type="text" 
                            name="nome" 
                            required 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-150"
                            placeholder="Seu nome completo" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                          <input 
                            type="email" 
                            name="email" 
                            required 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-150"
                            placeholder="seuemail@mail.com" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                          <input 
                            type="text" 
                            name="empresa" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-150"
                            placeholder="Nome da sua empresa" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                          <input 
                            type="tel" 
                            name="telefone" 
                            required 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-150"
                            placeholder="(11) 99999-9999" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                          <textarea 
                            name="mensagem" 
                            required 
                            rows={4} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-150"
                            placeholder="Conte-nos sobre suas necessidades de controle de estoque..." 
                          />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-[1.01]">
                          <ArrowRight className="mr-2 h-5 w-5" />
                          Solicitar Demonstração
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Outras Formas de Contato</h3>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        {
                          label: 'Telefone',
                          value: '(00) 0000-0000',
                          icon: <Phone className="h-5 w-5 text-blue-600" />
                        },
                        {
                          label: 'E-mail',
                          value: 'email@360stock.com',
                          icon: <Mail className="h-5 w-5 text-blue-600" />
                        }
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 border border-muted rounded-xl bg-white shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200"
                        >
                          <div className="p-3 rounded-full bg-blue-100 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div className="flex flex-col">
                            <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                            <p className="text-sm text-gray-600">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/60 ring-1 ring-blue-100 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    Por que escolher nossa solução?
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Implementação rápida em até 30 dias",
                      "Suporte técnico especializado 24/7",
                      "Treinamento completo da equipe",
                      "Garantia de satisfação de 90 dias",
                      "ROI comprovado em menos de 6 meses"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Logo + Descrição */}
              <div>
                <img
                  src={logo_footer}
                  alt="360 Stock"
                  className="h-16 max-w-[180px] w-auto mb-4 hover:opacity-90 transition"
                />
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm tracking-tight">
                  Sua marca, seu sistema de estoque.
                </p>
              </div>

              {/* Navegação */}
              <div className="lg:pl-8">
                <h4 className="text-white/90 text-sm font-semibold mb-3 tracking-tight">Navegação</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#overview" className="hover:text-white hover:underline transition">Visão Geral</a></li>
                  <li><a href="#features" className="hover:text-white hover:underline transition">Funcionalidades</a></li>
                  <li><a href="#benefits" className="hover:text-white hover:underline transition">Benefícios</a></li>
                  <li><a href="#demo" className="hover:text-white hover:underline transition">Demonstração</a></li>
                  <li><a href="#contact" className="hover:text-white hover:underline transition">Contato</a></li>
                </ul>
              </div>

              {/* Contato */}
              <div className="lg:pl-4">
                <h4 className="text-white/90 text-sm font-semibold mb-3 tracking-tight">Contato</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a href="mailto:email@360stock.com" className="text-sm text-gray-400 hover:opacity-80 transition">
                      email@360stock.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:0000000000" className="text-sm text-gray-400 hover:opacity-80 transition">
                      (00) 0000-0000
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-6 text-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                © 2024 360 Stock. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>  
    </div>
  );
}

export default App;

