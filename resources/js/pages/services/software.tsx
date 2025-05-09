import { useState } from 'react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Code, Lightbulb, Database, Globe, SmartphoneNfc, Laptop, Layout, BarChart3, Briefcase, Clock, Milestone, ArrowRight, ChevronRight, Users, Shield, TrendingUp, PhoneCall } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { CGUITECH } from '@/utils/index';

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
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    <PublicLayout
      title="Développement Logiciel | CGUITECH"
      description="Services de développement logiciel sur mesure pour votre entreprise. Applications web, mobiles et solutions personnalisées par des experts."
    >
      {/* Hero Section - Style moderne avec overlay géométrique */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services/team-software-programmers-leaving-after-analyzing-source-code-wall-screen-tv-comparing-errors-using-digital-tablet-system-engineers-passing-screens-compiling-code-artificial-intelligence.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Formes géométriques flottantes */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-primary-300/20 blur-3xl animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-white/30 hover:bg-white/40 text-white mb-6 py-2 px-4 text-sm uppercase tracking-wide backdrop-blur-sm">Développement Logiciel</Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-primary-200">
                Solutions intelligentes sur mesure
              </span>
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl">
              Transformez vos idées en solutions digitales performantes avec notre expertise en développement logiciel de nouvelle génération.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={route('contact.index')} className="bg-white hover:bg-white/90 text-primary-600 font-medium text-lg px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 rounded-xl backdrop-blur-sm">
                Découvrir nos services
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
              <h2 className="text-4xl font-bold mb-8 leading-tight">L'expertise qui fait la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">différence</span></h2>
              <p className="text-primary-900 mb-8 leading-relaxed text-lg">
                Notre équipe de développeurs expérimentés travaille en étroite collaboration avec vous pour comprendre vos objectifs et créer des solutions logicielles qui répondent parfaitement à vos besoins.
              </p>
              <p className="text-primary-800 mb-10 leading-relaxed text-lg">
                Nous combinons expertise technique et compréhension métier pour vous offrir des applications robustes, évolutives et sécurisées.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Users className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Équipe expérimentée</h3>
                    <p className="text-primary-700 mt-1">Experts passionnés</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Shield className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Sécurité garantie</h3>
                    <p className="text-primary-700 mt-1">Protection des données</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <TrendingUp className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Solutions évolutives</h3>
                    <p className="text-primary-700 mt-1">Adaptées à votre croissance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Clock className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Support continu</h3>
                    <p className="text-primary-700 mt-1">Accompagnement personnalisé</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-600/10 rounded-3xl transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-primary-700/10 rounded-3xl transform rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/images/services/team-technicians-brainstorming-startup-office-coding-advanced-ai.jpg"
                  alt="Développement Logiciel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services avec design en grille moderne */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Nos services</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Solutions de développement complètes</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Nous créons des solutions logicielles qui répondent précisément à vos besoins métier et vous procurent un avantage concurrentiel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softwareServices.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-primary-700/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="p-8 relative z-10">
                  <div className="bg-primary-50 text-primary-600 p-4 rounded-2xl inline-flex mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-800 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                  <p className="text-primary-700 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
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

      {/* Processus de développement - Timeline verticale moderne */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Notre processus</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Notre approche de développement</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Un processus agile et transparent conçu pour vous garantir des résultats optimaux à chaque étape.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {developmentProcess.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:-translate-y-1 transition-all hover:shadow-xl border border-primary-100">
                      <span className="text-4xl font-black bg-gradient-to-br from-primary-600 to-primary-700 text-transparent bg-clip-text">
                        {index + 1}
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

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background avec overlay */}
        <div className="absolute inset-0 bg-[url('/images/services/software-development-team.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/95 via-primary-700/95 to-primary-600/90"></div>
        
        {/* Formes décoratives flottantes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3">
                <Badge className="bg-primary-500/60 text-white hover:bg-primary-500/80 mb-4 backdrop-blur-sm">Développement logiciel</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Prêt à concrétiser votre projet logiciel ?</h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl">
                  Nos experts en développement sont prêts à transformer vos idées en solutions performantes et sur mesure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={route('contact.index')} 
                    className="bg-white hover:bg-white/90 text-primary-600 font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-all hover:shadow-lg"
                  >
                    <span>Demander un devis gratuit</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a href={`tel:${CGUITECH.contactInfo.unespace_phone}`} className="flex items-center text-white font-medium text-lg group">
                    <div className="p-3 bg-white/20 rounded-full mr-3 group-hover:bg-white/30 transition-colors">
                      <PhoneCall className="h-6 w-6" />
                    </div>
                    {CGUITECH.contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl">
                  <h3 className="text-xl font-semibold mb-4">Parlons de votre projet</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Consultation initiale gratuite</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Estimation précise des coûts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Planning de développement détaillé</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Support après-livraison inclus</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Styles pour l'animation */}
        <style>{`
          @keyframes pulse {
            0% { opacity: 0.4; }
            50% { opacity: 0.7; }
            100% { opacity: 0.4; }
          }

          .animate-pulse {
            animation: pulse 3s ease-in-out infinite;
          }
        `}</style>
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
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
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
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Projets réalisés</div>
            </motion.div>
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </motion.div>
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Années d'expérience</div>
            </motion.div>
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support technique</div>
            </motion.div>
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
            <Badge className="bg-primary-50 text-primary-600 mb-4 py-1 px-4">TÉMOIGNAGES</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Ce que nos clients disent</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white shadow-lg border border-primary-100">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
                  <img src={CGUITECH.testimonials[currentIndex].avatar} alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-primary-600 mb-1">
                    {"★".repeat(CGUITECH.testimonials[currentIndex].rating)}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-4">
                    "{CGUITECH.testimonials[currentIndex].text}"
                  </p>
                  <div className="font-bold text-gray-900">{CGUITECH.testimonials[currentIndex].name}</div>
                  <div className="text-gray-600">{CGUITECH.testimonials[currentIndex].position}</div>
                </div>
              </div>
            </motion.div>
      
            <div className="flex justify-center mt-8 gap-2">
              {CGUITECH.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
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