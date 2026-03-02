import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-montserrat",
});

// ==========================================
// SEO & OPEN GRAPH CONFIGURATION
// ==========================================
export const metadata: Metadata = {
  title: "Playbook OPREC HIMASI | STT Terpadu Nurul Fikri",
  description: "Official Guide Book Open Requirement Himpunan Mahasiswa Sistem Informasi (HIMASI) STT Terpadu Nurul Fikri periode 2026 - 2027. Temukan peranmu sekarang!",
  keywords: ["HIMASI", "STT NF", "Sistem Informasi", "OPREC HIMASI 2026", "Organisasi Mahasiswa", "Nurul Fikri"],
  authors: [{ name: "HIMASI STT NF" }],
  openGraph: {
    title: "OPREC HIMASI 2026/2027 - Siap Memimpin Perubahan?",
    description: "Jadilah bagian dari organisasi inklusif, profesional, dan berdampak. Cek playbook interaktif kami dan daftarkan dirimu di divisi pilihanmu!",
    url: "https://oprec-himasi.vercel.app", // Nanti ganti dengan URL Vercel milikmu
    siteName: "HIMASI STT NF Playbook",
    images: [
      {
        // Masukkan Link Gambar/Poster OPREC dari ImgBB, Discord, atau URL publik lainnya
        url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop", 
        width: 1200,
        height: 630,
        alt: "Poster OPREC HIMASI 2026/2027",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OPREC HIMASI 2026/2027",
    description: "Jadilah bagian dari organisasi inklusif, profesional, dan berdampak. Daftar sekarang!",
    images: ["https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop"], // Samakan dengan URL gambar di atas
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}