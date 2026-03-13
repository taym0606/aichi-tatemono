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
      <div className="flex flex-col justify-center pt-12 lg:order-2 order-1 px-6 lg:px-12">

            {/* キャッチコピー */}
            <h1 className="z-15 text-3xl md:text-5xl font-bold text-primary leading-12 lg:leading-18 mb-2 tracking-widest">
              会社概要
            </h1>

            {/* 英語コピー */}
            <p className="text-primary  text-md mb-8 z-15 en">
              Company Profile
            </p>

            {/* 画像 */}
            <div className="relative rounded-3xl overflow-hidden -mt-20 lg:-mt-40 h-[450px] z-10">
            <img src="./img/mansion047.jpg" alt="建物" className={`absolute inset-0 w-full h-full object-cover clip-roof-firstview`}/>

          </div>

      {/* 経営理念 */}
      <div className="absolute  w-full h-full pb-16 z-1"> </div>
      <section className="relative  -mt-145  pt-120 pb-120 lg:ml-6 mr-0 z-20">
      <div className="relative   max-w-7xl mx-auto px-4 text-center pt-40">
        {/* タイトル */}
      <div className="flex flex-col items-center">
        <img
          src="./img/会社概要.png"
          alt=""
          className="w-[60px] mb-6"
        />

        <h2 className="text-3xl font-bold text-primary mb-12">
          経営理念
        </h2>
      </div>

        {/* 3つの強み */}
        <div className="flex flex-col md:flex-row justify-center gap-10 pr-6 pl-10">
          {/* 1つ目 */}
          <div className="flex-1 text-center">
            <img src="./img/mansion046.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
            <p className="text-primary text-xl font-semibold mb-8">「信頼でつながる賃貸管理」</p>
            <p className="text-black tracking-wide text-md leading-[1.7em]">
              私たちはオーナー様の資産価値を守り、入居者様の安心な暮らしを支え、地域に長く愛される住まいを創り続けます。誠実な管理と確かな提案で、不動産の未来を育てていきます。
            </p>
          </div>

          {/* 2つ目 */}
          <div className=" flex-1 text-center">
            <img src="./img/mansion046.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
            <p className="text-primary text-xl font-semibold mb-8">「地域の暮らしを支える住まいのパートナー」</p>
            <p className="text-black tracking-wide leading-[1.7em]">
              私たちはオーナー様の大切な資産を守りながら、入居者様に安心できる住環境を提供し、地域の暮らしをより豊かにする賃貸管理を行います。住まいを通して地域の価値を高め続けます。
            </p>
          </div>

          {/* 3つ目 */}
          <div className="flex-1 text-center">
            <img src="./img/mansion046.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
            <p className="text-primary  text-xl font-semibold mb-8">「不動産管理で価値を生み続ける」</p>
            <p className="text-black tracking-wide leading-[1.7em]">
              私たちは賃貸管理を通じて資産価値を高め、人と住まいのより良い関係を創り、持続可能な地域社会の実現に貢献します。変化を恐れず、より良い管理の形を追求し続けます。
            </p>
          </div>
        </div>

        {/* ボタン */}
        <a
          href="./company"
          className="inline-block mt-12 bg-primary text-white font-semibold py-4 px-16 rounded-full hover:bg-primary/85 transition"
        >
          詳しくはこちら →
        </a>
        </div>
      </section>

      {/*代表挨拶 */}
      <div className="">
        <section className=" relative z-30 bg-white rounded-3xl py-24 px-8 lg:ml-20 lg:mr-16 md:mr-0 -mt-96">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] z-100 gap-16 items-center">

            {/* 左側テキスト */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-3">
                代表挨拶
              </h2>

              <p className="text-primary text-md tracking-widest mb-6">
                Message from the President
              </p>

              <p className="text-gray-600 leading-loose mb-10 text-md">
                賃貸管理とは、オーナー様に代わって入居者募集・契約手続き・
                家賃管理・建物管理などを行い、安定した賃貸経営をサポートする
                サービスです。あいち建物管理では、入居者対応から建物の維持管理
                まで幅広くサポートし、オーナー様が安心して賃貸経営を行える環境
                を整えています。
              </p>

              <a
                href="/owner/flow"
                className="inline-flex justify-items-center bg-primary text-white px-8 py-3 rounded-full hover:opacity-90 font-bold"
              >
                企業概要はこちら →
              </a>
            </div>


            {/* 右側カード */}
            <div className="">
              <img src="./img/president.jpg" alt="" className="rounded-3xl "/>
            </div>

          </div>
        </section>
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
    </div>
  </div>
  );
}
