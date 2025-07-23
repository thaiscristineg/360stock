import { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import { useTranslation } from 'react-i18next';

function Header({ activeSection }) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useTranslation();

  const links = [
    { href: '#overview', label: t('header.overview') },
    { href: '#features', label: t('header.features') },
    { href: '#benefits', label: t('header.benefits') },
    { href: '#demo', label: t('header.demo') },
    { href: '#contact', label: t('header.contact') },
  ];

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
      setIsManualScroll(false);
      setMenuOpen(false);
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
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isManualScroll]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
      showHeader ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#overview" aria-label="Ir para o início">
              <img src={logo} alt="Logo 360 Stock" className="h-14 sm:h-16 md:h-18 w-auto" />
            </a>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
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

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-primary text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              {t('header.cta')}
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-primary focus:outline-none"
              aria-label="Abrir menu"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100 absolute top-full left-0 w-full z-40">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm sm:text-base text-foreground font-medium hover:text-primary transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-white text-sm sm:text-base font-medium px-4 py-2 rounded-lg text-center hover:shadow-md transition"
            >
              {t('header.cta')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

