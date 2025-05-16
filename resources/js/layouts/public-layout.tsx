import { Head, Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from "@/components/ui/scroll-area";
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
  ArrowUp,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CGUITECH } from '@/utils/index';
import { cn } from '@/lib/utils';
import { useAppearance } from '@/hooks/use-appearance';

// Types améliorés
interface SharedData {
  auth: {
    user: any;
  };
}

interface PublicLayoutProps extends PropsWithChildren {
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    canonicalUrl?: string;
    ogType?: string;
    twitterCreator?: string;
    datePublished?: string;
    dateModified?: string;
    articleSection?: string;
    alternateLocales?: {locale: string, url: string}[];
    itemProps?: Record<string, string>;
  };
  show_cta?: boolean;
}

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

// Composant pour le menu mobile amélioré
const MobileMenu = ({ menuItems, isOpen, onClose, currentPath }: MobileMenuProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { appearance, updateAppearance } = useAppearance();

  // Animation variants
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full max-w-md p-0">
        <div className="flex flex-col h-full bg-gradient-to-b from-background to-background/95">
          <SheetHeader className="px-4 py-4 border-b border-border/50">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center" onClick={onClose}>
                <Logo className="h-8" onClick={onClose} />
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')}
                className="rounded-full"
              >
                {appearance === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </SheetHeader>

          <ScrollArea className="flex-1 px-4 py-2">
            <motion.div 
              className="space-y-2"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.nav>
                {menuItems.map((item, index) => (
                  <motion.div 
                    key={item.label}
                    variants={menuItemVariants}
                  >
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setActiveSection(activeSection === item.label ? null : item.label)}
                          className={cn(
                            "w-full flex items-center justify-between py-2 px-3 rounded-lg transition-colors",
                            activeSection === item.label 
                              ? "bg-primary/10 text-primary hover:bg-primary/15" 
                              : "hover:bg-accent/50"
                          )}
                        >
                          <span className="font-medium text-sm">{item.label}</span>
                          <ChevronDown 
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              activeSection === item.label ? "rotate-180" : ""
                            )} 
                          />
                        </button>
                        <AnimatePresence>
                          {activeSection === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-3 mt-1 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block py-1.5 px-3 rounded-lg hover:bg-accent/50 transition-colors text-sm"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-2 px-3 rounded-lg hover:bg-accent/50 transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </ScrollArea>

          <SheetFooter className="px-4 py-4 border-t border-border/50">
            <div className="w-full space-y-3">
              <Link 
                href="/contact"
                onClick={onClose}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center font-medium transition-colors h-9 rounded-md px-4 text-sm"
              >
                Nous contacter
              </Link>
              
              <div className="flex justify-center items-center space-x-4">
                {CGUITECH.contactInfo.social.map((platform, index) => (
                  platform && (
                    <motion.a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {platform.icon && <platform.icon className="h-4 w-4" />}
                    </motion.a>
                  )
                ))}
              </div>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

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
  seo = {
    title: "CGUITECH - Solutions Technologiques Innovantes en Guinée",
    description: "CGUITECH propose des services technologiques sur mesure pour les entreprises en Guinée et en Afrique de l'Ouest: développement logiciel, cybersécurité, cloud et services IT.",
    keywords: "technologie Guinée, développement logiciel Conakry, cybersécurité Afrique, services IT Guinée, CGUITECH, solutions digitales, transformation numérique, cloud computing Guinée",
    ogImage: "/images/cguitech.jpeg",
    canonicalUrl: "https://cguitech.com",
    ogType: "website",
    twitterCreator: "@cguitech"
  },
  show_cta = true 
}: PublicLayoutProps) {
  const menuItems = getMenuItems();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { url } = usePage();
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { appearance, updateAppearance } = useAppearance();
  const baseUrl = window.location.origin;

  // Gestion optimisée du scroll
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 50);
    setShowBackToTop(scrollTop > 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Extraction des variables SEO
  const {
    title,
    description,
    keywords,
    ogImage = "/images/cguitech.jpeg",
    canonicalUrl,
    ogType,
    twitterCreator,
    datePublished,
    dateModified,
    articleSection,
    alternateLocales = [],
    itemProps = {}
  } = seo;

  const currentUrl = `${baseUrl}${url}`;
  const absoluteImageUrl = ogImage?.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  const publishDate = datePublished ?? new Date().toISOString();
  const modifyDate = dateModified ?? new Date().toISOString();

  return (
    <>
      <Head>
        {/* Balises meta de base */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="CGUITECH" />
        <meta charSet="UTF-8" />
        
        {/* Directives pour les robots et les navigateurs */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        
        {/* Métadonnées géographiques et linguistiques */}
        <meta name="language" content="fr" />
        <meta name="geo.region" content="GN" />
        <meta name="geo.placename" content="Conakry" />
        
        {/* Métadonnées pour applications mobiles */}
        <meta name="application-name" content="CGUITECH" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CGUITECH" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1a365d" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)" />
        
        {/* Open Graph */}
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Logo CGUITECH" />
        <meta property="og:site_name" content="CGUITECH" />
        <meta property="og:locale" content="fr_GN" />
        
        {/* Article metadata */}
        {ogType === 'article' && (
          <>
            <meta property="article:published_time" content={publishDate} />
            <meta property="article:modified_time" content={modifyDate} />
            {articleSection && <meta property="article:section" content={articleSection} />}
          </>
        )}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta name="twitter:creator" content={twitterCreator} />
        <meta name="twitter:site" content="@cguitech" />
        
        {/* Canonical et langues alternatives */}
        <link rel="canonical" href={canonicalUrl || currentUrl} />
        {alternateLocales.map(({locale, url}) => (
          <link key={locale} rel="alternate" hrefLang={locale} href={url} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        
        {/* Préconnexion aux origines externes */}
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.bunny.net" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CGUITECH",
            "url": baseUrl,
            "logo": `${baseUrl}/images/logo-cguitech-wb.svg`,
            "description": description,
            "image": absoluteImageUrl,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": CGUITECH.contactInfo.address,
              "addressLocality": "Conakry",
              "addressCountry": "GN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": CGUITECH.contactInfo.phone,
              "contactType": "customer service",
              "email": CGUITECH.contactInfo.email,
              "availableLanguage": ["French"]
            },
            "sameAs": CGUITECH.contactInfo.social
              .filter((s): s is NonNullable<typeof s> => s !== null && s !== undefined)
              .map(s => s.url)
          })}
        </script>
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Barre de contact avec schema.org */}
        <TopContactBar />

        {/* En-tête avec navigation accessible */}
        <motion.header 
          role="banner"
          aria-label="En-tête principal"
          className={`sticky top-0 z-50 bg-white backdrop-blur-md transition-all duration-300 ${
            scrolled 
              ? 'border-b border-primary-100 py-2 shadow-md' 
              : 'border-b border-primary-50 py-4 shadow-sm'
          }`}
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
              
              {/* Bouton menu mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Menu mobile"
              >
                <MenuIcon className="h-6 w-6" />
              </Button>

              {/* Menu mobile */}
              <MobileMenu 
                menuItems={menuItems} 
                isOpen={mobileMenuOpen} 
                onClose={() => setMobileMenuOpen(false)} 
                currentPath={url}
              />
            </div>
          </div>
        </motion.header>

        {/* Contenu principal avec landmarks ARIA */}
        <motion.main 
          id="main-content" 
          role="main"
          tabIndex={-1}
          aria-label="Contenu principal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.main>

        {/* Bouton retour en haut */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed right-4 bottom-4 md:right-8 md:bottom-8 bg-primary hover:bg-primary-600 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg z-50 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Retour en haut de la page"
            >
              <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}