import { Link } from 'react-router-dom';
import { Building2, Download, FileText, Mail } from 'lucide-react';

export function AgencyIndex() {

  return (
    <div className="header-margin">
      <div className="flex flex-col justify-center pt-12 lg:order-2 order-1 px-6 lg:px-12">
            <div className="max-w-7xl py-4 text-md text-gray-500 text-left">

              <Link to="/" className="hover:text-primary hover:underline">
                トップページ
              </Link>

              <span className="mx-2">&gt;</span>

              <span className="text-gray-700">
                仲介業者様向けサービス
              </span>

            </div>
            {/* キャッチコピー */}
            <h1 className="z-15 text-3xl md:text-5xl font-bold text-primary leading-12 lg:leading-18 mb-2 tracking-widest">
              仲介業者様向けサービス
            </h1>

            {/* 英語コピー */}
            <p className="text-primary  text-md mb-8 z-15 en">
              Services for Agencys
            </p>

            {/* 画像 */}
            <div className="relative rounded-3xl overflow-hidden -mt-20 lg:-mt-40 h-[450px] z-10">
            <img src="./img/mansion047.jpg" alt="建物" className={`absolute inset-0 w-full h-full object-cover clip-roof-firstview`}/>
            </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 bg-blue-50 border-l-4 border-primary p-6 rounded">
          <h3 className="mb-2">仲介業者様専用窓口</h3>
          <p className="text-sm text-gray-700 mb-3">
            物件に関するお問い合わせや申込手続きは、専用窓口までご連絡ください。
          </p>
          <p>
            TEL: <span className="text-primary">03-0000-0000</span>（平日 9:00～18:00）<br />
            Email: <span className="text-primary">agency@example.com</span>
          </p>
        </div>
        
        {/* 物件確認セクション */}
          <div className="py-16" id="property">
            <div className="bg-primary text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-white">物件確認</h1>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <p className="text-center text-gray-600 mb-8">
                物件情報の確認は専用システムをご利用ください。<br />
                ログインIDをお持ちでない場合は、お問い合わせください。
              </p>
              <div className="text-center">
                <a
                  href="/a"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg"
                >
                  専用システムへログイン
                </a>
              </div>
            </div>
          </div>

            {/* 申請書ダウンロード */}
            <div className="py-16" id="applications">
            <div className="bg-primary text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-white">申込書ダウンロード</h1>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                  <div>
                    <h3 className="mb-2">入居申込書</h3>
                    <p className="text-sm text-gray-600">PDF形式 / 200KB</p>
                  </div>
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    ダウンロード
                  </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                  <div>
                    <h3 className="mb-2">重要事項説明書</h3>
                    <p className="text-sm text-gray-600">PDF形式 / 350KB</p>
                  </div>
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    ダウンロード
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 必要書類 */}
          <div className="py-16" id="documents">
            <div className="bg-primary text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-white">必要書類</h1>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="mb-6">入居審査に必要な書類</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>入居申込書（所定の書式）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>本人確認書類（運転免許証、健康保険証など）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>収入証明書（源泉徴収票、給与明細など）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <span>連帯保証人の承諾書（保証会社利用の場合は不要）</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="mb-4">お取引の流れ</h3>
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>物件確認・内見予約</li>
            <li>入居申込書の提出</li>
            <li>入居審査</li>
            <li>契約手続き</li>
            <li>鍵の引渡し</li>
          </ol>
          <p className="mt-6 text-sm text-gray-600">
            ※詳細な手順やご不明点は、お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
}
