export interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    coverImage: string;
    genres: string[];
    publishedYear: number;
    rating?: number;
    pages?: number;
    language?: string;
    publisher?: string;
    buyLink?: string;
    price?: string;
  }
  
  export interface BookSearchParams {
    query: string;
    maxResults?: number;
    startIndex?: number;
  }
  
  export interface BookRecommendation {
    book: Book;
    matchScore: number;
    reason: string;
  }
  
  export interface BookFilterOptions {
    genre?: string;
    minYear?: number;
    maxYear?: number;
    minRating?: number;
    language?: string;
  }
  
  // Tipos para la API de Google Books (internos)
  interface GoogleBook {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      // ... (otros campos como en googleBooks.ts)
    };
    // ... (otros campos)
  }
  
  export function isBook(value: any): value is Book {
    return (
      value &&
      typeof value.id === 'string' &&
      typeof value.title === 'string' &&
      typeof value.author === 'string'
    );
  }