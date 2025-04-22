import PublicLayout from '@/layouts/public-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Award, Target, PieChart } from 'lucide-react';

export default function About() {
    // Données pour l'équipe de direction
    const leaders = [
        {
            name: "Mohamed Camara",
            position: "Fondateur & PDG",
            bio: "Plus de 15 ans d'expérience dans le secteur technologique. Visionnaire et expert en transformation digitale.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Aminata Diallo",
            position: "Directrice Technique",
            bio: "Spécialiste des infrastructures cloud et de la cybersécurité avec une passion pour les technologies innovantes.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Ibrahim Touré",
            position: "Directeur des Opérations",
            bio: "Expert en gestion de projet et optimisation des processus avec un focus sur la satisfaction client.",
            image: "https://randomuser.me/api/portraits/men/22.jpg"
        }
    ];

    return (
        <PublicLayout 
            title="À propos de CGUITech | Notre Histoire et Notre Mission" 
            description="Découvrez l'histoire de CGUITech, notre équipe de direction et notre mission de fournir des solutions technologiques de pointe en Guinée."
        >
            {/* En-tête de page */}
            <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 py-20 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="bg-primary-700 text-white mb-4">À PROPOS DE NOUS</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">La référence technologique en Guinée</h1>
                        <p className="text-xl opacity-90 mb-6">
                            Créée en 1995, CGUITech s'est imposée comme le leader incontesté des solutions technologiques en Guinée et en Afrique de l'Ouest.
                        </p>
                    </div>
                </div>
            </section>

            {/* Notre histoire */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-primary-100 text-primary mb-4">NOTRE HISTOIRE</Badge>
                            <h2 className="text-3xl font-bold mb-6">28 années d'innovation et d'excellence</h2>
                            <p className="text-gray-700 mb-4">
                                Fondée avec la vision claire de devenir un acteur majeur des technologies de l'information en Afrique, 
                                CGUITech a débuté comme une petite entreprise fournissant des services informatiques de base à Conakry.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Au fil des années, nous avons connu une croissance constante, élargissant notre gamme de services 
                                pour inclure le développement de logiciels personnalisés, les services cloud, la cybersécurité et 
                                les solutions d'infrastructure IT. Notre engagement envers l'excellence a créé une base de clients 
                                fidèles qui nous font confiance pour leurs besoins technologiques les plus critiques.
                            </p>
                            <p className="text-gray-700">
                                Aujourd'hui, avec plus de 50 experts en technologie et plus de 200 projets réussis, nous continuons
                                d'innover et de proposer des solutions qui propulsent nos clients vers le succès dans l'ère numérique.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                                    alt="Bureaux CGUITech" 
                                    className="w-full h-full object-cover" />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden mt-8">
                                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                                    alt="Équipe CGUITech" 
                                    className="w-full h-full object-cover" />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                                    alt="Installations CGUITech" 
                                    className="w-full h-full object-cover" />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden mt-8">
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                                    alt="Centre de données CGUITech" 
                                    className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission et valeurs */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-primary-100 text-primary mb-4">MISSION & VALEURS</Badge>
                        <h2 className="text-3xl font-bold mb-4">Ce qui nous guide au quotidien</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            Notre mission et nos valeurs définissent qui nous sommes et orientent toutes nos décisions et actions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <div className="p-3 bg-primary-100 rounded-lg inline-block mb-4">
                                <Target className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Notre Mission</h3>
                            <p className="text-gray-600">
                                Fournir des solutions technologiques innovantes qui permettent à nos clients d'atteindre leurs objectifs commerciaux et de prospérer dans un monde numérique en constante évolution.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <div className="p-3 bg-primary-100 rounded-lg inline-block mb-4">
                                <Award className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Excellence</h3>
                            <p className="text-gray-600">
                                Nous visons constamment l'excellence dans tout ce que nous faisons, en nous efforçant de dépasser les attentes et de fournir des résultats exceptionnels.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <div className="p-3 bg-primary-100 rounded-lg inline-block mb-4">
                                <Users className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                            <p className="text-gray-600">
                                Nous croyons que les meilleures solutions naissent d'une collaboration étroite, tant au sein de notre équipe qu'avec nos clients et partenaires.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <div className="p-3 bg-primary-100 rounded-lg inline-block mb-4">
                                <PieChart className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Innovation</h3>
                            <p className="text-gray-600">
                                Nous embrassons l'innovation et explorons constamment de nouvelles technologies et méthodologies pour offrir des solutions d'avant-garde.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre équipe de direction */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-primary-100 text-primary mb-4">NOTRE ÉQUIPE</Badge>
                        <h2 className="text-3xl font-bold mb-4">Une équipe de direction expérimentée</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            Notre équipe de direction combine expertise technique, vision stratégique et expérience du marché africain.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {leaders.map((leader, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                                    <img 
                                        src={leader.image} 
                                        alt={leader.name} 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                                <p className="text-primary font-medium mb-4">{leader.position}</p>
                                <p className="text-gray-600">{leader.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Prêt à travailler avec nous?</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                        Découvrez comment notre expertise peut vous aider à atteindre vos objectifs technologiques.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button className="bg-primary hover:bg-primary-600">
                            Contactez-nous
                        </Button>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                            Voir nos services
                        </Button>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
} 