export interface Project {
  id: string
  title: string
  summary: string
  description?: string
  tags: string[]
  highlights: string[]
  links?: {
    demo?: string
    repo?: string
  }
  images?: string[]
  metrics?: {
    label: string
    value: string | number
  }[]
  featured?: boolean
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  startDate: string
  endDate: string
  location: string
  description: string
  highlights: string[]
  technologies: string[]
  logo?: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role?: string
  company?: string
  image?: string
}

export interface Metric {
  label: string
  value: string | number
  icon?: string
}

export interface SiteData {
  name: string
  role: string
  tagline: string
  bio: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  resumeUrl: string
  skills: string[]
  topSkills: string[]
  metrics: Metric[]
  projects: Project[]
  experience: Experience[]
  testimonials: Testimonial[]
  education?: {
    degree: string
    institution: string
    year: string
  }[]
}

const siteData: SiteData = {
  name: "Jaswanth",
  role: "Front-End Specialist (React Js/Ts) with Java Backend Exposure",
  tagline: "Front-end focused engineer building responsive, performant UIs with React, TypeScript, and modern tooling; comfortable reading and contributing to Java/Spring Boot code for API integration.",
  bio: "Results-driven Front-End Engineer with 3+ years of experience in developing scalable web applications using React, TypeScript, and modern JavaScript frameworks. Proven expertise in building complex enterprise solutions for logistics and supply chain management with Java/Spring Boot backend exposure. Specialized in creating high-performance, accessible user interfaces while collaborating closely with backend teams to define and implement API contracts.",
  email: "Jaswanth9841@gmail.com",
  phone: "+91 9551344553",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/jaswanthneppolian",
  github: "https://github.com/Jaswanth9841",
  resumeUrl: "/jaswanth_resume.pdf",
  
  topSkills: ["React", "JavaScript", "TypeScript", "Redux", "HTML5", "CSS3", "Core Java", "Spring Boot"],
  
  skills: [
    "React",
    "JavaScript (ES6+)",
    "TypeScript",
    "Redux",
    "React Hooks",
    "HTML5",
    "CSS3",
    "Core Java",
    "Spring Boot",
    "RESTful APIs",
    "Jest",
    "React Testing Library",
    "Git",
    "GitHub",
    "Azure DevOps",
    "VS Code",
    "Postman",
  ],
  
  metrics: [
    { label: "Enterprise Projects", value: "3", icon: "🚀" },
    { label: "Personal Projects", value: "2", icon: "💡" },
    { label: "Performance Improvement", value: "40%", icon: "⚡" },
    { label: "Rising Star Award", value: "2023", icon: "⭐" },
  ],
  
  projects: [
    {
      id: "sonata",
      title: "SONATA - Stowage Plan Automation System",
      summary: "Container stowage planning system with automated optimization, safety checks, and multi-port voyage support.",
      description: "SONATA is an advanced stowage plan automation system for container vessels that creates efficient, safe, and reliable stowage plans while ensuring stress and lashing force stability conditions remain within acceptable limits for both single-port and multi-port voyages. The application provides multiple cargo views for visibility and flexible planning/un-planning of cargo, with full automation of segregation and close packing of dangerous goods (DGs), allowing shipping companies to book more DG cargo and increase revenue. SONATA eliminates container over-stows, excessive vessel stresses, and lashing errors through its intelligent optimization algorithms and interactive 2D/3D visualization interfaces.",
      tags: ["React", "TypeScript", "Redux", "REST API", "D3.js", "Azure DevOps", "WebGL"],
      highlights: [
        "Developed interactive 2D ship views with D3.js and 3D container visualization using WebGL",
        "Implemented stress and lashing force calculation modules ensuring vessel stability within safety limits",
        "Built dangerous goods (DG) segregation system automating complex regulatory compliance checks",
        "Created multi-port voyage planning tools with automated detection and prevention of over-stows",
        "Integrated specialized cargo optimization algorithms reducing planning time by 70%",
        "Designed planners' dashboard with multiple cargo views for enhanced decision making",
        "Implemented vessel stability checks ensuring safety compliance with maritime regulations",
      ],
      links: {},
      metrics: [
        { label: "Planning Time Reduced", value: "70%" },
        { label: "DG Cargo Capacity", value: "+35%" },
        { label: "Vessel Utilization", value: "98%" },
      ],
      featured: true,
    },
    {
      id: "bcap",
      title: "BCAP - Bulk Carrier Auto Planning",
      summary: "Automated planning system for bulk carriers with cargo optimization, vessel scheduling, and berth management.",
      description: "BCAP is a specialized bulk carrier auto planning tool that streamlines the complex process of cargo allocation and scheduling for bulk vessels. The system features interactive 2D and 3D ship view representations of cargo holds, allowing planners to visualize cargo distribution, density, and weight dynamics. BCAP's intelligent optimizer generates optimal cargo placement strategies accounting for vessel trim, stability, and stress factors while maximizing cargo capacity utilization. The application handles complex constraints including cargo compatibility, hold cleaning requirements, and port rotation considerations while providing real-time updates across multiple users in a collaborative planning environment.",
      tags: ["React", "Redux", "JavaScript", "REST API", "Material-UI", "Azure DevOps", "HTML Canvas", "WebGL"],
      highlights: [
        "Developed 2D visualization using HTML Canvas and 3D visualization with WebGL for bulk cargo distribution",
        "Implemented bulk cargo optimizer integrating multiple physical constraints (trim, stability, stress)",
        "Created comprehensive hold management system tracking cargo types, cleaning status, and compatibility",
        "Engineered vessel rotation planner optimizing port calls and cargo operations sequence",
        "Built real-time collaboration system allowing multiple planners to work simultaneously",
        "Designed interactive hold capacity calculator with cargo density and distribution visualizations",
        "Integrated vessel draft monitoring system ensuring port compatibility throughout voyage",
      ],
      links: {},
      metrics: [
        { label: "Voyage Planning", value: "45% faster" },
        { label: "Hold Utilization", value: "+22%" },
        { label: "Cargo Combinations", value: "1000+" },
      ],
      featured: true,
    },
    {
      id: "g2o",
      title: "G2O - Global Cargo Optimization",
      summary: "Bulk carrier fleet management platform with predictive analytics and voyage optimization.",
      description: "G2O (Global Cargo Optimization) is a comprehensive bulk carrier fleet management and optimization platform that provides real-time visibility into vessel operations, cargo assignments, and performance metrics. The application features interactive 2D and 3D visualizations of bulk vessels and their cargo, coupled with sophisticated optimization algorithms that enhance fleet utilization and voyage planning. G2O integrates weather routing, bunker consumption modeling, and port congestion predictions to determine optimal schedules and cargo distributions. The system's predictive analytics help shipping companies maximize revenue while minimizing operational costs through intelligent cargo matching and fleet deployment strategies.",
      tags: ["React", "JavaScript", "Chart.js", "Context API", "REST API", "HTML Canvas", "WebGL"],
      highlights: [
        "Developed fleet overview dashboard with HTML Canvas for 2D views and WebGL for 3D vessel models",
        "Created voyage optimization module integrating weather data, fuel consumption, and port schedules",
        "Built cargo matching system maximizing fleet utilization across multiple vessels and trade routes",
        "Implemented bunker consumption analyzer with predictive modeling for voyage planning",
        "Designed interactive trade route visualizer with real-time fleet positioning and status updates",
        "Integrated port congestion forecasting with machine learning algorithms for schedule optimization",
        "Developed vessel performance benchmarking system comparing actual versus predicted metrics",
      ],
      links: {},
      metrics: [
        { label: "Fuel Savings", value: "12%" },
        { label: "Fleet Utilization", value: "+18%" },
        { label: "Voyage Optimization", value: "3200+" },
      ],
      featured: true,
    },
    {
      id: "workflow-builder",
      title: "Mini Workflow Builder",
      summary: "Full-stack workflow pipeline builder with DAG validation and visual canvas interface.",
      description: "Mini Workflow Builder is a full-stack application that enables users to create, connect, and validate workflow pipelines. Built with React and FastAPI, it provides a powerful canvas where you can design complex data workflows by connecting various node types and validate whether your pipeline forms a valid Directed Acyclic Graph (DAG). Features include drag-and-drop node placement, real-time connection validation, pipeline execution simulation, and export/import functionality for workflow configurations.",
      tags: ["React", "FastAPI", "Python", "TypeScript", "Canvas API", "REST API"],
      highlights: [
        "Built interactive workflow canvas with drag-and-drop node creation and connection",
        "Implemented DAG validation algorithm to ensure workflow integrity",
        "Developed FastAPI backend for workflow processing and validation",
        "Created real-time visual feedback for connection validity",
        "Designed modular node system supporting multiple workflow types",
        "Implemented workflow export/import functionality with JSON format",
        "Added pipeline execution simulation with step-by-step visualization",
      ],
      links: {
        repo: "https://github.com/Jaswanth9841/Workflow_Builder",
      },
      metrics: [
        { label: "Node Types", value: "8+" },
        { label: "Real-time Validation", value: "Yes" },
        { label: "Full-Stack", value: "React + FastAPI" },
      ],
      featured: true,
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      summary: "Modern, performant portfolio built with Vite, React, and Framer Motion.",
      description: "A showcase of innovative UI patterns including Bento Grid, Spotlight Cards, and Command Palette. Built with performance and accessibility in mind. Features smooth animations, dark mode support, command palette for quick navigation, and optimized performance with 60fps smooth scrolling.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      highlights: [
        "Achieved 98+ Lighthouse score across all metrics",
        "Implemented innovative UI patterns with tasteful animations",
        "Built command palette for quick navigation (⌘K)",
        "Optimized for 60fps smooth scrolling with GPU acceleration",
        "Full dark/light theme support with system preference detection",
        "Comprehensive accessibility compliance (WCAG AA+)",
        "Performance-optimized with code splitting and lazy loading",
      ],
      links: {
        repo: "https://github.com/Jaswanth9841",
      },
      metrics: [
        { label: "Lighthouse Score", value: "98+" },
        { label: "Performance", value: "60fps" },
        { label: "Bundle Size", value: "143KB" },
      ],
      featured: false,
    },
  ],
  
  experience: [
    {
      id: "exp1",
      company: "Solverminds Solutions and Technologies",
      role: "Software Engineer",
      period: "May 2022 - Present",
      startDate: "2022-05",
      endDate: "Present",
      location: "Chennai, India",
      description: "Developing responsive and high-performance web applications for maritime logistics and port optimization using React, TypeScript, and modern JavaScript frameworks. Working in the domain of Marine Logistics, Vessel Stowage Planning and Port Optimization, delivering user-centric applications with both frontend and backend expertise.",
      highlights: [
        "🏆 Awarded Rising Star (2023) for exceptional performance and outstanding contributions to the team",
        "Became a key member in projects where decisions on UI and functionality are highly valued by team leads",
        "Developed 3 major enterprise applications (SONATA, BCAP, G2O) focused on vessel planning and port optimization",
        "Partnered with backend to define contracts; created small fixes and endpoints in Java/Spring Boot to unblock front-end delivery",
        "Wrote integration utilities and DTOs in Java; improved request/response validation and error handling",
        "Integrated RESTful APIs with front-end applications to enable dynamic data handling and seamless user experiences",
        "Implemented state management using Redux and React Hooks to maintain scalable and maintainable component structures",
        "Optimized application performance by reducing load times, enhancing code quality, and minimizing UI errors",
        "Built dynamic UIs to visualize stowage layouts, holds and tiers placement, and vessel structures",
        "Integrated React frontend with Optimizer APIs for plan processing and output rendering",
        "Created reusable components for cargo checks, master data, and stability validation",
        "Refactored codebase for improved performance, scalability, and maintainability",
        "Contributed to feature planning by providing UI/UX suggestions to improve usability for maritime planners",
      ],
      technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Redux", "React Hooks", "Jest", "React Testing Library", "Java", "Spring Boot", "RESTful APIs", "Git", "GitHub", "Azure DevOps"],
    },
  ],
  
  testimonials: [
    {
      id: "award1",
      quote: "Rising Star Award - Recognized for exceptional performance, outstanding contributions, and demonstrating exemplary technical skills in developing enterprise-grade React applications. This award acknowledges dedication to code quality, innovative problem-solving, and going above and beyond in delivering high-impact features for the maritime logistics platform.",
      author: "Solverminds Solutions and Technologies",
      role: "Rising Star Award 2023",
      company: "Company Recognition",
    },
    {
      id: "achievement1",
      quote: "Consistently delivered high-quality code with 85% test coverage, optimized application performance by 40%, and mentored team members on React best practices. Led the TypeScript migration initiative that reduced production bugs by 60%, significantly improving application reliability and maintainability.",
      author: "Technical Excellence",
      role: "Key Achievements",
      company: "Professional Impact",
    },
  ],
  
  education: [
    {
      degree: "Bachelor of Computer Applications – 76%",
      institution: "Prince Shri Venkateswara Arts and Science College, Chennai",
      year: "06/2018 – 07/2021",
    },
  ],
}

export default siteData

