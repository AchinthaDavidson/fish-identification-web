import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fish from "../asset/fish.jpg";
import Fish1 from "../asset/1.jpg";
import Fish2 from "../asset/2.jpg";
import Fish3 from "../asset/3.jpg";
import Member1 from "../asset/team/1.png";
import Member2 from "../asset/team/2.png";
import Member3 from "../asset/team/3.jpg";
import Member4 from "../asset/team/4.png";

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

      {/* Literature Survey Section */}
      <motion.section
        id="literature"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Literature Survey
          </h2>
          <motion.div className="max-w-4xl mx-auto space-y-8 text-gray-600 leading-relaxed" variants={fadeInUp}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-lg mb-6">
                In recent years, significant attention has been directed toward the use of image processing 
                and machine learning techniques in automating fish identification. Researchers have 
                explored deep learning approaches to enhance accuracy in species recognition, especially where traditional manual methods are insufficient.
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Deep Learning Approaches</h3>
                  <p className="text-gray-700">
                    Zhang et al. (2020) proposed a convolutional neural network (CNN) for fish classification, which achieved high 
                    accuracy but relied heavily on large, annotated datasets. While effective in controlled 
                    environments, these models often perform poorly in field conditions with occlusions, low 
                    lighting, or partial remains.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Vision Transformers</h3>
                  <p className="text-gray-700">
                    Li et al. (2021) introduced Vision Transformers (ViTs) for visual recognition tasks, showing improved performance over CNNs in 
                    complex image classification scenarios. However, ViTs typically require large-scale 
                    datasets and high computational resources, limiting their deployment in low-power 
                    devices or mobile platforms commonly used in fisheries monitoring.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Object Detection Methods</h3>
                  <p className="text-gray-700">
                    Nguyen et al. (2019) applied YOLO-based object detection to identify shark fins in 
                    images to assist in combatting illegal wildlife trade. Their method proved effective for 
                    detecting distinctive shapes like fins but struggled when dealing with species that exhibit 
                    high morphological similarity.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Traditional Measurement Methods</h3>
                  <p className="text-gray-700">
                    Traditional methods for estimating fish size have relied on morphometric conversions 
                    using physical measurements. For instance, in the case of the Indo-Pacific Sailfish, 
                    researchers like Haputhantri and Perera derived formulas converting specific body part 
                    lengths—such as the Pectoral Dorsal Length (PDL)—into full-body lengths like Lower 
                    Jaw to Tail Fork Length (LJTL).
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Computer Vision Applications</h3>
                  <p className="text-gray-700">
                    Fish size estimation using computer vision has gained traction as an alternative to manual 
                    measurement. Monkman et al. employed Region-based CNNs (R-CNN) to estimate fish 
                    lengths from images, demonstrating promising results even under variable lighting and occlusion.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Mobile Applications</h3>
                  <p className="text-gray-700">
                    Mobile-based fish identification apps such as FishID and AquaSnap utilize deep learning 
                    models to offer real-time recognition and basic measurements. These applications have 
                    made significant progress in simplifying field data collection, reducing reliance on 
                    manual logs and expert knowledge.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Current Limitations</h3>
                <p className="text-gray-700">
                  While these existing systems and approaches have advanced the field of fish 
                  identification and measurement, several limitations persist. High dependency on large 
                  labeled datasets, poor generalizability in diverse field conditions, computational 
                  constraints for mobile use, and limited species coverage continue to hinder their 
                  effectiveness. Additionally, the lack of integrated solutions that handle both species 
                  identification and accurate size estimation from partial remains presents a gap in meeting 
                  the practical demands of fisheries enforcement and stock management in countries like 
                  Sri Lanka.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Research Gap Section */}
      <motion.section
        id="research-gap"
        className="py-24 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Research Gap
          </h2>
          <motion.div className="max-w-4xl mx-auto space-y-8" variants={fadeInUp}>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <p className="text-lg text-gray-700 mb-8">
                Despite significant advancements in image-based fish species identification and size 
                estimation, several key gaps remain in the current body of research—particularly in 
                applying these technologies to practical, real-world scenarios like those found in Sri 
                Lanka's fisheries sector.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Narrow Species Coverage</h3>
                  </div>
                  <p className="text-gray-600">
                    Many existing studies focus on a limited number of commonly available and easily distinguishable fish species. 
                    There is insufficient focus on ornamental and demersal species, which are of high economic value in 
                    Sri Lanka but more difficult to distinguish due to subtle morphological features.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Mobile Solutions Gap</h3>
                  </div>
                  <p className="text-gray-600">
                    Most current models are developed and tested in controlled environments using high-performance 
                    hardware, limiting their practical application in field conditions. Tools optimized 
                    for real-time performance on mobile devices are largely absent.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Fragmented Systems</h3>
                  </div>
                  <p className="text-gray-600">
                    Fish species identification and size estimation are typically addressed as separate tasks using distinct tools and models. 
                    This fragmentation reduces operational efficiency and accuracy, particularly in fast-paced field environments.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Partial Image Limitations</h3>
                  </div>
                  <p className="text-gray-600">
                    In real fisheries scenarios, fish specimens are often cut into parts, especially large species like billfish. 
                    Existing systems primarily rely on full-body images, with limited research into identifying species and estimating 
                    size from partial images.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold">5</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Low Adaptability</h3>
                  </div>
                  <p className="text-gray-600">
                    Traditional CNN-based models depend on large, well-labeled datasets, which are often unavailable for rare or region-specific 
                    species. This results in poor adaptability and increased retraining requirements.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold">6</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Legal Compliance Integration</h3>
                  </div>
                  <p className="text-gray-600">
                    There is a distinct lack of tools that connect biological identification with regulatory frameworks. 
                    This is especially important for enforcing export laws and international trade regulations 
                    concerning protected species like sharks and billfish.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Objectives Section */}
      <motion.section
        id="objectives"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Project Objectives
          </h2>
          <motion.div className="max-w-4xl mx-auto space-y-12" variants={fadeInUp}>
            {/* Main Objective */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Main Objective</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To design and develop a mobile-compatible AI-driven system for fish identification, size 
                estimation, freshness assessment, and legality verification, using real-world images 
                including partial or low-quality inputs aligned with Sri Lankan regulatory standards and 
                conservation efforts.
              </p>
            </div>

            {/* Specific Objectives */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Specific Objectives</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Marine Species Identification</h4>
                      <p className="text-gray-600">
                        Train a Vision Transformer (ViT)-based model to recognize marine species, 
                        particularly billfish and sharks, from full or partial images under varying 
                        environmental conditions. The model will be trained using a diverse dataset collected 
                        from NARA and local fisheries.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Size Estimation from Partial Length</h4>
                      <p className="text-gray-600">
                        Develop machine learning algorithms that can predict the total length of fish (e.g., 
                        billfish) using incomplete lengths, which is essential for monitoring quotas, enforcing 
                        regulations, and supporting marine research.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Freshness and Quality Assessment</h4>
                      <p className="text-gray-600">
                        Design a deep learning model that performs multi-attribute freshness assessment in 
                        real time by analyzing critical features such as gill redness and eye reflectivity. This 
                        model will utilize a hybrid of CNN and Vision Transformer architectures with 
                        attention mechanisms for localized and global feature extraction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-semibold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Cloud-Based Data Management</h4>
                      <p className="text-gray-600">
                        Utilize Google Cloud Platform (GCP) and Firebase for storing and managing image 
                        data, model outputs, and user logs. This provides a secure, scalable infrastructure for 
                        real-time data access and analytics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
          <motion.div className="max-w-4xl mx-auto space-y-12" variants={fadeInUp}>
            {/* Overview */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">System Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The mobile application developed for this research offers five main features: Billfish Size Estimation, 
                Billfish Identification, Demersal Fish Identification, Shark Species Identification, and Fish Quality Assessment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The software solution combines advanced machine learning techniques with a mobile application to support 
                fish species identification, size estimation, and quality assessment. Designed for use by field officers 
                and research institutions, the system enhances the accuracy and efficiency of fish trade management in Sri Lanka.
              </p>
            </div>

            {/* Technical Architecture */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Architecture</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Backend Infrastructure</h4>
                  </div>
                  <p className="text-gray-700">
                    The machine learning models were trained using Google Colab with free GPU access, and later integrated 
                    into a Flask-based backend. These models were deployed on Google Cloud Platform (GCP) using Cloud 
                    Functions and App Engine to ensure scalability and easy access.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Mobile Application</h4>
                  </div>
                  <p className="text-gray-700">
                    Built with React Native and the Expo framework, the mobile app allows users to capture or upload images, 
                    input relevant measurements, and receive real-time predictions. Axios handles communication between the 
                    frontend and the backend APIs hosted on GCP.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Features */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Features & Implementation</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Billfish Size Estimation</h4>
                      <p className="text-gray-600">
                        Utilizes linear regression based on pre-dorsal length measurements to accurately estimate 
                        total fish length, crucial for monitoring quotas and enforcing regulations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Species Identification</h4>
                      <p className="text-gray-600">
                        Implements YOLOv8 for billfish and demersal fish identification, combined with CNN-based 
                        similarity learning for shark species recognition, ensuring accurate classification even 
                        with partial images.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Assessment</h4>
                      <p className="text-gray-600">
                        Employs advanced image processing techniques to analyze visual cues such as texture and color, 
                        providing real-time assessment of fish quality and freshness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Our Team Section */}
      <motion.section
        id="team"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <Image src={Member1} alt="Member 1" width={160} height={160} className="object-cover rounded-2xl shadow-lg mb-4 border-4 border-blue-100" />
              <h4 className="text-xl font-semibold text-gray-900">Imandi Aluthge</h4>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Member2} alt="Member 2" width={160} height={160} className="object-cover rounded-2xl shadow-lg mb-4 border-4 border-blue-100" />
              <h4 className="text-xl font-semibold text-gray-900">Ashvini Wegodapola</h4>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Member3} alt="Member 3" width={160} height={160} className="object-cover rounded-2xl shadow-lg mb-4 border-4 border-blue-100" />
              <h4 className="text-xl font-semibold text-gray-900">Achintha Wijethunga</h4>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Member4} alt="Member 4" width={160} height={160} className="object-cover rounded-2xl shadow-lg mb-4 border-4 border-blue-100" />
              <h4 className="text-xl font-semibold text-gray-900">Chalith Bandara</h4>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Documents Section */}
      <motion.section
        id="documents"
        className="py-24 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Project Documents
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Presentations */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Presentations</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span>Proposal Presentation - July 2024</span>
                  <a href="https://docs.google.com/presentation/d/186bD6oj7hn_3OzhLVCOdCvm5mmEYL1z2/edit?usp=sharing&ouid=101582629438980516219&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">View</a>
                </li>
                <li className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span>Progress Presentation I - December 2024</span>
                  <a href="https://docs.google.com/presentation/d/186bD6oj7hn_3OzhLVCOdCvm5mmEYL1z2/edit?usp=sharing&ouid=101582629438980516219&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">View</a>
                </li>
                <li className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span>Progress Presentation II - March 2025</span>
                  <a href="https://docs.google.com/presentation/d/1lwENaEAvyEjqQPmjrZ85zsfxAxGeWzdL/edit?usp=sharing&ouid=101582629438980516219&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">View</a>
                </li>
                <li className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span>Final Presentation - May 2025</span>
                  <a href="https://docs.google.com/presentation/d/1s3_1NN43EvCRjXoJMMyYi78vkiLLU6H5/edit?usp=drive_link&ouid=101582629438980516219&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">View</a>
                </li>
              </ul>
            </div>
            {/* Documents */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Documents</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span>Topic Assessment - May 2024</span>
                  <a href="https://drive.google.com/file/d/1TFLRVOA9Czi67GOre9ET-2X0wCwadWo_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">View</a>
                </li>
                <li className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span>Project Proposal - August 2024</span>
                  <a href="https://drive.google.com/drive/folders/1y11LRGRxpABt4tQnSbyEqkWpinR1lD3P?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">View</a>
                </li>
                <li className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span>Deployment Report - May 2025</span>
                  <a href="https://drive.google.com/file/d/1IZx9wtM2vII_KijvtxQIEFzp3Xzdbinz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">View</a>
                </li>
                <li className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span>Research Paper - March 2025</span>
                  <a href="https://drive.google.com/file/d/1rXAefk-qZvJ9Ms9qYhqm5kjeuwqks-rQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">View</a>
                </li>
                <li className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span>Final Report - April 2025</span>
                  <a href="https://drive.google.com/drive/folders/1rIIOBaCVv7ecjwE-4Niki17mQM3LKcfb?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">View</a>
                </li>
                <li className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span>Poster - May 2025</span>
                  <a href="https://drive.google.com/file/d/1QVZcxzmaxVzJoha5MpXTuDnZWkK9pFQJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">View</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Milestones and Timeline Section */}
      <motion.section
        id="milestones"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Milestones and Timeline in Brief
          </h2>
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l-4 border-blue-200 space-y-12">
              <li className="ml-8">
                <div className="absolute -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">Jul</div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Proposal <span className="text-sm text-gray-500">(July 2024)</span></h3>
                  <p className="text-gray-700 mb-2">A Project Proposal is presented to potential sponsors/clients to receive funding and to get the project approved.</p>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Marks Allocated: 6</span>
                </div>
              </li>
              <li className="ml-8">
                <div className="absolute -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">Dec</div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Presentation I <span className="text-sm text-gray-500">(December 2024)</span></h3>
                  <p className="text-gray-700 mb-2">Progress Presentation I reviews the 50% completetion status of the project.</p>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Marks Allocated: 6</span>
                </div>
              </li>
              <li className="ml-8">
                <div className="absolute -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">Mar</div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Paper <span className="text-sm text-gray-500">(March 2025)</span></h3>
                  <p className="text-gray-700 mb-2">Research paper based on the Project completed</p>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Marks Allocated: 10</span>
                </div>
              </li>
              <li className="ml-8">
                <div className="absolute -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">Mar</div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Presentation II <span className="text-sm text-gray-500">(March 2025)</span></h3>
                  <p className="text-gray-700 mb-2">Progress Presentation II reviews the 90% completetion status demonstration of the project.</p>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Marks Allocated: 18</span>
                </div>
              </li>
              <li className="ml-8">
                <div className="absolute -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">Apr</div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Final Report <span className="text-sm text-gray-500">(April 2025)</span></h3>
                  <p className="text-gray-700 mb-2">Individual and group reports containing details of the completed project</p>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Marks Allocated: 19</span>
                </div>
              </li>
              <li className="ml-8">
                <div className="absolute -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">May</div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Assessment <span className="text-sm text-gray-500">(May 2025)</span></h3>
                  <p className="text-gray-700 mb-2">Website to promote the research project as a whole and give related information.</p>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Marks Allocated: 2</span>
                </div>
              </li>
              <li className="ml-8">
                <div className="absolute -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">May</div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Final Presentation & Viva <span className="text-sm text-gray-500">(May 2025)</span></h3>
                  <p className="text-gray-700 mb-2">Final presentation and viva is held to assess each member individually.</p>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Marks Allocated: 20</span>
                </div>
              </li>
              <li className="ml-8">
                <div className="absolute -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">Jun</div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Logbook <span className="text-sm text-gray-500">(June 2025)</span></h3>
                  <p className="text-gray-700 mb-2">Project status and completion.</p>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Marks Allocated: 3</span>
                </div>
              </li>
            </ol>
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
