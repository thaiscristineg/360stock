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
import AccordionBenefit from './components/AccordionBenefit';
import demoVideo from './assets/demo.mp4';
import { useTranslation, Trans } from 'react-i18next';
import i18n from 'i18next';
import FloatingLanguageButton from './components/FloatingLanguageButton';

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

  const { t } = useTranslation();

  const benefitItems = [
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: t('benefits.items.0.title'),
      description: t('benefits.items.0.description')
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: t('benefits.items.1.title'),
      description: t('benefits.items.1.description')
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
      title: t('benefits.items.2.title'),
      description: t('benefits.items.2.description')
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: t('benefits.items.3.title'),
      description: t('benefits.items.3.description')
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

      <div className="hidden min-[901px]:flex fixed right-4 top-[35%] z-50 flex-col items-center">
        <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-gray-200 py-4 px-3 shadow-md flex flex-col items-center gap-2">
          {["en", "es", "pt"].map((lang) => {
            const isActive = i18n.language === lang;
            return (
              <button
                key={lang}
                onClick={() => i18n.changeLanguage(lang)}
                className={`uppercase w-7 h-7 text-xs font-medium rounded-full flex items-center justify-center transition-all duration-150
                  ${
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold ring-2 ring-primary'
                      : 'text-gray-400 hover:bg-gray-100'
                  }`}
              >
                {lang}
              </button>
            );
          })}
        </div>
      </div>

      <main>
        {/* Overview Section */}
        <section id="overview" ref={overviewRef} className="pt-36 pb-16 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-secondary/30 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 lg:gap-x-20 xl:gap-x-32 items-center">
              
              <div>
                <Badge className="mb-4 text-xs sm:text-sm px-3 py-1 font-medium rounded-full bg-muted text-muted-foreground">
                  {t('overview.badge')}
                </Badge>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  <Trans i18nKey="overview.title" components={{ 1: <span className="text-accent" /> }} />
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('overview.subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-primary-foreground shadow-md"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    {t('overview.start')}
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-foreground text-foreground hover:bg-foreground/10"
                    onClick={() => {
                      document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('overview.watch')}
                  </Button>
                </div>
              </div>

              <div className="relative hidden md:block">
                <img 
                  src={heroImage} 
                  alt="Controle de Estoque" 
                  className="rounded-lg shadow-2xl w-full max-w-[500px] h-auto object-contain mx-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white/60 backdrop-blur-md p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    <span className="text-sm font-semibold">{t('overview.span')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="py-20 bg-background scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t('features.title')}
              </h2>
              <p className="text-center text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                {t('features.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                <BarChart3 className="h-8 w-8 text-primary" />,
                <Package className="h-8 w-8 text-accent" />,
                <Layers className="h-8 w-8 text-primary" />,
                <Zap className="h-8 w-8 text-accent" />,
                <Target className="h-8 w-8 text-primary" />,
                <Settings className="h-8 w-8 text-accent" />
              ].map((icon, index) => (
                <Card key={index} className="cursor-default border bg-white rounded-xl sm:rounded-2xl px-5 py-6 sm:p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-primary/30">
                  <CardHeader>
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300">
                      {icon}
                    </div>
                    <CardTitle className="text-base sm:text-lg md:text-xl">
                      {t(`features.items.${index}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base text-foreground">
                      {t(`features.items.${index}.description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" ref={benefitsRef} className="pt-20 bg-secondary scroll-mt-16 space-y-16">
          <div className="max-w-7xl mx-auto px-4">

            {/* BLOCK 1 */}
            <div className="text-center mb-14">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t('benefits.title')}
              </h2>
              <p className="text-center text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                {t('benefits.subtitle')}
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-2 mt-4">
              <AccordionBenefit items={benefitItems} />
            </div>

            {/* BLOCK 2 */}
            <div className="bg-muted pt-14 pb-6">
              <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Left */}
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {t('benefits.applicationTitle')}
                    </h3>
                    <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                      {t('benefits.applicationSubtitle')}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-3 sm:px-0 max-w-md sm:max-w-none">
                    {[
                      { icon: <ShoppingCart className="h-5 w-5 text-primary" />, label: t('benefits.applicationItems.0') },
                      { icon: <FactoryIcon className="h-5 w-5 text-primary" />, label: t('benefits.applicationItems.1') },
                      { icon: <TruckIcon className="h-5 w-5 text-primary" />, label: t('benefits.applicationItems.2') },
                      { icon: <Wrench className="h-5 w-5 text-primary" />, label: t('benefits.applicationItems.3') },
                      { icon: <ChefHat className="h-5 w-5 text-primary" />, label: t('benefits.applicationItems.4') },
                      { icon: <Heart className="h-5 w-5 text-primary" />, label: t('benefits.applicationItems.5') },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center gap-2 p-3 bg-background rounded-md shadow-sm ring-1 ring-muted hover:ring-primary/50 transition text-sm font-medium text-foreground text-center"
                      >
                        <div className="bg-accent/10 p-2 rounded-full flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span className="whitespace-nowrap">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>  
              </div>
            </div>
          </div>

          {/* BLOCK 3 */}
          <div className="w-full bg-gradient-to-br from-[#1B2C40] to-[#2B3B55] text-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                  {t('benefits.whiteLabelTitle')}
                </h3>
                <p className="text-sm sm:text-base md:text-base text-white/80 max-w-3xl mx-auto">
                  {t('benefits.whiteLabelSubtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  <Shield className="h-6 w-6" />,
                  <Zap className="h-6 w-6" />,
                  <Target className="h-6 w-6" />,
                  <Settings className="h-6 w-6" />
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm px-4 py-5 sm:p-6 rounded-xl border border-white/10 shadow-md text-center transition-all hover:shadow-lg"
                  >
                    <div className="bg-accent/20 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      {icon}
                    </div>
                    <h4 className="text-sm sm:text-base md:text-base font-semibold mb-2 text-white">
                      {t(`benefits.whiteLabelItems.${index}.title`)}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-sm text-white/70">
                      {t(`benefits.whiteLabelItems.${index}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" ref={demoRef} className="py-20 bg-secondary scroll-mt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t('demo.title')}
              </h2>
              <p className="text-center text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                {t('demo.subtitle')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden ring-1 ring-muted/50">
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
                      <div className="bg-white/90 rounded-full p-4 sm:p-5 shadow-lg transition hover:scale-110">
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 4l10 6-10 6V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
                <div className="px-6 pb-8 pt-8 bg-white">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {[
                      <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2 transition-transform duration-200 group-hover:scale-110" />,
                      <BarChart3 className="h-6 w-6 text-blue-500 mx-auto mb-2 transition-transform duration-200 group-hover:scale-110" />,
                      <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2 transition-transform duration-200 group-hover:scale-110" />
                    ].map((icon, index) => (
                      <div key={index} className="group space-y-1 text-center">
                        {icon}
                        <p className="text-xs sm:text-sm md:text-base font-semibold text-foreground">
                          {t(`demo.labels.${index}`)}
                        </p>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t('contact.title')}
              </h2>
              <p className="text-center text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Card className="h-full shadow-md border border-muted bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl">{t('contact.form.title')}</CardTitle>
                    <CardDescription className="text-sm sm:text-base md:text-base">
                      {t('contact.form.description')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {formEnviado ? (
                      <div className="text-center py-12 animate-fade-in">
                        <CheckCircle className="mx-auto h-10 w-10 text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">{t('contact.success.title')}</h3>
                        <p className="text-muted-foreground text-sm">
                          {t('contact.success.description')}
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
                          <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.fields.name')}</label>
                          <input 
                            type="text" 
                            name="nome" 
                            required 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-150"
                            placeholder={t('contact.form.placeholders.name')} 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.fields.email')}</label>
                          <input 
                            type="email" 
                            name="email" 
                            required 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-150"
                            placeholder={t('contact.form.placeholders.email')} 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.fields.company')}</label>
                          <input 
                            type="text" 
                            name="empresa" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-150"
                            placeholder={t('contact.form.placeholders.company')} 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.fields.phone')}</label>
                          <input 
                            type="tel" 
                            name="telefone" 
                            required 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-150"
                            placeholder={t('contact.form.placeholders.phone')} 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.fields.message')}</label>
                          <textarea 
                            name="mensagem" 
                            required 
                            rows={4} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-150"
                            placeholder={t('contact.form.placeholders.message')} 
                          />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-[1.01]">
                          <ArrowRight className="mr-2 h-5 w-5" />
                          {t('contact.form.submit')}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8 pt-[26px]">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-6">{t('contact.alternatives.title')}</h3>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        <Phone className="h-5 w-5 text-blue-600" />,
                        <Mail className="h-5 w-5 text-blue-600" />
                      ].map((icon, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 border border-muted rounded-xl bg-white shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200"
                        >
                          <div className="p-3 rounded-full bg-blue-100 flex items-center justify-center">
                            {icon}
                          </div>
                          <div className="flex flex-col">
                            <p className="text-base font-semibold text-gray-900">
                              {t(`contact.alternatives.items.${index}.label`)}
                            </p>
                            <p className="text-sm text-gray-600">
                              {t(`contact.alternatives.items.${index}.value`)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/60 ring-1 ring-blue-100 p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg md:text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    {t('contact.reasons.title')}
                  </h4>
                  <ul className="space-y-2">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm md:text-base text-gray-700">
                          {t(`contact.reasons.items.${index}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 justify-items-center text-center lg:grid-cols-3 lg:justify-items-stretch lg:text-left gap-8 lg:gap-24 w-full max-w-[1000px] mx-auto">
              
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-auto max-w-sm">
                <img
                  src={logo_footer}
                  alt="360 Stock"
                  className="h-18 max-w-[180px] w-auto mb-4"
                />
                <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed tracking-tight">
                  {t('footer.description')}
                </p>
              </div>

              <div className="flex flex-col items-center text-center lg:items-end lg:text-right w-auto max-w-sm">
                <h4 className="text-white/90 text-xs sm:text-sm md:text-base font-semibold mb-3 tracking-tight">
                  {t('footer.navigation.title')}
                </h4>
                <ul className="space-y-2 text-gray-400 text-xs sm:text-sm md:text-sm">
                  {["overview", "features", "benefits", "demo", "contact"].map((key) => (
                    <li key={key}>
                      <a
                        href={`#${key}`}
                        className="hover:text-white hover:underline transition"
                      >
                        {t(`footer.navigation.items.${key}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center text-center lg:items-end lg:text-right w-auto max-w-sm">
                <h4 className="text-white/90 text-xs sm:text-sm md:text-base font-semibold mb-3 tracking-tight">
                  {t('footer.contact.title')}
                </h4>
                <ul className="space-y-2 text-gray-400 text-xs sm:text-sm md:text-sm">
                  <li>
                    <a
                      href={`mailto:${t('footer.contact.email')}`}
                      className="text-gray-400 hover:opacity-80 transition"
                    >
                      {t('footer.contact.email')}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${t('footer.contact.phone').replace(/[^0-9]/g, '')}`}
                      className="text-gray-400 hover:opacity-80 transition"
                    >
                      {t('footer.contact.phone')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-6 text-center">
              <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </footer>

        <FloatingLanguageButton />

      </main>  
    </div>
  );
}

export default App;

