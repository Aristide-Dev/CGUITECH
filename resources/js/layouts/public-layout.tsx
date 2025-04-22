import { Head, Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

type PublicLayoutProps = PropsWithChildren<{
  title?: string;
  description?: string;
}>;

// Définition de la structure des menus et sous-menus
interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export default function PublicLayout({ 
  children, 
  title = "CGUITECH - Solutions Technologiques Innovantes en Guinée", 
  description = "CGUITECH propose des services technologiques sur mesure pour les entreprises en Guinée et en Afrique de l'Ouest: développement logiciel, cybersécurité, cloud et services IT." 
}: PublicLayoutProps) {
  const { auth } = usePage<SharedData>().props;
  const currentYear = new Date().getFullYear();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Structure complète du menu inspirée du site https://cguitech.com/
  const menuItems: MenuItem[] = [
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

  return (
    <>
      <Head title={title}>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
        <meta name="description" content={description} />
        <meta name="keywords" content="technologie Guinée, développement logiciel Conakry, cybersécurité Afrique, services IT Guinée" />
      </Head>

      <div className="flex min-h-screen flex-col bg-white">
        {/* Barre de contact */}
        <div className="bg-gray-100 py-2 px-4 text-sm text-gray-700">
          <div className="container mx-auto flex flex-wrap justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+224627969855" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <PhoneCall className="h-4 w-4" />
                <span>+224 627 96 98 55</span>
              </a>
              <a href="mailto:infos@cguitech.com" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>infos@cguitech.com</span>
              </a>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>8:00 – 17:00</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {auth.user ? (
                <Link
                  href={route('dashboard')}
                  className="hover:text-primary"
                >
                  Tableau de bord
                </Link>
              ) : (
                <>
                  <Link
                    href={route('login')}
                    className="hover:text-primary"
                  >
                    Connexion
                  </Link>
                  <Link
                    href={route('register')}
                    className="hover:text-primary"
                  >
                    Inscription
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* En-tête avec navigation */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 py-4 shadow-sm">
          <div className="container mx-auto flex items-center justify-between px-4">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center">
                  <img src="https://cguitech.com/wp-content/uploads/2023/05/logo-cguitech-wb.svg" alt="CGUITECH Logo" className="h-16 w-auto mr-2" />
                </div>
              </Link>
            </div>
            
            {/* Navigation desktop */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-6">
                {menuItems.map((item) => (
                  <li key={item.label} className="relative group">
                    <div 
                      className="flex items-center gap-1 cursor-pointer font-medium hover:text-primary py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      <Link href={item.href}>{item.label}</Link>
                      {item.children && (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                    
                    {/* Sous-menu desktop niveau 1 */}
                    {item.children && openSubmenu === item.label && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[220px] py-2 z-50"
                        onMouseEnter={() => setOpenSubmenu(item.label)}
                        onMouseLeave={() => setOpenSubmenu(null)}
                      >
                        {item.children.map((subItem) => (
                          <div key={subItem.label} className="relative group/submenu">
                            <Link 
                              href={subItem.href}
                              className="block px-4 py-2 hover:bg-gray-50 hover:text-primary text-gray-700 flex items-center justify-between"
                            >
                              {subItem.label}
                              {subItem.children && (
                                <ChevronDown className="h-4 w-4 -rotate-90" />
                              )}
                            </Link>
                            
                            {/* Sous-menu desktop niveau 2 */}
                            {subItem.children && (
                              <div className="absolute left-full top-0 mt-0 ml-0 bg-white shadow-lg rounded-md min-w-[180px] py-2 hidden group-hover/submenu:block">
                                {subItem.children.map((nestedSubItem) => (
                                  <Link 
                                    key={nestedSubItem.label} 
                                    href={nestedSubItem.href}
                                    className="block px-4 py-2 hover:bg-gray-50 hover:text-primary text-gray-700"
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
            
            <div className="flex items-center space-x-4">
              <Button variant="default" className="bg-primary hover:bg-primary/90 hidden md:flex items-center gap-2">
                Obtenir un Devis
              </Button>
              
              {/* Menu mobile */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="lg:hidden focus:outline-none">
                    <MenuIcon className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center border-b p-4">
                      <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <img src="https://cguitech.com/wp-content/uploads/2023/05/logo-cguitech-wb.svg" alt="CGUITECH Logo" className="h-10 w-auto" />
                      </Link>
                      <button onClick={() => setMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    
                    <div className="flex-grow overflow-y-auto py-2">
                      {/* Accordéon de navigation mobile */}
                      <div className="space-y-1">
                        {menuItems.map((item) => (
                          <div key={item.label} className="border-b border-gray-100">
                            <div className="flex items-center justify-between p-4">
                              <Link 
                                href={item.href} 
                                className="text-lg font-medium" 
                                onClick={() => !item.children && setMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                              {item.children && (
                                <button
                                  onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                                  className="p-2"
                                >
                                  <ChevronDown 
                                    className={`h-5 w-5 transition-transform ${openSubmenu === item.label ? 'transform rotate-180' : ''}`} 
                                  />
                                </button>
                              )}
                            </div>
                            
                            {/* Sous-menus mobile niveau 1 */}
                            {item.children && openSubmenu === item.label && (
                              <div className="bg-gray-50">
                                {item.children.map((subItem) => (
                                  <div key={subItem.label}>
                                    <div className="border-t border-gray-100 flex items-center justify-between">
                                      <Link 
                                        href={subItem.href} 
                                        className="block py-3 px-6 text-gray-700 flex-grow"
                                        onClick={() => !subItem.children && setMobileMenuOpen(false)}
                                      >
                                        {subItem.label}
                                      </Link>
                                      {subItem.children && (
                                        <button
                                          onClick={() => setOpenSubmenu(openSubmenu === `${item.label}-${subItem.label}` ? item.label : `${item.label}-${subItem.label}`)}
                                          className="p-3"
                                        >
                                          <ChevronDown 
                                            className={`h-4 w-4 transition-transform ${openSubmenu === `${item.label}-${subItem.label}` ? 'transform rotate-180' : ''}`} 
                                          />
                                        </button>
                                      )}
                                    </div>
                                    
                                    {/* Sous-menus mobile niveau 2 */}
                                    {subItem.children && openSubmenu === `${item.label}-${subItem.label}` && (
                                      <div className="bg-gray-100">
                                        {subItem.children.map((nestedSubItem) => (
                                          <Link 
                                            key={nestedSubItem.label} 
                                            href={nestedSubItem.href} 
                                            className="block py-2 px-10 border-t border-gray-200 text-gray-700"
                                            onClick={() => setMobileMenuOpen(false)}
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
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t p-4">
                      <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
                        Obtenir un Devis
                      </Button>
                      <div className="flex justify-between mt-4">
                        <a href="tel:+224627969855" className="flex items-center text-sm text-gray-600">
                          <PhoneCall className="h-4 w-4 mr-1" />
                          +224 627 96 98 55
                        </a>
                        <a href="mailto:infos@cguitech.com" className="flex items-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-1" />
                          infos@cguitech.com
                        </a>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Contenu principal */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center mb-6">
                  <img src="https://cguitech.com/wp-content/uploads/2023/05/logo-cguitech-wb.svg" alt="CGUITECH Logo" className="h-10 w-auto mr-2 filter brightness-0 invert" />
                </div>
                <p className="mb-6 text-sm">
                  CGUITECH ("Compagnie Guinéenne de Technologies et d'Innovations") est un fournisseur dynamique et progressiste de technologie d'entreprise visant à fournir à nos clients des solutions d'affaires innovantes et rentables.
                </p>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/cguitech" className="bg-gray-800 hover:bg-blue-600 transition-colors p-2 rounded-full">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com/cguitech" className="bg-gray-800 hover:bg-blue-400 transition-colors p-2 rounded-full">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com/company/cguitech" className="bg-gray-800 hover:bg-blue-700 transition-colors p-2 rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://instagram.com/cguitech" className="bg-gray-800 hover:bg-pink-600 transition-colors p-2 rounded-full">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Nos Services</h3>
                <ul className="space-y-3">
                  <li><Link href="/services/it-management" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> IT Management</Link></li>
                  <li><Link href="/services/cloud" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Cloud Service</Link></li>
                  <li><Link href="/services/infrastructure" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Data Center</Link></li>
                  <li><Link href="/services/software" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Software Development</Link></li>
                  <li><Link href="/services/ai" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Machine Learning</Link></li>
                  <li><Link href="/services/security" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Cybersécurité</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Produits</h3>
                <ul className="space-y-3">
                  <li><Link href="/products/computers" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Computers</Link></li>
                  <li><Link href="/products/networking" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Networking</Link></li>
                  <li><Link href="/products/servers" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Servers</Link></li>
                  <li><Link href="/products/printers" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Printers & Copiers</Link></li>
                  <li><Link href="/products/security" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Security</Link></li>
                  <li><Link href="/products/software" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Software</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 text-primary-400" />
                    <span>T2 Kipé Centre Emetteur, Ratoma<br/>Conakry, Guinée</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-primary-400" />
                    <span><strong>Opening Hours:</strong> 8:00 – 17:00</span>
                  </li>
                  <li className="flex items-center">
                    <PhoneCall className="h-5 w-5 mr-3 text-primary-400" />
                    <span><strong>Phone:</strong> <a href="tel:+224627969855" className="hover:text-white">+224 627 96 98 55</a></span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary-400" />
                    <span><a href="mailto:infos@cguitech.com" className="hover:text-white">infos@cguitech.com</a></span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-8 bg-gray-700" />
            
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; Copyright {currentYear}. Tous droits réservés par CGUITech</p>
              <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Politique de confidentialité</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Conditions d'utilisation</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 