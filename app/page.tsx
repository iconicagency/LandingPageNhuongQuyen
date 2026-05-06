'use client';

import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, Monitor, Rocket, ShieldCheck, 
  TrendingUp, Gamepad2, Headset, Wrench,
  CheckCircle2, XCircle, ArrowRight, MapPin, Phone, 
  ChevronDown, Cpu, Zap, Star
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
  return (
    <div className="bg-slate-950 font-sans text-slate-50 selection:bg-amber-500/30">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <HeroSection />
        <WhyChooseSection />
        <CoreValuesSection />
        <ProcessSection />
        <CaseStudySection />
        <ComparisonSection />
        <FaqSection />
        <CtaFormSection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-amber-400 to-orange-600 p-2 rounded-xl shadow-lg shadow-amber-500/20">
            <Gamepad2 className="w-6 h-6 text-slate-950" />
          </div>
          <span className="text-2xl font-black tracking-tight text-white uppercase italic">CyberKing</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-300">
          <Link href="#why-choose" className="hover:text-amber-400 transition-colors uppercase tracking-wide">Tại sao chọn</Link>
          <Link href="#core-values" className="hover:text-amber-400 transition-colors uppercase tracking-wide">Giá trị cốt lõi</Link>
          <Link href="#process" className="hover:text-amber-400 transition-colors uppercase tracking-wide">Quy trình</Link>
          <Link href="#case-study" className="hover:text-amber-400 transition-colors uppercase tracking-wide">Dự án</Link>
          <Link href="#faq" className="hover:text-amber-400 transition-colors uppercase tracking-wide">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#contact" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 transition-all px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transform hover:scale-105 uppercase tracking-wide shadow-lg shadow-orange-500/20">
            Nhận tư vấn <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-bold tracking-widest uppercase mb-8"
        >
          <Trophy className="w-4 h-4 flex-shrink-0" />
          <span>Thương hiệu nhượng quyền hàng đầu</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-6 uppercase italic"
        >
          Nhượng Quyền <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
             Phòng Net CyberKing 2026
          </span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-wide"
        >
          Đầu tư thông minh – Vận hành nhẹ nhàng – Lợi nhuận bền vững
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Bạn có mặt bằng + vốn? <strong className="text-amber-400">CyberKing lo hết:</strong> Thiết kế – Thi công – Thương hiệu – Marketing – Hỗ trợ kỹ thuật 24/7. Hàng trăm chủ đầu tư đã thành công. Bạn sẽ là người tiếp theo?
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="#contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 transition-all rounded-full font-black text-lg flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(245,158,11,0.3)] transform hover:scale-105 uppercase tracking-wide">
            <Zap className="w-6 h-6 fill-current" />
            Nhận tư vấn & báo giá miễn phí
          </Link>
          <Link href="#process" className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-colors text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 uppercase tracking-wide">
            Xem quy trình 4 bước <ChevronDown className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 py-8 border-y border-white/10 bg-slate-900/30 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Star className="w-8 h-8 text-amber-500" />
            <span className="font-bold text-slate-200">Hơn 10 năm kinh nghiệm</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <MapPin className="w-8 h-8 text-amber-500" />
            <span className="font-bold text-slate-200">Hàng trăm dự án toàn quốc</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Cpu className="w-8 h-8 text-amber-500" />
            <span className="font-bold text-slate-200">Đối tác NVIDIA & Intel</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <ShieldCheck className="w-8 h-8 text-amber-500" />
            <span className="font-bold text-slate-200">Miễn phí nhượng quyền 3 năm</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-24 px-4 relative z-10 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic">
            Tại sao chọn <span className="text-amber-500">CyberKing?</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-slate-300 max-w-3xl mx-auto mb-6">
            Thị trường phòng net 2026 đang &quot;bùng nổ&quot; – Nhưng chỉ ai làm đúng mới thắng lớn
          </p>
          <p className="text-slate-400 max-w-4xl mx-auto text-lg leading-relaxed">
            Nhiều chủ đầu tư vẫn mất trắng vì sai mặt bằng, sai cấu hình, thiếu marketing, vận hành không chuyên nghiệp... 
            Với mô hình nhượng quyền CyberKing, bạn loại bỏ hoàn toàn rủi ro đó. Chúng tôi không chỉ lắp phòng máy – chúng tôi trao cho bạn toàn bộ hệ thống kinh doanh đã được kiểm chứng qua hàng trăm dự án.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Trophy,
              title: "Thương hiệu sẵn có",
              desc: "Khách hàng biết đến từ trước, tin tưởng chất lượng. Tốc độ thu hút khách nhanh hơn gấp nhiều lần tự mở mới."
            },
            {
              icon: ShieldCheck,
              title: "Quy trình chuẩn quốc tế",
              desc: "Vận hành dễ dàng, trơn tru ngay cả khi bạn là người mới bước chân vào ngành kinh doanh phòng net."
            },
            {
              icon: Headset,
              title: "Hỗ trợ liên tục",
              desc: "Không bao giờ 'bỏ rơi' sau bàn giao. Chúng tôi đồng hành cùng bạn trong suốt quá trình kinh doanh."
            }
          ].map((item, idx) => (
             <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-amber-500/50 transition-colors"
             >
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full group-hover:bg-amber-500/10 transition-colors" />
               <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mb-6">
                 <item.icon className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold mb-4 uppercase">{item.title}</h3>
               <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
             </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#contact" className="inline-flex px-8 py-4 bg-white text-slate-950 hover:bg-slate-200 transition-colors rounded-full font-bold text-lg items-center justify-center gap-2 uppercase tracking-wide shadow-xl shadow-white/5">
            Tôi muốn loại bỏ rủi ro – Tư vấn ngay
          </Link>
        </div>
      </div>
    </section>
  );
}

