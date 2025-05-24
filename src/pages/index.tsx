import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fish from "../asset/fish.jpg";
import Fish1 from "../asset/1.jpg";
import Fish2 from "../asset/2.jpg";
import Fish3 from "../asset/3.jpg";

const geist = Geist({ subsets: ["latin"] });

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

// New: Hero animation variants (top to bottom)
const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};
const heroItem = {
  hidden: { opacity: 0, y: -40 }, // animate from top
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const heroImage = {
  hidden: { opacity: 0, y: -40, scale: 0.92 }, // animate from top
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 5, ease: "easeOut" } },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  // Slideshow state
  const fishImages = [ Fish1, Fish2, Fish3];
  const [currentFish, setCurrentFish] = useState(0);

  // Slideshow effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentFish((prev) => (prev + 1) % fishImages.length);
    }, 3000); // 3s per image
    return () => clearTimeout(timer);
  }, [currentFish, fishImages.length]);

  return (
    <main className={`min-h-screen ${geist.className} bg-gradient-to-b from-gray-50 to-white`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg border-b border-gray-100 transition-all duration-500">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Billfish Identification
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Home</a>
              <a href="#introduction" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Introduction</a>
              <a href="#scope" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Project Scope</a>
              <a href="#methodology" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Methodology</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">About Us</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with enhanced animation */}
      <motion.section
        id="home"
        className="relative overflow-hidden pt-32 pb-20"
        initial="hidden"
        animate="show"
        variants={heroContainer}
      >
        {/* Animated gradient background */}
        <motion.div
          aria-hidden
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            background: "linear-gradient(120deg, #e0e7ff 0%, #f0f9ff 50%, #dbeafe 100%)",
            backgroundSize: "200% 200%",
            animation: "gradientMove 8s ease-in-out infinite alternate"
          }}
        />
        <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}</style>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div className="flex-1 space-y-8" variants={heroContainer}>
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
                variants={heroItem}
              >
                AI-Driven System for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Marine Species Identification and
                  Illegal Export Prevention in Sri Lanka
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                variants={heroItem}
              >
                Advanced AI solution for accurate billfish and marine species identification, morphometric estimation, and illegal export prevention in Sri Lankan Fisheries.
              </motion.p>
              <motion.div className="flex gap-4" variants={heroItem}>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-1"
              variants={heroImage}
            >
              <div className="relative h-[700px] flex justify-center items-center overflow-hidden">
                <div className="absolute inset-0"></div>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentFish}
                    src={fishImages[currentFish].src}
                    alt={`Fish ${currentFish + 1}`}
                    className="object-contain rounded-2xl z-10 max-h-[700px] w-auto shadow-2xl"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 300 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        id="introduction"
        className="py-24 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Introduction
          </h2>
          <motion.div className="max-w-4xl mx-auto space-y-8 text-gray-600 leading-relaxed" variants={fadeInUp}>
            <p className="text-lg">
              Sri Lanka, an island nation with a thriving marine ecosystem, places significant emphasis on its fisheries sector,
              which accounts for over 32% of the country's total fish production. Among the large pelagic species, billfish—
              including sailfish, marlins, and swordfish—play a crucial ecological and economic role.
            </p>
            <p className="text-lg">
              However, accurately collecting biological data on these species presents a persistent challenge due to the nature of fishing operations.
              In particular, the Indo-Pacific Sailfish (Istiophorus platypterus) is often cut into sections at sea before being
              landed at ports, making direct length measurements difficult. This limitation significantly affects stock assessments,
              which are essential for fisheries management and conservation efforts.
            </p>
            <p className="text-lg">
              Previous research has attempted to address this issue by deriving morphometric relationships to estimate biological
              parameters such as weight and length from partial fish measurements. However, the accuracy of these
              generalized formulas has been questioned due to species-specific variations and environmental factors.
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Solution</h3>
              <p className="text-lg">
                This study was conducted to fulfill a requirement set forth by the National Aquatic Resources Research and
                Development Agency (NARA) to improve billfish data collection and species identification in Sri Lanka. The
                proposed solution leverages machine learning and image processing techniques to address key challenges in fisheries
                data collection.
              </p>
            </div>
            <p className="text-lg">
              Two predictive models were developed: one for automatic billfish species identification from images and
              another for predicting Lower Jaw Total Length (LJTL) from Pectoral Dorsal Length (PDL) measurements, specifically
              tailored for Indo-Pacific Sailfish. The use of a localized dataset improves estimation accuracy compared to
              generalized morphometric methods.
            </p>
            <p className="text-lg">
              The mobile application developed as part of this research serves as a practical field tool, offering real-time species
              identification and size estimation through an intuitive interface. By integrating machine learning into fisheries
              management, the system enhances both efficiency and accuracy in data collection, addressing the limitations of
              manual measurement techniques.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Scope Section */}
      <motion.section
        id="scope"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Project Scope
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[0,1,2].map((i) => (
              <motion.div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(59,130,246,0.15)" }}
              >
                {i === 0 && <><div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6"><svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-2xl font-semibold mb-4 text-gray-900">Species Identification</h3><p className="text-gray-600 leading-relaxed">Advanced AI algorithms for accurate billfish species identification including sailfish, marlins, and swordfish</p></>}
                {i === 1 && <><div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6"><svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div><h3 className="text-2xl font-semibold mb-4 text-gray-900">Morphometric Analysis</h3><p className="text-gray-600 leading-relaxed">Precise estimation of Lower Jaw Total Length (LJTL) from Pectoral Dorsal Length (PDL) measurements</p></>}
                {i === 2 && <><div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6"><svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div><h3 className="text-2xl font-semibold mb-4 text-gray-900">Mobile Application</h3><p className="text-gray-600 leading-relaxed">User-friendly mobile app for real-time species identification and size estimation in the field</p></>}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Methodology Section */}
      <motion.section
        id="methodology"
        className="py-24 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Methodology
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Step 1: Dataset & Preprocessing */}
            <motion.div
              className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-blue-100 hover:shadow-2xl transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.04 }}
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full shadow">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Dataset & Preprocessing</h3>
              <p className="text-gray-700 mb-4 text-sm text-center">
                Data was collected from field measurements and images by NARA scientists, plus public datasets. 650 PDL and LJTL measurements (Indo-Pacific Sailfish) and ~500 images per species were used. Data augmentation (rotation, scaling, brightness, contrast, noise) improved model robustness.
              </p>
              <motion.div
                className="w-full flex justify-center mb-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image src={Fish} alt="PDL and LJTL diagram" className="rounded-xl border border-blue-200 shadow-md max-h-48 object-contain" />
              </motion.div>
              <span className="text-xs text-gray-500 text-center">Illustration of Pectoral Dorsal Length (PDL) and Lower Jaw Total Length (LJTL) measurements in Indo-Pacific Sailfish.</span>
            </motion.div>
            {/* Step 2: ML Model & Training */}
            <motion.div
              className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-blue-100 hover:shadow-2xl transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.04 }}
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full shadow">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4h-1m4 0h-1v4h-1" /></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Machine Learning Model & Training</h3>
              <p className="text-gray-700 text-sm text-center">
                YOLO (for species identification) and linear regression (for LJTL prediction) were trained on the dataset. Preprocessing included OpenCV edge detection, noise reduction, and contrast enhancement. Models were trained/validated with k-fold cross-validation and bias mitigation. Hosted on Google Cloud for real-time inference.
              </p>
            </motion.div>
            {/* Step 3: Mobile App Development */}
            <motion.div
              className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-blue-100 hover:shadow-2xl transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.04 }}
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full shadow">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4H7zm0 0v2a2 2 0 002 2h6a2 2 0 002-2v-2" /></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Mobile Application Development</h3>
              <p className="text-gray-700 text-sm text-center">
                Built with React Native for Android/iOS. Users can capture/upload images for species ID (YOLO) or enter PDL for LJTL prediction (regression). Firebase handles authentication and data, while GCP hosts the models for real-time results in the field.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        id="about"
        className="py-24 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100" variants={fadeInUp} whileHover={{ scale: 1.04 }}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To develop an advanced fish identification system that helps researchers, 
                marine biologists, and enthusiasts accurately identify and study fish species.
              </p>
            </motion.div>
            <motion.div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100" variants={fadeInUp} whileHover={{ scale: 1.04 }}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading platform for fish species identification and 
                contribute to marine life conservation through technology.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <motion.div className="max-w-2xl mx-auto" variants={fadeInUp}>
            <form className="space-y-8 bg-white p-8 rounded-2xl shadow-xl">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Fish Identification</h3>
              <p className="text-gray-400">
                Advanced AI-powered solution for accurate fish species identification
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#scope" className="text-gray-400 hover:text-white transition-colors">Project Scope</a></li>
                <li><a href="#methodology" className="text-gray-400 hover:text-white transition-colors">Methodology</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@fishid.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 123 Fish Street, Ocean City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fish Identification System. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
