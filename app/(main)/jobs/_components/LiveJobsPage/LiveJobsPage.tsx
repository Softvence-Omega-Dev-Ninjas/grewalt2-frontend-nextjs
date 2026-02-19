// app/jobs/page.tsx
"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import JobCard from "./JobCard";

const JOBS_DATA = [
  // AI & Data (4 roles)
  {
    id: 1,
    title: "Web3 Developer",
    location: "Miami USA",
    type: "Permanent",
    category: "AI & Data",
    description:
      "This page expects a jobs.json file in the same folder. Replace it with an ATS feed or a CMS export.",
  },
  {
    id: 2,
    title: "AI Developer",
    location: "Miami USA",
    type: "Permanent",
    category: "AI & Data",
    description:
      "This page expects a jobs.json file in the same folder. Replace it with an ATS feed or a CMS export.",
  },
  {
    id: 3,
    title: "Data Scientist",
    location: "Remote",
    type: "Contract",
    category: "AI & Data",
    description:
      "Scaling high-performance AI systems and data pipelines for frontier tech teams.",
  },
  {
    id: 4,
    title: "MLOps Engineer",
    location: "London UK",
    type: "Permanent",
    category: "AI & Data",
    description:
      "Building and maintaining machine learning infrastructure and deployment models.",
  },

  // Web3 & Crypto (4 roles)
  {
    id: 5,
    title: "Smart Contract Engineer",
    location: "Remote",
    type: "Permanent",
    category: "Web3 & Crypto",
    description:
      "Security-first development of DeFi protocols and governance systems.",
  },
  {
    id: 6,
    title: "Protocol Architect",
    location: "Miami USA",
    type: "Permanent",
    category: "Web3 & Crypto",
    description:
      "Designing scalable L2 solutions and cross-chain interoperability layers.",
  },
  {
    id: 7,
    title: "Web3 Developer",
    location: "Miami USA",
    type: "Permanent",
    category: "Web3 & Crypto",
    description:
      "Full-stack integration of blockchain capabilities into regulated fintech products.",
  },
  {
    id: 8,
    title: "Blockchain Analyst",
    location: "Miami USA",
    type: "Contract",
    category: "Web3 & Crypto",
    description:
      "On-chain data analysis and forensic auditing for crypto-asset platforms.",
  },

  // Risk & Compliance (4 roles)
  {
    id: 9,
    title: "Compliance Lead",
    location: "London UK",
    type: "Permanent",
    category: "Risk & Compliance",
    description:
      "Leading KYC/AML deployments and transaction monitoring for regulated fintech.",
  },
  {
    id: 10,
    title: "Risk Manager",
    location: "Miami USA",
    type: "Permanent",
    category: "Risk & Compliance",
    description:
      "Strategic risk assessment for decentralized financial systems and institutions.",
  },
  {
    id: 11,
    title: "KYC Analyst",
    location: "Remote",
    type: "Contract",
    category: "Risk & Compliance",
    description:
      "Operational oversight of user onboarding and identity verification processes.",
  },
  {
    id: 12,
    title: "Regulatory Counsel",
    location: "Remote",
    type: "Permanent",
    category: "Risk & Compliance",
    description:
      "Navigating international regulatory frameworks for Web3 and AI startups.",
  },
];

const CATEGORIES = [
  "All Categories",
  "AI & Data",
  "Web3 & Crypto",
  "Risk & Compliance",
];
const TYPES = ["All Types", "Permanent", "Contract"];

export default function LiveJobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("All Types");

  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Categories" ||
        job.category === selectedCategory;
      const matchesType =
        selectedType === "All Types" || job.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedType]);

  return (
    <main className="min-h-screen bg-[#F9FAFB] pt-32 pb-32 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-[80px] font-bold text-[#05183D]  mb-8 leading-none font-bomstad">
            Live Jobs
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            These are roles we&apos;re actively working on across AI, Web3,
            crypto, DeFi and regulated fintech. Some searches are confidential —
            register and we&apos;ll match you to the right opportunities.
          </p>
        </motion.div>

        {/* Dynamic Filters Section */}
        <div className="space-y-10 mb-20">
          <div className="relative group max-w-5xl">
            <Search
              className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#2F8BDD] transition-colors"
              size={24}
            />
            <input
              type="text"
              placeholder="Search by title, location, company, keyword..."
              className="w-full pl-10 pr-4 py-5 bg-transparent border-b border-slate-200 focus:border-[#2F8BDD] focus:outline-none transition-all text-slate-700 placeholder:text-slate-300 text-lg font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-12 items-center">
            {["Category", "Type", "Sort"].map((filter, i) => (
              <div key={filter} className="relative min-w-[160px]">
                <select
                  className="w-full appearance-none bg-transparent pr-8 py-2 text-slate-700 font-bold focus:outline-none cursor-pointer border-b border-slate-200"
                  onChange={(e) =>
                    filter === "Category"
                      ? setSelectedCategory(e.target.value)
                      : filter === "Type"
                        ? setSelectedType(e.target.value)
                        : null
                  }
                >
                  {filter === "Category" ? (
                    CATEGORIES.map((c) => <option key={c}>{c}</option>)
                  ) : filter === "Type" ? (
                    TYPES.map((t) => <option key={t}>{t}</option>)
                  ) : (
                    <>
                      <option>Newest</option>
                      <option>Oldest</option>
                    </>
                  )}
                </select>
                <ChevronDown
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  size={16}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <p className="text-[#05183D] font-bold text-xl tracking-tight">
            {filteredJobs.length} roles available
          </p>
        </div>

        {/* Main Jobs Layout - Categorized Grid */}
        <div className="space-y-32">
          <AnimatePresence mode="popLayout">
            {CATEGORIES.filter((c) => c !== "All Categories").map((cat) => {
              const jobsInCat = filteredJobs.filter((j) => j.category === cat);
              if (jobsInCat.length === 0) return null;

              return (
                <motion.section
                  key={cat}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 lg:grid-cols-4 gap-12"
                >
                  {/* Title Area (Spans 1 Column) */}
                  <div className="lg:col-span-1">
                    <h2 className="text-[36px] font-bold text-[#05183D] leading-tight sticky top-40">
                      {cat}
                    </h2>
                  </div>

                  {/* Cards Area (Spans 3 Columns) */}
                  <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {jobsInCat.map((job, idx) => (
                      <JobCard key={job.id} {...job} index={idx} />
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
