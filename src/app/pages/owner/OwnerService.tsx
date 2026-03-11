import { CheckCircle, Users, FileText, TrendingUp, Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OwnerService() {
  const services = [
    {
      icon: Users,
      title: '入居者募集・管理',
      description: '空室対策から入居者審査、契約手続きまで一貫してサポートします。',
    },
    {
      icon: FileText,
      title: '賃料管理・収支報告',
      description: '賃料の集金代行、滞納対応、詳細な収支報告を毎月提供します。',
    },
    {
      icon: Shield,
      title: '建物管理・メンテナンス',
      description: '定期点検から緊急対応まで、建物の維持管理を徹底します。',
    },
    {
      icon: TrendingUp,
      title: '資産価値の向上',
      description: 'リフォーム提案や家賃設定など、資産価値を最大化するアドバイスを提供します。',
    },
  ];

  const features = [
    '24時間365日の緊急対応',
    '専任担当者による丁寧なサポート',
    '透明性の高い収支報告',
    '空室対策の充実',
    '入居者トラブルの迅速な解決',
    '定期的な巡回点検',
  ];

  return (
    <div >
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">賃貸管理サービス</h1>
          <p className="text-lg opacity-90">
            オーナー様の大切な資産を守り、収益を最大化するサービスを提供します
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-center mb-12">サービス内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-12 rounded-lg">
          <h2 className="text-center mb-12">サービスの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-center mb-8">管理委託の流れ</h2>
          <p className="text-center text-gray-600 mb-8">
            詳しい管理の流れについては、こちらをご覧ください。
          </p>
          <div className="text-center">
            <Link
              to="/owner/flow"
              className="inline-flex items-center px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg"
            >
              管理の流れを見る
            </Link>
          </div>
        </section>

        <section className="bg-primary text-white p-12 rounded-lg text-center">
          <h2 className="text-white mb-4">お問い合わせ</h2>
          <p className="text-lg mb-8 opacity-90">
            賃貸管理に関するご相談は無料です。お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>03-0000-0000</span>
            </div>
          </div>
          <Link
            to="/owner/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-gray-100 transition-colors rounded-lg"
          >
            お問い合わせフォーム
          </Link>
        </section>
      </div>
    </div>
  );
}
