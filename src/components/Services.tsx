import { ThermometerSun, Fan, Wrench, Battery, PenTool as Tool, Gauge } from 'lucide-react';

const services = [
  {
    icon: <ThermometerSun className="h-8 w-8" />,
    title: '에어컨 진단',
    description: '전체 시스템 점검 및 성능 테스트'
  },
  {
    icon: <Fan className="h-8 w-8" />,
    title: '컴프레서 수리',
    description: '전문적인 컴프레서 수리 및 교체'
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: '누수 감지',
    description: '첨단 장비를 이용한 누수 감지 및 수리'
  },
  {
    icon: <Battery className="h-8 w-8" />,
    title: '가스 충전',
    description: '전문적인 냉매 충전 및 보충'
  },
  {
    icon: <Tool className="h-8 w-8" />,
    title: '부품 교체',
    description: '고품질 에어컨 부품 교체 서비스'
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: '성능 테스트',
    description: '종합적인 에어컨 성능 평가'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">서비스 안내</h2>
          <p className="text-lg text-gray-600">
            모든 차종의 에어컨 수리를 위한 종합적인 서비스를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;