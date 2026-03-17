import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, } from "react";
import { useLocation } from 'react-router-dom';



export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hasFirstView, setHasFirstView] = useState(false);

  const navigation = [
    {name: '大家様向けサービス',href: '/owner',},
    {name: '入居者様向けサービス',href: '/tenant',},
    {name: '仲介業者様向けサービス',href: '/agency',},
    {name: '会社概要' ,href: '/company',},
  ];
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

useEffect(() => {
  const firstView = document.getElementById("firstview");

  if (!firstView || location.pathname !== "/") {
    setShowHeader(true);
    setHasFirstView(false);
    return;
  }

  setHasFirstView(true);

  const observer = new IntersectionObserver(
    ([entry]) => {
      setShowHeader(!entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  observer.observe(firstView);

  return () => observer.unobserve(firstView);
}, [location.pathname]);

  return (
    <header className={`z-50  shadow-md fixed top-0 left-0 w-full bg-white transition-all duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-white px-4 py-2 ">
              <img src="/img/aichitatemono-logo.png" alt="あいち建物管理" className="w-[50%]" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:-ml-96 lg:-ml-82  lg:text-xs xl:text-base">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button className="flex items-center px-3 py-2 hover:text-primary transition-colors ">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {openDropdown === item.name && (
                      <div className=" absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-3 hover:bg-primary hover:text-white transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4">
            {navigation.map((item) => (
              <div key={item.name} className="border-t border-gray-200 pt-2">
                <Link
                  to={item.href}
                  className="block px-3 py-2 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-3 py-2 text-sm hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
