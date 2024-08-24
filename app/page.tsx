import Footer from "@/feature/footer/Footer";
import Hero from "@/feature/hero/Hero";
import Navigation from "@/feature/nav/Nav";

export default function Home() {
  return (
    <main className="app" id="app">
      <div className=" ">
        <Navigation />
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
