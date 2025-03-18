import { Car } from 'lucide-react';
import ContactInfo from './ContactInfo';

const BookingAndContact = () => {
    const handleCall = () => {
        window.location.href = 'tel:010-1234-5678'; // 실제 전화번호로 변경하세요
    };

    return (
        <div>
            {/* 정보보기 섹션 */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">예약 및 찾아오시는 길</h2>
                        <p className="text-lg text-gray-600">
                            자세한 정보는 아래로 확인해주세요
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* 위치, 전화, 이메일, 영업시간 정보 */}
                        <div>
                            <ContactInfo/>
                        </div>

                        {/* 지도 표시 */}
                        <div className="bg-gray-100 rounded-lg p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">지도 보기</h3>
                            <div className="w-full h-80 bg-gray-300 rounded-md">
                                {/* 여기에 지도 컴포넌트 또는 iframe 삽입 가능 */}
                                <iframe
                                    className="w-full h-full rounded-md"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.100114949267!2d126.85850877596924!3d37.52913722627157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c2c4728f40f%3A0xc18e95981dc6614e!2z6rCV64KoIOy5tCDsl5DslrTsu6g!5e0!3m2!1sko!2skr!4v1742264140980!5m2!1sko!2skr"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="text-center">
                        <button
                            onClick={handleCall}
                            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            예약하기
                            <Car className="ml-2 h-5 w-5"/>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookingAndContact;
