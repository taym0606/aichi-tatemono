import { CheckCircle } from 'lucide-react';

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
          <h1 className="text-white mb-4">管理の流れ</h1>
          <p className="text-lg opacity-90">
            お問い合わせから管理開始までの流れをご説明します
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200 -mb-12" />
              )}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center relative z-10">
                    <span className="text-xl">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
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
