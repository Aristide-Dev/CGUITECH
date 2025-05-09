import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle2, 
  Cloud, 
  Server, 
  Database, 
  Lock, 
  FileText, 
  BarChart, 
  ArrowUp, 
  ChevronRight,
  Shield,
  Zap,
  ArrowRight,
  Globe,
  PhoneCall
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { CGUITECH } from '@/utils';

export default function CloudService() {
  const cloudSolutions = [
    {
      title: "Infrastructure as a Service (IaaS)",
      description: "Ressources de calcul, stockage et réseau évolutives selon vos besoins.",
      icon: <Server className="h-8 w-8" />,
      features: [
        "Provisionnement rapide",
        "Paiement à l'usage",
        "Haute disponibilité",
        "Centres de données géoredondants",
        "Évolutivité dynamique",
        "Résilience maximale"
      ],
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Platform as a Service (PaaS)",
      description: "Environnements de développement et de déploiement pour vos applications.",
      icon: <Database className="h-8 w-8" />,
      features: [
        "Environnements préconfigurés",
        "Intégration continue",
        "Services de base de données",
        "Mise à l'échelle automatique",
        "Déploiement simplifié",
        "Outils de développement intégrés"
      ],
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "Software as a Service (SaaS)",
      description: "Applications cloud prêtes à l'emploi accessibles partout et à tout moment.",
      icon: <FileText className="h-8 w-8" />,
      features: [
        "Bureautique en ligne",
        "CRM et ERP",
        "Outils collaboratifs",
        "Sauvegardes automatiques",
        "Accessibilité multi-appareils",
        "Mises à jour automatiques"
      ],
      color: "from-green-600 to-green-800"
    },
    {
      title: "Cloud sécurisé & conformité",
      description: "Protection des données et conformité aux normes et réglementations.",
      icon: <Lock className="h-8 w-8" />,
      features: [
        "Chiffrement des données",
        "Conformité RGPD",
        "Audits réguliers",
        "Contrôle d'accès avancé",
        "Protection contre les menaces",
        "Surveillance continue"
      ],
      color: "from-orange-600 to-orange-800"
    }
  ];

  // Données pour les avantages du cloud
  const cloudBenefits = [
    {
      title: "Réduction des coûts",
      description: "Éliminez les dépenses d'infrastructure matérielle et les coûts associés à la maintenance des serveurs physiques.",
      icon: <BarChart className="h-8 w-8 text-primary-600 flex-shrink-0" />,
      stats: "Jusqu'à 60% d'économies"
    },
    {
      title: "Flexibilité maximale",
      description: "Accédez à vos données et applications depuis n'importe où, permettant le travail à distance et la mobilité sans contraintes.",
      icon: <Globe className="h-8 w-8 text-primary-600 flex-shrink-0" />,
      stats: "Accès 24/7"
    },
    {
      title: "Évolutivité instantanée",
      description: "Adaptez facilement vos ressources informatiques en fonction de la croissance de votre entreprise et de vos besoins ponctuels.",
      icon: <ArrowUp className="h-8 w-8 text-primary-600 flex-shrink-0" />,
      stats: "Évolutivité illimitée"
    },
    {
      title: "Sécurité renforcée",
      description: "Bénéficiez de mesures de sécurité avancées pour protéger vos données contre les cybermenaces et les pertes accidentelles.",
      icon: <Shield className="h-8 w-8 text-primary-600 flex-shrink-0" />,
      stats: "Protection 24/7"
    }
  ];

  // Données pour le processus de migration
  const migrationProcess = [
    {
      number: "01",
      title: "Évaluation et planification",
      description: "Analyse approfondie de votre infrastructure existante et élaboration d'une stratégie de migration personnalisée.",
    },
    {
      number: "02",
      title: "Préparation de l'environnement",
      description: "Configuration de l'environnement cloud et mise en place des mesures de sécurité nécessaires.",
    },
    {
      number: "03",
      title: "Migration des données",
      description: "Transfert sécurisé de vos données et applications vers la plateforme cloud.",
    },
    {
      number: "04",
      title: "Tests et optimisation",
      description: "Vérification du bon fonctionnement et optimisation des performances.",
    },
    {
      number: "05",
      title: "Formation et support",
      description: "Formation de vos équipes et accompagnement continu pour assurer une utilisation optimale.",
    }
  ];

  return (
    <PublicLayout
      title="Solutions Cloud | CGUITECH"
      description="Découvrez nos solutions cloud sécurisées et évolutives adaptées aux besoins de votre entreprise pour stocker, gérer et traiter vos données."
    >
      {/* Hero Section - Style plus moderne avec design asymétrique */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services/african-woman-typing-laptop-cloud-service-hologram-files-backup-isolated-with-white.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Formes géométriques flottantes */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-white/30 hover:bg-white/40 text-white mb-6 py-2 px-4 text-sm uppercase tracking-wide backdrop-blur-sm">Solutions Cloud</Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-violet-100">
                Infrastructure cloud flexible et sécurisée
              </span>
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl">
              Optimisez vos opérations avec nos solutions cloud évolutives, vous permettant d'accéder à vos données et applications en toute sécurité, partout et à tout moment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white hover:bg-white/90 text-primary-600 font-medium text-lg px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
                Demander un devis gratuit
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 rounded-xl backdrop-blur-sm">
                Découvrir nos offres
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
              <h2 className="text-4xl font-bold mb-8 leading-tight">Transformez votre entreprise avec le <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">cloud</span></h2>
              <p className="text-primary-900 mb-8 leading-relaxed text-lg">
                Chez CGUITECH, nous proposons des solutions cloud complètes qui permettent aux entreprises de toutes tailles de bénéficier de la flexibilité, de l'évolutivité et de la sécurité qu'offre le cloud computing.
              </p>
              <p className="text-primary-800 mb-10 leading-relaxed text-lg">
                Que vous souhaitiez migrer entièrement vers le cloud, adopter une approche hybride ou simplement utiliser certains services cloud spécifiques, notre équipe d'experts vous accompagne tout au long du processus pour assurer une transition en douceur et optimiser vos investissements technologiques.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Zap className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Réduction des coûts</h3>
                    <p className="text-primary-700 mt-1">Optimisation des ressources</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <ArrowUp className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Évolutivité totale</h3>
                    <p className="text-primary-700 mt-1">Adaptable à vos besoins</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Globe className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Accessibilité globale</h3>
                    <p className="text-primary-700 mt-1">Travaillez de partout</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Shield className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Sécurité renforcée</h3>
                    <p className="text-primary-700 mt-1">Protection optimale</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-violet-600/10 rounded-3xl transform rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/images/services/woman-using-tablet-upload-with-cloud-icon-hologram-effect.jpg"
                  alt="Solutions cloud professionnelles"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions - Cards avec effet de survol */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Nos solutions</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Solutions cloud adaptées à vos besoins</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Découvrez notre gamme complète de solutions cloud conçues pour répondre aux besoins spécifiques de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudSolutions.map((solution, index) => (
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

      {/* Avantages du cloud */}
      <section className="py-24 bg-gradient-to-b from-primary-100 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2 relative">
              <div className="absolute -inset-4 bg-primary-600/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-primary-700/10 rounded-3xl transform -rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/services/technology-concept-with-futuristic-element.jpg"
                  alt="Avantages du cloud computing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Badge className="bg-primary-50 text-primary-600 mb-6 uppercase tracking-wide font-medium">Avantages</Badge>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Pourquoi choisir le cloud?</h2>
              <p className="text-primary-800 mb-8 leading-relaxed text-lg">
                L'adoption du cloud offre des avantages considérables pour les entreprises de toutes tailles. Notre infrastructure cloud vous permet d'optimiser vos ressources, d'améliorer votre agilité et de réduire vos coûts informatiques.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cloudBenefits.map((benefit, index) => (
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

      {/* Notre processus de migration - Timeline moderne */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Notre processus</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Comment nous migrons votre infrastructure vers le cloud</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Notre approche méthodique garantit une transition en douceur vers le cloud, minimisant les perturbations et maximisant les avantages pour votre entreprise.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {migrationProcess.map((step, index) => (
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
                Prêt à passer au cloud ?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment nos solutions cloud peuvent transformer votre entreprise.
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