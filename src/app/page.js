import Image from "next/image";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
       <HomePage/>
      </main>
      <Footer />
    </>
  );
}
