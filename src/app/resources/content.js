import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Web1",
  lastName: "LK",
  get name() {
    return `${this.firstName}.${this.lastName}`;
  },
  role: "Web Solutions Provider",
  avatar: "/images/avatar.jpg",
  location: "Asia/Colombo", // Updated to Sri Lanka time zone
  languages: ["English", "Sinhala", "Tamil"], // Updated languages for Sri Lanka
};

const newsletter = {
  display: true,
  title: <>Subscribe to Web1.LK Newsletter</>,
  description: (
    <>
      Stay updated with the latest web development trends, industry insights, and our company news.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/web1lk",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/web1lk/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://twitter.com/web1lk",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:info@web1.lk",
  },
];

const home = {
  label: "Home",
  title: `Web1.LK - Enterprise Web Solutions`,
  description: `Enterprise-grade web solutions for business growth and digital transformation`,
  headline: <>Transforming Businesses with Web Solutions</>,
  subline: (
    <>
      We're Web1.LK, a premier provider of <InlineCode>enterprise-grade</InlineCode> web solutions
      <br /> helping businesses achieve sustainable growth through digital transformation.
    </>
  ),
  cta: {
    label: "Free Consultation",
    link: "/contact",
  },
  services: [
    {
      title: "Web Applications",
      description: "Custom web applications designed for your specific business requirements",
      icon: "code",
      link: "/services/web-applications",
    },
    {
      title: "POS Systems",
      description: "Integrated point-of-sale solutions for retail and hospitality businesses",
      icon: "shoppingCart",
      link: "/services/pos-systems",
    },
    {
      title: "SaaS Solutions",
      description: "Scalable software-as-a-service platforms for recurring revenue",
      icon: "cloud",
      link: "/services/saas-solutions",
    },
    {
      title: "API Integration",
      description: "Connect your systems with third-party services through robust APIs",
      icon: "connection",
      link: "/services/api-integration",
    }
  ],
  caseStudies: [
    {
      title: "E-commerce Transformation",
      client: "RetailPlus",
      description: "Migrated from legacy system to modern web application, resulting in 45% increase in online sales and 30% reduction in operational costs",
      image: "/images/projects/project-01/cover-01.jpg",
      link: "/work/retailplus-ecommerce",
    },
    {
      title: "Hospital Management System",
      client: "MediCare Group",
      description: "Developed custom healthcare management platform that improved patient processing time by 60% and reduced administrative errors by 75%",
      image: "/images/projects/project-01/cover-02.jpg",
      link: "/work/medicare-management-system",
    }
  ],
  clients: [
    {
      name: "TechCorp",
      logo: "/images/clients/techcorp.svg"
    },
    {
      name: "GreenEnergy",
      logo: "/images/clients/greenenergy.svg"
    },
    {
      name: "MediCare",
      logo: "/images/clients/medicare.svg"
    },
    {
      name: "RetailPlus",
      logo: "/images/clients/retailplus.svg"
    },
    {
      name: "FinSolutions",
      logo: "/images/clients/finsolutions.svg"
    },
    {
      name: "EduLearn",
      logo: "/images/clients/edulearn.svg"
    },
    {
      name: "TravelWise",
      logo: "/images/clients/travelwise.svg"
    },
    {
      name: "FoodDelight",
      logo: "/images/clients/fooddelight.svg"
    }
  ],
  testimonials: [
    {
      quote: "Web1.LK transformed our business with their custom POS system. Our checkout times improved by 40% and inventory management has never been easier.",
      author: "Samantha Perera",
      position: "Operations Director",
      company: "RetailPlus",
      image: "/images/avatar.jpg"
    },
    {
      quote: "The team at Web1.LK delivered our SaaS platform ahead of schedule and under budget. Their technical expertise and business understanding made all the difference.",
      author: "Rajan Kumar",
      position: "CTO",
      company: "TechCorp",
      image: "/images/avatar.jpg"
    }
  ]
};

const about = {
  label: "About",
  title: "About us",
  description: `Learn more about Web1.LK and our mission to transform businesses`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/web1lk/consultation",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Web1.LK is a leading web solutions provider based in Sri Lanka, specializing in enterprise-grade applications, POS systems, and SaaS platforms. With our technical expertise and business acumen, we help organizations streamline operations, increase revenue, and deliver exceptional user experiences.
      </>
    ),  },
  // Keep other sections as they are for now
  work: {
    display: true,
    title: "Our History",
    experiences: [
      {
        company: "Web1.LK Founded",
        timeframe: "2018 - Present",
        role: "Enterprise Web Solutions",
        achievements: [
          <>
            Delivered over 50 enterprise web applications to clients across healthcare, retail, finance, and education sectors.
          </>,
          <>
            Developed proprietary POS system framework that reduced implementation time by 60% while maintaining customization options.
          </>,
          <>
            Established SaaS development division that has launched 5 successful subscription-based platforms.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Web1.LK Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Our Partners",
    institutions: [
      {
        name: "Technology Innovation Hub",
        description: <>Strategic technology partner for AI and ML solutions.</>,
      },
      {
        name: "University of Colombo",
        description: <>Academic collaboration for research and talent acquisition.</>,
      },
      {
        name: "Digital Sri Lanka Initiative",
        description: <>Member of the national digital transformation committee.</>,
      }
    ],
  },
  technical: {
    display: true,
    title: "Our Technology Stack",
    skills: [
      {
        title: "Frontend Development",
        description: <>React, Next.js, Vue.js, and Angular with modern UI frameworks.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Frontend Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend Infrastructure",
        description: <>Node.js, Django, Laravel, and .NET with cloud-native architecture.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Backend Infrastructure",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Database Solutions",
        description: <>SQL and NoSQL databases with high-performance optimization.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Database Solutions",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  }
};

const blog = {
  label: "Blog",
  title: "Industry Insights & Updates",
  description: `Expert articles on web development, digital transformation, and business technology`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Portfolio",
  title: "Our Projects",
  description: `Case studies showcasing our successful client implementations`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "Our Office & Team",
  description: `Images from our workspace and company events`,
  // Keep the same gallery images for now
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // ... existing gallery images
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
