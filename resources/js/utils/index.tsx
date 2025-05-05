import { link } from 'fs';
import {
    PhoneCall,
    Code,
    Server,
    Cloud,
    Headphones,
    ShoppingCart,
    Truck,
    Factory,
    Building2,
    Stethoscope,
    Banknote,
    Video,
    GraduationCap,
    Wheat,
    Car,
    Linkedin,
    Twitter,
    Facebook,
} from 'lucide-react';

export const CGUITECH = {
    services: [
        {
            icon: <Code className="h-8 w-8" />,
            title: "Développement Logiciel",
            description: "Développement d'applications sur mesure pour répondre aux besoins spécifiques de votre entreprise. Solutions mobiles, web et de bureau pour digitaliser vos opérations.",
            link: "/services/software",
            image: "/images/services/two-african-american-young-people-man-woman-software-engineers-conding-desk-with-computer-office-talking-poiting.jpg",
            color: "bg-indigo-600",
            features: [
                "Applications personnalisées",
                "Interfaces intuitives",
                "Maintenance continue",
                "Développement mobile",
                "Solutions web",
                "Applications de bureau"
            ],
            benefits: [
                "Optimisation des processus",
                "Réduction des coûts",
                "Amélioration de la productivité",
                "Expérience utilisateur améliorée"
            ],
            technologies: [
                "React, Vue.js, Angular",
                "Node.js, Laravel, Django",
                "Flutter, React Native",
                "Docker, Kubernetes"
            ]
        },
        {
            icon: <Cloud className="h-8 w-8" />,
            title: "Solutions Cloud",
            description: "Migrez vos services et applications vers le cloud pour plus de flexibilité, d'évolutivité et de résilience. Optimisez vos coûts d'infrastructure avec nos solutions sur mesure.",
            link: "/services/cloud",
            color: "bg-cyan-500",
            image: "/images/services/man-holding-cloud-computing-diagram-data-storage-network-connection-business.jpg",
            features: [
                "Migration sécurisée",
                "Sauvegarde automatisée",
                "Scalabilité illimitée",
                "Gestion des ressources",
                "Sécurité avancée",
                "Support 24/7"
            ],
            benefits: [
                "Flexibilité accrue",
                "Coûts optimisés",
                "Performance améliorée",
                "Sécurité renforcée"
            ],
            technologies: [
                "AWS, Azure, Google Cloud",
                "VMware, OpenStack",
                "Kubernetes, Docker",
                "Terraform, Ansible"
            ]
        },
        {
            icon: <Server className="h-8 w-8" />,
            title: "Services IT",
            description: "Une solution complète pour la gestion de votre infrastructure informatique avec surveillance proactive, maintenance préventive et support technique pour que vous puissiez vous concentrer sur votre cœur de métier.",
            link: "/services/it-management",
            image: "/images/services/standard-quality-control-concept-m.jpg",
            color: "bg-blue-500",
            features: [
                "Surveillance 24/7",
                "Maintenance préventive",
                "Support technique",
                "Gestion des incidents",
                "Optimisation des performances",
                "Sécurité des données"
            ],
            benefits: [
                "Disponibilité maximale",
                "Réduction des temps d'arrêt",
                "Support réactif",
                "Sécurité optimale"
            ],
            technologies: [
                "Zabbix, Nagios",
                "Puppet, Chef",
                "Splunk, ELK Stack",
                "Cisco, Juniper"
            ]
        },
        {
            icon: <PhoneCall className="h-8 w-8" />,
            color: "bg-violet-500",
            title: "Téléphonie IP",
            description: "Solutions de téléphonie IP modernes pour une communication unifiée et efficace.",
            link: "/services/ip-telephony",
            image: "/images/services/close-up-person-working-call-center.jpg",
            features: [
                "Appels illimités",
                "Vidéoconférence HD",
                "Messagerie unifiée",
                "Intégration CRM",
                "Rapports détaillés",
                "Support multilingue"
            ],
            benefits: [
                "Communication optimisée",
                "Coûts réduits",
                "Collaboration améliorée",
                "Flexibilité accrue"
            ],
            technologies: [
                "Asterisk, FreePBX",
                "3CX, Cisco",
                "SIP, WebRTC",
                "Zoom, Teams"
            ]
        },
        {
            icon: <Server className="h-8 w-8" />,
            title: "Infrastructure IT",
            description: "Solutions d'infrastructure robustes et évolutives pour supporter votre croissance.",
            link: "/services/infrastructure",
            image: "/images/services/side-view-woman-working-with-wires.jpg",
            color: "bg-blue-600",
            features: [
                "Réseau haute performance",
                "Virtualisation",
                "Solutions hybrides",
                "Stockage sécurisé",
                "Backup et récupération",
                "Gestion des accès"
            ],
            benefits: [
                "Performance optimale",
                "Scalabilité",
                "Sécurité renforcée",
                "Coûts maîtrisés"
            ],
            technologies: [
                "VMware, Hyper-V",
                "Cisco, Juniper",
                "NetApp, EMC",
                "Fortinet, Palo Alto"
            ]
        },
        {
            icon: <Code className="h-8 w-8" />,
            title: "Conception Web et Hébergement",
            description: "Développement d'applications sur mesure pour répondre aux besoins spécifiques de votre entreprise. Solutions mobiles, web et de bureau pour digitaliser vos opérations.",
            link: "/services/web-design",
            image: "/images/services/Conception-Web.jpg",
            color: "bg-indigo-600",
            features: [
                "Applications personnalisées",
                "Interfaces intuitives",
                "Maintenance continue",
                "Hébergement sécurisé",
                "Optimisation SEO",
                "Analytics avancés"
            ],
            benefits: [
                "Visibilité accrue",
                "Performance optimale",
                "Sécurité renforcée",
                "Support continu"
            ],
            technologies: [
                "WordPress, Drupal",
                "Laravel, Symfony",
                "React, Vue.js",
                "AWS, DigitalOcean"
            ]
        },
        {
          title: "Support informatique",
          description: "Un support technique réactif et professionnel disponible en français et en anglais, avec des délais d'intervention garantis pour tous vos besoins quotidiens.",
          link: "/services/it-support",
          icon: <Headphones className="h-8 w-8" />,
          image: "/images/services/side-view-men-working-laptops-office.jpg",
          color: "bg-indigo-500",
            features: [
                "Support multilingue",
                "Intervention rapide",
                "Résolution efficace",
                "Maintenance préventive",
                "Formation utilisateur",
                "Documentation technique"
            ],
            benefits: [
                "Disponibilité 24/7",
                "Expertise locale",
                "Réactivité optimale",
                "Satisfaction client"
            ],
            technologies: [
                "ServiceNow, Jira",
                "TeamViewer, AnyDesk",
                "Zendesk, Freshdesk",
                "Microsoft 365, Google Workspace"
            ]
        }
    ],
    industries: [
        {
            id: "commerce-et-distribution",
            title: "Commerce & Distribution",
            icon: <ShoppingCart className="h-8 w-8" />,
            description: "Solutions digitales pour optimiser la gestion des stocks, la logistique et l'expérience client",
            color: "bg-blue-500",
            link: "industries/#commerce-et-distribution",
            challenges: [
                "Gestion des stocks",
                "Expérience client",
                "Logistique complexe",
                "Concurrence accrue"
            ],
            solutions: [
                "ERP personnalisé",
                "E-commerce intégré",
                "Gestion des stocks en temps réel",
                "Analytics avancés"
            ],
            technologies: [
                "SAP, Oracle",
                "Magento, Shopify",
                "Tableau, Power BI",
                "RFID, IoT"
            ]
        },
        {
            id: "logistique",
            title: "Logistique",
            icon: <Truck className="h-8 w-8" />,
            description: "Systèmes de suivi en temps réel et optimisation des chaînes d'approvisionnement",
            color: "bg-green-500",
            link: "industries/logistique",
            challenges: [
                "Traçabilité des marchandises",
                "Optimisation des routes",
                "Gestion des stocks",
                "Coordination des équipes"
            ],
            solutions: [
                "Système de tracking",
                "Optimisation des routes",
                "Gestion des stocks",
                "Coordination en temps réel"
            ],
            technologies: [
                "GPS, RFID",
                "IoT, Blockchain",
                "AI/ML pour l'optimisation",
                "Systèmes de gestion"
            ]
        },
        {
            id: "manufacturing",
            title: "Automatisation industrielle",
            icon: <Factory className="h-8 w-8" />,
            description: "Automatisation industrielle et solutions IoT pour la production intelligente",
            color: "bg-orange-500",
            link: "industries/manufacturing",
            challenges: [
                "Efficacité opérationnelle",
                "Maintenance prédictive",
                "Qualité de production",
                "Sécurité des travailleurs"
            ],
            solutions: [
                "Automatisation des processus",
                "Maintenance prédictive",
                "Contrôle qualité",
                "Sécurité renforcée"
            ],
            technologies: [
                "PLC, SCADA",
                "IoT, Edge Computing",
                "AI/ML pour la maintenance",
                "Systèmes de sécurité"
            ]
        },
        {
            id: "gov",
            title: "Secteur Public",
            icon: <Building2 className="h-8 w-8" />,
            description: "Solutions sécurisées pour la modernisation des services publics",
            color: "bg-purple-500",
            link: "industries/gov",
            challenges: [
                "Modernisation des services",
                "Sécurité des données",
                "Accessibilité",
                "Transparence"
            ],
            solutions: [
                "Portails citoyens",
                "Gestion des documents",
                "Services en ligne",
                "Analytics gouvernementaux"
            ],
            technologies: [
                "Solutions open source",
                "Blockchain",
                "Cloud souverain",
                "Cybersécurité"
            ]
        },
        {
            id: "sante",
            title: "Santé",
            icon: <Stethoscope className="h-8 w-8" />,
            description: "Systèmes de gestion des données patients et solutions de télémédecine",
            color: "bg-red-500",
            link: "industries/sante",
            challenges: [
                "Gestion des données patients",
                "Interopérabilité",
                "Sécurité des données",
                "Accès aux soins"
            ],
            solutions: [
                "Dossier patient électronique",
                "Télémédecine",
                "Gestion des rendez-vous",
                "Analytics médicaux"
            ],
            technologies: [
                "HL7, FHIR",
                "Solutions de télémédecine",
                "Systèmes de gestion",
                "Sécurité avancée"
            ]
        },
        {
            id: "finance",
            title: "Finance",
            icon: <Banknote className="h-8 w-8" />,
            description: "Solutions bancaires sécurisées et systèmes de gestion financière",
            color: "bg-emerald-500",
            link: "industries/finance",
            challenges: [
                "Sécurité des transactions",
                "Conformité réglementaire",
                "Expérience client",
                "Innovation digitale"
            ],
            solutions: [
                "Systèmes bancaires",
                "Gestion des risques",
                "Services mobiles",
                "Analytics financiers"
            ],
            technologies: [
                "Blockchain",
                "AI/ML",
                "Systèmes de paiement",
                "Sécurité avancée"
            ]
        },
        {
            id: "medias",
            title: "Médias",
            icon: <Video className="h-8 w-8" />,
            description: "Plateformes de streaming et solutions de gestion de contenu",
            color: "bg-pink-500",
            link: "industries/medias",
            challenges: [
                "Distribution de contenu",
                "Monétisation",
                "Engagement utilisateur",
                "Protection des droits"
            ],
            solutions: [
                "Plateformes de streaming",
                "Gestion de contenu",
                "Monétisation",
                "Analytics médias"
            ],
            technologies: [
                "CDN, Streaming",
                "DRM, Watermarking",
                "CMS avancés",
                "Analytics en temps réel"
            ]
        },
        {
            id: "education",
            title: "Éducation",
            icon: <GraduationCap className="h-8 w-8" />,
            description: "Systèmes d'apprentissage en ligne et gestion des établissements",
            color: "bg-indigo-500",
            link: "industries/education",
            challenges: [
                "Apprentissage à distance",
                "Gestion des établissements",
                "Engagement étudiant",
                "Évaluation continue"
            ],
            solutions: [
                "LMS personnalisé",
                "Gestion administrative",
                "Classes virtuelles",
                "Analytics éducatifs"
            ],
            technologies: [
                "Moodle, Canvas",
                "Zoom, Teams",
                "Systèmes de gestion",
                "AI pour l'éducation"
            ]
        },
        {
            id: "agriculture",
            title: "Agriculture",
            icon: <Wheat className="h-8 w-8" />,
            description: "Solutions IoT pour l'agriculture de précision et la traçabilité",
            color: "bg-yellow-500",
            link: "industries/agriculture",
            challenges: [
                "Optimisation des cultures",
                "Gestion des ressources",
                "Traçabilité",
                "Changement climatique"
            ],
            solutions: [
                "Agriculture de précision",
                "Gestion des ressources",
                "Traçabilité des produits",
                "Analytics agricoles"
            ],
            technologies: [
                "IoT, Drones",
                "Capteurs intelligents",
                "Systèmes de gestion",
                "AI pour l'agriculture"
            ]
        },
        {
            id: "automobile",
            title: "Automobile",
            icon: <Car className="h-8 w-8" />,
            description: "Systèmes de gestion de flotte et solutions connectées",
            color: "bg-gray-500",
            link: "industries/automobile",
            challenges: [
                "Gestion de flotte",
                "Maintenance prédictive",
                "Connectivité véhicule",
                "Expérience client"
            ],
            solutions: [
                "Systèmes de gestion",
                "Maintenance prédictive",
                "Connectivité véhicule",
                "Services mobiles"
            ],
            technologies: [
                "IoT, Telematics",
                "AI/ML",
                "Systèmes de gestion",
                "Solutions mobiles"
            ]
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
    contactInfo: {
        address: "T2 Kipé Centre Emetteur, Ratoma",
        phone: "+224 627 96 98 55",
        unespace_phone: "+224627969855",
        email: "info@cguitech.com",
        hours: {
            weekdays: "9:00 AM – 5:00 PM",
        },
        social: [
            { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/cguitech" },
            { name: "Twitter", icon: Twitter, url: "https://twitter.com/cguitech" },
            { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/cguitech" },,
        ],
        experience_year : (new Date().getFullYear() - 1996)
    },
    teams: [
        {
            name: "Abdourahmane Diallo",
            position: "PDG",
            image: "/images/team/ceo.jpg",
            description: "Plus de 15 ans d'expérience dans le domaine des technologies de l'information.",
            department: "direction",
            experience: "15+ ans d'expérience",
            location: "Conakry, Guinée",
            joinDate: "2010",
            isLeadership: true,
            skills: ["Leadership", "Stratégie digitale", "Gestion de projet"],
            contact: {
              email: "abdourahmane@cguitech.com",
              phone: "+224 627 96 98 55",
              linkedin: "https://linkedin.com/in/abdourahmane-diallo"
            }
        },
        {
            name: "Ibrahima Sory Diallo",
            position: "Responsable IT",
            image: "/images/team/it-manager.jpg",
            description: "Expert en infrastructure et solutions technologiques avec une solide expérience dans la mise en place et la maintenance de systèmes informatiques complexes.",
            department: "développement",
            experience: "10+ ans d'expérience",
            location: "Conakry, Guinée",
            joinDate: "2012",
            isLeadership: true,
            skills: ["Infrastructure IT", "Cloud Computing", "Sécurité informatique"],
            contact: {
              email: "ibrahima@cguitech.com",
              phone: "+224 627 96 98 56",
              linkedin: "https://linkedin.com/in/ibrahima-diallo"
            }
        },
        {
            name: "Aboubacar Tounkara",
            position: "Responsable Juridique",
            image: "/images/team/legal.jpg",
            description: "Spécialiste en droit des technologies et contrats IT avec une expertise particulière dans les questions de conformité et de protection des données.",
            department: "juridique",
            experience: "8+ ans d'expérience",
            location: "Conakry, Guinée",
            joinDate: "2015",
            isLeadership: true,
            skills: ["Droit numérique", "RGPD", "Propriété intellectuelle"],
            contact: {
              email: "aboubacar@cguitech.com",
              phone: "+224 627 96 98 57",
              linkedin: "https://linkedin.com/in/aboubacar-tounkara"
            }
        },
        {
            name: "Aissata Diallo",
            position: "Comptable",
            image: "/images/team/accountant.jpg",
            description: "Expert-comptable spécialisée dans le secteur technologique avec une connaissance approfondie de la fiscalité des entreprises numériques.",
            department: "finance",
            experience: "7+ ans d'expérience",
            location: "Conakry, Guinée",
            joinDate: "2016",
            isLeadership: false,
            skills: ["Comptabilité", "Fiscalité", "Analyse financière"],
            contact: {
              email: "aissata@cguitech.com",
              phone: "+224 627 96 98 58",
              linkedin: "https://linkedin.com/in/aissata-diallo"
            }
        },
    ],
    workers: [
        {
            name: "Jean-Marie Aristide GNIMASSOU",
            position: "PDG",
            image: "/images/team/ceo.jpg",
            description: "Plus de 15 ans d'expérience dans le domaine des technologies de l'information.",
            department: "direction",
            experience: "15+ ans d'expérience",
            location: "Conakry, Guinée",
            joinDate: "2010",
            isLeadership: true,
            skills: ["Leadership", "Stratégie digitale", "Gestion de projet"],
            contact: {
              email: "abdourahmane@cguitech.com",
              phone: "+224 627 96 98 55",
              linkedin: "https://linkedin.com/in/abdourahmane-diallo"
            }
        },
        {
            name: "Ismael Diallo",
            position: "Responsable IT",
            image: "/images/team/it-manager.jpg",
            description: "Expert en infrastructure et solutions technologiques avec une solide expérience dans la mise en place et la maintenance de systèmes informatiques complexes.",
            department: "développement",
            experience: "10+ ans d'expérience",
            location: "Conakry, Guinée",
            joinDate: "2012",
            isLeadership: true,
            skills: ["Infrastructure IT", "Cloud Computing", "Sécurité informatique"],
            contact: {
              email: "ibrahima@cguitech.com",
              phone: "+224 627 96 98 56",
              linkedin: "https://linkedin.com/in/ibrahima-diallo"
            }
        },
        {
            name: "Aboubacar Fabou Camara",
            position: "Responsable Juridique",
            image: "/images/team/legal.jpg",
            description: "Spécialiste en droit des technologies et contrats IT avec une expertise particulière dans les questions de conformité et de protection des données.",
            department: "juridique",
            experience: "8+ ans d'expérience",
            location: "Conakry, Guinée",
            joinDate: "2015",
            isLeadership: true,
            skills: ["Droit numérique", "RGPD", "Propriété intellectuelle"],
            contact: {
              email: "aboubacar@cguitech.com",
              phone: "+224 627 96 98 57",
              linkedin: "https://linkedin.com/in/aboubacar-tounkara"
            }
        },
        {
            name: "Abdoul Karim Oularé",
            position: "Comptable",
            image: "/images/team/accountant.jpg",
            description: "Expert-comptable spécialisée dans le secteur technologique avec une connaissance approfondie de la fiscalité des entreprises numériques.",
            department: "finance",
            experience: "7+ ans d'expérience",
            location: "Conakry, Guinée",
            joinDate: "2016",
            isLeadership: false,
            skills: ["Comptabilité", "Fiscalité", "Analyse financière"],
            contact: {
              email: "aissata@cguitech.com",
              phone: "+224 627 96 98 58",
              linkedin: "https://linkedin.com/in/aissata-diallo"
            }
        },
        {
            name: "Ibrahima Sory Kaba",
            position: "Comptable",
            image: "/images/team/accountant.jpg",
            description: "Expert-comptable spécialisée dans le secteur technologique avec une connaissance approfondie de la fiscalité des entreprises numériques.",
            department: "finance",
            experience: "7+ ans d'expérience",
            location: "Conakry, Guinée",
            joinDate: "2016",
            isLeadership: false,
            skills: ["Comptabilité", "Fiscalité", "Analyse financière"],
            contact: {
              email: "aissata@cguitech.com",
              phone: "+224 627 96 98 58",
              linkedin: "https://linkedin.com/in/aissata-diallo"
            }
        },
    ]
};