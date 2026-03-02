"use client";

import { useState, useEffect } from "react";
import {
  BookOpen, Briefcase, Wallet, Megaphone, Scale, TrendingUp,
  Lightbulb, ShoppingBag, UsersRound, CheckCircle2, ChevronRight,
  Star, Target, Zap, Sparkles, Rocket,
  FileText, Paperclip, ClipboardList, Coins, Receipt, PiggyBank,
  Shield, MessageSquareWarning, BookOpenCheck, BrainCircuit,
  Palette, Camera, Paintbrush, BadgeDollarSign, ShoppingCart, Tag,
  Globe, Radio, Network, Heart, Users, Coffee, Code2, Database, LayoutTemplate,
  Glasses, Crown, HardHat, GraduationCap, Wand2, Store, MicVocal
} from "lucide-react";

// LINK GOOGLE FORM UTAMA (Ganti dengan link aslimu)
const GFORM_LINK = "https://forms.gle/LINK_GFORM_KAMU_DISINI";

const playbookData = [
  {
    id: "overview",
    name: "Grand Design",
    icon: BookOpen,
    tagline: "Visi, Misi & Values 2026 - 2027",
    themeColor: "#DD6B4D", 
    bgParticles: [Code2, Database, LayoutTemplate],
    description: "Mewujudkan HIMASI sebagai organisasi mahasiswa Sistem Informasi yang profesional, inklusif, dan berdampak dalam meningkatkan kualitas mahasiswa.",
    isOverview: true,
    mascotOutfit: Sparkles,
    mascotQuote: "Welcome to HIMASI! Siap eksplorasi? ✨"
  },
  {
    id: "secretary",
    name: "Secretary",
    icon: Briefcase,
    tagline: "Jantung Administrasi Organisasi",
    themeColor: "#0D9488", 
    bgParticles: [FileText, Paperclip, ClipboardList],
    skills: ["Administrasi", "Manajemen Waktu", "Ms. Office", "Ketelitian Tinggi"],
    description: "Berfokus pada manajemen kesekretariatan dan administrasi HIMASI. Dipercaya mengelola surat-menyurat, pengarsipan dokumen, dan penyusunan notulen rapat.",
    tasks: [
      "Menyusun dan merapikan proposal serta LPJ setiap program kerja secara teliti.",
      "Mencatat notulensi setiap rapat pleno maupun rapat internal pengurus.",
      "Mengelola tata letak dan pengarsipan digital (Google Drive) HIMASI.",
      "Membuat nomor surat, surat izin, undangan, dan regulasi administrasi lainnya."
    ],
    mascotOutfit: Glasses,
    mascotQuote: "Ssstt... lagi fokus nyusun LPJ nih 🤓📝"
  },
  {
    id: "treasurer",
    name: "Treasurer",
    icon: Wallet,
    tagline: "Pengendali Sirkulasi Finansial",
    themeColor: "#10B981", 
    bgParticles: [Coins, Receipt, PiggyBank],
    skills: ["Manajemen Keuangan", "Ms. Excel", "Integritas", "Analisis Anggaran"],
    description: "Treasurer bertanggung jawab atas pengelolaan keuangan HIMASI. memiliki tugas untuk mencatat pemasukan dan pengeluaran, menyusun laporan keuangan.",
    tasks: [
      "Mencatat setiap arus kas masuk dan keluar secara transparan di buku kas.",
      "Berkoordinasi dengan ketua pelaksana untuk budgeting anggaran setiap acara.",
      "Menagih dan mengelola uang kas pengurus secara berkala.",
      "Menyusun laporan keuangan bulanan untuk dilaporkan ke organisasi."
    ],
    mascotOutfit: Crown,
    mascotQuote: "Uang kas aman terkendali boss! 💸👑"
  },
  {
    id: "student-advocacy",
    name: "Student Advocacy",
    icon: Scale,
    tagline: "Garda Terdepan Kesejahteraan",
    themeColor: "#E11D48", 
    bgParticles: [Shield, Scale, MessageSquareWarning],
    skills: ["Empati", "Problem Solving", "Komunikasi", "Negosiasi"],
    description: "Memberikan layanan serta mengupayakan penyelesaian permasalahan akademik mahasiswa Sistem Informasi.",
    keyProgram: "SI CARE",
    tasks: [
      "Menjalankan program SI CARE untuk melayani keluh kesah mahasiswa SI.",
      "Mendampingi mahasiswa yang mengalami kesulitan dalam proses akademik.",
      "Melakukan audiensi dengan pihak birokrasi kampus mewakili suara mahasiswa.",
      "Membuat survei kepuasan terhadap fasilitas dan pembelajaran di STT NF."
    ],
    mascotOutfit: HardHat,
    mascotQuote: "Ada keluhan dosen? Sini lapor aku! 🛡️👷‍♂️"
  },
  {
    id: "study-development",
    name: "Study Development",
    icon: TrendingUp,
    tagline: "Fasilitator Potensi Mahasiswa",
    themeColor: "#7C3AED", 
    bgParticles: [Rocket, BookOpenCheck, BrainCircuit],
    skills: ["Project Management", "Riset Akademik", "Event Organizing"],
    description: "Bertugas untuk pengembangan diri mahasiswa Sistem Informasi dalam bidang akademik maupun non-akademik.",
    keyProgram: "SI FEST & OSJUR",
    tasks: [
      "Mengeksekusi program kerja unggulan seperti SI FEST dan Kaderisasi OSJUR.",
      "Mengelola fasilitas kelompok belajar (Study Club) untuk 3 peminatan Sistem Informasi.",
      "Mengadakan bootcamp, workshop, atau pelatihan hardskill dan softskill.",
      "Berkoordinasi dengan dosen/praktisi untuk menjadi pemateri pengembangan."
    ],
    mascotOutfit: GraduationCap,
    mascotQuote: "Push rank IPK bareng yuk! 🚀🎓"
  },
  {
    id: "brand-communication",
    name: "Brand Communication",
    icon: Lightbulb,
    tagline: "Pusat Informasi & Kreator Visual",
    themeColor: "#C026D3", 
    bgParticles: [Palette, Camera, Paintbrush],
    skills: ["Desain Grafis", "Copywriting", "Kreativitas", "Social Media"],
    description: "Berperan sebagai pusat informasi yang menyajikan berbagai konten dengan kreativitas agar lebih menarik.",
    tasks: [
      "Mendesain aset visual acara sesuai identitas warna HIMASI (Biru & Oranye).",
      "Merancang 'Content Calendar' bulanan untuk media sosial HIMASI.",
      "Menulis caption yang engaging, informatif, dan tidak kaku.",
      "Mendokumentasikan (foto/video) setiap kegiatan HIMASI untuk publikasi."
    ],
    mascotOutfit: Wand2,
    mascotQuote: "Mikirin ide konten sampe meledak 🤯🎨"
  },
  {
    id: "marketing-communication",
    name: "Marketing Communication",
    icon: ShoppingBag,
    tagline: "Motor Penggerak Finansial Mandiri",
    themeColor: "#D97706", 
    bgParticles: [BadgeDollarSign, ShoppingCart, Tag],
    skills: ["Digital Marketing", "Business Dev", "Analisis Tren"],
    description: "Berfokus pada pengembangan branding produk dan penciptaan income HIMASI.",
    specificRoles: [
      "Bertanggung jawab dalam perencanaan produk dan strategi yang berpotensi menghasilkan income.",
      "Bertanggung jawab dalam pembuatan konten dan penguatan citra produk yang dipasarkan."
    ],
    tasks: [
      "Melakukan riset tren untuk menciptakan merchandise HIMASI yang diminati.",
      "Mencari vendor produksi yang berkualitas dengan HPP (Harga Pokok) terbaik.",
      "Membuat strategi campaign promosi (Pre-Order) yang terstruktur.",
      "Mencari peluang kerja sama sponsorship yang menguntungkan finansial HIMASI."
    ],
    mascotOutfit: Store,
    mascotQuote: "Beli merch HIMASI dong kak! Muraaah~ 🛒🔥"
  },
  {
    id: "public-relation",
    name: "Public Relation",
    icon: Megaphone,
    tagline: "Wajah dan Suara Organisasi",
    themeColor: "#0891B2", 
    bgParticles: [Globe, Radio, Network],
    skills: ["Public Speaking", "Networking", "Tata Krama", "Manajemen Relasi"],
    description: "Penghubung antara HIMASI dan pihak eksternal dengan membangun komunikasi yang efektif serta menjalin kerja sama.",
    keyProgram: "SGTS & VISIT COMPANY",
    tasks: [
      "Mengatur program kerja unggulan 'Visit Company' dan 'SI Goes To School'.",
      "Menjaga hubungan harmonis dengan Himpunan Jurusan lain dan BEM STT NF.",
      "Menjadi representasi HIMASI saat menerima kunjungan studi banding tamu.",
      "Menyusun dan merawat database relasi eksternal secara profesional."
    ],
    mascotOutfit: MicVocal,
    mascotQuote: "Testing 1.. 2.. 3.. Check sound! 🎙️🌍"
  },
  {
    id: "hrm",
    name: "Human Resource",
    icon: UsersRound,
    tagline: "Penjaga Harmoni Internal",
    themeColor: "#EF4444", 
    bgParticles: [Heart, Users, Coffee],
    skills: ["Empati", "Conflict Resolution", "Leadership", "Team Building"],
    description: "Menciptakan dan mengembangkan lingkungan kepengurusan HIMASI yang harmonis, nyaman, serta mendukung kolaborasi.",
    tasks: [
      "Merancang acara internal bonding (Makrab/Upgrading) pengurus HIMASI.",
      "Memantau KPI (Key Performance Indicator) kinerja setiap staff dan divisi.",
      "Menjadi mediator netral jika terjadi konflik internal antar pengurus.",
      "Memastikan kesejahteraan mental dan keaktifan seluruh anggota pengurus."
    ],
    mascotOutfit: Coffee,
    mascotQuote: "Ngopi dulu dungs biar gak burnout ☕❤️"
  },
];

