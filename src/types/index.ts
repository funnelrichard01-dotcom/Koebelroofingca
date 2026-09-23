export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'replacement' | 'repair' | 'construction' | 'skylights' | 'components';
  signsOrProblems: string[];
  benefits: string[];
  image: string;
  imageAlt: string;
  tag: string;
  certifications?: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image?: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  serviceType: string;
  roofAge: string;
  inquiryType: 'consultation' | 'quote' | 'discovery_call';
  message: string;
}
