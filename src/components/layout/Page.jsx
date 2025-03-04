import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Page({ children }) {
  return (
    <div className="w-screen min-h-screen flex flex-col font-imb">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 lg:py-12 flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
