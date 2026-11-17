export interface Book {
  id: string;
  title: string;
  genre: string;
  tagline: string;
  description: string;
  longDescription: string;
  coverImage: string;
  publishYear: string;
  pages: number;
  isbn: string;
  sampleExcerpt: string;
  purchaseLinks: {
    amazon: string;
    barnesNoble: string;
    bookshop: string;
    appleBooks: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  publication: string;
  rating: number;
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  image: string;
}
