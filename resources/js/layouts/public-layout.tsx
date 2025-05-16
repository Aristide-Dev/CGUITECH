import { Head, Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent } from '@/components/ui/sheet';
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
  X,
  ArrowUp
} from 'lucide-react';
import { type SharedData } from '@/types';
import { CGUITECH } from '@/utils/index';
import { motion, AnimatePresence } from 'framer-motion';

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
  isActive?: boolean;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

interface DesktopNavigationProps {
  menuItems: MenuItem[];
  currentPath: string;
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface FooterLinksProps {
  title: string;
  links: Array<{
    title: string;
    link: string;
  }>;
}


// Extraction des composants pour une meilleure organisation
const TopContactBar = () => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-primary-900 text-white py-2 px-4 text-sm"
  >
    <div className="container mx-auto flex flex-wrap justify-between">
      <div className="flex flex-wrap items-center gap-4">
        <a 
          href={`tel:${CGUITECH.contactInfo.unespace_phone}`} 
          className="flex items-center space-x-1 hover:text-yellow-400 transition-colors duration-300"
          aria-label="Téléphone"
        >
          <PhoneCall className="h-4 w-4" aria-hidden="true" />
          <span>{CGUITECH.contactInfo.phone}</span>
        </a>
        <a 
          href={`mailto:${CGUITECH.contactInfo.unespace_phone}`}
          className="flex items-center space-x-1 hover:text-yellow-400 transition-colors duration-300"
          aria-label="Email"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span>{CGUITECH.contactInfo.email}</span>
        </a>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" aria-hidden="true" />
          <span>8:00 – 17:00</span>
        </div>
      </div>
      {/* <AuthLinks /> */}
    </div>
  </motion.div>
);

const AuthLinks = () => {
  const { auth } = usePage<SharedData>().props;
  
  return (
    <div className="flex space-x-4">
      {auth.user ? (
        <Link
          href={route('dashboard')}
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Tableau de bord
        </Link>
      ) : (
        <>
          <Link
            href={route('login')}
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Connexion
          </Link>
          <Link
            href={route('register')}
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Inscription
          </Link>
        </>
      )}
    </div>
  );
};

const Logo = ({ className = "h-16", onClick }: LogoProps) => (
  <Link href="/" onClick={onClick} className="transition-transform duration-300 hover:scale-105">
    <img 
      src="/images/logo-cguitech-wb.svg" 
      alt="CGUITECH Logo" 
      className={`${className} w-auto`} 
      width="160"
      height="60"
    />
  </Link>
);

