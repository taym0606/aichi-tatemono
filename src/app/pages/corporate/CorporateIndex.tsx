import { Link } from 'react-router-dom';
import { AlertCircle, FileX, FileEdit, Mail } from 'lucide-react';

export function CorporateIndex() {
  const services = [
    {
      title: 'お問い合わせ',
      description: 'その他のご質問やご相談はこちら',
      href: '/corporate/contact',
      icon: Mail,
    },
    {
      title: '不具合連絡',
      description: '設備の故障や不具合がございましたらこちらからご連絡ください',
      href: '/corporate/issue',
      icon: AlertCircle,
    },
    {
      title: 'ご契約の変更・更新・確認',
      description: '契約内容のに関するお手続きはこちらから',
      href: '/corporate/change',
      icon: FileEdit,
    },
    {
      title: '解約手続き',
      description: '契約解約のお手続きはこちらから',
      href: '/corporate/cancellation',
      icon: FileX,
    },
  ];

  return (
    <div className="header-margin">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">法人契約のお客様向けサービス</h1>
          <p className="text-lg opacity-90">
            法人様向けの各種お手続きとサポート
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 bg-blue-50 border-l-4 border-primary p-6 rounded">
          <h3 className="mb-2">法人契約担当窓口</h3>
          <p className="text-sm text-gray-700 mb-3">
            法人契約に関するご相談は、専任担当者が対応いたします。
          </p>
          <p>
            TEL: <span className="text-primary">03-0000-0000</span>（平日 9:00～18:00）<br />
            Email: <span className="text-primary">corporate@example.com</span>
          </p>
        </div>

        {/* メニューカード */}
        <div className="grid grid-cols-2 gap-2 mb-8">
          <a href="/owner" className="group bg-white rounded-xl shadow p-4 text-center hover:scale-105 transition">
            <img src="./img/家主.png" alt="" className="mb-2 h-[40px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-md text-primary">大家様<br/>はこちら</p>
          </a>

          <a href="/tenant" className="group bg-white rounded-xl shadow p-4 text-center hover:scale-105 transition">
            <img src="./img/個人入居者.png" alt="" className="mb-2 h-[40px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-md text-primary">入居者様<br/>はこちら</p>
          </a>

          <a href="/agency" className="group bg-white rounded-xl shadow p-4 text-center hover:scale-105 transition">
            <img src="./img/法人.png" alt="" className="mb-2 h-[40px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-md text-primary">仲介業者様<br/>はこちら</p>
          </a>

          <a href="/company" className="group bg-white rounded-xl shadow p-4 text-center hover:scale-105 transition">
            <img src="./img/会社概要.png" alt="" className="mb-5 h-[40px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-md text-primary">会社概要</p>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </div>
  );
}
