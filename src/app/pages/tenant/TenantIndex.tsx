import { Link } from 'react-router-dom';
import { AlertCircle, LogOut, FileEdit, Mail } from 'lucide-react';

export function TenantIndex() {

  return (
    <div className='header-margin bg-gray-50'>

          <div className="flex flex-col justify-center pt-12 lg:order-2 order-1 px-6 lg:px-12">
            <div className="max-w-7xl py-4 text-md text-gray-500 text-left">

              <Link to="/" className="hover:text-primary hover:underline">
                トップページ
              </Link>

              <span className="mx-2">&gt;</span>

              <span className="text-gray-700">
                入居者様向けサービス
              </span>

            </div>

            {/* キャッチコピー */}
            <h1 className="z-15 text-3xl md:text-5xl font-bold text-primary leading-12 lg:leading-18 mb-2 tracking-widest">
              入居者様向けサービス
            </h1>

            {/* 英語コピー */}
            <p className="text-primary  text-md mb-8 z-15 en">
              Services for Residents
            </p>

            {/* 画像 */}
            <div className="relative rounded-3xl overflow-hidden -mt-20 lg:-mt-40 h-[450px] z-10">
            <img src="./img/mansion047.jpg" alt="建物" className={`absolute inset-0 w-full h-full object-cover clip-roof-firstview`}/>

          </div>

        {/* メニューカード */}

        <p className='text-primary text-center font-bold text-3xl mt-24 mb-12'>お問い合わせ</p>
        <p className='text-secondary text-center  font-bold text-4xl mt-12 mb-12'>個人の入居者様はこちらから</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <a href="/tenant/contact" className="group bg-white rounded-xl border-secondary border p-4 text-center hover:scale-105 transition ">
            <img src="./img/flow1.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-2xl text-secondary py-2">お問い合わせ</p>
            <p className="text-md text-gray-500">ご相談やその他ご質問はこちら</p>
          </a>

          <a href="/tenant/issue" className="group bg-white rounded-xl border-secondary border p-4 text-center hover:scale-105 transition">
            <img src="./img/不具合.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-xl text-secondary py-2">不具合連絡</p>
            <p className="text-md text-gray-500">設備の故障や不具合がございましたらこちらからご連絡ください</p>
          </a>

          <a href="/tenant/change" className="group bg-white rounded-xl border-secondary border p-4 text-center hover:scale-105 transition">
            <img src="./img/契約の更新.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-xl text-secondary py-2">ご契約の変更・更新・確認</p>
            <p className="text-md text-gray-500">契約内容のに関するお手続きはこちらから</p>
          </a>

          <a href="/tenant/move-out" className="group bg-white rounded-xl border-secondary border p-4 text-center hover:scale-105 transition">
            <img src="./img/退去.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-xl text-secondary py-2">退去手続き</p>
            <p className="text-md text-gray-500">契約解約のお手続きはこちらから</p>
          </a>
        </div>


        <p className='text-primary text-center font-bold text-4xl mt-24 mb-12'>法人契約の入居者様はこちらから</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-24">
          <a href="/corporate/contact" className="group bg-white rounded-xl border-primary border p-4 text-center hover:scale-105 transition ">
            <img src="./img/flow1.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-2xl text-primary py-2">お問い合わせ</p>
            <p className="text-md text-gray-500">ご相談やその他ご質問はこちら</p>
          </a>

          <a href="/corporate/issue" className="group bg-white rounded-xl border-primary border p-4 text-center hover:scale-105 transition">
            <img src="./img/不具合.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-xl text-primary py-2">不具合連絡</p>
            <p className="text-md text-gray-500">設備の故障や不具合がございましたらこちらからご連絡ください</p>
          </a>

          <a href="/corporate/change" className="group bg-white rounded-xl border-primary border p-4 text-center hover:scale-105 transition">
            <img src="./img/契約の更新.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-xl text-primary py-2">ご契約の変更・更新・確認</p>
            <p className="text-md text-gray-500">契約内容のに関するお手続きはこちらから</p>
          </a>

          <a href="/corporate/cancellation" className="group bg-white rounded-xl border-primary border p-4 text-center hover:scale-105 transition">
            <img src="./img/退去.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
            <p className="text-xl text-primary py-2">退去・解約手続き</p>
            <p className="text-md text-gray-500">契約解約のお手続きはこちらから</p>
          </a>
        </div>
      </div>
    </div>
  );
}
