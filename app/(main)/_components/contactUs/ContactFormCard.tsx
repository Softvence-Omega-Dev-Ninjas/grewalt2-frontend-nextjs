"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFormCard = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Enquiry sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] w-full max-w-[750px]">
      <ToastContainer />
      <h2 className="text-[36px] font-bold text-[#05183D] mb-3 leading-tight tracking-tight">
        Tell us what you need
      </h2>
      <p className="text-slate-400 text-[16px] mb-12">
        We&apos;ll route your message to the right person. Confidential by
        default.
      </p>

      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
          {/* Form Fields Array */}
          {[
            {
              label: "Company Name",
              name: "company",
              placeholder: "Enter your company name",
              type: "text",
            },
            {
              label: "Your Name",
              name: "name",
              placeholder: "Enter your name",
              required: true,
              type: "text",
            },
            {
              label: "Work Email",
              name: "email",
              placeholder: "Enter your email",
              required: true,
              type: "email",
            },
            {
              label: "Your Role/Title",
              name: "role",
              placeholder: "Enter your role/title",
              type: "text",
            },
          ].map((field) => (
            <div key={field.name} className="flex flex-col gap-2 relative">
              <label className="text-[15px] font-bold text-[#05183D]">
                {field.label}{" "}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                className="border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors placeholder:text-slate-300 text-slate-700 bg-transparent"
              />
            </div>
          ))}

          {/* Select Field */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-[15px] font-bold text-[#05183D]">
              Select <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="service"
                required
                className="w-full border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors text-slate-400 bg-transparent appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>
                  What can we help
                </option>
                <option value="recruitment">Elite Recruitment</option>
                <option value="squads">Specialist Squads</option>
                <option value="advisory">Strategic Advisory</option>
              </select>
              <ChevronDown
                className="absolute right-0 bottom-4 text-slate-400 pointer-events-none"
                size={18}
              />
            </div>
          </div>

          {/* Timeline Field */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-[15px] font-bold text-[#05183D]">
              Hiring/Project Timeline
            </label>
            <input
              name="timeline"
              type="text"
              placeholder="Enter your timeline"
              className="border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors placeholder:text-slate-300 text-slate-700 bg-transparent"
            />
          </div>
        </div>

        {/* Description Field */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-[15px] font-bold text-[#05183D]">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            rows={1}
            required
            placeholder="Briefly describe your needs"
            className="border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors placeholder:text-slate-300 text-slate-700 bg-transparent resize-none"
          />
        </div>

        <div className="pt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 cursor-pointer rounded-[12px] text-white font-bold text-[18px] transition-all duration-300 shadow-[0_15px_35px_rgba(47,139,221,0.35)] hover:shadow-[0_20px_45px_rgba(47,139,221,0.45)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(90deg, #2F8BDD 0%, #6FDEF7 100%)",
            }}
          >
            {loading ? "Sending Enquiry..." : "Submit Enquiry"}
          </button>

          <div className="w-full h-[1px] bg-slate-100 mt-12 mb-6" />

          <p className="text-[13px] text-slate-400 leading-relaxed">
            Tip: If you&apos;re a candidate, include your LinkedIn and target
            roles. If you&apos;re a client, include scope and timeline.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactFormCard;
