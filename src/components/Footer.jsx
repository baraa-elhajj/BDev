export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-8 px-6">
      <p className="mx-auto text-center text-white/80 text-xs sm:text-sm font-medium">
        BDev © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
