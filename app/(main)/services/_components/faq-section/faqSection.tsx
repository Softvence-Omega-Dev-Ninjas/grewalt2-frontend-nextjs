"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Do you only work in crypto and Web3?",
    answer:
      "We cover AI, blockchain, DeFi and Web3 — including regulated fintech and institutions building in these areas.",
  },
  {
    question: "What makes your shortlists different?",
    answer:
      "We prioritise signal: proven delivery, domain fit, and practical understanding of regulated/high-growth environments.",
  },
  {
    question: "Can you help us design the team before we hire?",
    answer:
      "Yes. Advisory is part of how we work — we challenge role design and hiring order before you commit budget.",
  },
  {
    question: 'What does "Specialist Squads" include?',
    answer:
      "Outcome-driven delivery teams such as KYC/AML deployments, compliance ops uplift, transaction monitoring QA, and AI support pods.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <section className="bg-[#F8FAFC] py-24 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-[#0F172A] mb-4 tracking-tight">
            FAQ
          </h2>
          <p className="text-slate-500 text-lg">
            Short answers to common questions.
          </p>
        </header>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full cursor-pointer px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
              >
                <span className="text-[20px] font-bold text-[#0F172A] tracking-tight">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#0F172A] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8">
                      <p className="text-slate-500 text-[16px] leading-relaxed max-w-[90%]">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
