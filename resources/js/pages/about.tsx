import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Award, Target, PieChart, ArrowRight, Star, Shield, Lightbulb } from 'lucide-react';

export default function About() {
    // Données pour l'équipe de direction
    const leaders = [
        {
            name: "Mohamed Camara",
            position: "Fondateur & PDG",
            bio: "Plus de 15 ans d'expérience dans le secteur technologique. Visionnaire et expert en transformation digitale.",
            image: "/api/placeholder/300/300"
        },
        {
            name: "Aminata Diallo",
            position: "Directrice Technique",
            bio: "Spécialiste des infrastructures cloud et de la cybersécurité avec une passion pour les technologies innovantes.",
            image: "/api/placeholder/300/300"
        },
        {
            name: "Ibrahim Touré",
            position: "Directeur des Opérations",
            bio: "Expert en gestion de projet et optimisation des processus avec un focus sur la satisfaction client.",
            image: "/api/placeholder/300/300"
        }
    ];

    // Données pour les statistiques
    const stats = [
        { number: "28", label: "Années d'expérience" },
        { number: "200+", label: "Projets réalisés" },
        { number: "50+", label: "Experts en technologie" },
        { number: "95%", label: "Clients satisfaits" }
    ];

    return (
        <PublicLayout 
            title="À propos de CGUITech | Notre Histoire et Notre Mission" 
            description="Découvrez l'histoire de CGUITech, notre équipe de direction et notre mission de fournir des solutions technologiques de pointe en Guinée."
        >
            {/* En-tête de page amélioré avec overlay et animation */}
            <section className="relative bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 py-24 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path fill="currentColor" d="M45.7,-51.9C59.5,-41.5,71.3,-27.5,74.4,-11.6C77.5,4.4,72,22.3,61.7,35.9C51.4,49.5,36.4,58.7,19.5,65.8C2.7,72.9,-16,77.8,-33.3,72.8C-50.7,67.8,-66.7,52.9,-72.5,35C-78.3,17.1,-73.9,-3.8,-65.8,-21.9C-57.6,-40,-45.8,-55.2,-31.9,-65.2C-18,-75.1,-1.9,-79.7,12.3,-75.7C26.5,-71.8,31.9,-62.3,45.7,-51.9Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="absolute left-0 bottom-0 w-1/3 h-full opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path fill="currentColor" d="M45.7,-51.9C59.5,-41.5,71.3,-27.5,74.4,-11.6C77.5,4.4,72,22.3,61.7,35.9C51.4,49.5,36.4,58.7,19.5,65.8C2.7,72.9,-16,77.8,-33.3,72.8C-50.7,67.8,-66.7,52.9,-72.5,35C-78.3,17.1,-73.9,-3.8,-65.8,-21.9C-57.6,-40,-45.8,-55.2,-31.9,-65.2C-18,-75.1,-1.9,-79.7,12.3,-75.7C26.5,-71.8,31.9,-62.3,45.7,-51.9Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="absolute left-1/2 bottom-0 w-1/3 h-full opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path fill="currentColor" d="M45.7,-51.9C59.5,-41.5,71.3,-27.5,74.4,-11.6C77.5,4.4,72,22.3,61.7,35.9C51.4,49.5,36.4,58.7,19.5,65.8C2.7,72.9,-16,77.8,-33.3,72.8C-50.7,67.8,-66.7,52.9,-72.5,35C-78.3,17.1,-73.9,-3.8,-65.8,-21.9C-57.6,-40,-45.8,-55.2,-31.9,-65.2C-18,-75.1,-1.9,-79.7,12.3,-75.7C26.5,-71.8,31.9,-62.3,45.7,-51.9Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl">
                        <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6 py-2 px-4 text-sm">À PROPOS DE NOUS</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">La référence technologique en Guinée</h1>
                        <p className="text-xl opacity-90 mb-8 leading-relaxed">
                            Créée en 1995, CGUITech s'est imposée comme le leader incontesté des solutions technologiques en Guinée et en Afrique de l'Ouest.
                        </p>
                        <Button className="bg-white text-primary-800 hover:bg-white/90 font-medium text-base px-6 py-5 flex items-center">
                            Découvrir nos services
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Statistics section */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                                <div className="text-gray-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notre histoire - Redesigned with better spacing and layout */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="bg-primary-100 text-primary mb-6 py-1.5">NOTRE HISTOIRE</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">28 années d'innovation et d'excellence technologique</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Fondée avec la vision claire de devenir un acteur majeur des technologies de l'information en Afrique, 
                                CGUITech a débuté comme une petite entreprise fournissant des services informatiques de base à Conakry.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Au fil des années, nous avons connu une croissance constante, élargissant notre gamme de services 
                                pour inclure le développement de logiciels personnalisés, les services cloud, la cybersécurité et 
                                les solutions d'infrastructure IT. Notre engagement envers l'excellence a créé une base de clients 
                                fidèles qui nous font confiance pour leurs besoins technologiques les plus critiques.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Aujourd'hui, avec plus de 50 experts en technologie et plus de 200 projets réussis, nous continuons
                                d'innover et de proposer des solutions qui propulsent nos clients vers le succès dans l'ère numérique.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <img src="/api/placeholder/400/400" 
                                    alt="Bureaux CGUITech" 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="aspect-square rounded-2xl overflow-hidden mt-12">
                                <img src="/api/placeholder/400/400" 
                                    alt="Équipe CGUITech" 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <img src="/api/placeholder/400/400" 
                                    alt="Installations CGUITech" 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="aspect-square rounded-2xl overflow-hidden mt-12">
                                <img src="/api/placeholder/400/400" 
                                    alt="Centre de données CGUITech" 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission et valeurs - Visually enhanced */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-primary-100 text-primary mb-4 py-1.5">MISSION & VALEURS</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ce qui nous guide au quotidien</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                            Notre mission et nos valeurs définissent qui nous sommes et orientent toutes nos décisions et actions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <div className="p-4 bg-primary-100 rounded-full inline-block mb-6">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Fournir des solutions technologiques innovantes qui permettent à nos clients d'atteindre leurs objectifs commerciaux et de prospérer dans un monde numérique en constante évolution.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <div className="p-4 bg-primary-100 rounded-full inline-block mb-6">
                                <Star className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Nous visons constamment l'excellence dans tout ce que nous faisons, en nous efforçant de dépasser les attentes et de fournir des résultats exceptionnels.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <div className="p-4 bg-primary-100 rounded-full inline-block mb-6">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Nous croyons que les meilleures solutions naissent d'une collaboration étroite, tant au sein de notre équipe qu'avec nos clients et partenaires.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <div className="p-4 bg-primary-100 rounded-full inline-block mb-6">
                                <Lightbulb className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Nous embrassons l'innovation et explorons constamment de nouvelles technologies et méthodologies pour offrir des solutions d'avant-garde.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre équipe de direction - Enhanced with hover effects */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-primary-100 text-primary mb-4 py-1.5">NOTRE ÉQUIPE</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Une équipe de direction expérimentée</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                            Notre équipe de direction combine expertise technique, vision stratégique et expérience du marché africain.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {leaders.map((leader, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-primary-100 p-1">
                                    <img 
                                        src={leader.image} 
                                        alt={leader.name} 
                                        className="w-full h-full object-cover rounded-full" 
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                                <p className="text-primary font-medium mb-6 text-lg">{leader.position}</p>
                                <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nos engagements - New section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-primary-100 text-primary mb-4 py-1.5">NOS ENGAGEMENTS</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Nous nous engageons envers</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                            Nos engagements reflètent notre volonté de contribuer positivement à notre environnement et à la société.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Sécurité et confidentialité</h3>
                            <p className="text-gray-600">
                                Nous garantissons la sécurité des données et la confidentialité de toutes les informations de nos clients.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                                <Lightbulb className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Formation technologique</h3>
                            <p className="text-gray-600">
                                Nous contribuons au développement des compétences technologiques en Guinée par des programmes de formation.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                                <PieChart className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Durabilité</h3>
                            <p className="text-gray-600">
                                Nous adoptons des pratiques durables et respectueuses de l'environnement dans toutes nos opérations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA - Enhanced with gradient background */}
            <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à travailler avec nous?</h2>
                    <p className="max-w-2xl mx-auto opacity-90 mb-10 text-lg">
                        Découvrez comment notre expertise peut vous aider à atteindre vos objectifs technologiques.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Button className="bg-white text-primary-800 hover:bg-white/90 font-medium text-base px-8 py-6">
                            Contactez-nous
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-base px-8 py-6">
                            Voir nos services
                        </Button>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}