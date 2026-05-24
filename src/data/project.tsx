import type { ReactNode } from "react";
import { Icons } from "@/components/icons";

export type ProjectLink = {
  type: string;
  href: string;
  icon: ReactNode;
};

export type Project = {
  title: string;
  href?: string;
  dates?: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links?: readonly ProjectLink[];
  image?: string;
  video?: string;
};

export const PROJECTS: readonly Project[] = [
  {
    title: "DevHunt",
    href: "https://dev-hunt-kappa.vercel.app/",
    active: true,
    description:
      "DevHunt is a modern product discovery platform for developers, indie makers, and students. It is inspired by Product Hunt, but built around developer clarity: what a product does, who it is for, and why it matters.",
    technologies: [
      "Next.js",
      "Typescript",
      "React",
      "Clerk",
      "TailwindCSS",
      "Convex",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://dev-hunt-kappa.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/DevHunt",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/devhunt.png",
    video: "",
  },
  {
    title: "Mini Postman",
    href: "https://mini-postman-rouge.vercel.app/",
    active: true,
    description:
      "A modern, lightweight API testing tool built with Next.js 16, React 19, and TypeScript. Inspired by Postman and Requestly, designed for developers who need a fast, clean interface for testing APIs.",
    technologies: [
      "Next.js",
      "Typescript",
      "React",
      "Motion",
      "TailwindCSS",
      "Shadcn UI",
      "Axios",
      "Postman Alternative",
    ],
    links: [
      {
        type: "Website",
        href: "https://mini-postman-rouge.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/Mini-Postman",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/mini-postman.png",
    video: "",
  },
  {
    title: "Hoverly",
    href: "https://github.com/Pratham-Prog861/Hoverly",
    active: true,
    description:
      "Premium animated icons for modern web interfaces. Engineered for craft-focused teams who care about the details.",
    technologies: [
      "Next.js",
      "Typescript",
      "React",
      "Motion",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "https://hoverly-icons.vercel.app/",
      //   icon: <Icons.globe className="size-3" />,
      // },
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/Hoverly",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/hoverly.png",
    video: "",
  },
  {
    title: "StreamFlix",
    href: "https://stream-flix-six.vercel.app/",
    active: true,
    description:
      "A full-stack video streaming platform built with React, Node.js, Express, and MongoDB. Features include user authentication, TMDB-powered video imports, Vidking player integration, and a modern, responsive UI.",
    technologies: [
      "React",
      "Typescript",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://stream-flix-six.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/StreamFlix",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/streamflix.webp",
    video: "",
  },
  {
    title: "AI Connect",
    href: "https://aiconnectpro.netlify.app/",
    active: true,
    description:
      "AI Connect is an intelligent chat interface that leverages Google's Gemini AI to provide smart, context-aware responses. With support for both text and image inputs, it offers a versatile platform for AI-powered conversations.",
    technologies: [
      "React",
      "Typescript",
      "Google Gemini API",
      "React Router",
      "Lucide React",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://aiconnectpro.netlify.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/AI-Connect",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/ai-connect.webp",
    video: "",
  },
  {
    title: "Aniverse",
    href: "https://aniverse-seven.vercel.app/",
    active: true,
    description:
      "AniVerse is a premium, high-performance anime streaming discovery platform built with Next.js 15, Tailwind CSS 4, and TMDB API. It features a sleek, modern UI inspired by top-tier streaming services like Netflix and Crunchyroll, with buttery-smooth animations and a focus on user experience.",
    technologies: [
      "Next.js",
      "Typescript",
      "Framer Motion",
      "Zustand",
      "Lucide React",
      "TailwindCSS",
      "TMDB API",
    ],
    links: [
      {
        type: "Website",
        href: "https://aniverse-seven.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/Aniverse",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/aniverse.webp",
    video: "",
  },
  {
    title: "CineVerse",
    href: "https://cineverse-coral-two.vercel.app/",
    active: true,
    description:
      "A modern, real-time chat application built with React and Socket.IO, featuring a sleek user interface and instant messaging capabilities.",
    technologies: [
      "React",
      "JavaScript",
      "Socket.IO Client",
      "Lucide React",
      "TailwindCSS",
      "Vite",
      "Date-fns",
      "Node.js",
      "Express",
      "Socket.IO",
      "CORS",
    ],
    links: [
      {
        type: "Website",
        href: "https://cineverse-coral-two.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/CineVerse",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/cineverse.webp",
    video: "",
  },
  {
    title: "CodeWithPratham",
    href: "https://codewithpratham.netlify.app/",
    active: true,
    description:
      "Empowering developers with structured learning paths and comprehensive resources.",
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Lucide React",
      "Shadcn UI",
      "Framer Motion",
    ],
    links: [
      {
        type: "Website",
        href: "https://codewithpratham.netlify.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/DevLearning",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/codewithpratham.webp",
    video: "",
  },
  {
    title: "Convex Chat",
    href: "https://github.com/Pratham-Prog861/convex-chat-tutorial-enhanced",
    active: true,
    description:
      "A real-time chat application built with Convex, React, and TypeScript featuring AI integration and Wikipedia search capabilities.",
    technologies: [
      "React",
      "Vite",
      "Typescript",
      "Convex",
      "Wikipedia API",
      "Gemini API via OpenAI",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/convex-chat-tutorial-enhanced",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/convex-chat.webp",
    video: "",
  },
  {
    title: "Currency Converter",
    href: "https://phd-convertor.streamlit.app/",
    active: true,
    description:
      "In this I build with Python and Streamlit and also publish on stremlit deploy . Currency Convertor is the one that i deploy on streamlit",
    technologies: ["Python", "Streamlit"],
    links: [
      {
        type: "Website",
        href: "https://phd-convertor.streamlit.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/Streamlit",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/currency-convertor.webp",
    video: "",
  },
  {
    title: "VibeStream",
    href: "https://vibe-stream-ebon.vercel.app/",
    active: true,
    description:
      "VibeStream is a modern music streaming web app that lets you discover and play trending songs directly from YouTube. Built with Next.js, TypeScript, and Tailwind CSS, it features a beautiful UI, trending music section, and seamless playback.",
    technologies: ["Next.js", "Typescript", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://vibe-stream-ebon.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/VibeStream",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/vibestream.webp",
    video: "",
  },
  {
    title: "React-Lite-Hooks",
    href: "https://github.com/Pratham-Prog861/react-lite-hooks",
    active: true,
    description:
      "A lightweight set of production-ready React hooks for common UI needs — without extra dependencies. Save time by eliminating boilerplate for persistent state, clipboard utilities, media queries, viewport detection, and more.",
    technologies: ["Html", "Css", "Javascript", "Deezer API"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/react-lite-hooks",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/react-lite.webp",
    video: "",
  },
  {
    title: "Music Player",
    href: "https://phdmusic.netlify.app/",
    active: true,
    description:
      "A modern, responsive music player web application with search functionality and a beautiful UI.",
    technologies: ["Html", "Css", "Javascript", "Deezer API"],
    links: [
      {
        type: "Website",
        href: "https://phdmusic.netlify.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Pratham-Prog861/music-player",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/product/music-player.webp",
    video: "",
  },
];
