import { buildCaseStudyMediaPaths, type VideoAspectRatio } from '../utils/portfolio';

export const FULL_VIDEO_BASE_URL = 'https://ybsoghuhtk5ffahg.public.blob.vercel-storage.com';

const networkingShowreelMedia = buildCaseStudyMediaPaths(
  'networking_showreel',
  FULL_VIDEO_BASE_URL,
  'NETWORKING SHOWREEL.jpeg',
);

export const SHOWREEL_VIDEO_URL = networkingShowreelMedia.fullSrc;

export interface CaseStudy {
  number: string;
  name: string;
  category: string;
  title: string;
  description: string;
  metaLabel: string;
  metaItems: { text: string; highlight?: boolean }[];
  duration: string;
  posterSrc: string;
  fullSrc: string;
  aspectRatio: VideoAspectRatio;
}

export interface ServiceItem {
  number: string;
  title: string;
  inquiryName: string;
  description: string;
  footerLabel: string;
  isPrimary?: boolean;
  iconType: 'layers' | 'monitor' | 'film' | 'star';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  position: 'top' | 'bottom';
}

export interface ReviewItem {
  tag: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
  initials?: string;
  avatarAlt?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const CONTACT_INFO = {
  email: 'creativlog133@gmail.com',
  phoneDisplay: '+92 335 8150 666',
};

export const PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCdFZu9jW_09mA51wtPw-ddITEft8utqdS09Tz0zEbgDwTxo_DgxZiyBlIQvgHxT3ya-ynmPX6gbEGTo9OOxH7140ohbM5-ZyqUysD5xYCZ4XH1pLvnqv1bcSXxpZP3rG9P7ZvVuHZsinHd-1kndSfFu6QrNnO98a0t33iVftNZpKv3e7_pH2NUsOdy2FEJZVxYiOsORpbzBBDq8UKqWRNGaPyK5wHD3RBBQ33_lYaZAFEzE8UDCj2LbQ';

export const SHOWREEL_POSTER_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCuHj2Z-a7-2TrFtTzuDvKsjAtxEZqSrEWuNsfPFa0bBicX46F1-XwDHUyUd6Pvhxe3DivzDVUC9OGhg6X8WZA1auT3XGoWpj4Is4Wmh5vzVdXn_ktw_AQLJvCGQHyUVla0KUkdDLThCkQUcLgJZBFiaYGR9QRrgrm8vOD6hzpUaZ-AyMPlApDCY5Sxz1GYr79NVKtZ2INOZiTTWimt0-Eh97RGrVXMucv-Ilqcw57z42y0mCqsAJEgfQ';

export const NAV_LINKS = [
  { label: 'Work', href: '#work', path: 'work' },
  { label: 'About', href: '#about', path: 'about' },
  { label: 'Services', href: '#services', path: 'services' },
  { label: 'Reviews', href: '#reviews', path: 'reviews' },
];

export const MARQUEE_SKILLS: { label: string }[] = [
  { label: 'ADOBE PREMIERE PRO' },
  { label: 'ADOBE AFTER EFFECTS' },
  { label: 'ADOBE PHOTOSHOP' },
  { label: 'ADOBE ILLUSTRATOR' },
  { label: 'LUMETRI COLOR' },
  { label: 'ELEVENLABS' },
];

export const ABOUT_TAGS = [
  { label: '1 year of industry experience', highlight: false },
  { label: 'Explainers are my main specialty', highlight: true },
  { label: 'Vertical and horizontal formats', highlight: false },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    number: '01',
    name: 'networking_showreel',
    category: 'Explainer motion graphics',
    title: 'Networking Showreel',
    description:
      'I showed how a request travels from a phone to a server and back. I used AI productively in my workflow, built new texturing skills and learned more advanced After Effects. It was my final project for the post production course at CEGA.',
    metaLabel: 'Tools:',
    metaItems: [{ text: 'After Effects' }, { text: 'Photoshop' }, { text: 'Illustrator' }],
    duration: '00:45',
    ...networkingShowreelMedia,
    aspectRatio: '16:9',
  },
  {
    number: '02',
    name: 'sidequest_nn',
    category: 'Event promo video',
    title: 'Sidequest.nn',
    description:
      'A promo for Sidequest.nn, a company that hosts events where strangers gather and connect. I tried new styles to capture the energy of those meetups.',
    metaLabel: 'Format:',
    metaItems: [{ text: 'High-Energy Event Cut' }, { text: 'Reels & Shorts' }],
    duration: '00:25',
    ...buildCaseStudyMediaPaths('sidequest_nn', FULL_VIDEO_BASE_URL, 'sidequest.jpeg'),
    aspectRatio: '9:16',
  },
  {
    number: '03',
    name: 'ibn_battuta',
    category: 'Motion graphics practice reel',
    title: 'Ibn Battuta',
    description:
      'A practice reel where I tried new styles. It sharpened my sense of texturing and taught me how to build convincing walk style animations.',
    metaLabel: 'Focus:',
    metaItems: [{ text: 'Character Rigging' }, { text: 'Texturing' }],
    duration: '00:28',
    ...buildCaseStudyMediaPaths('ibn_battuta', FULL_VIDEO_BASE_URL, 'IBN BATTUTA.jpeg'),
    aspectRatio: '9:16',
  },
  {
    number: '04',
    name: 'practice_reel',
    category: 'Video editing',
    title: 'Practice Reel',
    description:
      'I took a full A roll from YouTube and edited it entirely by myself, as practice in pacing, cuts and storytelling.',
    metaLabel: 'Discipline:',
    metaItems: [{ text: 'Short-form Pacing' }, { text: 'Sound Design' }],
    duration: '01:00',
    ...buildCaseStudyMediaPaths('practice_reel', FULL_VIDEO_BASE_URL, 'PRACTICE REEL.jpeg'),
    aspectRatio: '9:16',
  },
  {
    number: '05',
    name: 'gracode',
    category: 'Agency promo reel',
    title: 'Gracode',
    description:
      "A promo showreel for Gracode, an agency that delivers websites, videos, AI automations and web development. The reel presents the agency's offering clearly to prospective clients.",
    metaLabel: 'Client:',
    metaItems: [{ text: 'Gracode Studio', highlight: true }, { text: 'Premiere Pro' }],
    duration: '00:30',
    ...buildCaseStudyMediaPaths('gracode', FULL_VIDEO_BASE_URL, 'GRACODE (2).jpeg'),
    aspectRatio: '16:9',
  },
  {
    number: '06',
    name: 'real_estate_promo',
    category: 'promo video',
    title: 'Real Estate Promo',
    description:
      'A sample promo for real estate clients, showing how properties can be presented in a clean, engaging way.',
    metaLabel: 'Application:',
    metaItems: [{ text: 'Commercial Listings' }, { text: 'Visual Explanation' }],
    duration: '00:30',
    ...buildCaseStudyMediaPaths('real_estate_promo', FULL_VIDEO_BASE_URL, 'REAL ESTATE PROMO.jpeg'),
    aspectRatio: '9:16',
  },
  {
    number: '07',
    name: 'mahad_usman_intro',
    category: 'Personal intro reel',
    title: 'Mahad Usman Intro Reel',
    description:
      'An intro reel for Mahad Usman, an AI web developer, to introduce him and his work in a short, professional piece he can use with clients.',
    metaLabel: 'Client:',
    metaItems: [{ text: 'Mahad Usman', highlight: true }, { text: 'Personal Brand' }],
    duration: '00:35',
    ...buildCaseStudyMediaPaths('mahad_usman_intro', FULL_VIDEO_BASE_URL, 'MAHAD USMAN INTRO REEL.jpeg'),
    aspectRatio: '9:16',
  },
  {
    number: '08',
    name: 'car_drift',
    category: '2D animation',
    title: 'Car Drift',
    description:
      'A 2D car drift animation using layered parallax movement that gives a flat scene the depth of a 3D look. I wanted to see how camera motion can make 2D feel dimensional.',
    metaLabel: 'Technique:',
    metaItems: [{ text: 'Multiplane Parallax Camera' }, { text: 'Vector Rigging' }],
    duration: '00:15',
    ...buildCaseStudyMediaPaths('car_drift', FULL_VIDEO_BASE_URL, 'CAR DRIFT.jpeg'),
    aspectRatio: '16:9',
  },
  {
    number: '09',
    name: 'fien',
    category: 'Brand intro video',
    title: 'Fien',
    description:
      "An intro video for Fien, a men's accessories brand, made for web developer Mahad Usman to promote his work on the brand's website. It sets the tone as visitors land on the site.",
    metaLabel: 'Focus:',
    metaItems: [{ text: 'E-commerce Hero Motion' }, { text: 'After Effects' }],
    duration: '00:20',
    ...buildCaseStudyMediaPaths('fien', FULL_VIDEO_BASE_URL, 'FIEN.jpeg'),
    aspectRatio: '16:9',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'EXPLAINER VIDEOS',
    inquiryName: 'Explainer Videos',
    description:
      'Clear, engaging breakdowns of ideas, products and processes. This is my main specialty.',
    footerLabel: 'MAIN SPECIALTY',
    isPrimary: true,
    iconType: 'layers',
  },
  {
    number: '02',
    title: 'MOTION GRAPHICS AND ADS',
    inquiryName: 'Motion Graphics and Ads',
    description:
      'Expressive motion design and high conversion video ads for brands and creators.',
    footerLabel: 'CONVERSION FOCUSED',
    isPrimary: false,
    iconType: 'monitor',
  },
  {
    number: '03',
    title: 'VIDEO EDITING',
    inquiryName: 'Video Editing',
    description:
      'Creative editing, seamless transitions, cinematic storytelling, and professional color grading for engaging videos across all formats.',
    footerLabel: 'VERTICAL & HORIZONTAL',
    isPrimary: false,
    iconType: 'film',
  },
  {
    number: '04',
    title: 'Ai ads',
    inquiryName: 'AI Ads',
    description:
      'Creative AI-generated advertisements that transform ideas into visually captivating and engaging brand experiences.',
    footerLabel: 'IDENTITY IN MOTION',
    isPrimary: false,
    iconType: 'star',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'SHARE YOUR BRIEF',
    description:
      'Tell me what you want, the style you like, any reference videos, and all the details about your brand or project.',
    position: 'top',
  },
  {
    number: '02',
    title: 'QUOTE AND START',
    description:
      'I review your brief and send a clear price and timeline. Once you approve, an advance payment confirms your spot and I begin.',
    position: 'bottom',
  },
  {
    number: '03',
    title: 'STORYBOARD',
    description:
      'I break your story into scenes and sketch each one, so you can see the plan before any animation starts. You approve it or ask for changes.',
    position: 'top',
  },
  {
    number: '04',
    title: 'MOTION DESIGN',
    description:
      'Once the storyboard is approved, I bring it to life with animation, graphics, sound, and polish.',
    position: 'bottom',
  },
  {
    number: '05',
    title: 'REVIEW AND REVISIONS',
    description:
      'I send you the first version. You share your feedback and I fix it. Revision rounds are included.',
    position: 'top',
  },
  {
    number: '06',
    title: 'FINAL DELIVERY',
    description:
      'After your final approval and the remaining payment, I send the final files in every format you need, ready to post.',
    position: 'bottom',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    tag: 'Agency promo reel',
    quote:
      '"Waleed is a highly talented and professional video editor. His creativity, dedication, and exceptional video editing skills are truly commendable."',
    author: 'AbdurRahman Mahmood',
    role: 'CEO, Gracode Studio',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCjvgtcTan-CXe0fNV8fYyWgiT4f8UVu4yuyFdJB-4QHqkc3yK1Xpk0gUVYr7eXuoN1fmsrK5svrtvjkPLfWouFs_BLYt1RR5OA0gupXpwFfUAQqcga-hgYneodVIC9v_hwwNp9RIrLuzR6im2NUzxijBnZyqYgkUb9yhzYkKhs_i49Wd5hVccy3CMKAbIn8TbuWbhZQPxDV9VYixVUBNhK7fEWP9MdkBlOFeQQ08uJUAAbsh5_owc9IA',
    avatarAlt: 'Gracode Studio Logo',
  },
  {
    tag: 'Event promo video',
    quote:
      '"It was really fascinating to have that thoughtfully curated motion animation of our community. I personally never thought about using the star in our logo as an opening transition or any asset, but the thoughtful imagination of yours really inspired me."',
    author: 'Sidequest.nn',
    role: 'Community Events',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4ToqAC2pJLVan_2x72JlG2TFoDqpB5PA4-muX_CcO90r0jy4E8hvydfDHr5_m7jgXGRefKTSDs5gR1YqGMcz_AyBDWZ9Oh2u9w23wcRaq7JMsUMxHiif02V73cgYHMBfQtVIwcA7MsM2AX0fx-x1qr09H7VSkX7FCmsoOPH_xMUQ0hx_oiZ7nIbel0vFEZ5e5TMUwRa42lv-gmgb9MoY1sHaUKi6aMg2gSMye6_412HomcyWP8-vGnQ',
    avatarAlt: 'Sidequest.nn Logo',
  },
  {
    tag: 'Personal intro reel',
    quote:
      '"Waleed was so passionate with his work. He delivered me the complete project within time."',
    author: 'Mahad Usman',
    role: 'Agentic AI Developer',
    initials: 'MU',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What types of projects do you work on?',
    answer:
      'Explainer videos, motion graphics and ads, logo and brand animation, and video editing for brands, agencies, and creators.',
    defaultOpen: true,
  },
  {
    id: 'faq-2',
    question: 'Can you work with footage I already have?',
    answer:
      "Yes. Send your raw clips and I'll edit, color grade, and add motion graphics, sound, and captions. I can also build visuals from scratch if you have no footage.",
  },
  {
    id: 'faq-3',
    question: 'Do you handle design as well as editing?',
    answer:
      "Yes. I do both the motion design (animation, titles, graphics) and the video editing, so you don't need to hire two people.",
  },
  {
    id: 'faq-4',
    question: 'How do you charge for projects?',
    answer:
      'Pricing depends on video length, style, and complexity. I quote after seeing your brief, so there are no surprise costs.',
  },
  {
    id: 'faq-5',
    question: 'How long does a project take?',
    answer:
      'The timeline depends on the length and complexity of the video, and larger projects take longer. I give you a clear timeline with your quote, and you can ask about rush delivery.',
  },
  {
    id: 'faq-6',
    question: 'Do you provide support after delivery?',
    answer:
      "Yes. If something needs a small fix after delivery, I'll handle it at no extra cost.",
  },
];
