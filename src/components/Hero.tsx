import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://allways.kg-mobility.com/wp-content/uploads/2020/05/0513_%EC%9E%90%EA%B0%80%EC%A0%95%EB%B9%84_%EC%9E%90%EA%B0%80%EC%A0%95%EB%B9%84.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            빠르고 정확한 자동차 에어컨 수리 서비스
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            전문적인 에어컨 수리 서비스로 쾌적한 드라이빙을 약속드립니다
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            예약하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;