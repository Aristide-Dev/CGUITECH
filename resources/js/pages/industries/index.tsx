// import { Link, usePage } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, Award, TrendingUp, Users, Shield, ArrowUp, Building2 } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import { CGUITECH } from '@/utils/index';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Détecter l'industrie active depuis l'URL au chargement
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveIndustry(hash);
      // Scroll vers l'industrie après un court délai pour laisser le temps au rendu
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

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

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expertise sectorielle",
      description: "Une compréhension approfondie des enjeux spécifiques à chaque secteur."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Solutions sur mesure",
      description: "Des solutions adaptées aux besoins particuliers de votre industrie."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Innovation continue",
      description: "Intégration des dernières technologies pour votre avantage concurrentiel."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence reconnue",
      description: "Plus de 45 000 clients satisfaits à travers différents secteurs."
    }
  ];


  

  useEffect(() => {
    // Déterminer l'industrie active au chargement de la page
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveIndustry(hash);
    }
  }, []);

  const handleIndustryClick = (industryId: string) => {
    setActiveIndustry(industryId);
    const element = document.getElementById(industryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', `/industries#${industryId}`);
    }
    setIsMenuOpen(false); // Fermer le menu mobile après clic
  };

  return (
    <PublicLayout
      title="Industries | CGUITECH"
      description="Découvrez comment CGUITECH accompagne différents secteurs d'activité avec des solutions technologiques sur mesure."
    >
      {/* Hero Section - Design minimaliste avec accent sur la typographie */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-50 via-transparent to-transparent opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-indigo-100 text-indigo-700 mb-6 py-1.5 px-3 text-xs font-medium rounded-full">
                EXPERTISES SECTORIELLES
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-gray-900">
                <span>Solutions adaptées à</span>
                <span className="text-indigo-600 block mt-2">votre secteur d'activité</span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
                Découvrez comment CGUITECH accompagne chaque industrie avec des solutions technologiques sur mesure pour répondre à vos défis spécifiques.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => document.getElementById('industries-list')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-base px-6 py-3 rounded-md transition-all"
                >
                  Découvrir nos solutions
                </Button>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline" 
                  className="bg-transparent border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium text-base px-6 py-3 rounded-md"
                >
                  Contacter un expert
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative z-0 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/services/person-protective-gear-meticulously-joins-metal-parts-showcasing-their-welding-skill-precision_1222399-68547.avif"
                  alt="Solutions sectorielles"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-indigo-900/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages - Style carte épuré */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow transition-all duration-300 border border-gray-100"
              >
                <div className="bg-indigo-50 w-12 h-12 rounded-md flex items-center justify-center mb-4 text-indigo-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Version desktop - barre horizontale */}
      <div className="hidden lg:flex justify-center space-x-1 bg-white shadow-sm rounded-lg p-1 mx-auto max-w-4xl border border-gray-100">
        {CGUITECH.industries.map((industry) => {
          const industryId = industry.link.replace('/industries/#', '');
          const isActive = activeIndustry === industryId;
          
          return (
            <button
              key={industryId}
              onClick={() => handleIndustryClick(industryId)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-indigo-50 text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className={`transition-transform ${isActive ? 'scale-110' : ''}`}>
                {industry.icon}
              </span>
              <span className="font-medium text-sm whitespace-nowrap">{industry.title}</span>
            </button>
          );
        })}
      </div>

      {/* Version mobile - menu déroulant */}
      <div className="lg:hidden relative">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-2">
            {activeIndustry ? (
              <>
                {CGUITECH.industries.find(i => i.link.includes(activeIndustry))?.icon}
                <span className="font-medium">
                  {CGUITECH.industries.find(i => i.link.includes(activeIndustry))?.title || 'Sélectionner une industrie'}
                </span>
              </>
            ) : (
              <>
                <Building2 size={18} />
                <span className="font-medium">Sélectionner une industrie</span>
              </>
            )}
          </div>
          <svg 
            className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isMenuOpen && (
          <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1 max-h-64 overflow-auto">
            {CGUITECH.industries.map((industry) => {
              const industryId = industry.link.replace('/industries/#', '');
              const isActive = activeIndustry === industryId;
              
              return (
                <button
                  key={industryId}
                  onClick={() => handleIndustryClick(industryId)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3 ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {industry.icon}
                  <span className="font-medium text-sm">{industry.title}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Menu de navigation des industries - Style minimaliste avec icônes */}
      {/* <nav className="py-8 bg-white border-y border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            {CGUITECH.industries.map((industry, index) => {
              const industryId = industry.link.replace('/industries/#', '');
              const isActive = activeIndustry === industryId;
              
              return (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.getElementById(industryId);
                    if (element) {
                      setActiveIndustry(industryId);
                      element.scrollIntoView({ behavior: 'smooth' });
                      // Mettre à jour l'URL sans recharger la page
                      window.history.pushState({}, '', `/industries#${industryId}`);
                    }
                  }}
                  className={`text-gray-600 hover:text-indigo-600 font-medium transition-colors whitespace-nowrap flex items-center gap-2 text-sm ${
                    isActive ? 'text-indigo-600' : ''
                  }`}
                >
                  <div className={`${
                    isActive ? 'bg-indigo-100' : 'bg-gray-100'
                  } w-8 h-8 rounded-md flex items-center justify-center ${
                    isActive ? 'text-indigo-600' : 'text-gray-600'
                  }`}>
                    {industry.icon}
                  </div>
                  {industry.name}
                </button>
              );
            })}
          </div>
        </div>
      </nav> */}

      {/* Section Industries - Cards au design épuré */}
      <section id="industries-list" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-600 mb-4 py-1 px-3 text-xs font-medium rounded-full">
              NOS SECTEURS D'EXPERTISE
            </Badge>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Solutions par secteur d'activité
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorez nos solutions spécialisées pour chaque secteur d'activité et découvrez comment nous pouvons transformer votre entreprise.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CGUITECH.industries.map((industry, index) => {
              let selectedId = "";
              let isActive = false;
              const industryId = industry.link.replace('/industries/#', '');
              if(activeIndustry === industry.id)
              {
                isActive = true;
                selectedId = industry.id;
              }else if(activeIndustry === industryId)
              {
                isActive = true;
                selectedId = industryId;
              }
              
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group h-full scroll-mt-32"
                  id={selectedId}
                >
                  <Card className={`h-full border transition-all duration-300 bg-white relative ${
                    isActive 
                      ? 'border-primary shadow-xl ring-2 ring-primary/20 bg-primary-50' 
                      : 'border-gray-200 shadow-sm hover:shadow'
                  }`}>
                    <div className="p-6">
                      <div className={`${
                        isActive ? 'bg-indigo-100' : 'bg-indigo-50'
                      } w-12 h-12 rounded-md flex items-center justify-center mb-4 ${
                        isActive ? 'text-indigo-700' : 'text-indigo-600'
                      }`}>
                        {industry.icon}
                      </div>
                      
                      <h3 className={`text-xl font-semibold mb-3 ${
                        isActive ? 'text-indigo-700' : 'text-gray-900'
                      }`}>{industry.title}</h3>
                      <p className="text-gray-600 mb-6 text-sm">{industry.description}</p>

                      {/* Défis */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Défis du secteur</h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solutions */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Nos solutions</h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies utilisées</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.technologies.map((tech, idx) => (
                            <Badge key={idx} className="bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md mt-4 text-sm group"
                      >
                        Discuter de votre projet
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section Success Stories - Design monochrome avec accents */}
      <section id="success-stories" className="py-24 bg-gray-900 text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-indigo-500 opacity-5 pattern-grid-lg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-900 text-indigo-300 mb-4 py-1 px-3 text-xs font-medium rounded-full">
              SUCCESS STORIES
            </Badge>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ils nous font confiance
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Découvrez comment nos solutions ont transformé les entreprises de nos clients à travers différents secteurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CGUITECH.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h4 className="font-medium text-white text-sm">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Style minimaliste */}
      <section id="contact" className="py-20 bg-indigo-600 text-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à transformer votre secteur d'activité ?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment nos solutions peuvent répondre aux défis de votre industrie.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-white hover:bg-gray-100 text-indigo-600 font-medium text-sm px-6 py-3 rounded-md transition-all">
                Demander un devis gratuit
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-indigo-700 font-medium text-sm px-6 py-3 rounded-md">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu de navigation horizontal - Style épuré */}
      <nav className="sticky top-0 bg-white shadow-sm z-40 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-3">
            <button
              onClick={() => document.getElementById('industries-list')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm"
            >
              Industries
            </button>
            <button
              onClick={() => document.getElementById('success-stories')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm"
            >
              Témoignages
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Pattern styles */}
      <style>{`
        .pattern-grid-lg {
          background-image: linear-gradient(currentColor 1px, transparent 1px),
                            linear-gradient(to right, currentColor 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </PublicLayout>
  );
}