import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Code, Lightbulb, Database, Globe, SmartphoneNfc, Laptop, Layout, BarChart3, Briefcase, Clock, Milestone } from 'lucide-react';

export default function SoftwareDevelopmentService() {
  // Données pour les services de développement logiciel
  const softwareServices = [
    {
      title: "Applications Web",
      description: "Développement d'applications web sur mesure avec les dernières technologies.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      features: [
        "Applications web progressives (PWA)",
        "Portails d'entreprise",
        "Applications SaaS",
        "Interfaces administratives"
      ]
    },
    {
      title: "Applications Mobiles",
      description: "Création d'applications mobiles natives et cross-platform pour iOS et Android.",
      icon: <SmartphoneNfc className="h-8 w-8 text-primary" />,
      features: [
        "Applications iOS et Android",
        "Applications cross-platform",
        "Intégration de fonctions natives",
        "Expérience utilisateur optimisée"
      ]
    },
    {
      title: "Logiciels de Bureau",
      description: "Développement de logiciels de bureau puissants et intuitifs pour Windows, macOS et Linux.",
      icon: <Laptop className="h-8 w-8 text-primary" />,
      features: [
        "Applications multi-plateformes",
        "Logiciels métier",
        "Outils de productivité",
        "Intégration système"
      ]
    },
    {
      title: "Solutions Personnalisées",
      description: "Création de logiciels sur mesure adaptés aux besoins spécifiques de votre entreprise.",
      icon: <Code className="h-8 w-8 text-primary" />,
      features: [
        "Automatisation des processus",
        "Intégration avec les systèmes existants",
        "Analyse et visualisation de données",
        "Solutions métier spécialisées"
      ]
    }
  ];

  // Données pour les technologies
  const technologies = [
    {
      category: "Frontend",
      items: [
        "React", "Angular", "Vue.js", 
        "Next.js", "TypeScript", 
        "HTML5/CSS3", "Tailwind CSS"
      ]
    },
    {
      category: "Backend",
      items: [
        "Node.js", "PHP/Laravel", 
        "Python/Django", "Java/Spring", 
        "C#/.NET", "Go", "Ruby on Rails"
      ]
    },
    {
      category: "Mobile",
      items: [
        "React Native", "Flutter", 
        "Swift", "Kotlin", 
        "Xamarin", "Ionic"
      ]
    },
    {
      category: "Bases de données",
      items: [
        "MySQL", "PostgreSQL", 
        "MongoDB", "Redis", 
        "SQL Server", "Elasticsearch", 
        "Firebase"
      ]
    }
  ];

  // Données pour les étapes du processus
  const developmentProcess = [
    {
      title: "Découverte et analyse",
      description: "Nous analysons vos besoins, définissons les objectifs du projet et identifions les solutions techniques appropriées.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      steps: [
        "Collecte des exigences",
        "Analyse des besoins",
        "Définition des objectifs",
        "Étude de faisabilité"
      ]
    },
    {
      title: "Conception",
      description: "Nous concevons l'architecture du logiciel, les interfaces utilisateur et planifions le développement.",
      icon: <Layout className="h-6 w-6 text-primary" />,
      steps: [
        "Architecture logicielle",
        "Conception UX/UI",
        "Modélisation des données",
        "Prototypage"
      ]
    },
    {
      title: "Développement",
      description: "Notre équipe développe votre solution en utilisant les meilleures pratiques et méthodologies agiles.",
      icon: <Code className="h-6 w-6 text-primary" />,
      steps: [
        "Développement itératif",
        "Revues de code",
        "Tests unitaires",
        "Intégration continue"
      ]
    },
    {
      title: "Tests et assurance qualité",
      description: "Nous testons rigoureusement votre logiciel pour garantir sa fiabilité, sa performance et sa sécurité.",
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      steps: [
        "Tests fonctionnels",
        "Tests de performance",
        "Tests de sécurité",
        "Tests d'acceptation"
      ]
    },
    {
      title: "Déploiement",
      description: "Nous déployons votre solution dans l'environnement cible et assurons une transition en douceur.",
      icon: <Globe className="h-6 w-6 text-primary" />,
      steps: [
        "Préparation de l'environnement",
        "Déploiement contrôlé",
        "Migration des données",
        "Formation des utilisateurs"
      ]
    },
    {
      title: "Maintenance et évolution",
      description: "Nous assurons le suivi, la maintenance et l'évolution de votre solution pour répondre à vos besoins futurs.",
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      steps: [
        "Support technique",
        "Mises à jour régulières",
        "Améliorations continues",
        "Évolutions fonctionnelles"
      ]
    }
  ];

  // Données pour les avantages
  const benefits = [
    {
      title: "Expertise technique",
      description: "Notre équipe de développeurs expérimentés maîtrise les dernières technologies et méthodologies.",
      icon: <Briefcase className="h-6 w-6 text-primary" />
    },
    {
      title: "Solutions sur mesure",
      description: "Nous développons des logiciels parfaitement adaptés à vos besoins spécifiques et à votre secteur d'activité.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />
    },
    {
      title: "Méthodologie agile",
      description: "Notre approche agile vous garantit flexibilité, transparence et résultats concrets à chaque étape du projet.",
      icon: <Clock className="h-6 w-6 text-primary" />
    },
    {
      title: "Support continu",
      description: "Nous vous accompagnons dans la durée avec un support et une maintenance de qualité pour votre solution.",
      icon: <Milestone className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <PublicLayout
      title="Développement Logiciel | CGUITech"
      description="Services de développement logiciel sur mesure pour votre entreprise. Applications web, mobiles et solutions personnalisées par des experts."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm">DÉVELOPPEMENT LOGICIEL</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Solutions logicielles sur mesure</h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Transformez vos idées en solutions digitales performantes grâce à notre expertise en développement logiciel sur mesure.
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
              <h2 className="text-3xl font-bold mb-6">Développement logiciel axé sur la valeur</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chez CGUITech, nous comprenons que chaque entreprise a des besoins uniques. C'est pourquoi nous nous spécialisons dans le développement de solutions logicielles personnalisées qui s'adaptent parfaitement à vos exigences et à vos objectifs commerciaux.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe d'experts en développement logiciel combine expertise technique et connaissance approfondie des différents secteurs d'activité pour créer des applications innovantes, évolutives et sécurisées qui vous aident à relever vos défis quotidiens.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Solutions sur mesure</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Technologie de pointe</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Méthodologie agile</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Support continu</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80"
                alt="Développement logiciel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">NOS SERVICES</Badge>
            <h2 className="text-3xl font-bold mb-6">Solutions de développement complètes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nous proposons une gamme complète de services de développement logiciel pour répondre à tous vos besoins digitaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softwareServices.map((service, index) => (
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

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">TECHNOLOGIES</Badge>
            <h2 className="text-3xl font-bold mb-6">Notre Stack Technologique</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nous utilisons les technologies les plus récentes et les plus adaptées pour développer des solutions performantes et évolutives.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                {technologies.map((tech, index) => (
                  <TabsTrigger key={index} value={tech.category.toLowerCase()}>{tech.category}</TabsTrigger>
                ))}
              </TabsList>
              
              {technologies.map((tech, index) => (
                <TabsContent key={index} value={tech.category.toLowerCase()} className="p-6 border rounded-lg bg-gray-50">
                  <h3 className="text-2xl font-bold mb-6">{tech.category}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {tech.items.map((item, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-center">
                        <span className="font-medium text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Processus de développement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">PROCESSUS</Badge>
            <h2 className="text-3xl font-bold mb-6">Notre processus de développement</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nous suivons une méthodologie agile pour assurer la transparence, la flexibilité et la qualité à chaque étape du développement.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {developmentProcess.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full h-fit">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-primary-100 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.steps.map((substep, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{substep}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">AVANTAGES</Badge>
            <h2 className="text-3xl font-bold mb-6">Pourquoi choisir CGUITech ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages de faire appel à notre équipe pour vos projets de développement logiciel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="bg-primary-50 p-3 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intégration et APIs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1599658880090-4b5d7a4cf549?auto=format&fit=crop&q=80"
                alt="Intégration API"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Badge className="bg-primary-100 text-primary mb-6">INTÉGRATION</Badge>
              <h2 className="text-3xl font-bold mb-6">Intégration et APIs</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nous développons des solutions qui s'intègrent parfaitement avec vos systèmes existants et les services tiers, éliminant les silos d'information et optimisant vos flux de travail.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre expertise en développement d'API vous permet de connecter vos applications, de partager des données de manière sécurisée et d'automatiser vos processus métier.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Database className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Connexion aux systèmes existants</h3>
                    <p className="text-gray-600">Intégration avec vos logiciels et bases de données existants pour une expérience unifiée.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">APIs RESTful</h3>
                    <p className="text-gray-600">Développement d'APIs sécurisées et bien documentées pour faciliter l'interopérabilité.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Microservices</h3>
                    <p className="text-gray-600">Architecture modulaire pour une évolutivité et une maintenance simplifiées.</p>
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
          <h2 className="text-3xl font-bold mb-6">Prêt à concrétiser votre projet ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en développement logiciel et découvrir comment nous pouvons vous aider à transformer vos idées en solutions digitales performantes.
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