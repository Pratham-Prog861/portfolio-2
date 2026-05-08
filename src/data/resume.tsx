import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { TailwindCSS } from "@/components/ui/svgs/tailwind-css";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Supabase } from "@/components/ui/svgs/supabase";

export const DATA = {
  name: "Pratham Darji",
  initials: "PD",
  url: "https://prathamdarji.com",
  location: "Ahmedabad, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/Ahmedabad,+Gujarat,+India",
  description:
    "Full Stack Developer. I love building things and helping people. Very active on Twitter.",
  summary:
    "Full Stack Developer skilled in React, Next.js, and Node.js. Built real-world projects including a coding platform, API testing tool, and developer product platform. Strong in frontend architecture with backend and REST API experience. Seeking Frontend/Full Stack roles to build impactful products and grow in system design.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "TailwindCSS", icon: TailwindCSS },
    { name: "MongoDB", icon: Mongodb },
    { name: "Supabase", icon: Supabase }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pratham8355@gmail.com",
    tel: "+91 8355824195",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Pratham-Prog861",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pratham-darji861/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/prathamCodesDev",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:pratham8355@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SparshTech",
      href: "https://www.sparshtech.in/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer ( Startup Experiance )",
      logoUrl: "/sparsh-logo.jpg",
      start: "Sept 2025",
      end: "Present",
      description:
        "Full Stack Developer specializing in React, Next.js, and Node.js, focused on building scalable and AI-powered web applications. Developed multiple real-world products including an API testing tool, coding platform, and AI resume builder. Strong in frontend architecture with practical backend experience. Seeking frontend or full stack roles to build impactful user-centric products.",
    },
  ],
  education: [
    {
      school: "Parul University",
      href: "https://uwaterloo.ca",
      degree: "BSc. IT",
      logoUrl: "https://www.paruluniversity.ac.in/wp-content/uploads/2025/09/Variant9.svg",
      start: "2023",
      end: "2026",
    },
    {
      school: "Shanker Narayan College of Arts and Commerce",
      href: "https://www.sncollege.com/",
      degree: "HSC ( Commerce )",
      logoUrl: "/snc.png",
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "DevHunt",
      href: "https://dev-hunt-kappa.vercel.app/",
      dates: "Mar 2026 - Apr 2026",
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
      video: ""
    },
    {
      title: "Mini Postman",
      href: "https://mini-postman-rouge.vercel.app/",
      dates: "Nov 2025 - Apr 2026",
      active: true,
      description:
        "A modern, lightweight API testing tool built with Next.js 16, React 19, and TypeScript. Inspired by Postman and Requestly, designed for developers who need a fast, clean interface for testing APIs.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "Motion",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Axios",
        "Postman Alternative"
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
      dates: "April 2026 - Present",
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
      dates: "April 2023 - March 2024",
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
      image: "/product/streamflix.png",
      video: "",
    },
  ],
} as const;