export default function Playbook() {
  const [activeTab, setActiveTab] = useState(playbookData[0]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMascotTalking, setIsMascotTalking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setIsMascotTalking(true);
    const timer = setTimeout(() => setIsMascotTalking(false), 6000);
    return () => clearTimeout(timer);
  }, [activeTab.id]);

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        .animate-blink { animation: blink 4s infinite; }
        
        @keyframes float-character {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        .animate-float-character { animation: float-character 4s ease-in-out infinite; }
      `}</style>

      <div className="flex flex-col md:flex-row h-screen bg-[#F4F7FB] font-sans relative overflow-hidden transition-colors duration-1000 selection:bg-[#DD6B4D] selection:text-white">
        
        {/* Latar Belakang & Aura Dinamis */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05] transition-opacity duration-1000" style={{ backgroundImage: `radial-gradient(${activeTab.themeColor} 2px, transparent 2px)`, backgroundSize: '30px 30px' }}></div>
        <div className="fixed top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full pointer-events-none z-0 mix-blend-multiply opacity-15 filter blur-[120px] transition-all duration-1000 ease-in-out" style={{ backgroundColor: activeTab.themeColor }}></div>
        <div className="hidden md:block fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 mix-blend-screen opacity-40 transition-transform duration-700 ease-out filter blur-[100px]" style={{ background: `radial-gradient(circle, ${activeTab.themeColor} 0%, transparent 70%)`, transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)` }}></div>

        {activeTab.bgParticles && (
          <div key={`particles-${activeTab.id}`} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {(() => { const P1 = activeTab.bgParticles[0]; return <P1 className="absolute top-[15%] left-[20%] w-20 h-20 opacity-10 animate-[bounce_8s_infinite]" style={{ color: activeTab.themeColor }} /> })()}
            {(() => { const P2 = activeTab.bgParticles[1]; return <P2 className="absolute bottom-[20%] right-[15%] w-32 h-32 opacity-[0.07] animate-[bounce_12s_infinite_reverse]" style={{ color: activeTab.themeColor }} /> })()}
            {(() => { const P3 = activeTab.bgParticles[2]; return <P3 className="absolute top-[60%] left-[10%] w-16 h-16 opacity-10 animate-[pulse_6s_infinite]" style={{ color: activeTab.themeColor }} /> })()}
          </div>
        )}

        {/* 📱 MOBILE NAVIGATION */}
        <div className="md:hidden sticky top-0 z-40 bg-[#1C4B82]/95 backdrop-blur-xl shadow-lg pt-4 transition-colors duration-1000 border-b border-white/10">
          <div className="px-6 flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-white tracking-tight drop-shadow-md">HIMASI</h1>
              <Sparkles className="w-4 h-4 animate-pulse" style={{ color: activeTab.themeColor }} />
            </div>
            <div className="text-[10px] font-bold px-3 py-1.5 rounded-full text-white tracking-widest uppercase shadow-lg transition-colors duration-1000" style={{ backgroundColor: activeTab.themeColor }}>
              OPREC 26/27
            </div>
          </div>
          
          <nav className="flex overflow-x-auto px-4 pb-4 gap-3 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {playbookData.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className={`snap-start shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl transition-all duration-300 text-sm font-bold border backdrop-blur-md shadow-sm ${
                    isActive ? "bg-white text-[#1C4B82] border-white scale-105" : "bg-white/10 text-blue-50 border-white/5 hover:bg-white/20"
                  }`}
                >
                  <IconComponent className="w-4 h-4" style={{ color: isActive ? item.themeColor : "inherit" }} />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* 💻 DESKTOP SIDEBAR */}
        <aside className="hidden md:flex w-80 bg-[#1C4B82]/95 backdrop-blur-2xl text-white flex-col h-full z-20 shrink-0 shadow-[10px_0_40px_rgba(0,0,0,0.15)] border-r border-white/10 relative">
          <div className="p-8 pb-6 border-b border-white/10 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[10px] font-bold px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase backdrop-blur-sm transition-all duration-1000" style={{ boxShadow: `0 0 20px ${activeTab.themeColor}50` }}>
              <span className="w-2 h-2 rounded-full animate-ping transition-colors duration-1000" style={{ backgroundColor: activeTab.themeColor }}></span>
              OPREC 2026/2027
            </div>
            <h1 className="text-4xl font-black tracking-tight mb-1 drop-shadow-md">HIMASI</h1>
            <p className="text-blue-200/80 text-sm font-medium flex items-center gap-2">STT Terpadu Nurul Fikri</p>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 [&::-webkit-scrollbar]:hidden relative z-10">
            <p className="px-4 text-[11px] font-extrabold text-blue-300/60 uppercase tracking-[0.2em] mb-4">Pilih Departemen</p>
            {playbookData.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 text-left group relative overflow-hidden ${
                    isActive ? "bg-white text-[#1C4B82] shadow-xl font-bold scale-[1.02]" : "text-blue-100 hover:bg-white/10 hover:text-white font-medium"
                  }`}
                >
                  {isActive && <div className="absolute left-0 top-0 w-1.5 h-full transition-colors duration-1000" style={{ backgroundColor: item.themeColor }}></div>}
                  <IconComponent className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110 drop-shadow-md" : "text-blue-300/70 group-hover:text-white"}`} style={{ color: isActive ? item.themeColor : "" }} />
                  <span className="flex-1 text-sm md:text-base">{item.name}</span>
                  {isActive && <ChevronRight className="w-4 h-4 opacity-50" />}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* 📖 MAIN CONTENT AREA */}
        <main className="flex-1 h-full overflow-y-auto relative scroll-smooth pb-32 md:pb-10 z-10">
          <div className="max-w-5xl mx-auto px-5 py-8 md:px-12 md:py-16 relative z-10">
            
            {/* Header Konten Dinamis */}
            <div key={`header-${activeTab.id}`} className="mb-8 md:mb-10 animate-in slide-in-from-right-8 fade-in duration-500">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white mb-4 md:mb-6 transition-colors duration-1000"
                style={{ color: activeTab.themeColor, boxShadow: `0 10px 30px ${activeTab.themeColor}30` }}
              >
                <activeTab.icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#1C4B82] mb-2 tracking-tight drop-shadow-sm">
                {activeTab.name}
              </h2>
              <p className="text-xl md:text-2xl font-bold tracking-wide transition-colors duration-1000" style={{ color: activeTab.themeColor }}>
                {activeTab.tagline}
              </p>
            </div>

            {/* OVERVIEW CONTENT */}
            {activeTab.isOverview && (
               <div key="overview-content" className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                 <div className="bg-white/80 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
                   <h3 className="text-2xl font-black text-[#1C4B82] mb-4 flex items-center gap-3">
                      <Star style={{color: activeTab.themeColor}} className="w-8 h-8" /> Visi Organisasi
                   </h3>
                   <p className="text-gray-700 text-lg md:text-xl font-medium italic leading-relaxed relative z-10">
                     {activeTab.description}
                   </p>
                 </div>
                 
                 <div className="bg-white/80 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                    <h3 className="text-2xl font-black text-[#1C4B82] mb-6 flex items-center gap-3">
                      <Target style={{color: activeTab.themeColor}} className="w-8 h-8" /> Misi & Fokus Gerak
                   </h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {[
                        "Membangun kualitas karakter dengan menumbuhkan rasa kekeluargaan, empati, di ruang yang inklusif.",
                        "Membangun budaya organisasi yang profesional dan disiplin melalui etika dan tanggung jawab.",
                        "Mengembangkan kualitas kompetensi akademik dan non-akademik yang adaptif.",
                        "Menjadi ruang aspirasi dan advokasi yang terbuka, responsif, dan bertanggung jawab.",
                        "Membangun citra dan branding HIMASI yang positif dan kredibel melalui pengelolaan media.",
                        "Mendorong kemandirian HIMASI melalui kerja sama strategis dan perluasan jejaring."
                      ].map((misi, i) => (
                        <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/60 border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-md transition-colors duration-1000" style={{backgroundColor: activeTab.themeColor}}>
                            {i + 1}
                          </span>
                          <span className="text-gray-700 font-medium leading-relaxed text-sm md:text-base">{misi}</span>
                        </div>
                      ))}
                    </div>
                 </div>
               </div>
            )}

            {/* DIVISION SPECIFIC CONTENT */}
            {!activeTab.isOverview && (
              <div key={`content-${activeTab.id}`} className="space-y-6 md:space-y-8 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150 fill-mode-both">
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-white/80 backdrop-blur-2xl p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white flex flex-col justify-center">
                    <h4 className="text-xs md:text-sm font-extrabold text-gray-400 uppercase tracking-widest mb-3 md:mb-4">Definisi Utama</h4>
                    <p className="text-gray-800 leading-relaxed text-base md:text-lg font-medium mb-4">
                      {activeTab.description}
                    </p>
                    {activeTab.keyProgram && (
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <span className="text-xs font-bold text-gray-500 uppercase mr-2">Program Unggulan:</span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm" style={{backgroundColor: activeTab.themeColor}}>
                          <Rocket className="w-3 h-3 mr-1" /> {activeTab.keyProgram}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div 
                    className="p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-center transition-all duration-1000 border"
                    style={{ backgroundColor: `${activeTab.themeColor}10`, borderColor: `${activeTab.themeColor}30` }}
                  >
                    <h4 className="text-xs md:text-sm font-extrabold uppercase tracking-widest mb-4" style={{ color: activeTab.themeColor }}>Core Skills</h4>
                    <div className="flex flex-wrap gap-2.5 relative z-10">
                      {activeTab.skills?.map((skill, idx) => (
                        <span key={idx} className="bg-white/80 border border-white text-[#1C4B82] text-xs md:text-sm font-bold px-4 py-2 rounded-xl backdrop-blur-md shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {activeTab.specificRoles && (
                  <div className="bg-gradient-to-r from-white/90 to-white/60 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
                     <div className="absolute left-0 top-0 w-2 h-full" style={{ backgroundColor: activeTab.themeColor }}></div>
                     <h4 className="text-lg font-black text-[#1C4B82] mb-4">Pembagian Peran Spesifik:</h4>
                     <ul className="space-y-4">
                       {activeTab.specificRoles.map((role, rIdx) => (
                         <li key={rIdx} className="flex gap-4 items-start bg-white/50 p-4 rounded-2xl border border-gray-50">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-md" style={{backgroundColor: activeTab.themeColor}}>
                              {rIdx + 1}
                            </span>
                            <span className="text-gray-700 font-medium leading-relaxed mt-0.5">{role}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
                )}

                <div className="bg-white/80 backdrop-blur-2xl p-6 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <Zap className="w-6 h-6 md:w-8 md:h-8" style={{ color: activeTab.themeColor }} />
                    <h4 className="text-xl md:text-2xl font-black text-[#1C4B82]">Realita Pekerjaan Sehari-hari</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {activeTab.tasks?.map((task, idx) => (
                      <div 
                        key={idx} 
                        className="flex gap-4 p-5 rounded-2xl bg-white/60 border border-gray-100 transition-all duration-300 hover:shadow-lg group"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: activeTab.themeColor }} />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 leading-relaxed text-sm md:text-base font-medium">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* ==========================================
                    🚀 BUTTON CTA YANG MENUJU GFORM (KLIKABLE)
                    ========================================== */}
                <div className="mt-8 md:mt-12 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden animate-in fade-in duration-1000 delay-300 border border-white/20" style={{ backgroundColor: "#1C4B82" }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(${activeTab.themeColor} 2px, transparent 2px)`, backgroundSize: '20px 20px' }}></div>
                  <div className="relative z-10 text-center md:text-left">
                    <h4 className="text-white font-black text-2xl md:text-3xl mb-2 tracking-tight drop-shadow-md">Siap Memimpin Perubahan?</h4>
                    <p className="text-blue-100 text-sm md:text-lg font-medium">Pilih peranmu dan berikan dampak di {activeTab.name}.</p>
                  </div>
                  
                  {/* TAG A UNTUK REDIRECT KE GFORM */}
                  <a 
                    href={GFORM_LINK}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative z-10 w-full md:w-auto text-white px-8 md:px-12 py-4 rounded-2xl font-extrabold text-lg md:text-xl transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] text-center flex items-center justify-center gap-3"
                    style={{ backgroundColor: activeTab.themeColor, boxShadow: `0 10px 30px ${activeTab.themeColor}80` }}
                  >
                    Daftar Sekarang <ChevronRight className="w-6 h-6 animate-pulse" />
                  </a>
                </div>

              </div>
            )}
          </div>
        </main>

        {/* 🤖 BYTE THE MASCOT */}
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 pointer-events-none flex flex-col items-end">
          <div className="relative pointer-events-auto cursor-pointer flex flex-col items-center animate-float-character" onClick={() => setIsMascotTalking(!isMascotTalking)}>
            
            {/* Balon Bicara */}
            <div className={`absolute bottom-[110%] right-[30%] w-max max-w-[220px] bg-white/95 backdrop-blur-xl text-[#1C4B82] text-xs font-bold px-4 py-3 rounded-2xl rounded-br-none shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-gray-100 transition-all duration-300 origin-bottom-right text-center leading-relaxed ${isMascotTalking ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-4 pointer-events-none'}`}>
              {activeTab.mascotQuote}
            </div>

            {/* Topi / Aksesoris */}
            <div className="absolute -top-7 z-20 transition-all duration-500 bg-white/90 p-1.5 rounded-full shadow-md border border-gray-50 drop-shadow-lg" style={{ color: activeTab.themeColor }}>
              <activeTab.mascotOutfit size={22} strokeWidth={2.5} />
            </div>

            {/* Badan Byte CSS */}
            <div className="w-16 h-20 md:w-20 md:h-24 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-1000 border-4 border-white/40 group" style={{ backgroundColor: activeTab.themeColor }}>
              <div className="absolute top-1 right-2 w-6 h-3 bg-white/40 rounded-full blur-[2px] transform rotate-12"></div>
              
              {/* Mata */}
              <div className="flex gap-3 mb-1 transition-transform group-hover:scale-110 duration-300">
                <div className="w-2.5 h-4 bg-white rounded-full animate-blink shadow-sm"></div>
                <div className="w-2.5 h-4 bg-white rounded-full animate-blink shadow-sm"></div>
              </div>

              {/* Blush */}
              <div className="flex gap-6 absolute bottom-6 opacity-40 transition-opacity group-hover:opacity-80">
                 <div className="w-2.5 h-1.5 bg-pink-200 rounded-full blur-[1px]"></div>
                 <div className="w-2.5 h-1.5 bg-pink-200 rounded-full blur-[1px]"></div>
              </div>

              {/* Mulut */}
              <div className="w-3 h-1.5 border-b-2 border-white rounded-full opacity-80 mt-1 transition-transform group-hover:scale-125 duration-300"></div>
            </div>

            {/* Bayangan */}
            <div className="w-12 h-2 bg-black/10 rounded-full mt-4 blur-[3px] animate-pulse"></div>
          </div>
        </div>

      </div>
    </>
  );
}