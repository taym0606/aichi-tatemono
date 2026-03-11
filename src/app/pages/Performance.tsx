import { Building2, Users, TrendingUp, Award } from 'lucide-react';

export function Performance() {
  const stats = [
    { label: '管理戸数', value: '5,247戸', icon: Building2 },
    { label: '平均入居率', value: '98.2%', icon: TrendingUp },
    { label: '取引実績', value: '1,200件以上', icon: Award },
    { label: '契約オーナー数', value: '380名', icon: Users },
  ];

  const achievements = [
    { year: '2025年度', achievement: '管理戸数5,000戸突破、入居率98%達成' },
    { year: '2024年度', achievement: '賃貸管理業務優良事業者認定取得' },
    { year: '2023年度', achievement: '管理戸数4,000戸突破' },
    { year: '2022年度', achievement: '新サービス「スマート管理システム」導入' },
    { year: '2021年度', achievement: '管理戸数3,000戸突破' },
  ];

  const areas = [
    { area: '東京都', properties: 2850 },
    { area: '神奈川県', properties: 1420 },
    { area: '千葉県', properties: 650 },
    { area: '埼玉県', properties: 327 },
  ];

  return (
    <div >
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">管理実績</h1>
          <p className="text-lg opacity-90">
            20年以上の実績と信頼、安心の賃貸管理サービスを提供しています
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-center mb-12">管理実績（2026年3月現在）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl mb-2 text-primary">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-12 rounded-lg">
          <h2 className="text-center mb-12">エリア別管理実績</h2>
          <div className="max-w-3xl mx-auto">
            {areas.map((area, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex justify-between items-center mb-2">
                  <span>{area.area}</span>
                  <span className="text-primary">{area.properties.toLocaleString()}戸</span>
                </div>
                <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all"
                    style={{ width: `${(area.properties / 5247) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-center mb-12">主な実績・受賞歴</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
                >
                  <span className="bg-primary text-white px-4 py-2 rounded flex-shrink-0">
                    {item.year}
                  </span>
                  <p className="pt-2">{item.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white p-12 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">高い入居率の秘訣</h2>
            <p className="text-lg mb-8 opacity-90">
              当社では、綿密な市場調査と適切な家賃設定、迅速な募集活動により、
              業界トップクラスの入居率98.2%を維持しています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-white mb-2">市場調査</h3>
                <p className="text-sm opacity-90">
                  周辺の賃貸市場を徹底調査し、最適な家賃設定を提案します。
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-white mb-2">迅速な対応</h3>
                <p className="text-sm opacity-90">
                  空室発生から24時間以内に募集活動を開始します。
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-white mb-2">広告展開</h3>
                <p className="text-sm opacity-90">
                  大手ポータルサイトや自社サイトで幅広く物件を紹介します。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
