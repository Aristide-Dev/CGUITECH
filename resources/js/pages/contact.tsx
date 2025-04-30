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

export default function contact() {
    // const { auth } = usePage<SharedData>().props;
    const currentYear = new Date().getFullYear();

    // Données pour le slider avec images libres
    const slides = [
        {
            title: "Optimiser vos systèmes",
            subtitle: "Pour une meilleure performance digitale",
            image: "https://CGUITECH.com/wp-content/uploads/2023/05/imgHome.jpg",
            buttonText: "Rencontrez-nous"
        },
        {
            title: "Logiciels & Conception",
            subtitle: "Transformez vos processus techniques",
            image: "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041864.jpg?t=st=1745490258~exp=1745493858~hmac=b28a816fdbcf60ca8b8b888871e289394dd678f1aa31a043579a394c04b64e18&w=1380",
            buttonText: "Rencontrez-nous"
        },
        {
            title: "Entreprise Certifiée",
            subtitle: "Des prestations adaptées à votre mode de fonctionnement",
            image: "https://img.freepik.com/free-photo/smiling-businessman-with-cv_23-2147626473.jpg?t=st=1745490382~exp=1745493982~hmac=f0739eeebdbcfbe4c52789937f4182ba357d4e5880260565f48a9dddd3f0e73b&w=1380",
            buttonText: "En savoir plus"
        }
    ];

    return (
        <PublicLayout>
            {/* Bannière principale avec slider */}
            <section className="bg-gradient-to-b from-gray-900 via-primary/80 to-indigo-900 py-20 md:py-28 text-white relative overflow-hidden">
                {/* Formes décoratives améliorées */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-600 opacity-20 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-yellow-500 opacity-5 blur-2xl"></div>
                    <div className="absolute bottom-1/4 left-2/3 w-56 h-56 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {slides.map((slide, index) => (
                                <CarouselItem key={index} className="transition-all duration-500">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                        <div className="animate-fadeIn">
                                            <Badge className="bg-black/70 text-blue-200 mb-4 px-3 py-1 rounded-full font-medium backdrop-blur">Leader Technologique en Guinée</Badge>
                                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                                                {slide.title} <span className="text-blue-300 block mt-2">{slide.subtitle}</span>
                                            </h1>
                                            <p className="mb-8 text-lg opacity-90 max-w-lg">
                                                CGUITECH vous accompagne dans votre transformation digitale avec des services IT sur mesure qui répondent précisément à vos besoins.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <Link href={ route('contact.index') } className="bg-white hover:bg-gray-300 text-primary hover:text-blue-500 text-lg px-8 py-6 font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                                                    {slide.buttonText}
                                                </Link>
                                                <Link href={ route('services.index') } className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full transition-all duration-300">
                                                    Nos services
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            {/* Container avec amélioration pour l'image */}
                                            <div className="relative group transform transition-all duration-500 hover:scale-102">
                                                {/* Effet de halo derrière l'image */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-blue-400 rounded-3xl opacity-20 blur transform rotate-6 scale-105 group-hover:scale-110 transition-all duration-700"></div>
                                                
                                                {/* Cadre décoratif */}
                                                <div className="absolute inset-2 border-2 border-white/20 rounded-2xl rotate-3 opacity-80"></div>
                                                
                                                {/* Image principale avec effet de flottement */}
                                                <div className="overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl relative">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 z-10"></div>
                                                    <img 
                                                        src={slide.image} 
                                                        alt={slide.title} 
                                                        className="relative z-0 w-full object-cover h-96 transform transition-transform duration-5000 hover:scale-110" 
                                                    />
                                                </div>
                                                
                                                {/* Badge flottant */}
                                                <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-primary-900 p-4 rounded-full shadow-lg z-20 hidden md:block transition-all duration-300 hover:scale-110">
                                                    <Award className="h-8 w-8" />
                                                </div>
                                                
                                                {/* Points décoratifs */}
                                                <div className="absolute -top-4 -left-4 bg-blue-500 h-8 w-8 rounded-full opacity-70 hidden md:block"></div>
                                                <div className="absolute -bottom-4 left-1/3 bg-indigo-500 h-6 w-6 rounded-full opacity-60 hidden md:block"></div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        {/* Navigation améliorée */}
                        <div className="mt-8 flex justify-center items-center gap-4">
                            <CarouselPrevious className="static bg-white/20 hover:bg-white/40 text-white border-none rounded-full h-12 w-12 shadow-lg transition-all duration-300" />
                            
                            {/* Indicateurs de slides */}
                            <div className="flex gap-2">
                                {slides.map((_, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => {/* Fonction pour aller au slide spécifique */}}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            index === 0 ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                                        }`}
                                    />
                                ))}
                            </div>
                            
                            <CarouselNext className="static bg-white/20 hover:bg-white/40 text-white border-none rounded-full h-12 w-12 shadow-lg transition-all duration-300" />
                        </div>
                    </Carousel>
                </div>
            </section>
        </PublicLayout>
    );
}