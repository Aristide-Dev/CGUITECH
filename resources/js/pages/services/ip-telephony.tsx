import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Phone, Video, Headphones, Save, Users, Building, Settings, CircleDollarSign, ArrowRight, ChevronRight, Shield, Clock, TrendingUp, Globe, MessageSquare, Zap } from 'lucide-react';
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
      image: "https://img.freepik.com/premium-psd/modern-black-office-phone-with-red-accents-displaying-message_632498-44148.jpg?w=826",
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
      image: "https://img.freepik.com/free-photo/company-worker-talking-online-videoconference-using-teleconference-meeting-with-colleagues-webcam-chatting-remote-videocall-conference-computer-working-remotely-home_482257-50220.jpg?t=st=1746022046~exp=1746025646~hmac=03bc06dce55333dd178269d16f305db2040356dea9dd42b7cc6b382c75c9f647&w=1380",
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
      image: "https://img.freepik.com/free-photo/operator-answering-client-phone-call-customer-care-service-helping-people-call-center-support-male-receptionist-giving-telemarketing-assistance-phone-helpline-office_482257-47212.jpg?t=st=1746022252~exp=1746025852~hmac=0d5ba1ee131cd7121ab39de80b74a20e6b6c37214536bdd0814b968d880194c0&w=1380",
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
      image: "https://img.freepik.com/premium-vector/call-center-support-young-woman-with-headphones-different-internet-technology-icons-her_768258-3558.jpg?w=826",
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
      image: "https://img.freepik.com/premium-photo/african-man-holding-come-money-doing-paperwork-also_216356-629.jpg?w=1380",
      stats: "60% d'économies"
    },
    {
      title: "Mobilité et flexibilité",
      description: "Accédez à votre système téléphonique de n'importe où, permettant le télétravail et la continuité des activités.",
      icon: <Users className="h-6 w-6 text-primary" />,
      image: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-gesticulating_273609-40358.jpg?t=st=1746022605~exp=1746026205~hmac=ad793013bf1a1b7cd6a1203625e3b60884cf4edb531bbaa7676abb57b005b2d7&w=1380",
      stats: "100% mobile"
    },
    {
      title: "Évolutivité",
      description: "Ajoutez ou supprimez facilement des lignes selon vos besoins, sans investissement matériel majeur.",
      icon: <Building className="h-6 w-6 text-primary" />,
      image: "https://img.freepik.com/premium-photo/man-looking-bills-while-using-mobile-phone-desk-bedroom-comfortable-home_13339-359256.jpg?w=740",
      stats: "Évolutif à l'infini"
    },
    {
      title: "Fonctionnalités avancées",
      description: "Accédez à des fonctionnalités professionnelles comme les standards automatiques, le routage intelligent et la messagerie unifiée.",
      icon: <Save className="h-6 w-6 text-primary" />,
      image: "https://img.freepik.com/free-photo/woman-protecting-safeguarding-her-identity-passwords-from-spyware_482257-83357.jpg?t=st=1746022739~exp=1746026339~hmac=651d32bb62222fa2ba79ac2604aeb9e20ff70b8dc4fb4d093e9026504670af8f&w=1380",
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
      icon: <Headphones className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <PublicLayout
      title="Téléphonie IP & Communications Unifiées | CGUITECH"
      description="Solutions de téléphonie IP et communications unifiées pour votre entreprise. Services VoIP, visioconférence, centres d'appels et communications unifiées."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 py-32 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm backdrop-blur-sm">TÉLÉPHONIE IP</Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Communications d'entreprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">intelligentes</span></h1>
              <p className="text-xl opacity-90 mb-12 leading-relaxed max-w-2xl">
                Des solutions de téléphonie IP et de communications unifiées pour rendre vos échanges professionnels plus efficaces et économiques.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={route('contact.index')} className="bg-white text-primary-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg shadow-lg shadow-primary-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/30">
                  Contactez-nous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Button variant="outline" className="border-white/50 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm">
                  Découvrir nos solutions
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <img 
                src="/images/services/ip-telephony/hero-image.jpg" 
                alt="Solutions de téléphonie IP" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Abstract shape divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70">
          <svg className="absolute bottom-0 w-full h-32 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

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
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img 
                  src="/images/services/ip-telephony/stats-1.svg" 
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
                  src="/images/services/ip-telephony/stats-2.svg" 
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
                  src="/images/services/ip-telephony/stats-3.svg" 
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
                  src="/images/services/ip-telephony/stats-4.svg" 
                  alt="Économies réalisées" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-gray-600">Économies réalisées</div>
            </motion.div>
          </div>
        </div>
      </section>

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
                        src={`/images/services/ip-telephony/use-case-${index + 1}.jpg`}
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
                  image: "/images/services/ip-telephony/step-1.jpg"
                },
                {
                  title: "Conception de solution",
                  description: "Élaboration d'une solution personnalisée adaptée à vos exigences spécifiques.",
                  icon: <Settings className="h-6 w-6" />,
                  image: "/images/services/ip-telephony/step-2.jpg"
                },
                {
                  title: "Déploiement",
                  description: "Installation et configuration de votre nouveau système avec une transition progressive.",
                  icon: <Zap className="h-6 w-6" />,
                  image: "/images/services/ip-telephony/step-3.jpg"
                },
                {
                  title: "Formation et support",
                  description: "Formation des utilisateurs et support continu pour garantir une utilisation optimale.",
                  icon: <Shield className="h-6 w-6" />,
                  image: "/images/services/ip-telephony/step-4.jpg"
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-600 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-white/20 text-white mb-6 py-1 px-4 backdrop-blur-sm">COMMENCER MAINTENANT</Badge>
              <h2 className="text-4xl font-bold mb-6">Prêt à moderniser vos communications ?</h2>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins en téléphonie IP et découvrir comment nous pouvons vous aider à optimiser vos communications d'entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={route('contact.index')} className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg shadow-lg shadow-primary-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/30">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Button variant="outline" className="border-white/50 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm">
                  Consulter notre portfolio
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <img 
                src="https://img.freepik.com/free-photo/woman-with-headset-laptop-working-from-home_23-2148708942.jpg?t=st=1746022908~exp=1746026508~hmac=206c118c7d04cd2d1411c06cb9dc6a26544278e4172181c710da186ea527ff9c&w=996" 
                alt="Contactez-nous" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
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