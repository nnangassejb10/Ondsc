import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const missions = [
    {
      icon: Target,
      title: "Notre Mission",
      description:
        "Promouvoir et développer le sport et la culture gabonaise à travers des programmes innovants et inclusifs.",
    },
    {
      icon: Users,
      title: "Formation",
      description:
        "Former les futurs champions et artistes du Gabon en leur offrant les meilleures conditions d'encadrement.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Viser l'excellence dans toutes nos disciplines pour rayonner sur la scène africaine et internationale.",
    },
    {
      icon: TrendingUp,
      title: "Développement",
      description:
        "Développer les infrastructures sportives et culturelles dans toutes les provinces du Gabon.",
    },
  ];

  return (
    <section id="apropos" className="py-20 md:py-32 bg-muted pattern-dots">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            À Propos de l'ONDSC
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Au service du sport et de la culture{" "}
            <span className="text-primary">gabonaise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            L'Office National de Développement du Sport et de la Culture (ONDSC) 
            est l'institution de référence pour la promotion et le développement 
            du sport et de la culture au Gabon.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((mission, index) => (
            <div
              key={mission.title}
              className="bg-card p-6 rounded-2xl border border-border card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <mission.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {mission.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Une vision pour l'avenir
              </h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
                Depuis sa création, l'ONDSC s'engage à transformer le paysage sportif 
                et culturel du Gabon. Notre vision est de faire du Gabon une référence 
                en Afrique centrale pour le sport et la culture.
              </p>
              <ul className="space-y-3">
                {[
                  "Accompagnement personnalisé des athlètes",
                  "Préservation du patrimoine culturel",
                  "Développement des infrastructures modernes",
                  "Partenariats internationaux stratégiques",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "1980", label: "Année de création" },
                { value: "45+", label: "Années d'expertise" },
                { value: "500+", label: "Médailles gagnées" },
                { value: "10K+", label: "Bénéficiaires" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
