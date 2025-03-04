import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const syllabusData = [
  {
    year: "কোরআন শিক্ষা বিভাগ",
    subjects: [
      "তাজবীদসহ সহীহ শুদ্ধভাবে পবিত্র কোরআন শিক্ষা",
      "সুন্নত পদ্ধতিতে নামাজ শিক্ষা",
      "দ্বীনের জরুরী মাসআলা মাসায়েল",
      "আরবী হাতের লেখা",
      "২৫ সূরা মুখস্থ",
      "অর্থসহ ৪০টি হাদিস মুখস্থ",
      "দৈনন্দিন আমলের ৪০টি দোয়া মুখস্থ",
      "জুমরার নামাজের ও ঈদের খুতবাহ দেখে পড়তে পারা",
      "ফজীলতপূর্ণ আলম"
    ]
  },
  {
    year: "১ম বর্ষ",
    subjects: [
      "তাজবীদসহ সহীহ শুদ্ধভাবে পবিত্র কোরআন তেলাওয়াত",
      "কোরআন শরীফের ৩০নং পারা মুখস্থ",
      "আরবী হাতের লেখা",
      "মিযানুসসরফ ও মুনশাঈব",
      "ছফওয়াতুল মাসাদীর",
      "এসো আরবী শিখি ১ম ও ২য় খন্ড",
      "আত-তামরীনুল কিতাবী",
      "বেহেশতী জেওর ১ম খন্ড"
    ]
  },
  {
    year: "২য় বর্ষ",
    subjects: [
      "এসো আরবী শিখি ৩য় খন্ড",
      "সহজে নাহব শিখব",
      "আল ফিকহুল মুয়াস্সার",
      "সীরাতে খাতামুল আম্বিয়া",
      "হাদিকাতুল আরাবিয়্যাহ",
      "ইলমুছ ছরফ বাংলা",
      "কাসাসুন নাবিয়্যীন ১ম খন্ড, ২য় খন্ড",
      "১০০ হাদিস মুখস্ত"
    ]
  },
  {
    year: "৩য় বর্ষ",
    subjects: [
      "হেদায়াতুন নাহু",
      "মুখতাসারুল কুদুরী",
      "কোরআন তরজমা ২৯ ও ৩০ নং পারা",
      "উসূলুশ শাশী",
      "যাদুত ত্বালেবীন",
      "হুকুম আহকাম সম্বোলিত ১০০ আয়াত ও হাদিস মুখস্থ"
    ]
  },
  {
    year: "৪র্থ বর্ষ",
    subjects: [
      "কোরআন তরজমা ১-১৫নং পাড়া",
      "শরহে বেকায়া ১ম খন্ড ২য় খন্ড",
      "আত্তারীক ইলাল ইনশা ৩য় খন্ড",
      "মুখতাসারুল মাআ’নী",
      "মাকামাতি হারিরী",
      "নূরুল আনওয়ার",
      "সিরাজী"
    ]
  },
  {
    year: "৫ম বর্ষ",
    subjects: [
      "তাফসীরে জালালাইন ১ম খন্ড",
      "তাফসীরে জালালাইন ২য় খন্ড",
      "উলুমুত তাফসীর",
      "হেদায়া ১ম খন্ড",
      "হেদায়া ২য় খন্ড",
      "আকীদাতুত ত্বহাবী",
      "হুকুম-আহকাম সম্বোলিত ১০০ আয়াত ও হাদিস মুখস্থ"
    ]
  },
  {
    year: "৬ষ্ঠ বর্ষ",
    subjects: [
      "মেশকাত শরীফ ১ম ও ২য় খন্ড",
      "হেদায়া ৩য় ও ৪র্থ খন্ড",
      "তাফসীরে বাইযাবী",
      "শরহু নুখবাতিল ফিকার",
      "আকায়েদে নাসাফী",
      "ফেরাকে বাতেলা",
      "দারুল উলূম দেওবন্দ ইতিহাস, ঐতিহ্য, অবদান"
    ]
  },
  {
    year: "৭ম বর্ষ",
    subjects: [
      "বুখারী শরীফ ১ম খন্ড , ২য় খন্ড",
      "মুসলিম শরীফ ১ম খন্ড , ২য় খন্ড",
      "তিরমিযি শরীফ ১ম খন্ড , ২য় খন্ড",
      "আবুদাউদ শরীফ ১ম খন্ড , ২য় খন্ড",
      "নাসাঈ শরীফ",
      "ইবনে মাজাহ",
      "তহাবী শরীফ",
      "মুয়াত্তা মালেক ও মুয়াত্তা মুহাম্মাদ"
    ]
  }
];

const SyllabusPlan = () => {
  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // To trigger the animation every time the element comes into view
    });

    return () => {
      // Refresh AOS when the component is unmounted or updated
      AOS.refresh();
    };
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">মারকাযুল উলূম নৈশ মাদরাসার সিলেবাস</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {syllabusData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500"
            data-aos="zoom-out-right" // Apply AOS fade-up animation to each card
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">{item.year}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {item.subjects.map((subject, idx) => (
                <li key={idx} className="text-gray-700">{subject}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusPlan;
