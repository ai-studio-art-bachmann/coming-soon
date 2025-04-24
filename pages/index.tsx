import Head from "next/head";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Head>
        <title>AI Studio Art Bachmann</title>
        <meta name="description" content="AI Studio Art Bachmann - Luovaa tekoälyä" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-white">AI Studio</span>
          </h1>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in-up animation-delay-200">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-200">Art Bachmann</span>
          </h2>
        </div>
        
        <div className="space-y-6 mb-12">
          <p className="text-2xl md:text-3xl font-raleway font-light text-gray-200 animate-fade-in-up animation-delay-400">
            Tervetuloa!
          </p>
          <p className="text-xl md:text-2xl font-raleway text-gray-300 animate-fade-in-up animation-delay-600">
            Aloitamme pian. Olemme rakentamassa jotain erityistä.
          </p>
        </div>
      </main>

      {/* Tausta-elementit */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gray-300 mix-blend-overlay filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white mix-blend-overlay filter blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-gray-400 mix-blend-overlay filter blur-3xl animate-float-medium"></div>
      </div>

      <footer className="absolute bottom-4 text-gray-400 opacity-70 font-raleway text-sm animate-fade-in-up animation-delay-1000">
        © {new Date().getFullYear()} AI Studio Art Bachmann
      </footer>
    </div>
  );
};

export default IndexPage;
