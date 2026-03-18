
import React from "react";
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
  const Section = ({ title, children }: any) => (
    <section className="py-16 border-b">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
  
  const features = [
    '24時間365日の緊急対応',
    '専任担当者による丁寧なサポート',
    '透明性の高い収支報告',
    '空室対策の充実',
    '入居者トラブルの迅速な解決',
    '定期的な巡回点検',
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
                賃貸管理サービスとは
              </span>
            </div>
          <h1 className="text-white mb-4">賃貸管理サービス</h1>
          <p className="text-lg opacity-90">
            オーナー様の大切な資産を守り、収益を最大化するサービスを提供します
          </p>
        </div>
      </div>


    <div className="bg-white text-gray-800">

      {/* Hero */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-green-700 mb-4">
            賃貸管理
          </h1>
          <p className="text-gray-600">
            管理に特化し、オーナー様の利益を最大化します
          </p>
        </div>
      </section>

      {/* コンセプト */}
      <Section title="管理に特化したサービス">
        <p className="text-gray-600 leading-relaxed">
          管理会社として、オーナー様の利益最大化を追求し、
          管理費を主軸としたビジネスモデルにより
          本質的な賃貸経営をサポートします。
        </p>
      </Section>

      {/* 空室対策 */}
      <Section title="空室対策">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">
              本気の入居募集
            </h3>
            <p className="text-sm text-gray-600">
              オーナー目線で空室を最大の課題と捉え、
              満室を目指した募集活動を行います。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">
              オーナー代理型募集
            </h3>
            <p className="text-sm text-gray-600">
              一社専任ではなく広く仲介会社へ展開し、
              入居率向上を実現します。
            </p>
          </div>
        </div>
      </Section>

      {/* ワンストップ */}
      <Section title="ワンストップ管理">
        <p className="text-gray-600 mb-4">
          契約・更新・退去・修繕まで一括対応。
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>・契約管理</li>
          <li>・退去立会い</li>
          <li>・鍵管理</li>
          <li>・原状回復工事</li>
        </ul>
      </Section>

      {/* 24時間 */}
      <Section title="24時間対応">
        <p className="text-gray-600">
          24時間365日トラブル対応し、
          入居者満足度を向上させます。
        </p>
      </Section>

      {/* 資金管理 */}
      <Section title="資金管理">
        <ul className="space-y-2 text-sm text-gray-600">
          <li>・家賃集金・送金</li>
          <li>・滞納対応</li>
          <li>・収支報告書作成</li>
        </ul>
      </Section>

      {/* 建物管理 */}
      <Section title="建物管理">
        <ul className="space-y-2 text-sm text-gray-600">
          <li>・定期清掃</li>
          <li>・法定点検</li>
          <li>・巡回管理</li>
        </ul>
      </Section>

      {/* 管理タイプ */}
      <Section title="管理タイプ">
        <div className="bg-green-50 p-6 rounded-xl">
          <h3 className="font-semibold mb-2">
            集金総合管理
          </h3>
          <p className="text-sm text-gray-600">
            入居募集から管理まで全て代行し、
            オーナー様の負担を軽減します。
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 bg-orange-50 text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          お気軽にご相談ください
        </h2>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-500">
          お問い合わせ
        </button>
      </section>
    </div>
  </div>
  );
}
