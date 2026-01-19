import { ArrowRight, Music, Palette, Theater, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import danceImage from "@/assets/culture-dance.jpg";
import musicImage from "@/assets/culture-music.jpg";

const Culture = () => {
  const programs = [
    {
      icon: Music,
      title: "Musique Traditionnelle",
      description: "Préservation et promotion des rythmes et mélodies ancestrales gabonaises.",
    },
    {
      icon: Palette,
      title: "Arts Visuels",
      description: "Soutien aux artistes plasticiens et promotion de l'art contemporain gabonais.",
    },
    {
      icon: Theater,
      title: "Arts de la Scène",
      description: "Développement du théâtre, de la danse et des arts du spectacle.",
    },
    {
      icon: BookOpen,
      title: "Patrimoine",
      description: "Protection et valorisation du patrimoine culturel matériel et immatériel.",
    },
  ];

  return (
    <section id="culture" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Patrimoine Culturel
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Célébrer notre <span className="text-primary">héritage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            L'ONDSC œuvre à la préservation et à la promotion de la riche culture gabonaise,
            véritable trésor de notre identité nationale.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl">
              <img
                src={danceImage}
                alt="Danse traditionnelle gabonaise"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={musicImage}
                alt="Musique traditionnelle"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-primary rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-4xl font-bold text-accent mb-2">12+</div>
              <div className="text-primary-foreground/80 text-sm">Ethnies représentées</div>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            {programs.map((program) => (
              <div
                key={program.title}
                className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                  <program.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{program.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}

            <Button className="w-full md:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Explorer nos programmes culturels
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Cultural Events Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Festival National des Arts et de la Culture
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
            Rejoignez-nous pour la prochaine édition du FNAC, le plus grand rassemblement
            culturel du Gabon qui célèbre notre diversité et notre créativité.
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow"
          >
            En savoir plus sur le FNAC
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Culture;
