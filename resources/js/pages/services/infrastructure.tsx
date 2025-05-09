import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle2, 
  Server, 
  Database, 
  Network, 
  Shield, 
  Cloud, 
  HardDrive, 
  ArrowRight,
  ChevronRight,
  Users,
  Zap,
  Cpu,
  Wifi,
  PhoneCall,
  Settings,
  AlertCircle
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { CGUITECH } from '@/utils';

export default function InfrastructureService() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Données pour les solutions d'infrastructure
  const infrastructureSolutions = [
    {
      title: "Serveurs & Stockage",
      description: "Solutions de serveurs et de stockage fiables et évolutives pour tous vos besoins en données.",
      icon: <Server className="h-8 w-8" />,
      features: [
        "Configuration de serveurs haute disponibilité",
        "Solutions SAN et NAS évolutives",
        "Systèmes de sauvegarde sécurisés",
        "Infrastructure hyperconvergée",
        "Gestion centralisée des ressources",
        "Solutions de stockage cloud hybride"
      ],
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Virtualisation",
      description: "Optimisez vos ressources informatiques avec nos solutions de virtualisation de pointe.",
      icon: <Cloud className="h-8 w-8" />,
      features: [
        "Virtualisation de serveurs (VMware, Hyper-V)",
        "VDI (Virtual Desktop Infrastructure)",
        "Conteneurisation (Docker, Kubernetes)",
        "Consolidation des serveurs",
        "Gestion des ressources dynamique",
        "Migration vers le cloud"
      ],
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "Réseaux & Connectivité",
      description: "Solutions de réseau performantes pour connecter efficacement votre infrastructure.",
      icon: <Network className="h-8 w-8" />,
      features: [
        "Réseaux LAN/WAN optimisés",
        "Architecture réseau sécurisée",
        "Solutions Wi-Fi d'entreprise",
        "SD-WAN pour une connectivité agile",
        "Gestion unifiée des réseaux",
        "Solutions de connectivité cloud"
      ],
      color: "from-green-600 to-green-800"
    },
    {
      title: "Data Center",
      description: "Conception et gestion de centres de données modernes et efficaces.",
      icon: <Database className="h-8 w-8" />,
      features: [
        "Conception de centres de données",
        "Gestion thermique et énergétique",
        "Surveillance et maintenance",
        "Solutions de colocation",
        "Infrastructure modulaire",
        "Solutions de refroidissement avancées"
      ],
      color: "from-orange-600 to-orange-800"
    }
  ];

  // Données pour les avantages
  const infrastructureBenefits = [
    {
      title: "Fiabilité maximale",
      description: "Des composants et architectures sélectionnés pour garantir un temps de fonctionnement optimal et minimiser les interruptions.",
      icon: <CheckCircle2 className="h-6 w-6" />,
      stats: "99.99%"
    },
    {
      title: "Sécurité renforcée",
      description: "Protection complète contre les menaces internes et externes, avec une surveillance constante et des mises à jour régulières.",
      icon: <Shield className="h-6 w-6" />,
      stats: "24/7"
    },
    {
      title: "Évolutivité",
      description: "Des solutions modulaires qui s'adaptent facilement à la croissance de votre entreprise sans nécessiter de refonte complète.",
      icon: <HardDrive className="h-6 w-6" />,
      stats: "100%"
    },
    {
      title: "Performance optimisée",
      description: "Infrastructure conçue pour offrir des performances maximales adaptées à vos applications critiques et à vos besoins spécifiques.",
      icon: <Zap className="h-6 w-6" />,
      stats: "50%"
    }
  ];

  // Processus d'implémentation
  const implementationSteps = [
    {
      number: "01",
      title: "Analyse des besoins",
      description: "Évaluation approfondie de vos besoins et objectifs informatiques.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Conception",
      description: "Élaboration d'une architecture sur mesure pour votre entreprise.",
      icon: <Cpu className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Déploiement",
      description: "Installation et configuration de vos solutions d'infrastructure.",
      icon: <Wifi className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Formation",
      description: "Formation de vos équipes aux nouvelles solutions technologiques.",
      icon: <Users className="h-6 w-6" />
    },
    {
      number: "05",
      title: "Support",
      description: "Accompagnement et maintenance continue de votre infrastructure.",
      icon: <AlertCircle className="h-6 w-6" />
    }
  ];

  return (
    <PublicLayout
      title="Services d'Infrastructure IT | CGUITECH"
      description="Solutions d'infrastructure informatique robustes et évolutives pour votre entreprise : serveurs, stockage, virtualisation, réseaux et data center."
    >
      {/* Hero Section - Style plus moderne avec design asymétrique */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services/african-man-with-tablet-facial-recognition.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Formes géométriques flottantes */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-white/30 hover:bg-white/40 text-white mb-6 py-2 px-4 text-sm uppercase tracking-wide backdrop-blur-sm">Infrastructure IT</Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-violet-100">
                Infrastructure intelligente pour votre entreprise
              </span>
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl">
              Des solutions d'infrastructure robustes et évolutives pour soutenir la croissance de votre entreprise et optimiser vos performances.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white hover:bg-white/90 text-primary-600 font-medium text-lg px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
                Demander un devis gratuit
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 rounded-xl backdrop-blur-sm">
                Découvrir nos solutions
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
              <h2 className="text-4xl font-bold mb-8 leading-tight">Infrastructure IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">de nouvelle génération</span></h2>
              <p className="text-primary-900 mb-8 leading-relaxed text-lg">
                Chez CGUITECH, nous concevons et déployons des infrastructures informatiques robustes et évolutives qui constituent le socle solide sur lequel repose toute votre stratégie numérique.
              </p>
              <p className="text-primary-800 mb-10 leading-relaxed text-lg">
                Notre approche sur mesure tient compte de vos besoins spécifiques, de vos contraintes budgétaires et de vos objectifs d'évolution pour vous proposer des solutions d'infrastructure parfaitement adaptées à votre entreprise.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Server className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Infrastructure moderne</h3>
                    <p className="text-primary-700 mt-1">Technologies avancées</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Shield className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Sécurité maximale</h3>
                    <p className="text-primary-700 mt-1">Protection à tous niveaux</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Zap className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Haute performance</h3>
                    <p className="text-primary-700 mt-1">Rapidité et efficacité</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <HardDrive className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Solutions évolutives</h3>
                    <p className="text-primary-700 mt-1">S'adapte à votre croissance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-violet-600/10 rounded-3xl transform rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/images/services/global-communication.jpg"
                  alt="Infrastructure IT professionnelle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions d'infrastructure - Cards avec effet de survol */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Nos solutions</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Solutions d'infrastructure complètes</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Nous proposons une gamme complète de solutions d'infrastructure pour répondre à tous les besoins de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureSolutions.map((solution, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-primary-700/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="p-8 relative z-10">
                  <div className="bg-primary-50 text-primary-600 p-4 rounded-2xl inline-flex mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-800 group-hover:text-primary-600 transition-colors">{solution.title}</h3>
                  <p className="text-primary-700 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
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

      {/* Avantages de l'infrastructure */}
      <section className="py-24 bg-gradient-to-b from-primary-100 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2 relative">
              <div className="absolute -inset-4 bg-primary-600/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-primary-700/10 rounded-3xl transform -rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/services/technician-holding-laptop-looking-around-data-center.jpg"
                  alt="Avantages de l'infrastructure IT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Badge className="bg-primary-50 text-primary-600 mb-6 uppercase tracking-wide font-medium">Avantages</Badge>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Pourquoi choisir notre infrastructure ?</h2>
              <p className="text-primary-800 mb-8 leading-relaxed text-lg">
                Une infrastructure IT bien conçue est le socle sur lequel repose la performance de votre entreprise. Notre approche offre de nombreux avantages qui vous permettent de vous concentrer sur votre cœur de métier.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {infrastructureBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{benefit.stats}</div>
                    <h3 className="font-bold text-xl mb-3 text-primary-900">{benefit.title}</h3>
                    <p className="text-primary-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre processus d'implémentation - Timeline moderne */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Notre processus</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Notre approche d'implémentation</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Un processus méthodique pour garantir le succès de votre projet d'infrastructure.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {implementationSteps.map((step, index) => (
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

      {/* CTA Section - Design moderne avec gradient */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute inset-0 -mt-10 -ml-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-60 h-60 bg-violet-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Prêt à transformer votre infrastructure IT?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nos solutions d'infrastructure peuvent transformer votre entreprise.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href={route('contact.index')} className="bg-white hover:bg-white/90 text-primary-600 font-medium text-lg px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
                  Demander un devis gratuit
                </Link>
                <a href={`tel:${CGUITECH.contactInfo.unespace_phone}`} className="flex items-center text-white font-medium text-lg group">
                  <div className="p-3 bg-white/20 rounded-full mr-3 group-hover:bg-white/30 transition-colors">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  {CGUITECH.contactInfo.phone}
                </a>
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