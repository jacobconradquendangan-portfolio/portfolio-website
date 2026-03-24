"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  // Track 01: Industry Wins & Awards
  {
    title: "MNLFlow Transit",
    desc: "1st Place Industry Choice Award. Flight tracking and regional transit logic.",
    tech: "Flight Tracking • Transit Logic • Analytics • Figma • UX Design",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/01_Industry_Wins_Awards/MNLFlow_ALIAC",
    live: "#",
    category: "Industry Award",
  },
  {
    title: "Rosemary & Thyme",
    desc: "Entrepreneurship analysis and functional restaurant reservation system design.",
    tech: "Entrepreneurship • Reservation System • Figma • UX Design",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/01_Industry_Wins_Awards/Rosemary_Thyme_Restaurant",
    live: "#",
    category: "Industry Award",
  },
  {
    title: "CESCon Sales Blitz",
    desc: "Highest Sales Award. Documentation of bazaar performance and demand forecasting.",
    tech: "Sales Analytics • Demand Forecasting • Documentation",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/01_Industry_Wins_Awards/CESCon_Sales_Blitz",
    live: "#",
    category: "Industry Award",
  },
  {
    title: "Aegis Verification Platform (AVP)",
    desc: "2nd Place Hackathon. Next.js/Firebase authentication and verification system.",
    tech: "Next.js • Firebase • Authentication",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/01_Industry_Wins_Awards/Institutional_Hackathon",
    live: "#",
    category: "Industry Award",
  },
  // Track 02: Systems Architecture & Dev
  {
    title: "MetroStay Platform",
    desc: "Technopreneurship case study, business strategy, and mobile application build (.apk).",
    tech: "Mobile App • Business Strategy • Technopreneurship",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/02_Systems_Architecture_Dev/MetroStay_Technopreneurship",
    live: "#",
    category: "System Architecture",
  },
  {
    title: "EduTrack Enrollment",
    desc: "Full-cycle enrollment system with complex subject prerequisite logic.",
    tech: "JavaScript • SQL • Enrollment System",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/02_Systems_Architecture_Dev/EduTrack_Tech_Com",
    live: "#",
    category: "System Architecture",
  },
  {
    title: "Hotel Management SAD",
    desc: "Structural and behavioral blueprints (UML, DFD) and SRS documentation.",
    tech: "UML • DFD • SRS • System Architecture",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/02_Systems_Architecture_Dev/SAD_Hotel_Management",
    live: "#",
    category: "System Architecture",
  },
  {
    title: "Bulls & Cows Engine",
    desc: "C++ source code and algorithmic breakdown for a deductive logic game.",
    tech: "C++ • Algorithms • Game Logic",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/02_Systems_Architecture_Dev/DSA_Bulls_Cows",
    live: "#",
    category: "System Architecture",
  },
  // Track 03: Data Analytics & Dashboards
  {
    title: "Airline Regression",
    desc: "Statistical regression analysis of service quality fit measures and coefficients.",
    tech: "Regression Analysis • Statistics • Data Science",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/03_Data_Analytics_Dashboards/Airline_Service_Regression",
    live: "#",
    category: "Data Analytics",
  },
  {
    title: "BI HR Dashboards",
    desc: "Workforce analytics suite covering recruitment, wellness, and headcount.",
    tech: "Power BI • HR Analytics • Dashboard",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/03_Data_Analytics_Dashboards/BI_HR_Attrition",
    live: "#",
    category: "Data Analytics",
  },
  {
    title: "Diabetes ML Classifier",
    desc: "Python-based machine learning model for health risk predictive analysis.",
    tech: "Python • Machine Learning • Predictive Analytics",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/03_Data_Analytics_Dashboards/Diabetes_Prediction_ML",
    live: "#",
    category: "Data Analytics",
  },
  {
    title: "EDM Medical Schema",
    desc: "Hospital database architecture with SQL scripts and Metabase analytics.",
    tech: "SQL • Database Design • Metabase",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/03_Data_Analytics_Dashboards/EDM_Medical_SQL",
    live: "#",
    category: "Data Analytics",
  },
  {
    title: "SCM Inventory Health",
    desc: "Automated supply chain inventory logic and health monitoring via Excel.",
    tech: "Excel • Supply Chain • Inventory Management",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/03_Data_Analytics_Dashboards/SCM_Inventory_Excel",
    live: "#",
    category: "Data Analytics",
  },
  {
    title: "Wine Data Mining",
    desc: "RapidMiner processes including Decision Trees and Logistic Regression.",
    tech: "RapidMiner • Data Mining • Decision Trees",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/03_Data_Analytics_Dashboards/Wine_Quality_Data_Mining",
    live: "#",
    category: "Data Analytics",
  },
];

