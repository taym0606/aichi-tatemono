import { Link } from 'react-router-dom';
import { Heart, FileText, MapPin } from 'lucide-react';
import { Shield, Lightbulb } from 'lucide-react';
import { Train, Car } from 'lucide-react';

export function CompanyIndex() {
    const values = [
    {
      icon: Heart,
      title: '誠実さ',
      description: 'お客様との信頼関係を第一に考え、誠実な対応を心がけています。',
    },
    {
      icon: Shield,
      title: '安心・安全',
      description: '大切な資産を守り、安心して任せられるサービスを提供します。',
    },
    {
      icon: Lightbulb,
      title: '革新性',
      description: '常に新しい技術やサービスを取り入れ、より良い管理を追求します。',
    },
  ];

    const companyData = [
    { label: '会社名', value: '不動産管理株式会社' },
    { label: '代表者', value: '代表取締役社長 山田 太郎' },
    { label: '住所', value: '〒000-0000 東京都○○区○○1-2-3' },
    { label: 'TEL', value: '03-0000-0000' },
    { label: 'FAX', value: '03-0000-0001' },
    { label: 'MAIL', value: 'info@example.com' },
    { label: '営業時間', value: '9:00～18:00' },
    { label: '定休日', value: '土曜日・日曜日・祝日' },
    { label: '駐車場', value: '有り（2台）' },
    { label: '設立', value: '2005年4月1日' },
    { label: '資本金', value: '3,000万円' },
    { label: '賃貸住宅管理業登録番号', value: '国土交通大臣(1)第000000号' },
  ];

  return (
    <div className="header-margin">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">会社概要</h1>
          <p className="text-lg opacity-90">
            不動産管理株式会社について
          </p>
        </div>
      </div>

      <div className="text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-primary">経営理念</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-center mb-8">私たちの使命</h2>
          <p className="text-lg text-center text-gray-700 leading-relaxed">
            私たちは、オーナー様の大切な資産価値を最大化し、<br />
            入居者様に快適で安心できる住環境を提供することで、<br />
            豊かな暮らしと社会の発展に貢献します。
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-center mb-12">企業理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="mb-6">代表挨拶</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            この度は、当社ウェブサイトをご覧いただき誠にありがとうございます。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社は2005年の設立以来、賃貸管理業務を通じて、オーナー様と入居者様の架け橋となることを使命としてまいりました。
            不動産管理において最も大切なことは、「信頼」であると考えております。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            オーナー様からお預かりした大切な資産を適切に管理し、入居者様には快適な住環境を提供することで、
            双方にとって満足いただけるサービスを実現してまいります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            今後も、誠実さと革新性を持ち続け、より良いサービスの提供に努めてまいります。
            どうぞよろしくお願い申し上げます。
          </p>
          <p className="text-right">
            代表取締役社長<br />
            <span className="text-lg">山田 太郎</span>
          </p>
        </div>
      </div>

      <div className=" text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-primary">会社情報</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <tbody>
              {companyData.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-b-0">
                  <th className="bg-gray-50 px-6 py-4 text-left w-1/3 align-top">
                    {item.label}
                  </th>
                  <td className="px-6 py-4">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className=" text-center py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-primary">アクセス</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-8">
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-2" />
              <p>地図を表示</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start space-x-3 mb-4">
              <Train className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-2">電車でお越しの方</h3>
                <ul className="text-sm space-y-2 text-gray-600">
                  <li>JR○○線「○○駅」東口より徒歩5分</li>
                  <li>地下鉄○○線「○○駅」3番出口より徒歩7分</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start space-x-3 mb-4">
              <Car className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-2">お車でお越しの方</h3>
                <ul className="text-sm space-y-2 text-gray-600">
                  <li>首都高速○号線「○○IC」より約10分</li>
                  <li>駐車場：2台完備（要予約）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="mb-4">所在地</h3>
          <div className="space-y-2 text-gray-700">
            <p>〒000-0000</p>
            <p>東京都○○区○○1-2-3 ○○ビル5階</p>
            <p className="pt-4">TEL: 03-0000-0000</p>
            <p>FAX: 03-0000-0001</p>
            <p>営業時間: 9:00～18:00</p>
            <p>定休日: 土曜日・日曜日・祝日</p>
          </div>
        </div>
      </div>
    </div>
  );
}
