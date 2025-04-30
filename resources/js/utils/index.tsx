
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
};