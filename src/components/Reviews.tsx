import { Star, User } from 'lucide-react';

const reviews = [
  {
    name: '전진규',
    rating: 5,
    comment: '' +
        '1. 잔고장 없음 : 1년째 문제없이 사용하고 있음\n' +
        '2. 타 센타 대비 가격이 저렴함 : 이건 비교하고 판단하세요 제가 알아볼땐 젤 저렴했음\n' +
        '3. 특유의 사투리로 원인과 조치에 대한 설명을 친절히 해주심\n' +
        '4. 냉매가스 충전 등 지속적으로 정비 받을 일이 있을때 전에 고치러왔던 차량이면 더 할인을 해주시능것 같음\n' +
        '5. 궁금한게 있을때 문자로 주말에 연락해도 답변해주심',
    date: '2주 전'

  },
  {
    name: '박흥일',
    rating: 5,
    comment: '아주 좋아요. 자동차 에어컨 상태를 꼼꼼하게 진단해주시고, 가장 중요한 비용면에서도 엄청 저렴했어요. 부동액도 보충해주셨습니다.\n' +
        '감사합니다.',
    date: '1개월 전'
  },
  {
    name: 'Kirk Lee',
    rating: 5,
    comment: '전문가답고 진단에 차업계에 흔한 눈탱이 없고 솔직하게 상태알려줌 차에어컨 문제있음 고민말고 여기로 고고 다른데 부른값 절반값으로 문제해결함',
    date: '1개월 전'
  }
];

const Reviews = () => {
  return (
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">고객 후기</h2>
            <p className="text-lg text-gray-600">
              저희 서비스를 이용하신 고객님들의 생생한 후기를 확인하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-full p-2">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2 whitespace-pre-line">{review.comment}</p>
                </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
                href="https://blog.naver.com/kangnam2691"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              자세한 리뷰 구경하기
            </a>
          </div>
        </div>
      </section>
  );
};

export default Reviews;