export type StoryScene = {
  number: string;
  title?: string;
  text: string[];
  image: string;
  imageAlt: string;
};

export type StoryContent = {
  slug: string;
  title: string;
  eyebrow: string;
  quote: string;
  description: string;
  location?: string;
  date: string;
  publishedAt: string;
  coverImage: string;
  coverImageAlt: string;
  openingParagraphs: string[];
  scenes: StoryScene[];
  reflection: string[];
  editorialNote: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
};