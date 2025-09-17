
export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  description: string;
}

export interface ChoreographyConcept {
  title: string;
  concept: string;
  style: string;
  keyMovements: string[];
  musicSuggestion: string;
}
 
