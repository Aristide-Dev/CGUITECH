import {
    MapPin, Phone, Mail, Clock, Globe,
    Send, ChevronRight,
    Facebook, Twitter, Linkedin,
} from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import { CGUITECH } from '@/utils/index';

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

    return (
        <PublicLayout>
            

            {/* Hero Section Améliorée */}
            <div className="relative bg-black py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/contact/cover.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                <div className="relative container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contactez-nous</h1>
                        <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                            CGUITECH est à votre écoute pour toutes vos questions et besoins en solutions technologiques.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section Principale */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Formulaire */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Envoyez-nous un message</h2>
                                <p className="text-gray-600">
                                    Nous sommes là pour répondre à vos questions et collaborer sur vos projets.
                                </p>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
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
                                    </div>
                                    <div>
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
                                    </div>
                                </div>

                                <div>
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
                                </div>

                                <div>
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
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                                >
                                    Envoyer le message
                                    <Send className="ml-2 w-5 h-5" />
                                </button>
                            </form>
                        </div>

                        {/* Informations de contact */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Adresse</h4>
                                            <p className="text-gray-600">{CGUITECH.contactInfo.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="w-6 h-6 text-primary mt-1 mr-4" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Téléphone</h4>
                                            <p className="text-gray-600">{CGUITECH.contactInfo.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Mail className="w-6 h-6 text-primary mt-1 mr-4" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                                            <p className="text-gray-600">{CGUITECH.contactInfo.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Horaires d'ouverture</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                        <span className="font-medium">Lundi - Vendredi</span>
                                        <span className="text-primary">{CGUITECH.contactInfo.hours.weekdays}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Suivez-nous</h3>
                                <div className="flex space-x-4">
                                    {CGUITECH.contactInfo.social.map((platform, idx) => (
                                        <a
                                            key={idx}
                                            href={platform?.url || '#'}
                                            className="p-3 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {platform?.icon && <platform.icon className="w-6 h-6" />}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section Carte */}
            {/* Section Carte Interactive */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Localisation</h2>
                            <p className="text-gray-600">Rendez-nous visite dans nos locaux à Sandervalia</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Carte */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] hover:shadow-xl transition-shadow">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.4745300420633!2d-13.64765413105491!3d9.604040511577853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd67291a2ca73%3A0xbd6887e5f4a4dc82!2sConakry%2C%20Guin%C3%A9e!5e0!3m2!1sfr!2s!4v1746447724810!5m2!1sfr!2s" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={true}
                                    loading="lazy" 
                                    // referrerpolicy="no-referrer-when-downgrade"
                                    className="hover:opacity-90 transition-opacity"
                                    >
                                </iframe>
                                </div>
                            </div>

                            {/* Informations de localisation */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Comment nous trouver</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <MapPin className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Adresse complète</h4>
                                            <p className="text-gray-600">T2 Kipé Centre Emetteur, Ratoma</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Heures d'ouverture</h4>
                                            <p className="text-gray-600">Lundi - Vendredi : 9:00 AM – 5:00 PM</p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-medium text-gray-900 mb-2">Points de repère</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-center text-gray-600">
                                                <ChevronRight className="w-4 h-4 text-primary mr-2" />
                                                <span>Centre Emetteur de Kipé</span>
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <ChevronRight className="w-4 h-4 text-primary mr-2" />
                                                <span>Quartier Ratoma</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <a
                                        href="https://maps.app.goo.gl/9c3HeroC2FJXGHCP9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors"
                                    >
                                        <Globe className="w-5 h-5 mr-2" />
                                        Ouvrir dans Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}