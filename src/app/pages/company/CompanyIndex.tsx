import { Link } from 'react-router-dom';
import { Heart, FileText, MapPin } from 'lucide-react';
import { Shield, Lightbulb } from 'lucide-react';
import { Train, Car } from 'lucide-react';

export function CompanyIndex() {
    const values = [
    {
      icon: Heart,
      title: '誠実さ',
      description: 'お客様との信頼関係を第一に考え、誠実な対応を心がけています。',
    },
    {
      icon: Shield,
      title: '安心・安全',
      description: '大切な資産を守り、安心して任せられるサービスを提供します。',
    },
    {
      icon: Lightbulb,
      title: '革新性',
      description: '常に新しい技術やサービスを取り入れ、より良い管理を追求します。',
    },
  ];

    const companyData = [
    { label: '会社名', value: '不動産管理株式会社' },
    { label: '代表者', value: '代表取締役社長 山田 太郎' },
    { label: '住所', value: '〒000-0000 東京都○○区○○1-2-3' },
    { label: 'TEL', value: '03-0000-0000' },
    { label: 'FAX', value: '03-0000-0001' },
    { label: 'MAIL', value: 'info@example.com' },
    { label: '営業時間', value: '9:00～18:00' },
    { label: '定休日', value: '土曜日・日曜日・祝日' },
    { label: '駐車場', value: '有り（2台）' },
    { label: '設立', value: '2005年4月1日' },
    { label: '資本金', value: '3,000万円' },
    { label: '賃貸住宅管理業登録番号', value: '国土交通大臣(1)第000000号' },
  ];

  return (
    <div className="header-margin">
      <div className="flex flex-col justify-center pt-12 lg:order-2 order-1 px-6 lg:px-12">
              <div className="max-w-7xl py-4 text-md text-gray-500 text-left">

              <Link to="/" className="hover:text-primary hover:underline">
                トップページ
              </Link>

              <span className="mx-2">&gt;</span>

              <span className="text-gray-700">
                会社概要
              </span>

            </div>
            {/* キャッチコピー */}
            <h1 className="z-15 text-3xl md:text-5xl font-bold text-primary leading-12 lg:leading-18 mb-2 tracking-widest">
              会社概要
            </h1>

            {/* 英語コピー */}
            <p className="text-primary  text-md mb-8 z-15 en">
              Company Profile
            </p>

            {/* 画像 */}
            <div className="relative rounded-3xl overflow-hidden -mt-20 lg:-mt-40 h-[450px] z-10">
            <img src="./img/mansion047.jpg" alt="建物" className={`absolute inset-0 w-full h-full object-cover clip-roof-firstview`}/>

          </div>

      <div className=" text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-primary font-bold text-3xl mx-auto text-center">会社情報</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <tbody>
              {companyData.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-b-0">
                  <th className="bg-gray-50 px-6 py-4 text-left w-1/3 align-top">
                    {item.label}
                  </th>
                  <td className="px-6 py-4">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
}
