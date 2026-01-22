"use client";

import { useEffect, useState } from "react";

export default function MensForumHome() {
  const images = [
    "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
  ];

  const sections = [
    { title: "Mental Health & Therapy", desc: "Stress, anxiety, confidence, therapy" },
    { title: "Physical Health & Fitness", desc: "Gym, nutrition, hormones, body" },
    { title: "Style & Grooming", desc: "Fashion, skincare, etiquette" },
    { title: "Wealth & Career", desc: "Money, business, growth" },
    { title: "Cars & Bikes", desc: "Luxury, performance, passion" },
    { title: "Women & Relationships", desc: "Dating, marriage, communication" }
  ];

  const [current, setCurrent] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="bg-black/70 min-h-screen p-6">
        <h1 className="text-4xl text-white font-bold text-center mb-2">
          The Modern Man Forum
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Calm. Supportive. Bold. A space for men to grow.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sections.map((s) => (
            <div key={s.title} className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <button
                className="w-full bg-black text-white py-2 rounded-lg"
                onClick={() => {
                  setTopic(s.title);
                  setShowLogin(true);
                }}
              >
                Enter Discussion
              </button>
            </div>
          ))}
        </div>

        {showLogin && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl max-w-sm w-full">
              <h3 className="text-xl font-bold mb-2">Join Discussion</h3>
              <p className="mb-4 text-gray-600">Topic: {topic}</p>
              <button className="w-full bg-black text-white py-2 rounded-lg mb-3">
                Login / Sign Up
              </button>
              <button className="w-full border py-2 rounded-lg">
                Browse Anonymously
              </button>
              <button
                className="block mx-auto mt-4 text-sm text-gray-500"
                onClick={() => setShowLogin(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
