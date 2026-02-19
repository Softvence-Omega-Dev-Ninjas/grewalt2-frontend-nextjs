"use client";
import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InsightCard from "./InsightCard";
import web3Img from "@/public/insights/web3.jpg"
import ai_team from "@/public/insights/ai-team.png"
import ai_tool from "@/public/insights/ai-tool.png"
import defi from "@/public/insights/defi.png";
import high_signal from "@/public/insights/high-signal.png"
import shifting from "@/public/insights/shifting.png";

// Shob data ekhon ekhne integrated
const INSIGHTS_DATA = [
  {
    id: 1,
    title: "Web3 hiring is shifting from hype to infrastructure",
    description:
      "AI product build, MLOps foundations, data engineering and tooling integration.",
    date: "Dec 2025",
    readTime: "4 min read",
    image: web3Img,
    tags: ["Market", "Web3"],
    category: "Web3",
  },
  {
    id: 2,
    title: "AI teams that scale: hire order that reduces risk",
    description:
      "The fastest teams follow a predictable sequence: product + data foundations → MLOps + reliability → applied scientists. Skip steps and you pay later.",
    date: "Dec 2025",
    readTime: "4 min read",
    image: ai_team,
    tags: ["Hiring", "AI"],
    category: "AI",
  },
  {
    id: 3,
    title: "DeFi compliance is becoming operational, not theoretical",
    description:
      "Teams are building controls, monitoring and reporting functions earlier — often using hybrid models: specialist squads + strategic hires.",
    date: "Dec 2025",
    readTime: "4 min read",
    image: defi,
    tags: ["Regulation"],
    category: "Regulation",
  },
  {
    id: 4,
    title: "AI tooling consolidation: why it changes hiring",
    description:
      "As platforms consolidate, demand rises for integration, evaluation, and governance skills not only model building. It's a shift from 'build' to 'operate'.",
    date: "Dec 2025",
    readTime: "4 min read",
    image: ai_tool,
    tags: ["Market", "AI"],
    category: "AI",
  },
  {
    id: 5,
    title: "High-signal Web3 candidates: what to screen for",
    description:
      "Real delivery shows up in audit trails, incident handling, security posture, and pragmatic trade-offs — not only GitHub stars or buzzwords.",
    date: "Dec 2025",
    readTime: "4 min read",
    image: high_signal,
    tags: ["Hiring"],
    category: "Web3",
  },
  {
    id: 6,
    title: "The shifting landscape of MiCA and DeFi protocols",
    description:
      "As European regulations tighten, decentralized teams are pivoting toward institutional-grade compliance frameworks without sacrificing privacy.",
    date: "Feb 2026",
    readTime: "5 min read",
    image: shifting,
    tags: ["Regulation", "DeFi"],
    category: "Regulation",
  },
];

const CATEGORIES = ["All", "Market", "Hiring", "Regulation", "AI", "Web3"];

export default function InsightsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights = useMemo(() => {
    return INSIGHTS_DATA.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory ||
        item.tags.includes(activeCategory);

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-[#FBFDFF] min-h-screen py-20 px-6 max-w-7xl mx-auto">
      {/* AOS Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 text-[#2F8BDD] text-[11px] font-extrabold mb-4 tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#2F8BDD]"></span>
          MARKET NOTES • HIRING SIGNALS • REGULATION • EXECUTION
        </div>
        <h1 className="text-[64px] font-bold text-[#05183D] mb-6 font-bomstad">
          Insights
        </h1>
        <p className="max-w-2xl text-slate-500 text-lg font-sans leading-relaxed">
          A single place for market updates across AI, blockchain, DeFi and Web3
          — plus the hiring signals that matter. Use this hub for news,
          commentary, and practical guidance.
        </p>
      </motion.div>

      {/* Search & Filter Bar */}
      <div className="space-y-10 mb-16">
        <div className="relative group">
          <Search
            className="absolute left-0 top-1/3 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2F8BDD] transition-colors"
            size={22}
          />
          <input
            type="text"
            placeholder="Search insights (e.g., DeFi regulation, MLOps, hiring...)"
            className="w-full pl-10 pb-4 bg-transparent border-b border-slate-200 outline-none text-xl font-sans placeholder:text-slate-300 focus:border-[#2F8BDD] transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg text-sm cursor-pointer font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#2F8BDD] text-white shadow-lg shadow-blue-200"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout with AnimatePresence */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
      >
        <AnimatePresence mode="popLayout">
          {filteredInsights.map((insight, idx) => (
            <InsightCard key={insight.id} {...insight} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
