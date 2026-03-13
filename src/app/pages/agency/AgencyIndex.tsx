import { Link } from 'react-router-dom';
import { Building2, Download, FileText, Mail } from 'lucide-react';

export function AgencyIndex() {
  const services = [
    {
      title: '物件確認',
      description: '管理物件の空室状況や詳細情報の確認',
      href: '/agency/property',
      icon: Building2,
    },
    {
      title: '申込書ダウンロード',
      description: '入居申込書などの各種書類のダウンロード',
      href: '/agency/download',
      icon: Download,
    },
    {
      title: '必要書類',
      description: '入居審査に必要な書類のご案内',
      href: '/agency/documents',
      icon: FileText,
    },
    {
      title: 'お問い合わせ',
      description: 'その他のご質問やご相談はこちら',
      href: '/agency/contact',
      icon: Mail,
    },
  ];

  return (
    <div className="header-margin">
      <div className="flex flex-col justify-center pt-12 lg:order-2 order-1 px-6 lg:px-12">

            {/* キャッチコピー */}
            <h1 className="z-15 text-3xl md:text-5xl font-bold text-primary leading-12 lg:leading-18 mb-2 tracking-widest">
              仲介業者様向けサービス
            </h1>

            {/* 英語コピー */}
            <p className="text-primary  text-md mb-8 z-15 en">
              Services for Agencys
            </p>

            {/* 画像 */}
            <div className="relative rounded-3xl overflow-hidden -mt-20 lg:-mt-40 h-[450px] z-10">
            <img src="./img/mansion047.jpg" alt="建物" className={`absolute inset-0 w-full h-full object-cover clip-roof-firstview`}/>
            </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 bg-blue-50 border-l-4 border-primary p-6 rounded">
          <h3 className="mb-2">仲介業者様専用窓口</h3>
          <p className="text-sm text-gray-700 mb-3">
            物件に関するお問い合わせや申込手続きは、専用窓口までご連絡ください。
          </p>
          <p>
            TEL: <span className="text-primary">03-0000-0000</span>（平日 9:00～18:00）<br />
            Email: <span className="text-primary">agency@example.com</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 px-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="mb-4">お取引の流れ</h3>
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>物件確認・内見予約</li>
            <li>入居申込書の提出</li>
            <li>入居審査</li>
            <li>契約手続き</li>
            <li>鍵の引渡し</li>
          </ol>
          <p className="mt-6 text-sm text-gray-600">
            ※詳細な手順やご不明点は、お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
}
