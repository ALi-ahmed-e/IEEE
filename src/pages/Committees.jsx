import React from 'react';
import Hero from '../components/Hero';

const committees = [
  {
    name: "HR",
    description:
      "The firm, a highly reputed attorney in corporate law, Dr. Ahmed has over 20 years of experience practicing legal advice to major corporations and has a proven track record of success in complex cases.",
  },
  {
    name: "Marketing",
    description:
      "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice to major corporations and has a proven track record of success in complex cases.",
  },
];

const Committees = () => {

  
  return (
    <div className="min-h-screen  w-full bg-gradient-to-b from-black via-gray-800 to-black text-white font-sans">



      <Hero page={"COMMITTEES"} />



      <header className="text-center py-16">
        <h1 className="text-4xl font-bold">COMMITTEES</h1>
      </header>
      <main className="max-w-7xl mx-auto px-4 grid gap-12 py-5">
        {committees.map((committee, index) => (
          <div key={index} className="relative pl-32">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-24 bg-gray-700 text-white text-xs rounded-full flex items-center justify-center leading-tight shadow-lg p-2 text-center">
              {committee.name}
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
              <p className="text-sm text-gray-300 leading-relaxed mt-2">
                {committee.description}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Committees;
