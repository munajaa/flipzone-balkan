
export interface Vendor {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'odjeca' | 'obuca' | 'elektronika' | 'satovi' | 'ostalo';
  image: string;
  stripeLink?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
