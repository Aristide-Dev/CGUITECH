
import {
    PhoneCall,
    Code,
    Server,
    Cloud,
    Shield,
    Headphones,
} from 'lucide-react';

export const cguitech = {
    services: [
        {
            icon: <Code className="h-8 w-8" />,
            title: "Développement Logiciel",
            description: "Développement d'applications sur mesure pour répondre aux besoins spécifiques de votre entreprise. Solutions mobiles, web et de bureau pour digitaliser vos opérations.",
            link: "/services/software",
            image: "/images/services/two-african-american-young-people-man-woman-software-engineers-conding-desk-with-computer-office-talking-poiting.jpg",
            color: "bg-indigo-600",
            features: ["Applications personnalisées", "Interfaces intuitives", "Maintenance continue"]
        },
        {
            icon: <Cloud className="h-8 w-8" />,
            title: "Solutions Cloud",
            description: "Migrez vos services et applications vers le cloud pour plus de flexibilité, d'évolutivité et de résilience. Optimisez vos coûts d'infrastructure avec nos solutions sur mesure.",
            link: "/services/cloud",
            color: "bg-cyan-500",
            image: "/images/services/man-holding-cloud-computing-diagram-data-storage-network-connection-business.jpg",
            features: ["Migration sécurisée", "Sauvegarde automatisée", "Scalabilité illimitée"],
        },
        {
            icon: <Server className="h-8 w-8" />,
            title: "Services IT",
            description: "Une solution complète pour la gestion de votre infrastructure informatique avec surveillance proactive, maintenance préventive et support technique pour que vous puissiez vous concentrer sur votre cœur de métier.",
            link: "/services/it-management",
            image: "/images/services/standard-quality-control-concept-m.jpg",
            color: "bg-blue-500",
            features: ["Surveillance 24/7", "Maintenance préventive", "Support"],
        },
        {
            icon: <PhoneCall className="h-8 w-8" />,
            color: "bg-violet-500",
            title: "Téléphonie IP",
            description: "Solutions de téléphonie IP modernes pour une communication unifiée et efficace.",
            link: "/services/ip-telephony",
            image: "/images/services/close-up-person-working-call-center.jpg",
            features: ["Appels illimités", "Vidéoconférence HD", "Messagerie unifiée"]
        },
        {
            icon: <Server className="h-8 w-8" />,
            title: "Infrastructure IT",
            description: "Solutions d'infrastructure robustes et évolutives pour supporter votre croissance.",
            link: "/services/infrastructure",
            image: "/images/services/side-view-woman-working-with-wires.jpg",
            color: "bg-blue-600",
            features: ["Réseau haute performance", "Virtualisation", "Solutions hybrides"]
        },
        {
            icon: <Code className="h-8 w-8" />,
            title: "Conception Web et Hébergement",
            description: "Développement d'applications sur mesure pour répondre aux besoins spécifiques de votre entreprise. Solutions mobiles, web et de bureau pour digitaliser vos opérations.",
            link: "/services/web-design",
            image: "/images/services/Conception-Web.jpg",
            color: "bg-indigo-600",
            features: ["Applications personnalisées", "Interfaces intuitives", "Maintenance continue"] 
        },
        {
          title: "Support informatique",
          description: "Un support technique réactif et professionnel disponible en français et en anglais, avec des délais d'intervention garantis pour tous vos besoins quotidiens.",
          link: "/services/it-support",
          icon: <Headphones className="h-8 w-8" />,
          image: "/images/services/side-view-men-working-laptops-office.jpg",
          color: "bg-indigo-500",
          features: ["Support multilingue", "Intervention rapide", "Résolution efficace"]
        },
    ],
    partners: [
        { name: "Advancenet", logo: "/images/welcome/partners/logo-advancenet.jpeg" },
        { name: "Exadata", logo: "/images/welcome/partners/logo-exadata.png" },
        { name: "Huahuan", logo: "/images/welcome/partners/logo-huahuan.png" },
        { name: "Oracle", logo: "/images/welcome/partners/logo-oracle.png" },
        { name: "Ricoh", logo: "/images/welcome/partners/logo-ricoh.png" },
        { name: "Serbadinamik", logo: "/images/welcome/partners/logo-serbadinamik.png" },
        { name: "Serverware", logo: "/images/welcome/partners/logo-serverware.png" },
    ],
    testimonials: [
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
    ],
};