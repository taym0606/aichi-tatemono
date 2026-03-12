import { Link } from 'react-router-dom';
import { AlertCircle, LogOut, FileEdit, Mail } from 'lucide-react';

export function TenantIndex() {
  const services = [
    {
      title: 'お問い合わせ',
      description: '物件探しや空室確認、その他ご質問はこちらから',
      href: '/tenant/contact',
      icon: Mail,
    },
    {
      title: '不具合連絡',
      description: '設備の故障や不具合がございましたらこちらからご連絡ください',
      href: '/tenant/issue',
      icon: AlertCircle,
    },
    {
      title: '契約内容の変更・更新・確認',
      description: '契約内容についてはこちらからご連絡ください',
      href: '/tenant/faq',
      icon: FileEdit,
    },
    {
      title: '退去申し込み',
      description: '退去のお手続きはこちらから',
      href: '/tenant/move-out',
      icon: LogOut,
    },
  ];

  return (
    <div className="header-margin">
      <div className="bg-secondary text-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">個人入居者様向けサービス</h1>
          <p className="text-lg">
            快適な住環境のために、各種サポートをご提供しています
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 bg-yellow-50 border-l-4 border-secondary p-6 rounded">
          <h3 className="mb-2">緊急時の連絡先</h3>
          <p className="text-sm text-gray-700 mb-3">
            水漏れ・ガス漏れなど緊急のトラブルが発生した場合は、以下の緊急連絡先までお電話ください。
          </p>
          <p className="text-lg">
            24時間緊急対応ダイヤル: <span className="text-primary">0120-000-000</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-foreground transition-colors">
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
