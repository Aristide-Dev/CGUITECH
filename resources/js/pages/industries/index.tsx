import { Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import { CGUITECH } from '@/utils/index';
import { motion } from 'framer-motion';

export default function Industries() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PublicLayout
      title="Industries | CGUITECH"
      description="Découvrez comment CGUITECH accompagne différents secteurs d'activité avec des solutions technologiques sur mesure."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-indigo-400 to-violet-400 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        {/* Formes géométriques flottantes */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-white/30 hover:bg-white/40 text-white mb-6 py-2 px-4 text-sm uppercase tracking-wide backdrop-blur-sm">
              Nos Secteurs d'Activité
            </Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-violet-100">
                Solutions technologiques adaptées à votre industrie
              </span>
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed max-w-3xl">
              Découvrez comment CGUITECH accompagne chaque secteur d'activité avec des solutions sur mesure pour répondre aux défis spécifiques de votre industrie.
            </p>
          </div>
        </div>
      </section>

      {/* Section Industries */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CGUITECH.industries.map((industry, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white relative">
                  <div className="p-8">
                    <div className={`${industry.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {industry.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">{industry.name}</h3>
                    <p className="text-blue-700 mb-6">{industry.description}</p>

                    {/* Défis */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Défis du secteur</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-blue-700">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Nos solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-blue-700">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.technologies.map((tech, idx) => (
                          <Badge key={idx} className="bg-blue-100 text-blue-600 hover:bg-blue-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link 
                      href={industry.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4"
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-indigo-400 to-violet-400 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute inset-0 -mt-10 -ml-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-60 h-60 bg-violet-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Prêt à transformer votre secteur d'activité ?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment nos solutions peuvent répondre aux défis de votre industrie.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-white hover:bg-white/90 text-blue-600 font-medium text-lg px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
                  Demander un devis gratuit
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 rounded-xl backdrop-blur-sm">
                  Nous contacter
                </Button>
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