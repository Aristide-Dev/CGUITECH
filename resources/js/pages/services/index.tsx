import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Shield, 
  Phone, 
  CheckCircle, 
  ChevronRight,
  Users, 
  Clock, 
  TrendingUp,
  PhoneCall,
  Server,
  Code,
  Database,
  Globe,
  Laptop
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

import { CGUITECH } from '@/utils/index';

// Variantes d'animation réutilisables
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function ServicesIndex() {

  // Caractéristiques principales des solutions IT
  const keyFeatures = [
    {
      title: "Expertise locale",
      description: "Une équipe de professionnels comprenant les défis spécifiques du marché guinéen.",
      icon: <Users className="h-8 w-8 text-primary-600" />
    },
    {
      title: "Solutions sur mesure",
      description: "Des services IT personnalisés pour répondre précisément aux besoins de votre entreprise.",
      icon: <Server className="h-8 w-8 text-primary-600" />
    },
    {
      title: "Support réactif",
      description: "Assistance technique disponible 24/7 pour résoudre rapidement vos problèmes.",
      icon: <PhoneCall className="h-8 w-8 text-primary-600" />
    },
    {
      title: "Technologies avancées",
      description: "Accès aux dernières innovations pour garder votre entreprise compétitive.",
      icon: <Code className="h-8 w-8 text-primary-600" />
    }
  ];

  return (
    <PublicLayout
      title="Services IT Professionnels | CGUITECH"
      description="Découvrez notre gamme complète de services IT pour les entreprises en Guinée. Support informatique, cloud, infrastructure, sécurité et développement logiciel sur mesure."
    >
      {/* Hero Section - Style moderne avec overlay et arrière-plan dynamique */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services/team-male-female-software-developers-writing-code-laptops-real-working-environment.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Formes géométriques flottantes */}
        <motion.div 
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-white/30 hover:bg-white/40 text-white mb-6 py-2 px-4 text-sm uppercase tracking-wide backdrop-blur-sm">Services IT</Badge>
            <motion.h1 
              className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-violet-100">
                Propulsez votre entreprise vers l'excellence numérique
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white mb-10 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Des solutions IT sur mesure pour les entreprises guinéennes qui visent l'excellence. Votre transformation digitale commence ici.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={route('contact.index')} className="bg-white hover:bg-white/90 text-primary-600 font-medium text-lg px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="#services-overview" className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 rounded-xl backdrop-blur-sm">
                  Explorer nos services
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ils nous font confiance - Design amélioré */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Nos partenaires</Badge>
            <h2 className="text-3xl font-bold mb-6">Ils nous font confiance</h2>
            <p className="text-primary-700 max-w-2xl mx-auto">
              Rejoignez les entreprises qui nous ont choisi pour leurs besoins en technologies de l'information.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {CGUITECH.partners.map((partner, i) => (
              <motion.div 
                key={i} 
                className="group"
                variants={fadeInUp}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-16 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Principales caractéristiques - Nouvelle section */}
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Notre promesse</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">L'excellence technologique à votre service</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Notre engagement est de vous fournir des services IT de qualité supérieure qui répondent précisément à vos besoins.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {keyFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-primary-100"
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <motion.div 
                  className="bg-primary-50 text-primary-600 p-4 rounded-xl inline-flex mb-6"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-primary-800">{feature.title}</h3>
                <p className="text-primary-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section - Cards design amélioré */}
      <section id="services-overview" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Nos services</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Solutions IT complètes pour votre entreprise</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Notre expertise couvre tous les aspects des technologies de l'information pour répondre à vos besoins professionnels avec excellence.
            </p>
          </motion.div>

          {/* Statistiques avec design amélioré */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-primary-100 text-center"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 mb-3"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                98%
              </motion.div>
              <p className="text-primary-700">Satisfaction client</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-primary-100 text-center"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 mb-3"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                24/7
              </motion.div>
              <p className="text-primary-700">Support technique</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-primary-100 text-center"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 mb-3"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                15+
              </motion.div>
              <p className="text-primary-700">Années d'expérience</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-primary-100 text-center"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 mb-3"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                500+
              </motion.div>
              <p className="text-primary-700">Projets réalisés</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {CGUITECH.services.map((service, index) => (
              <motion.div 
                key={index} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-primary-700/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="h-48 relative overflow-hidden">
                  <motion.img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/20 text-white backdrop-blur-sm">
                      {service.technologies?.[0]}
                    </Badge>
                  </div>
                </div>
                <div className="p-8 relative z-10">
                  <motion.div 
                    className={`${service.color} w-14 h-14 rounded-2xl text-white flex items-center justify-center mb-6 -mt-12 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-primary-800 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-primary-700 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary-800 mb-3">Fonctionnalités clés :</h4>
                    <ul className="space-y-2">
                      {service.features?.slice(0, 3).map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-primary-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-primary-100">
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Link 
                        href={service.link || '#'}
                        className="text-primary-600 hover:text-primary-700 hover:bg-primary-50 font-medium p-0 group flex items-center"
                      >
                        En savoir plus 
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="ml-2 h-4 w-4 transform transition-transform" />
                        </motion.span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Section modernisée */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary-50 text-primary-600 mb-6 uppercase tracking-wide font-medium">Pourquoi nous choisir</Badge>
              <h2 className="text-4xl font-bold mb-8 leading-tight">L'expérience IT qui fait la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">différence</span></h2>
              <p className="text-primary-900 mb-8 leading-relaxed text-lg">
                Nous nous distinguons par notre expertise locale, notre réactivité et notre engagement à fournir des services de qualité supérieure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Clock className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Support 24/7</h3>
                    <p className="text-primary-700 mt-1">Assistance réactive</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Users className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Expertise locale</h3>
                    <p className="text-primary-700 mt-1">Connaissance du marché</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <Shield className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Sécurité garantie</h3>
                    <p className="text-primary-700 mt-1">Protection optimale</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary-100">
                  <TrendingUp className="h-8 w-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">Solutions évolutives</h3>
                    <p className="text-primary-700 mt-1">Adaptées à votre croissance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-violet-600/10 rounded-3xl transform rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/images/services/people-working-marketing-agency.jpg"
                  alt="Expertise IT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Design amélioré */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        {/* Formes géométriques flottantes */}
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/30 hover:bg-white/40 text-white mb-6 py-2 px-4 text-sm uppercase tracking-wide backdrop-blur-sm">Secteurs d'activité</Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Solutions adaptées à votre secteur
            </h2>
            
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Nous comprenons les défis spécifiques de chaque industrie et proposons des solutions sur mesure pour répondre à vos besoins particuliers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CGUITECH.industries.map((industry, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <div className="text-3xl text-white group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-white/80 mb-4">{industry.description}</p>
                <Link 
                  href={industry.link || '#'} 
                  className="inline-flex items-center text-white/90 hover:text-white font-medium text-sm group"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Link 
              href={route('contact.index')}
              className="bg-white hover:bg-white/90 text-primary-600 font-medium text-lg px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1"
            >
              Discutons de votre projet
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages - Design amélioré */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-50 text-primary-600 mb-4 uppercase tracking-wide font-medium">Témoignages</Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">Ce que nos clients disent</h2>
            <p className="text-primary-700 max-w-3xl mx-auto text-lg">
              Découvrez comment nos solutions IT ont transformé les entreprises de nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {CGUITECH.testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-primary-100"
              >
                <div className="mb-6 text-yellow-500">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="text-primary-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-800">{testimonial.name}</h4>
                    <p className="text-primary-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Design moderne avec gradient */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute inset-0 -mt-10 -ml-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-60 h-60 bg-violet-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Prêt à transformer votre infrastructure IT?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Contactez nos experts dès aujourd'hui pour une consultation gratuite et découvrez
                comment CGUITECH peut accompagner votre entreprise vers l'excellence technologique.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href={route('contact.index')} className="bg-white hover:bg-white/90 text-primary-600 font-medium text-lg px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
                  Demander un devis gratuit
                </Link>
                <a href={`tel:${CGUITECH.contactInfo.unespace_phone}`} className="flex items-center text-white font-medium text-lg group">
                  <div className="p-3 bg-white/20 rounded-full mr-3 group-hover:bg-white/30 transition-colors">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  {CGUITECH.contactInfo.phone}
                </a>
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