
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppDataContext = createContext(null);

const ENQUIRIES_KEY = "eventara_enquiries_v3";
const VENDORS_KEY = "eventara_vendors_v3";

export const EVENT_TYPES = [
  {
    id: "marriage",
    name: "Marriage",
    icon: "💍",
    image: "/hero/hero_2.jpg",
    description:
      "Muhurtham, reception, catering and complete wedding coordination.",
  },
  {
    id: "engagement",
    name: "Engagement",
    icon: "💐",
    image: "/hero/hero_3.jpg",
    description:
      "Elegant ring ceremony, stage decor, photography and hospitality.",
  },
  {
    id: "birthday",
    name: "Birthday",
    icon: "🎂",
    image: "/hero/hero_4.jpg",
    description:
      "Kids and adult birthdays with theme decor, cake and entertainment.",
  },
  {
    id: "baby-shower",
    name: "Baby Shower",
    icon: "🍼",
    image: "/hero/hero_5.jpg",
    description:
      "Seemantham, valaikaappu, floral decor, food and photography.",
  },
  {
    id: "housewarming",
    name: "Housewarming",
    icon: "🏠",
    image: "/hero/hero_6.jpg",
    description:
      "Grahapravesam support, puja setup, catering and guest arrangements.",
  },
  {
    id: "corporate",
    name: "Corporate Event",
    icon: "🏢",
    image: "/hero/hero_7.jpg",
    description:
      "Meetings, launches, conferences, stage setup and guest management.",
  },
  {
    id: "anniversary",
    name: "Anniversary",
    icon: "❤️",
    image: "/hero/hero_8.jpg",
    description:
      "Private celebrations, dinner setup, decor and memorable photography.",
  },
  {
    id: "other",
    name: "Other Function",
    icon: "✨",
    image: "/images/corporate.jpg",
    description:
      "Tell us what you need and our team will help build the plan.",
  },
];

