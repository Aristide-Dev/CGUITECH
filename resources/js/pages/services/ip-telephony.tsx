import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Phone, Video, Headphones, Save, Users, Building, PhoneCall, Settings, CircleDollarSign, ArrowRight, ChevronRight, Shield, Clock, TrendingUp, Globe, MessageSquare, Zap } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function IPTelephonyService() {
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

  // Données pour les solutions de téléphonie IP
  const ipTelephonySolutions = [
    {
      title: "VoIP",
      description: "Systèmes de téléphonie sur IP pour des communications vocales claires et économiques.",
      icon: <Phone className="h-8 w-8" />,
      image: "/images/services/close-up-person-working-call-center_23-2149288225.jpg",
      features: [
        "Appels haute définition",
        "Numéros virtuels",
        "Messagerie vocale avancée",
        "Intégration avec votre CRM",
        "Transfert d'appels intelligent",
        "Conférences audio HD"
      ]
    },
    {
      title: "Visioconférence",
      description: "Solutions de visioconférence HD pour des réunions virtuelles efficaces.",
      icon: <Video className="h-8 w-8" />,
      image: "/images/services/410753706_95273441-e87d-4ab3-a717-cc3daad2cc10.jpg",
      features: [
        "Vidéo haute définition",
        "Partage d'écran en temps réel",
        "Salles virtuelles sécurisées",
        "Enregistrement des réunions",
        "Tableau blanc collaboratif",
        "Chat intégré"
      ]
    },
    {
      title: "Centres d'appels",
      description: "Solutions de centres d'appels modernes pour améliorer l'expérience client.",
      icon: <Headphones className="h-8 w-8" />,
      image: "/images/services/portrait-girl-his-hone-headset-transparent-background.png",
      features: [
        "Distribution intelligente des appels",
        "Supervision en temps réel",
        "Rapports détaillés",
        "Intégration omnicanal",
        "Analyse des sentiments",
        "Enregistrement des appels"
      ]
    },
    {
      title: "Communications unifiées",
      description: "Plateforme intégrée regroupant tous vos outils de communication.",
      icon: <Settings className="h-8 w-8" />,
      image: "/images/services/office-telephone-system-with-multiple-handsets-isolated-transparent-background.png",
      features: [
        "Messagerie instantanée d'entreprise",
        "Présence et statut",
        "Intégration mobile",
        "Solution tout-en-un",
        "Synchronisation multi-appareils",
        "Archivage sécurisé"
      ]
    }
  ];

  // Données pour les avantages de la téléphonie IP
  const ipTelephonyBenefits = [
    {
      title: "Réduction des coûts",
      description: "Économisez jusqu'à 60% sur vos factures de téléphone grâce à des tarifs compétitifs et l'élimination des lignes physiques.",
      icon: <CircleDollarSign className="h-6 w-6 text-primary" />,
      image: "/images/services/african-man-holding-come-money-doing-paperwork-also_216356-629.avif",
      stats: "60% d'économies"
    },
    {
      title: "Mobilité et flexibilité",
      description: "Accédez à votre système téléphonique de n'importe où, permettant le télétravail et la continuité des activités.",
      icon: <Users className="h-6 w-6 text-primary" />,
      image: "/images/services/portrait-young-beautiful-woman-gesticulating_273609-40358.avif",
      stats: "100% mobile"
    },
    {
      title: "Évolutivité",
      description: "Ajoutez ou supprimez facilement des lignes selon vos besoins, sans investissement matériel majeur.",
      icon: <Building className="h-6 w-6 text-primary" />,
      image: "/images/services/man-looking-bills-while-using-mobile-phone-desk-bedroom-comfortable-home_13339-359256.avif",
      stats: "Évolutif à l'infini"
    },
    {
      title: "Fonctionnalités avancées",
      description: "Accédez à des fonctionnalités professionnelles comme les standards automatiques, le routage intelligent et la messagerie unifiée.",
      icon: <Save className="h-6 w-6 text-primary" />,
      image: "/images/services/woman-protecting-safeguarding-her-identity-passwords-from-spyware_482257-83357.avif",
      stats: "50+ fonctionnalités"
    }
  ];

  // Données pour les cas d'utilisation
  const useCases = [
    {
      title: "PME",
      description: "Solutions complètes et abordables pour les petites et moyennes entreprises.",
      features: [
        "Système téléphonique professionnel à moindre coût",
        "Configuration simplifiée et maintenance légère",
        "Évolutivité selon la croissance de l'entreprise",
        "Interface de gestion intuitive",
        "Support technique dédié",
        "Formation des utilisateurs"
      ],
      image: '/images/services/407363448_3308dd59-d2e4-496d-9e4e-60c7430d7e26.jpg',
      icon: <Building className="h-6 w-6 text-primary" />
    },
    {
      title: "Grandes Entreprises",
      description: "Solutions robustes et personnalisées pour les organisations complexes.",
      features: [
        "Infrastructure hautement disponible et redondante",
        "Intégration avec les systèmes d'entreprise existants",
        "Support multisite et international",
        "Analyses avancées et rapports détaillés",
        "Gestion centralisée",
        "Sécurité renforcée"
      ],
      image: '/images/services/happy-business-people-group-with-teamwork-overlay-tablet-with-support-planning-cooperation-staff-manager-employee-with-banner-innovation-tech-with-collaboration-brainstorming.jpg',
      icon: <Globe className="h-6 w-6 text-primary" />
    },
    {
      title: "Centres d'appels",
      description: "Solutions optimisées pour la gestion des volumes importants d'appels.",
      features: [
        "Distribution intelligente des appels (ACD)",
        "Surveillance et coaching en temps réel",
        "Enregistrements et évaluation de qualité",
        "Rapports de performance détaillés",
        "Intégration CRM",
        "Analyse prédictive"
      ],
      image: '/images/services/female-employee-call-center-video-link-tech-support-employee-uses-headset-webcam.jpg.jpg',
      icon: <Headphones className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <PublicLayout
      title="Téléphonie IP & Communications Unifiées | CGUITECH"
      description="Solutions de téléphonie IP et communications unifiées pour votre entreprise. Services VoIP, visioconférence, centres d'appels et communications unifiées."
    >
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 py-24 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/services/contact-cta.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm">TÉLÉPHONIE IP</Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Communications d'entreprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">intelligentes</span></h1>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Des solutions de téléphonie IP et de communications unifiées pour rendre vos échanges professionnels plus efficaces et économiques.
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

      {/* Statistiques clés */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img 
                  src="/images/services/ip-telephony/stats.jpg" 
                  alt="Clients satisfaits" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </motion.div>
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img 
                  src="/images/services/ip-telephony/stats.jpg" 
                  alt="Disponibilité" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-gray-600">Disponibilité</div>
            </motion.div>
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img 
                  src="/images/services/ip-telephony/stats.jpg" 
                  alt="Support technique" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support technique</div>
            </motion.div>
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img 
                  src="/images/services/ip-telephony/stats.jpg" 
                  alt="Économies réalisées" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-gray-600">Économies réalisées</div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Solutions de téléphonie IP */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-primary-100 text-primary mb-4 py-1 px-4">NOS SOLUTIONS</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-600 text-transparent bg-clip-text">Solutions de communications complètes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Découvrez notre gamme complète de solutions de téléphonie IP et de communications unifiées pour transformer vos échanges professionnels.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ipTelephonySolutions.map((solution, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="group"
              >
                <Card className="border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative bg-gradient-to-br from-gray-50 to-white">
                  <div className="absolute right-0 top-0 w-40 h-40 bg-primary-50 rounded-bl-full -z-10 group-hover:bg-primary-100 transition-colors duration-300"></div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-primary to-primary-600 text-white p-4 rounded-xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="bg-primary-100 text-primary p-1 rounded-full mt-1 flex-shrink-0">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {/* <div className="mt-8 pt-4 border-t border-gray-100">
                      <Button variant="ghost" className="text-primary hover:text-primary-800 hover:bg-primary-50 p-0 flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        En savoir plus
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Avantages de la téléphonie IP */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-primary-100 text-primary mb-4 py-1 px-4">AVANTAGES</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-600 text-transparent bg-clip-text">Pourquoi choisir la téléphonie IP ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              La téléphonie IP offre de nombreux avantages par rapport aux systèmes téléphoniques traditionnels, tant sur le plan financier que fonctionnel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ipTelephonyBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-primary-100 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">{benefit.stats}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <img 
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'utilisation */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-primary-100 text-primary mb-4 py-1 px-4">CAS D'UTILISATION</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-600 text-transparent bg-clip-text">Solutions adaptées à vos besoins</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Nos solutions de téléphonie IP s'adaptent à différents types d'entreprises et d'organisations, quelle que soit leur taille ou leur secteur d'activité.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="pme" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="pme" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  PME
                </TabsTrigger>
                <TabsTrigger value="grands-comptes" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Grandes Entreprises
                </TabsTrigger>
                <TabsTrigger value="centres-appels" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Centres d'appels
                </TabsTrigger>
              </TabsList>
              
              {useCases.map((useCase, index) => (
                <TabsContent 
                  key={index} 
                  value={index === 0 ? "pme" : index === 1 ? "grands-comptes" : "centres-appels"} 
                  className="p-8 border rounded-xl bg-white shadow-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-start gap-6 mb-6">
                        <div className="bg-primary-100 p-3 rounded-full">
                          {useCase.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
                          <p className="text-gray-600 mt-2">{useCase.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-6">
                        {useCase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="bg-primary-100 text-primary p-1 rounded-full mt-1 flex-shrink-0">
                              <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                      <img 
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-primary-100 text-primary mb-4 py-1 px-4">NOTRE MÉTHODOLOGIE</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-600 text-transparent bg-clip-text">Une implémentation en 4 étapes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Notre approche méthodique garantit une transition en douceur vers votre nouvelle solution de téléphonie IP, avec un minimum de perturbations pour votre activité.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary-600 rounded-full"></div>
              
              {[
                {
                  title: "Analyse des besoins",
                  description: "Évaluation complète de vos besoins en communication et de votre infrastructure existante.",
                  icon: <MessageSquare className="h-6 w-6" />,
                  image: "/images/services/unrecognizable-black-lady-sitting-desk-office-night-writing-journal.jpg"
                },
                {
                  title: "Conception de solution",
                  description: "Élaboration d'une solution personnalisée adaptée à vos exigences spécifiques.",
                  icon: <Settings className="h-6 w-6" />,
                  image: "/images/services/man-working-desk-flat-lay_32987897.jpg"
                },
                {
                  title: "Déploiement",
                  description: "Installation et configuration de votre nouveau système avec une transition progressive.",
                  icon: <Zap className="h-6 w-6" />,
                  image: "/images/services/side-view-woman-working-with-wires.jpg"
                },
                {
                  title: "Formation et support",
                  description: "Formation des utilisateurs et support continu pour garantir une utilisation optimale.",
                  icon: <Shield className="h-6 w-6" />,
                  image: "/images/services/closeup-wireless-headphones-african-american-woman-video-call-with-startup-owner-team-members-selective-focus-headset-job-seeker-online-interview-using-pc-home.jpg"
                }
              ].map((step, index) => (
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
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary z-10"></div>
                    
                    {/* Content */}
                    <div className="w-1/2">
                      <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                      <div className={`inline-flex items-center rounded-full px-6 py-2 mb-4 ${index % 2 === 0 ? 'bg-primary-100 text-primary' : 'bg-primary-100 text-primary'}`}>
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

      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-tl from-gray-900 via-primary/90 to-blue-900">
          <div className="container mx-auto px-4">
              <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                      <div className="p-12 md:p-16">
                          <Badge className="bg-yellow-500 text-primary-900 mb-6 px-4 py-1 rounded-full font-medium">COMMENCEZ MAINTENANT</Badge>
                          <h2 className="text-4xl font-bold mb-6 text-white">Prêt à transformer votre infrastructure IT?</h2>
                          <p className="mb-8 text-white/90 text-lg">
                              Contactez nos experts dès aujourd'hui pour une consultation gratuite et découvrez
                              comment CGUITECH peut accompagner votre entreprise vers l'excellence technologique.
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
                              src="/images/services/woman-with-headset-laptop-working-from-home_23-2148708942.avif"
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