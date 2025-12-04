// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-black/95 border-t border-white/10 py-5 text-indigo-100">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs md:text-sm">
        <p className="opacity-80">
          © {new Date().getFullYear()} Ayush Ghole. All rights reserved.
        </p>
        <p className="opacity-80">
          Reach out:{" "}
          <a
            href="mailto:ayushghole@gmail.com"
            className="underline decoration-indigo-300 hover:text-white transition-colors duration-150">
            ayushghole@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
