export interface GalleryItem {
  id: string;
  title: string;
  category: 'Portrait' | 'Wedding' | 'Nature' | 'Street' | 'Wildlife' | 'Fashion' | 'Travel';
  image: string;
  description: string;
  location: string;
  date: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  price: string;
  duration: string;
  deliverables: string[];
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  date: string;
  message: string;
}
