export type ActiveModal = 'design' | 'photos' | 'lookbook' | 'inquiry-fullstack' | 'inquiry-dev' | 'contact' | 'techstack' | null;

export interface ClientWork {
  name: string;
  role: string;
  year: string;
  descriptionEn: string;
  tags: string[];
}

export interface DesignProject {
  id: string;
  title: string;
  client: string;
  categoryEn: string;
  year: string;
  descriptionEn: string;
  metrics?: string;
  tools: string[];
  image: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  location: string;
  camera: string;
  year: string;
  image: string;
}
