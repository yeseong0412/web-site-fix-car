import { useState } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <nav className="bg-blue-700 text-white fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Wrench className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">강남 카 에어컨</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <button onClick={() => scrollToSection('home')} className="hover:bg-blue-600 px-3 py-2 rounded-md">홈</button>
                <button onClick={() => scrollToSection('services')} className="hover:bg-blue-600 px-3 py-2 rounded-md">서비스</button>
                <button onClick={() => scrollToSection('contact')} className="hover:bg-blue-600 px-3 py-2 rounded-md">예약하기</button>
                <button onClick={() => scrollToSection('reviews')} className="hover:bg-blue-600 px-3 py-2 rounded-md">고객후기</button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-600"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block hover:bg-blue-600 px-3 py-2 rounded-md">홈</button>
              <button onClick={() => scrollToSection('services')} className="block hover:bg-blue-600 px-3 py-2 rounded-md">서비스</button>
              <button onClick={() => scrollToSection('contact')} className="block hover:bg-blue-600 px-3 py-2 rounded-md">예약하기</button>
              <button onClick={() => scrollToSection('reviews')} className="block hover:bg-blue-600 px-3 py-2 rounded-md">고객후기</button>
            </div>
        )}
      </nav>
  );
};

export default Navbar;
