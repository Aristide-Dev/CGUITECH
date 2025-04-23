// import { type SharedData } from '@/types';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  PhoneCall, 
  Code, 
  Server, 
  Cloud, 
  Shield,
  Award,
  CheckCircle2,
  ArrowRight,
  MapPin
} from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Welcome() {
    // const { auth } = usePage<SharedData>().props;
    const currentYear = new Date().getFullYear();

    // Données pour le slider avec images libres
    const slides = [
      {
        title: "Optimiser vos systèmes",
        subtitle: "Pour une meilleure performance digitale",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        buttonText: "Rencontrez-nous"
      },
      {
        title: "Logiciels & Conception",
        subtitle: "Transformez vos processus techniques",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        buttonText: "Rencontrez-nous"
      },
      {
        title: "Entreprise Certifiée",
        subtitle: "Des prestations adaptées à votre mode de fonctionnement",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        buttonText: "En savoir plus"
      }
    ];

    // Données pour les services avec images libres
    const services = [
      {
        icon: <Code className="h-8 w-8" />,
        title: "Développement Logiciel",
        description: "Applications sur mesure pour répondre exactement à vos besoins métier spécifiques.",
        link: "/services/software",
        image: "https://images.unsplash.com/photo-1555061321-003f1a2e1d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: "Cybersécurité",
        description: "Protection avancée contre les menaces numériques pour sécuriser vos données critiques.",
        link: "/services/security",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        icon: <Cloud className="h-8 w-8" />,
        title: "Solutions Cloud",
        description: "Infrastructure cloud évolutive pour plus de flexibilité et d'efficacité opérationnelle.",
        link: "/services/cloud",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      },
      {
        icon: <Server className="h-8 w-8" />,
        title: "Gestion IT",
        description: "Services IT complets pour que vous puissiez vous concentrer sur votre cœur de métier.",
        link: "/services/it-management",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        icon: <PhoneCall className="h-8 w-8" />,
        title: "IP Telephony",
        description: "Solutions de téléphonie IP modernes pour une communication unifiée et efficace.",
        link: "/services/ip-telephony",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        icon: <Server className="h-8 w-8" />,
        title: "Infrastructure",
        description: "Solutions d'infrastructure robustes et évolutives pour supporter votre croissance.",
        link: "/services/infrastructure",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        icon: <Code className="h-8 w-8" />,
        title: "Conception Web",
        description: "Sites web et applications web modernes, responsives et optimisées pour le SEO.",
        link: "/services/web-design",
        image: "https://images.unsplash.com/photo-1555061321-003f1a2e1d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ];

    // Données pour les avantages
    const benefits = [
      {
        title: "Expertise éprouvée",
        description: "Notre équipe combine plus de 28 ans d'expérience dans les technologies les plus récentes."
      },
      {
        title: "Solutions personnalisées",
        description: "Chaque projet est unique et reçoit une approche adaptée à vos besoins spécifiques."
      },
      {
        title: "Support continu",
        description: "Notre engagement ne s'arrête pas à la livraison - nous assurons un suivi permanent."
      },
      {
        title: "Innovation constante",
        description: "Nous intégrons les dernières technologies pour garder votre entreprise compétitive."
      }
    ];

    // Industries servies
    const industries = [
      "Finance & Assurance", 
      "Santé", 
      "Éducation", 
      "Commerce & Distribution", 
      "Télécommunications", 
      "Secteur Public"
    ];
    
    // Données pour la section partenaires
    const partners = [
        { name: "Oracle", logo: "https://cguitECH.com/wp-content/uploads/2023/05/Oracle-Logo.png" },
        { name: "Serbadinamik", logo: "https://cguitECH.com/wp-content/uploads/2023/05/Logo-Serbadinamik.png" },
        { name: "Ricoh", logo: "https://cguitECH.com/wp-content/uploads/2023/05/ricoh.png" },
    ];

    // Témoignages clients avec images libres
    const testimonials = [
      {
        name: "Sophie Laurent",
        position: "Directrice IT, Finance Corp",
        text: "CGUITECH a complètement transformé notre infrastructure IT. Leur expertise et leur approche sur mesure ont rendu notre système plus efficace et sécurisé.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      },
      {
        name: "Marc Dubois",
        position: "CEO, MediTech",
        text: "L'équipe de CGUITECH comprend parfaitement les enjeux spécifiques du secteur de la santé. Leur solution a amélioré considérablement notre gestion des données patients.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      },
      {
        name: "Julie Moreau",
        position: "COO, EduSoft",
        text: "Travailler avec CGUITECH a été une excellente décision. Leur support continu et leur réactivité font toute la différence dans notre collaboration.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ];

    return (
        <PublicLayout>
            {/* Bannière principale avec slider */}
            <section className="bg-gradient-to-b from-gray-900 via-primary/80 to-indigo-900 py-20 md:py-28 text-white relative overflow-hidden">
                {/* Formes décoratives */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-600 opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-yellow-500 opacity-5 blur-2xl"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {slides.map((slide, index) => (
                                <CarouselItem key={index}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                                            <Badge className="bg-black text-blue-200 mb-4 px-3 py-1 rounded-full font-medium">Leader Technologique en Guinée</Badge>
                                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                                                {slide.title} <span className="text-blue-300 block mt-2">{slide.subtitle}</span>
                                            </h1>
                                            <p className="mb-8 text-lg opacity-90 max-w-lg">
                                                CGUITECH vous accompagne dans votre transformation digitale avec des services IT sur mesure qui répondent précisément à vos besoins.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                                <Button className="bg-yellow-500 hover:bg-yellow-600 text-primary-900 text-lg px-8 py-6 font-medium rounded-full">
                                                    {slide.buttonText}
                                </Button>
                                                <Button className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full">
                                                    Nos services
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                                <div className="absolute inset-0 bg-primary-600 rounded-3xl opacity-20 blur transform rotate-6 scale-105"></div>
                                                <img src={slide.image} alt={slide.title} className="relative z-10 max-w-md rounded-3xl shadow-2xl border-4 border-white/10" />
                                                <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-primary-900 p-4 rounded-full shadow-lg z-20 hidden md:block">
                                                    <Award className="h-8 w-8" />
                                                </div>
                            </div>
                        </div>
                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                            <CarouselPrevious className="static bg-white/20 hover:bg-white/30 text-white border-none rounded-full h-12 w-12" />
                            <CarouselNext className="static bg-white/20 hover:bg-white/30 text-white border-none rounded-full h-12 w-12" />
                        </div>
                    </Carousel>
                </div>
            </section>

            {/* Section chiffres clés */}
            <section className="py-16 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary-900/10 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-8 rounded-2xl bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-primary">
                            <div className="text-5xl font-bold text-primary mb-3">28+</div>
                            <div className="text-gray-700 font-medium">Ans d'expérience</div>
                        </div>
                        <div className="p-8 rounded-2xl bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-primary">
                            <div className="text-5xl font-bold text-primary mb-3">45K+</div>
                            <div className="text-gray-700 font-medium">Clients satisfaits</div>
                        </div>
                        <div className="p-8 rounded-2xl bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-primary">
                            <div className="text-5xl font-bold text-primary mb-3">200+</div>
                            <div className="text-gray-700 font-medium">Projets réalisés</div>
                        </div>
                        <div className="p-8 rounded-2xl bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-primary">
                            <div className="text-5xl font-bold text-primary mb-3">50+</div>
                            <div className="text-gray-700 font-medium">Experts IT</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section services avec design amélioré */}
            <section className="py-24 bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden">
                {/* Éléments décoratifs en arrière-plan */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-200 opacity-40 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-yellow-100 opacity-40 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <Badge className="bg-primary-100 text-primary mb-4 px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider">Nos Services</Badge>
                        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">Solutions technologiques complètes</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
                            Notre expertise couvre tous les aspects des technologies de l'information pour répondre à vos besoins professionnels avec excellence.
                        </p>
                    </div>
                    
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-6">
                        {services.map((service, index) => (
                                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                    <Card className="h-full border-0 hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group relative">
                                        {/* Image de fond avec effet de zoom au survol */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                                        <div className="absolute inset-0 overflow-hidden">
                                            <img 
                                                src={service.image} 
                                                alt={service.title}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                            />
                                        </div>
                                        
                                        {/* Contenu de la carte */}
                                        <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                                            <div>
                                                <div className="p-4 bg-white/90 backdrop-blur-md rounded-2xl inline-block mb-6 text-primary group-hover:bg-primary group-hover:text-white shadow-lg transition-all duration-300 transform group-hover:scale-110">
                                    {service.icon}
                                </div>
                                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-100 transition-colors duration-300">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-200 mb-6 opacity-90 group-hover:opacity-100 max-w-xs">
                                                    {service.description}
                                                </p>
                                            </div>
                                            
                                <Link
                                                href={service.link} 
                                                className="inline-flex items-center text-white bg-primary/80 backdrop-blur-sm hover:bg-primary px-5 py-3 rounded-full font-medium text-sm group-hover:shadow-lg transition-all duration-300 w-fit"
                                >
                                                En savoir plus <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                        </div>
                            </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        {/* Contrôles de navigation améliorés */}
                        <div className="flex justify-center gap-4 mt-12">
                            <CarouselPrevious className="static bg-white hover:bg-primary hover:text-white text-primary border-none rounded-full h-14 w-14 shadow-lg transition-all duration-300 hover:scale-110" />
                            <CarouselNext className="static bg-white hover:bg-primary hover:text-white text-primary border-none rounded-full h-14 w-14 shadow-lg transition-all duration-300 hover:scale-110" />
                    </div>
                    </Carousel>
                    
                    {/* Bouton CTA amélioré */}
                    <div className="text-center mt-16">
                        <Button className="bg-primary hover:bg-primary-600 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium">
                            Découvrir tous nos services
                        </Button>
                    </div>
                </div>
            </section>

            {/* Section À propos / Pourquoi nous choisir */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -top-8 -left-8 w-36 h-36 bg-primary-100 rounded-2xl z-0"></div>
                            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br from-blue-900 via-blue-500 to-indigo-900 rounded-2xl z-0"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                                alt="À propos de CGUITECH" 
                                className="rounded-2xl shadow-2xl relative z-10 border-8 border-white"
                            />
                            <div className="absolute bottom-12 right-12 bg-white p-5 rounded-xl shadow-xl z-20 border-l-4 border-blue-300">
                                <div className="flex items-center">
                                    <div className="mr-4">
                                        <Award className="h-12 w-12 rounded-full text-white bg-gradient-to-br from-blue-900 via-blue-500 to-indigo-900" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">Prix d'Excellence</div>
                                        <div className="text-gray-600">Innovation Technologique {currentYear}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Badge className="bg-primary-100 text-primary mb-4 px-4 py-1 rounded-full">POURQUOI NOUS CHOISIR</Badge>
                            <h2 className="text-4xl font-bold mb-6">L'expertise technologique au service de votre succès</h2>
                            <p className="mb-8 text-gray-700 text-lg">
                                Chez CGUITECH, nous combinons expertise technique et compréhension approfondie des besoins métier. 
                                Notre approche personnalisée garantit des solutions technologiques qui répondent précisément à vos 
                                défis d'entreprise, vous permettant d'optimiser vos opérations, de réduire vos coûts et d'accélérer 
                                votre croissance.
                            </p>
                            
                            <div className="grid grid-cols-1 gap-6 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                                        <div className="p-2 bg-primary-100 rounded-full mr-4 mt-1">
                                            <CheckCircle2 className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-lg">{benefit.title}</h5>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <Button className="mt-6 bg-primary hover:bg-primary-600 text-lg px-8 py-6 rounded-full">
                                Découvrir notre équipe
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Témoignages avec vraies photos */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-primary-100 text-primary mb-4 px-4 py-1 rounded-full">TÉMOIGNAGES</Badge>
                        <h2 className="text-4xl font-bold mb-6">Ce que nos clients disent</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                            Découvrez l'impact de nos solutions à travers les expériences de nos clients.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="p-8 border-none shadow-xl rounded-2xl bg-white hover:transform hover:-translate-y-2 transition-all duration-300">
                                <div className="mb-6 text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-2xl">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                                <div className="flex items-center">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name} 
                                        className="w-12 h-12 rounded-full mr-4 border-2 border-primary object-cover"
                                    />
                                    <div>
                                        <h5 className="font-bold">{testimonial.name}</h5>
                                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                                    </div>
                            </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

{/* Section Industries avec design amélioré */}
<section className="py-24 bg-gradient-to-br from-blue-900 via-blue-500 to-indigo-900 text-white relative overflow-hidden">
    {/* Éléments décoratifs en arrière-plan */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-primary-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
            <Badge className="bg-white/10 backdrop-blur-sm text-white mb-6 px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider">Industries</Badge>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-white">Nous servons divers secteurs d'activité</h2>
            <p className="max-w-2xl mx-auto text-primary-50/90 text-lg leading-relaxed">
                Nos solutions sont adaptées aux besoins spécifiques de chaque secteur, avec une expertise approfondie des enjeux propres à votre industrie.
            </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
                <div 
                    key={index} 
                    className="group relative bg-gradient-to-br from-primary-700/80 to-primary-900/80 backdrop-blur-sm p-8 rounded-2xl text-center flex flex-col items-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer border border-primary-600/30 hover:border-primary-400/50 overflow-hidden"
                >
                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute -inset-x-full -inset-y-full w-[300%] h-[300%] top-0 left-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-br from-primary-400/50 to-primary-600/50 backdrop-blur-md rounded-full mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-primary-900/30 border border-primary-500/30">
                        <MapPin className="h-8 w-8 text-yellow-300 group-hover:text-yellow-200" />
                    </div>
                    
                    <p className="font-semibold text-lg text-white group-hover:text-primary-100 transition-colors duration-300">{industry}</p>
                    
                    {/* Indicateur discret */}
                    <div className="absolute bottom-3 w-10 h-1 bg-primary-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
            ))}
        </div>
        
        {/* Bouton CTA ajouté */}
        <div className="text-center mt-16">
            <Button className="bg-white text-primary hover:bg-primary-100 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium group">
                Explorer nos solutions par secteur
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
    </div>
    
    {/* Ajout pour les animations */}
    <style>{`
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .animate-shimmer {
            animation: shimmer 3s infinite;
        }
    `}</style>
            </section>

            {/* Section Partenaires */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 pb-10 shadow-xl">
                    <div className="text-center mb-16">
                        <Badge className="bg-primary-100 text-primary mb-4 px-4 py-1 rounded-full">NOS PARTENAIRES</Badge>
                        <h2 className="text-4xl font-bold mb-6">Nous collaborons avec les meilleurs</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">Des partenariats stratégiques pour vous offrir des solutions de pointe.</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center items-center gap-16">
                        {partners.map((partner, index) => (
                            <div key={index} className="p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:transform hover:scale-110">
                                <img src={partner.logo} alt={partner.name} className="h-16 w-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section className="py-20 bg-gradient-to-tl from-gray-900 via-primary/90 to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                            <div className="p-12 md:p-16">
                                <Badge className="bg-yellow-500 text-primary-900 mb-6 px-4 py-1 rounded-full font-medium">COMMENCEZ MAINTENANT</Badge>
                                <h2 className="text-4xl font-bold mb-6 text-white">Prêt à transformer votre infrastructure IT?</h2>
                                <p className="mb-8 text-white/90 text-lg">
                                    Contactez nos experts dès aujourd'hui pour une consultation gratuite et découvrez 
                                    comment CGUITECH peut accompagner votre entreprise vers l'excellence technologique.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-primary-900 px-8 py-6 text-lg font-medium rounded-full">
                                        Prendre rendez-vous
                                    </Button>
                                    <a href="tel:+224627969855" className="flex items-center text-white font-medium text-lg group">
                                        <div className="p-3 bg-white/20 rounded-full mr-3 group-hover:bg-white/30 transition-colors">
                                            <PhoneCall className="h-6 w-6" />
                                        </div>
                                        +224 627 96 98 55
                                    </a>
                                </div>
                        </div>
                            <div className="hidden md:block relative h-full">
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary-900/50 z-10"></div>
                                <img 
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                                    alt="Contactez-nous" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}