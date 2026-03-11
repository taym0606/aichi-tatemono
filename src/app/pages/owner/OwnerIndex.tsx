import { Link } from 'react-router-dom';
import { Building2, ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

export function OwnerIndex() {
  const services = [
    {
      title: '賃貸管理サービス',
      description: '入居者募集から建物管理まで、トータルサポート',
      href: '/owner/service',
      icon: Building2,
    },
    {
      title: '管理の流れ',
      description: '契約から管理開始までの流れをご説明',
      href: '/owner/flow',
      icon: ArrowRight,
    },
    {
      title: '管理実績',
      description: 'すべてのお客様に満足いただける管理を目指しています',
      href: '/performance',
      icon: ArrowRight,
    },
  ];

  return (
    <div >
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">大家様・オーナー様向けサービス</h1>
          <p className="text-lg opacity-90">
            大切な資産を守り、収益を最大化する賃貸管理サービス
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="mb-3">入居率98.2%</h3>
              <p className="text-sm text-gray-600">
                迅速な募集活動と適切な家賃設定で高い入居率を実現
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-3">24時間365日対応</h3>
              <p className="text-sm text-gray-600">
                緊急時も安心の24時間365日サポート体制
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="mb-3">5,000戸以上の実績</h3>
              <p className="text-sm text-gray-600">
                20年以上の経験と豊富な管理実績
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-center mb-12">サービス一覧</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="text-primary flex items-center text-sm group-hover:underline">
                  詳しく見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-primary text-white p-12 rounded-lg text-center">
          <h2 className="text-white mb-4">お気軽にご相談ください</h2>
          <p className="text-lg mb-8 opacity-90">
            賃貸管理に関するご相談は無料です。まずはお問い合わせください。
          </p>
          <Link
            to="/owner/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-gray-100 transition-colors rounded-lg"
          >
            お問い合わせ
          </Link>
        </section>
      </div>
    </div>
  );
}
