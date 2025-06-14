import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mí</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desarrollador Web Apasionado & Creador Tecnológico
            </h3>

            <p className="text-muted-foreground">
              ultimo ano de carrera en Ingenieria En Sistemas, en la universidad del valle, me especializo
              en la creación de aplicaciones web responsivas, accesibles y con alto rendimiento
              utilizando tecnologías modernas.
            </p>

            <p className="text-muted-foreground">
              Me apasiona diseñar soluciones elegantes para problemas complejos
              y siempre estoy aprendiendo nuevas tecnologías y técnicas para
              mantenerme a la vanguardia en el dinámico mundo del desarrollo web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contáctame
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo Web</h4>
                  <p className="text-muted-foreground">
                    Creación de sitios web y aplicaciones responsivas con frameworks modernos.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Diseño UI/UX</h4>
                  <p className="text-muted-foreground">
                    Diseño de interfaces intuitivas y experiencias de usuario fluidas.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Gestión de Proyectos</h4>
                  <p className="text-muted-foreground">
                    Liderazgo de proyectos desde la concepción hasta la entrega final
                    utilizando metodologías ágiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
