import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yashwanth Raghu",
  description: "I’m a passionate software engineer who began my journey in manual testing and gradually transitioned into automation, full-stack, and app development. With hands-on experience across various technologies, I’ve developed a strong understanding of the complete software development lifecycle. Now, as a team leader, I focus on transforming ideas into impactful digital solutions through collaboration, innovation, and strategic execution. I’m driven by the goal of crafting seamless user experiences that blend code, creativity, and purpose.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
