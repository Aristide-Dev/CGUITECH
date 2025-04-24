import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Phone, Video, Headphones, Save, Users, Building, Settings, CircleDollarSign } from 'lucide-react';

export default function IPTelephonyService() {
  // Données pour les solutions de téléphonie IP
  const ipTelephonySolutions = [
    {
      title: "VoIP",
      description: "Systèmes de téléphonie sur IP pour des communications vocales claires et économiques.",
      icon: <Phone className="h-8 w-8 text-primary" />,
      features: [
        "Appels haute définition",
        "Numéros virtuels",
        "Messagerie vocale avancée",
        "Intégration avec votre CRM"
      ]
    },
    {
      title: "Visioconférence",
      description: "Solutions de visioconférence HD pour des réunions virtuelles efficaces.",
      icon: <Video className="h-8 w-8 text-primary" />,
      features: [
        "Vidéo haute définition",
        "Partage d'écran en temps réel",
        "Salles virtuelles sécurisées",
        "Enregistrement des réunions"
      ]
    },
    {
      title: "Centres d'appels",
      description: "Solutions de centres d'appels modernes pour améliorer l'expérience client.",
      icon: <Headphones className="h-8 w-8 text-primary" />,
      features: [
        "Distribution intelligente des appels",
        "Supervision en temps réel",
        "Rapports détaillés",
        "Intégration omnicanal"
      ]
    },
    {
      title: "Communications unifiées",
      description: "Plateforme intégrée regroupant tous vos outils de communication.",
      icon: <Settings className="h-8 w-8 text-primary" />,
      features: [
        "Messagerie instantanée d'entreprise",
        "Présence et statut",
        "Intégration mobile",
        "Solution tout-en-un"
      ]
    }
  ];

  // Données pour les avantages de la téléphonie IP
  const ipTelephonyBenefits = [
    {
      title: "Réduction des coûts",
      description: "Économisez jusqu'à 60% sur vos factures de téléphone grâce à des tarifs compétitifs et l'élimination des lignes physiques.",
      icon: <CircleDollarSign className="h-6 w-6 text-primary" />
    },
    {
      title: "Mobilité et flexibilité",
      description: "Accédez à votre système téléphonique de n'importe où, permettant le télétravail et la continuité des activités.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Évolutivité",
      description: "Ajoutez ou supprimez facilement des lignes selon vos besoins, sans investissement matériel majeur.",
      icon: <Building className="h-6 w-6 text-primary" />
    },
    {
      title: "Fonctionnalités avancées",
      description: "Accédez à des fonctionnalités professionnelles comme les standards automatiques, le routage intelligent et la messagerie unifiée.",
      icon: <Save className="h-6 w-6 text-primary" />
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
        "Interface de gestion intuitive"
      ]
    },
    {
      title: "Grandes Entreprises",
      description: "Solutions robustes et personnalisées pour les organisations complexes.",
      features: [
        "Infrastructure hautement disponible et redondante",
        "Intégration avec les systèmes d'entreprise existants",
        "Support multisite et international",
        "Analyses avancées et rapports détaillés"
      ]
    },
    {
      title: "Centres d'appels",
      description: "Solutions optimisées pour la gestion des volumes importants d'appels.",
      features: [
        "Distribution intelligente des appels (ACD)",
        "Surveillance et coaching en temps réel",
        "Enregistrements et évaluation de qualité",
        "Rapports de performance détaillés"
      ]
    }
  ];

  return (
    <PublicLayout
      title="Téléphonie IP & Communications Unifiées | CGUITech"
      description="Solutions de téléphonie IP et communications unifiées pour votre entreprise. Services VoIP, visioconférence, centres d'appels et communications unifiées."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm">TÉLÉPHONIE IP</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Communications d'entreprise modernes</h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Des solutions de téléphonie IP et de communications unifiées pour rendre vos échanges professionnels plus efficaces et économiques.
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
              <h2 className="text-3xl font-bold mb-6">Révolutionnez vos communications</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dans un monde où la communication est essentielle à la réussite des entreprises, la téléphonie IP et les solutions de communications unifiées offrent une alternative moderne et efficace aux systèmes traditionnels.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chez CGUITech, nous concevons des solutions sur mesure qui transforment la façon dont votre entreprise communique, en intégrant voix, vidéo, messagerie et collaboration dans une plateforme unifiée et accessible de partout.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Haute qualité vocale</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Réduction des coûts</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Installation rapide</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Support 24/7</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1599658880169-98e54db0e350?auto=format&fit=crop&q=80"
                alt="Communications unifiées"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions de téléphonie IP */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">NOS SOLUTIONS</Badge>
            <h2 className="text-3xl font-bold mb-6">Solutions de communications complètes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de solutions de téléphonie IP et de communications unifiées pour transformer vos échanges professionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ipTelephonySolutions.map((solution, index) => (
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

      {/* Avantages de la téléphonie IP */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">AVANTAGES</Badge>
            <h2 className="text-3xl font-bold mb-6">Pourquoi choisir la téléphonie IP ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              La téléphonie IP offre de nombreux avantages par rapport aux systèmes téléphoniques traditionnels, tant sur le plan financier que fonctionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ipTelephonyBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex gap-4">
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

      {/* Cas d'utilisation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">CAS D'UTILISATION</Badge>
            <h2 className="text-3xl font-bold mb-6">Solutions adaptées à vos besoins</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nos solutions de téléphonie IP s'adaptent à différents types d'entreprises et d'organisations, quelle que soit leur taille ou leur secteur d'activité.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="pme" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="pme">PME</TabsTrigger>
                <TabsTrigger value="grands-comptes">Grandes Entreprises</TabsTrigger>
                <TabsTrigger value="centres-appels">Centres d'appels</TabsTrigger>
              </TabsList>
              
              {useCases.map((useCase, index) => (
                <TabsContent key={index} value={index === 0 ? "pme" : index === 1 ? "grands-comptes" : "centres-appels"} className="p-6 border rounded-lg bg-white">
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80"
                alt="Téléphonie IP professionnelle"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Badge className="bg-primary-100 text-primary mb-6">NOTRE MÉTHODOLOGIE</Badge>
              <h2 className="text-3xl font-bold mb-6">Une implémentation en 4 étapes</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre approche méthodique garantit une transition en douceur vers votre nouvelle solution de téléphonie IP, avec un minimum de perturbations pour votre activité.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary-50 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-primary">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Analyse des besoins</h3>
                    <p className="text-gray-600">Évaluation complète de vos besoins en communication et de votre infrastructure existante.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary-50 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-primary">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Conception de solution</h3>
                    <p className="text-gray-600">Élaboration d'une solution personnalisée adaptée à vos exigences spécifiques.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary-50 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-primary">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Déploiement</h3>
                    <p className="text-gray-600">Installation et configuration de votre nouveau système avec une transition progressive.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary-50 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-primary">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Formation et support</h3>
                    <p className="text-gray-600">Formation des utilisateurs et support continu pour garantir une utilisation optimale.</p>
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
          <h2 className="text-3xl font-bold mb-6">Prêt à moderniser vos communications ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en téléphonie IP et découvrir comment nous pouvons vous aider à optimiser vos communications d'entreprise.
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