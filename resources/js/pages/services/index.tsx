import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { 
  ArrowRight, 
  Shield, 
  Phone, 
  CheckCircle, 
  ChevronRight,
  Users, 
  Clock, 
  TrendingUp,
} from 'lucide-react';
import { Link } from '@inertiajs/react';

import { CGUITECH } from '@/utils/index';


export default function ServicesIndex() {

  return (
    <PublicLayout
      title="Services IT Professionnels | CGUITECH"
      description="Découvrez notre gamme complète de services IT pour les entreprises en Guinée. Support informatique, cloud, infrastructure, sécurité et développement logiciel sur mesure."
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-slate-900"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Solutions IT Innovantes
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Propulsez votre entreprise <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">vers l'excellence numérique</span>
              </h1>
              
              <p className="text-slate-300 text-lg mb-8 max-w-lg">
                Des solutions IT sur mesure pour les entreprises guinéennes qui visent l'excellence. Votre transformation digitale commence ici.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href={route('contact.index')} 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-600/30"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                
                <Link 
                  href="#services-overview" 
                  className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition-all duration-300"
                >
                  Explorer nos services
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
              <div className="relative z-0 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/images/services/team-male-female-software-developers-writing-code-laptops-real-working-environment.jpg" 
                  alt="Services IT Professionnels"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-slate-500 font-medium">Ils nous font confiance</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {CGUITECH.partners.map((partner, i) => (
              <img key={i} src={partner.logo} className="h-12 w-32 bg-slate-200/20 rounded-md"></img>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-overview" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-600 mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Nos Services
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Des solutions IT complètes pour votre entreprise
            </h2>
            
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Notre expertise couvre tous les aspects des technologies de l'information pour répondre à vos besoins professionnels avec excellence.
            </p>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-slate-600">Satisfaction client</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-slate-600">Support technique</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-slate-600">Années d'expérience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-slate-600">Projets réalisés</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CGUITECH.services.map((service, index) => (
              <div 
                key={index} 
                className="relative group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 group-hover:from-blue-600/10 group-hover:to-indigo-600/10 transition-all duration-300"></div>
                <div className={`absolute h-full w-full bg-[url("${service.image}")] bg-cover bg-no-repeat opacity-50 group-hover:opacity-60 transition-all duration-300`}></div>
                <div className="p-6 relative z-10">
                  <div className={`${service.color} w-12 h-12 rounded-lg text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">Fonctionnalités clés :</h4>
                    <ul className="space-y-2">
                      {service.features?.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      href={service.link || '#'}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:underline"
                    >
                      En savoir plus 
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                      {service.technologies?.[0]}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-600 mb-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Pourquoi nous choisir
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                L'expérience IT qui fait la différence
              </h2>
              
              <p className="text-slate-600 text-lg mb-8">
                Nous nous distinguons par notre expertise locale, notre réactivité et notre engagement à fournir des services de qualité supérieure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Support 24/7</h3>
                  <p className="text-slate-600">Une équipe toujours disponible pour résoudre vos problèmes informatiques.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Expertise locale</h3>
                  <p className="text-slate-600">Une connaissance approfondie du marché et des défis spécifiques à la Guinée.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sécurité garantie</h3>
                  <p className="text-slate-600">Des solutions de protection robustes pour vos données et systèmes.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Solutions évolutives</h3>
                  <p className="text-slate-600">Des services qui s'adaptent à la croissance de votre entreprise.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-600/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-indigo-600/10 rounded-full z-0"></div>
              
              <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/services/people-working-marketing-agency.jpg" 
                  alt="Expertise IT"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 mb-4">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Secteurs d'activité
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Solutions adaptées à votre secteur
            </h2>
            
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Nous comprenons les défis spécifiques de chaque industrie et proposons des solutions sur mesure pour répondre à vos besoins particuliers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CGUITECH.industries.map((industry, index) => (
              <div 
                key={index} 
                className="group relative bg-slate-800 rounded-xl p-6 text-center transition-all duration-300 hover:bg-slate-700 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-600/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                    <div className="text-3xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{industry.title}</h3>
                  <p className="text-slate-400 text-sm">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Link 
              href={route('contact.index')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-600/30"
            >
              Discutons de votre projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-600 mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Témoignages
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ce que nos clients disent de nous
            </h2>
            
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Découvrez comment nos solutions IT ont transformé les entreprises de nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CGUITECH.testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-slate-50 p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-slate-200 w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                
                <p className="text-slate-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-br from-blue-500/50 to-indigo-700/50 p-8 md:p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt à transformer votre infrastructure IT?
                </h2>
                <p className="text-lg mb-8 text-blue-100">
                  Contactez nos experts dès aujourd'hui pour une consultation gratuite et découvrez
                  comment CGUITECH peut accompagner votre entreprise vers l'excellence technologique.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href={route('contact.index')} 
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300"
                  >
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  
                  <a 
                    href="tel:+224627969855" 
                    className="inline-flex items-center px-6 py-3 bg-blue-700/50 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    +224 627 96 98 55
                  </a>
                </div>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-700/50 z-10"></div>
                <div className="relative z-0 overflow-hidden rounded-xl">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Contactez-nous"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}