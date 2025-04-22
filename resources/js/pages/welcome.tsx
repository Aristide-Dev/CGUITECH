import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  PhoneCall, 
  Mail, 
  Code, 
  Server, 
  Cloud, 
  Shield,
  Award,
  CheckCircle2
} from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const currentYear = new Date().getFullYear();

    // Données simplifiées pour les services
    const services = [
      {
        icon: <Code />,
        title: "Développement Logiciel",
        description: "Applications sur mesure pour répondre exactement à vos besoins métier spécifiques.",
        link: "/services/software"
      },
      {
        icon: <Shield />,
        title: "Cybersécurité",
        description: "Protection avancée contre les menaces numériques pour sécuriser vos données critiques.",
        link: "/services/security"
      },
      {
        icon: <Cloud />,
        title: "Solutions Cloud",
        description: "Infrastructure cloud évolutive pour plus de flexibilité et d'efficacité opérationnelle.",
        link: "/services/cloud"
      },
      {
        icon: <Server />,
        title: "Gestion IT",
        description: "Services IT complets pour que vous puissiez vous concentrer sur votre cœur de métier.",
        link: "/services/it-management"
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
        { name: "Oracle", logo: "https://cguitech.com/wp-content/uploads/2023/05/Oracle-Logo.png" },
        { name: "Serbadinamik", logo: "https://cguitech.com/wp-content/uploads/2023/05/Logo-Serbadinamik.png" },
        { name: "Ricoh", logo: "https://cguitech.com/wp-content/uploads/2023/05/ricoh.png" },
    ];

    return (
        <PublicLayout>
            {/* Bannière principale */}
            <section className="bg-gradient-to-r from-primary via-primary-800 to-primary-700 py-16 md:py-24 text-white relative overflow-hidden">
                {/* Formes décoratives */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-600 opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-primary-500 text-white mb-4 px-3 py-1">Leader Technologique en Guinée</Badge>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions technologiques <span className="text-yellow-300">innovantes</span> pour votre entreprise</h1>
                            <p className="mb-8 text-lg opacity-90">
                                CGUITech vous accompagne dans votre transformation digitale avec des services IT sur mesure qui répondent précisément à vos besoins.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-6 py-3 font-medium">
                                    Nous contacter
                                </Button>
                                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-6 py-3">
                                    Découvrir nos services
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary-600 rounded-lg opacity-20 blur transform rotate-6 scale-105"></div>
                                <img src="https://cguitech.com/wp-content/uploads/2023/05/imgHome.jpg" alt="Solutions technologiques" className="relative z-10 max-w-md rounded-lg shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section chiffres clés */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 rounded-lg bg-gray-50 shadow-sm">
                            <div className="text-4xl font-bold text-primary mb-2">28+</div>
                            <div className="text-gray-700">Ans d'expérience</div>
                        </div>
                        <div className="p-6 rounded-lg bg-gray-50 shadow-sm">
                            <div className="text-4xl font-bold text-primary mb-2">45K+</div>
                            <div className="text-gray-700">Clients satisfaits</div>
                        </div>
                        <div className="p-6 rounded-lg bg-gray-50 shadow-sm">
                            <div className="text-4xl font-bold text-primary mb-2">200+</div>
                            <div className="text-gray-700">Projets réalisés</div>
                        </div>
                        <div className="p-6 rounded-lg bg-gray-50 shadow-sm">
                            <div className="text-4xl font-bold text-primary mb-2">50+</div>
                            <div className="text-gray-700">Experts IT</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section services */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="bg-primary-100 text-primary mb-4">NOS SERVICES</Badge>
                        <h2 className="text-3xl font-bold mb-4">Solutions technologiques complètes</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            Notre expertise couvre tous les aspects des technologies de l'information pour répondre à vos besoins professionnels.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <Card key={index} className="p-6 border border-transparent hover:border-primary hover:shadow-xl transition-all duration-300">
                                <div className="p-3 bg-primary-100 rounded-lg inline-block mb-4 text-primary">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <Link href={service.link} className="flex items-center text-primary font-medium group">
                                    En savoir plus <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                                </Link>
                            </Card>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                        <Button className="bg-primary hover:bg-primary-600">
                            Voir tous nos services
                        </Button>
                    </div>
                </div>
            </section>

            {/* Section À propos / Pourquoi nous choisir */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary-100 rounded-lg z-0"></div>
                            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-yellow-100 rounded-lg z-0"></div>
                            <img src="https://cguitech.com/wp-content/uploads/2023/05/imgHome.jpg" alt="À propos de CGUITech" className="rounded-lg shadow-lg relative z-10" />
                            <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg z-20">
                                <div className="flex items-center">
                                    <div className="mr-3">
                                        <Award className="h-10 w-10 text-yellow-500" />
                                    </div>
                                    <div>
                                        <div className="font-bold">Prix d'Excellence</div>
                                        <div className="text-sm text-gray-600">Innovation Technologique {currentYear}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Badge className="bg-primary-100 text-primary mb-4">POURQUOI NOUS CHOISIR</Badge>
                            <h2 className="text-3xl font-bold mb-6">L'expertise technologique au service de votre succès</h2>
                            <p className="mb-8 text-gray-700">
                                Chez CGUITech, nous combinons expertise technique et compréhension approfondie des besoins métier. 
                                Notre approche personnalisée garantit des solutions technologiques qui répondent précisément à vos 
                                défis d'entreprise, vous permettant d'optimiser vos opérations, de réduire vos coûts et d'accélérer 
                                votre croissance.
                            </p>
                            
                            <div className="grid grid-cols-1 gap-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                                            <CheckCircle2 className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h5 className="font-semibold">{benefit.title}</h5>
                                            <p className="text-sm text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <Button className="mt-4 bg-primary hover:bg-primary-600">
                                Découvrir notre équipe
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Industries */}
            <section className="py-16 bg-primary-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="bg-primary-700 text-white mb-4">INDUSTRIES</Badge>
                        <h2 className="text-3xl font-bold mb-4">Nous servons divers secteurs d'activité</h2>
                        <p className="max-w-2xl mx-auto opacity-90">
                            Nos solutions sont adaptées aux besoins spécifiques de chaque secteur, avec une expertise approfondie des enjeux propres à votre industrie.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industries.map((industry, index) => (
                            <div key={index} className="bg-primary-800 hover:bg-primary-700 transition-colors p-6 rounded-lg text-center">
                                <p className="font-medium">{industry}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Partenaires */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="bg-primary-100 text-primary mb-4">NOS PARTENAIRES</Badge>
                        <h2 className="text-3xl font-bold mb-4">Nous collaborons avec les meilleurs</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">Des partenariats stratégiques pour vous offrir des solutions de pointe.</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        {partners.map((partner, index) => (
                            <div key={index} className="p-4 grayscale hover:grayscale-0 transition-all duration-300">
                                <img src={partner.logo} alt={partner.name} className="h-16 w-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="bg-primary-100 rounded-2xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                            <div className="p-8 md:p-12">
                                <Badge className="bg-primary-500 text-white mb-4">COMMENCEZ MAINTENANT</Badge>
                                <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre infrastructure IT?</h2>
                                <p className="mb-6 text-gray-700">
                                    Contactez nos experts dès aujourd'hui pour une consultation gratuite et découvrez 
                                    comment CGUITech peut accompagner votre entreprise vers l'excellence technologique.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button className="bg-primary hover:bg-primary-600 text-white">
                                        Prendre rendez-vous
                                    </Button>
                                    <a href="tel:+224627969855" className="flex items-center text-primary font-medium">
                                        <PhoneCall className="h-5 w-5 mr-2" />
                                        +224 627 96 98 55
                                    </a>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <img 
                                    src="https://cguitech.com/wp-content/uploads/2023/05/contact-us.jpg" 
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