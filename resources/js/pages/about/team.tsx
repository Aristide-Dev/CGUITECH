import PublicLayout from '@/layouts/public-layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Linkedin, Mail, Phone, ChevronRight, Star, 
  Calendar, MapPin, GraduationCap, Briefcase, 
  Code, Package, Users, Coffee 
} from 'lucide-react';
import { CGUITECH } from '@/utils/index';
import { useState } from 'react';

export default function Team() {
  const [activeFilter, setActiveFilter] = useState('all');
  const departments = ['all', 'développement', 'design', 'gestion de projet', 'marketing'];
  
  // Fonction pour filtrer l'équipe basée sur le département sélectionné
  const filteredTeam = activeFilter === 'all' 
    ? CGUITECH.workers 
    : CGUITECH.workers.filter(member => member.department.toLowerCase() === activeFilter);

  // Stats fictives pour la section chiffres clés
  const stats = [
    { value: '12+', label: 'Experts passionnés' },
    { value: CGUITECH.contactInfo.experience_year, label: 'Années d\'expertise' },
    { value: '96%', label: 'Taux de satisfaction' }
  ];

  return (
    <PublicLayout>
      {/* Hero Section avec vidéo/animation en arrière-plan */}
      <div className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-black/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('/images/about/2002640_265509-P5CGU8-547.svg')] bg-cover bg-fixed bg-center opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Des <span className="text-primary-200">talents</span> <br/>exceptionnels
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mb-8">
              Notre équipe pluridisciplinaire combine expertise technique, créativité et passion pour transformer vos défis en solutions innovantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Rencontrer l'équipe
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Rejoindre notre équipe
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-10 h-10 text-white/80 rotate-90" />
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="inline-block mb-4">
                <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm font-medium">
                  Notre culture
                </Badge>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">L'humain au cœur de <span className="text-primary">notre succès</span></h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chez CGUITECH, nous croyons que notre plus grand atout est l'intelligence collective 
                et la diversité de notre équipe. Chaque membre apporte une expertise unique, 
                une perspective différente et une passion commune pour l'excellence technologique.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Notre culture d'entreprise favorise l'innovation, la collaboration et le développement 
                personnel, créant un environnement où chacun peut s'épanouir et donner le meilleur de lui-même.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Excellence technique</h4>
                    <p className="text-sm text-gray-600">Formation continue et certifications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Collaboration</h4>
                    <p className="text-sm text-gray-600">Travail d'équipe et co-création</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Innovation</h4>
                    <p className="text-sm text-gray-600">Recherche et développement continus</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Coffee className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Bien-être</h4>
                    <p className="text-sm text-gray-600">Équilibre vie pro/perso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                  <div className="h-full bg-[url('/images/logo-cguitech-wb.svg')] bg-contain bg-center bg-no-repeat"></div>
                </div>
                <div className="aspect-square bg-primary-200 rounded-xl overflow-hidden shadow-lg mt-8">
                  <div className="h-full bg-[url('/images/logo-bg-dark2.svg')] bg-contain bg-center bg-no-repeat"></div>
                </div>
                <div className="aspect-square bg-primary-900 rounded-xl overflow-hidden shadow-lg">
                  <div className="h-full bg-[url('/images/logo-cguitech-wb.svg')] bg-contain bg-center bg-no-repeat"></div>
                </div>
                <div className="aspect-square bg-primary-950 rounded-xl overflow-hidden shadow-lg mt-8">
                  <div className="h-full bg-[url('/images/logo-bg-dark2.svg')] bg-contain bg-center bg-no-repeat"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm font-medium mb-4">
              Leadership
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre équipe dirigeante</h2>
            <p className="text-lg text-gray-700">
              Des experts visionnaires qui guident notre entreprise vers l'excellence et l'innovation constante.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {CGUITECH.teams
              .filter(member => member.isLeadership)
              .slice(0, 3)
              .map((leader, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                      <p className="text-primary-200 font-medium">{leader.position}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">{leader.description}</p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      {leader.skills && leader.skills.map((skill, idx) => (
                        <Badge key={idx} className="bg-gray-100 text-gray-700 hover:bg-gray-200">{skill}</Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4 border-t pt-4">
                      <a
                        href={`mailto:${leader.contact.email}`}
                        className="text-gray-600 hover:text-primary transition-colors"
                        aria-label={`Email ${leader.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a
                        href={`tel:${leader.contact.phone}`}
                        className="text-gray-600 hover:text-primary transition-colors"
                        aria-label={`Call ${leader.name}`}
                      >
                        <Phone className="w-5 h-5" />
                      </a>
                      <a
                        href={leader.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                        aria-label={`LinkedIn profile of ${leader.name}`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Team Filters */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm font-medium mb-4">
              Notre équipe
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Les talents de CGUITECH</h2>
            <p className="text-lg text-gray-700 mb-10">
              Découvrez les experts passionnés qui font de CGUITECH votre partenaire technologique de confiance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {departments.map((dept, index) => (
                <Button
                  key={index}
                  variant={activeFilter === dept ? "default" : "outline"}
                  onClick={() => setActiveFilter(dept)}
                  className={activeFilter === dept ? "bg-primary" : "text-gray-700"}
                >
                  {dept.charAt(0).toUpperCase() + dept.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTeam.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none group">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    {member.department}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 uppercase">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{member.description}</p>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{member.experience || '5+ ans d\'expérience'}</span>
                  </div>
                  
                  {member.location && (
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{member.location}</span>
                    </div>
                  )}
                  
                  {member.joinDate && (
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>Rejoint en {member.joinDate}</span>
                    </div>
                  )}
                  
                  <div className="flex space-x-3 mt-4">
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="text-gray-600 hover:text-primary transition-colors p-2 bg-gray-100 rounded-full"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${member.contact.phone}`}
                      className="text-gray-600 hover:text-primary transition-colors p-2 bg-gray-100 rounded-full"
                      aria-label={`Call ${member.name}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={member.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors p-2 bg-gray-100 rounded-full"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="text-white border-white/40 px-4 py-1 text-sm font-medium mb-4">
              Carrières
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Rejoignez notre équipe</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Vous êtes passionné par la technologie et l'innovation ? Vous souhaitez relever des défis 
              stimulants au sein d'une équipe dynamique ? Découvrez nos opportunités de carrière.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-none text-white p-6 hover:bg-white/20 transition-all">
                <Package className="w-12 h-12 mb-4 text-primary-200" />
                <h3 className="text-xl font-bold mb-2">Avantages attractifs</h3>
                <p className="text-white/80">
                  Télétravail flexible, équipement de pointe, formations continues et environnement stimulant.
                </p>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-none text-white p-6 hover:bg-white/20 transition-all">
                <GraduationCap className="w-12 h-12 mb-4 text-primary-200" />
                <h3 className="text-xl font-bold mb-2">Développement professionnel</h3>
                <p className="text-white/80">
                  Mentorat personnalisé, opportunités d'évolution et projets variés pour développer vos compétences.
                </p>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-none text-white p-6 hover:bg-white/20 transition-all">
                <Users className="w-12 h-12 mb-4 text-primary-200" />
                <h3 className="text-xl font-bold mb-2">Culture inclusive</h3>
                <p className="text-white/80">
                  Un environnement bienveillant qui valorise la diversité, l'égalité et l'inclusion.
                </p>
              </Card>
            </div>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Voir nos offres d'emploi
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}