export interface CaseStudy {
  number: string;
  category: string;
  title: string;
  description: string;
  metaLabel: string;
  metaItems: { text: string; highlight?: boolean }[];
  duration: string;
  imageUrl: string;
  stickyTopClass: string;
}

export interface ServiceItem {
  number: string;
  title: string;
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
  whatsappUrl: 'https://wa.me/923358150666',
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

export const MARQUEE_SKILLS: { label: string; subLabel?: string }[] = [
  { label: 'ADOBE PREMIERE PRO' },
  { label: 'ADOBE AFTER EFFECTS' },
  { label: 'ADOBE PHOTOSHOP' },
  { label: 'ADOBE ILLUSTRATOR' },
  { label: 'LUMETRI COLOR' },
  { label: 'ELEVENLABS', subLabel: 'AI VOICEOVER' },
];

export const ABOUT_TAGS = [
  { label: '1 year of industry experience', highlight: false },
  { label: 'Explainers are my main specialty', highlight: true },
  { label: 'Vertical and horizontal formats', highlight: false },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    number: '01',
    category: 'Explainer motion graphics',
    title: 'Networking Showreel',
    description:
      'I showed how a request travels from a phone to a server and back. I used AI productively in my workflow, built new texturing skills and learned more advanced After Effects. It was my final project for the post production course at CEGA.',
    metaLabel: 'Tools:',
    metaItems: [{ text: 'After Effects' }, { text: 'Photoshop' }, { text: 'Illustrator' }],
    duration: '00:45',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoR3IYDGNE8pE5AMYhPKJuIN3fAChF3ZPK-wTjKibnS2zDbWdrqG-XHJhsDvCWiDSPcLRXfvR2x5mnmXSZa8jJp2FGfhMvHl3CXKaVvilmAmTdUI7G-wom2XKNf71S68I6RpWQrXvHwpKdCrYeqja38vcrn5H9uLkLtSj2XNUEi6vum-hMaEHRBSiVUtrf9ZaEsb2NsTSx8Zs9VvGd3aJ0z1slZrL-aNzR6iCZZ6dDawEmQUZnNvfBHA',
    stickyTopClass: 'top-24',
  },
  {
    number: '02',
    category: 'Event promo video',
    title: 'Sidequest.nn',
    description:
      'A promo for Sidequest.nn, a company that hosts events where strangers gather and connect. I tried new styles to capture the energy of those meetups.',
    metaLabel: 'Format:',
    metaItems: [{ text: 'High-Energy Event Cut' }, { text: 'Reels & Shorts' }],
    duration: '00:25',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6j4o9wpv5Ggj4H2D5HQMxWuff94cz-uivCXIroX9T1_9KTgkFiACt_4K7MFZoLnfbBSawb10_rltH1Sp3vkHEWR1hBMzoPWsdrQ2Y2g_v71sDDHneY9CrJvgLfkcH8PtO8clwyPqii3dVm6igHnBEWXVVpDVUwUcCQRqhI9PV70llyWzrxSa4QsJCzW34uV1U5QxEX1e4gIfMpebIA3VdeQOCc5hKfI48vfguLqlOFUMQPFvvXZjorA',
    stickyTopClass: 'top-28',
  },
  {
    number: '03',
    category: 'Motion graphics practice reel',
    title: 'Ibn Battuta',
    description:
      'A practice reel where I tried new styles. It sharpened my sense of texturing and taught me how to build convincing walk style animations.',
    metaLabel: 'Focus:',
    metaItems: [{ text: 'Character Rigging' }, { text: 'Texturing' }],
    duration: '00:28',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWOSo6v_UEd4fraadp2cVmROn1S1jzvV81sy99WdCpKLM0m646zNgYRp7JlCG00dpBI7RiqyfxnRfRGtmog0OcgJlfB7BkB19C6eMLmlF7jGgmEX_QVZ3QJiioYdPs5vUFnNMARjAGLCrBne2OT7_eJKjkJ3KHWaQyAAa3Gd-qr2r1dDlChzQ4rwZsvitbyj8JLMso5tno_av5LfvnFuLR0TjsedkZUX6LJdteiwTk6NxfjnhyRlZPag',
    stickyTopClass: 'top-32',
  },
  {
    number: '04',
    category: 'Video editing',
    title: 'Practice Reel',
    description:
      'I took a full A roll from YouTube and edited it entirely by myself, as practice in pacing, cuts and storytelling.',
    metaLabel: 'Discipline:',
    metaItems: [{ text: 'Short-form Pacing' }, { text: 'Sound Design' }],
    duration: '01:00',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDttxYsHUSvg1kxBdxfO7C66br8wqkxuGZHWno8fbcLa1nW2tynOxjwZX9h8mrOESR-7Et4eL4MkRQVEuT_jqzQcwtw7uT_l0h7Aa8Ht9TFIOlw8kYd2g44Gmt0Uv7rtmqiNvTEZP_XyA4odCKBOJjWntv1giOVI_Z1KOtFJjikbcp3KcLBXklBJ_KZxFFdsTve8O14zanHFn-aGWIZb3Wyi1Q4PS2ZAOsYJsOlRBqtR1Nge3uRnBbABA',
    stickyTopClass: 'top-36',
  },
  {
    number: '05',
    category: 'Agency promo reel',
    title: 'Gracode',
    description:
      "A promo showreel for Gracode, an agency that delivers websites, videos, AI automations and web development. The reel presents the agency's offering clearly to prospective clients.",
    metaLabel: 'Client:',
    metaItems: [{ text: 'Gracode Studio', highlight: true }, { text: 'Premiere Pro' }],
    duration: '00:30',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeVq1QEshtcppYa-CVvND_SVqLBxi1DVis2VqBsJtLbG5Ds853sZCXFIHS7hbvYON4WYSUvdCcI4G95mPVMTpWTyEfzyXwnCIcBGzLF4AbLerxcEk3MeoscAzd-NUqEsZLIPcnD8PzeS9lfPkF5YWUFIyBGV7jh944yaNY49P8Jg5jdm9pW_4c74Oi0ipMro7NbuwddESHzUg0DNEb3DOvaW3mSnovpGUDwr4g02Sk7gr_25a5BbZYsQ',
    stickyTopClass: 'top-40',
  },
  {
    number: '06',
    category: 'promo video',
    title: 'Real Estate Promo',
    description:
      'A sample promo for real estate clients, showing how properties can be presented in a clean, engaging way.',
    metaLabel: 'Application:',
    metaItems: [{ text: 'Commercial Listings' }, { text: 'Visual Explanation' }],
    duration: '00:30',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUZhtnMdOzf5zehr18oPOB2cgj6xLBlbTuMaVtD7RdeEEf-FLGatdGWRMQ3Mz_70B-2blsja-DuebaDSssHSnqsSswzc9vZ4cBDpECG3BRv1o855htdpjjMix73oQjZ7Sgm75_8WJM9w1b58Rh15eppSXgDFY2nKxUZeUN6bXLXGdrIzuHXqvuNAfwCmmw-6ORw0i8fmItIMHVNleErUEbV0QORu6-KDNo9SQlZWfQuIMFrO3ltZjDdQ',
    stickyTopClass: 'top-44',
  },
  {
    number: '07',
    category: 'Personal intro reel',
    title: 'Mahad Usman Intro Reel',
    description:
      'An intro reel for Mahad Usman, an AI web developer, to introduce him and his work in a short, professional piece he can use with clients.',
    metaLabel: 'Client:',
    metaItems: [{ text: 'Mahad Usman', highlight: true }, { text: 'Personal Brand' }],
    duration: '00:35',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnWFX0NbS5O2jgHil8Ntxfccf6J0lRG4KIakIWrdIXYKTmCtNeLuzaYUiBUxpYNmHyiBPjOZm7Kzc2NK8YMt2yYrRmk14RBoXUcoq3iudlaJaDrmvEFKsn0uef_ihYIfmfsJVcX65SHMXsQo-BRc0PoOswwUZueaFdvyjsmi6Gf_wJkjoSQnMshU1kthqdry1Y_m7cRQGDLqG4NG9qThXm77JlRtvAUK2XFCsEE_nrzwgdLJ7uWIK9VA',
    stickyTopClass: 'top-48',
  },
  {
    number: '08',
    category: '2D animation',
    title: 'Car Drift',
    description:
      'A 2D car drift animation using layered parallax movement that gives a flat scene the depth of a 3D look. I wanted to see how camera motion can make 2D feel dimensional.',
    metaLabel: 'Technique:',
    metaItems: [{ text: 'Multiplane Parallax Camera' }, { text: 'Vector Rigging' }],
    duration: '00:15',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuByRt3SrtHtTBnn7i6TuoMCLnSNDRBzfdo2E4WPvT4h0opPnSF4mM2T7nuq5AqpcAqEkF8yBn69NCjgLtYptEz2WpevvdWGZ33F-c9fp067I19UFeRJDCB3acLhhDJpCNF3p4P3f7RbxT1l-GrBRzbOw_6di0DGWjB5lFhkqJe7U-oRcrRju3lNbTHDPaqlV4oy9ANyKBiOEXZEcS2Icj3rMS8PvUuILckYwi1bbKj_SRDDeRfIwhdAEg',
    stickyTopClass: 'top-52',
  },
  {
    number: '09',
    category: 'Brand intro video',
    title: 'Fien',
    description:
      "An intro video for Fien, a men's accessories brand, made for web developer Mahad Usman to promote his work on the brand's website. It sets the tone as visitors land on the site.",
    metaLabel: 'Focus:',
    metaItems: [{ text: 'E-commerce Hero Motion' }, { text: 'After Effects' }],
    duration: '00:20',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7ocSTqdX9ZwERYvPwnHDV0qsBd4bndFsvQhgZqcn3j_YM-qLq2cHwse9MPEqOy_2I_Uarx5c8Y7u43z0LTHccRAr-XszEeQdAwVb1hmQTHEi_k-6bZoncMJisTorwcXEWTECdtKV7k_8FQOX4QdQCcMjUFzu-1lsoQ65atAID-vTY8HMtXmEwsiFDoiRR33ZMk74cYWPqbHQ-YzCTBmosAAUkXXB1oNRViYOhxCKggHpBVmla2qG8vg',
    stickyTopClass: 'top-56',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'EXPLAINER VIDEOS',
    description:
      'Clear, engaging breakdowns of ideas, products and processes. This is my main specialty.',
    footerLabel: 'MAIN SPECIALTY',
    isPrimary: true,
    iconType: 'layers',
  },
  {
    number: '02',
    title: 'MOTION GRAPHICS AND ADS',
    description:
      'Expressive motion design and high conversion video ads for brands and creators.',
    footerLabel: 'CONVERSION FOCUSED',
    isPrimary: false,
    iconType: 'monitor',
  },
  {
    number: '03',
    title: 'VIDEO EDITING',
    description:
      'Creative editing, seamless transitions, cinematic storytelling, and professional color grading for engaging videos across all formats.',
    footerLabel: 'VERTICAL & HORIZONTAL',
    isPrimary: false,
    iconType: 'film',
  },
  {
    number: '04',
    title: 'Ai ads',
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
