import Navigation from "@/feature/nav/Nav";
import Head from "next/head";
import Hero from "@/feature/hero/Hero";
import Projects from "@/feature/projects/Projects";
import Footer from "@/feature/footer/Footer";

function Home() {
  return (
    <>
      <Head>
        <title>Majed Karimi</title>
        <meta
          name="description"
          content="Majed Karimi is a Frontend Engineer and currently working on the Banimode online shop. He has worked at Banimode for over 2 years, focused on the Performance, user Profile, cart process and better game landing pages"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.farsdev.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:title" content="Majed Karimi - Front End Engineer" />
        <meta
          property="og:description"
          content="🌟 Dive into the magical world of Front End Engineering with me!"
        />
        <meta
          property="og:image"
          content="https://wqxhtmoiahroyautinwx.supabase.co/storage/v1/object/public/logo/farsdev-og-icon?t=2023-09-25T16%3A30%3A03.075Z"
        />
        <meta property="og:url" content="https://www.majedkarimi.com" />
      </Head>
      <main className="app" id="app">
        <div className=" ">
          <Navigation />
          <Hero />
        </div>
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default Home;
