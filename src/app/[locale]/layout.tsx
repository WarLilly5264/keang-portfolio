import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

// 1. Import Provider และ getMessages จาก next-intl
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const isThai = locale === 'th';

  return {
    metadataBase: new URL("https://keang-portfolio.vercel.app"), // เพิ่มบรรทัดนี้สำคัญมาก
    title: "Keang | Web Developer Portfolio",
    description: "Web Application Portfolio by Keang",
    openGraph: {
      title: "Keang | Web Developer Portfolio",
      description: isThai
        ? "สร้าง Web Application ที่ตอบโจทย์ธุรกิจ ด้วยรากฐานความปลอดภัย"
        : "Building Web Applications with Security Fundamentals",
      url: "https://keang-portfolio.vercel.app", // เปลี่ยนเป็นลิงก์จริงของคุณ
      siteName: "Keang Portfolio",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Keang Portfolio Preview",
        },
      ],
      locale: isThai ? "th_TH" : "en_US",
      type: "website",
    },
  };
}

// 2. รับค่า params (ใน Next.js เวอร์ชั่นใหม่ params จะเป็น Promise)
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  
  // 3. ดึง locale จาก URL และดึงไฟล์คำแปล (json) มาเตรียมไว้
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        {/* 4. หุ้ม children ด้วย Provider เพื่อส่งข้อมูลภาษาให้ทุกหน้าใช้งานได้ */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}