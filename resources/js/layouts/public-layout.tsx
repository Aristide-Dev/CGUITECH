import { Head, Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  PhoneCall, 
  Mail, 
  Clock, 
  MapPin, 
  ArrowRight, 
  ChevronDown,
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Menu as MenuIcon,
  X
} from 'lucide-react';
import { type SharedData } from '@/types';

// Types de base
type PublicLayoutProps = PropsWithChildren<{
  title?: string;
  description?: string;
}>;

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

interface SubMenuProps {
  item: MenuItem;
  depth?: number;
  onItemClick: () => void;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

interface DesktopNavigationProps {
  menuItems: MenuItem[];
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface FooterLinksProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

// Extraction des composants pour une meilleure organisation
const TopContactBar = () => (
  <div className="bg-primary-900 text-white py-2 px-4 text-sm">
    <div className="container mx-auto flex flex-wrap justify-between">
      <div className="flex flex-wrap items-center gap-4">
        <a 
          href="tel:+224627969855" 
          className="flex items-center space-x-1 hover:text-yellow-400 transition-colors"
          aria-label="Téléphone"
        >
          <PhoneCall className="h-4 w-4" aria-hidden="true" />
          <span>+224 627 96 98 55</span>
        </a>
        <a 
          href="mailto:infos@cguitech.com" 
          className="flex items-center space-x-1 hover:text-yellow-400 transition-colors"
          aria-label="Email"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span>infos@cguitech.com</span>
        </a>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" aria-hidden="true" />
          <span>8:00 – 17:00</span>
        </div>
      </div>
      <AuthLinks />
    </div>
  </div>
);

const AuthLinks = () => {
  const { auth } = usePage<SharedData>().props;
  
  return (
    <div className="flex space-x-4">
      {auth.user ? (
        <Link
          href={route('dashboard')}
          className="hover:text-yellow-400 transition-colors"
        >
          Tableau de bord
        </Link>
      ) : (
        <>
          <Link
            href={route('login')}
            className="hover:text-yellow-400 transition-colors"
          >
            Connexion
          </Link>
          <Link
            href={route('register')}
            className="hover:text-yellow-400 transition-colors"
          >
            Inscription
          </Link>
        </>
      )}
    </div>
  );
};

const Logo = ({ className = "h-16", onClick }: LogoProps) => (
  <Link href="/" onClick={onClick}>
    <img 
      src="/images/logo-cguitech-wb.svg" 
      alt="CGUITECH Logo" 
      className={`${className} w-auto`} 
      width="160"
      height="60"
    />
  </Link>
);

// Composant pour le sous-menu
const SubMenu = ({ item, depth = 0, onItemClick }: SubMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSubmenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={`${depth > 0 ? 'border-t border-gray-100' : 'border-b border-gray-100'}`}>
      <div className="flex items-center justify-between p-4">
        <Link 
          href={item.href} 
          className={`${depth === 0 ? 'text-lg font-medium' : 'text-base'}`}
          onClick={() => !item.children && onItemClick()}
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            onClick={toggleSubmenu}
            className="p-2"
            aria-expanded={isOpen}
            aria-label={`Expand ${item.label} submenu`}
          >
            <ChevronDown 
              className={`h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      
      {item.children && isOpen && (
        <div className={`bg-gray-${depth === 0 ? '50' : '100'}`}>
          {item.children.map((subItem) => (
            <SubMenu 
              key={subItem.label} 
              item={subItem} 
              depth={depth + 1}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Composant pour le menu mobile
const MobileMenu = ({ menuItems, isOpen, onClose }: MobileMenuProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetTrigger asChild>
        <button 
          className="lg:hidden focus:outline-none p-2"
          onClick={() => onClose()}
          aria-label="Ouvrir le menu"
        >
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] p-0 overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center border-b p-4">
            <Logo className="h-10" onClick={onClose} />
            <button 
              onClick={onClose}
              aria-label="Fermer le menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto py-2">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <SubMenu 
                  key={item.label} 
                  item={item} 
                  onItemClick={onClose}
                />
              ))}
            </div>
          </div>
          
          <div className="border-t p-4">
            <Button 
              variant="default" 
              className="w-full bg-primary hover:bg-primary-600 text-white"
              onClick={() => {
                window.location.href = '/contact';
                onClose();
              }}
            >
              Obtenir un Devis
            </Button>
            <div className="flex justify-between mt-4">
              <a href="tel:+224627969855" className="flex items-center text-sm text-gray-600">
                <PhoneCall className="h-4 w-4 mr-1" aria-hidden="true" />
                +224 627 96 98 55
              </a>
              <a href="mailto:infos@cguitech.com" className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-1" aria-hidden="true" />
                infos@cguitech.com
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Composant pour le menu de navigation desktop
const DesktopNavigation = ({ menuItems }: DesktopNavigationProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openSubmenu && menuRefs.current[openSubmenu] && 
          !menuRefs.current[openSubmenu]?.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openSubmenu]);

  return (
    <nav className="hidden lg:block" aria-label="Navigation principale">
      <ul className="flex space-x-6">
        {menuItems.map((item) => (
          <li 
            key={item.label} 
            className="relative group"
            ref={(el) => {
              menuRefs.current[item.label] = el;
            }}
          >
            <div 
              className="flex items-center gap-1 cursor-pointer font-medium text-gray-700 hover:text-primary py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              onMouseEnter={() => setOpenSubmenu(item.label)}
              aria-expanded={openSubmenu === item.label}
              role={item.children ? "button" : undefined}
            >
              <Link href={item.href}>{item.label}</Link>
              {item.children && (
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              )}
            </div>
            
            {/* Sous-menu desktop niveau 1 */}
            {item.children && openSubmenu === item.label && (
              <div 
                className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[220px] py-2 z-50 border border-primary-100"
                onMouseLeave={() => setOpenSubmenu(null)}
                role="menu"
              >
                {item.children.map((subItem) => (
                  <div key={subItem.label} className="relative group/submenu">
                    <Link 
                      href={subItem.href}
                      className="block px-4 py-2 hover:bg-primary-50 hover:text-primary text-gray-700 flex items-center justify-between"
                      role="menuitem"
                    >
                      {subItem.label}
                      {subItem.children && (
                        <ChevronDown className="h-4 w-4 -rotate-90" aria-hidden="true" />
                      )}
                    </Link>
                    
                    {/* Sous-menu desktop niveau 2 */}
                    {subItem.children && (
                      <div 
                        className="absolute left-full top-0 mt-0 ml-0 bg-white shadow-lg rounded-md min-w-[180px] py-2 hidden group-hover/submenu:block border border-primary-100"
                        role="menu"
                      >
                        {subItem.children.map((nestedSubItem) => (
                          <Link 
                            key={nestedSubItem.label} 
                            href={nestedSubItem.href}
                            className="block px-4 py-2 hover:bg-primary-50 hover:text-primary text-gray-700"
                            role="menuitem"
                          >
                            {nestedSubItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Composant pour le footer
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-500 to-indigo-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Logo className="h-10" />
            </div>
            <p className="mb-6 text-sm text-gray-300">
              CGUITECH ("Compagnie Guinéenne de Technologies et d'Innovations") est un fournisseur dynamique et progressiste de technologie d'entreprise visant à fournir à nos clients des solutions d'affaires innovantes et rentables.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com/cguitech" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="https://twitter.com/cguitech" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialLink href="https://linkedin.com/company/cguitech" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="https://instagram.com/cguitech" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
            </div>
          </div>
          
          <FooterLinks 
            title="Nos Services"
            links={[
              { label: "IT Management", href: "/services/it-management" },
              { label: "Cloud Service", href: "/services/cloud" },
              { label: "Data Center", href: "/services/infrastructure" },
              { label: "Software Development", href: "/services/software" },
              { label: "Machine Learning", href: "/services/ai" },
              { label: "Cybersécurité", href: "/services/security" }
            ]}
          />
          
          <FooterLinks 
            title="Produits"
            links={[
              { label: "Computers", href: "/products/computers" },
              { label: "Networking", href: "/products/networking" },
              { label: "Servers", href: "/products/servers" },
              { label: "Printers & Copiers", href: "/products/printers" },
              { label: "Security", href: "/products/security" },
              { label: "Software", href: "/products/software" }
            ]}
          />
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300">T2 Kipé Centre Emetteur, Ratoma<br/>Conakry, Guinée</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300"><strong>Opening Hours:</strong> 8:00 – 17:00</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-3 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300"><strong>Phone:</strong> <a href="tel:+224627969855" className="hover:text-yellow-400 transition-colors">+224 627 96 98 55</a></span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300"><a href="mailto:infos@cguitech.com" className="hover:text-yellow-400 transition-colors">infos@cguitech.com</a></span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">&copy; Copyright {currentYear}. Tous droits réservés par CGUITECH</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center">
            <Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors text-gray-300">Politique de confidentialité</Link>
            <Link href="/terms" className="hover:text-yellow-400 transition-colors text-gray-300">Conditions d'utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Composants utilitaires pour le footer
const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a 
    href={href} 
    className="bg-primary-800 hover:bg-primary-700 transition-colors p-2 rounded-full"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLinks = ({ title, links }: FooterLinksProps) => (
  <div>
    <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
    <ul className="space-y-3">
      {links.map(link => (
        <li key={link.href}>
          <Link 
            href={link.href} 
            className="hover:text-yellow-400 transition-colors flex items-center"
          >
            <ArrowRight className="h-3 w-3 mr-2" aria-hidden="true" /> 
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Menu data - Externalisé pour faciliter les modifications
const getMenuItems = (): MenuItem[] => [
  {
    label: "Accueil",
    href: "/"
  },
  {
    label: "À propos",
    href: "/about",
    children: [
      { label: "Profil de l'entreprise", href: "/about" },
      { label: "Notre équipe", href: "/about/team" },
      { label: "Approche de gestion", href: "/about/management" },
      { label: "Pourquoi nous choisir", href: "/about/why-choose-us" },
      { label: "Partenaires", href: "/about/partners" }
    ]
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Services IT gérés tout-en-un", href: "/services/it-management" },
      { label: "Services de support IT", href: "/services/support" },
      { label: "Solutions cloud", href: "/services/cloud" },
      { label: "Conception Web et Hébergement", href: "/services/web-design" },
      { label: "Infrastructure", href: "/services/infrastructure" },
      { label: "IP Telephony", href: "/services/ip-telephony" },
      { label: "Software Development", href: "/services/software" }
    ]
  },
  {
    label: "Produits",
    href: "/products",
    children: [
      { 
        label: "Computers", 
        href: "/products/computers",
        children: [
          { label: "HP", href: "/products/computers/hp" },
          { label: "Dell", href: "/products/computers/dell" }
        ]
      },
      { label: "Networking", href: "/products/networking" },
      { label: "Power & Rack Equipment", href: "/products/power-equipment" },
      { label: "Printers & Copiers", href: "/products/printers" },
      { label: "Security", href: "/products/security" },
      { label: "Servers", href: "/products/servers" },
      { label: "Cloud & Storage", href: "/products/cloud-storage" },
      { label: "Telecommunication", href: "/products/telecommunication" },
      { label: "Software", href: "/products/software" }
    ]
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Retails & e-Commerce", href: "/industries/retail" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Government", href: "/industries/government" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Finance (BFSI)", href: "/industries/finance" },
      { label: "Media & Entertainment", href: "/industries/media" },
      { label: "Agriculture", href: "/industries/agriculture" },
      { label: "Automotive", href: "/industries/automotive" }
    ]
  },
  {
    label: "Ressources",
    href: "/resources",
    children: [
      { label: "Études de cas", href: "/resources/case-studies" },
      { label: "Blog & Actualités", href: "/resources/blog" },
      { label: "Livre blanc & Guides", href: "/resources/guides" },
      { label: "FAQ", href: "/resources/faq" }
    ]
  },
  {
    label: "Contact",
    href: "/contact"
  }
];

// Composant principal du layout
export default function PublicLayout({ 
  children, 
  title = "CGUITECH - Solutions Technologiques Innovantes en Guinée", 
  description = "CGUITECH propose des services technologiques sur mesure pour les entreprises en Guinée et en Afrique de l'Ouest: développement logiciel, cybersécurité, cloud et services IT." 
}: PublicLayoutProps) {
  const menuItems = getMenuItems();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Empêche le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <Head title={title}>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
        <meta name="description" content={description} />
        <meta name="keywords" content="technologie Guinée, développement logiciel Conakry, cybersécurité Afrique, services IT Guinée" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1a365d" />
      </Head>

      <div className="flex min-h-screen flex-col bg-white">
        {/* Barre de contact */}
        <TopContactBar />

        {/* En-tête avec navigation */}
        <header className="sticky top-0 z-50 bg-white border-b border-primary-100 py-4 shadow-sm">
          <div className="container mx-auto flex items-center justify-between px-4">
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Navigation desktop */}
            <DesktopNavigation menuItems={menuItems} />
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary-600 text-white hidden md:flex items-center gap-2"
                onClick={() => window.location.href = '/contact'}
              >
                Obtenir un Devis
              </Button>
              
              {/* Menu mobile */}
              <MobileMenu 
                menuItems={menuItems} 
                isOpen={mobileMenuOpen} 
                onClose={() => setMobileMenuOpen(false)} 
              />
            </div>
          </div>
        </header>

        {/* Contenu principal */}
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}