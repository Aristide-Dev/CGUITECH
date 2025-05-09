import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle2, 
  Phone, 
  Headphones, 
  PhoneCall, 
  ArrowRight, 
  Globe, 
  Cloud, 
  LucideHeadphones, 
  Building, 
  Video,
  Shield,
  ChevronRight,
  Clock,
  Smartphone,
  Zap,
  Users,
  BarChart,
  Wifi
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { CGUITECH } from '@/utils';

export default function IPTelephonyService() {
  // Solutions de téléphonie IP
  const telephonySolutions = [
    {
      title: "Centrex IP",
      description: "Solution de téléphonie hébergée dans le cloud, offrant une flexibilité et une mobilité maximales.",
      icon: <Cloud className="h-8 w-8" />,
      features: [
        "Aucun investissement matériel lourd",
        "Mise à jour automatique des fonctionnalités",
        "Accessible partout via Internet",
        "Nombre d'utilisateurs flexible",
        "Maintenance simplifiée",
        "Service haute disponibilité"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "IPBX Physique",
      description: "Solution locale avec un contrôle total de votre infrastructure de communication d'entreprise.",
      icon: <Building className="h-8 w-8" />,
      features: [
        "Contrôle total de votre infrastructure",
        "Personnalisation avancée",
        "Intégration CRM et ERP",
        "Communications sécurisées et chiffrées",
        "Support multi-sites",
        "Capacité évolutive"
      ],
      color: "from-green-600 to-green-700"
    },
    {
      title: "Communications Unifiées",
      description: "Plateforme intégrée combinant téléphonie, messagerie, visioconférence et partage de documents.",
      icon: <Headphones className="h-8 w-8" />,
      features: [
        "Interface unique pour toutes les communications",
        "Visioconférence HD intégrée",
        "Collaboration en temps réel",
        "Messagerie instantanée professionnelle",
        "Présence et disponibilité",
        "Accessibilité sur tous les appareils"
      ],
      color: "from-purple-600 to-purple-700"
    },
    {
      title: "Vidéoconférence",
      description: "Solution de vidéoconférence professionnelle pour des réunions virtuelles et collaborations à distance efficaces.",
      icon: <Video className="h-8 w-8" />,
      features: [
        "Qualité vidéo HD et audio cristallin",
        "Partage d'écran et annotations",
        "Enregistrement des réunions",
        "Intégration avec calendriers",
        "Salles virtuelles sécurisées",
        "Support pour grands groupes"
      ],
      color: "from-orange-600 to-orange-700"
    }
  ];

  // Avantages de la téléphonie IP
  const telephonyBenefits = [
    {
      title: "Réduction des coûts",
      description: "Économisez jusqu'à 60% sur vos coûts de communication avec des appels illimités et une infrastructure rationalisée.",
      icon: <BarChart className="h-6 w-6" />,
      stats: "60%"
    },
    {
      title: "Mobilité accrue",
      description: "Restez connecté partout avec des solutions accessibles depuis n'importe quel appareil connecté à internet.",
      icon: <Smartphone className="h-6 w-6" />,
      stats: "100%"
    },
    {
      title: "Communication unifiée",
      description: "Centralisez tous vos canaux de communication en une seule plateforme intuitive et efficace.",
      icon: <Headphones className="h-6 w-6" />,
      stats: "24/7"
    },
    {
      title: "Évolutivité",
      description: "Ajoutez ou supprimez des utilisateurs facilement sans matériel supplémentaire ni intervention technique lourde.",
      icon: <Users className="h-6 w-6" />,
      stats: "∞"
    }
  ];

  // Fonctionnalités avancées
  const advancedFeatures = [
    {
      title: "Messagerie vocale avancée",
      description: "Réception des messages vocaux par email, transcription de messages et notification multi-canal.",
      icon: <PhoneCall className="h-10 w-10 text-primary-600" />
    },
    {
      title: "Conférence audio et vidéo",
      description: "Organisation de conférences professionnelles avec partage d'écran, enregistrement et modération.",
      icon: <Video className="h-10 w-10 text-primary-600" />
    },
    {
      title: "Intégration CRM",
      description: "Synchronisation avec vos outils CRM pour une gestion client optimisée et un suivi des interactions complet.",
      icon: <Users className="h-10 w-10 text-primary-600" />
    },
    {
      title: "Routage intelligent d'appels",
      description: "Distribution automatique des appels selon des règles personnalisées, files d'attente intelligentes et priorités.",
      icon: <Wifi className="h-10 w-10 text-primary-600" />
    },
    {
      title: "Applications mobiles dédiées",
      description: "Utilisation de votre système téléphonique professionnel depuis n'importe où via des applications pour smartphone.",
      icon: <Smartphone className="h-10 w-10 text-primary-600" />
    },
    {
      title: "Analyse et rapports",
      description: "Suivi détaillé des performances, statistiques d'appels et tableaux de bord personnalisables.",
      icon: <BarChart className="h-10 w-10 text-primary-600" />
    }
  ];

  return (
    <PublicLayout
      title="Solutions de Téléphonie IP | CGUITECH"
      description="Solutions de téléphonie IP professionnelles pour entreprises : centrex IP, IPBX, communications unifiées et visioconférence."
    >
      {/* Hero Section - Design moderne avec overlay et éléments asymétriques */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services/contact-cta.jpg')] bg-cover bg-center"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-700/80 to-primary-800/90"></div> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Formes géométriques flottantes */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-blue-300/10 blur-3xl animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-white/30 hover:bg-white/40 text-white mb-6 py-2 px-4 text-sm uppercase tracking-wide backdrop-blur-sm">Téléphonie IP</Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-violet-100">
                Communication d'entreprise nouvelle génération
              </span>
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl">
              Des solutions de communication modernes, flexibles et économiques pour connecter votre entreprise au monde entier.
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
              <h2 className="text-4xl font-bold mb-8 leading-tight">Téléphonie IP <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">de nouvelle génération</span></h2>
              <p className="text-primary-900 mb-6 leading-relaxed text-lg">
                Chez CGUITECH, nous déployons des solutions de téléphonie IP qui transforment la façon dont votre entreprise communique, en alliant technologie avancée et simplicité d'utilisation.
              </p>
              <p className="text-primary-800 mb-10 leading-relaxed text-lg">
                Nos solutions s'adaptent parfaitement aux besoins spécifiques de votre entreprise, qu'il s'agisse d'une petite structure ou d'une organisation multi-sites, avec un focus sur la qualité, la fiabilité et la sécurité.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <PhoneCall className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Qualité vocale HD</h3>
                    <p className="text-primary-700 mt-1">Communications cristallines</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Shield className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Communications sécurisées</h3>
                    <p className="text-primary-700 mt-1">Chiffrement de bout en bout</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Zap className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Installation rapide</h3>
                    <p className="text-primary-700 mt-1">Déploiement en 48h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Clock className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Support 24/7</h3>
                    <p className="text-primary-700 mt-1">Assistance permanente</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-violet-600/10 rounded-3xl transform rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/images/services/group-afro-americans-working-together.jpg"
                  alt="Solutions de téléphonie IP professionnelles"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions de téléphonie IP - Cards avec effet de survol */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Nos solutions</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Solutions de téléphonie IP complètes</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Nous proposons une gamme complète de solutions de téléphonie IP pour répondre à tous les besoins de communication de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {telephonySolutions.map((solution, index) => (
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

      {/* Avantages de la téléphonie IP */}
      <section className="py-24 bg-gradient-to-b from-primary-100 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2 relative">
              <div className="absolute -inset-4 bg-primary-600/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-primary-700/10 rounded-3xl transform -rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/services/smiling-customer-service-agent.jpg"
                  alt="Avantages de la téléphonie IP"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Badge className="bg-primary-50 text-primary-600 mb-6 uppercase tracking-wide font-medium">Avantages</Badge>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Pourquoi passer à la téléphonie IP ?</h2>
              <p className="text-primary-800 mb-8 leading-relaxed text-lg">
                La téléphonie IP offre de nombreux avantages par rapport aux systèmes téléphoniques traditionnels, en termes de coûts, de flexibilité et de fonctionnalités avancées.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {telephonyBenefits.map((benefit, index) => (
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

      {/* Fonctionnalités avancées */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Fonctionnalités</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Fonctionnalités avancées</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Nos solutions de téléphonie IP intègrent de nombreuses fonctionnalités avancées pour optimiser vos communications d'entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-primary-100 flex flex-col items-center text-center">
                <div className="bg-primary-50 p-5 rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary-800">{feature.title}</h3>
                <p className="text-primary-700">{feature.description}</p>
              </div>
            ))}
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
                Prêt à moderniser vos communications ?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins en téléphonie IP et découvrir comment nos solutions peuvent transformer votre entreprise.
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