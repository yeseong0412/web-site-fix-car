import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export interface ContactInfoProps {
  className?: string;
  textColor?: string;
  titleColor?: string;
  iconColor?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ 
  className = "space-y-8",
  textColor = "text-gray-600",
  titleColor = "text-gray-900",
  iconColor = "text-blue-600"
}) => {
  return (
    <div className={className}>
      <div className="flex items-start">
        <MapPin className={`h-6 w-6 ${iconColor} mt-1`} />
        <div className="ml-4">
          <h3 className={`text-lg font-semibold ${titleColor} mb-1`}>위치</h3>
          <p className={textColor}>
            서울시 양천구 신정동 893-1<br />
            (양천구 국회대로234) 강남 카 에어컨
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Phone className={`h-6 w-6 ${iconColor} mt-1`} />
        <div className="ml-4">
          <h3 className={`text-lg font-semibold ${titleColor} mb-1`}>전화</h3>
          <p className={textColor}>
            02-2691-1118<br />
            010-4577-7827
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Mail className={`h-6 w-6 ${iconColor} mt-1`} />
        <div className="ml-4">
          <h3 className={`text-lg font-semibold ${titleColor} mb-1`}>이메일</h3>
          <p className={textColor}>
            k97197827@nate.com<br />
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Clock className={`h-6 w-6 ${iconColor} mt-1`} />
        <div className="ml-4">
          <h3 className={`text-lg font-semibold ${titleColor} mb-1`}>영업시간</h3>
          <p className={textColor}>
            평일: 오전 9:00 - 오후 7:00<br />
            토요일: 오전 9:00 - 오후 6:00<br />
            일요일: 휴무
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;