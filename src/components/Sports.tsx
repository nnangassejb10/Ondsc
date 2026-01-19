import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import footballImage from "@/assets/sport-football.jpg";
import basketballImage from "@/assets/sport-basketball.jpg";
import athleticsImage from "@/assets/sport-athletics.jpg";

const Sports = () => {
  const sports = [
    {
      title: "Football",
      description:
        "Le sport roi au Gabon avec nos Panthères nationales qui font la fierté de tout le pays sur la scène africaine.",
      image: footballImage,
      athletes: "2000+",
      clubs: "150+",
    },
    {
      title: "Basketball",
      description:
        "Un sport en pleine expansion avec des infrastructures modernes et des programmes de détection de talents.",
      image: basketballImage,
      athletes: "800+",
      clubs: "45+",
    },
    {
      title: "Athlétisme",
      description:
        "La discipline olympique par excellence où le Gabon forme des champions de classe internationale.",
      image: athleticsImage,
      athletes: "500+",
      clubs: "30+",
    },
  ];

  return (
    <section id="sports" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Nos Disciplines
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Sports de <span className="text-primary">haut niveau</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit"
          >
            Voir toutes les disciplines
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Sports Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, index) => (
            <div
              key={sport.title}
              className="group relative overflow-hidden rounded-2xl card-hover"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-background mb-2">
                  {sport.title}
                </h3>
                <p className="text-background/80 text-sm leading-relaxed mb-4 line-clamp-2">
                  {sport.description}
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-4">
                  <div>
                    <div className="text-xl font-bold text-accent">
                      {sport.athletes}
                    </div>
                    <div className="text-background/60 text-xs">Athlètes</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-accent">
                      {sport.clubs}
                    </div>
                    <div className="text-background/60 text-xs">Clubs</div>
                  </div>
                </div>

                <Button
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sports List */}
        <div className="mt-12 p-6 md:p-8 bg-muted rounded-2xl">
          <h4 className="font-bold text-foreground mb-4">
            Autres disciplines soutenues
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              "Handball",
              "Volleyball",
              "Tennis",
              "Natation",
              "Judo",
              "Taekwondo",
              "Boxe",
              "Cyclisme",
              "Rugby",
              "Tennis de table",
            ].map((sport) => (
              <span
                key={sport}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-pointer"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
