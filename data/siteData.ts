export interface Cottage {
  id: string;
  name: string;
  subTitle: string;
  description: string;
  image: string;
  poolHighlight: string;
  features: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  aspect: "tall" | "wide" | "square";
}

export interface Experience {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  villa: string;
  rating: number;
  title: string;
  review: string;
}

export interface NearbyAttraction {
  name: string;
  description: string;
  highlight: string;
}

export const siteData = {
  brand: {
    name: "Parudeesa",
    fullName: "Parudeesa Plantation Pool Villa",
    subtitle: "Plantation Pool Villa",
    tagline: "Your Private Paradise in the Heart of Wayanad",
    shortDescription:
      "An intimate plantation retreat in Wayanad, offering private pool cottages, peaceful surroundings and memorable stays.",
    location: "Vaduvanchal, Wayanad, Kerala, India",
    googleMapsUrl: "https://maps.google.com/?q=Vaduvanchal,+Wayanad,+Kerala",
    whatsapp: {
      number: "+919876543210", // Editable placeholder
      display: "+91 98765 43210",
      defaultMessage:
        "Hello Parudeesa Team! I'm interested in booking a stay at your property. Could you please share the availability and details?",
    },
    phone: {
      number: "+919876543210",
      display: "+91 98765 43210",
    },
    email: "stay@parudeesaresort.com",
    instagram: "https://instagram.com/parudeesa_wayanad",
    developer: {
      name: "Zywebs",
      url: "https://www.zywebs.online/",
    },
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Cottages", href: "#cottages" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    label: "WELCOME TO PARUDEESA",
    headline: "Your Private Paradise in the Heart of Wayanad.",
    description:
      "Escape into peaceful plantation living, private pool cottages and moments of pure relaxation.",
    primaryCta: {
      label: "Explore Your Stay",
      href: "#cottages",
    },
    secondaryCta: {
      label: "Book Your Stay",
      href: "#contact",
    },
    slides: [
      {
        id: 1,
        headingLine1: "Your Private Paradise",
        headingLine2: "in the Heart of Wayanad",
        title: "Your Private Paradise",
        subtitle: "in the Heart of Wayanad",
        description:
          "Escape into peaceful plantation living, private pool cottages and moments of pure relaxation.",
        image: "https://cdn.reserveme.in/i/69ce18fe9fdcbe3887e86be0/c2df784b1bd84077fd1ff9b3862032dd?w=1920&q=85",
        alt: "Parudeesa Plantation Pool Villa illuminated at dusk with private swimming pool",
      },
      {
        id: 2,
        headingLine1: "A Sanctuary of Peace",
        headingLine2: "Surrounded by Nature",
        title: "A Sanctuary of Peace",
        subtitle: "Surrounded by Nature",
        description:
          "An intimate boutique retreat nestled amidst lush Wayanad plantations, designed for quietude.",
        image:
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=85",
        alt: "Serene private pool villa surrounded by tropical coffee and spice plantations in Wayanad",
      },
    ],
  },

  about: {
    label: "THE PARUDEESA EXPERIENCE",
    heading: "A Peaceful Escape, Surrounded by Nature",
    description:
      "Discover a private retreat nestled within the lush plantations of Wayanad. Parudeesa Plantation Pool Villa offers an intimate escape where privacy, comfort and nature come together.",
    extendedText:
      "Far from crowded resorts and tourist thoroughfares, Parudeesa was conceived as a sanctuary of pure stillness. Surrounded by evergreen coffee estates, native pepper vines, and the gentle whispers of the Western Ghats breeze, every stay is an invitation to slow down and reconnect.",
    statistics: [
      {
        value: "04",
        label: "Private Pool Cottages",
        sublabel: "Individual outdoor plunge pools",
      },
      {
        value: "100%",
        label: "Secluded Privacy",
        sublabel: "Peaceful plantation retreat",
      },
      {
        value: "10+",
        label: "Acres of Greenery",
        sublabel: "Coffee estates & native spices",
      },
      {
        value: "24/7",
        label: "Dedicated Care",
        sublabel: "Warm personalized hospitality",
      },
    ],
    highlights: [
      { title: "Four Intimate Cottages", description: "Exclusively limited to ensure total privacy and quietude." },
      { title: "Private Outdoor Swimming Pools", description: "Each cottage boasts its own secluded plunge pool." },
      { title: "Plantation Surroundings", description: "Immersed in pristine verdant landscapes and fresh mountain air." },
      { title: "Personalised Hospitality", description: "Attentive, home-style Kerala care tailored to your rhythm." },
    ],
    images: {
      main: {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
        alt: "Luxury plantation cottage surrounded by lush tropical greenery",
      },
      supporting: {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
        alt: "Private outdoor pool glistening under tropical sunlight",
      },
    },
  },

  cottages: {
    label: "STAY WITH US",
    heading: "Your Own Private Sanctuary",
    description:
      "Experience the comfort of thoughtfully designed cottages, each featuring its own outdoor private pool for an intimate and relaxing stay.",
    items: [
      {
        id: "cottage-1",
        name: "Cottage One",
        subTitle: "The Plantation Pool Villa",
        description:
          "A serene sanctuary framed by towering tropical trees. Features a generous outdoor private pool, sun deck, and expansive sit-out veranda overlooking spice gardens.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
        poolHighlight: "Private Outdoor Swimming Pool",
        features: ["Private Plunge Pool", "Plantation Sit-Out", "King Size Comfort", "Ensuite Bath", "Garden Views"],
      },
      {
        id: "cottage-2",
        name: "Cottage Two",
        subTitle: "The Garden Pool Villa",
        description:
          "Nestled amid blooming flora and coffee shrubs, this cottage provides complete seclusion, a crystal-clear outdoor pool, and an open-air relaxation deck.",
        image:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
        poolHighlight: "Private Outdoor Swimming Pool",
        features: ["Private Plunge Pool", "Lush Garden Deck", "Nature Acoustics", "Spacious Veranda", "Personal Care"],
      },
      {
        id: "cottage-3",
        name: "Cottage Three",
        subTitle: "The Forest Vista Villa",
        description:
          "Positioned to capture the gentle morning mist and panoramic greenery, featuring an exclusive private pool and warm artisanal wood accents throughout.",
        image:
          "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=85",
        poolHighlight: "Private Outdoor Swimming Pool",
        features: ["Private Plunge Pool", "Canopy Breezes", "Morning Mist Views", "Timber Interiors", "Total Seclusion"],
      },
      {
        id: "cottage-4",
        name: "Cottage Four",
        subTitle: "The Estate Pool Villa",
        description:
          "A tranquil retreat reflecting traditional Kerala craftsmanship, with an intimate open-sky private pool, peaceful courtyard, and dedicated dining lounge.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
        poolHighlight: "Private Outdoor Swimming Pool",
        features: ["Private Plunge Pool", "Heritage Aesthetic", "Private Courtyard", "Outdoor Shower", "Pure Serenity"],
      },
    ] as Cottage[],
  },

  gallery: {
    label: "EXPLORE THE PROPERTY",
    heading: "Moments at Parudeesa",
    subheading: "An intimate look into life at our plantation sanctuary.",
    items: [
      {
        id: 1,
        title: "Private Pool at Dawn",
        category: "Private Pools",
        image:
          "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=85",
        aspect: "wide",
      },
      // {
      //   id: 2,
      //   title: "Plantation Canopy Walk",
      //   category: "Plantation Living",
      //   image:
      //     "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=85",
      //   aspect: "tall",
      // },
      {
        id: 3,
        title: "Intimate Cottage Bedroom",
        category: "Cottage Interiors",
        image:
          "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85",
        aspect: "tall",
      },
      {
        id: 4,
        title: "Veranda Sit-Out & Sun Deck",
        category: "Outdoor Spaces",
        image:
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=85",
        aspect: "wide",
      },
      {
        id: 5,
        title: "Authentic Home-Style Dining",
        category: "Dining Experience",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
        aspect: "square",
      },
      {
        id: 6,
        title: "Lush Wayanad Morning Mist",
        category: "Nature",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
        aspect: "tall",
      },
      {
        id: 7,
        title: "Twilight Pool Reflection",
        category: "Private Pools",
        image:
          "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1400&q=85",
        aspect: "wide",
      },
      {
        id: 8,
        title: "Sunlit Courtyard Retreat",
        category: "Outdoor Spaces",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
        aspect: "square",
      },
    ] as GalleryItem[],
  },

  experiences: {
    label: "THE LITTLE DETAILS",
    heading: "More Than Just a Stay",
    description:
      "Every facet of your stay is curated to cultivate calm, wonder, and unhurried luxury.",
    items: [
      {
        id: "private-pool",
        title: "Private Pool Experience",
        tagline: "Total Seclusion & Calm Waters",
        description: "Enjoy the privacy of your own outdoor pool in a peaceful setting.",
        image:
          "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=85",
        icon: "Waves",
      },
      {
        id: "plantation-living",
        title: "Plantation Living",
        tagline: "Under the Shade of Evergreen Trees",
        description: "Relax amidst lush greenery and the natural beauty of Wayanad.",
        image:
          "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",
        icon: "Trees",
      },
      {
        id: "personalised-hospitality",
        title: "Personalised Hospitality",
        tagline: "Warmth That Feels Like Home",
        description: "Experience warm and attentive hospitality throughout your stay.",
        image:
          "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85",
        icon: "HeartHandshake",
      },
      {
        id: "homemade-dining",
        title: "Homemade Dining",
        tagline: "Fresh Flavours from Kerala Kitchens",
        description: "Enjoy delicious home-style food prepared and served with personal care.",
        image:
          "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=1000&q=85",
        icon: "UtensilsCrossed",
      },
    ] as Experience[],
  },

  testimonials: {
    label: "GUEST VOICES",
    heading: "Moments Remembered",
    description:
      "Words from travellers who found peace, privacy, and stillness at Parudeesa.",
    items: [
      {
        id: "1",
        name: "Dr. Ananya & Arjun Nair",
        city: "Kochi, Kerala",
        villa: "Plantation Pool Villa",
        rating: 5,
        title: "Absolute peace and seclusion",
        review:
          "Parudeesa provided the rarest luxury of all — uninterrupted stillness. Having our own private pool right outside the bedroom, surrounded only by tall trees and the sound of birds, made this the most rejuvenating weekend we've had in years. The home-cooked Kerala breakfast was phenomenal.",
      },
      {
        id: "2",
        name: "Rohit & Meera Varma",
        city: "Bengaluru, Karnataka",
        villa: "Garden Pool Villa",
        rating: 5,
        title: "A true private sanctuary in Wayanad",
        review:
          "Far away from commercial crowded resorts, Parudeesa felt like our personal plantation estate. Total privacy, exceptionally clean plunge pool, and the team's genuine, attentive hospitality made our anniversary unforgettable. We will definitely return.",
      },
      {
        id: "3",
        name: "David & Sarah Jenkins",
        city: "London, UK",
        villa: "Forest Vista Villa",
        rating: 5,
        title: "Magical mist & unmatched hospitality",
        review:
          "Waking up to the morning mist drifting over the plantation canopy while sipping freshly brewed Wayanad coffee by our private pool was magical. The privacy is 100% genuine, and the local culinary care felt like staying with warm family.",
      },
      {
        id: "4",
        name: "Siddharth & Priya Menon",
        city: "Chennai, Tamil Nadu",
        villa: "Estate Pool Villa",
        rating: 5,
        title: "The benchmark for private pool villas",
        review:
          "Every little detail — from the secluded garden sit-out to the temperature-perfect pool and home-cooked meals — was executed with perfection. If you want peace, fresh mountain air, and privacy in Kerala, Parudeesa is unbeatable.",
      },
    ] as Testimonial[],
  },

  location: {
    label: "FIND YOUR WAY",
    heading: "Find Your Way to Paradise",
    address: {
      line1: "Parudeesa Plantation Pool Villa",
      locality: "Vaduvanchal",
      district: "Wayanad",
      state: "Kerala",
      country: "India",
      pincode: "673581",
    },
    description:
      "Vaduvanchal is a serene hamlet set in the high ranges of Wayanad, renowned for gentle mountain breezes, cascading streams, and sprawling tea and spice estates.",
    nearbyAttractions: [
      {
        name: "Phantom Rock",
        description: "Iconic natural skull-shaped metamorphic rock formation with sweeping valley views.",
        highlight: "Natural Wonder",
      },
      {
        name: "Edakkal Caves",
        description: "Ancient petroglyphs and Stone Age pictorial writings perched upon Ambukuthi Mala.",
        highlight: "Heritage Site",
      },
      {
        name: "Karapuzha Dam & Reservoir",
        description: "Expansive fresh water reservoir framed by emerald hill ranges and tranquil waters.",
        highlight: "Scenic Lake",
      },
      {
        name: "Chethalayam Falls & Trails",
        description: "Seasonal cascades tucked within quiet forest trails, ideal for nature lovers.",
        highlight: "Nature Sanctuary",
      },
    ] as NearbyAttraction[],
    guestExperience: {
      quote:
        "Parudeesa was created for those who cherish silence, birdsong, and the simple luxury of an unhurried morning beside a private pool.",
      note: "Experience genuine Malabar hospitality in an intimate setting dedicated to your personal restoration.",
    },
  },

  booking: {
    label: "PLAN YOUR VISIT",
    heading: "Your Private Escape Awaits",
    description:
      "Make time for nature, privacy and relaxation. Plan your stay at Parudeesa Plantation Pool Villa.",
    primaryCta: "Enquire on WhatsApp",
    secondaryCta: "Get Directions",
    bgImage:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=85",
  },

  footer: {
    description:
      "An intimate plantation retreat in Wayanad, offering private pool cottages, peaceful surroundings and memorable stays.",
    columns: {
      quickLinksTitle: "Quick Links",
      contactTitle: "Contact Us",
      bookingTitle: "Plan Your Escape",
      bookingDesc:
        "Looking for a peaceful getaway? Get in touch with us to enquire about your stay.",
      bookingCta: "Enquire Now",
    },
    copyright: "© 2026 Parudeesa Plantation Pool Villa. All Rights Reserved.",
    creditText: "Designed & Developed by",
    creditName: "Zywebs",
    creditUrl: "https://www.zywebs.online/",
  },
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || siteData.brand.whatsapp.defaultMessage;
  return `https://wa.me/${siteData.brand.whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(
    message
  )}`;
};
