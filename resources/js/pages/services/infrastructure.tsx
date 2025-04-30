import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle2, 
  Server, 
  Database, 
  Network, 
  Shield, 
  Cloud, 
  HardDrive, 
  Lock,
  ArrowRight,
  ChevronRight,
  Users,
  Clock,
  TrendingUp,
  Zap,
  Cpu,
  Wifi,
  Building2,
  BarChart3,
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
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-600 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-32">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm backdrop-blur-sm">INFRASTRUCTURE IT</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-violet-200">intelligente</span> pour votre entreprise</h1>
            <p className="text-xl opacity-90 mb-12 leading-relaxed max-w-2xl">
              Des solutions d'infrastructure robustes et évolutives pour soutenir la croissance de votre entreprise et optimiser vos performances.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={route('contact.index')} className="bg-white text-blue-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/30">
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Button variant="outline" className="border-white/50 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm">
                Découvrir nos solutions
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract shape divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-600">
          <svg className="absolute bottom-0 w-full h-32 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-600 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-white/20 text-white mb-6 py-1 px-4 backdrop-blur-sm">COMMENCER MAINTENANT</Badge>
            <h2 className="text-4xl font-bold mb-6">Prêt à moderniser votre infrastructure IT ?</h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Discutons de votre projet et voyons comment notre expertise peut vous aider à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={route('contact.index')} className="bg-white text-blue-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/30">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Button variant="outline" className="border-white/50 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm">
                Consulter notre portfolio
              </Button>
            </div>
          </motion.div>
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