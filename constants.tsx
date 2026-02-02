
import { Vendor, Testimonial, FAQ } from './types';

export const VENDORS: Vendor[] = [
  {
    id: 'vip',
    name: 'FlipZone - VIP Grupa',
    description: 'Pristup grupi i svim dobavljačima.',
    price: '50€',
    category: 'ostalo',
    image: 'https://picsum.photos/id/180/400/300',
    stripeLink: 'https://buy.stripe.com/6oUcN57FO7cm4lefmK8k802'
  },
  {
    id: 'airpods',
    name: 'AirPods Pro Vendor',
    description: 'Pristup provjerenom dobavljaču AirPods Pro.',
    price: '5.99€',
    category: 'elektronika',
    image: 'https://picsum.photos/id/1/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'applewatch',
    name: 'Apple Watch Vendor',
    description: 'Serija 7/8/Ultra dobavljač.',
    price: '5.99€',
    category: 'satovi',
    image: 'https://picsum.photos/id/2/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'iphone',
    name: 'iPhone Vendor',
    description: 'Novi i obnovljeni modeli.',
    price: '5.99€',
    category: 'elektronika',
    image: 'https://picsum.photos/id/3/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'ps5',
    name: 'PS5 Vendor',
    description: 'Konzole i kontroleri.',
    price: '5.99€',
    category: 'elektronika',
    image: 'https://picsum.photos/id/4/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'niketn',
    name: 'Nike TN Vendor',
    description: 'Popularne TN-ice, razne boje.',
    price: '5.99€',
    category: 'obuca',
    image: 'https://picsum.photos/id/21/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'techfleece',
    name: 'Nike Tech Fleece Vendor',
    description: 'Trenirka setovi.',
    price: '5.99€',
    category: 'odjeca',
    image: 'https://picsum.photos/id/22/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'rolex',
    name: 'Rolex Vendor',
    description: 'Submariner, Datejust modeli.',
    price: '5.99€',
    category: 'satovi',
    image: 'https://picsum.photos/id/23/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'jbl',
    name: 'JBL Speaker Vendor',
    description: 'Bluetooth zvučnici raznih modela.',
    price: '5.99€',
    category: 'elektronika',
    image: 'https://picsum.photos/id/24/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'moncler',
    name: 'Moncler Jacket Vendor',
    description: 'Jakne i zimska odjeća.',
    price: '5.99€',
    category: 'odjeca',
    image: 'https://picsum.photos/id/25/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'nintendoswitch',
    name: 'Nintendo Switch Vendor',
    description: 'OLED i Lite verzije',
    price: '5.99€',
    category: 'elektronika',
    image: 'https://picsum.photos/id/26/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'smartwatch',
    name: 'Smartwatch Vendor',
    description: 'Samsung, Garmin i drugi',
    price: '5.99€',
    category: 'satovi',
    image: 'https://picsum.photos/id/27/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'nikeairforce1',
    name: 'Nike Air Force 1 Vendor',
    description: 'Klasične i custom varijante',
    price: '5.99€',
    category: 'obuca',
    image: 'https://picsum.photos/id/28/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'adidasyeezy',
    name: 'Adidas Yeezy Vendor',
    description: '350, 700, Slide',
    price: '5.99€',
    category: 'obuca',
    image: 'https://picsum.photos/id/29/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'jordan1',
    name: 'Jordan 1 Vendor',
    description: 'High, Mid i Low modeli',
    price: '5.99€',
    category: 'obuca',
    image: 'https://picsum.photos/id/30/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'newbalance',
    name: 'New Balance Vendor',
    description: '550, 990 i hype modeli',
    price: '5.99€',
    category: 'obuca',
    image: 'https://picsum.photos/id/31/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'dunklow',
    name: 'Dunk Low Vendor',
    description: 'Nike Dunk Low modeli',
    price: '5.99€',
    category: 'obuca',
    image: 'https://picsum.photos/id/32/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'puff',
    name: 'Puff Vendor',
    description: 'Razne vrste puffova',
    price: '5.99€',
    category: 'ostalo',
    image: 'https://picsum.photos/id/33/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'stoneisland',
    name: 'Stone Island Vendor',
    description: 'Majice, jakne, duksevi',
    price: '5.99€',
    category: 'odjeca',
    image: 'https://picsum.photos/id/34/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'thenorthface',
    name: 'The North Face Vendor',
    description: 'Retro Nuptse i puffer jakne',
    price: '5.99€',
    category: 'odjeca',
    image: 'https://picsum.photos/id/35/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'palmangels',
    name: 'Palm Angels Vendor',
    description: 'Majice i duksevi',
    price: '5.99€',
    category: 'odjeca',
    image: 'https://picsum.photos/id/36/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'casiogshock',
    name: 'Casio G-Shock Vendor',
    description: 'Limitirane serije',
    price: '5.99€',
    category: 'satovi',
    image: 'https://picsum.photos/id/37/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'pandora',
    name: 'Pandora Jewelry Vendor',
    description: 'Narukvice i privesci',
    price: '5.99€',
    category: 'ostalo',
    image: 'https://picsum.photos/id/38/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'supreme',
    name: 'Supreme Accessories Vendor',
    description: 'Torbe, novčanici, kape',
    price: '5.99€',
    category: 'ostalo',
    image: 'https://picsum.photos/id/39/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'offwhite',
    name: 'Off-White Vendor',
    description: 'Kaiševi, majice, hoodies',
    price: '5.99€',
    category: 'odjeca',
    image: 'https://picsum.photos/id/40/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  },
  {
    id: 'luxuryperfume',
    name: 'Luxury Perfume Vendor',
    description: 'Dior Sauvage, Creed Aventus i sl.',
    price: '5.99€',
    category: 'ostalo',
    image: 'https://picsum.photos/id/41/400/300',
    stripeLink: 'https://buy.stripe.com/7sY4gz8JSbsC7xqfmK8k803'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Marko', text: '"Kurikulum je stvarno detaljan — uspio sam pokrenuti prvi profitabilan listing u samo 30 dana."' },
  { id: 2, name: 'Ana', text: '"Templates i savjeti za dobavljače su mi stvarno olakšali posao. Sad imam potpunu kontrolu."' },
  { id: 3, name: 'Ivan', text: '"Kratko, jasno i praktično — odmah sam mogao primijeniti naučeno. Preporuka svima!"' },
  { id: 4, name: 'Luka', text: '"Super je što sve lekcije mogu pratiti vlastitim tempom. Ovaj kurs mijenja sve."' },
  { id: 5, name: 'Marija', text: '"Od početnika do uspješnog listinga — vodiči i podrška su mi stvarno pomogli."' }
];

export const FAQS: FAQ[] = [
  { id: 1, question: 'Je li ovo legalno?', answer: 'Da — program uči etičkim i legalnim metodama resellinga. Ne podržavamo kršenje intelektualnog vlasništva.' },
  { id: 2, question: 'Kako se plaća?', answer: 'Plaćanje se obavlja sigurno preko Stripe Payment linkova ili PayPal-a.' },
  { id: 3, question: 'Je li potrebno iskustvo?', answer: 'Nije potrebno — program vas vodi od apsolutnih osnova do naprednih taktika prodaje.' },
  { id: 4, question: 'Koliko traje kurs?', answer: 'Kurs je samostalan, ali preporučujemo 8 tjedana uz 3-5 sati učenja tjedno.' },
  { id: 5, question: 'Postoji li podrška?', answer: 'Da, imamo aktivnu zajednicu i direktnu podršku putem emaila i Discorda.' }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/id/10/400/400',
  'https://picsum.photos/id/11/400/400',
  'https://picsum.photos/id/12/400/400',
  'https://picsum.photos/id/13/400/400',
  'https://picsum.photos/id/14/400/400',
  'https://picsum.photos/id/15/400/400'
];
