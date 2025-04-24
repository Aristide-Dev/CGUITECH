import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Clock, UserRound, PieChart, Shield, Cpu, HelpCircle, BarChart } from 'lucide-react';

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
      title="Support Informatique | CGUITech"
      description="Services de support informatique professionnels pour garantir le bon fonctionnement de vos systèmes IT. Support à distance, sur site et helpdesk complets."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm">SUPPORT IT</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Support informatique professionnel</h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Une assistance technique complète pour garantir le bon fonctionnement de vos systèmes informatiques et maintenir votre productivité.
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
              <h2 className="text-3xl font-bold mb-6">Un support réactif à vos problèmes informatiques</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Les problèmes informatiques peuvent sérieusement impacter votre productivité et votre activité. Chez CGUITech, nous comprenons l'importance d'un support informatique réactif et efficace pour minimiser les temps d'arrêt et assurer la continuité de vos opérations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe de techniciens certifiés est disponible pour vous fournir une assistance de qualité, que ce soit à distance ou sur site, avec des solutions adaptées à vos besoins spécifiques et à votre budget.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Support multi-niveaux</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Techniciens certifiés</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Temps de réponse rapide</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Solutions personnalisées</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092921461-d3217bc18eac?auto=format&fit=crop&q=80"
                alt="Support informatique professionnel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">NOS SERVICES</Badge>
            <h2 className="text-3xl font-bold mb-6">Solutions de support adaptées à vos besoins</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nous proposons différentes options de support informatique pour répondre aux besoins spécifiques de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center text-center pb-2">
                  <div className="bg-primary-50 p-3 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{service.description}</p>
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

      {/* Niveaux de support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">NIVEAUX DE SUPPORT</Badge>
            <h2 className="text-3xl font-bold mb-6">Support technique multi-niveaux</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Notre structure de support à plusieurs niveaux garantit que vos problèmes sont traités efficacement par des techniciens ayant l'expertise appropriée.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="niveau1" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="niveau1">Support Niveau 1</TabsTrigger>
                <TabsTrigger value="niveau2">Support Niveau 2</TabsTrigger>
                <TabsTrigger value="niveau3">Support Niveau 3</TabsTrigger>
              </TabsList>
              
              {supportLevels.map((level, index) => (
                <TabsContent key={index} value={`niveau${index+1}`} className="p-6 border rounded-lg bg-gray-50">
                  <h3 className="text-2xl font-bold mb-4">{level.title}</h3>
                  <p className="text-gray-600 mb-6">{level.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {level.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{task}</span>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">AVANTAGES</Badge>
            <h2 className="text-3xl font-bold mb-6">Pourquoi choisir notre support informatique ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Un support informatique professionnel offre de nombreux avantages pour votre entreprise, bien au-delà de la simple résolution de problèmes techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-gray-200">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-primary-50 p-3 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Réduction des temps d'arrêt</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Minimisez les interruptions de service grâce à une résolution rapide des problèmes techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-primary-50 p-3 rounded-full mb-4">
                  <PieChart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Amélioration de la productivité</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Permettez à vos employés de se concentrer sur leur travail plutôt que sur les problèmes informatiques.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-primary-50 p-3 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Sécurité renforcée</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Bénéficiez d'une surveillance constante et d'une protection contre les menaces informatiques.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-primary-50 p-3 rounded-full mb-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Coûts prévisibles</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Maîtrisez votre budget IT avec des forfaits de support à tarifs fixes et sans surprises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notre expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
                alt="Techniciens qualifiés"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Badge className="bg-primary-100 text-primary mb-6">NOTRE EXPERTISE</Badge>
              <h2 className="text-3xl font-bold mb-6">Une équipe de techniciens qualifiés</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nos techniciens en support informatique sont certifiés dans les technologies les plus récentes et bénéficient d'une formation continue pour maintenir leur expertise à jour.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Que ce soit pour résoudre des problèmes complexes de réseau, de sécurité ou de matériel, notre équipe dispose des compétences nécessaires pour fournir des solutions efficaces et durables.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Cpu className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Expertise matérielle</h3>
                    <p className="text-gray-600">Diagnostic et réparation d'ordinateurs, serveurs, imprimantes et autres équipements informatiques.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Expertise logicielle</h3>
                    <p className="text-gray-600">Support pour les systèmes d'exploitation, applications professionnelles et logiciels spécialisés.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Formation utilisateur</h3>
                    <p className="text-gray-600">Formation et assistance aux utilisateurs pour améliorer leur efficacité avec les outils informatiques.</p>
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
          <h2 className="text-3xl font-bold mb-6">Besoin d'assistance technique ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en support informatique et découvrir comment nous pouvons vous aider à maintenir vos systèmes en parfait état de fonctionnement.
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