"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code,
  Smartphone,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";

export default function SpedyonPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance Optimization",
      description:
        "Lightning-fast solutions optimized for speed, SEO, and user engagement to help your business grow.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with your users in mind to maximize conversions and satisfaction.",
    },
  ];

  const projects = [
    {
      title: "Jobifyy",
      category: "Mobile App Development",
      description:
        "All-in-one service marketplace connecting customers with trusted professionals for home services, beauty, IT support, and more.",
      image: "/jobiffy.webp",
      // image:
      //   "https://play-lh.googleusercontent.com/ZcgLasu95aKsUNUYkU-LL-snt6qBH_wZo2IpOEXWIpjGJodYzsIUd-pQkP8LKHkobDw=w526-h296-rw", // Jobifyy screenshot (fallback if needed)
      link: "https://play.google.com/store/apps/details?id=com.jobifyy.user",
    },
    {
      title: "Jobifyy Partner",
      category: "Mobile App Development",
      description:
        "Companion app for service providers to manage jobs, schedules, bookings, and earnings in real-time.",
      image: "/jobifyyy.webp",
      // image:
      //   "https://play-lh.googleusercontent.com/ZcgLasu95aKsUNUYkU-LL-snt6qBH_wZo2IpOEXWIpjGJodYzsIUd-pQkP8LKHkobDw=w526-h296-rw",
      link: "https://play.google.com/store/apps/details?id=com.jobifyy.admin",
    },
    {
      title: "Marvellex Wallet",
      category: "Mobile App Development",
      description:
        "Secure crypto wallet supporting Ethereum & Binance chains with WalletConnect and multi-chain features.",
      image:
        "https://images.sftcdn.net/images/t_app-cover-s-16-9,f_auto/p/20017839-4755-415a-bbd0-b46f58b7ed10/3326660058/marvellex-wallet-screenshot",
      link: "https://play.google.com/store/apps/details?id=io.marvellex",
    },
    {
      title: "Bajao: Music & Audiobooks",
      category: "Mobile App Development",
      description:
        "Pakistan's music streaming platform with millions of audio/video songs, audiobooks, and short reels.",
      image:
        "https://images.sftcdn.net/images/t_app-cover-s-16-9,f_auto/p/2d04ec23-b35a-4b12-ac23-09b491aaf88a/144420396/bajao-1-million-audio-and-video-songs-screenshot",
      link: "https://play.google.com/store/apps/details?id=bajao.music",
    },
    {
      title: "Vidly.tv",
      category: "Mobile App Development",
      description:
        "OTT platform streaming Pakistani movies, dramas, music, and Turkish series.",
      image:
        "https://play-lh.googleusercontent.com/ZcgLasu95aKsUNUYkU-LL-snt6qBH_wZo2IpOEXWIpjGJodYzsIUd-pQkP8LKHkobDw=w526-h296-rw",
      link: "https://play.google.com/store/apps/details?id=com.rockvillegroup.vidly",
    },
    {
      title: "Rabt: Digital Business Cards",
      category: "Mobile App Development",
      description:
        "Modern networking app for sharing digital business cards, contacts, and media via QR codes.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/dd/3f/f4/dd3ff419-98e1-4871-9a0d-591e0c440bea/AppIcon-0-1x_U007epad-0-1-0-sRGB-85-220-0.png/1200x630wa.png",
      link: "https://play.google.com/store/apps/details?id=com.rabt.digital",
    },
    {
      title: "Talent Tube (Mobile App)",
      category: "Mobile App Development",
      description:
        "Short-video talent marketplace where creators showcase skills and companies post immersive job stories.",
      image: "/tt.png",
      link: "https://play.google.com/store/apps/details?id=talent.tube.com",
    },
    {
      title: "Talent Tube Web Platform",
      category: "Web Development",
      description:
        "Full-featured web version of Talent Tube – responsive platform for job postings, creator profiles, video reels, and seamless hiring workflow across desktop and mobile browsers.",
      image: "/tt-web1.png",
      link: "https://tt.mlxsoft.com/",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <Zap className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Spedyon
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-purple-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-purple-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-purple-400 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left py-2 hover:text-purple-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 hover:text-purple-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left py-2 hover:text-purple-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 hover:text-purple-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Transform Your Ideas Into
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We craft exceptional web and mobile solutions that drive growth and
            exceed expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="border-2 border-purple-400 hover:bg-purple-400/10 px-8 py-4 rounded-full font-semibold text-lg transition-all inline-flex items-center justify-center"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing our latest mobile app work and success stories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <div
                  className="h-80 bg-cover bg-center flex items-center justify-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  {/* <Smartphone className="w-16 h-16 text-purple-300 opacity-50" /> */}
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-400 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center"
                  >
                    {project.category.includes("Mobile")
                      ? "View on Play Store"
                      : "Visit Website"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Choose Spedyon?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Expert team with 5+ years experience",
              "100% client satisfaction guarantee",
              "Agile development methodology",
              "On-time project delivery",
              "Post-launch support & maintenance",
              "Competitive pricing",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300">
              Ready to start your next project? Get in touch with us today!
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <div className="text-gray-400 hover:text-purple-400 cursor-pointer">
                    contact@spedyon.com
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <div className="text-gray-400 hover:text-purple-400 cursor-pointer">
                    +1 (234) 567-890
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/50"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/50"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/50"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/50 resize-none"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold">Spedyon</span>
          </div>
          <p className="text-gray-400">
            © 2025 Spedyon. All rights reserved. Crafting digital excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}
