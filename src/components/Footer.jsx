export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Your Name — All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Work</a>
            <a href="#" className="hover:text-gray-900">About</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
