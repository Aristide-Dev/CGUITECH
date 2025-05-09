// import { type SharedData } from '@/types';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    PhoneCall,
    Award,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import { CGUITECH } from '@/utils/index';

export default function Welcome() {
    // const { auth } = usePage<SharedData>().props;
    const currentYear = new Date().getFullYear();
    const [activeSlide, setActiveSlide] = useState(0);
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();

    // Effet d'animation pour les slides
    const slideInterval = 5000; // 5 secondes entre chaque slide
    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselApi) {
                carouselApi.scrollNext();
            }
        }, slideInterval);

        return () => clearInterval(interval);
    }, [carouselApi]);

    useEffect(() => {
        if (!carouselApi) return;

        carouselApi.on("select", () => {
            setActiveSlide(carouselApi.selectedScrollSnap());
        });
    }, [carouselApi]);

    // Données pour le slider avec images libres
    const slides = [
        {
            title: "Optimiser vos systèmes",
            subtitle: "Pour une meilleure performance digitale",
            image: "images/welcome/slides/imgHome.jpg",
            buttonText: "Rencontrez-nous"
        },
        {
            title: "Logiciels & Conception",
            subtitle: "Transformez vos processus techniques",
            image: "/images/welcome/slides/ai-assistant-hover-3.mp4",
            type: 'video', 
            buttonText: "Rencontrez-nous"
        },
        {
            title: "Entreprise Certifiée",
            subtitle: "Des prestations adaptées à votre mode de fonctionnement",
            image: "images/welcome/slides/smiling-businessman-with-cv.jpg",
            buttonText: "En savoir plus"
        }
    ];

    // Données pour les avantages
    const benefits = [
        {
            title: "Expertise éprouvée",
            description: `Notre équipe combine plus de ${CGUITECH.contactInfo.experience_year} ans d'expérience dans les technologies les plus récentes.`
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

    // Variants d'animation pour les éléments
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <PublicLayout>
            {/* Bannière principale avec slider */}
            <section className="bg-gradient-to-b from-gray-900 via-primary/80 to-indigo-900 py-20 md:py-28 text-white relative overflow-hidden">
                {/* Formes décoratives améliorées et animées */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <motion.div 
                        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-600 opacity-20 blur-3xl"
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
                        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-500 opacity-10 blur-3xl"
                        animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    ></motion.div>
                    <motion.div 
                        className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-yellow-500 opacity-5 blur-2xl"
                        animate={{ 
                            x: [0, 20, 0],
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>
                    <motion.div 
                        className="absolute bottom-1/4 left-2/3 w-56 h-56 rounded-full bg-blue-500 opacity-10 blur-3xl"
                        animate={{ 
                            x: [0, -30, 0],
                            y: [0, 20, 0]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    ></motion.div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Carousel 
                        className="w-full"
                        setApi={setCarouselApi}
                    >
                        <CarouselContent>
                            {slides.map((slide, index) => (
                                <CarouselItem key={index} className="transition-all duration-500">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                        <motion.div
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate={activeSlide === index ? "visible" : "hidden"}
                                            className="space-y-6"
                                        >
                                            <motion.div variants={itemVariants}>
                                                <Badge className="bg-black/70 text-blue-200 mb-4 px-3 py-1 rounded-full font-medium backdrop-blur">Leader Technologique en Guinée</Badge>
                                            </motion.div>
                                            <motion.h1 
                                                variants={itemVariants}
                                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
                                            >
                                                {slide.title} <span className="text-blue-300 block mt-2">{slide.subtitle}</span>
                                            </motion.h1>
                                            <motion.p 
                                                variants={itemVariants}
                                                className="mb-8 text-lg opacity-90 max-w-lg"
                                            >
                                                CGUITECH vous accompagne dans votre transformation digitale avec des services IT sur mesure qui répondent précisément à vos besoins.
                                            </motion.p>
                                            <motion.div 
                                                variants={itemVariants}
                                                className="flex flex-col sm:flex-row gap-4"
                                            >
                                                <Link href={ route('contact.index') } className="bg-white hover:bg-gray-300 text-primary hover:text-blue-500 text-lg px-8 py-6 font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                                    {slide.buttonText}
                                                </Link>
                                                <Link href={ route('services.index') } className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105">
                                                    Nos services
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                        <div className="flex justify-center">
                                            {/* Container avec amélioration pour l'image */}
                                            <motion.div 
                                                className="relative group transform transition-all duration-500 hover:scale-102"
                                                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                            >
                                                {/* Effet de halo derrière l'image */}
                                                <motion.div 
                                                    className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-blue-400 rounded-3xl opacity-20 blur transform rotate-6 scale-105"
                                                    animate={{ scale: [1.05, 1.1, 1.05], rotate: [6, 4, 6] }}
                                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                                ></motion.div>
                                                
                                                {/* Cadre décoratif */}
                                                <motion.div 
                                                    className="absolute inset-0 border-5 border-white/20 rounded-2xl rotate-8 opacity-80"
                                                    animate={{ rotate: [8, 6, 8] }}
                                                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                                                ></motion.div>
                                                
                                                {/* Image principale avec effet de flottement */}
                                                <div className="overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl relative">
                                                    {slide.type === 'video' ? (
                                                    <video 
                                                        autoPlay={true} 
                                                        loop={true}
                                                        className="relative z-0 w-full object-cover h-96 transform transition-transform duration-5000 hover:scale-110" 
                                                    >
                                                        <source src={slide.image} type="video/mp4"/> 
                                                    </video>
                                                    ):(
                                                        <img 
                                                            src={slide.image} 
                                                            alt={slide.title} 
                                                            className="relative z-0 w-full object-cover h-96 transform transition-transform duration-5000 hover:scale-110" 
                                                        />
                                                    )}
                                                </div>
                                                
                                                {/* Badge flottant */}
                                                <motion.div 
                                                    className="absolute -bottom-6 -right-6 bg-white text-primary-900 p-4 rounded-full shadow-lg z-20 hidden md:block"
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.5, duration: 0.6 }}
                                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                                >
                                                    <Award className="h-8 w-8" />
                                                </motion.div>
                                                
                                                {/* Points décoratifs */}
                                                <motion.div 
                                                    className="absolute -top-4 -left-4 bg-blue-500 h-8 w-8 rounded-full opacity-70 hidden md:block"
                                                    animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                                ></motion.div>
                                                <motion.div 
                                                    className="absolute -bottom-4 left-1/3 bg-indigo-500 h-6 w-6 rounded-full opacity-60 hidden md:block"
                                                    animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
                                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                                ></motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        {/* Navigation améliorée et animée */}
                        <div className="mt-8 flex justify-center items-center gap-4">
                            <motion.div 
                                whileHover={{ scale: 1.2 }} 
                                whileTap={{ scale: 0.9 }}
                            >
                                <CarouselPrevious className="static bg-white/20 hover:bg-white/40 text-white border-none rounded-full h-12 w-12 shadow-lg transition-all duration-300" />
                            </motion.div>
                            
                            {/* Indicateurs de slides */}
                            <div className="flex gap-2">
                                {slides.map((_, index) => (
                                    <motion.button 
                                        key={index}
                                        onClick={() => carouselApi?.scrollTo(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            index === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                                        }`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    />
                                ))}
                            </div>
                            
                            <motion.div 
                                whileHover={{ scale: 1.2 }} 
                                whileTap={{ scale: 0.9 }}
                            >
                                <CarouselNext className="static bg-white/20 hover:bg-white/40 text-white border-none rounded-full h-12 w-12 shadow-lg transition-all duration-300" />
                            </motion.div>
                        </div>
                    </Carousel>
                </div>
            </section>

            {/* Section chiffres clés */}
            {/* <section className="py-16 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary-900/10 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-8 rounded-2xl bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-primary">
                            <div className="text-5xl font-bold text-primary mb-3">{CGUITECH.contactInfo.experience_year}+</div>
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
            </section> */}

            {/* Section services avec design amélioré */}
            <section className="py-24 bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden">
                {/* Éléments décoratifs en arrière-plan */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <motion.div 
                        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-200 opacity-40 blur-3xl"
                        animate={{ 
                            x: [0, 30, 0],
                            opacity: [0.4, 0.5, 0.4]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>
                    <motion.div 
                        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-yellow-100 opacity-40 blur-3xl"
                        animate={{ 
                            y: [0, 40, 0],
                            opacity: [0.4, 0.6, 0.4]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>
                    <motion.div 
                        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl"
                        animate={{ 
                            scale: [1, 1.3, 1],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <Badge className="bg-primary-100 text-primary mb-4 px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider">Nos Services</Badge>
                        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">Solutions technologiques complètes</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
                            Notre expertise couvre tous les aspects des technologies de l'information pour répondre à vos besoins professionnels avec excellence.
                        </p>
                    </motion.div>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-6">
                            {CGUITECH.services.map((service, index) => (
                                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        whileHover={{ y: -10 }}
                                    >
                                        <Card className="h-full border-0 hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group relative">
                                            {/* Image de fond avec effet de zoom au survol */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                                            <div className="absolute inset-0 overflow-hidden">
                                                <motion.img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                                                    whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
                                                />
                                            </div>

                                            {/* Contenu de la carte */}
                                            <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                                                <div>
                                                    <motion.div 
                                                        className="p-4 bg-white/90 backdrop-blur-md rounded-2xl inline-block mb-6 text-primary group-hover:bg-primary group-hover:text-white shadow-lg transition-all duration-300"
                                                        whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                                                    >
                                                        {service.icon}
                                                    </motion.div>
                                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-100 transition-colors duration-300">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-gray-200 mb-6 opacity-90 group-hover:opacity-100 max-w-xs">
                                                        {service.description}
                                                    </p>
                                                </div>

                                                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                                                    <Link
                                                        href={service.link}
                                                        className="inline-flex items-center text-white bg-primary/80 backdrop-blur-sm hover:bg-primary px-5 py-3 rounded-full font-medium text-sm group-hover:shadow-lg transition-all duration-300 w-fit"
                                                    >
                                                        En savoir plus 
                                                        <motion.span 
                                                            initial={{ x: 0 }}
                                                            whileHover={{ x: 3 }}
                                                            transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                                                        >
                                                            <ArrowRight className="ml-2 h-4 w-4" />
                                                        </motion.span>
                                                    </Link>
                                                </motion.div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Contrôles de navigation améliorés */}
                        <div className="flex justify-center gap-4 mt-12">
                            <motion.div 
                                whileHover={{ scale: 1.2, rotate: -5 }} 
                                whileTap={{ scale: 0.9 }}
                            >
                                <CarouselPrevious className="static bg-white hover:bg-primary hover:text-white text-primary border-none rounded-full h-14 w-14 shadow-lg transition-all duration-300" />
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.2, rotate: 5 }} 
                                whileTap={{ scale: 0.9 }}
                            >
                                <CarouselNext className="static bg-white hover:bg-primary hover:text-white text-primary border-none rounded-full h-14 w-14 shadow-lg transition-all duration-300" />
                            </motion.div>
                        </div>
                    </Carousel>

                    {/* Bouton CTA amélioré */}
                    <motion.div 
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={route('services.index')} className="bg-primary hover:bg-primary-600 text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium inline-flex items-center">
                                Découvrir tous nos services
                                <motion.span 
                                    initial={{ x: 0 }}
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                                >
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </motion.span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section À propos / Pourquoi nous choisir */}
            <section className="py-24 bg-white bg-[url('/images/welcome/about-bg.jpg')] bg-no-repeat bg-cover">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div 
                                className="absolute -top-8 -left-8 w-36 h-36 bg-gradient-to-tr from-primary-900 via-blue-500 to-indigo-900 rounded-2xl z-0"
                                animate={{ 
                                    rotate: [0, 5, 0, -5, 0],
                                    scale: [1, 1.05, 1, 1.05, 1]
                                }}
                                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                            ></motion.div>
                            <motion.div 
                                className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br from-blue-900 via-blue-500 to-indigo-900 rounded-2xl z-0"
                                animate={{ 
                                    rotate: [0, -5, 0, 5, 0],
                                    scale: [1, 1.05, 1, 1.05, 1]
                                }}
                                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            ></motion.div>
                            <motion.div
                                className="relative z-10"
                                whileHover={{ scale: 1.03, transition: { duration: 0.5 } }}
                            >
                                <img
                                    src="/images/welcome/about-card.jpg"
                                    alt="À propos de CGUITECH"
                                    className="rounded-2xl shadow-2xl border-8 border-white max-h-sm"
                                />
                            </motion.div>
                            <motion.div 
                                className="absolute bottom-12 right-12 bg-white p-5 rounded-xl shadow-xl z-20 border-l-4 border-blue-300"
                                initial={{ opacity: 0, y: 50, x: 20 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 102, 0.25)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="flex items-center">
                                    <motion.div 
                                        className="mr-4"
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Award className="h-12 w-12 rounded-full text-white bg-gradient-to-br from-blue-900 via-blue-500 to-indigo-900" />
                                    </motion.div>
                                    <div>
                                        <div className="font-bold text-lg">Entreprise Certifiée</div>
                                        <div className="text-gray-600">Nous adaptons notre prestation à votre mode de fonctionnement</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
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
                                    <motion.div 
                                        key={index} 
                                        className="flex items-start p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        whileHover={{ 
                                            x: 5, 
                                            backgroundColor: "#f8fafc",
                                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <motion.div 
                                            className="p-2 bg-primary-100 rounded-full mr-4 mt-1"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                        >
                                            <CheckCircle2 className="h-6 w-6 text-primary" />
                                        </motion.div>
                                        <div>
                                            <h5 className="font-bold text-lg">{benefit.title}</h5>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button className="mt-6 bg-primary hover:bg-primary-600 text-lg px-8 py-6 rounded-full">
                                    Découvrir notre équipe
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section Témoignages avec vraies photos */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <Badge className="bg-primary-100 text-primary mb-4 px-4 py-1 rounded-full">TÉMOIGNAGES</Badge>
                        <h2 className="text-4xl font-bold mb-6">Ce que nos clients disent</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                            Découvrez l'impact de nos solutions à travers les expériences de nos clients.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {CGUITECH.testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="p-8 border-none shadow-xl rounded-2xl bg-white hover:transform transition-all duration-300">
                                    <motion.div 
                                        className="mb-6 text-yellow-500"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3 + index * 0.1, staggerChildren: 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <motion.span 
                                                key={i} 
                                                className="text-2xl"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                            >★</motion.span>
                                        ))}
                                    </motion.div>
                                    <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                                    <div className="flex items-center">
                                        <motion.img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full mr-4 border-2 border-primary object-cover"
                                            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                                        />
                                        <div>
                                            <h5 className="font-bold">{testimonial.name}</h5>
                                            <p className="text-sm text-gray-500">{testimonial.position}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Industries */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <motion.div 
                        className="absolute top-20 right-20 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl"
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
                        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"
                        animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    ></motion.div>
                    <motion.div 
                        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"
                        animate={{ 
                            x: [0, 30, 0],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <Badge className="bg-white/10 backdrop-blur-sm text-white mb-4 px-4 py-1 rounded-full">SECTEURS D'ACTIVITÉ</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            Solutions adaptées à votre secteur
                        </h2>
                        <p className="max-w-2xl mx-auto text-slate-300 text-lg">
                            Notre expertise couvre les besoins spécifiques de chaque industrie, avec des solutions sur mesure pour votre secteur d'activité.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CGUITECH.industries.map((industry, index) => (
                            <motion.div 
                                key={index}
                                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-xl"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ 
                                    y: -10,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    animate={{ 
                                        opacity: [0, 0.1, 0]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                ></motion.div>
                                
                                <div className="relative z-10">
                                    <motion.div 
                                        className={`${industry.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                        whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                                    >
                                        {industry.icon}
                                    </motion.div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                                        {industry.title}
                                    </h3>
                                    
                                    <p className="text-slate-400 mb-6">
                                        {industry.description}
                                    </p>
                                    
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link 
                                            href={industry.link}
                                            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:underline"
                                        >
                                            En savoir plus
                                            <motion.span 
                                                initial={{ x: 0 }}
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: index * 0.2 }}
                                            >
                                                <ArrowRight className="ml-1 h-4 w-4" />
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div 
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link 
                                href={route('contact.index')}
                                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-blue-600/30"
                            >
                                Discutons de votre projet
                                <motion.span 
                                    initial={{ x: 0 }}
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </motion.span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section Partenaires */}
            <section id="partenaires" className="py-20 bg-white">
                <div className="container mx-auto px-4 pb-10 shadow-xl">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <Badge className="bg-primary-100 text-primary mb-4 px-4 py-1 rounded-full">NOS PARTENAIRES</Badge>
                        <h2 className="text-4xl font-bold mb-6">Nous collaborons avec les meilleurs</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">Des partenariats stratégiques pour vous offrir des solutions de pointe.</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center items-center gap-16">
                        {CGUITECH.partners.map((partner, index) => (
                            <motion.div 
                                key={index} 
                                className="p-6 grayscale hover:grayscale-0 transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ 
                                    scale: 1.2,
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <img src={partner.logo} alt={partner.name} className="h-16 w-auto" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section className="py-20 bg-gradient-to-tl from-gray-900 via-primary/90 to-blue-900">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ 
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                            y: -5,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                            <div className="p-12 md:p-16">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.2,
                                                delayChildren: 0.3,
                                            }
                                        },
                                        hidden: { opacity: 0 }
                                    }}
                                >
                                    <motion.div
                                        variants={{
                                            visible: { opacity: 1, y: 0 },
                                            hidden: { opacity: 0, y: 20 }
                                        }}
                                    >
                                        <Badge className="bg-yellow-500 text-primary-900 mb-6 px-4 py-1 rounded-full font-medium">COMMENCEZ MAINTENANT</Badge>
                                    </motion.div>
                                    <motion.h2
                                        className="text-4xl font-bold mb-6 text-white"
                                        variants={{
                                            visible: { opacity: 1, y: 0 },
                                            hidden: { opacity: 0, y: 20 }
                                        }}
                                    >
                                        Prêt à transformer votre infrastructure IT?
                                    </motion.h2>
                                    <motion.p
                                        className="mb-8 text-white/90 text-lg"
                                        variants={{
                                            visible: { opacity: 1, y: 0 },
                                            hidden: { opacity: 0, y: 20 }
                                        }}
                                    >
                                        Contactez nos experts dès aujourd'hui pour une consultation gratuite et découvrez
                                        comment CGUITECH peut accompagner votre entreprise vers l'excellence technologique.
                                    </motion.p>
                                    <motion.div
                                        className="flex flex-col sm:flex-row gap-6"
                                        variants={{
                                            visible: { opacity: 1, y: 0 },
                                            hidden: { opacity: 0, y: 20 }
                                        }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link href={route('contact.index')} className="bg-yellow-500 hover:bg-yellow-600 text-primary-900 px-8 py-6 text-lg font-medium rounded-full inline-flex items-center">
                                                Prendre rendez-vous
                                                <motion.span 
                                                    initial={{ x: 0 }}
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <ArrowRight className="ml-2 h-5 w-5" />
                                                </motion.span>
                                            </Link>
                                        </motion.div>
                                        <motion.a 
                                            href="tel:+224627969855" 
                                            className="flex items-center text-white font-medium text-lg group"
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <motion.div 
                                                className="p-3 bg-white/20 rounded-full mr-3 group-hover:bg-white/30 transition-colors"
                                                animate={{ 
                                                    scale: [1, 1.1, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                <PhoneCall className="h-6 w-6" />
                                            </motion.div>
                                            +224 627 96 98 55
                                        </motion.a>
                                    </motion.div>
                                </motion.div>
                            </div>
                            <div className="hidden md:block relative h-full">
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary-900/50 z-10"></div>
                                <motion.img
                                    src="/images/welcome/contact-cta.jpg"
                                    alt="Contactez-nous"
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 1.1, x: 20 }}
                                    whileInView={{ scale: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PublicLayout>
    );
}