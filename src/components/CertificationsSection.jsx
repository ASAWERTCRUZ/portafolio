import { ExternalLink } from "lucide-react";

const certifications = [

  {
    id: 3,
    title: "Curso de Ciberseguridad y Pentesting",
    issuer: "Universidad del Valle (Bolivia)",
    year: 2024,
    description: "Entrenamiento técnico intensivo en pruebas de penetración y defensa de sistemas.",
    url: "",
  },
  {
    id: 4,
    title: "Curso de Ciberseguridad",
    issuer: "Cisco Networking Academy",
    year: 2024,
    description: "Formación integral sobre amenazas, defensa y arquitectura segura de redes.",
    url: "",
  },
  {
    id: 5,
    title: "CCNA v7 – Introducción a Redes",
    issuer: "Cisco / Universidad del Valle",
    year: 2024,
    description: "Certificación de nivel inicial en redes, protocolos y topologías de Cisco.",
    url: "",
  },
  {
    id: 6,
    title: "Conciencia Digital",
    issuer: "Cisco Networking Academy / Univ. del Valle (La Paz)",
    year: 2024,
    description: "Capacitación orientada al uso responsable y seguro del entorno digital.",
    url: "",
  },
  {
    id: 7,
    title: "Python Essentials 1",
    issuer: "Cisco / Python Institute",
    year: 2024,
    description: "Introducción práctica a la programación en Python, estructuras básicas y sintaxis.",
    url: "",
  },
  {
    id: 8,
    title: "Introducción a Ciencia de Datos",
    issuer: "Cisco Networking Academy",
    year: 2024,
    description: "Fundamentos del análisis de datos, manejo de datos y principios estadísticos aplicados.",
    url: "",
  },
  {
    id: 9,
    title: "Taller de Scrum Master",
    issuer: "N/A",
    year: 2024,
    description: "Participación activa en prácticas ágiles centradas en la gestión de proyectos bajo Scrum.",
    url: "",
  },
  {
    id: 10,
    title: "Participación como Staff – ICPC Bolivia",
    issuer: "Competencia Nacional de Programación",
    year: 2024,
    description: "Participación como colaborador en la competencia universitaria de programación ICPC.",
    url: "",
  },
  {
    id: 11,
    title: "Egreso en Diseño Gráfico",
    issuer: "Instituto Técnico San Pablo",
    year: 2022,
    description: "Nivel de capacitación técnica con validación R.M. 5/1997 - 095/2012.",
    url: "",
  },
  {
    id: 12,
    title: "Formación en Seguridad Ciudadana",
    issuer: "E.P.I. Satélite",
    year: 2018,
    description: "Capacitación técnica en prevención y procedimientos de seguridad urbana.",
    url: "",
  },
  {
    id: 13,
    title: "Formación en Seguridad Ciudadana",
    issuer: "E.P.I. Satélite",
    year: 2017,
    description: "Capacitación en fundamentos de actuación policial y proximidad social.",
    url: "",
  },
  {
    id: 14,
    title: "Brigadista Escolar Destacado",
    issuer: "Ministerio de Educación",
    year: 2017,
    description: "Reconocimiento por desempeño en actividades preventivas escolares.",
    url: "",
  },
  {
    id: 15,
    title: "Participación en Foros de Leyes",
    issuer: "Comité de Culturas del Senado",
    year: 2018,
    description: "Participación en foros de formación cívica en derechos y leyes nacionales (348, 263, 045).",
    url: "",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Certificaciones <span className="text-primary">Profesionales</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aquí algunas de mis certificaciones relevantes, que avalan mi expertise y compromiso profesional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map(({ id, title, issuer, year, description, url }) => (
            <div
              key={id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {issuer} — {year}
                </p>
                <p className="text-muted-foreground text-sm mb-4">{description}</p>
              </div>

              <div className="mt-auto">
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Ver certificación <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
