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
  Settings
} from 'lucide-react';
import heroImage from './assets/hero-image.png';
import dashboardMockup from './assets/dashboard-mockup.jpg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img src="/src/assets/react.svg" alt="360 Stock Logo" className="h-8 w-8 mr-3" />
              <h1 className="text-2xl font-bold text-foreground">360 Stock</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#overview" className="text-foreground hover:text-primary transition-colors">Visão Geral</a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Funcionalidades</a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Benefícios</a>
              <a href="#demo" className="text-foreground hover:text-primary transition-colors">Demonstração</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
            </nav>
            <Button className="bg-primary hover:bg-primary-foreground text-primary-foreground">
              Solicitar Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary text-primary hover:bg-secondary-foreground">
                Solução White-Label
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Otimize seu Inventário, 
                <span className="text-accent"> Potencialize</span> seus Resultados
              </h1>
              <p className="text-xl text-foreground mb-8 leading-relaxed">
                A solução white-label definitiva para controle de estoque. Desenvolvido com tecnologia de ponta, 
                oferece uma visão 360º do seu inventário com indicadores de gestão avançados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-foreground text-primary-foreground">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Começar Agora
                </Button>
                <Button size="lg" variant="outline">
                  Ver Demonstração
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Controle de Estoque" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg">
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
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Funcionalidades Essenciais para uma Gestão Impecável
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Nosso sistema oferece um conjunto robusto de funcionalidades projetadas para otimizar cada etapa do seu processo de estoque.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-primary" />,
                title: "Controle em Tempo Real",
                description: "Mantenha um registro preciso de todos os itens em estoque, suas localizações e movimentações com atualizações instantâneas."
              },
              {
                icon: <Package className="h-8 w-8 text-accent" />,
                title: "Gestão de Entradas e Saídas",
                description: "Registre eficientemente todas as movimentações de produtos com rastreabilidade completa e histórico detalhado."
              },
              {
                icon: <Layers className="h-8 w-8 text-primary" />,
                title: "Otimização de Espaço",
                description: "Organize seu armazém de forma inteligente, otimizando o uso do espaço e facilitando a localização de produtos."
              },
              {
                icon: <Zap className="h-8 w-8 text-accent" />,
                title: "Alertas Inteligentes",
                description: "Receba notificações automáticas para níveis mínimos de estoque, produtos próximos da validade e condições críticas."
              },
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Relatórios Personalizáveis",
                description: "Gere relatórios detalhados sobre desempenho, giro de produtos, custos e muito mais, adaptados às suas necessidades."
              },
              {
                icon: <Settings className="h-8 w-8 text-accent" />,
                title: "Integração Flexível",
                description: "Integre facilmente com outros sistemas de gestão (ERP, CRM) garantindo fluxo de dados contínuo."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
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

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Transforme sua Gestão de Estoque em Vantagem Competitiva
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Ao implementar nosso sistema, sua empresa experimentará benefícios que impactarão diretamente seus resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    icon: <TrendingUp className="h-6 w-6 text-accent" />,
                    title: "Redução de Custos Operacionais",
                    description: "Minimize perdas por obsolescência, extravios e excesso de estoque. Otimize o uso do espaço e reduza capital de giro."
                  },
                  {
                    icon: <Zap className="h-6 w-6 text-primary" />,
                    title: "Aumento da Eficiência",
                    description: "Automatize processos manuais, reduza erros e acelere o fluxo de trabalho, liberando sua equipe para tarefas estratégicas."
                  },
                  {
                    icon: <BarChart3 className="h-6 w-6 text-accent" />,
                    title: "Melhora na Tomada de Decisão",
                    description: "Acesse dados precisos e indicadores em tempo real para decisões mais rápidas e assertivas sobre compras e vendas."
                  },
                  {
                    icon: <Users className="h-6 w-6 text-primary" />,
                    title: "Otimização do Nível de Serviço",
                    description: "Garanta disponibilidade de produtos, evite rupturas e melhore a satisfação do cliente com entregas precisas."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-card p-2 rounded-lg shadow-sm">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={dashboardMockup} 
                alt="Dashboard do Sistema" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ROI: +150%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Onde Nosso Sistema Faz a Diferença
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Versatilidade comprovada em diversos setores e tipos de negócios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Varejo e E-commerce",
                description: "Gerencie estoque de lojas físicas e online de forma integrada, otimizando reposição e evitando perdas de vendas.",
                color: "bg-primary"
              },
              {
                title: "Indústria e Manufatura",
                description: "Controle fluxo de matérias-primas, produtos em processo e acabados, garantindo eficiência na produção.",
                color: "bg-accent"
              },
              {
                title: "Distribuição e Logística",
                description: "Otimize gestão de múltiplos armazéns, rastreie produtos em trânsito e melhore a cadeia de suprimentos.",
                color: "bg-primary"
              },
              {
                title: "Serviços e Manutenção",
                description: "Gerencie estoque de peças e equipamentos, garantindo disponibilidade e reduzindo tempo de inatividade.",
                color: "bg-accent"
              },
              {
                title: "Alimentos e Bebidas",
                description: "Controle produtos perecíveis, gerencie datas de validade e garanta conformidade com regulamentações.",
                color: "bg-primary"
              },
              {
                title: "Farmacêutico e Saúde",
                description: "Mantenha controle rigoroso de medicamentos e suprimentos médicos com rastreabilidade completa.",
                color: "bg-accent"
              }
            ].map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 ${useCase.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White Label Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Sua Marca, Sua Solução: A Vantagem do Modelo White-Label
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nosso sistema pode ser totalmente personalizado com a identidade visual da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Fortalecimento da Marca",
                description: "Apresente uma solução robusta sob sua própria marca, aumentando reconhecimento e credibilidade."
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Economia de Recursos",
                description: "Evite altos custos e tempo de desenvolvimento. Tenha um produto pronto em tempo recorde."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Foco no Core Business",
                description: "Concentre esforços nas atividades principais enquanto cuidamos da tecnologia e manutenção."
              },
              {
                icon: <Settings className="h-8 w-8" />,
                title: "Flexibilidade Total",
                description: "Adapte interface e funcionalidades para alinhar perfeitamente à sua marca e necessidades."
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary text-secondary-foreground rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm opacity-90">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Veja Nosso Sistema em Ação
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Assista à demonstração completa e descubra como nossa solução pode transformar sua gestão de estoque.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Demonstração Interativa</h3>
                  <p className="text-gray-300 mb-4">Clique para assistir ao vídeo de demonstração</p>
                  <p className="text-sm text-gray-400">
                    [Espaço reservado para vídeo do YouTube ou demonstração personalizada]
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <span className="font-semibold">Interface Intuitiva</span>
                    </div>
                    <p className="text-sm text-gray-600">Fácil de usar e navegar</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <BarChart3 className="h-5 w-5 text-blue-500 mr-1" />
                      <span className="font-semibold">Indicadores Avançados</span>
                    </div>
                    <p className="text-sm text-gray-600">Dashboards completos</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-1" />
                      <span className="font-semibold">Resultados Reais</span>
                    </div>
                    <p className="text-sm text-gray-600">Casos de sucesso comprovados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pronto para Otimizar seu Estoque?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entre em contato conosco hoje mesmo para agendar uma demonstração personalizada e descobrir como podemos ajudar seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Entre em Contato</CardTitle>
                  <CardDescription>
                    Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail Empresarial</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="seu@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Conte-nos sobre suas necessidades de controle de estoque..."
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Solicitar Demonstração
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Outras Formas de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Telefone</p>
                      <p className="text-gray-600">(11) 3000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">E-mail</p>
                      <p className="text-gray-600">contato@inventorypro.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Por que escolher nossa solução?</h4>
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Package className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">InventoryPro</h3>
              </div>
              <p className="text-gray-400 text-sm">
                A solução white-label definitiva para controle de estoque e gestão de inventário.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demonstração</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status do Sistema</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 InventoryPro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

