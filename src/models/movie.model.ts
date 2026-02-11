export interface Movie {
  id: number;
  title: string;
  genre: string;
  description?: string;
  year: number;
  duration?: number;
  posterUrl: string;
  director?: string;
  rating: number;
}