const VENDOR_CATALOG = [
  {
    id: "venue-001",
    serviceId: "venue",
    name: "Royal Mandapam & Convention Hall",
    category: "Venue",
    price: 45000,
    unit: "starting",
    location: "Coimbatore",
    capacity: "100–800 guests",
    rating: 4.8,
    image: "/images/hero_mandapam.jpg",
    description:
      "Spacious mandapam with dining hall, parking and traditional wedding setup support.",
    contact: "+91 90000 10001",
  },
  {
    id: "venue-002",
    serviceId: "venue",
    name: "Grand Lotus Celebration Hall",
    category: "Venue",
    price: 35000,
    unit: "starting",
    location: "Chennai",
    capacity: "80–500 guests",
    rating: 4.7,
    image: "/images/jothi.jpg",
    description:
      "Modern celebration hall suitable for weddings, receptions and family functions.",
    contact: "+91 90000 10002",
  },
  {
    id: "venue-003",
    serviceId: "venue",
    name: "Sri Heritage Mahal",
    category: "Venue",
    price: 55000,
    unit: "starting",
    location: "Madurai",
    capacity: "150–1000 guests",
    rating: 4.9,
    image: "/images/hero_mandapam.jpg",
    description:
      "Large traditional-style venue for grand Tamil functions and receptions.",
    contact: "+91 90000 10003",
  },
  {
    id: "catering-001",
    serviceId: "catering",
    name: "Annapoorna Feast Caterers",
    category: "Catering",
    price: 650,
    unit: "per guest",
    location: "Coimbatore",
    capacity: "50–2000 guests",
    rating: 4.9,
    image: "/images/banana_leaf_feast.jpg",
    description:
      "South Indian vegetarian menus, buffet service and banana-leaf feast options.",
    contact: "+91 90000 20001",
  },
  {
    id: "catering-002",
    serviceId: "catering",
    name: "Suvai Grand Catering",
    category: "Catering",
    price: 850,
    unit: "per guest",
    location: "Chennai",
    capacity: "100–3000 guests",
    rating: 4.8,
    image: "/images/banana_leaf_feast.jpg",
    description:
      "Traditional and contemporary menus with live counters and service staff.",
    contact: "+91 90000 20002",
  },
  {
    id: "catering-003",
    serviceId: "catering",
    name: "Aahaaram Events Kitchen",
    category: "Catering",
    price: 550,
    unit: "per guest",
    location: "Tiruppur",
    capacity: "50–1200 guests",
    rating: 4.6,
    image: "/images/banana_leaf_feast.jpg",
    description:
      "Budget-friendly function catering with customizable menu packages.",
    contact: "+91 90000 20003",
  },
  {
    id: "decor-001",
    serviceId: "decor",
    name: "BloomCraft Decorations",
    category: "Decoration",
    price: 35000,
    unit: "package",
    location: "Coimbatore",
    capacity: "All function sizes",
    rating: 4.8,
    image: "/images/chennai_reception_stage.jpg",
    description:
      "Floral stage, entrance decor, lighting and theme styling for functions.",
    contact: "+91 90000 30001",
  },
  {
    id: "decor-002",
    serviceId: "decor",
    name: "Golden Petals Event Decor",
    category: "Decoration",
    price: 48000,
    unit: "package",
    location: "Chennai",
    capacity: "All function sizes",
    rating: 4.9,
    image: "/images/chennai_reception_stage.jpg",
    description:
      "Premium wedding stages, floral concepts, ceiling decor and ambience lighting.",
    contact: "+91 90000 30002",
  },
  {
    id: "decor-003",
    serviceId: "decor",
    name: "ColorNest Celebration Decor",
    category: "Decoration",
    price: 22000,
    unit: "package",
    location: "Salem",
    capacity: "Small & medium events",
    rating: 4.6,
    image: "/images/hero_mandapam.jpg",
    description:
      "Affordable balloon, floral and themed decoration packages.",
    contact: "+91 90000 30003",
  },
  {
    id: "photo-001",
    serviceId: "photo",
    name: "FrameStory Studios",
    category: "Photography",
    price: 30000,
    unit: "package",
    location: "Coimbatore",
    capacity: "1–3 day coverage",
    rating: 4.9,
    image: "/images/chennai_reception_stage.jpg",
    description:
      "Candid photography, traditional coverage, reels and highlight video.",
    contact: "+91 90000 40001",
  },
  {
    id: "photo-002",
    serviceId: "photo",
    name: "Moments & More Media",
    category: "Photography",
    price: 42000,
    unit: "package",
    location: "Chennai",
    capacity: "1–3 day coverage",
    rating: 4.8,
    image: "/images/chennai_reception_stage.jpg",
    description:
      "Wedding photo, cinematic video, drone coverage and same-day highlights.",
    contact: "+91 90000 40002",
  },
  {
    id: "photo-003",
    serviceId: "photo",
    name: "PixelVibe Events",
    category: "Photography",
    price: 24000,
    unit: "package",
    location: "Madurai",
    capacity: "Single-day coverage",
    rating: 4.6,
    image: "/images/hero.jpg",
    description:
      "Professional event photography and social-media-ready short videos.",
    contact: "+91 90000 40003",
  },
  {
    id: "music-001",
    serviceId: "music",
    name: "Isai Vibes Entertainment",
    category: "Entertainment",
    price: 18000,
    unit: "package",
    location: "Coimbatore",
    capacity: "Up to 6 hours",
    rating: 4.7,
    image: "/images/nadaswaram_vidwans.jpg",
    description:
      "Nadaswaram, thavil, DJ and live entertainment packages.",
    contact: "+91 90000 50001",
  },
  {
    id: "music-002",
    serviceId: "music",
    name: "Rhythm Spark Events",
    category: "Entertainment",
    price: 25000,
    unit: "package",
    location: "Chennai",
    capacity: "Up to 8 hours",
    rating: 4.8,
    image: "/images/nadaswaram_vidwans.jpg",
    description:
      "DJ, sound, stage lighting, emcee and live performance coordination.",
    contact: "+91 90000 50002",
  },
  {
    id: "music-003",
    serviceId: "music",
    name: "Traditional Isai Team",
    category: "Entertainment",
    price: 14000,
    unit: "package",
    location: "Madurai",
    capacity: "Up to 5 hours",
    rating: 4.7,
    image: "/images/nadaswaram_vidwans.jpg",
    description:
      "Traditional instrumental team for muhurtham and family functions.",
    contact: "+91 90000 50003",
  },
  {
    id: "makeup-001",
    serviceId: "makeup",
    name: "GlowBride Studio",
    category: "Makeup & Styling",
    price: 12000,
    unit: "package",
    location: "Coimbatore",
    capacity: "Bride + groom",
    rating: 4.8,
    image: "/images/hero_mandapam.jpg",
    description:
      "Bridal makeup, groom styling, saree draping and family makeup.",
    contact: "+91 90000 60001",
  },
  {
    id: "makeup-002",
    serviceId: "makeup",
    name: "Radiant Looks",
    category: "Makeup & Styling",
    price: 18000,
    unit: "package",
    location: "Chennai",
    capacity: "Bride + family",
    rating: 4.9,
    image: "/images/hero_mandapam.jpg",
    description:
      "HD bridal makeup, hairstyling, draping and event-ready family packages.",
    contact: "+91 90000 60002",
  },
  {
    id: "makeup-003",
    serviceId: "makeup",
    name: "Blush & Bloom Artists",
    category: "Makeup & Styling",
    price: 9000,
    unit: "package",
    location: "Salem",
    capacity: "2–5 people",
    rating: 4.6,
    image: "/images/hero_mandapam.jpg",
    description:
      "Affordable party, bridal and family styling packages.",
    contact: "+91 90000 60003",
  },
  {
    id: "invite-001",
    serviceId: "invitation",
    name: "InviteCraft Studio",
    category: "Invitations",
    price: 5000,
    unit: "package",
    location: "Online / Tamil Nadu",
    capacity: "Digital + print",
    rating: 4.7,
    image: "/images/hero.jpg",
    description:
      "Digital invitations, printed cards, QR invites and RSVP coordination.",
    contact: "+91 90000 70001",
  },
  {
    id: "invite-002",
    serviceId: "invitation",
    name: "PaperPetal Invitations",
    category: "Invitations",
    price: 8500,
    unit: "package",
    location: "Chennai",
    capacity: "Digital + print",
    rating: 4.8,
    image: "/images/hero.jpg",
    description:
      "Premium invitation cards with traditional and modern designs.",
    contact: "+91 90000 70002",
  },
  {
    id: "invite-003",
    serviceId: "invitation",
    name: "EasyInvite Digital",
    category: "Invitations",
    price: 2500,
    unit: "package",
    location: "Online / Tamil Nadu",
    capacity: "Digital",
    rating: 4.6,
    image: "/images/hero.jpg",
    description:
      "Quick WhatsApp-friendly digital invitation packages.",
    contact: "+91 90000 70003",
  },
  {
    id: "gifts-001",
    serviceId: "gifts",
    name: "SweetBox Return Gifts",
    category: "Return Gifts",
    price: 8000,
    unit: "package",
    location: "Coimbatore",
    capacity: "50–1000 guests",
    rating: 4.7,
    image: "/images/banana_leaf_feast.jpg",
    description:
      "Return gifts, sweets, welcome kits and custom guest hampers.",
    contact: "+91 90000 80001",
  },
  {
    id: "gifts-002",
    serviceId: "gifts",
    name: "Heritage Gift House",
    category: "Return Gifts",
    price: 12000,
    unit: "package",
    location: "Madurai",
    capacity: "50–1500 guests",
    rating: 4.8,
    image: "/images/banana_leaf_feast.jpg",
    description:
      "Traditional gifts, brass items, eco-friendly hampers and custom packs.",
    contact: "+91 90000 80002",
  },
  {
    id: "gifts-003",
    serviceId: "gifts",
    name: "Little Joy Hampers",
    category: "Return Gifts",
    price: 6500,
    unit: "package",
    location: "Chennai",
    capacity: "25–500 guests",
    rating: 4.6,
    image: "/images/banana_leaf_feast.jpg",
    description:
      "Birthday, baby shower and family-function return gift options.",
    contact: "+91 90000 80003",
  },
];

