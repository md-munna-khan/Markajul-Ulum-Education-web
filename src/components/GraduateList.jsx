import React from "react";

const graduates = [
  {
    name: "আহমদ আসিফ আল রশীদ সউদ",
    father: "আহমদ মঞ্জুরুল হাফিজ",
    profession: "বেসরকারি চাকুরী",
    district: "চাঁদপুর"
  },
  {
    name: "হাফেজ মোঃ আব্দুল মান্নান (মুন্না)",
    father: "মোঃ খলিলুর রহমান",
    profession: "বেসরকারি চাকুরীজীবি",
    district: "ঠাকুরগাঁও"
  },
  {
    name: "মুহাম্মদ রাসেল আহমাদ ত্বলহা",
    father: "আব্দুল সাত্তার",
    profession: "বেসরকারি চাকুরীজীবি",
    district: "নারায়ণগঞ্জ"
  },
  {
    name: "গাজী মাহবুব হাসান",
    father: "গাজী এ কে এম শরাফত আলী",
    profession: "ব্যবসা",
    district: "কুমিল্লা"
  },
  {
    name: "হাফেজ মোঃ খলিলুর রহমান মাহদী",
    father: "মোঃ আব্দুল মুত্তালিব বেপারী",
    profession: "শিক্ষক",
    district: "মাদারীপুর"
  },
  {
    name: "হাফেজ মোঃ সাইফুল্লাহ",
    father: "মৃত আব্দুল কাহার শাহ",
    profession: "ইমাম",
    district: "সুনামগঞ্জ"
  },
  {
    name: "হাফেজ মোঃ জুবায়ের মুন্না",
    father: "মোঃ মামুনুর রশীদ",
    profession: "ব্যবসা",
    district: "নারায়ণগঞ্জ"
  },
  {
    name: "মো সাজ্জাদ হোসেন",
    father: "মো মজিবুর রহমান খান",
    profession: "বেসরকারি চাকুরিজীবী",
    district: "চাঁদপুর"
  }
];

const GraduateCard = ({ graduate }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white text-center">
      <h2 className="text-xl font-bold text-blue-600">{graduate.name}</h2>
      <p className="text-gray-700"><strong>পিতা:</strong> {graduate.father}</p>
      <p className="text-gray-700"><strong>পেশা:</strong> {graduate.profession}</p>
      <p className="text-gray-700"><strong>জেলা:</strong> {graduate.district}</p>
    </div>
  );
};

const GraduateList = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">দাওরা ফারেগীন ২০২৫</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {graduates.map((graduate, index) => (
          <GraduateCard key={index} graduate={graduate} />
        ))}
      </div>
    </div>
  );
};

export default GraduateList;
