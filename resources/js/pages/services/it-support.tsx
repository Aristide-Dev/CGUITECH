import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Clock, UserRound, PieChart, Shield, Cpu, HelpCircle, BarChart, ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { CGUITECH } from '@/utils';

export default function ITSupportService() {
  // Données pour les services de support
  const supportServices = [
    {
      title: "Support à distance",
      description: "Assistance technique à distance pour résoudre rapidement vos problèmes informatiques.",
      icon: <UserRound className="h-8 w-8 text-primary" />,
      features: [
        "Diagnostic et résolution à distance",
        "Accessibilité étendue (téléphone, email, chat)",
        "Assistance par des techniciens qualifiés",
        "Disponibilité selon vos besoins"
      ]
    },
    {
      title: "Support sur site",
      description: "Intervention sur place pour les problèmes nécessitant une présence physique.",
      icon: <Clock className="h-8 w-8 text-primary" />,
      features: [
        "Intervention rapide sur site",
        "Résolution des problèmes matériels complexes",
        "Maintenance préventive régulière",
        "Assistance dédiée à votre équipe"
      ]
    },
    {
      title: "Helpdesk",
      description: "Un service de support structuré pour répondre efficacement à tous vos besoins informatiques.",
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
      features: [
        "Centre de support centralisé",
        "Système de tickets pour suivi des demandes",
        "Différents niveaux d'assistance",
        "Reporting détaillé"
      ]
    }
  ];

  // Données pour les niveaux de support
  const supportLevels = [
    {
      title: "Niveau 1",
      description: "Support de première ligne pour les problèmes courants et les demandes générales.",
      tasks: [
        "Prise en charge des appels et demandes",
        "Résolution des problèmes de base",
        "Réinitialisation de mots de passe",
        "Support pour les applications standard"
      ]
    },
    {
      title: "Niveau 2",
      description: "Support technique avancé pour les problèmes plus complexes.",
      tasks: [
        "Dépannage approfondi des systèmes",
        "Résolution des problèmes réseau",
        "Configuration des équipements",
        "Support pour les applications spécialisées"
      ]
    },
    {
      title: "Niveau 3",
      description: "Support expert pour les problèmes hautement techniques et les projets spéciaux.",
      tasks: [
        "Résolution des problèmes critiques",
        "Consultation pour l'infrastructure IT",
        "Conception de solutions personnalisées",
        "Expertise pour les technologies complexes"
      ]
    }
  ];

  return (
    <PublicLayout
      title="Support Informatique | CGUITECH"
      description="Services de support informatique professionnels pour garantir le bon fonctionnement de vos systèmes IT. Support à distance, sur site et helpdesk complets."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services/services-it-supports.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-primary-300/20 blur-3xl animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-white/30 hover:bg-white/40 text-white mb-6 py-2 px-4 text-sm uppercase tracking-wide backdrop-blur-sm">Support IT</Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-primary-200">
                Support informatique professionnel
              </span>
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl">
              Une assistance technique complète pour garantir le bon fonctionnement de vos systèmes informatiques et maintenir votre productivité.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white hover:bg-white/90 text-primary-600 font-medium text-lg px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
                Contactez-nous
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 rounded-xl backdrop-blur-sm">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary-50 text-primary-600 mb-6 uppercase tracking-wide font-medium">Notre approche</Badge>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Un support réactif à vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">problèmes informatiques</span></h2>
              <p className="text-primary-900 mb-8 leading-relaxed text-lg">
                Les problèmes informatiques peuvent sérieusement impacter votre productivité et votre activité. Chez CGUITECH, nous comprenons l'importance d'un support informatique réactif et efficace pour minimiser les temps d'arrêt et assurer la continuité de vos opérations.
              </p>
              <p className="text-primary-800 mb-10 leading-relaxed text-lg">
                Notre équipe de techniciens certifiés est disponible pour vous fournir une assistance de qualité, que ce soit à distance ou sur site, avec des solutions adaptées à vos besoins spécifiques et à votre budget.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <CheckCircle2 className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Support multi-niveaux</h3>
                    <p className="text-primary-700 mt-1">Solutions adaptées</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <CheckCircle2 className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Techniciens certifiés</h3>
                    <p className="text-primary-700 mt-1">Expertise garantie</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <CheckCircle2 className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Réponse rapide</h3>
                    <p className="text-primary-700 mt-1">Support réactif</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <CheckCircle2 className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Solutions personnalisées</h3>
                    <p className="text-primary-700 mt-1">Adaptées à vos besoins</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-600/10 rounded-3xl transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-primary-700/10 rounded-3xl transform rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/images/services/woman-having-online-meeting-work.jpg"
                  alt="Support informatique professionnel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Nos services</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Solutions de support adaptées à vos besoins</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Nous proposons différentes options de support informatique pour répondre aux besoins spécifiques de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niveaux de support */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Niveaux de support</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Support technique multi-niveaux</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Notre structure de support à plusieurs niveaux garantit que vos problèmes sont traités efficacement par des techniciens ayant l'expertise appropriée.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="niveau1" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-white p-1 rounded-xl shadow-sm">
                {supportLevels.map((level, index) => (
                  <TabsTrigger 
                    key={index} 
                    value={`niveau${index+1}`}
                    className="data-[state=active]:bg-primary-600 data-[state=active]:text-white rounded-lg transition-all"
                  >
                    {level.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {supportLevels.map((level, index) => (
                <TabsContent 
                  key={index} 
                  value={`niveau${index+1}`} 
                  className="p-8 rounded-2xl bg-white shadow-lg border border-primary-100"
                >
                  <h3 className="text-2xl font-bold mb-4 text-primary-900">{level.title}</h3>
                  <p className="text-primary-700 mb-8">{level.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {level.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-primary-50/50">
                        <CheckCircle2 className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                        <span className="text-primary-800">{task}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Avantages du support informatique */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Avantages</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Pourquoi choisir notre support informatique ?</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Un support informatique professionnel offre de nombreux avantages pour votre entreprise, bien au-delà de la simple résolution de problèmes techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-primary-600" />,
                title: "Réduction des temps d'arrêt",
                description: "Minimisez les interruptions de service grâce à une résolution rapide des problèmes techniques."
              },
              {
                icon: <PieChart className="h-8 w-8 text-primary-600" />,
                title: "Amélioration de la productivité",
                description: "Permettez à vos employés de se concentrer sur leur travail plutôt que sur les problèmes informatiques."
              },
              {
                icon: <Shield className="h-8 w-8 text-primary-600" />,
                title: "Sécurité renforcée",
                description: "Bénéficiez d'une surveillance constante et d'une protection contre les menaces informatiques."
              },
              {
                icon: <BarChart className="h-8 w-8 text-primary-600" />,
                title: "Coûts prévisibles",
                description: "Maîtrisez votre budget IT avec des forfaits de support à tarifs fixes et sans surprises."
              }
            ].map((advantage, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-primary-700/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="p-8 relative z-10">
                  <div className="bg-primary-50 text-primary-600 p-4 rounded-2xl inline-flex mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-800 group-hover:text-primary-600 transition-colors">{advantage.title}</h3>
                  <p className="text-primary-700">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre expertise */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-600/10 rounded-3xl transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-primary-700/10 rounded-3xl transform rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/images/services/study-group-african-people.jpg"
                  alt="Techniciens qualifiés"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <Badge className="bg-primary-50 text-primary-600 mb-6 uppercase tracking-wide font-medium">Notre expertise</Badge>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Une équipe de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">techniciens qualifiés</span></h2>
              <p className="text-primary-900 mb-8 leading-relaxed text-lg">
                Nos techniciens en support informatique sont certifiés dans les technologies les plus récentes et bénéficient d'une formation continue pour maintenir leur expertise à jour.
              </p>
              <p className="text-primary-800 mb-10 leading-relaxed text-lg">
                Que ce soit pour résoudre des problèmes complexes de réseau, de sécurité ou de matériel, notre équipe dispose des compétences nécessaires pour fournir des solutions efficaces et durables.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Cpu className="h-8 w-8 text-primary-600" />,
                    title: "Expertise matérielle",
                    description: "Diagnostic et réparation d'ordinateurs, serveurs, imprimantes et autres équipements informatiques."
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-primary-600" />,
                    title: "Expertise logicielle",
                    description: "Support pour les systèmes d'exploitation, applications professionnelles et logiciels spécialisés."
                  },
                  {
                    icon: <HelpCircle className="h-8 w-8 text-primary-600" />,
                    title: "Formation utilisateur",
                    description: "Formation et assistance aux utilisateurs pour améliorer leur efficacité avec les outils informatiques."
                  }
                ].map((expertise, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                    <div className="bg-primary-50 p-3 rounded-xl">
                      {expertise.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary-800 mb-2">{expertise.title}</h3>
                      <p className="text-primary-700">{expertise.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        {/* Éléments décoratifs de fond */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/80 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-70 h-70 bg-white/50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container mx-auto px-2 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-2 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Besoin d'assistance IT immédiate ?</h2>
                <p className="text-lg text-white/90 mb-8">
                  Notre équipe de support technique est disponible pour résoudre vos problèmes rapidement et efficacement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={route('contact.index')} className="bg-white hover:bg-white/90 text-primary-600 font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-all hover:shadow-lg">
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
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/80 to-transparent rounded-2xl"></div>
                <img 
                  src="/images/services/server-hub-supervisor-scolding-worker-unable-properly-optimize-code.jpg" 
                  alt="Support IT professionnel" 
                  className="w-full h-auto rounded-2xl shadow-xl object-cover" 
                />
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