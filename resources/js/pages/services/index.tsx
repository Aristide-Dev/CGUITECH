import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { 
  ArrowRight, 
  Server, 
  Cloud, 
  Shield, 
  Headphones, 
  Globe, 
  Code, 
  Phone, 
  CheckCircle, 
  ChevronRight,
  Users, 
  Clock, 
  TrendingUp 
} from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function ServicesIndex() {
  const services = [
    {
      title: "Services IT gérés tout-en-un",
      description: "Une solution complète pour la gestion de votre infrastructure informatique avec surveillance proactive, maintenance préventive et support technique illimité.",
      slug: "it-management",
      icon: <Server className="h-12 w-12" />,
      gradient: "from-blue-600 to-blue-900",
      features: ["Surveillance 24/7", "Maintenance préventive", "Support illimité"]
    },
    {
      title: "Support informatique",
      description: "Un support technique réactif et professionnel disponible en français et en anglais, avec des délais d'intervention garantis pour tous vos besoins quotidiens.",
      slug: "it-support",
      icon: <Headphones className="h-12 w-12" />,
      gradient: "from-indigo-500 to-indigo-800",
      features: ["Support multilingue", "Intervention rapide", "Résolution efficace"]
    },
    {
      title: "Solutions cloud",
      description: "Migrez vos services et applications vers le cloud pour plus de flexibilité, d'évolutivité et de résilience. Optimisez vos coûts d'infrastructure avec nos solutions sur mesure.",
      slug: "cloud",
      icon: <Cloud className="h-12 w-12" />,
      gradient: "from-cyan-500 to-blue-700",
      features: ["Migration sécurisée", "Sauvegarde automatisée", "Scalabilité illimitée"]
    },
    {
      title: "Infrastructure IT",
      description: "Conception, mise en place et maintenance d'infrastructures informatiques performantes, sécurisées et adaptées aux enjeux des entreprises guinéennes.",
      slug: "infrastructure",
      icon: <Server className="h-12 w-12" />,
      gradient: "from-blue-500 to-indigo-700",
      features: ["Réseau haute performance", "Virtualisation", "Solutions hybrides"]
    },
    {
      title: "Téléphonie IP",
      description: "Solutions de communication unifiées et de téléphonie sur IP pour optimiser vos échanges professionnels, réduire vos coûts et améliorer la collaboration.",
      slug: "ip-telephony",
      icon: <Phone className="h-12 w-12" />,
      gradient: "from-violet-500 to-purple-800",
      features: ["Appels illimités", "Vidéoconférence HD", "Messagerie unifiée"]
    },
    {
      title: "Conception Web et Hébergement",
      description: "Création de sites web professionnels, responsives et optimisés pour le référencement. Solutions d'hébergement haute disponibilité adaptées au marché africain.",
      slug: "web-design",
      icon: <Globe className="h-12 w-12" />,
      gradient: "from-blue-400 to-blue-700",
      features: ["Design moderne", "Optimisation SEO", "Hébergement local"]
    },
    {
      title: "Développement logiciel",
      description: "Développement d'applications sur mesure pour répondre aux besoins spécifiques de votre entreprise. Solutions mobiles, web et de bureau pour digitaliser vos opérations.",
      slug: "software",
      icon: <Code className="h-12 w-12" />,
      gradient: "from-indigo-600 to-blue-900",
      features: ["Applications personnalisées", "Interfaces intuitives", "Maintenance continue"]
    },
    // {
    //   title: "Cybersécurité avancée",
    //   description: "Protégez votre entreprise contre les menaces numériques avec nos solutions de sécurité complètes, incluant audit, surveillance et formation du personnel.",
    //   slug: "cybersecurity",
    //   icon: <Shield className="h-12 w-12" />,
    //   gradient: "from-red-600 to-red-900",
    //   features: ["Audit de sécurité", "Protection des données", "Formation utilisateurs"]
    // }
  ];

  const industries = [
    { name: "Santé", icon: "🏥" },
    { name: "Finance", icon: "💰" },
    { name: "Éducation", icon: "🎓" },
    { name: "Commerce", icon: "🛒" },
    { name: "Mines", icon: "⛏️" },
    { name: "Transport", icon: "🚚" }
  ];

  const testimonials = [
    {
      quote: "CGUITech a complètement transformé notre infrastructure informatique, ce qui nous a permis d'améliorer considérablement notre productivité.",
      author: "Jean Camara",
      position: "Directeur des Opérations, MinesTech Guinée"
    },
    {
      quote: "Le support technique est incroyablement réactif. Nos problèmes sont généralement résolus en moins d'une heure.",
      author: "Marie Condé",
      position: "Responsable IT, Banque de Développement"
    }
  ];

  return (
    <PublicLayout
      title="Services IT Professionnels | CGUITech"
      description="Découvrez notre gamme complète de services IT pour les entreprises en Guinée. Support informatique, cloud, infrastructure, sécurité et développement logiciel sur mesure."
    >
      
            {/* Hero Section améliorée */}
            <div className="w-full bg-primary relative">
                <div className="w-full min-h-[150vh] overflow-visible relative">
                    <div className="h-screen sticky top-0">
                        <img 
                            src="https://www.freepik.com/premium-photo/black-man-as-network-engineer_28945127.htm#fromView=search&page=1&position=19&uuid=96f8c966-bd15-4e49-ad71-c8e02046f197&query=informatiqe"
                            alt="Services CGUITECH"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent">
                        </div>
                    </div>

                    <div className="absolute inset-0 flex flex-col">
                        <div className="h-[50vh]"></div>
                        <div className="flex justify-center items-start mx-auto px-4 md:px-8 w-full">
                            <div className="max-w-7xl w-full space-y-6 bg-black/40 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                                <div className="space-y-3 text-center">
                                    <span className="text-white/70 font-semibold text-lg md:text-xl uppercase tracking-wider">Solutions Technologiques Complètes</span>
                                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                                        Services & Solutions
                                    </h1>
                                    <div className="flex flex-wrap gap-2 items-center justify-center">
                                        <div className="bg-white/20 py-1 px-3 rounded-full inline-flex">
                                            <span className="text-white font-semibold">IT Management</span>
                                        </div>
                                        <div className="bg-white/20 py-1 px-3 rounded-full inline-flex">
                                            <span className="text-white font-semibold">Cloud Solutions</span>
                                        </div>
                                        <div className="bg-white/20 py-1 px-3 rounded-full inline-flex">
                                            <span className="text-white font-semibold">Web Design</span>
                                        </div>
                                        <div className="bg-yellow-500/20 py-1 px-3 rounded-full inline-flex">
                                            <span className="text-yellow-300 font-semibold">
                                                Support 24/7
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-xl md:text-2xl text-yellow-400 font-semibold tracking-wide">
                                        <span className="text-red-500">Innovation</span> • Expertise • <span className="text-primary">Solutions</span>
                                    </p>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-8 text-white/90 mt-8">
                                    <div className="space-y-3 border-l-4 border-yellow-400 pl-6">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white">Expertise Multidisciplinaire</h2>
                                        <p className="text-lg md:text-xl leading-relaxed">
                                            De l'infrastructure IT à la conception web, en passant par les solutions cloud 
                                            et le développement logiciel, nous offrons une gamme complète de services 
                                            technologiques adaptés à vos besoins.
                                        </p>
                                    </div>

                                    <div className="space-y-3 border-l-4 border-yellow-400 pl-6">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white">Solutions Sur Mesure</h2>
                                        <p className="text-lg md:text-xl leading-relaxed">
                                            Notre approche personnalisée vous garantit des solutions adaptées à votre 
                                            secteur d'activité et à vos objectifs spécifiques, avec un support continu 
                                            pour votre croissance.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1"
                                    >
                                        Demander un devis
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </Link>
                                    <Link
                                        href="#services-overview"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 text-lg border border-white/20 transform hover:-translate-y-1"
                                    >
                                        Découvrir nos services
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


      {/* Hero Section with Animation */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-20"></div>
        <div className="container relative mx-auto px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white px-4 py-1 text-sm">SOLUTIONS TECHNOLOGIQUES POUR L'AFRIQUE</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Services IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">professionnels</span> pour entreprises ambitieuses
            </h1>
            <p className="text-xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Des solutions informatiques complètes, adaptées au contexte guinéen, pour soutenir la croissance de votre entreprise et optimiser vos opérations quotidiennes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-primary-800 hover:bg-white/90 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact">
                  Discuter de vos besoins <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/70 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
              >
                <Link href="#services-overview">
                  Explorer nos services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute -bottom-6 left-0 right-0 h-24">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-primary-700 mb-2">200+</p>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary-700 mb-2">15+</p>
              <p className="text-gray-600">Années d'expertise</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary-700 mb-2">99.9%</p>
              <p className="text-gray-600">Temps de disponibilité</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary-700 mb-2">30 min</p>
              <p className="text-gray-600">Temps de réponse moyen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced with animation and features */}
      <section id="services-overview" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary mb-4 px-4 py-1">NOS SERVICES</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Solutions informatiques complètes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Découvrez notre gamme complète de services IT conçus pour répondre aux besoins spécifiques des entreprises guinéennes et vous aider à atteindre vos objectifs stratégiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card 
                key={service.slug}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group rounded-xl"
              >
                <div className={`p-8 bg-gradient-to-br ${service.gradient} text-white`}>
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl inline-block mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-white/70" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <CardFooter className="bg-white p-5 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Solutions adaptées</span>
                  <Button 
                    asChild
                    variant="ghost" 
                    className="text-primary hover:text-primary-700 hover:bg-primary-50 group-hover:translate-x-1 transition-all"
                  >
                    <Link href={route('services.' + service.slug)}>
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary mb-4 px-4 py-1">SECTEURS D'ACTIVITÉ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries que nous servons</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nos services IT sont adaptés aux besoins spécifiques de différents secteurs d'activité en Guinée et en Afrique de l'Ouest.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-800">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nos services - Enhanced with icons and depth */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary-800 via-primary-700 to-primary-900 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 text-white">
            <Badge className="bg-white/20 text-white mb-4 px-4 py-1">POURQUOI NOUS CHOISIR</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">L'avantage CGUITech</h2>
            <p className="text-white/90 max-w-3xl mx-auto text-lg">
              Nous nous engageons à fournir des services informatiques de la plus haute qualité, avec une approche personnalisée et un support exceptionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-white hover:bg-white/15 transition-all">
              <div className="bg-white/20 p-4 rounded-full inline-flex mb-6">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Expertise technique</h3>
              <p className="text-white/80">
                Notre équipe est composée d'experts certifiés dans diverses technologies, avec plus de 15 ans d'expérience dans le secteur IT en Afrique.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-white hover:bg-white/15 transition-all">
              <div className="bg-white/20 p-4 rounded-full inline-flex mb-6">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Solutions personnalisées</h3>
              <p className="text-white/80">
                Nous adaptons nos services à vos besoins spécifiques, en tenant compte de votre secteur d'activité et du contexte unique du marché guinéen.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-white hover:bg-white/15 transition-all">
              <div className="bg-white/20 p-4 rounded-full inline-flex mb-6">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Support continu</h3>
              <p className="text-white/80">
                Nous sommes là pour vous 24/7, avec un support réactif en français et en anglais, et un temps de réponse moyen de moins de 30 minutes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-white hover:bg-white/15 transition-all">
              <div className="bg-white/20 p-4 rounded-full inline-flex mb-6">
                <TrendingUp className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation constante</h3>
              <p className="text-white/80">
                Nous restons à la pointe de la technologie pour vous proposer des solutions innovantes adaptées aux défis et opportunités de votre entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary mb-4 px-4 py-1">TÉMOIGNAGES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez pourquoi les entreprises à travers la Guinée font confiance à CGUITech pour leurs besoins en services IT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl text-primary-200 mb-4">"</div>
                <p className="text-xl text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-primary-600 to-blue-700 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary mb-4 px-4 py-1">NOTRE PROCESSUS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment nous travaillons</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Notre approche structurée garantit des résultats optimaux pour votre entreprise.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 relative">
              <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-primary-500 to-blue-500 -translate-y-1/2 z-0"></div>
              
              <div className="md:w-1/4 text-center z-10 mb-8 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-bold text-lg mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">Nous analysons vos besoins spécifiques</p>
              </div>
              
              <div className="md:w-1/4 text-center z-10 mb-8 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-bold text-lg mb-2">Proposition</h3>
                <p className="text-gray-600 text-sm">Nous élaborons une solution sur mesure</p>
              </div>
              
              <div className="md:w-1/4 text-center z-10 mb-8 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-bold text-lg mb-2">Implémentation</h3>
                <p className="text-gray-600 text-sm">Nous déployons la solution</p>
              </div>
              
              <div className="md:w-1/4 text-center z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-bold text-lg mb-2">Support</h3>
                <p className="text-gray-600 text-sm">Nous assurons un suivi continu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-primary-100 text-primary mb-4 px-4 py-1">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
              <p className="text-gray-600">
                Trouvez rapidement des réponses aux questions les plus posées sur nos services.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg mb-2">Quels sont vos délais d'intervention en cas de panne ?</h3>
                <p className="text-gray-600">Pour nos clients avec contrats de support, nous garantissons une intervention à distance sous 30 minutes et sur site sous 4 heures dans la région de Conakry. Pour les situations critiques, nous disposons d'une équipe d'urgence disponible 24/7.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg mb-2">Proposez-vous des solutions adaptées aux coupures électriques fréquentes ?</h3>
                <p className="text-gray-600">Absolument. Nos infrastructures IT sont conçues en tenant compte des défis énergétiques en Guinée. Nous intégrons des solutions de continuité électrique (UPS, générateurs) et des configurations spéciales pour protéger vos équipements et données.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg mb-2">Comment assurez-vous la sécurité de nos données ?</h3>
                <p className="text-gray-600">Nous mettons en œuvre des solutions de sécurité multicouches incluant pare-feu nouvelle génération, antivirus, détection d'intrusion, et sauvegardes chiffrées. Nous réalisons également des audits réguliers et formons votre personnel aux bonnes pratiques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l'action - Enhanced with gradient and animation */}
      <section className="py-24 bg-gradient-to-r from-primary-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] opacity-10"></div>
        
        {/* Animated circles */}
        <div className="absolute h-64 w-64 rounded-full bg-blue-500 opacity-20 blur-3xl -top-20 -left-20"></div>
        <div className="absolute h-96 w-96 rounded-full bg-primary-500 opacity-20 blur-3xl -bottom-40 -right-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 px-4 py-1">PASSEZ À L'ACTION</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Prêt à transformer votre infrastructure IT ?</h2>
            <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nos services peuvent aider votre entreprise à prospérer dans l'économie numérique guinéenne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary-700 hover:bg-white/90 rounded-full px-8 py-6"
              >
                <Link href="/contact">
                  Demander un devis gratuit <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6"
              >
                <Link href={route('about')}>
                  En savoir plus sur nous
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-white/80">
              Nous répondons généralement dans les 24 heures
            </p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}