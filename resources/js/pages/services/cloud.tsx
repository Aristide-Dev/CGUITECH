import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Cloud, Server, Database, Lock, FileText, BarChart, ArrowUp } from 'lucide-react';

export default function CloudService() {
  const cloudSolutions = [
    {
      title: "Infrastructure as a Service (IaaS)",
      description: "Ressources de calcul, stockage et réseau évolutives selon vos besoins.",
      icon: <Server className="h-8 w-8 text-primary" />,
      features: [
        "Provisionnement rapide",
        "Paiement à l'usage",
        "Haute disponibilité",
        "Centres de données géoredondants"
      ]
    },
    {
      title: "Platform as a Service (PaaS)",
      description: "Environnements de développement et de déploiement pour vos applications.",
      icon: <Database className="h-8 w-8 text-primary" />,
      features: [
        "Environnements préconfiguré",
        "Intégration continue",
        "Services de base de données",
        "Mise à l'échelle automatique"
      ]
    },
    {
      title: "Software as a Service (SaaS)",
      description: "Applications cloud prêtes à l'emploi accessibles partout et à tout moment.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      features: [
        "Bureautique en ligne",
        "CRM et ERP",
        "Outils collaboratifs",
        "Sauvegardes automatiques"
      ]
    },
    {
      title: "Cloud sécurisé & conformité",
      description: "Protection des données et conformité aux normes et réglementations.",
      icon: <Lock className="h-8 w-8 text-primary" />,
      features: [
        "Chiffrement des données",
        "Conformité RGPD",
        "Audits réguliers",
        "Contrôle d'accès avancé"
      ]
    }
  ];

  return (
    <PublicLayout
      title="Solutions Cloud | CGUITECH"
      description="Découvrez nos solutions cloud sécurisées et évolutives adaptées aux besoins de votre entreprise pour stocker, gérer et traiter vos données."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm">SOLUTIONS CLOUD</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Infrastructure cloud flexible et sécurisée</h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Optimisez vos opérations avec nos solutions cloud évolutives, vous permettant d'accéder à vos données et applications en toute sécurité, partout et à tout moment.
            </p>
            <Button className="bg-white text-primary-600 hover:bg-white/90">
              Demander une démonstration
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary-100 text-primary mb-6">APERÇU</Badge>
              <h2 className="text-3xl font-bold mb-6">Transformez votre entreprise avec le cloud</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chez CGUITECH, nous proposons des solutions cloud complètes qui permettent aux entreprises de toutes tailles de bénéficier de la flexibilité, de l'évolutivité et de la sécurité qu'offre le cloud computing.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Que vous souhaitiez migrer entièrement vers le cloud, adopter une approche hybride ou simplement utiliser certains services cloud spécifiques, notre équipe d'experts vous accompagne tout au long du processus pour assurer une transition en douceur et optimiser vos investissements technologiques.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Réduction des coûts d'infrastructure</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Évolutivité à la demande</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Accessibilité à distance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Haute disponibilité</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?auto=format&fit=crop&q=80"
                alt="Centre de données cloud"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">NOS SOLUTIONS</Badge>
            <h2 className="text-3xl font-bold mb-6">Solutions cloud adaptées à vos besoins</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de solutions cloud conçues pour répondre aux besoins spécifiques de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {cloudSolutions.map((solution, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <div className="bg-primary-50 p-3 rounded-md">
                    {solution.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{solution.title}</CardTitle>
                    <p className="text-gray-600 mt-1">{solution.description}</p>
                  </div>
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

      {/* Business Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">AVANTAGES</Badge>
            <h2 className="text-3xl font-bold mb-6">Avantages commerciaux du cloud</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos solutions cloud peuvent transformer votre entreprise et vous donner un avantage concurrentiel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <ArrowUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Efficacité opérationnelle</h3>
              <p className="text-gray-600">
                Réduisez les coûts opérationnels et améliorez l'efficacité en éliminant les investissements matériels et en automatisant les processus.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Évolutivité instantanée</h3>
              <p className="text-gray-600">
                Adaptez rapidement vos ressources informatiques à la hausse ou à la baisse en fonction des besoins changeants de votre entreprise.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Agilité commerciale</h3>
              <p className="text-gray-600">
                Lancez de nouveaux produits et services plus rapidement, en réduisant le délai de mise sur le marché et en favorisant l'innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Migration Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Badge className="bg-primary-100 text-primary mb-4">NOTRE APPROCHE</Badge>
            <h2 className="text-3xl font-bold mb-6">Stratégie de migration vers le cloud</h2>
            <p className="text-gray-600 mb-8">
              Notre approche méthodique garantit une transition en douceur vers le cloud, minimisant les perturbations et maximisant les avantages pour votre entreprise.
            </p>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Évaluation et planification</h3>
                  <p className="text-gray-600">
                    Nous évaluons votre infrastructure actuelle, identifions les applications prioritaires et élaborons une stratégie de migration sur mesure.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Migration progressive</h3>
                  <p className="text-gray-600">
                    Nous migrons vos données et applications par phases, en minimisant les risques et en assurant la continuité des opérations.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Optimisation continue</h3>
                  <p className="text-gray-600">
                    Nous surveillons et optimisons constamment votre environnement cloud pour garantir performance, sécurité et rentabilité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à passer au cloud ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment nos solutions cloud peuvent transformer votre entreprise.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg">
            Demander une consultation gratuite
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
} 