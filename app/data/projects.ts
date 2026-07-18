export type ProjectStatus = "Live" | "Delivered" | "Ongoing";


export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyColor {
  hex: string;
  name: string;
  description?: string;
}

/**
 * The 3 extra images used inside a case study page.
 * (The project's top-level `image` doubles as the portfolio card image
 * AND the case study hero image, so it isn't repeated here.)
 */
export interface CaseStudyImages {
  philosophy: string;   // 2nd image — Brand/Project Philosophy section
  colorPalette: string; // 3rd image — Color Palette section
  showcase: string;     // 4th image — the tall/long single-image showcase
}

export interface CaseStudyDetails {
  title: string;
  intro: string;
  details: string;
  philosophy?: string;
  deliverables?: string[];
  features?: string[];
  tech?: string[];
  stats?: CaseStudyStat[];
  colors?: CaseStudyColor[];
  images: CaseStudyImages;
}

export interface Project {
  title: string;
  stack?: string[]; // Made optional to support portfolio-only entries
  status: ProjectStatus;
  slug?: string;    // Added for dynamic routing
  category?: string;
  description?: string;
  bg?: string;
  text?: string;
  size?: "large" | "small";
  tags?: string[];
  /**
   * Main project image — shown on the /portfolio grid card AND reused as
   * the hero image at the top of the case study page. Just drop a URL in.
   */
  image?: string;
  caseStudy?: CaseStudyDetails;
}

/**
 * Project list shown on /work and the grid on /portfolio.
 */