// Composant pour le sous-menu mobile amélioré
const SubMenu = ({ item, depth = 0, onItemClick, isActive }: SubMenuProps) => {
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
          className={`${
            depth === 0 ? 'text-lg font-medium' : 'text-base'
          } ${
            isActive 
              ? 'text-primary font-semibold' 
              : 'text-gray-700 hover:text-primary'
          } transition-colors duration-300`}
          onClick={() => !item.children && onItemClick()}
        >
          {item.label}
        </Link>
        {item.children && (
          <motion.button
            onClick={toggleSubmenu}
            className="p-2 text-gray-500 hover:text-primary transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
            aria-expanded={isOpen}
            aria-label={`Expand ${item.label} submenu`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown 
                className="h-5 w-5"
                aria-hidden="true"
              />
            </motion.div>
          </motion.button>
        )}
      </div>
      
      <AnimatePresence>
        {item.children && isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-gray-${depth === 0 ? '50' : '100'} pl-4 overflow-hidden`}
          >
            {item.children.map((subItem) => (
              <SubMenu 
                key={subItem.label} 
                item={subItem} 
                depth={depth + 1}
                onItemClick={onItemClick}
                isActive={isActive}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Fonction utilitaire pour vérifier si un élément du menu est actif
const isMenuItemActive = (href: string, currentPath: string): boolean => {
  if (href === '/') {
    return currentPath === '/';
  }
  return currentPath.startsWith(href);
};

// Composant pour le menu mobile amélioré
const MobileMenu = ({ menuItems, isOpen, onClose, currentPath }: MobileMenuProps) => {
  return (
    <>
      <motion.button 
        className="lg:hidden focus:outline-none p-2 text-gray-700 hover:text-primary transition-colors duration-300"
        onClick={() => onClose()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </motion.button>
      
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="right" className="w-full sm:w-[400px] p-0 overflow-hidden bg-white">
          <div className="flex flex-col h-full">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center border-b p-4 bg-primary-50"
            >
              <Logo className="h-10" onClick={onClose} />
              <motion.button 
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Fermer le menu"
                className="text-gray-500 hover:text-primary transition-colors duration-300"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex-grow overflow-y-auto py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="space-y-1">
                {menuItems.map((item, index) => {
                  const isActive = isMenuItemActive(item.href, currentPath);
                  
                  return (
                    <motion.div 
                      key={item.label} 
                      className="relative"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                    >
                      {item.children ? (
                        <SubMenu 
                          key={item.label} 
                          item={item} 
                          onItemClick={onClose}
                          isActive={isActive}
                        />
                      ) : (
                        <Link 
                          href={item.href}
                          className={`block px-4 py-3 ${
                            isActive 
                              ? 'text-primary font-semibold bg-primary-50' 
                              : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                          } transition-colors duration-300`}
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div 
              className="border-t p-4 bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Button 
                variant="default" 
                className="w-full bg-primary hover:bg-primary-600 text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                onClick={() => {
                  window.location.href = '/contact';
                  onClose();
                }}
              >
                Obtenir un Devis
              </Button>
              <div className="flex justify-between mt-4">
                <a href={`tel:${CGUITECH.contactInfo.unespace_phone}`} className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors duration-300">
                  <PhoneCall className="h-4 w-4 mr-1" aria-hidden="true" />
                  {CGUITECH.contactInfo.phone}
                </a>
                <a href={`mailto:${CGUITECH.contactInfo.email}`} className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors duration-300">
                  <Mail className="h-4 w-4 mr-1" aria-hidden="true" />
                  {CGUITECH.contactInfo.email}
                </a>
              </div>
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

// Composant pour le menu de navigation desktop amélioré
const DesktopNavigation = ({ menuItems, currentPath }: DesktopNavigationProps) => {
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
          <motion.li 
            key={item.label} 
            className="relative group"
            ref={(el) => {
              menuRefs.current[item.label] = el;
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div 
              className={`flex items-center gap-1 cursor-pointer font-medium ${
                isMenuItemActive(item.href, currentPath) 
                  ? 'text-primary after:w-full' 
                  : 'text-gray-700 hover:text-primary after:w-0 hover:after:w-full'
              } py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all duration-300`}
              onMouseEnter={() => setOpenSubmenu(item.label)}
              aria-expanded={openSubmenu === item.label}
              role={item.children ? "button" : undefined}
            >
              <Link href={item.href}>{item.label}</Link>
              {item.children && (
                <motion.div
                  animate={{ rotate: openSubmenu === item.label ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </motion.div>
              )}
            </div>
            
            {/* Sous-menu desktop niveau 1 */}
            <AnimatePresence>
              {item.children && openSubmenu === item.label && (
                <motion.div 
                  className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[220px] py-2 z-50 border border-primary-100"
                  onMouseLeave={() => setOpenSubmenu(null)}
                  role="menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.children.map((subItem, idx) => (
                    <motion.div 
                      key={subItem.label} 
                      className="relative group/submenu"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                    >
                      <Link 
                        href={subItem.href}
                        className={`block px-4 py-2 ${
                          isMenuItemActive(subItem.href, currentPath)
                            ? 'text-primary bg-primary-50 font-semibold'
                            : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                        } transition-colors duration-300 flex items-center justify-between`}
                        role="menuitem"
                      >
                        {subItem.label}
                        {subItem.children && (
                          <ChevronDown className="h-4 w-4 -rotate-90 transition-transform duration-300 group-hover/submenu:rotate-0" aria-hidden="true" />
                        )}
                      </Link>
                      
                      {/* Sous-menu desktop niveau 2 */}
                      <AnimatePresence>
                        {subItem.children && (
                          <motion.div 
                            className="absolute left-full top-0 mt-0 ml-0 bg-white shadow-lg rounded-md min-w-[180px] py-2 hidden group-hover/submenu:block border border-primary-100"
                            role="menu"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {subItem.children.map((nestedSubItem) => (
                              <motion.div
                                key={nestedSubItem.label}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Link 
                                  href={nestedSubItem.href}
                                  className={`block px-4 py-2 ${
                                    isMenuItemActive(nestedSubItem.href, currentPath)
                                      ? 'text-primary bg-primary-50 font-semibold'
                                      : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                                  } transition-colors duration-300`}
                                  role="menuitem"
                                >
                                  {nestedSubItem.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

// Composant pour le footer amélioré
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 text-white pt-16 pb-8 overflow-hidden relative">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Logo className="h-10" />
            </div>
            <p className="mb-6 text-sm text-gray-300">
              CGUITECH ("Compagnie Guinéenne de Technologies et d'Innovations") est un fournisseur dynamique et progressiste de technologie d'entreprise visant à fournir à nos clients des solutions d'affaires innovantes et rentables.
            </p>
            <div className="flex space-x-4">
              {CGUITECH.contactInfo.social.map((social, index) => (
                social && (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SocialLink 
                      href={social.url || '#'} 
                      icon={social.icon && <social.icon className="h-5 w-5" />} 
                      label={social.name} 
                    />
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FooterLinks 
              title="Nos Services"
              links={CGUITECH.services}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FooterLinks 
              title="Industries"
              links={CGUITECH.industries}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-yellow-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{CGUITECH.contactInfo.address}</span>
              </li>
              <li className="flex items-center group">
                <Clock className="h-5 w-5 mr-3 text-yellow-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300"><strong>Opening Hours:</strong> 8:00 – 17:00</span>
              </li>
              <li className="flex items-center group">
                <PhoneCall className="h-5 w-5 mr-3 text-yellow-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  <strong>Phone:</strong> <a href={`tel:${CGUITECH.contactInfo.unespace_phone}`} className="hover:text-yellow-400 transition-colors duration-300">{CGUITECH.contactInfo.phone}</a>
                </span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 mr-3 text-yellow-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  <a href={`mailto:${CGUITECH.contactInfo.email}`} className="hover:text-yellow-400 transition-colors duration-300">{CGUITECH.contactInfo.email}</a>
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <Separator className="my-8 bg-primary-700" />
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300">&copy; Copyright {currentYear}. Tous droits réservés par CGUITECH</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center">
            <Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors duration-300 text-gray-300">Politique de confidentialité</Link>
            <Link href="/terms" className="hover:text-yellow-400 transition-colors duration-300 text-gray-300">Conditions d'utilisation</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Composants utilitaires pour le footer
const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a 
    href={href} 
    className="bg-primary-800 hover:bg-primary-700 transition-all duration-300 p-2 rounded-full hover:shadow-lg"
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
      {links.map((link, index) => (
        <motion.li 
          key={link.link}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.05 * index }}
          viewport={{ once: true }}
        >
          <Link 
            href={link.link} 
            className="hover:text-yellow-400 transition-colors duration-300 flex items-center group"
          >
            <motion.div
              className="mr-2"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-3 w-3 group-hover:text-yellow-400 transition-colors duration-300" aria-hidden="true" />
            </motion.div>
            {link.title}
          </Link>
        </motion.li>
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
      // { label: "Notre équipe", href: "/about/team" },
      // { label: "Approche de gestion", href: "/about/management" },
      { label: "Pourquoi nous choisir", href: "/about/why-choose-us" },
      { label: "Partenaires", href: "/#partenaires" }
    ]
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Services IT gérés tout-en-un", href: "/services/it-management" },
      { label: "Services de support IT", href: "/services/it-support" },
      { label: "Solutions cloud", href: "/services/cloud" },
      { label: "Conception Web et Hébergement", href: "/services/web-design" },
      { label: "Infrastructure", href: "/services/infrastructure" },
      { label: "Téléphonie IP", href: "/services/ip-telephony" },
      { label: "Software Development", href: "/services/software" }
    ]
  },
  // {
  //   label: "Produits",
  //   href: "/products",
  //   children: [
  //     { 
  //       label: "Computers", 
  //       href: "/products/computers",
  //       children: [
  //         { label: "HP", href: "/products/computers/hp" },
  //         { label: "Dell", href: "/products/computers/dell" }
  //       ]
  //     },
  //     { label: "Networking", href: "/products/networking" },
  //     { label: "Power & Rack Equipment", href: "/products/power-equipment" },
  //     { label: "Printers & Copiers", href: "/products/printers" },
  //     { label: "Security", href: "/products/security" },
  //     { label: "Servers", href: "/products/servers" },
  //     { label: "Cloud & Storage", href: "/products/cloud-storage" },
  //     { label: "Telecommunication", href: "/products/telecommunication" },
  //     { label: "Software", href: "/products/software" }
  //   ]
  // },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Commerce & Distribution", href: "/industries#commerce-et-distribution" },
      { label: "Logistique", href: "/industries#logistique" },
      { label: "Automatisation industrielle", href: "/industries#manufacturing" },
      { label: "Secteur Public", href: "/industries#gov" },
      { label: "Santé", href: "/industries#sante" },
      { label: "Finance & Assurance", href: "/industries#finance" },
      { label: "Médias & Divertissement", href: "/industries#medias" },
      { label: "Éducation", href: "/industries#education" },
      { label: "Agriculture", href: "/industries#agriculture" },
      { label: "Automobile", href: "/industries#automobile" }
    ]
  },
  {
    label: "Contact",
    href: "/contact"
  }
];

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 z-50 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
      }`}
      aria-label="Retour en haut"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
    >
      <ArrowUp className="h-6 w-6" />
    </motion.button>
  );
};

