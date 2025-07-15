import { useState, useEffect } from 'react';
import logo from './assets/logo.png';

function Header({ activeSection }) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);

  useEffect(() => {
    const setManual = () => setIsManualScroll(true);

    window.addEventListener('wheel', setManual, { passive: true });
    window.addEventListener('touchstart', setManual, { passive: true });

    return () => {
      window.removeEventListener('wheel', setManual);
      window.removeEventListener('touchstart', setManual);
    };
  }, []);

  useEffect(() => {
    const handleMenuClick = () => {
      setIsManualScroll(false); // Evita esconder o menu após clique
    };

    const menuLinks = document.querySelectorAll('a[href^="#"]');
    menuLinks.forEach((link) => link.addEventListener('click', handleMenuClick));

    return () => {
      menuLinks.forEach((link) => link.removeEventListener('click', handleMenuClick));
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (isManualScroll && currentY > lastScrollY && currentY > 100) {
        setShowHeader(false); // rolando pra baixo
      } else {
        setShowHeader(true); // rolando pra cima ou clicou no menu
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isManualScroll]);

  const links = [
    { href: '#overview', label: 'Visão Geral' },
    { href: '#features', label: 'Funcionalidades' },
    { href: '#benefits', label: 'Benefícios' },
    { href: '#demo', label: 'Demonstração' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
      showHeader ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
        
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#overview" aria-label="Ir para o início">
              <img src={logo} alt="Logo 360 Stock" className="h-16 w-auto" />
            </a>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((item) => {
              const isActive = item.href === activeSection;
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-foreground hover:text-primary hover:border-b-2 hover:border-muted'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Botão */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="bg-primary text-white text-sm font-medium px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Header;
