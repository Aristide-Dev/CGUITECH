import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Server, Database, Network, Shield, Cloud, HardDrive, Lock } from 'lucide-react';

export default function InfrastructureService() {
  // Données pour les solutions d'infrastructure
  const infrastructureSolutions = [
    {
      title: "Serveurs & Stockage",
      description: "Solutions de serveurs et de stockage fiables et évolutives pour tous vos besoins en données.",
      icon: <Server className="h-8 w-8 text-primary" />,
      features: [
        "Configuration de serveurs haute disponibilité",
        "Solutions SAN et NAS évolutives",
        "Systèmes de sauvegarde sécurisés",
        "Infrastructure hyperconvergée"
      ]
    },
    {
      title: "Virtualisation",
      description: "Optimisez vos ressources informatiques avec nos solutions de virtualisation de pointe.",
      icon: <Cloud className="h-8 w-8 text-primary" />,
      features: [
        "Virtualisation de serveurs (VMware, Hyper-V)",
        "VDI (Virtual Desktop Infrastructure)",
        "Conteneurisation (Docker, Kubernetes)",
        "Consolidation des serveurs"
      ]
    },
    {
      title: "Réseaux & Connectivité",
      description: "Solutions de réseau performantes pour connecter efficacement votre infrastructure.",
      icon: <Network className="h-8 w-8 text-primary" />,
      features: [
        "Réseaux LAN/WAN optimisés",
        "Architecture réseau sécurisée",
        "Solutions Wi-Fi d'entreprise",
        "SD-WAN pour une connectivité agile"
      ]
    },
    {
      title: "Data Center",
      description: "Conception et gestion de centres de données modernes et efficaces.",
      icon: <Database className="h-8 w-8 text-primary" />,
      features: [
        "Conception de centres de données",
        "Gestion thermique et énergétique",
        "Surveillance et maintenance",
        "Solutions de colocation"
      ]
    }
  ];

  // Données pour les avantages de notre infrastructure
  const infrastructureBenefits = [
    {
      title: "Fiabilité maximale",
      description: "Des composants et architectures sélectionnés pour garantir un temps de fonctionnement optimal et minimiser les interruptions.",
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />
    },
    {
      title: "Sécurité renforcée",
      description: "Protection complète contre les menaces internes et externes, avec une surveillance constante et des mises à jour régulières.",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      title: "Évolutivité",
      description: "Des solutions modulaires qui s'adaptent facilement à la croissance de votre entreprise sans nécessiter de refonte complète.",
      icon: <HardDrive className="h-6 w-6 text-primary" />
    },
    {
      title: "Performance optimisée",
      description: "Infrastructure conçue pour offrir des performances maximales adaptées à vos applications critiques et à vos besoins spécifiques.",
      icon: <Network className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <PublicLayout
      title="Services d'Infrastructure IT | CGUITech"
      description="Solutions d'infrastructure informatique robustes et évolutives pour votre entreprise : serveurs, stockage, virtualisation, réseaux et data center."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm">INFRASTRUCTURE</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Infrastructure IT robuste et évolutive</h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Des solutions d'infrastructure informatique fiables, sécurisées et performantes pour soutenir la croissance de votre entreprise.
            </p>
            <Button className="bg-white text-primary-600 hover:bg-white/90">
              Contactez-nous
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary-100 text-primary mb-6">NOTRE APPROCHE</Badge>
              <h2 className="text-3xl font-bold mb-6">Une infrastructure adaptée à vos besoins</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chez CGUITech, nous comprenons que chaque entreprise a des besoins uniques en matière d'infrastructure informatique. C'est pourquoi nous proposons des solutions personnalisées qui s'alignent parfaitement avec vos objectifs commerciaux et votre budget.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nos experts vous accompagnent à chaque étape, de la conception à la mise en œuvre, en passant par la maintenance et l'optimisation continue de votre infrastructure, pour garantir des performances optimales et une évolutivité sans faille.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Infrastructure sur mesure</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Support 24/7</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Solutions évolutives</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Maintenance proactive</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80"
                alt="Infrastructure informatique moderne"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions d'infrastructure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">NOS SOLUTIONS</Badge>
            <h2 className="text-3xl font-bold mb-6">Solutions d'infrastructure complètes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nous proposons une gamme complète de solutions d'infrastructure pour répondre à tous les besoins de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureSolutions.map((solution, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center text-center pb-2">
                  <div className="bg-primary-50 p-3 rounded-full mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{solution.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{solution.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-4">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cycle de vie de l'infrastructure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">CYCLE DE VIE</Badge>
            <h2 className="text-3xl font-bold mb-6">Gestion du cycle de vie de l'infrastructure</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nous assurons la gestion complète du cycle de vie de votre infrastructure, de la conception initiale à l'optimisation continue.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="conception" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="conception">Conception</TabsTrigger>
                <TabsTrigger value="deploiement">Déploiement</TabsTrigger>
                <TabsTrigger value="gestion">Gestion</TabsTrigger>
                <TabsTrigger value="optimisation">Optimisation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="conception" className="p-6 border rounded-lg bg-gray-50">
                <h3 className="text-2xl font-bold mb-4">Conception d'infrastructure</h3>
                <p className="text-gray-600 mb-6">
                  Nous concevons une infrastructure adaptée à vos besoins spécifiques, en tenant compte de vos objectifs commerciaux, de votre budget et de vos exigences futures.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Évaluation des besoins actuels et futurs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Architecture réseau sécurisée</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Dimensionnement des ressources</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Planification de la redondance</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="deploiement" className="p-6 border rounded-lg bg-gray-50">
                <h3 className="text-2xl font-bold mb-4">Déploiement d'infrastructure</h3>
                <p className="text-gray-600 mb-6">
                  Nous assurons un déploiement méthodique et contrôlé de votre infrastructure, en minimisant les perturbations et en garantissant une transition fluide.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Installation du matériel</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Configuration des systèmes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Tests de performance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Migration des données</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="gestion" className="p-6 border rounded-lg bg-gray-50">
                <h3 className="text-2xl font-bold mb-4">Gestion d'infrastructure</h3>
                <p className="text-gray-600 mb-6">
                  Nous prenons en charge la gestion quotidienne de votre infrastructure, en assurant sa disponibilité, sa sécurité et ses performances.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Surveillance proactive 24/7</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Maintenance préventive</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Gestion des incidents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Sauvegardes et récupération</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="optimisation" className="p-6 border rounded-lg bg-gray-50">
                <h3 className="text-2xl font-bold mb-4">Optimisation d'infrastructure</h3>
                <p className="text-gray-600 mb-6">
                  Nous optimisons en permanence votre infrastructure pour améliorer ses performances, sa fiabilité et sa rentabilité.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Analyse des performances</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Planification des capacités</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Mise à jour technologique</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Recommandations d'amélioration</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Avantages de notre infrastructure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">AVANTAGES</Badge>
            <h2 className="text-3xl font-bold mb-6">Pourquoi choisir notre infrastructure ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Notre approche de l'infrastructure IT offre de nombreux avantages pour votre entreprise, avec des solutions conçues pour maximiser la valeur et minimiser les risques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {infrastructureBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex gap-4">
                <div className="bg-primary-50 p-3 rounded-full h-fit">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sécurité de l'infrastructure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80"
                alt="Sécurité de l'infrastructure informatique"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Badge className="bg-primary-100 text-primary mb-6">SÉCURITÉ</Badge>
              <h2 className="text-3xl font-bold mb-6">Sécurité intégrée à chaque niveau</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                La sécurité est au cœur de notre approche en matière d'infrastructure IT. Nous intégrons des mesures de protection robustes à chaque niveau pour garantir l'intégrité, la confidentialité et la disponibilité de vos données et systèmes.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe d'experts en sécurité surveille en permanence les menaces émergentes et met en œuvre des stratégies proactives pour protéger votre infrastructure contre les attaques potentielles.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Lock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Protection périmétrique</h3>
                    <p className="text-gray-600">Pare-feu de nouvelle génération, systèmes de détection et de prévention des intrusions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Sécurité des données</h3>
                    <p className="text-gray-600">Chiffrement des données sensibles, contrôles d'accès stricts et audits réguliers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Server className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Continuité d'activité</h3>
                    <p className="text-gray-600">Solutions de sauvegarde et de récupération robustes, sites de reprise après sinistre.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à moderniser votre infrastructure IT ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en infrastructure IT et découvrir comment nous pouvons vous aider à construire une base technologique solide pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90">
              Demander un devis
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              En savoir plus
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
} 