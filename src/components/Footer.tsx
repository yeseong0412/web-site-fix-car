import { Facebook, Twitter, Instagram, Wrench } from 'lucide-react';
import ContactInfo from './ContactInfo';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Wrench className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">강남 카 에어컨</span>
            </div>
            <p className="text-blue-100 mb-4">
              전문적인 자동차 에어컨 수리 서비스로 쾌적한 드라이빙을 약속드립니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-200">홈</a></li>
              <li><a href="#services" className="hover:text-blue-200">서비스</a></li>
              <li><a href="#booking" className="hover:text-blue-200">예약하기</a></li>
              <li><a href="#reviews" className="hover:text-blue-200">고객후기</a></li>
              <li><a href="#contact" className="hover:text-blue-200">문의하기</a></li>
            </ul>
          </div>

          <ContactInfo 
            className="space-y-4" 
            textColor="text-blue-100"
            titleColor="text-white"
            iconColor="text-blue-200"
          />
        </div>

        <div className="border-t border-blue-600 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} 강남 카 에어컨. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;