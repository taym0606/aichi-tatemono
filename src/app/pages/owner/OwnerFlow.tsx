import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OwnerFlow() {
  const steps = [
    {
      number: '01',
      title: 'お問い合わせ・ご相談',
      description: 'お電話またはお問い合わせフォームよりご連絡ください。物件の状況や管理に関するご要望をお聞かせください。',
    },
    {
      number: '02',
      title: '物件調査・ご提案',
      description: '担当者が物件を訪問し、現地調査を実施します。物件の状況を詳しく確認し、最適な管理プランをご提案いたします。',
    },
    {
      number: '03',
      title: 'お見積もり',
      description: '管理プランに基づいた詳細なお見積もりをご提示します。管理手数料や各種費用について丁寧にご説明いたします。',
    },
    {
      number: '04',
      title: 'ご契約',
      description: '管理委託契約を締結します。契約内容について十分にご説明し、ご納得いただいた上で契約を進めます。',
    },
    {
      number: '05',
      title: '管理開始準備',
      description: '物件情報の登録、入居者情報の引継ぎ、必要書類の整備などを行います。',
    },
    {
      number: '06',
      title: '管理開始',
      description: '管理業務を開始します。専任担当者が責任を持って管理業務を遂行いたします。',
    },
  ];

  const features = [
    '初回のご相談・お見積もりは無料です',
    '契約前の物件調査も無料で実施します',
    '契約後も定期的にご報告いたします',
    '管理開始後のサポート体制も万全です',
  ];

  return (
    <div className="header-margin">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" py-4 text-m text-left">
              <Link to="/" className=" hover:underline">
                トップページ
              </Link>
              <span className="mx-2">&gt;</span>

              <Link to="/owner" className=" hover:underline">
                大家様向けサービス
              </Link>
              <span className="mx-2">&gt;</span>

              <span className="text-gray-900">
                賃貸管理の流れ
              </span>
            </div>
          <h1 className="text-white mb-4">管理の流れ</h1>
          <p className="text-lg opacity-90">
            お問い合わせから管理開始までの流れをご説明します
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* フロー（縦カード強化版） */}
      <div className="mb-20">
             <div>
              <h2 className="text-3xl font-bold text-primary mb-3">
                賃貸管理
              </h2>

              <p className="text-primary text-md tracking-widest mb-6">
                PROPERTY MANAGEMENT
              </p>

              <p className="text-gray-600 leading-loose mb-18 text-md ">
                賃貸管理とは、オーナー様に代わって入居者募集・契約手続き・
                家賃管理・建物管理などを行い、安定した賃貸経営をサポートする
                サービスです。あいち建物管理では、入居者対応から建物の維持管理
                まで幅広くサポートし、オーナー様が安心して賃貸経営を行える環境
                を整えています。
              </p>
        </div>
        <div className="relative max-w-3xl mx-auto">

          {steps.map((step, index) => (
                <div key={index} className="relative flex items-start mb-20 -ml-10">
                  {/* 縦ライン（最後以外だけ表示） */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-8 top-10 lg:left-12 lg:top-20 h-full w-1 bg-primary/20 mt-2"></div>
                  )}

                  {/* アイコン（でかく） */}
                  <div className="z-10 flex-shrink-0">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 -mt-10 -ml-4 bg-primary rounded-full flex items-center justify-center shadow-md border border-primary/20">
                      <img
                        src={`/img/flow${index + 1}.png`}
                        className="lg:w-18 lg:h-18 w-10 h-10 object-contain"
                      />
                    </div>
                  </div>

                  {/* カード */}
                  <div className="relative ml-20 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition w-full border border-gray-100">

                    {/* 番号（完全な丸） */}
                    <div className="absolute -top-6 -left-6 w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold shadow">
                      {step.number}
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-md leading-relaxed">
                      {step.description}
                    </p>

                  </div>
                </div>
              ))}
        </div>
      </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="mb-6 text-center">安心のポイント</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary/20 border-l-4 border-secondary p-6 rounded">
          <h3 className="mb-3">所要期間について</h3>
          <p className="text-gray-700">
            お問い合わせから管理開始までの期間は、通常2週間～1ヶ月程度です。
            物件の状況や必要な準備により前後する場合がございます。
            お急ぎの場合はご相談ください。
          </p>
        </div>
      </div>
    </div>
  );
}