// Composant principal du layout
export default function PublicLayout({ 
  children, 
  title = "CGUITECH - Solutions Technologiques Innovantes en Guinée", 
  description = "CGUITECH propose des services technologiques sur mesure pour les entreprises en Guinée et en Afrique de l'Ouest: développement logiciel, cybersécurité, cloud et services IT." 
}: PublicLayoutProps) {
  const menuItems = getMenuItems();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { url } = usePage();
  const [scrolled, setScrolled] = useState(false);
  
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

  // Animation de l'en-tête au défilement
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

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
        <motion.header 
          className={`sticky top-0 z-50 bg-white backdrop-blur-md transition-all duration-300 ${
            scrolled 
              ? 'border-b border-primary-100 py-2 shadow-md' 
              : 'border-b border-primary-50 py-4 shadow-sm'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="container mx-auto flex items-center justify-between px-4">
            <div className="flex items-center">
              <Logo className={scrolled ? "h-12" : "h-16"} />
            </div>
            
            {/* Navigation desktop */}
            <DesktopNavigation 
              menuItems={menuItems} 
              currentPath={url}
            />
            
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="default" 
                  className="bg-primary hover:bg-primary-600 text-white hidden md:flex items-center gap-2 transition-all duration-300 hover:shadow-md"
                  onClick={() => window.location.href = '/contact'}
                >
                  Obtenir un Devis
                </Button>
              </motion.div>
              
              {/* Menu mobile */}
              <MobileMenu 
                menuItems={menuItems} 
                isOpen={mobileMenuOpen} 
                onClose={() => setMobileMenuOpen(!mobileMenuOpen)} 
                currentPath={url}
              />
            </div>
          </div>
        </motion.header>

        {/* Contenu principal */}
        <motion.main 
          id="main-content" 
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.main>

        {/* Footer */}
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}