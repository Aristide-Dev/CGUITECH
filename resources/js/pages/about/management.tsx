import PublicLayout from '@/layouts/public-layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
    Users, Target, Award, Clock, 
    BarChart3, Shield, Zap, Heart,
    ChevronRight, PenTool, Code, Lightbulb
} from 'lucide-react';

export default function Management() {
    const methodologies = [
        {
            title: "Découverte & Analyse",
            description: "Nous commençons par une analyse approfondie de vos besoins, objectifs commerciaux et défis technologiques.",
            features: ["Analyse des besoins", "Étude de faisabilité", "Benchmark concurrentiel", "Définition des KPIs"]
        },
        {
            title: "Stratégie & Planification",
            description: "Nous élaborons une stratégie personnalisée et un plan d'action détaillé pour atteindre vos objectifs.",
            features: ["Feuille de route", "Allocation des ressources", "Gestion des risques", "Planification agile"]
        },
        {
            title: "Exécution & Développement",
            description: "Notre équipe d'experts met en œuvre la stratégie avec rigueur, transparence et flexibilité.",
            features: ["Développement itératif", "Tests continus", "Communication transparente", "Ajustements rapides"]
        },
        {
            title: "Mesure & Amélioration",
            description: "Nous évaluons constamment les performances et optimisons nos approches pour maximiser les résultats.",
            features: ["Analyse des données", "Optimisation continue", "Rapports détaillés", "Recommandations stratégiques"]
        }
    ];

    const values = [
        {
            icon: PenTool,
            title: "Créativité",
            description: "Nous abordons chaque défi avec une perspective fraîche et innovante, en trouvant des solutions créatives qui dépassent les attentes."
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Nous croyons au pouvoir du travail d'équipe et de la co-création avec nos clients pour atteindre l'excellence."
        },
        {
            icon: Shield,
            title: "Intégrité",
            description: "Nous agissons avec honnêteté, transparence et éthique dans toutes nos relations professionnelles."
        },
        {
            icon: Code,
            title: "Expertise",
            description: "Notre équipe est composée d'experts passionnés qui maîtrisent les technologies les plus avancées."
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Nous repoussons constamment les limites de la technologie pour créer des solutions d'avant-garde."
        },
        {
            icon: Heart,
            title: "Engagement",
            description: "Nous sommes pleinement engagés envers la réussite de nos clients et le succès de leurs projets."
        }
    ];

    const testimonials = [
        {
            quote: "Leur approche méthodique et leur expertise ont transformé notre vision en réalité, dépassant toutes nos attentes.",
            author: "Sophie Mercier",
            position: "Directrice Marketing, TechVision"
        },
        {
            quote: "Une équipe remarquable qui combine créativité et rigueur technique pour livrer des solutions exceptionnelles.",
            author: "Thomas Dubois",
            position: "CEO, InnoStart"
        },
        {
            quote: "Le meilleur investissement que nous ayons fait. Leur gestion de projet est impeccable et leurs résultats parlent d'eux-mêmes.",
            author: "Marie Laurent",
            position: "CTO, FutureLab"
        }
    ];

    return (
        <PublicLayout>
            {/* Hero Section avec vidéo en arrière-plan */}
            <div className="relative h-screen flex items-center">
                <div className="absolute inset-0 bg-black">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-black/50 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-[url('/images/management-bg.jpg')] bg-cover bg-center opacity-40"></div>
                </div>
                <div className="relative container mx-auto px-4 z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Excellence & <br/><span className="text-primary-200">Innovation</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mb-8">
                            Notre méthodologie de gestion unique combine rigueur analytique et créativité pour transformer vos défis en opportunités stratégiques.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                                Découvrir notre approche
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                                Prendre rendez-vous
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronRight className="w-10 h-10 text-white/80 rotate-90" />
                </div>
            </div>

            {/* Introduction Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Une approche centrée sur <span className="text-primary">vos objectifs</span></h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Dans un monde en constante évolution, la gestion de projets technologiques nécessite une 
                                approche agile, innovante et rigoureuse. Notre méthodologie exclusive a été développée 
                                pour s'adapter parfaitement à vos besoins spécifiques tout en garantissant des résultats 
                                exceptionnels.
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Nous ne nous contentons pas de livrer des projets - nous créons des partenariats durables 
                                qui génèrent une valeur mesurable et transforment votre vision en réalité.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-1 bg-primary"></div>
                                <p className="text-xl font-medium text-primary">98% de satisfaction client</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-[url('/images/team-working.jpg')] bg-cover bg-center"></div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 rounded-lg shadow-xl">
                                <div className="text-4xl font-bold mb-1">15+</div>
                                <div className="text-sm font-medium">années d'expertise</div>
                            </div>
                            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-lg shadow-xl">
                                <div className="text-4xl font-bold text-primary mb-1">200+</div>
                                <div className="text-sm font-medium text-gray-700">projets réussis</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section with Timeline */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Méthodologie</h2>
                        <p className="text-lg text-gray-700">
                            Un processus éprouvé qui garantit l'excellence à chaque étape de votre projet.
                        </p>
                    </div>
                    
                    <div className="space-y-12 relative before:absolute before:content-[''] before:w-1 before:bg-primary/20 before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:hidden md:before:block">
                        {methodologies.map((method, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center relative z-10`}>
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full items-center justify-center text-white font-bold">
                                    {index + 1}
                                </div>
                                <div className="w-full md:w-1/2 p-8">
                                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="md:hidden mb-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                                        <p className="text-gray-700 mb-6">{method.description}</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {method.features.map((feature, i) => (
                                                <div key={i} className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Valeurs</h2>
                        <p className="text-lg text-gray-700">
                            Ces principes fondamentaux guident chaque décision et action que nous prenons.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <value.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                <p className="text-gray-700">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Ce que nos clients disent</h2>
                        <p className="text-lg text-gray-300">
                            Découvrez comment notre approche transforme les défis en succès.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="p-8 bg-gray-800 border-none">
                                <div className="text-4xl text-primary mb-6">"</div>
                                <p className="text-lg mb-8">{testimonial.quote}</p>
                                <div>
                                    <p className="font-bold">{testimonial.author}</p>
                                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                            Voir plus de témoignages
                        </Button>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-primary">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">Prêt à transformer votre approche de gestion?</h2>
                        <p className="text-xl text-white/90 mb-12">
                            Prenez rendez-vous pour une consultation gratuite et découvrez comment 
                            notre expertise peut propulser votre projet vers le succès.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                                Prendre rendez-vous
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                                Télécharger notre brochure
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}