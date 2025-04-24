import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Globe, Code, PenTool, Search, Rocket, Smartphone, ServerIcon } from 'lucide-react';

export default function WebDesignService() {
  // Données pour les types de sites web
  const webSiteTypes = [
    {
      title: "Site vitrine",
      description: "Présentez votre entreprise et vos services avec un site moderne et professionnel.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      features: [
        "Design personnalisé et responsive",
        "Optimisation pour les moteurs de recherche",
        "Intégration de formulaires de contact",
        "Gallery d'images et vidéos"
      ]
    },
    {
      title: "Site e-commerce",
      description: "Vendez vos produits en ligne avec une boutique complète et sécurisée.",
      icon: <Rocket className="h-8 w-8 text-primary" />,
      features: [
        "Catalogue de produits complet",
        "Système de paiement sécurisé",
        "Gestion des stocks et commandes",
        "Tableau de bord administrateur"
      ]
    },
    {
      title: "Applications web",
      description: "Solutions web sur mesure pour répondre aux besoins spécifiques de votre entreprise.",
      icon: <Code className="h-8 w-8 text-primary" />,
      features: [
        "Développement sur mesure",
        "Intégration avec vos systèmes existants",
        "Interface utilisateur intuitive",
        "Évolutif selon vos besoins"
      ]
    },
    {
      title: "Sites mobiles",
      description: "Expérience optimisée pour les utilisateurs mobiles avec un design responsive.",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      features: [
        "Compatibilité multi-appareils",
        "Navigation intuitive sur écran tactile",
        "Temps de chargement rapide",
        "Optimisation des images et contenus"
      ]
    }
  ];

  // Données pour les services d'hébergement
  const hostingServices = [
    {
      title: "Hébergement web",
      description: "Solutions d'hébergement fiables et performantes pour votre site web ou application.",
      icon: <ServerIcon className="h-8 w-8 text-primary" />,
      features: [
        "Disponibilité 99,9% garantie",
        "Espace disque et bande passante adaptés",
        "Sauvegarde quotidienne",
        "Support technique 24/7"
      ]
    },
    {
      title: "Noms de domaine",
      description: "Enregistrement et gestion de noms de domaine pour établir votre présence en ligne.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      features: [
        "Large choix d'extensions (.com, .gn, .org, etc.)",
        "Protection contre le vol de domaine",
        "Renouvellement automatique",
        "Gestion DNS simplifiée"
      ]
    }
  ];

  return (
    <PublicLayout
      title="Conception Web et Hébergement | CGUITech"
      description="Créez votre présence en ligne avec nos services de conception web professionnelle et solutions d'hébergement fiables. Sites vitrines, e-commerce et applications sur mesure."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm">CONCEPTION WEB</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Conception web professionnelle et hébergement</h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Établissez votre présence en ligne avec un site web attrayant et fonctionnel, conçu pour refléter l'identité de votre entreprise et attirer de nouveaux clients.
            </p>
            <Button className="bg-white text-primary-600 hover:bg-white/90">
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary-100 text-primary mb-6">NOTRE EXPERTISE</Badge>
              <h2 className="text-3xl font-bold mb-6">Créez une expérience web qui vous démarque</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                À l'ère du numérique, un site web professionnel est essentiel pour établir la crédibilité et la visibilité de votre entreprise. Chez CGUITech, nous concevons des sites web qui non seulement sont visuellement attrayants, mais aussi fonctionnels et optimisés pour les moteurs de recherche.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe de concepteurs et développeurs web expérimentés travaille en étroite collaboration avec vous pour comprendre vos objectifs commerciaux et créer une solution web sur mesure qui répond parfaitement à vos besoins et aux attentes de vos clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Design moderne et attrayant</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Optimisation pour le mobile</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Optimisation SEO</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Temps de chargement rapide</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80"
                alt="Conception web professionnelle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">NOS SERVICES</Badge>
            <h2 className="text-3xl font-bold mb-6">Solutions web adaptées à vos besoins</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'une application web sur mesure, nous avons la solution qu'il vous faut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {webSiteTypes.map((type, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <div className="bg-primary-50 p-3 rounded-md">
                    {type.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{type.title}</CardTitle>
                    <p className="text-gray-600 mt-1">{type.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-4">
                    {type.features.map((feature, idx) => (
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

      {/* Notre processus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary mb-4">NOTRE PROCESSUS</Badge>
            <h2 className="text-3xl font-bold mb-6">Comment nous créons votre site web</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Notre approche structurée garantit que votre projet web soit livré à temps, dans le respect du budget et selon vos attentes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Ligne verticale connectant les étapes */}
              <div className="absolute left-[39px] top-0 bottom-0 w-1 bg-primary-100 z-0"></div>
              
              <div className="space-y-12 relative z-10">
                <div className="flex gap-8">
                  <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Consultation et planification</h3>
                    <p className="text-gray-600 mb-4">
                      Nous commençons par comprendre vos objectifs commerciaux, votre public cible et vos besoins spécifiques. Cette phase inclut l'analyse de votre marché et de vos concurrents pour élaborer une stratégie web efficace.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Conception et maquettage</h3>
                    <p className="text-gray-600 mb-4">
                      Notre équipe de designers crée des maquettes visuelles de votre site, illustrant la structure, la mise en page et l'esthétique. Vous avez la possibilité de réviser et d'approuver ces maquettes avant le développement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Développement et intégration</h3>
                    <p className="text-gray-600 mb-4">
                      Nos développeurs transforment les maquettes approuvées en un site web fonctionnel, en utilisant les technologies les plus adaptées à vos besoins. Cette phase inclut l'intégration de fonctionnalités et de contenus.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">4</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Tests et optimisation</h3>
                    <p className="text-gray-600 mb-4">
                      Avant le lancement, nous testons rigoureusement votre site pour assurer sa compatibilité avec différents navigateurs et appareils, sa performance et sa sécurité. Nous optimisons également le site pour les moteurs de recherche.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">5</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Lancement et suivi</h3>
                    <p className="text-gray-600 mb-4">
                      Une fois votre approbation obtenue, nous lançons votre site et assurons un suivi pour garantir son bon fonctionnement. Nous proposons également des services de maintenance et d'assistance pour garder votre site à jour.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">HÉBERGEMENT</Badge>
            <h2 className="text-3xl font-bold mb-6">Solutions d'hébergement fiables</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Un site web performant nécessite un hébergement de qualité. Nous proposons des solutions d'hébergement fiables et sécurisées pour garantir la disponibilité et la rapidité de votre site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {hostingServices.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <div className="bg-primary-50 p-3 rounded-md">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <p className="text-gray-600 mt-1">{service.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-4">
                    {service.features.map((feature, idx) => (
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

      {/* SEO Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&q=80"
                alt="Optimisation pour les moteurs de recherche"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Badge className="bg-primary-100 text-primary mb-6">RÉFÉRENCEMENT</Badge>
              <h2 className="text-3xl font-bold mb-6">Optimisation pour les moteurs de recherche</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Avoir un beau site web ne suffit pas - il doit aussi être trouvé par vos clients potentiels. Nous intégrons des stratégies d'optimisation pour les moteurs de recherche (SEO) dès la conception de votre site pour améliorer sa visibilité en ligne.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre approche SEO comprend l'optimisation technique, la recherche de mots-clés, la création de contenu de qualité et l'amélioration de l'expérience utilisateur - tous des facteurs essentiels pour un bon classement dans les résultats de recherche.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Search className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Recherche de mots-clés</h3>
                    <p className="text-gray-600">Identification des termes de recherche pertinents pour votre entreprise et votre public cible.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PenTool className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Contenu optimisé</h3>
                    <p className="text-gray-600">Création de contenus de qualité qui répondent aux requêtes des utilisateurs et aux exigences des moteurs de recherche.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Optimisation technique</h3>
                    <p className="text-gray-600">Structure du site, balisage, vitesse de chargement et autres facteurs techniques qui influencent le référencement.</p>
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
          <h2 className="text-3xl font-bold mb-6">Prêt à créer votre présence en ligne ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet web et découvrir comment nous pouvons vous aider à établir une présence en ligne efficace.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg">
            Demander un devis gratuit
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
} 