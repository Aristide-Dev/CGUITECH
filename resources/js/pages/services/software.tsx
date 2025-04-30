import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Code, Lightbulb, Database, Globe, SmartphoneNfc, Laptop, Layout, BarChart3, Briefcase, Clock, Milestone, ArrowRight, ChevronRight, Users, Shield, TrendingUp } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function SoftwareDevelopmentService() {
  // Données pour les services de développement logiciel
  const softwareServices = [
    {
      title: "Applications Web",
      description: "Développement d'applications web sur mesure avec les dernières technologies.",
      icon: <Globe className="h-8 w-8" />,
      features: [
        "Applications web progressives (PWA)",
        "Portails d'entreprise",
        "Applications SaaS",
        "Interfaces administratives"
      ]
    },
    {
      title: "Applications Mobiles",
      description: "Création d'applications mobiles natives et cross-platform pour iOS et Android.",
      icon: <SmartphoneNfc className="h-8 w-8" />,
      features: [
        "Applications iOS et Android",
        "Applications cross-platform",
        "Intégration de fonctions natives",
        "Expérience utilisateur optimisée"
      ]
    },
    {
      title: "Logiciels de Bureau",
      description: "Développement de logiciels de bureau puissants et intuitifs pour Windows, macOS et Linux.",
      icon: <Laptop className="h-8 w-8" />,
      features: [
        "Applications multi-plateformes",
        "Logiciels métier",
        "Outils de productivité",
        "Intégration système"
      ]
    },
    {
      title: "Solutions Personnalisées",
      description: "Création de logiciels sur mesure adaptés aux besoins spécifiques de votre entreprise.",
      icon: <Code className="h-8 w-8" />,
      features: [
        "Automatisation des processus",
        "Intégration avec les systèmes existants",
        "Analyse et visualisation de données",
        "Solutions métier spécialisées"
      ]
    }
  ];

  // Données pour les technologies
  const technologies = [
    {
      name: "Frontend",
      items: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "HTML5/CSS3", "Tailwind CSS"]
    },
    {
      name: "Backend",
      items: ["Node.js", "PHP/Laravel", "Python/Django", "Java/Spring", "C#/.NET", "Go", "Ruby on Rails"]
    },
    {
      name: "Mobile",
      items: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"]
    },
    {
      name: "Database",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQL Server", "Elasticsearch", "Firebase"]
    }
  ];

  // Données pour le processus de développement
  const developmentProcess = [
    {
      title: "Découverte",
      description: "Analyse des besoins, définition des objectifs",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Conception",
      description: "Architecture, UX/UI, modélisation des données",
      icon: <Layout className="h-6 w-6" />,
    },
    {
      title: "Développement",
      description: "Programmation, revues de code, intégration continue",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Tests & QA",
      description: "Tests fonctionnels, de performance et de sécurité",
      icon: <CheckCircle2 className="h-6 w-6" />,
    },
    {
      title: "Déploiement",
      description: "Mise en production, migration, formation",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Évolution",
      description: "Support, maintenance et améliorations continues",
      icon: <BarChart3 className="h-6 w-6" />,
    }
  ];

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

  return (
    <PublicLayout
      title="Développement Logiciel | CGUITECH"
      description="Services de développement logiciel sur mesure pour votre entreprise. Applications web, mobiles et solutions personnalisées par des experts."
    >
      {/* Hero Section - Style moderne avec overlay géométrique */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-violet-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-32">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm backdrop-blur-sm">DÉVELOPPEMENT LOGICIEL</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">intelligentes</span> sur mesure</h1>
            <p className="text-xl opacity-90 mb-12 leading-relaxed max-w-2xl">
              Transformez vos idées en solutions digitales performantes avec notre expertise en développement logiciel de nouvelle génération.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={route('contact.index')} className="bg-white text-blue-900 hover:bg-white/90 rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/30">
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Button variant="outline" className="border-white/50 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm">
                Découvrir nos services
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract shape divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-br from-blue-900 via-indigo-800 to-violet-900">
          <svg className="absolute bottom-0 w-full h-32 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Technologies showcase - Bande horizontale défilante */}
      <motion.div 
        className="py-8 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <div className="flex space-x-12 animate-marquee">
          {technologies.flatMap(category => category.items).concat(technologies[0].items).map((tech, index) => (
            <span key={index} className="text-gray-600 font-medium whitespace-nowrap flex items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Statistiques clés */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Projets réalisés</div>
            </motion.div>
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </motion.div>
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Années d'expérience</div>
            </motion.div>
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support technique</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services avec design en grille moderne */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-100 text-blue-600 mb-4 py-1 px-4">NOS SERVICES</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">Solutions de développement complètes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nous créons des solutions logicielles qui répondent précisément à vos besoins métier et vous procurent un avantage concurrentiel.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {softwareServices.map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="group"
              >
                <Card className="border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative bg-gradient-to-br from-gray-50 to-white">
                  <div className="absolute right-0 top-0 w-40 h-40 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors duration-300"></div>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-blue-600 to-violet-600 text-white p-4 rounded-xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1 flex-shrink-0">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-4 border-t border-gray-100">
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

      {/* Pourquoi nous choisir */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-600 mb-4 py-1 px-4">POURQUOI NOUS CHOISIR</Badge>
              <h2 className="text-4xl font-bold mb-6">L'expertise qui fait la différence</h2>
              <p className="text-gray-600 text-lg mb-8">
                Notre approche unique et notre expertise technique nous permettent de créer des solutions qui répondent parfaitement à vos besoins.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Équipe expérimentée</h3>
                  <p className="text-gray-600">Des développeurs seniors avec une expertise approfondie.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Sécurité garantie</h3>
                  <p className="text-gray-600">Des solutions robustes et sécurisées pour vos données.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Solutions évolutives</h3>
                  <p className="text-gray-600">Des applications qui s'adaptent à votre croissance.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Support continu</h3>
                  <p className="text-gray-600">Un accompagnement personnalisé à chaque étape.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-600/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-indigo-600/10 rounded-full z-0"></div>
              
              <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/services/programer-sitting-desk-with-multiple-screens-running-code-talking-with-colleague-about-artificial-intelligence-algorithm-software-developers-doing-innovative-artificial-intelligence-project.jpg" 
                  alt="Développement Logiciel"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus de développement - Timeline verticale moderne */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-100 text-blue-600 mb-4 py-1 px-4">PROCESSUS</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">Notre approche de développement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Un processus agile et transparent conçu pour vous garantir des résultats optimaux à chaque étape.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-violet-600 rounded-full"></div>
              
              {developmentProcess.map((step, index) => (
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
                      <div className={`inline-flex items-center rounded-full px-6 py-2 mb-4 ${index % 2 === 0 ? 'bg-violet-100 text-violet-600' : 'bg-blue-100 text-blue-600'}`}>
                        <span className="font-bold mr-2">ÉTAPE {index + 1}</span>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section témoignages - Carrousel moderne */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-100 text-blue-600 mb-4 py-1 px-4">TÉMOIGNAGES</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">Ce que nos clients disent</h2>
          </motion.div>

          <motion.div 
            className="max-w-5xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg border border-blue-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
                <img src="/api/placeholder/100/100" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-blue-600 mb-1">★★★★★</div>
                <p className="text-gray-700 text-lg italic mb-4">
                  "L'équipe de CGUITECH a transformé notre idée en une application robuste et intuitive qui a dépassé nos attentes. Leur approche méthodique et leur communication transparente ont fait de ce projet complexe une expérience fluide et productive."
                </p>
                <div className="font-bold text-gray-900">Marie Laurent</div>
                <div className="text-gray-600">Directrice Innovation, TechSolutions SA</div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              <button className="w-3 h-3 rounded-full bg-blue-600"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Design moderne avec gradient et forme */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-violet-700 text-white relative overflow-hidden">
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
            <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre vision en réalité?</h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Discutons de votre projet et voyons comment notre expertise peut vous aider à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={route('contact.index')} className="bg-white text-blue-700 hover:bg-white/90 rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/30">
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
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </PublicLayout>
  );
}