const coreValues = [
  {
    icon: MapPin,
    title: "1. Tư vấn mô hình kinh doanh",
    desc: "Phân tích và lựa chọn mô hình phù hợp với nguồn vốn, mặt bằng, khu vực & tệp khách hàng (Phổ thông, Tryhard, Couple, Hybrid...)."
  },
  {
    icon: Monitor,
    title: "2. Thiết kế 2D/3D chuyên nghiệp",
    desc: "Layout tối ưu diện tích, concept độc đáo theo xu hướng, chia đa zone chuyên nghiệp (Arena, FPS, Couple Private Room, Smoking Area)."
  },
  {
    icon: Cpu,
    title: "3. Cấu hình cao cấp",
    desc: "Cung cấp và lắp đặt linh kiện chính hãng mới nhất, đạt chuẩn NVIDIA, báo giá minh bạch chi tiết từng hạng mục."
  },
  {
    icon: TrendingUp,
    title: "4. Chuyển giao vận hành",
    desc: "Cài đặt phần mềm quản lý, cung cấp SOP (Quy trình chuẩn), đào tạo nhân sự bài bản, thiết kế menu F&B sinh lời cao."
  },
  {
    icon: Rocket,
    title: "5. Marketing & Khai trương bùng nổ",
    desc: "Hỗ trợ kịch bản khuyến mãi, nội dung truyền thông, set up event, giải đấu giúp thu hút khách hàng ngay từ tuần đầu tiên."
  },
  {
    icon: Zap,
    title: "6. Tối ưu doanh thu đa kênh",
    desc: "Phân tích và tư vấn chiến lược tăng doanh thu từ Giờ chơi + Ăn uống (F&B) + Bán thẻ/Combo + Tổ chức sự kiện."
  },
  {
    icon: Wrench,
    title: "7. Hỗ trợ kỹ thuật dài hạn",
    desc: "Chính sách bảo hành tận nơi, bảo trì 24/7 chuyên nghiệp, tư vấn hướng nâng cấp định kỳ để luôn dẫn đầu thị trường."
  }
];

