import { Building2, Users, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="header-margin">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl py-4 text-m text-left">
              <Link to="/" className=" hover:underline">
                トップページ
              </Link>
              <span className="mx-2">&gt;</span>

              <Link to="/owner" className=" hover:underline">
                大家様向けサービス
              </Link>
              <span className="mx-2">&gt;</span>

              <span className="text-gray-900">
                管理実績
              </span>
          </div>
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
      </div>

      <section className="py-24 color-secondary-opacity10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-4 lg:p-8">
          <h2 className="text-center pt-12 pb-20 text-primary text-3xl font-bold">管理実績</h2>
            {/* 賃貸管理項目 */}
            <div className="flex flex-col md:flex-row justify-center gap-12 pr-6 pl-6 mb-12">
              {/* 1つ目 */}
              <div className="flex-1 text-center">
                <p className="text-primary text-2xl font-semibold mb-4 text-left pl-4 border-l-2 border-secondary">岡崎市</p>
                <img src="./img/mansion046.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
                <div className="text-left max-w-xs mx-auto space-y-2 text-md tracking-wide">
                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">建物種類</span>
                    <span className="font-medium text-center">マンション</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">築年数</span>
                    <span className="font-medium text-center">築18年</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">構造</span>
                    <span className="font-medium text-center">RC造</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr]">
                    <span className="text-gray-500">間取り</span>
                    <span className="font-medium text-center">1LDK〜3LDK</span>
                  </div>
                </div>
              </div>
            
              {/* 2つ目 */}
              <div className="flex-1 text-center">
                <p className="text-primary text-2xl font-semibold mb-4 text-left pl-4 border-l-2 border-secondary">安城市</p>
                <img src="./img/mansion070.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
                <div className="text-left max-w-xs mx-auto space-y-2 text-md tracking-wide">

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">建物種類</span>
                    <span className="font-medium text-center">アパート</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">築年数</span>
                    <span className="font-medium text-center">築23年</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">構造</span>
                    <span className="font-medium text-center">RC造</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr]">
                    <span className="text-gray-500">間取り</span>
                    <span className="font-medium text-center">1LK</span>
                  </div>
                </div>
              </div>

              {/* 3つ目 */}
              <div className="flex-1 text-center">
                <p className="text-primary text-2xl font-bold mb-4 text-left pl-4 border-l-2 border-secondary">豊橋市</p>
                <img src="./img/mansion047.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
                <div className="text-left max-w-xs mx-auto space-y-2 text-md tracking-wide">

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">建物種類</span>
                    <span className="font-medium text-center">コーポ</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">築年数</span>
                    <span className="font-medium text-center">築7年</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">構造</span>
                    <span className="font-medium text-center">RC造</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr]">
                    <span className="text-gray-500">間取り</span>
                    <span className="font-medium text-center">1LDK</span>
                  </div>
                </div>
              </div>



              
            </div>
            </div>
            </div>
        </section>
  </div>
  );
}