export const projects: Project[] = [
  {
    slug: "amarion",
    title: "Amarion Brand Identity",
    stack: ["Figma", "Illustrator", "Brand Strategy"],
    status: "Delivered",
    category: "Branding · Identity",
    description: "A showcase of digital products and brand experiences we've built for our clients.",
    bg: "bg-[#0D1117]",
    text: "text-[#2CC562]",
    size: "large",
    tags: ["Branding", "Identity", "Delivered"],
    image: "https://res.cloudinary.com/dqyff5fwb/image/upload/ar_16:9,c_auto/b46b9cac565fbbc6d9dcf6713c17904f3e865f7a_bbpvfx.png", 
    caseStudy: {
      title: "Amarion Brand Identity",
      intro: "A showcase of digital products and brand experiences we've built for our clients.",
      details: "Comprehensive brand identity design including logo systems, color palettes, and social media/print mockups.",
      philosophy: "Amarion is a professional and trustworthy stock exchange platform that empowers traders with accurate market data, advanced tools, and real-time insights. Every element of the logo carries a message — stability, growth, and intelligent investing. The brand speaks to both seasoned traders and new investors looking for a reliable platform to grow their wealth.",
      deliverables: [
        "Logo Design", 
        "Typography", 
        "Color System", 
        "Iconography"
      ],
      features: [
        "Trade Smart. Grow Bold.",
        "Seamless. Smart. Profitable.",
        "Responsive layout for physical and digital assets"
      ],
      tech: ["Figma", "Adobe Illustrator", "Photoshop"],
      stats: [
        { value: "3wk", label: "Delivery Time" },
        { value: "5", label: "Concepts Explored" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      colors: [
        { hex: "#2CC562", name: "Primary Green", description: "The hero color. Bright, energetic, and instantly recognizable as 'profit'. Used for the logo, key buttons, highlights, and bullish price indicators." },
        { hex: "#20A34D", name: "Secondary Green", description: "The grounded partner to the primary. Slightly deeper and more confident — used for hover states, gradients, borders, and supporting UI elements. Adds visual depth without losing the green identity." },
        { hex: "#0D1117", name: "Navy Black", description: "The foundation. Every serious trading platform lives on a dark background — it reduces eye strain during long sessions and makes price data and charts easier to read. This is Amarion's primary background color." },
        { hex: "#FFFFFF", name: "Pure White", description: "Clarity and precision. Used for typography, icons, and data labels. Maximum contrast against the dark background ensures nothing is missed by the trader." },
        { hex: "Gradient", name: "Signature Depth", description: "This is Amarion's secret weapon. A subtle shift from near black to a deep forest green — used on hero sections, card backgrounds, sidebars, or onboarding screens. It tells the story of the brand in one sweep: from darkness into growth. No other competitor will have this — it's uniquely Amarion." }
      ],
      images: {
        philosophy: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225973/f168ad43a4b4175401f7587e1d4b2b3f024a215e_umbek5.png",
        colorPalette: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225971/8c1ad3e04b75e4a9ef32a80aa904d683145c9d31_ggt5xn.png",
        showcase: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225984/89e24277f387c629c41621298a876a625684269d_jii2fd.png", 
      },
    },
  },
  {
    slug: "arzen-brand-identity",
    title: "Arzen Brand Identity",
    stack: ["Figma", "Illustrator", "Brand Strategy"],
    status: "Delivered",
    category: "Branding · Identity",
    description: "A showcase of digital products and brand experiences we've built for our clients.",
    bg: "bg-[#000000]",
    text: "text-[#00D04B]",
    size: "large",
    tags: ["Branding", "Identity", "Delivered"],
    image: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225973/b7aaf79dca03bcbbb2d9bc5a984446b8189920f4_slnnin.png", // TODO: paste the portfolio card / hero image URL here
    caseStudy: {
      title: "Arzen Brand Identity",
      intro: "A showcase of digital products and brand experiences we've built for our clients.",
      details: "Comprehensive brand identity design including logo systems, typography, color palettes, and extensive marketing collateral.",
      philosophy: "Arzen was built with a simple idea: to create digital solutions that are not just functional, but meaningful. What started as a software house is driven by a passion for solving real business problems through technology. At Arzen, every product is designed with clarity, performance, and user experience in mind. As the digital landscape evolves, Arzen is expanding beyond development into a full-scale marketing approach, helping brands not only build products but also grow, scale, and connect with the right audience.",
      deliverables: [
        "Logo Design", 
        "Typography", 
        "Color System", 
        "Iconography"
      ],
      features: [
        "Collaboration",
        "Innovation",
        "Delivery",
        "Authenticity"
      ],
      tech: ["Figma", "Adobe Illustrator", "Photoshop"],
      stats: [
        { value: "3wk", label: "Delivery Time" },
        { value: "5", label: "Concepts Explored" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      colors: [
        { hex: "#000000 ", name: "Grayscale / Black", description: "TODO: Extract exact description from high-res Figma. Used for primary typography, deep backgrounds, and structural elements to maintain a professional software-house aesthetic." },
        { hex: "#00D04B ", name: "Primary Green Gradient", description: "TODO: Extract exact description from high-res Figma. Represents growth, technology, and the core Arzen brand identity." },
        { hex: "#FF55B8 ", name: "Vibrant Pink / Magenta", description: "TODO: Extract exact description from high-res Figma. Used as a striking secondary accent to symbolize the expansion into dynamic, full-scale marketing and audience connection." },
        { hex: "#FFFFFF ", name: "Pure White", description: "TODO: Extract exact description from high-res Figma. Ensures high contrast, clarity, and precision across all digital and physical assets." }
      ],
      images: {
        philosophy: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225972/430c98c47f04bae97f7d2a6d3284c0e03284cb04_rabbr3.png",   
        colorPalette: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225972/eaaad8366823b1a22adb15b37b24789baafc2c7a_spymor.png", 
        showcase: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225973/75f36cb06d42830405a5d61c5104760473a150b5_exm8ec.png",     
      },
    },
  },
  {
    slug: "ekaze-brand-identity",
    title: "Ekaze Brand Identity",
    stack: ["Figma", "Illustrator", "Brand Strategy"],
    status: "Delivered",
    category: "Branding · Identity",
    description: "A showcase of digital products and brand experiences we've built for our clients.",
    bg: "bg-[#0B0B0B]",
    text: "text-[#F25C38]",
    size: "large",
    tags: ["Branding", "Identity", "Delivered"],
    image: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225973/ad83b183712a77e11033123929a32a0398b241f5_1_yc9ois.png", // TODO: paste the portfolio card / hero image URL here
    caseStudy: {
      title: "Ekaze Brand Identity",
      intro: "A showcase of digital products and brand experiences we've built for our clients.",
      details: "Ekaze color palette is a deep rooted effort to add to the purpose of the brand which is a strong identity and unshakeable belief.",
      philosophy: "Ekaze is built on a strong premise that across the centuries-old Islamic art and culture there has been a common design soul, the sense of balance, and geometry to represent harmony. Ekaze aims to reflect this globally, beyond borders and languages to represent a more universal, inclusive cultural connection with our global community. For us it is an attempt to revive the lost nuances of our rich culture, its arts, crafts, and architecture, generally cast off as ethnic artifacts in the western world, they have a deep connect with the progressive modern world today. We try to interpret them for today, finding new forms and meaning for the shifting paradigms of our life in global times. The inspiration is primarily our rich overarching culture without regional fractures. It explores common aesthetic values together the heritage of the Pakistan diaspora. For example - art and craft approaches, regional forms and materiality play distinct characteristics in shaping human consciousness and its memory and connection. Through Ekaze we build on a narrative out of our own reality. With it to be unique to us yet global in its meaning. These diverse crafts present an alternate universe of expression that goes beyond our own shores. In finding truth that connects us to our neighbours far and close. They narrate stories through form and visual. Ekaze continues to read as a creative endeavor of exploration in a culture space.",
      deliverables: [
        "Logo Design", 
        "Typography", 
        "Color System", 
        "Iconography"
      ],
      features: [
        "Trustworthy",
        "Innovative",
        "Friendly",
        "Proven",
        "Intelligent"
      ],
      tech: ["Figma", "Adobe Illustrator", "Photoshop"],
      stats: [
        { value: "3wk", label: "Delivery Time" },
        { value: "5", label: "Concepts Explored" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      colors: [
        { 
          hex: "#F25C38", 
          name: "Flame", 
          description: "Represents heat and energy creativity, life, passion and warmth. It ignites a life force that seeks an alternate position the flame that doesn't sleep but discovers." 
        },
        { 
          hex: "#A62C37", 
          name: "Maroon/Lounge", 
          description: "The sophisticated grandness implies a much gentle warm approach. A more thinking calm and conservative feel. A rich color bringing in a subtle reassurance and a balance to ready and eager action with peace of mind and stature." 
        },
        { 
          hex: "#3D5A46", 
          name: "Green", 
          description: "Green represent all things positive as in nature and life globally. It embraces the idea of a fresh start as it represents growth and connects to our senses for renewal and the new thinking." 
        },
        { 
          hex: "#F2E7D5", 
          name: "White", 
          description: "White is peace, neutrality, simplicity and balance. It acts as the key space ready to pureness, vastness, or a page to express a global dream." 
        }
      ],
      images: {
        philosophy: "",   
        colorPalette: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225973/f05b0422bcd7db5365156d90d861c12d29229198_yvqifw.png", 
        showcase: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225974/420e0fde3fafd5d4570f283aefdb0432eac35488_1_th08eh.png",     
      },
    },
  },
  {
    slug: "ekaze-travel-brand-identity",
    title: "Ekaze Travel Brand Identity",
    stack: ["Figma", "Illustrator", "Brand Strategy"],
    status: "Delivered",
    category: "Branding · Identity",
    description: "A showcase of digital products and brand experiences we've built for our clients.",
    bg: "bg-[#002B5B]",
    text: "text-[#FFFFFF]",
    size: "large",
    tags: ["Branding", "Identity", "Delivered"],
    image: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225974/a4b70bd384a58f778293709674fab8b36c5904a4_1_tznnow.png", // TODO: paste the portfolio card / hero image URL here
    caseStudy: {
      title: "Ekaze Brand Identity",
      intro: "A showcase of digital products and brand experiences we've built for our clients.",
      details: "Comprehensive brand identity and UI/UX design for a flight booking and travel companion application.",
      philosophy: "Ekaze was built with a simple idea: to create a digital experience that's not just functional, but meaningful. What started as a flight booking app is driven by a passion for solving real travel problems through technology. At Ekaze, every product is designed with clarity, performance, and user experience in mind. As the digital landscape evolves, Ekaze is expanding beyond reservations into a full-scale travel companion, helping travelers not only book flights but also plan, explore, and connect with the right destinations.",
      deliverables: [
        "Logo Design", 
        "Typography", 
        "Color System", 
        "Iconography"
      ],
      features: [
        "Flight Booking",
        "Digital Boarding Passes",
        "Travel Itinerary Management",
        "User Authentication"
      ],
      tech: ["Figma", "Adobe Illustrator", "Photoshop"],
      stats: [
        { value: "3wk", label: "Delivery Time" },
        { value: "5", label: "Concepts Explored" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      colors: [
        { 
          hex: "#003366", 
          name: "Deep Aviation Blue", 
          description: "The hero color. Represents trust, security, and the expansive sky. Used for the primary logo, app backgrounds, and critical UI elements to instill confidence in travelers." 
        },
        { 
          hex: "#7BA4C6", 
          name: "Sky Blue", 
          description: "The secondary accent. A lighter, welcoming shade used for gradients, secondary backgrounds, and UI highlights to create a sense of approachability and ease." 
        },
        { 
          hex: "#FFFFFF", 
          name: "Cloud White", 
          description: "Clarity and precision. Used for typography, boarding pass details, and data labels to ensure maximum legibility and contrast." 
        }
      ],
      images: {
        philosophy: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225974/71becd36b630365627b8ca267895f9eeb2165366_nq9uwk.png",   
        colorPalette: "", 
        showcase: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225974/e7ef98841b4251bc2c13ae1aa6ca38b4aae465c3_pmgplm.png",     
      },
    },
  },
  {
    slug: "seven-coffee-house",
    title: "Seven Coffee House",
    stack: ["Figma", "Illustrator", "Brand Strategy"],
    status: "Delivered",
    category: "Branding · Identity",
    description: "A showcase of digital products and brand experiences we've built for our clients.",
    bg: "bg-[#000000]",
    text: "text-[#FFFFFF]",
    size: "large",
    tags: ["Branding", "Identity", "Delivered"],
    image: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225972/b374f25db7333f959b4c010e35b4de758f017c59_1_ljcv19.png", // TODO: paste the portfolio card / hero image URL here
    caseStudy: {
      title: "Seven Coffee House Brand Identity",
      intro: "A showcase of digital products and brand experiences we've built for our clients.",
      details: "A bold, illustration-driven brand identity for a coffee shop, featuring custom mascot design, dynamic wavy patterns, and extensive merchandise applications.",
      philosophy: "More than coffee, it's your daily inspiration. Seven Coffee House embraces a bold, playful, and highly graphic visual identity. Anchored by a bespoke mascot and energetic wavy patterns, the brand strips away complex colors to rely on a stark, confident black-and-white palette. It is designed to stand out on the street, on merchandise, and in the hands of the community as their 'daily cup of joy'.",
      deliverables: [
        "Logo Design", 
        "Typography", 
        "Color System", 
        "Iconography"
      ],
      features: [
        "Custom Mascot Illustration",
        "Apparel & Merchandise Design",
        "Dynamic Pattern Generation",
        "Packaging & Cup Design"
      ],
      tech: ["Figma", "Adobe Illustrator", "Photoshop"],
      stats: [
        { value: "3wk", label: "Delivery Time" },
        { value: "5", label: "Concepts Explored" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      colors: [
        { 
          hex: "#000000", 
          name: "Pitch Black", 
          description: "The core anchor of the brand. Used for the bold typography, intricate wavy patterns, and the signature mascot illustration to create maximum contrast and a striking, street-style aesthetic." 
        },
        { 
          hex: "#FFFFFF", 
          name: "Paper White", 
          description: "The expansive canvas. Provides the essential negative space necessary for the dense, playful black graphics to breathe and stand out clearly on cups, aprons, and digital screens." 
        }
      ],
      images: {
        philosophy: "",   
        colorPalette: "", 
        showcase: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225980/633d7e7be2c0377f0d391841238ed38d8af783f5_xufapy.png",     
      },
    },
  },
  {
    slug: "tote-spot",
    title: "TOTE SPOT Brand Identity",
    stack: ["Figma", "Illustrator", "Brand Strategy"],
    status: "Delivered",
    category: "Branding · Identity",
    description: "A showcase of digital products and brand experiences we've built for our clients.",
    bg: "bg-[#F5F5F5]", 
    text: "text-[#000000]", 
    size: "large",
    tags: ["Branding", "Identity", "Delivered"],
    image: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225975/3b41f378695f31402ff90bdbfba95e2547346499_1_zmauya.png", // TODO: paste the portfolio card / hero image URL here
    caseStudy: {
      title: "TOTE SPOT Brand Identity",
      intro: "A showcase of digital products and brand experiences we've built for our clients.",
      details: "Brand identity focusing on eco-friendly, stylish, and responsible fashion.",
      philosophy: "ECO-CONSCIOUS & CREATIVE. Tote Spot is an eco-conscious brand that specializes in high-quality tote bags. Our mission is to promote sustainability and reduce single-use plastic consumption. We believe that fashion can be both stylish and responsible. By choosing Tote Spot, you are making a positive impact on the environment.",
      deliverables: [
        "Logo Design", 
        "Typography", 
        "Color System", 
        "Iconography"
      ],
      features: [
        "Eco-conscious and creative designs",
        "Sustainable tote bags",
        "Stylish and responsible fashion"
      ],
      tech: ["Figma", "Adobe Illustrator"],
      stats: [
        { value: "3wk", label: "Delivery Time" },
        { value: "5", label: "Concepts Explored" },
        { value: "100%", label: "Client Satisfaction" }
      ],
      colors: [
        { hex: "#000000", name: "Black", description: "Primary high-contrast tone used for typography and minimalist logo marks." },
        { hex: "#F5F5F5", name: "Off-White / Canvas", description: "The natural canvas color reflecting the eco-friendly and organic nature of the tote bags." }
      ],
      images: {
        philosophy: "",   
        colorPalette: "", 
        showcase: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225980/6275a26c7fabb64dcc074b067e033cc385a11778_n9xic8.png",     
      }
    }
  },
  {
    slug: "drift-cafe",
    title: "DRIFT CAFE Brand Identity",
    stack: ["Figma", "Illustrator", "Brand Strategy"],
    status: "Delivered",
    category: "Branding · Identity",
    description: "A showcase of digital products and brand experiences we've built for our clients.",
    bg: "bg-[#111111]", 
    text: "text-[#FFFFFF]", 
    size: "large",
    tags: ["Branding", "Identity", "Delivered"],
    image: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225971/051d5f5a78cf7b429df197872ac5ace87592349c_1_jnr2h8.png", // TODO: paste the portfolio card / hero image URL here
    caseStudy: {
      title: "DRIFT CAFE Brand Identity",
      intro: "A showcase of digital products and brand experiences we've built for our clients.",
      details: "A unique podcast and coffee brand identity combining the love of coffee with the art of storytelling.",
      philosophy: "BRAND PHILOSOPHY. Drift is a podcast by Drift Cafe. Drift Cafe is a unique brand that combines the love of coffee with the art of storytelling. We bring together a community of individuals who appreciate the finer things in life. Our podcast, 'Drift', explores the stories behind the coffee, the people who make it, and the culture that surrounds it. We invite you to join us on this journey of discovery and connection, one cup of coffee and one story at a time.",
      deliverables: [
        "Logo Design", 
        "Typography", 
        "Color System", 
        "Iconography"
      ],
      features: [
        "don't trust people who don't drift",
        "drift harder than my gps",
        "lost? just drift inside"
      ],
      tech: ["Figma", "Adobe Illustrator", "Photoshop"],
      stats: [
        { value: "3wk", label: "Delivery Time" },
        { value: "5", label: "Concepts Explored" },
        { value: "100%", label: "Client Satisfaction" }
      ],
      colors: [
        { hex: "#111111", name: "Deep Charcoal", description: "Used for moody, atmospheric backgrounds fitting a storytelling podcast." },
        { hex: "#FFFFFF", name: "Crisp White", description: "Ensures strong legibility and contrast for the brand's bold statements and line-art illustrations." }
      ],
      images: {
        philosophy: "",   
        colorPalette: "", 
        showcase: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225978/0b7dfb0f070f44588a007d70a1ce703204ee9c9b_hes3kf.png",     
      }
    }
  },
  {
    slug: "chkn",
    title: "CHKN Brand Identity",
    stack: ["Figma", "Illustrator", "Brand Strategy"],
    status: "Delivered",
    category: "Branding · Identity",
    description: "A showcase of digital products and brand experiences we've built for our clients.",
    bg: "bg-[#CC2128]",
    text: "text-[#FFFFFF]",
    size: "large",
    tags: ["Branding", "Identity", "Delivered"],
    image: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784227691/a93fc7828685fde93907bbbbd2d6309b66b44f0c_1_examwr.png", // TODO: paste the portfolio card / hero image URL here
    caseStudy: {
      title: "CHKN Brand Identity",
      intro: "A showcase of digital products and brand experiences we've built for our clients.",
      details: "A bold, fast-food brand identity utilizing high-contrast reds and playful typography to drive appetite and attention.",
      philosophy: "CHKN focuses on delivering delicious and cheesy fast-food experiences. The visual identity uses loud, confident typography and vibrant colors to communicate flavor, energy, and craveability.",
      deliverables: [
        "Logo Design", 
        "Typography", 
        "Color System", 
        "Iconography"
      ],
      features: [
        "WHY CHOOSE ONE? GET BOTH",
        "GRAB THE COMBO",
        "JUICY GOODNESS IN EVERY BITE",
        "DELICIOUS AND CHEESY"
      ],
      tech: ["Figma", "Adobe Illustrator"],
      stats: [
        { value: "3wk", label: "Delivery Time" },
        { value: "5", label: "Concepts Explored" },
        { value: "100%", label: "Client Satisfaction" }
      ],
      colors: [
        { hex: "#CC2128", name: "Primary Red", description: "COLORS. The main brand color, stimulating appetite and drawing immediate attention to advertising and packaging." },
        { hex: "#CE1226", name: "Deep Red", description: "COLORS. A supporting red shade used for depth and gradients in digital and print displays." },
        { hex: "#000000", name: "Black", description: "COLORS. Used for stark contrast in bold headings and secondary layout backgrounds." },
        { hex: "#FFFFFF", name: "White", description: "COLORS. Provides negative space and ensures the 'FONT LILITA ONE' typography pops." }
      ],
      images: {
        philosophy: "",   
        colorPalette: "", 
        showcase: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784227690/5dce1072c94b360576f803e994c7a2b5e988d5c0_ykrotx.png",     
      }
    }
  },
  {
    slug: "big-bite-marketing",
    title: "Big Bite Marketing",
    stack: ["Figma", "Illustrator", "Brand Strategy"],
    status: "Delivered",
    category: "Branding · Identity",
    description: "A showcase of digital products and brand experiences we've built for our clients.",
    bg: "bg-[#E31E24]",
    text: "text-[#FFC20E]",
    size: "large",
    tags: ["Branding", "Identity", "Delivered"],
    image: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225972/2eb7d30d69b65d182356c4dcef7c8e5927662b78_1_dwbyv9.png", // TODO: paste the portfolio card / hero image URL here
    caseStudy: {
      title: "Big Bite Marketing Brand Identity",
      intro: "A showcase of digital products and brand experiences we've built for our clients.",
      details: "A high-energy fast-food marketing identity built on a classic ketchup-and-mustard color scheme to maximize visibility and hunger appeal.",
      philosophy: "Big Bite is a fast-food restaurant chain that specializes in bold flavors. Mission: To provide delicious and high-quality food. Vision: To be the leading fast-food chain. Values: Quality, Customer Service, Innovation.",
      deliverables: [
        "Logo Design", 
        "Typography", 
        "Color System", 
        "Iconography"
      ],
      features: [
        "Fast-food restaurant chain branding",
        "Billboard and poster marketing campaigns",
        "TYPOGRAPHY POPPINS implementation"
      ],
      tech: ["Figma", "Adobe Illustrator", "Photoshop"],
      stats: [
        { value: "3wk", label: "Delivery Time" },
        { value: "5", label: "Concepts Explored" },
        { value: "100%", label: "Client Satisfaction" }
      ],
      colors: [
        { hex: "#E31E24", name: "Fast Food Red", description: "COLORS. A high-energy primary red used across billboards, aprons, and packaging to stimulate hunger and urgency." },
        { hex: "#FFC20E", name: "Mustard Yellow", description: "COLORS. The classic fast-food pairing color, used for the main logo typography and bright, optimistic accents." }
      ],
      images: {
        philosophy: "",   
        colorPalette: "", 
        showcase: "https://res.cloudinary.com/dqyff5fwb/image/upload/v1784225981/cbeaf0929cd71ad326391561dc6e8bb68b82fabc_cdgcwm.png",     
      }
    }
  },
];