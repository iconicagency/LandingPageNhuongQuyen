'use client';

import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, ChevronRight, Phone, ShieldCheck, 
  MapPin, Monitor, Settings, Zap, Users, Shield, Headphones,
  Facebook, Youtube, Music2, Camera, User, PhoneCall, Check, Play,
  Building, CreditCard, TrendingUp, Rocket, Wrench
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
  return (
    <div className="bg-[#0B0C10] font-sans text-slate-200 selection:bg-orange-500/30 overflow-x-hidden pt-20">
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <WhyChooseSection />
      <CoreValuesSection />
      <ProcessSection />
      <CaseStudySection />
      <ComparisonSection />
      <FaqSection />
      <CtaFormSection />
      <Footer />
    </div>
  );
}

function SectionHeading({ num, subtitle, title }: { num: string, subtitle: string, title?: React.ReactNode }) {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600 opacity-20 italic">
          {num}
        </span>
        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm md:text-base border-b border-orange-500/30 pb-1">
          {subtitle}
        </span>
      </div>
      {title && <h2 className="text-2xl md:text-4xl font-extrabold uppercase italic leading-tight text-white">{title}</h2>}
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0B0C10]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <img src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 object-cover rounded-md" alt="Logo" />
           <div className="flex flex-col">
             <span className="text-xl font-black uppercase text-white leading-none">CyberKing</span>
             <span className="text-[10px] text-orange-500 uppercase tracking-widest font-bold">King of Gaming</span>
           </div>
        </div>
        <nav className="hidden xl:flex items-center gap-8 text-xs font-bold text-slate-300 uppercase tracking-wider">
          <Link href="#" className="text-orange-500 hover:text-orange-400 transition-colors">Trang chủ</Link>
          <Link href="#why-choose" className="hover:text-orange-500 transition-colors">Lợi ích</Link>
          <Link href="#process" className="hover:text-orange-500 transition-colors">Quy trình</Link>
          <Link href="#case-study" className="hover:text-orange-500 transition-colors">Dự án</Link>
          <Link href="#comparison" className="hover:text-orange-500 transition-colors">So sánh</Link>
          <Link href="#faq" className="hover:text-orange-500 transition-colors">FAQ</Link>
          <Link href="#contact" className="hover:text-orange-500 transition-colors">Liên hệ</Link>
        </nav>
        <Link href="#contact" className="bg-gradient-to-r from-orange-500 to-[#e65c00] text-white px-5 py-2.5 rounded text-sm font-bold flex items-center gap-2 hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all">
          <Phone className="w-4 h-4" /> 0901 552 900
        </Link>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center py-20 bg-[#0B0C10] border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" alt="Cyber Cafe" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10] via-[#0B0C10]/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black uppercase text-white leading-[1.1] mb-6"
          >
            Nhượng Quyền <br /> 
            Phòng Net <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#e65c00] italic">
              CyberKing
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl font-bold text-white mb-8 border-l-4 border-orange-500 pl-4"
          >
            Đầu tư thông minh – Vận hành nhẹ nhàng – <br className="hidden md:block" />
            Lợi nhuận bền vững <span className="text-orange-500">2026</span>
          </motion.p>

          <motion.ul 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="space-y-4 mb-10 text-base md:text-lg"
          >
            {[
              "Bạn có mặt bằng + vốn?",
              "CyberKing lo hết: Thiết kế – Thi công – Thương hiệu – Marketing – Hỗ trợ kỹ thuật 24/7.",
              "Hàng trăm chủ đầu tư đã thành công.\nBạn sẽ là người tiếp theo?"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium whitespace-pre-line">{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#contact" className="bg-gradient-to-r from-orange-500 to-[#e65c00] text-white px-8 py-4 rounded font-bold text-lg text-center hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all uppercase flex items-center justify-center gap-2">
              Nhận tư vấn & báo giá miễn phí <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="#process" className="px-8 py-4 rounded font-bold text-lg text-center border-2 border-slate-700/50 hover:border-orange-500/50 hover:bg-white/5 transition-all uppercase flex items-center justify-center gap-3">
               Xem quy trình 4 bước <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center"><Play className="w-3 h-3 text-white ml-0.5" /></div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, text: "Hơn 10 năm\nkinh nghiệm" },
    { icon: Building, text: "Hàng trăm dự án\ntoàn quốc" },
    { img: true, text: "Đối tác\nNVIDIA & Intel" },
    { icon: Zap, text: "Miễn phí nhượng quyền\n3 năm đầu" }
  ];

  return (
    <div className="bg-[#0f131a] border-b border-white/5 relative z-20 -mt-8 py-8 px-4 mx-auto max-w-6xl rounded-lg shadow-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {badges.map((badge, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left px-4">
            {badge.img ? (
              <div className="flex flex-col items-center gap-1 font-bold">
                 <span className="text-green-500 text-sm">NVIDIA</span>
                 <span className="text-blue-500 text-sm">INTEL</span>
              </div>
            ) : (
               badge.icon && <badge.icon className="w-10 h-10 text-orange-500" />
            )}
            <span className="text-slate-300 font-bold whitespace-pre-line text-sm uppercase">{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-24 px-4 bg-[#0B0C10] relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-orange-500/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay" />
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" alt="CyberKing Interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent z-10" />
            <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-center">
               <img src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=200&auto=format&fit=crop" alt="Logo" className="h-16 object-contain opacity-80" />
            </div>
          </div>
          
          <div>
            <SectionHeading 
              num="02" 
              subtitle="TẠI SAO CHỌN CYBERKING?" 
              title={
                <>Thị trường phòng net 2026 đang <span className="text-orange-500">&quot;bùng nổ&quot;</span> – Nhưng chỉ ai làm đúng mới thắng lớn</>
              }
            />
            
            <div className="text-slate-400 space-y-4 mb-8 text-base md:text-lg">
              <p>Nhiều chủ đầu tư vẫn mất trắng vì sai mặt bằng, sai cấu hình, thiếu marketing, vận hành không chuyên nghiệp...</p>
              <p>Với mô hình nhượng quyền <strong>CyberKing</strong>, bạn loại bỏ hoàn toàn rủi ro đó. Chúng tôi không chỉ lắp phòng máy – chúng tôi trao cho bạn toàn bộ hệ thống kinh doanh đã được kiểm chứng qua hàng trăm dự án.</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { icon: ShieldCheck, title: "THƯƠNG HIỆU SẴN CÓ", desc: "Khách đến nhanh hơn" },
                { icon: Settings, title: "QUY TRÌNH CHUẨN QUỐC TẾ", desc: "Vận hành dễ dàng ngay cả khi bạn mới" },
                { icon: Headphones, title: "HỖ TRỢ LIÊN TỤC", desc: "Không bao giờ 'bỏ rơi' sau bàn giao" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 border border-white/10 rounded-lg bg-[#0f131a] hover:border-orange-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-full border border-orange-500/30 flex items-center justify-center flex-shrink-0 text-orange-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase">{item.title}</h4>
                    <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#contact" className="inline-flex bg-gradient-to-r from-orange-500 to-[#e65c00] text-white px-8 py-4 rounded font-bold uppercase hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all items-center gap-2">
              Tôi muốn loại bỏ rủi ro – Tư vấn ngay <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  const values = [
    { num: "01", icon: Users, title: "TƯ VẤN MÔ HÌNH KINH DOANH", desc: "Phù hợp vốn, mặt bằng, khu vực & tệp khách hàng (phổ thông, tryhard, couple, hybrid)." },
    { num: "02", icon: Monitor, title: "THIẾT KẾ 2D/3D CHUYÊN NGHIỆP", desc: "Layout tối ưu, concept độc đáo, đa zone (Arena, FPS, Couple Private Room, Smoking...)." },
    { num: "03", icon: Camera, title: "CUNG CẤP & LẮP ĐẶT CẤU HÌNH CAO", desc: "Linh kiện chính hãng, chuẩn NVIDIA, báo giá minh bạch từng hạng mục." },
    { num: "04", icon: Settings, title: "CHUYỂN GIAO VẬN HÀNH TOÀN DIỆN", desc: "Phần mềm quản lý, SOP, đào tạo nhân sự, menu F&B sinh lời." },
    { num: "05", icon: Zap, title: "MARKETING & KHAI TRƯƠNG BÙNG NỔ", desc: "Kịch bản khuyến mãi, nội dung, event, giải đấu → Thu hút khách ngay tuần đầu." },
    { num: "06", icon: TrendingUp, title: "TỐI ƯU DOANH THU ĐA KÊNH", desc: "Giờ chơi + Ăn uống + Combo + Sự kiện." },
    { num: "07", icon: Headphones, title: "HỖ TRỢ KỸ THUẬT & VẬN HÀNH LÂU DÀI", desc: "Bảo hành - Bảo trì 24/7, nâng cấp định kỳ." },
  ];

  return (
    <section id="core-values" className="py-24 px-4 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed bg-center relative">
      <div className="absolute inset-0 bg-[#0B0C10]/95 backdrop-blur-sm" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          num="03" 
          subtitle="7 GIÁ TRỊ CỐT LÕI" 
          title="Bạn nhận được gì khi nhượng quyền CyberKing?"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {values.slice(0, 4).map((v, i) => (
             <div key={i} className="bg-[#0f131a]/80 border border-white/5 hover:border-orange-500/50 p-6 rounded-lg transition-all group">
               <div className="flex justify-between items-start mb-4">
                 <div className="text-orange-500 bg-orange-500/10 p-3 rounded group-hover:scale-110 transition-transform"><v.icon className="w-8 h-8" /></div>
                 <span className="text-4xl font-black text-white/5">{v.num}</span>
               </div>
               <h3 className="font-bold text-white uppercase text-sm mb-3 min-h-[40px] leading-snug">{v.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
             </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:w-3/4 mx-auto mb-12">
          {values.slice(4).map((v, i) => (
             <div key={i} className="bg-[#0f131a]/80 border border-white/5 hover:border-orange-500/50 p-6 rounded-lg transition-all group">
               <div className="flex justify-between items-start mb-4">
                 <div className="text-orange-500 bg-orange-500/10 p-3 rounded group-hover:scale-110 transition-transform"><v.icon className="w-8 h-8" /></div>
                 <span className="text-4xl font-black text-white/5">{v.num}</span>
               </div>
               <h3 className="font-bold text-white uppercase text-sm mb-3 min-h-[40px] leading-snug">{v.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
             </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="#case-study" className="inline-flex bg-gradient-to-r from-orange-500 to-[#e65c00] text-white px-8 py-3 rounded uppercase font-bold text-sm items-center gap-2 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all">
            Xem chi tiết 7 giá trị <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { num: "1", icon: Users, title: "KHẢO SÁT & TƯ VẤN (Miễn phí)", desc: "Phân tích mặt bằng, thị trường, khách hàng & ngân sách." },
    { num: "2", icon: Shield, title: "THIẾT KẾ - BÁO GIÁ - KÝ HỢP ĐỒNG", desc: "Thiết kế 2D/3D, báo giá chi tiết từng hạng mục, hợp đồng rõ ràng." },
    { num: "3", icon: Wrench, title: "THI CÔNG - LẮP ĐẶT - SETUP HỆ THỐNG", desc: "Thi công nhanh chóng, lắp đặt đúng chuẩn, setup đồng bộ." },
    { num: "4", icon: Rocket, title: "ĐÀO TẠO - KHAI TRƯƠNG - HỖ TRỢ", desc: "Đào tạo vận hành, marketing khai trương, hỗ trợ 24/7 lâu dài." }
  ];

  return (
    <section id="process" className="py-24 px-4 bg-[#0B0C10]">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading 
          num="04" 
          subtitle="QUY TRÌNH HỢP TÁC" 
          title="Quy trình chỉ 4 bước – Từ ý tưởng đến khai trương trong 45–60 ngày"
        />

        <div className="relative mt-20 mb-16">
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-white/10 border-t border-dashed border-white/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
               <div key={idx} className="relative z-10 text-center">
                 <div className="w-20 h-20 mx-auto bg-[#0B0C10] border-4 border-orange-500 rounded-full flex items-center justify-center mb-6 relative">
                   <step.icon className="w-8 h-8 text-orange-500" />
                   <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-[#0B0C10] flex items-center justify-center font-black text-white text-sm">
                     {step.num}
                   </div>
                 </div>
                 <h3 className="font-bold text-white uppercase mb-3 px-2 min-h-[48px]">{step.title}</h3>
                 <p className="text-slate-400 text-sm px-4">{step.desc}</p>
               </div>
            ))}
          </div>
        </div>

        <div className="text-center">
           <Link href="#contact" className="inline-flex bg-gradient-to-r from-orange-500 to-[#e65c00] text-white px-8 py-4 rounded uppercase font-bold text-lg items-center gap-2 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all">
            Bắt đầu hành trình của bạn ngay hôm nay <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseStudySection() {
  const projects = [
    { name: "TEEMO BẢO LỘC", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500&auto=format&fit=crop" },
    { name: "VIPER GÒ VẤP", img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=500&auto=format&fit=crop" },
    { name: "RHYTHM OF GAMING", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop" },
    { name: "ADAM GAMING", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500&auto=format&fit=crop" },
    { name: "TNG CAM RANH", img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=500&auto=format&fit=crop" },
  ];

  return (
    <section id="case-study" className="py-24 px-4 bg-[#0f131a] relative">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading 
          num="05" 
          subtitle="CASE STUDY & THÀNH TỰU" 
          title="Hàng trăm phòng net đã thành công cùng CyberKing"
        />

        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scroll">
          {projects.map((p, i) => (
             <div key={i} className="min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-center group">
               <div className="rounded-lg overflow-hidden border border-white/10 relative aspect-[4/3] mb-4">
                 <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Xem chi tiết</span>
                 </div>
               </div>
               <h3 className="text-center font-bold text-white uppercase">{p.name}</h3>
             </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
           <Link href="#contact" className="inline-flex bg-gradient-to-r from-orange-500 to-[#e65c00] text-white px-8 py-3 rounded uppercase font-bold text-sm items-center gap-2 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all">
            Xem thêm nhiều dự án khác <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}

function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 px-4 bg-[#0B0C10]">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          num="06" 
          subtitle="BẢNG SO SÁNH" 
          title="Tự mở phòng net hay Nhượng quyền CyberKing?"
        />

        <div className="bg-[#0f131a] rounded-xl border border-white/10 overflow-hidden mt-12">
          <table className="w-full text-left border-collapse">
             <thead>
               <tr>
                 <th className="p-4 md:p-6 text-sm font-bold text-white border-b border-white/10 w-1/4 uppercase tracking-wider">Tiêu chí</th>
                 <th className="p-4 md:p-6 text-sm font-bold text-slate-400 border-b border-white/10 w-1/3 uppercase tracking-wider bg-black/20">Tự mở phòng net</th>
                 <th className="p-4 md:p-6 text-sm font-black text-orange-500 border-b border-orange-500/30 w-[41%] uppercase tracking-wider bg-orange-500/5">Nhượng quyền CyberKing</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-white/5">
               {[
                 { f: "Thương hiệu", self: "Không có, mất thời gian xây dựng", king: "Thương hiệu mạnh, khách đến nhanh" },
                 { f: "Kinh nghiệm", self: "Tự mày mò, dễ sai lầm", king: "Quy trình chuẩn, đã được kiểm chứng" },
                 { f: "Thiết kế - Thi công", self: "Tự tìm đơn vị, khó kiểm soát", king: "CyberKing thiết kế & thi công trọn gói" },
                 { f: "Cấu hình & Giá", self: "Dễ mua sai, giá cao", king: "Cấu hình tối ưu, giá tốt từ đối tác lớn" },
                 { f: "Vận hành", self: "Thiếu kinh nghiệm, dễ thất bại", king: "SOP + Đào tạo + Phần mềm quản lý" },
                 { f: "Marketing", self: "Không biết làm, tốn kém", king: "Kịch bản marketing khai trương bùng nổ" },
                 { f: "Hỗ trợ sau khai trương", self: "Không có hoặc rất hạn chế", king: "Hỗ trợ 24/7, đồng hành lâu dài" },
                 { f: "Rủi ro", self: "Cao", king: "Thấp – Đã được kiểm soát" },
                 { f: "Tốc độ hoàn vốn", self: "Lâu, không chắc chắn", king: "Nhanh, tối ưu doanh thu" }
               ].map((row, idx) => (
                 <tr key={idx} className="hover:bg-white/5 transition-colors">
                   <td className="p-4 md:p-6 font-bold text-white text-sm uppercase">{row.f}</td>
                   <td className="p-4 md:p-6 bg-black/20 text-slate-400 text-sm">
                     {row.self}
                   </td>
                   <td className="p-4 md:p-6 bg-orange-500/5 text-white text-sm flex items-center gap-2">
                     <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                     {row.king}
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { q: "Nhượng quyền CyberKing có mất phí không?", a: "Phí nhượng quyền phụ thuộc vào quy mô dự án. Tuy nhiên, hiện tại CyberKing đang có ưu đãi miễn phí nhượng quyền trong 3 năm đầu tiên." },
    { q: "Tôi chưa có kinh nghiệm, có làm được không?", a: "Hoàn toàn được. CyberKing chuyển giao toàn bộ quy trình, công nghệ và đào tạo nhân sự từ A-Z để bạn có thể vận hành trơn tru." },
    { q: "Tổng vốn đầu tư mở phòng net khoảng bao nhiêu?", a: "Tùy thuộc vào diện tích và số lượng máy. Thông thường từ 500 triệu trở lên. Chúng tôi sẽ thiết kế phương án tối ưu nhất với tài chính của bạn." },
    { q: "Mặt bằng cần những yêu cầu gì?", a: "Giao thông thuận tiện, có chỗ để xe, trần nhà cao thoáng, đảm bảo an toàn PCCC và ưu tiên khu vực đông dân cư/sinh viên." },
    { q: "Thời gian hoàn vốn mất bao lâu?", a: "Với mô hình kinh doanh chuẩn của CyberKing, thời gian thu hồi vốn trung bình dao động từ 12 đến 18 tháng." },
    { q: "Hợp đồng nhượng quyền có thời hạn bao lâu?", a: "Thông thường là 3-5 năm. Sau đó bạn có thể gia hạn theo thỏa thuận." },
    { q: "CyberKing hỗ trợ những gì sau khi khai trương?", a: "Hỗ trợ bảo hành thiết bị, cập nhật phần mềm, sự kiện/giải đấu định kỳ, tư vấn marketing và giải quyết các vấn đề vận hành 24/7." },
    { q: "Khu vực của tôi đã có CyberKing chưa?", a: "Vui lòng để lại thông tin hoặc gọi hotline để chúng tôi kiểm tra độc quyền khu vực cho bạn." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-[#0f131a] relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading num="07" subtitle="CÂU HỎI THƯỜNG GẶP" />

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {faqs.map((faq, idx) => (
             <div key={idx} className="border border-white/10 rounded overflow-hidden">
               <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between bg-[#151921] hover:bg-[#1a1f29] transition-colors"
               >
                 <span className="font-bold text-sm text-slate-200">{faq.q}</span>
                 <ChevronRight className={`w-4 h-4 text-orange-500 transition-transform ${openIdx === idx ? 'rotate-90' : ''}`} />
               </button>
               <AnimatePresence>
                 {openIdx === idx && (
                   <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-[#0a0d12]">
                     <div className="p-4 text-slate-400 text-sm leading-relaxed border-t border-white/5">
                       {faq.a}
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFormSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-[#0B0C10] relative">
       <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" alt="Cyber Cafe" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/95 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
           <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600 opacity-20 italic">08</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6 italic leading-tight">
            SẴN SÀNG TRỞ THÀNH <br/>
            <span className="text-orange-500">CHỦ PHÒNG NET THÀNH CÔNG?</span>
          </h2>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-slate-300">
               <ShieldCheck className="w-5 h-5 text-orange-500" /> Tư vấn miễn phí 1:1 cùng chuyên gia
            </li>
            <li className="flex items-center gap-3 text-slate-300">
               <Monitor className="w-5 h-5 text-orange-500" /> Nhận Concept 3D & báo giá chi tiết
            </li>
            <li className="flex items-center gap-3 text-slate-300">
               <CheckCircle2 className="w-5 h-5 text-orange-500" /> Lộ trình tối ưu - Hiệu quả - An toàn
            </li>
          </ul>
        </div>

        <div className="bg-[#0f131a]/80 backdrop-blur-md border border-white/10 rounded-lg p-6 md:p-8">
           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <input type="text" placeholder="Họ và tên*" className="w-full bg-[#151921] border border-white/10 rounded px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors" />
               </div>
               <div>
                  <input type="text" placeholder="Diện tích mặt bằng (m²)*" className="w-full bg-[#151921] border border-white/10 rounded px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors" />
               </div>
               <div>
                  <input type="tel" placeholder="Số điện thoại*" className="w-full bg-[#151921] border border-white/10 rounded px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors" />
               </div>
               <div>
                 <select className="w-full bg-[#151921] border border-white/10 rounded px-4 py-3.5 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors appearance-none outline-none">
                    <option value="">Vốn dự kiến (VNĐ)*</option>
                    <option value="500M">500 Triệu</option>
                    <option value="1B">1 Tỷ</option>
                    <option value="2B">2 Tỷ+</option>
                 </select>
               </div>
               <div className="col-span-2 md:col-span-1">
                  <input type="text" placeholder="Tỉnh/Thành phố*" className="w-full bg-[#151921] border border-white/10 rounded px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors" />
               </div>
                <div className="col-span-2 md:col-span-1">
                 <select className="w-full bg-[#151921] border border-white/10 rounded px-4 py-3.5 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors appearance-none outline-none">
                    <option value="">Mô hình quan tâm*</option>
                    <option value="standard">Phổ thông</option>
                    <option value="premium">Cyber Cafe VIP</option>
                    <option value="hybrid">Hybrid</option>
                 </select>
               </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-orange-500 to-[#e65c00] text-white py-4 rounded font-bold uppercase tracking-wider text-sm mt-4 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all flex items-center justify-center gap-2">
              Gửi thông tin - Nhận tư vấn trong 24h <ChevronRight className="w-4 h-4" />
            </button>
            <p className="text-center text-slate-500 text-xs mt-4 flex items-center justify-center gap-2">
               <Shield className="w-3 h-3 text-orange-500" /> Chúng tôi cam kết bảo mật thông tin của bạn.
            </p>
           </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#080a0e] pt-16 pb-8 border-t border-white/5 uppercase text-sm">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between gap-12 mb-12">
        <div className="w-full lg:w-1/3">
           <div className="flex items-center gap-2 mb-6">
             <img src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 object-cover rounded-md" alt="Logo" />
             <div className="flex flex-col">
               <span className="text-2xl font-black uppercase text-white leading-none">CyberKing</span>
               <span className="text-[10px] text-orange-500 uppercase tracking-widest font-bold">King of Gaming</span>
             </div>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"><Youtube className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"><Music2 className="w-4 h-4" /></a>
          </div>
        </div>

        <div className="w-full lg:w-1/3 text-slate-400">
           <h4 className="text-white font-bold mb-4 tracking-wider">CYBERKING VIỆT NAM</h4>
           <p className="mb-2"><strong className="text-orange-500">Hotline: 0901 552 900</strong></p>
        </div>

        <div className="w-full lg:w-1/3 text-slate-400">
           <h4 className="text-white font-bold mb-4 tracking-wider">ĐỊA CHỈ:</h4>
           <p className="normal-case text-slate-400 mb-6">69 Đường số 16, Phường Phú Thọ,<br/>Quận 11, TP.HCM</p>
           <h4 className="text-white font-bold mb-2 tracking-wider">WEBSITE:</h4>
           <p className="text-orange-500 normal-case lowercase">cyberking.vn</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-6xl border-t border-white/5 pt-8 text-center text-slate-600 text-xs normal-case">
         &copy; 2026 CyberKing Việt Nam. All rights reserved.
      </div>
    </footer>
  );
}
