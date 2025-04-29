
import {
    PhoneCall,
    Code,
    Server,
    Cloud,
    Shield,
} from 'lucide-react';

export const cguitech = {
    services: [
        {
            icon: <Code className="h-8 w-8" />,
            title: "Développement Logiciel",
            description: "Applications sur mesure pour répondre exactement à vos besoins métier spécifiques.",
            link: "/services/software",
            image: "/images/welcome/services/two-african-american-young-people-man-woman-software-engineers-conding-desk-with-computer-office-talking-poiting.jpg",
            color: "bg-indigo-600",
            features: ["Applications personnalisées", "Interfaces intuitives", "Maintenance continue"]
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Cybersécurité",
            description: "Protection avancée contre les menaces numériques pour sécuriser vos données critiques.",
            link: "/services/security",
            image: "/images/welcome/services/photo-1550751827-4bd374c3f58b.jpeg"
        },
        {
            icon: <Cloud className="h-8 w-8" />,
            title: "Solutions Cloud",
            description: "Infrastructure cloud évolutive pour plus de flexibilité et d'efficacité opérationnelle.",
            link: "/services/cloud",
            image: "/images/welcome/services/man-holding-cloud-computing-diagram-data-storage-network-connection-business.jpg"
        },
        {
            icon: <Server className="h-8 w-8" />,
            title: "Gestion IT",
            description: "Services IT complets pour que vous puissiez vous concentrer sur votre cœur de métier.",
            link: "/services/it-management",
            image: "/images/welcome/services/standard-quality-control-concept-m.jpg"
        },
        {
            icon: <PhoneCall className="h-8 w-8" />,
            title: "Téléphonie IP",
            description: "Solutions de téléphonie IP modernes pour une communication unifiée et efficace.",
            link: "/services/ip-telephony",
            image: "/images/welcome/services/close-up-person-working-call-center.jpg"
        },
        {
            icon: <Server className="h-8 w-8" />,
            title: "Infrastructure IT",
            description: "Solutions d'infrastructure robustes et évolutives pour supporter votre croissance.",
            link: "/services/infrastructure",
            image: "/images/welcome/services/side-view-woman-working-with-wires.jpg",
            color: "bg-blue-600",
            features: ["Réseau haute performance", "Virtualisation", "Solutions hybrides"]
        },
        {
            icon: <Code className="h-8 w-8" />,
            title: "Conception Web et Hébergement",
            description: "Développement d'applications sur mesure pour répondre aux besoins spécifiques de votre entreprise. Solutions mobiles, web et de bureau pour digitaliser vos opérations.",
            link: "/services/web-design",
            image: "/images/welcome/services/Conception-Web.jpg",
            color: "bg-indigo-600",
            features: ["Applications personnalisées", "Interfaces intuitives", "Maintenance continue"] 
        }
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