const certifications = [
  {
    title: "HubSpot Certifications",
    desc: "Professional certifications in inbound marketing, sales, and customer service.",
    folderPath: "/Credentials_Leadership/HubSpot_Certs",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/04_Credentials_Leadership/HubSpot_Certs",
  },
  {
    title: "Leadership Portfolio",
    desc: "Proof of Tech Lead roles and institutional speaking engagements.",
    folderPath: "/Leadership_Speaking",
    github:
      "https://github.com/jacobconradquendangan-portfolio/My-Portfolio/tree/main/04_Credentials_Leadership/Leadership_Speaking",
  },
];

const skills = [
  { category: "Programming", items: ["Python", "JavaScript", "C++"] },
  {
    category: "Data & Analytics",
    items: ["Machine Learning", "Tableau", "Power BI", "Excel"],
  },
  { category: "Web (Basic)", items: ["React", "Next.js", "HTML", "CSS"] },
  { category: "Design", items: ["Figma (Advanced)", "UI/UX"] },
  { category: "Database", items: ["SQL", "Database Design"] },
  { category: "Tools", items: ["GitHub", "Firebase"] },
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("Industry Award");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <main className="bg-[#121212] text-gray-200 min-h-screen px-6 md:px-20">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center py-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm Jacob 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg mb-4"
          >
            Information Systems student with experience in data analytics,
            machine learning, and UI/UX design.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-4"
          >
            Strong in Python, data analysis, and dashboarding, with working
            knowledge of web development.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 mb-8"
          >
            Proven ability to build data-driven solutions and user-centered
            systems through academic projects and hackathons.
          </motion.p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-xl w-fit font-medium hover:bg-gray-300 transition shadow-lg inline-block"
          >
            View Projects
          </motion.a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6 text-gray-100"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-8 max-w-2xl"
        >
          A collection of my work across industry awards, system architecture,
          and data analytics.
        </motion.p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category
                  ? "bg-gray-200 text-gray-900 shadow-md"
                  : "bg-[#1e1e1e] text-gray-400 hover:bg-[#2a2a2a] hover:text-gray-200 border border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 6) * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-700 hover:border-gray-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block text-xs text-gray-400 font-medium mb-3">
                  {p.category}
                </span>

                <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-gray-300 transition">
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech
                    .split(" • ")
                    .slice(0, 3)
                    .map((techItem, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md"
                      >
                        {techItem}
                      </span>
                    ))}
                  {p.tech.split(" • ").length > 3 && (
                    <span className="px-2 py-1 text-xs bg-[#252525] text-gray-400 rounded-md">
                      +{p.tech.split(" • ").length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-3 border-t border-gray-700">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-gray-200 transition flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={p.live}
                    className="text-sm text-gray-400 hover:text-gray-200 transition flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/jacobconradquendangan-portfolio/My-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition text-sm"
          >
            View all on GitHub
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* CERTIFICATIONS & LEADERSHIP */}
      <section className="py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6 text-gray-100"
        >
          Certifications & Leadership
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-8 max-w-2xl"
        >
          Professional certifications and leadership roles demonstrating my
          commitment to growth and excellence.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-700 hover:border-gray-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <span className="inline-block text-xs text-gray-500 font-mono mb-2">
                  {cert.folderPath}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-gray-300 transition">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {cert.desc}
                </p>
                <div className="flex gap-4 pt-3 border-t border-gray-700">
                  <a
                    href={cert.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-gray-200 transition flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Credentials
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-10 text-gray-100"
        >
          Technical Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-6 hover:border-gray-500 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-100">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-sm bg-gray-800 text-gray-300 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6 text-gray-100"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-2"
        >
          Email: jacobconradquendangan@email.com
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400"
        >
          GitHub: https://github.com/jacobconradquendangan-portfolio
        </motion.p>
      </section>
    </main>
  );
}
