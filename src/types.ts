export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bathroom' | 'kitchen' | 'floor' | 'wall' | 'commercial';
  description: string;
  image: string;
  size?: string; // e.g. "large-format", "herringbone"
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  location: string;
  serviceType: string;
  description: string;
  preferredContact: 'phone' | 'email';
}

export interface ContactMessage {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
