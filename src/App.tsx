import  { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
];

function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur z-50 shadow">
      <div className="w-full mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="font-bold text-green-700 text-xl">ADHR</h1>
        <div className="space-x-6 font-medium flex items-center">
          <Link to="/" className="hover:text-green-700">Home</Link>
          <Link to="/about" className="hover:text-green-700">About</Link>
          <Link to="/contact" className="hover:text-green-700">Contact</Link>
          <a
            href="#donate"
            className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
          >
            Donate Us
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
        <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-6xl font-bold mb-4">
          Alternative Development of Himalayan Region
        </motion.h1>
        <p className="text-xl italic">Preserving the Himalayas, Empowering Communities</p>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { number: "10+", label: "Partner Villages" },
    { number: "100+", label: "Farmers Connected" },
    { number: "500+", label: "Students Supported" },
    { number: "50+", label: "Youth Trained" },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-8 text-center py-16 w-full mx-auto">
      {stats.map((s, i) => (
        <div key={i}>
          <h3 className="text-4xl font-bold text-green-700">{s.number}</h3>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Impact />

      <section className="py-20 bg-gray-50">
        <div className="w-full mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Our Initiatives</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {initiatives.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <button className="mt-auto text-green-700 font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[315px]"
          >
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/6uC4sGk2p8M"
              title="Himalayan Water Conservation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              Reviving Himalayan Water Sources
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              This documentary highlights our on-ground efforts in Kunjetha village,
              where community participation and scientific planning are helping
              restore traditional water streams. The initiative is creating year-round
              water availability, improving agriculture and reducing migration.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through awareness, youth engagement, and sustainable techniques,
              ADHR is building climate-resilient Himalayan villages.
            </p>
          </motion.div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}

function Testimonials() {
  const data = testimonials;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % data.length), 4000);
    return () => clearInterval(t);
  }, []);

  const item = data[index];

  return (
    <section className="py-20 bg-gray-100">
      <div className="w-full mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8"
        >
          <img
            src={item.img}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-600 italic mb-4">"{item.text}"</p>
          <h4 className="font-semibold text-green-700">{item.name}</h4>
        </motion.div>

        <div className="flex justify-center gap-2 mt-6">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-green-700" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <div className="pt-32 px-6 py-20 w-full mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg text-center w-full mx-auto mb-16"
      >
        ADHR is dedicated to conserving the fragile Himalayan ecosystem while creating sustainable livelihood opportunities for mountain communities. Our model in Uttarakhand focuses on environment protection, education, farmer empowerment, and skill development.
      </motion.p>

      <h3 className="text-2xl font-semibold text-center mb-10">Our Team</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {team.map((member, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="text-center">
            <img src={member.img} className="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow" />
            <h4 className="text-xl font-semibold">{member.name}</h4>
            <p className="text-sm text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="pt-32 text-center py-20 px-6 w-full mx-auto">
      <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
      <p className="mb-6">Volunteer, partner, or support our mission.</p>
      <input className="border p-3 w-full mb-4" placeholder="Your Email" />
      <textarea className="border p-3 w-full mb-4" placeholder="Your Message" />
      <button className="bg-green-700 text-white px-8 py-3 rounded-full">Submit</button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-12">
      <div className="w-full mx-auto px-6 text-center space-y-6">
        <p className="text-lg font-semibold">Connect with us</p>

        <div className="flex justify-center gap-6">
          <a
            href="https://youtube.com/"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              className="w-8 h-8"
            />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
              className="w-8 h-8"
            />
          </a>
        </div>

        <p>© 2026 ADHR | info@adhr.org</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const initiatives = [
  {
    title: "Media & Awareness",
    desc: "Documentaries, talk shows, research publications, podcasts and digital media to spread awareness about Himalayan ecosystems.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "Empowering Farmers",
    desc: "Connecting organic farmers to urban consumers and training them in sustainable agriculture and food processing.",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
  },
  {
    title: "Revival of Natural Resources",
    desc: "Restoring water streams through scientific planning and community-led conservation practices.",
    img: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
  },
  {
    title: "Sustainable Tourism",
    desc: "Community homestays and cultural tourism creating local income and preserving heritage.",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
  {
    title: "Education for Children",
    desc: "Free online tuition, digital access and future learning centers for remote Himalayan villages.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
  {
    title: "Employment Opportunities",
    desc: "Skill development in tourism, agriculture, sports and professional training programs.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
];

const team = [
  { name: "Amit Sharma", role: "Founder", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Neha Joshi", role: "Program Director", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Rohit Rawat", role: "Field Coordinator", img: "https://randomuser.me/api/portraits/men/76.jpg" },
  { name: "Pooja Bisht", role: "Education Lead", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Karan Mehta", role: "Research Associate", img: "https://randomuser.me/api/portraits/men/11.jpg" },
];

const testimonials = [
  {
    name: "Ramesh Singh",
    text: "ADHR helped restore our village water source. Farming is now possible year-round.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sunita Devi",
    text: "Because of the education support, my children no longer need to migrate for studies.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Mahesh Rawat",
    text: "Tourism training created a new income source for our family in the village.",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];
