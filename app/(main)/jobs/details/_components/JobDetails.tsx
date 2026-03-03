/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import JobForm from "./JobForm";
import { JOB_DATA } from "./data";

const JobDetails = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-[64px] font-black text-[#0D1B3E] uppercase tracking-tight leading-[1] mb-6">
            {JOB_DATA.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-500 font-medium text-sm md:text-lg">
            <span>{JOB_DATA.companyInfo}</span>
            <span className="text-gray-300">|</span>
            <span>{JOB_DATA.location}</span>
            <span className="text-gray-300">|</span>
            <span>{JOB_DATA.level}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side - Job Description */}
          <div className="lg:col-span-7 space-y-12">
            {/* Intro paragraphs */}
            <div className="space-y-6 text-[#475569] text-lg leading-relaxed">
              {JOB_DATA.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* The Role Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-6">
                {JOB_DATA.roleInfo.title}
              </h2>
              <div className="space-y-4 text-[#475569] text-lg leading-relaxed">
                {JOB_DATA.roleInfo.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* Responsibilities Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8 uppercase tracking-tight">
                Key Responsibilities
              </h2>
              <div className="space-y-10">
                {JOB_DATA.responsibilities.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold text-[#0D1B3E] text-xl mb-4">
                      {item.category}
                    </h3>
                    <ul className="space-y-4">
                      {item.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-3 text-[#475569] text-lg leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements Section */}
            {/* Requirements Section */}
            {JOB_DATA.requirements?.map((req: any, index: number) => (
              <section
                key={`req-section-${index}`} // Fixed: Added unique key to section
                className="pt-8 border-t border-gray-200"
              >
                <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8  tracking-tight">
                  {req.title}
                </h2>
                <ul className="space-y-4">
                  {req.points.map((point: string, idx: number) => (
                    <li
                      key={`point-${index}-${idx}`} // Improved: More specific key
                      className="flex items-start gap-3 text-[#475569] text-lg leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-12">
              <JobForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
