import type { StoryContent } from "./types";

export const lasHuellasInvisibles: StoryContent = {
  slug: "las-huellas-invisibles",

  title: "Las huellas invisibles",

  eyebrow: "Today at Luxe & Pristine",

  quote:
    "Hay marcas que desaparecen con un trapeador. Otras tardan un poco más.",

  description:
    "Una historia sobre percepciones, confianza y esos pequeños detalles que hacen la diferencia.",

  // Dejamos la historia atemporal
  date: "July 15, 2026",

  publishedAt: "2026-07-15",

  coverImage:
    "/stories/las-huellas-invisibles/01-apartamento.webp",

  coverImageAlt:
    "Equipo de Luxe & Pristine dentro de un apartamento",

  openingParagraphs: [
    "La unidad estaba lista. Las camas estiradas. Las toallas dobladas. La luz de la tarde entraba por las ventanas.",
  ],

  scenes: [
    {
      number: "02",
      text: [
        "Entonces llegó alguien. Miró el piso durante apenas unos segundos y encontró unas huellas.",
      ],
      image:
        "/stories/las-huellas-invisibles/02-observacion.webp",
      imageAlt:
        "Una persona observando con atención el piso",
    },

    {
      number: "03",
      text: [
        "La cleaner volvió a entrar. Miró el mismo suelo desde otro ángulo. El apartamento guardó silencio.",
      ],
      image:
        "/stories/las-huellas-invisibles/03-segunda-mirada.webp",
      imageAlt:
        "La cleaner revisando nuevamente el apartamento",
    },

    {
      number: "04",
      text: [
        "Hay pisos curiosos. Durante unos minutos conservan la memoria de quienes caminaron antes. Solo cuando cambia la luz, las últimas huellas deciden marcharse.",
      ],
      image:
        "/stories/las-huellas-invisibles/04-memoria-del-piso.webp",
      imageAlt:
        "Reflejos sobre el piso del apartamento",
    },

    {
      number: "05",
      text: [
        "Ella volvió a pasar el trapeador. No porque dudara de su trabajo, sino porque las casas también necesitan sentirse escuchadas. Al salir, el piso ya no reflejaba solamente la ciudad. También reflejaba tranquilidad.",
      ],
      image:
        "/stories/las-huellas-invisibles/05-tranquilidad.webp",
      imageAlt:
        "La cleaner observando el apartamento terminado",
    },
  ],

  reflection: [
    "La limpieza elimina el polvo.",
    "La confianza necesita un poco más de tiempo.",
  ],

  editorialNote: {
    eyebrow: "Editorial note",

    title: "Detrás de cada check-out",

    paragraphs: [
      "Detrás de cada check-out hay una historia.",
      "Detrás de cada historia, hay un hogar que cuidamos como si fuera nuestro.",
    ],

    image: "/stories/shared/editorial-team.webp",

    imageAlt:
      "Equipo de Luxe & Pristine unido después de preparar una propiedad",
  },
};