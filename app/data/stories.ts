export type Story = {
  title: string;
  slug: string;
  excerpt: string;
  quote: string;
  image: string;
  date: string;
  publishedAt: string;
};

export const stories: Story[] = [
  {
    title: "Las huellas invisibles",
    slug: "las-huellas-invisibles",
    excerpt:
      "Una historia sobre percepciones, confianza y esos pequeños detalles que hacen la diferencia.",
    quote:
      "Hay marcas que desaparecen con un trapeador. Otras tardan un poco más.",
    image:
      "/stories/las-huellas-invisibles/01-apartamento.webp",
    date: "July 15, 2026",
    publishedAt: "2026-07-15",
  },
];

export const latestStory = [...stories].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() -
    new Date(a.publishedAt).getTime(),
)[0];