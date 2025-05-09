import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle2, 
  Globe, 
  Code, 
  PenTool, 
  Search, 
  Rocket, 
  Smartphone, 
  Server as ServerIcon,
  ChevronRight,
  Zap,
  Shield,
  Paintbrush,
  SmartphoneNfc,
  BarChart,
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { CGUITECH } from '@/utils';

export default function WebDesignService() {
  // Données pour les types de sites web
  const webSiteTypes = [
    {
      title: "Site vitrine",
      description: "Présentez votre entreprise avec un design immersif et captivant.",
      icon: <Globe className="h-8 w-8" />,
      features: [
        "Design personnalisé et responsive",
        "Optimisation pour les moteurs de recherche",
        "Intégration de formulaires de contact",
        "Gallery d'images et vidéos"
      ]
    },
    {
      title: "Site e-commerce",
      description: "Vendez en ligne avec une boutique complète et sécurisée.",
      icon: <Rocket className="h-8 w-8" />,
      features: [
        "Catalogue de produits complet",
        "Système de paiement sécurisé",
        "Gestion des stocks et commandes",
        "Tableau de bord administrateur"
      ]
    },
    {
      title: "Applications web",
      description: "Solutions sur mesure pour les besoins spécifiques de votre entreprise.",
      icon: <Code className="h-8 w-8" />,
      features: [
        "Développement sur mesure",
        "Intégration avec vos systèmes existants",
        "Interface utilisateur intuitive",
        "Évolutif selon vos besoins"
      ]
    },
    {
      title: "Sites mobiles",
      description: "Expérience optimisée pour les utilisateurs mobiles.",
      icon: <Smartphone className="h-8 w-8" />,
      features: [
        "Compatibilité multi-appareils",
        "Navigation intuitive sur écran tactile",
        "Temps de chargement rapide",
        "Optimisation des images et contenus"
      ]
    }
  ];

  // Données pour les services d'hébergement
  const hostingServices = [
    {
      title: "Hébergement web",
      description: "Solutions d'hébergement performantes pour votre site web ou application.",
      icon: <ServerIcon className="h-8 w-8 text-primary" />,
      features: [
        "Disponibilité 99,9% garantie",
        "Espace disque et bande passante adaptés",
        "Sauvegarde quotidienne",
        "Support technique 24/7"
      ]
    },
    {
      title: "Noms de domaine",
      description: "Enregistrement et gestion de noms de domaine pour votre présence en ligne.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      features: [
        "Large choix d'extensions (.com, .gn, .org, etc.)",
        "Protection contre le vol de domaine",
        "Renouvellement automatique",
        "Gestion DNS simplifiée"
      ]
    }
  ];

  // Données pour le processus
  const processSteps = [
    {
      number: "01",
      title: "Consultation et planification",
      description: "Nous analysons vos objectifs commerciaux, votre public cible et vos besoins spécifiques pour élaborer une stratégie web efficace.",
    },
    {
      number: "02",
      title: "Conception et maquettage",
      description: "Création de maquettes visuelles illustrant la structure, la mise en page et l'esthétique de votre futur site.",
    },
    {
      number: "03",
      title: "Développement et intégration",
      description: "Transformation des maquettes en site web fonctionnel avec intégration des fonctionnalités et des contenus.",
    },
    {
      number: "04",
      title: "Tests et optimisation",
      description: "Tests rigoureux de compatibilité, performance et sécurité, avec optimisation SEO avant le lancement.",
    },
    {
      number: "05",
      title: "Lancement et suivi",
      description: "Mise en ligne du site et suivi pour garantir son bon fonctionnement avec services de maintenance et d'assistance.",
    }
  ];

  return (
    <PublicLayout
      title="Conception Web et Hébergement | CGUITECH"
      description="Créez votre présence en ligne avec nos services de conception web professionnelle et solutions d'hébergement fiables. Sites vitrines, e-commerce et applications sur mesure."
    >
      {/* Hero Section - Style plus moderne avec design asymétrique */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services/3d-rendering-website-hosting-concept.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Formes géométriques flottantes */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-white/30 hover:bg-white/40 text-white mb-6 py-2 px-4 text-sm uppercase tracking-wide backdrop-blur-sm">Conception Web</Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-violet-100">
                Conception web intelligente. Impact numérique réel.
              </span>
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl">
              Établissez votre présence en ligne avec un site web qui convertit les visiteurs en clients grâce à un design captivant et une expérience utilisateur exceptionnelle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white hover:bg-white/90 text-primary-600 font-medium text-lg px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
                Demander un devis gratuit
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 rounded-xl backdrop-blur-sm">
                Découvrir nos projets
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - Design avec overlay et effet de perspective */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary-50 text-primary-600 mb-6 uppercase tracking-wide font-medium">Notre expertise</Badge>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Créez une expérience web qui vous <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">démarque</span></h2>
              <p className="text-primary-900 mb-8 leading-relaxed text-lg">
                À l'ère du numérique, un site web professionnel est essentiel pour établir la crédibilité et la visibilité de votre entreprise. Chez CGUITECH, nous concevons des sites web qui non seulement sont visuellement attrayants, mais aussi fonctionnels et optimisés pour les moteurs de recherche.
              </p>
              <p className="text-primary-800 mb-10 leading-relaxed text-lg">
                Notre équipe de concepteurs et développeurs web expérimentés travaille en étroite collaboration avec vous pour comprendre vos objectifs commerciaux et créer une solution web sur mesure qui répond parfaitement à vos besoins et aux attentes de vos clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Zap className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Design moderne</h3>
                    <p className="text-primary-700 mt-1">Interfaces élégantes et intuitives</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Smartphone className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">100% responsive</h3>
                    <p className="text-primary-700 mt-1">Parfait sur tous les appareils</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Search className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">SEO intégré</h3>
                    <p className="text-primary-700 mt-1">Visible dans les recherches</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Shield className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Sécurité avancée</h3>
                    <p className="text-primary-700 mt-1">Protection des données</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-violet-600/10 rounded-3xl transform rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/images/services/378429.jpg"
                  alt="Conception web professionnelle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Services - Cards avec effet de survol */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Nos services</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Solutions web adaptées à vos besoins</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'une application web sur mesure, nous avons la solution qu'il vous faut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webSiteTypes.map((type, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-primary-700/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="p-8 relative z-10">
                  <div className="bg-primary-50 text-primary-600 p-4 rounded-2xl inline-flex mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-800 group-hover:text-primary-600 transition-colors">{type.title}</h3>
                  <p className="text-primary-700 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                        <span className="text-primary-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-primary-100">
                    <Button variant="ghost" className="text-primary-600 hover:text-primary-700 hover:bg-primary-50 font-medium p-0 group flex items-center">
                      En savoir plus 
                      <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre processus - Timeline moderne */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Notre processus</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Comment nous créons votre site web</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Notre approche structurée garantit que votre projet web soit livré à temps, dans le respect du budget et selon vos attentes.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:-translate-y-1 transition-all hover:shadow-xl border border-primary-100">
                      <span className="text-4xl font-black bg-gradient-to-br from-primary-600 to-primary-700 text-transparent bg-clip-text">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-3/4 bg-white shadow-lg rounded-2xl p-8 transform hover:-translate-y-1 transition-all hover:shadow-xl border border-primary-100">
                    <h3 className="text-2xl font-bold mb-4 text-primary-900">{step.title}</h3>
                    <p className="text-primary-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Services - Cards flottantes */}
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Hébergement</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Solutions d'hébergement fiables</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Un site web performant nécessite un hébergement de qualité. Nous proposons des solutions d'hébergement fiables et sécurisées pour garantir la disponibilité et la rapidité de votre site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {hostingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-primary-100 relative overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary-100 text-primary-600 p-4 rounded-2xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-primary-900">{service.title}</h3>
                    <p className="text-primary-700">{service.description}</p>
                  </div>
                </div>
                <div className="pl-20">
                  <ul className="space-y-3 mt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                        <span className="text-primary-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section - Design asymétrique */}
      <section className="py-24 bg-gradient-to-b from-primary-100 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2 relative">
              <div className="absolute -inset-4 bg-primary-600/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-primary-700/10 rounded-3xl transform -rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/services/woman-business-laptop-search-engine-information-hologram-seo-graphic-iot-research-thinking-worker-african-employee-with-coffee-technology-internet-office-browsing-overlay.jpg"
                  alt="Optimisation pour les moteurs de recherche"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Badge className="bg-primary-50 text-primary-600 mb-6 uppercase tracking-wide font-medium">Référencement</Badge>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Optimisation pour les moteurs de recherche</h2>
              <p className="text-primary-800 mb-8 leading-relaxed text-lg">
                Avoir un beau site web ne suffit pas - il doit aussi être trouvé par vos clients potentiels. Nous intégrons des stratégies d'optimisation pour les moteurs de recherche (SEO) dès la conception de votre site pour améliorer sa visibilité en ligne.
              </p>
              <p className="text-primary-700 mb-10 leading-relaxed text-lg">
                Notre approche SEO comprend l'optimisation technique, la recherche de mots-clés, la création de contenu de qualité et l'amélioration de l'expérience utilisateur - tous des facteurs essentiels pour un bon classement dans les résultats de recherche.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Search className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="font-bold text-xl mb-3 text-primary-900">Recherche de mots-clés</h3>
                  <p className="text-primary-700">Identification des termes de recherche pertinents pour votre entreprise.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <PenTool className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="font-bold text-xl mb-3 text-primary-900">Contenu optimisé</h3>
                  <p className="text-primary-700">Création de contenus de qualité qui répondent aux requêtes des utilisateurs.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Code className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="font-bold text-xl mb-3 text-primary-900">Optimisation technique</h3>
                  <p className="text-primary-700">Structure du site, balisage, vitesse et facteurs techniques.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background avec overlay */}
        <div className="absolute inset-0 bg-[url('/images/services/web-design-workspace.jpg')] bg-cover bg-fixed bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 to-primary-700/90 backdrop-blur-sm"></div>
        
        {/* Formes décoratives flottantes */}
        <div className="absolute top-10 right-10 w-60 h-60 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-bl from-blue-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:from-pink-600 hover:to-violet-600 mb-4">
                  Design Web
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Prêt à transformer votre présence en ligne ?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-xl">
                  Nos designers et développeurs web sont prêts à créer une expérience digitale unique pour votre entreprise avec un site moderne, réactif et optimisé.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Link 
                    href={route('contact.index')} 
                    className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-all hover:shadow-lg"
                  >
                    <span>Demander un devis gratuit</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a href={`tel:${CGUITECH.contactInfo.unespace_phone}`} className="flex items-center text-white font-medium text-lg group mt-2">
                    <div className="p-3 bg-white/20 rounded-full mr-3 group-hover:bg-white/30 transition-colors">
                      <PhoneCall className="h-6 w-6" />
                    </div>
                    {CGUITECH.contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  {/* Image de présentation avec effet de perspective */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-700/30 backdrop-blur-[2px] rounded-2xl transform rotate-3 scale-105"></div>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl transform -rotate-2">
                    <h3 className="text-2xl font-semibold mb-6">Ce que nous proposons</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="p-2 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-lg mr-3">
                          <Paintbrush className="h-5 w-5 text-pink-400" />
                        </div>
                        <div>
                          <span className="font-medium block">Design sur mesure</span>
                          <span className="text-white/80 text-sm">Adapté à votre image de marque</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-2 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-lg mr-3">
                          <SmartphoneNfc className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <span className="font-medium block">100% Responsive</span>
                          <span className="text-white/80 text-sm">Adapté à tous les appareils</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg mr-3">
                          <BarChart className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <span className="font-medium block">SEO optimisé</span>
                          <span className="text-white/80 text-sm">Pour une meilleure visibilité</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ajout de style global pour les animations */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 0.6; }
          100% { opacity: 0.4; }
        }

        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </PublicLayout>
  );
}