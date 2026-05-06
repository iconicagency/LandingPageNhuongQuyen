import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Nhượng Quyền Phòng Net CyberKing 2026 – Lắp Đặt Trọn Gói',
  description: 'Nhượng quyền phòng net CyberKing: Giải pháp trọn gói từ A-Z. Thiết kế – Thi công – Vận hành – Marketing. Minh bạch, giảm rủi ro, thu hồi vốn nhanh. Tư vấn miễn phí + Concept 3D ngay hôm nay!',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-slate-50 min-h-screen flex flex-col`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
