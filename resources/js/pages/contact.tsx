import {
    MapPin, Phone, Mail, Clock, Globe,
    Send, ChevronRight,
    Facebook, Twitter, Linkedin,
} from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import { CGUITECH } from '@/utils/index';
import { motion } from 'framer-motion';

export default function contact() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const subject = formData.get('subject');
        const message = formData.get('message');
        const email = formData.get('email');
        const name = formData.get('name');

        const mailtoLink = `mailto:${CGUITECH.contactInfo.email}?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(
            `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        window.location.href = mailtoLink;
    };

    // Variants d'animation
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
            {/* Hero Section Améliorée */}
            <motion.div 
                className="relative bg-black py-32 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 bg-[url('/images/contact/cover.jpg')] bg-cover bg-center opacity-70 transform hover:scale-105 transition-transform duration-10000"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20"></div>
                
                {/* Formes décoratives */}
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
                    className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"
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
                
                <div className="relative container mx-auto px-4">
                    <motion.div 
                        className="max-w-4xl mx-auto text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 
                            variants={itemVariants}
                            className="text-5xl md:text-6xl font-bold text-white mb-6"
                        >
                            Contactez-nous
                        </motion.h1>
                        <motion.p 
                            variants={itemVariants}
                            className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
                        >
                            CGUITECH est à votre écoute pour toutes vos questions et besoins en solutions technologiques.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Section Principale */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Formulaire */}
                        <motion.div 
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div 
                                className="mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Envoyez-nous un message</h2>
                                <p className="text-gray-600">
                                    Nous sommes là pour répondre à vos questions et collaborer sur vos projets.
                                </p>
                            </motion.div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nom complet
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Votre nom"
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Adresse e-mail
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Votre e-mail"
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Sujet
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Sujet de votre message"
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Votre message"
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                    ></textarea>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                    viewport={{ once: true }}
                                >
                                    Envoyer le message
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <Send className="ml-2 w-5 h-5" />
                                    </motion.span>
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Informations de contact */}
                        <motion.div 
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div 
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>
                                <div className="space-y-6">
                                    <motion.div 
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            className="text-primary"
                                        >
                                            <MapPin className="w-6 h-6 mt-1 mr-4" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Adresse</h4>
                                            <p className="text-gray-600">{CGUITECH.contactInfo.address}</p>
                                        </div>
                                    </motion.div>
                                    <motion.div 
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            className="text-primary"
                                        >
                                            <Phone className="w-6 h-6 mt-1 mr-4" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Téléphone</h4>
                                            <p className="text-gray-600">{CGUITECH.contactInfo.phone}</p>
                                        </div>
                                    </motion.div>
                                    <motion.div 
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            className="text-primary"
                                        >
                                            <Mail className="w-6 h-6 mt-1 mr-4" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                                            <p className="text-gray-600">{CGUITECH.contactInfo.email}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Horaires d'ouverture</h3>
                                <div className="space-y-4">
                                    <motion.div 
                                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="font-medium">Lundi - Vendredi</span>
                                        <span className="text-primary">{CGUITECH.contactInfo.hours.weekdays}</span>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Suivez-nous</h3>
                                <div className="flex space-x-4">
                                    {CGUITECH.contactInfo.social.map((platform, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={platform?.url || '#'}
                                            className="p-3 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            whileTap={{ scale: 0.9 }}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * idx + 0.7 }}
                                        >
                                            {platform?.icon && <platform.icon className="w-6 h-6" />}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section Carte Interactive */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Localisation</h2>
                            <p className="text-gray-600">Rendez-nous visite dans nos locaux à Sandervalia</p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Carte */}
                            <motion.div 
                                className="lg:col-span-2"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <motion.div 
                                    className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] hover:shadow-xl transition-shadow relative"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Overlay avec effet de scintillement au survol */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                                    
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.4745300420633!2d-13.64765413105491!3d9.604040511577853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd67291a2ca73%3A0xbd6887e5f4a4dc82!2sConakry%2C%20Guin%C3%A9e!5e0!3m2!1sfr!2s!4v1746447724810!5m2!1sfr!2s" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }} 
                                        allowFullScreen={true}
                                        loading="lazy" 
                                        className="hover:opacity-90 transition-opacity"
                                    >
                                    </iframe>
                                </motion.div>
                            </motion.div>

                            {/* Informations de localisation */}
                            <motion.div 
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Comment nous trouver</h3>

                                <div className="space-y-6">
                                    <motion.div 
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            className="text-primary"
                                        >
                                            <MapPin className="w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Adresse complète</h4>
                                            <p className="text-gray-600">T2 Kipé Centre Emetteur, Ratoma</p>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            className="text-primary"
                                        >
                                            <Clock className="w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Heures d'ouverture</h4>
                                            <p className="text-gray-600">Lundi - Vendredi : 9:00 AM – 5:00 PM</p>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <h4 className="font-medium text-gray-900 mb-2">Points de repère</h4>
                                        <ul className="space-y-2">
                                            <motion.li 
                                                className="flex items-center text-gray-600"
                                                initial={{ opacity: 0, x: 10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.7 }}
                                                viewport={{ once: true }}
                                                whileHover={{ x: 5 }}
                                            >
                                                <motion.span
                                                    animate={{ x: [0, 3, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    <ChevronRight className="w-4 h-4 text-primary mr-2" />
                                                </motion.span>
                                                <span>Centre Emetteur de Kipé</span>
                                            </motion.li>
                                            <motion.li 
                                                className="flex items-center text-gray-600"
                                                initial={{ opacity: 0, x: 10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.8 }}
                                                viewport={{ once: true }}
                                                whileHover={{ x: 5 }}
                                            >
                                                <motion.span
                                                    animate={{ x: [0, 3, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                                >
                                                    <ChevronRight className="w-4 h-4 text-primary mr-2" />
                                                </motion.span>
                                                <span>Quartier Ratoma</span>
                                            </motion.li>
                                        </ul>
                                    </motion.div>

                                    <motion.a
                                        href="https://maps.app.goo.gl/9c3HeroC2FJXGHCP9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.9 }}
                                        viewport={{ once: true }}
                                    >
                                        <Globe className="w-5 h-5 mr-2" />
                                        Ouvrir dans Google Maps
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}