const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm bg-gray-50 text-gray-700 border-t border-gray-200">
      <p>Copyright © {new Date().getFullYear()} HireSphere. All rights reservered.</p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/itz-Hiru/" className="hover:text-gray-900 transition-all">
          Github
        </a>
        <div className="h-8 w-px bg-white/20"></div>
        <a href="https://linkedin.com/in/hirumitha/" className="hover:text-gray-900 transition-all">
          LinkedIn
        </a>
        <div className="h-8 w-px bg-white/20"></div>
        <a href="https://www.instagram.com/X_hiru23/" className="hover:text-gray-900 transition-all">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
