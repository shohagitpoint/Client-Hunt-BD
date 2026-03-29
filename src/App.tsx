/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Mail, 
  Database, 
  BookOpen, 
  Layout, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Star, 
  ShieldCheck, 
  Zap,
  Menu,
  X,
  ChevronDown,
  Gift,
  Clock
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">Client Hunt <span className="text-blue-600">BD</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">ফিচারসমূহ</a>
          <a href="#package" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">প্যাকেজ</a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">প্রশ্নোত্তর</a>
          <a href="#order" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">অর্ডার করুন</a>
        </div>

        <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <a href="#features" className="text-base font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>ফিচারসমূহ</a>
              <a href="#package" className="text-base font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>প্যাকেজ</a>
              <a href="#faq" className="text-base font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>প্রশ্নোত্তর</a>
              <a href="#order" className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-semibold" onClick={() => setIsMenuOpen(false)}>অর্ডার করুন</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img 
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=2000" 
          alt="Sunset Background" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-100"
          >
            <Zap size={16} className="fill-blue-700" />
            <span>বাংলাদেশের সবচেয়ে বড় ক্লায়েন্ট ডাটা প্যাকেজ</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.2] mb-8"
          >
            ১০ মিলিয়ন ক্লায়েন্ট ডাটা <br />
            <span className="gradient-text">মাত্র ১,২৯৯৳</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            ফ্রিল্যান্সিং ও ডিজিটাল মার্কেটিং এর জন্য কমপ্লিট প্যাকেজ। ক্লায়েন্ট ডাটা, বাল্ক ইমেইল, কোর্স, টেমপ্লেট সবকিছু এক জায়গায়।
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#order" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group">
              অর্ডার করুন <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/8801791848497" className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} className="text-green-500" /> হোয়াটসঅ্যাপে কথা বলুন
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all"
          >
            <div className="flex items-center gap-2"><CheckCircle2 size={20} /> ১০০% ভেরিফাইড ডাটা</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={20} /> লাইফটাইম এক্সেস</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={20} /> ইনস্ট্যান্ট ডাউনলোড</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Database className="text-blue-600" />,
      title: "১০ মিলিয়ন ক্লায়েন্ট ডাটা",
      desc: "ইউএসএ, ইউকে, কানাডা সহ বিশ্বের বিভিন্ন দেশের টার্গেটেড ক্লায়েন্ট ডাটাবেস।"
    },
    {
      icon: <Mail className="text-purple-600" />,
      title: "৫০০ মিলিয়ন বাল্ক ইমেইল",
      desc: "ইমেইল মার্কেটিং এর জন্য বিশাল ওয়ার্ল্ডওয়াইড ইমেইল লিস্ট।"
    },
    {
      icon: <BookOpen className="text-green-600" />,
      title: "ফ্রি ইমেইল মার্কেটিং কোর্স",
      desc: "কিভাবে ক্লায়েন্টদের ইমেইল পাঠাবেন এবং কাজ পাবেন তার কমপ্লিট গাইড।"
    },
    {
      icon: <Layout className="text-orange-600" />,
      title: "হাই কনভার্টিং টেমপ্লেট",
      desc: "রেডি-টু-ইউজ ইমেইল টেমপ্লেট যা ব্যবহার করে দ্রুত রেসপন্স পাবেন।"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">প্যাকেজের মূল বৈশিষ্ট্যসমূহ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">আমাদের এই প্যাকেজে আপনি যা যা পাচ্ছেন তার একটি সংক্ষিপ্ত তালিকা নিচে দেওয়া হলো।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PackageDetails = () => {
  return (
    <section id="package" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">কেন আমাদের এই প্যাকেজটি সেরা?</h2>
            
            <div className="space-y-6">
              {[
                { title: "টার্গেটেড ডাটা", desc: "আমরা শুধুমাত্র একটিভ এবং টার্গেটেড ক্লায়েন্ট ডাটা প্রদান করি।" },
                { title: "সহজ ব্যবহার", desc: "সবকিছু এক্সেল শিটে সাজানো আছে, আপনি সহজেই ফিল্টার করতে পারবেন।" },
                { title: "সাপোর্ট", desc: "প্যাকেজটি ব্যবহার করতে কোন সমস্যা হলে আমাদের টিম আপনাকে সাহায্য করবে।" },
                { title: "সাশ্রয়ী মূল্য", desc: "এত বিশাল ডাটাবেস এবং কোর্স আপনি আর কোথাও এই দামে পাবেন না।" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-blue-600 rounded-3xl text-white flex items-center gap-6 shadow-xl shadow-blue-200">
              <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Gift size={32} />
              </div>
              <div>
                <p className="text-blue-100 text-sm font-medium">লিমিটেড অফার!</p>
                <h4 className="text-xl font-bold">আজই কিনলে পাচ্ছেন বোনাস টেমপ্লেট</h4>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-4 rounded-[2rem] shadow-2xl shadow-gray-200 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Data Analytics Dashboard" 
                className="rounded-2xl w-full h-auto shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                  <Star size={24} className="fill-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-lg">৪.৯/৫ রেটিং</p>
                  <p className="text-gray-500 text-sm">৫০০০+ হ্যাপি কাস্টমার</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="order" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-[3rem] p-8 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-gray-400">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">ফুল প্যাকেজ এক্সেস</h2>
            <p className="text-gray-400 text-lg mb-10">সবকিছু এক সাথে পান এবং আপনার ফ্রিল্যান্সিং ক্যারিয়ারকে নিয়ে যান পরবর্তী লেভেলে।</p>
            
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="text-gray-500 line-through text-2xl">৳৪,৯৯৯</span>
              <span className="text-5xl sm:text-7xl font-bold text-blue-400">৳১,২৯৯</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-blue-400" /> ১০ মিলিয়ন ডাটা
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-blue-400" /> ৫০০ মিলিয়ন ইমেইল
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-blue-400" /> ইমেইল মার্কেটিং কোর্স
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-blue-400" /> বোনাস টেমপ্লেট
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3 mb-6">
              এখনই অর্ডার করুন <ArrowRight size={24} />
            </button>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1.5"><ShieldCheck size={16} /> নিরাপদ পেমেন্ট</div>
              <div className="flex items-center gap-1.5"><Clock size={16} /> ২৪/৭ সাপোর্ট</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "আমি কিভাবে ডাটাগুলো পাবো?",
      a: "পেমেন্ট সম্পন্ন করার সাথে সাথেই আপনি একটি ডাউনলোড লিঙ্ক পাবেন যেখানে সবগুলো ফাইল সাজানো থাকবে।"
    },
    {
      q: "ডাটাগুলো কি ভেরিফাইড?",
      a: "হ্যাঁ, আমাদের ডাটাবেস নিয়মিত আপডেট করা হয় এবং প্রায় ৯০-৯৫% ডাটা একটিভ থাকে।"
    },
    {
      q: "আমি কি মোবাইল দিয়ে ব্যবহার করতে পারবো?",
      a: "হ্যাঁ, আপনি মোবাইল বা কম্পিউটার যেকোনো ডিভাইস দিয়েই এই ডাটাগুলো ব্যবহার করতে পারবেন।"
    },
    {
      q: "পেমেন্ট করার পর কোন সমস্যা হলে কি করবো?",
      a: "আমাদের সাপোর্ট টিম ২৪/৭ আপনার সেবায় নিয়োজিত। আপনি যেকোনো সময় আমাদের হোয়াটসঅ্যাপে মেসেজ দিতে পারেন।"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">সাধারণ কিছু প্রশ্ন</h2>
          <p className="text-gray-600">আপনার মনে থাকা কিছু কমন প্রশ্নের উত্তর এখানে দেওয়া হলো।</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                <ChevronDown size={20} className={`text-gray-400 transition-transform ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-gray-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">Client Hunt <span className="text-blue-600">BD</span></span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              বাংলাদেশের সবচেয়ে বড় এবং বিশ্বস্ত ক্লায়েন্ট ডাটা প্রোভাইডার। আমরা ফ্রিল্যান্সারদের সফলতায় বিশ্বাসী।
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all">
                <Star size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">লিঙ্কসমূহ</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-500 hover:text-blue-600 transition-colors">ফিচারসমূহ</a></li>
              <li><a href="#package" className="text-gray-500 hover:text-blue-600 transition-colors">প্যাকেজ</a></li>
              <li><a href="#faq" className="text-gray-500 hover:text-blue-600 transition-colors">প্রশ্নোত্তর</a></li>
              <li><a href="#order" className="text-gray-500 hover:text-blue-600 transition-colors">অর্ডার করুন</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500"><Phone size={18} className="text-blue-600" /> +৮৮০ ১৭৯১৮ ৪৮৪৯৭</li>
              <li className="flex items-center gap-3 text-gray-500"><Mail size={18} className="text-blue-600" /> shohagitpoint@gmail.com</li>
              <li className="flex items-center gap-3 text-gray-500"><MessageCircle size={18} className="text-blue-600" /> হোয়াটসঅ্যাপ সাপোর্ট</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">নিউজলেটার</h4>
            <p className="text-gray-500 text-sm mb-4">নতুন অফার এবং আপডেট পেতে সাবস্ক্রাইব করুন।</p>
            <div className="flex gap-2">
              <input type="email" placeholder="আপনার ইমেইল" className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all">জয়েন</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© ২০২৬ Client Hunt BD. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600 transition-colors">প্রাইভেসি পলিসি</a>
            <a href="#" className="hover:text-blue-600 transition-colors">টার্মস এন্ড কন্ডিশন</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingOrder = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-md"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Zap size={24} className="fill-white" />
              </div>
              <div>
                <p className="text-gray-900 font-bold leading-none">৳১,২৯৯</p>
                <p className="text-gray-500 text-xs mt-1">ফুল প্যাকেজ এক্সেস</p>
              </div>
            </div>
            <a href="#order" className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              অর্ডার করুন
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PackageDetails />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <FloatingOrder />
    </div>
  );
}