const read = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export const AppDataProvider = ({ children }) => {
  const [enquiries, setEnquiries] = useState(() =>
    read(ENQUIRIES_KEY, [])
  );

  const [vendors, setVendors] = useState(() =>
    read(VENDORS_KEY, null) || VENDOR_CATALOG
  );

  useEffect(() => {
    localStorage.setItem(
      ENQUIRIES_KEY,
      JSON.stringify(enquiries)
    );
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem(
      VENDORS_KEY,
      JSON.stringify(vendors)
    );
  }, [vendors]);

  useEffect(() => {
    const sync = () => {
      setEnquiries(read(ENQUIRIES_KEY, []));
      setVendors(read(VENDORS_KEY, VENDOR_CATALOG));
    };

    window.addEventListener("storage", sync);
    window.addEventListener("eventara-data-updated", sync);

    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("eventara-data-updated", sync);
    };
  }, []);

  const addEnquiry = (payload) => {
    const enquiry = {
      ...payload,
      id: `ENQ-${Date.now().toString().slice(-7)}`,
      status: "New",
      createdAt: new Date().toISOString(),
    };

    setEnquiries((prev) => [enquiry, ...prev]);

    return enquiry;
  };

  const updateEnquiryStatus = (id, status) => {
    setEnquiries((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status,
              updatedAt: new Date().toISOString(),
            }
          : item
      )
    );
  };

  const addVendor = (payload) => {
    const vendor = {
      ...payload,
      id: `vendor-${Date.now()}`,
      rating: Number(payload.rating || 0),
      price: Number(payload.price || 0),
      active: true,
    };

    setVendors((prev) => [vendor, ...prev]);

    return vendor;
  };

  const updateVendor = (id, payload) => {
    setVendors((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              ...payload,
              price: Number(
                payload.price || item.price || 0
              ),
              rating: Number(
                payload.rating || item.rating || 0
              ),
            }
          : item
      )
    );
  };

  const deleteVendor = (id) => {
    setVendors((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const value = useMemo(
    () => ({
      enquiries,
      vendors,
      eventTypes: EVENT_TYPES,
      addEnquiry,
      updateEnquiryStatus,
      addVendor,
      updateVendor,
      deleteVendor,
    }),
    [enquiries, vendors]
  );

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error(
      "useAppData must be used inside AppDataProvider"
    );
  }

  return context;
};

