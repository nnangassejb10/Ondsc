import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const news = [
    {
      category: "Sport",
      title: "Les Panthères qualifiées pour la CAN 2025",
      excerpt:
        "L'équipe nationale de football du Gabon décroche son billet pour la prochaine Coupe d'Afrique des Nations.",
      date: "15 Jan 2026",
      author: "ONDSC",
      featured: true,
    },
    {
      category: "Culture",
      title: "Ouverture du nouveau Centre Culturel de Libreville",
      excerpt:
        "Un espace moderne dédié à la promotion des arts et de la culture gabonaise.",
      date: "12 Jan 2026",
      author: "ONDSC",
      featured: false,
    },
    {
      category: "Formation",
      title: "Programme de détection de jeunes talents lancé",
      excerpt:
        "L'ONDSC lance une campagne nationale pour identifier les futurs champions gabonais.",
      date: "10 Jan 2026",
      author: "ONDSC",
      featured: false,
    },
    {
      category: "Événement",
      title: "Marathon de Libreville : record de participation",
      excerpt:
        "Plus de 5000 coureurs ont participé à la 10ème édition du Marathon international.",
      date: "8 Jan 2026",
      author: "ONDSC",
      featured: false,
    },
  ];

  const featuredNews = news.find((n) => n.featured);
  const otherNews = news.filter((n) => !n.featured);

  return (
    <section id="actualites" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Actualités
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Dernières <span className="text-primary">nouvelles</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit"
          >
            Toutes les actualités
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured News */}
          {featuredNews && (
            <div className="lg:row-span-2 group">
              <div className="h-full bg-primary rounded-2xl p-8 md:p-10 flex flex-col justify-between card-hover">
                <div>
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {featuredNews.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 group-hover:text-accent transition-colors duration-200">
                    {featuredNews.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-lg leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-primary-foreground/60 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredNews.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredNews.author}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Lire plus
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Other News */}
          {otherNews.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-2xl p-6 card-hover group"
            >
              <span className="inline-block bg-muted text-muted-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-4 text-muted-foreground text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
