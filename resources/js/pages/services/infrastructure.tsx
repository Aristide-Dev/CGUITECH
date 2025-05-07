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
      title: "Analyse des besoins",
      description: "Évaluation approfondie de vos besoins et objectifs",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Conception",
      description: "Élaboration d'une architecture sur mesure",
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: "Déploiement",
      description: "Installation et configuration des solutions",
      icon: <Wifi className="h-6 w-6" />
    },
    {
      title: "Formation",
      description: "Formation de vos équipes aux nouvelles solutions",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Support",
      description: "Accompagnement et maintenance continue",
      icon: <AlertCircle className="h-6 w-6" />
    }
  ];

  return (
    <PublicLayout
      title="Services d'Infrastructure IT | CGUITECH"
      description="Solutions d'infrastructure informatique robustes et évolutives pour votre entreprise : serveurs, stockage, virtualisation, réseaux et data center."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services/african-man-with-tablet-facial-recognition.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm backdrop-blur-sm">INFRASTRUCTURE IT</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-violet-200">intelligente</span> pour votre entreprise</h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Des solutions d'infrastructure robustes et évolutives pour soutenir la croissance de votre entreprise et optimiser vos performances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-primary-600 hover:bg-white/90">
                Demander un devis
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Découvrir nos forfaits
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions d'infrastructure */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-100 text-blue-600 mb-4 py-1 px-4">NOS SOLUTIONS</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">Solutions d'infrastructure complètes</h2>
            <p className="text-blue-600 max-w-2xl mx-auto text-lg">
              Nous proposons une gamme complète de solutions d'infrastructure pour répondre à tous les besoins de votre entreprise.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {infrastructureSolutions.map((solution, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="group"
              >
                <Card className="border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative bg-gradient-to-br from-white to-blue-50">
                  <div className={`absolute right-0 top-0 w-40 h-40 bg-gradient-to-br ${solution.color} rounded-bl-full -z-10 group-hover:opacity-100 transition-opacity duration-300 opacity-50`}></div>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-blue-600 to-violet-600 text-white p-4 rounded-xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">{solution.title}</h3>
                    <p className="text-blue-600 mb-6">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1 flex-shrink-0">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <span className="text-blue-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-4 border-t border-blue-100">
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        En savoir plus
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-100 text-blue-600 mb-4 py-1 px-4">AVANTAGES</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">Pourquoi choisir notre infrastructure ?</h2>
            <p className="text-blue-600 max-w-2xl mx-auto text-lg">
              Notre approche de l'infrastructure IT offre de nombreux avantages pour votre entreprise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.stats}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                <p className="text-blue-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'implémentation */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-100 text-blue-600 mb-4 py-1 px-4">PROCESSUS</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">Notre approche d'implémentation</h2>
            <p className="text-blue-600 max-w-2xl mx-auto text-lg">
              Un processus méthodique pour garantir le succès de votre projet d'infrastructure.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-violet-600 rounded-full"></div>
              
              {implementationSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative mb-16 last:mb-0"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-500 z-10"></div>
                    
                    {/* Content */}
                    <div className="w-1/2"></div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                      <div className={`inline-flex items-center rounded-full px-6 py-2 mb-4 ${index % 2 === 0 ? 'bg-blue-100 text-blue-600' : 'bg-blue-100 text-blue-600'}`}>
                        <span className="font-bold mr-2">ÉTAPE {index + 1}</span>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-blue-900">{step.title}</h3>
                      <p className="text-blue-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="relative py-20 bg-gradient-to-tl from-gray-900 via-primary/90 to-blue-900">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-50 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-tr-full"></div>
        </div>
          <div className="container mx-auto px-4">
              <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                      <div className="p-12 md:p-16">
                          <Badge className="bg-yellow-500 text-primary-900 mb-6 px-4 py-1 rounded-full font-medium">COMMENCEZ MAINTENANT</Badge>
                          <h2 className="text-4xl font-bold mb-6 text-white">Prêt à transformer votre infrastructure IT?</h2>
                          <p className="mb-8 text-white/90 text-lg">
                            Discutons de votre projet et voyons comment notre expertise peut vous aider à atteindre vos objectifs.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-6">
                              <Link href={route('contact.index')} className="bg-yellow-500 hover:bg-yellow-600 text-primary-900 px-8 py-6 text-lg font-medium rounded-full">
                                  Prendre rendez-vous
                              </Link>
                              <a href="tel:+224627969855" className="flex items-center text-white font-medium text-lg group">
                                  <div className="p-3 bg-white/20 rounded-full mr-3 group-hover:bg-white/30 transition-colors">
                                      <PhoneCall className="h-6 w-6" />
                                  </div>
                                  +224 627 96 98 55
                              </a>
                          </div>
                      </div>
                      <div className="hidden md:block relative h-full">
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary-900/50 z-10"></div>
                          <img
                              src="/images/services/side-view-woman-using-laptop-while-sitting-cafe.jpg"
                              alt="Contactez-nous"
                              className="w-full h-full object-cover"
                          />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Ajout de style global pour les animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </PublicLayout>
  );
} 