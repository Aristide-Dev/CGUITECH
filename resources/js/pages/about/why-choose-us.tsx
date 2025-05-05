import PublicLayout from '@/layouts/public-layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
    Award, Clock, Users, Shield,
    Zap, Heart, BarChart3, Star
} from 'lucide-react';

import { CGUITECH } from '@/utils/index';

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Award,
            title: "Expertise Reconnue",
            description: `Plus de ${CGUITECH.contactInfo.experience_year} ans d'expérience dans le domaine des technologies de l'information.`
        },
        {
            icon: Clock,
            title: "Support 24/7",
            description: "Une équipe de support disponible 24h/24 et 7j/7 pour répondre à vos besoins."
        },
        {
            icon: Users,
            title: "Équipe Qualifiée",
            description: "Des professionnels certifiés et expérimentés à votre service."
        },
        {
            icon: Shield,
            title: "Sécurité Garantie",
            description: "Des solutions sécurisées et conformes aux normes internationales."
        },
        {
            icon: Zap,
            title: "Innovation Continue",
            description: "Toujours à la pointe des dernières technologies et tendances."
        },
        {
            icon: Heart,
            title: "Satisfaction Client",
            description: "Plus de 45 000 clients satisfaits à travers le monde."
        },
        {
            icon: BarChart3,
            title: "Performance",
            description: "Des solutions optimisées pour des performances maximales."
        },
        {
            icon: Star,
            title: "Qualité Premium",
            description: "Des services et produits de haute qualité à des prix compétitifs."
        }
    ];

    const stats = [
        { number: CGUITECH.contactInfo.experience_year, label: "Ans d'expérience" },
        { number: "45K+", label: "Clients satisfaits" },
        { number: "100%", label: "Satisfaction client" },
        { number: "24/7", label: "Support disponible" }
    ];

    return (
        <PublicLayout>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary-800 py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/why-choose-us-bg.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                <div className="relative container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Pourquoi Nous Choisir ?</h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Découvrez pourquoi CGUITECH est le partenaire technologique idéal pour votre entreprise.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                                <div className="text-white/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reasons Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason, index) => (
                            <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <reason.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                                    <p className="text-gray-600">{reason.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Prêt à Commencer ?</h2>
                        <p className="text-gray-600 mb-8">
                            Rejoignez les milliers d'entreprises qui font confiance à CGUITECH pour leurs besoins technologiques.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-primary text-white font-medium py-3 px-8 rounded-lg hover:bg-primary-700 transition-colors"
                        >
                            Contactez-nous
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
} 