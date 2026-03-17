import { Link } from 'react-router-dom';
import { Building2, ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

export function OwnerIndex() {

  return (
        <div className='header-margin bg-gray-50'>
          <div className="flex flex-col justify-center pt-12 lg:order-2 order-1 px-6 lg:px-12">
            <div className="max-w-7xl py-4 text-md text-gray-500 text-left">

              <Link to="/" className="hover:text-primary hover:underline">
                トップページ
              </Link>

              <span className="mx-2">&gt;</span>

              <span className="text-gray-700">
                大家様向けサービス
              </span>

            </div>

            {/* キャッチコピー */}
            <h1 className="z-15 text-3xl md:text-5xl font-bold text-primary leading-12 lg:leading-18 mb-2 tracking-widest">
              大家様向けサービス
            </h1>

            {/* 英語コピー */}
            <p className="text-primary  text-md mb-8 z-15 en">
              Services for Owners
            </p>

            {/* 画像 */}
            <div className="relative rounded-3xl overflow-hidden -mt-20 lg:-mt-40 h-[450px] z-10">
            <img src="./img/mansion047.jpg" alt="建物" className={`absolute inset-0 w-full h-full object-cover clip-roof-firstview`}/>

          </div>

        <section className="mb-16">
          <h2 className="text-center mb-12 text-3xl font-bold text-primary mt-24">サービス一覧</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <a href="/owner/service" className="group bg-white rounded-xl border-primary border p-4 text-center hover:scale-105 transition ">
              <img src="./img/flow1.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
              <p className="text-2xl text-primary py-2">賃貸管理サービス</p>
              <p className="text-md text-gray-500">賃貸管理サービスはどのようなものがあるか、どんなプランがあるかご紹介</p>
            </a>

            <a href="/owner/flow" className="group bg-white rounded-xl border-primary border p-4 text-center hover:scale-105 transition">
              <img src="./img/不具合.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
              <p className="text-xl text-primary py-2">賃貸管理の流れ</p>
              <p className="text-md text-gray-500">ご相談から契約、管理開始までの流れをご紹介します</p>
            </a>

            <a href="/performance" className="group bg-white rounded-xl border-primary border p-4 text-center hover:scale-105 transition">
              <img src="./img/契約の更新.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
              <p className="text-xl text-primary py-2">管理実績</p>
              <p className="text-md text-gray-500">契約内容のに関するお手続きはこちらから</p>
            </a>
          </div>
        </section>

        <h2 className="lg:text-3xl text-2xl font-bold text-primary mb-12 mx-auto mt-24">
          あいち建物管理のできること
        </h2>

        {/* 3つの強み */}
        <div className="flex flex-col md:flex-row justify-center gap-10 pr-6 pl-10 mb-24">
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


        <section className="bg-primary text-white p-12 rounded-lg text-center mb-24">
          <h2 className="text-white mb-4 text-lg">お気軽にご相談ください</h2>
          <p className="text-2xl mb-8 opacity-90">
            賃貸管理に関するご相談は無料です。まずはお問い合わせください。
          </p>
          <Link
            to="/owner/contact"
            className=" text-2xl inline-flex items-center justify-center px-16 py-6 bg-white text-primary hover:bg-gray-100 transition-colors rounded-lg"
          >
            お問い合わせ
          </Link>
        </section>
      </div>
    </div>
  );
}
