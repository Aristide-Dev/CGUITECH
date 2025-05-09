import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Server, Shield, Clock, BarChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from '@inertiajs/react';

export default function ITManagementService() {
  // Liste des avantages
  const benefits = [
    "Réduction des coûts informatiques jusqu'à 30%",
    "Surveillance proactive 24/7 des systèmes",
    "Diminution des temps d'arrêt et des interruptions",
    "Support IT réactif et assistance dédiée",
    "Mise à jour et maintenance régulières",
    "Conformité avec les normes et réglementations",
    "Sécurité renforcée contre les cybermenaces",
    "Maintenance préventive pour éviter les pannes"
  ];

  return (
    <PublicLayout
      title="Services IT Gérés Tout-en-Un | CGUITECH"
      description="Nos services IT gérés tout-en-un offrent une solution complète pour la supervision, la maintenance et le support de votre infrastructure informatique."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services/portrait-smiling-engineer-wearing-headphones-data-center.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm">SERVICES IT GÉRÉS</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Services IT gérés tout-en-un</h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Une solution complète pour superviser, maintenir et supporter votre infrastructure informatique, vous permettant de vous concentrer sur votre cœur de métier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-primary-600 hover:bg-white/90">
                Demander un devis
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Découvrir nos forfaits
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary-100 text-primary mb-6">APERÇU</Badge>
              <h2 className="text-3xl font-bold mb-6">Libérez le potentiel de votre entreprise avec nos services IT gérés</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chez CGUITECH, nous proposons une gamme complète de services informatiques gérés conçus pour optimiser vos opérations, renforcer votre sécurité et réduire vos coûts informatiques. Notre approche proactive vous permet d'anticiper les problèmes avant qu'ils n'affectent votre activité.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nos techniciens qualifiés surveillent en permanence vos systèmes, appliquent les mises à jour nécessaires, assurent la sécurité de vos données et fournissent une assistance rapide en cas de besoin. Vous bénéficiez ainsi d'une tranquillité d'esprit totale concernant votre infrastructure IT.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Surveillance 24/7</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Support technique dédié</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Maintenance proactive</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Cybersécurité avancée</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/services/black-man-it-technician-server-room-cyber-security-data-network-storage-inspection-african-male-person-networking-administrator-checking-system-cables-installation-datacenter.jpg"
                alt="Centre de données moderne"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">NOS OFFRES</Badge>
            <h2 className="text-3xl font-bold mb-6">Services IT gérés adaptés à vos besoins</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nous proposons différentes formules pour répondre aux besoins spécifiques de votre entreprise, quelle que soit sa taille.
            </p>
          </div>

          <Tabs defaultValue="monitoring" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="monitoring" className="data-[state=active]:bg-primary data-[state=active]:text-white">Supervision</TabsTrigger>
              <TabsTrigger value="maintenance" className="data-[state=active]:bg-primary data-[state=active]:text-white">Maintenance</TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-primary data-[state=active]:text-white">Sécurité</TabsTrigger>
              <TabsTrigger value="support" className="data-[state=active]:bg-primary data-[state=active]:text-white">Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="monitoring" className="p-8 bg-white rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-full">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Supervision des systèmes</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Notre système de surveillance 24/7 détecte et alerte de tout problème potentiel avant qu'il n'impacte votre activité. Nous surveillons tous vos équipements, réseaux, applications et services critiques.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Monitoring continu des performances</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Alertes en temps réel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Rapports détaillés et tableaux de bord</span>
                </li>
              </ul>
            </TabsContent>
            
            <TabsContent value="maintenance" className="p-8 bg-white rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Maintenance préventive</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Notre équipe assure une maintenance proactive de vos systèmes pour prévenir les pannes et optimiser les performances, incluant les mises à jour, correctifs et optimisations régulières.
              </p>
            </TabsContent>
            
            <TabsContent value="security" className="p-8 bg-white rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Sécurité informatique</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Protection complète contre les menaces avec solutions antivirus, pare-feu, détection d'intrusion, et formation des utilisateurs pour garantir la sécurité de vos données.
              </p>
            </TabsContent>
            
            <TabsContent value="support" className="p-8 bg-white rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Support technique</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Assistance technique réactive par téléphone, email ou ticket, avec un temps de réponse garanti selon votre SLA, pour résoudre rapidement tous vos problèmes informatiques.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-primary mb-4">AVANTAGES</Badge>
            <h2 className="text-3xl font-bold mb-6">Pourquoi choisir nos services IT gérés ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos services IT gérés peuvent transformer votre entreprise et vous offrir un avantage concurrentiel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute inset-0 -mt-10 -ml-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-60 h-60 bg-primary-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Prêt à optimiser votre infrastructure IT ?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment nos services IT gérés peuvent vous aider.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-white hover:bg-white/90 text-primary-600 font-medium text-lg px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
                  Demander une consultation gratuite
                </Button>
                <Link href={route('contact.index')} className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 rounded-xl backdrop-blur-sm">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>

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
      </section>
    </PublicLayout>
  );
} 