import React from 'react';
import Link from 'next/link';
import { generalRole } from '@/lib/careers-data';
import ApplicationForm from '../_components/ApplicationForm';

export const metadata = {
  title: 'Apply - General Application | Arzen',
  description: 'Submit a general application to join our team.',
};

function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide ${className}`}
    >
      {children}
    </span>
  );
}

export default function GeneralApplicationPage() {
  return (
    <div className="min-h-screen bg-black font-sans pb-24 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 pt-12">
        {/* Top Header Section */}
        <div className="mb-10">
          <Link href="/careers" className="text-green-500 hover:underline font-medium flex items-center mb-6">
            ← Back to Career
          </Link>
          {/* Added General Application Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            General Application
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Pill className="bg-blue-500/15 text-blue-400">Remote</Pill>
            <Pill className="bg-pink-500/15 text-pink-400">General</Pill>
            <Pill className="bg-[#86EFAC] text-black">Open Role</Pill>
          </div>

          <p className="text-gray-400 mb-6">Always open</p>

          <a
            href="#apply"
            className="group/btn relative overflow-hidden inline-flex items-center rounded-full bg-[#4ADE80] px-6 py-2.5 font-bold text-black transition-transform hover:scale-105"
          >
            {/* Smooth Gradient Fade Layer */}
            <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
            
            {/* Button Content lifted above the background */}
            <span className="relative z-10 flex items-center gap-2">
              Apply for this Position 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 bg-[#1A1A1A] text-white rounded-xl divide-y md:divide-y-0 md:divide-x divide-gray-700 mb-16">
          <div className="p-6">
            <p className="text-gray-400 text-sm mb-1">Job Type</p>
            <p className="font-bold text-lg">Open Role</p>
          </div>
          <div className="p-6">
            <p className="text-gray-400 text-sm mb-1">Location</p>
            <p className="font-bold text-lg">Remote</p>
          </div>
          <div className="p-6">
            <p className="text-gray-400 text-sm mb-1">Salary</p>
            <p className="font-bold text-lg">Depends on role</p>
          </div>
          <div className="p-6">
            <p className="text-gray-400 text-sm mb-1">Start Date</p>
            <p className="font-bold text-lg">Flexible</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* About the Role */}
            <section>
              <h2 className="text-3xl font-extrabold text-gray-200 mb-6">About the Role</h2>
              <div className="text-gray-400 space-y-4">
                <p>Don&apos;t see a role that matches exactly? We&apos;re always interested in meeting talented people who care about great work.</p>
                <p>Tell us about yourself and where you think you&apos;d fit — we&apos;ll reach out if there&apos;s a match, now or down the line.</p>
              </div>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-3xl font-extrabold text-gray-200 mb-6">Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Varies by role and team</li>
                <li>We&apos;ll match you to the closest opening</li>
                <li>Or keep your profile on file for future roles</li>
              </ul>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-3xl font-extrabold text-gray-200 mb-6">Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-300 mb-4">Must Have</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>A portfolio or work history you&apos;re proud of</li>
                    <li>Clear communication skills</li>
                    <li>A genuine interest in Arzen&apos;s work</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-300 mb-4">Nice to Have</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Experience in design, development, marketing or QA</li>
                    <li>Startup or agency background</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What We Offer */}
            <section>
              <h2 className="text-3xl font-extrabold text-gray-200 mb-6">What We Offer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Competitive Pay', 'Remote Work', 'Flexible Hours', 'Growth & Learning', 'Great Team', 'Real Impact'].map((offer) => (
                  <div key={offer} className="bg-[#242424] text-white p-6 rounded-xl font-bold flex items-center justify-start h-20">
                    {offer}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar (Sticky Card) */}
          <div className="lg:col-span-1">
            <div className="bg-[#1A1A1A] text-white p-8 rounded-3xl sticky top-16">
              <h3 className="text-2xl font-bold mb-8">Ready to make an impact?</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-gray-700 pb-3 text-sm">
                  <span className="text-gray-400">Type</span>
                  <span className="font-semibold text-right">Open Role</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-3 text-sm">
                  <span className="text-gray-400">Location</span>
                  <span className="font-semibold text-right">Remote</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-3 text-sm">
                  <span className="text-gray-400">Department</span>
                  <span className="font-semibold text-right">General</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-3 text-sm">
                  <span className="text-gray-400">Reports To</span>
                  <span className="font-semibold text-right">Hiring Team</span>
                </div>
              </div>

              <a
                href="#apply"
                className="group/btn relative overflow-hidden block w-full rounded-full bg-[#4ADE80] py-3 font-bold text-black transition-transform hover:scale-[1.03] mb-4"
              >
                {/* Smooth Gradient Fade Layer */}
                <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                
                {/* Button Content lifted above the background */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Apply for this Position
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
              <p className="text-center text-gray-500 text-xs">Takes less than 5 minutes</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mb-16" />

        {/* Application Form */}
        <div id="apply" className="max-w-4xl">
          {/* We inject the reusable ApplicationForm component here */}
          <ApplicationForm job={generalRole} />
        </div>

      </div>
    </div>
  );
}