function CoreValuesSection() {
  return (
    <section id="core-values" className="py-24 px-4 bg-slate-900/50 border-y border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic">
            Bạn nhận được gì khi nhượng quyền <span className="text-amber-500">CyberKing?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">7 Giá trị cốt lõi làm nên thành công của chuỗi hệ thống CyberKing</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, idx) => (
             <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-amber-500/30 transition-all group ${idx === 6 ? 'lg:col-span-3 lg:w-1/3 lg:mx-auto' : ''}`}
             >
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 flex-shrink-0 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500/10 group-hover:border-amber-500/50 transition-all">
                   <value.icon className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                   <p className="text-slate-400 leading-relaxed">{value.desc}</p>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#case-study" className="inline-flex px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors rounded-full font-bold text-lg items-center justify-center gap-2 uppercase tracking-wide">
            Xem chi tiết Case Study <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    num: "01",
    title: "Khảo sát & Tư vấn",
    subtitle: "(Miễn phí)",
    description: "Khảo sát mặt bằng thực tế, đánh giá thị trường khu vực, tư vấn cấu hình và mô hình chuẩn hóa phù hợp nhất.",
  },
  {
    num: "02",
    title: "Thiết kế & Ký HĐ",
    subtitle: "(Minh bạch)",
    description: "Lên layout 2D, render không gian 3D chi tiết. Bóc tách báo giá rõ ràng từng hạng mục, tiến hành ký kết hợp đồng.",
  },
  {
    num: "03",
    title: "Thi công & Lắp đặt",
    subtitle: "(Chuyên nghiệp)",
    description: "Đội ngũ chuyên nghiệp tiến hành thi công nội thất, kéo mạng, lắp rắp máy móc, setup hệ thống phần mềm hoàn chỉnh.",
  },
  {
    num: "04",
    title: "Đào tạo & Khai trương",
    subtitle: "(Đồng hành)",
    description: "Bàn giao quy trình chuẩn, đào tạo thu ngân, pha chế. Hỗ trợ sự kiện khai trương bùng nổ, bắt đầu đón khách rầm rộ.",
  }
];

function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic">Quy trình hợp tác 4 bước</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium">Từ ý tưởng đến khai trương siêu tốc trong <span className="text-amber-500 font-bold">45–60 ngày</span></p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-slate-800 via-amber-500/50 to-slate-800" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative text-center"
              >
                <div className="w-24 h-24 mx-auto bg-slate-950 border-4 border-slate-800 rounded-full flex items-center justify-center text-3xl font-black text-amber-500 mb-6 relative z-10 shadow-xl">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-1 uppercase">{step.title}</h3>
                <span className="text-amber-500 font-medium block mb-4">{step.subtitle}</span>
                <p className="text-slate-400 text-sm leading-relaxed px-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="#contact" className="inline-flex px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 transition-all rounded-full font-black text-lg items-center justify-center gap-2 uppercase tracking-wide transform hover:scale-105">
            <Rocket className="w-6 h-6" />
            Bắt đầu hành trình ngay hôm nay
          </Link>
        </div>
      </div>
    </section>
  );
}

const projects = [
  "Teemo Bảo Lộc",
  "Viper Gò Vấp",
  "Rhythm of Gaming",
  "Adam Gaming",
  "TNG Cam Ranh",
  "Red Father Gaming"
];

function CaseStudySection() {
  return (
    <section id="case-study" className="py-24 px-4 bg-slate-900 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic">Hàng trăm phòng net đã <br className="hidden md:block"/> thành công cùng <span className="text-amber-500">CyberKing</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-slate-950/80 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl flex items-center justify-center text-center hover:border-amber-500/50 transition-colors"
             >
               <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-slate-200">{project}</h3>
             </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl flex items-center justify-center text-center col-span-2 md:col-span-3"
          >
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-amber-500">Và hàng trăm dự án khác trên toàn quốc...</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="container mx-auto max-w-5xl">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic">Tự mở phòng net <span className="text-slate-500 font-normal lowercase italic mx-2">hay</span> Nhượng quyền CyberKing?</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
             <thead>
               <tr className="border-b-2 border-slate-800">
                 <th className="p-6 text-xl font-bold text-slate-400 w-1/4">Tiêu chí</th>
                 <th className="p-6 text-xl font-bold text-slate-400 bg-slate-900/50 w-1/3">Tự mở phòng net</th>
                 <th className="p-6 text-xl font-black text-amber-500 bg-amber-500/5 w-[41%] border-t-4 border-amber-500 rounded-t-xl">Thương hiệu CyberKing</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-800/50">
               {[
                 { f: "Thương hiệu", self: "Mới mẻ, không ai biết đến, tốn nhiều chi phí marketing ban đầu.", king: "Đã có uy tín, khách hàng tin tưởng, hút khách hàng ngay lập tức." },
                 { f: "Thiết kế, Thi công", self: "Tự mò mẫm, chắp vá, dễ sai sót dẫn đến đập đi làm lại lãng phí.", king: "Chuẩn quốc tế, tối ưu từng m2, phong cách hiện đại hợp xu hướng." },
                 { f: "Vận hành hệ thống", self: "Thiếu kinh nghiệm, dễ thất thoát, quản lý nhân sự gặp nhiều khó khăn.", king: "Được chuyển giao quy trình (SOP) bài bản, phần mềm quản lý tối tân." },
                 { f: "Marketing", self: "Tự làm, manh mún, tốn kém nhưng kém hiệu quả, khó đo lường.", king: "Đội ngũ chuyên nghiệp hỗ trợ chiến dịch, sự kiện, giải đấu định kỳ." },
                 { f: "Mức độ Rủi ro", self: "RẤT CAO - Khả năng thất bại lớn trong 6 tháng đầu.", king: "THẤP NHẤT - Đã được kiểm chứng thành công." },
                 { f: "Chi phí đầu tư", self: "Khó kiểm soát, dễ phát sinh vượt ngân sách dự kiến ban đầu.", king: "Báo giá minh bạch từ A-Z, cam kết không phát sinh." }
               ].map((row, idx) => (
                 <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                   <td className="p-6 font-bold text-slate-200">{row.f}</td>
                   <td className="p-6 bg-slate-900/50 text-slate-400 flex items-start gap-3">
                     <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                     {row.self}
                   </td>
                   <td className="p-6 bg-amber-500/5 border-l border-amber-500/10 text-slate-200 flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
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

const faqs = [
  {
    q: "Cần diện tích mặt bằng tối thiểu bao nhiêu m2?",
    a: "Để xây dựng mô hình kinh doanh phòng net đạt chuẩn CyberKing và đem lại trải nghiệm tốt nhất, diện tích mặt bằng yêu cầu tối thiểu từ 100m2 trở lên. Tuy nhiên, tùy theo cấu trúc mặt bằng (nhà ống, chung cư, nhà cấp 4), chúng tôi sẽ tư vấn layout phù hợp nhất."
  },
  {
    q: "Tổng chi phí đầu tư khoảng bao nhiêu?",
    a: "Chi phí đầu tư phụ thuộc vào quy mô (số lượng máy) và mô hình (Phổ thông, Tryhard, Icafe cao cấp). Thông thường dao động từ 500 triệu đến vài tỷ đồng. CyberKing cam kết thiết kế gói đầu tư tối ưu nhất với nguồn vốn của bạn và không phát sinh chi phí ẩn."
  },
  {
    q: "Bao lâu thì dự án có thể thu hồi vốn?",
    a: "Với quy trình vận hành chuẩn mực và chiến lược marketing bùng nổ, thời gian thu hồi vốn trung bình của các đối tác CyberKing rơi vào khoảng từ 12 - 18 tháng tùy thuộc vào vị trí mặt bằng và mức độ tuân thủ vận hành."
  },
  {
    q: "CyberKing có hỗ trợ lắp đặt ở các tỉnh lẻ không?",
    a: "Có. Chúng tôi nhận thi công và lắp đặt phòng net nhượng quyền trên toàn quốc. Dù bạn ở đâu, đội ngũ thi công chuyên nghiệp của CyberKing cũng sẽ đến tận nơi để thực hiện dự án với tiêu chuẩn đồng nhất."
  }
];

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 bg-slate-900/50 border-y border-white/5">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic">Câu hỏi thường gặp</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
             <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
               <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-slate-900 transition-colors"
               >
                 <span className="font-bold text-lg text-slate-200">{faq.q}</span>
                 <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIdx === idx ? 'rotate-180 text-amber-500' : ''}`} />
               </button>
               <AnimatePresence>
                 {openIdx === idx && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="overflow-hidden"
                   >
                     <div className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed border-t border-slate-800/50">
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
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-amber-600/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic">Sẵn sàng trở thành <br /> <span className="text-amber-500">chủ phòng net thành công?</span></h2>
            <p className="text-slate-400 text-lg">Để lại thông tin, chuyên gia CyberKing sẽ liên hệ tư vấn miễn phí cho bạn.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1 uppercase tracking-wide">Họ và tên</label>
                <input type="text" placeholder="Nhập họ và tên..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1 uppercase tracking-wide">Số điện thoại</label>
                <input type="tel" placeholder="Nhập số điện thoại..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1 uppercase tracking-wide">Tỉnh/Thành phố</label>
                <input type="text" placeholder="Khu vực dự định mở..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1 uppercase tracking-wide">Diện tích mặt bằng (m2)</label>
                <input type="text" placeholder="Ví dụ: 150m2..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1 uppercase tracking-wide">Vốn dự kiến (VNĐ)</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium appearance-none">
                  <option value="">Chọn khoảng vốn...</option>
                  <option value="500-1B">500 triệu - 1 Tỷ</option>
                  <option value="1B-2B">1 Tỷ - 2 Tỷ</option>
                  <option value="over-2B">Trên 2 Tỷ</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1 uppercase tracking-wide">Mô hình quan tâm</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium appearance-none">
                  <option value="">Chọn mô hình...</option>
                  <option value="standard">Phổ thông tiêu chuẩn</option>
                  <option value="premium">Cao cấp / VIP</option>
                  <option value="hybrid">Hybrid (Net + Cafe + Billiards)</option>
                </select>
              </div>
            </div>

            <div className="pt-6">
              <button className="w-full py-5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 transition-all rounded-xl font-black text-xl uppercase tracking-wider flex justify-center items-center gap-2 transform hover:-translate-y-1 shadow-xl shadow-amber-500/20">
                Gửi thông tin – Nhận tư vấn trong 24h
              </button>
              <p className="text-center text-slate-500 text-sm mt-4 flex items-center justify-center gap-2">
                 <ShieldCheck className="w-4 h-4" /> Chúng tôi cam kết bảo mật thông tin của bạn tuyệt đối.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0f1c] pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between gap-12 mb-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-6">
             <div className="bg-gradient-to-br from-amber-400 to-orange-600 p-1.5 rounded-lg">
                <Gamepad2 className="w-5 h-5 text-slate-950" />
              </div>
            <span className="font-black text-2xl uppercase italic text-white">CyberKing</span>
          </div>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Hệ thống nhượng quyền phòng net hàng đầu Việt Nam. Cung cấp giải pháp trọn gói thiết kế, thi công, vận hành và marketing.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Liên hệ</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-amber-500" /> <span className="font-bold text-white text-lg">0901 552 900</span></li>
            <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" /> <span>69 Đường số 16, Phường Phú Thọ, Quận 11, TP.HCM</span></li>
            <li className="flex items-center gap-3"><Monitor className="w-5 h-5 text-amber-500" /> <a href="#" className="hover:text-amber-500 transition-colors">cyberking.vn</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 pt-8 border-t border-white/5 text-center text-slate-600 text-sm font-medium">
        &copy; {new Date().getFullYear()} CyberKing Việt Nam. Bảo lưu mọi quyền.
      </div>
    </footer>
  );
}
