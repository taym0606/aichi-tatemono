import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  FileText,
  TrendingUp,
  Phone,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";


export function Home() {
  const announcements = [
    {
      date: "2026.04.21",
      title: "新サービス開始のご案内",
      category: "サービス",
    },
    {
      date: "2026.04.13",
      title: "管理実績を更新しました",
      category: "更新情報",
    },
    {
      date: "2026.04.01",
      title: "株式会社あいち建物管理開業のお知らせ",
      category: "お知らせ",
    },
  ];

  const strengths = [
    {
      icon: Building2,
      title: "家主様視点で考える建物管理",
      description:
        "大切な資産をお借りさせていただくにあたり家主様の利益を最大限追求し、家主様ファーストで安全に管理させていただきます。",
    },
    {
      icon: Users,
      title: "２４時間３６５日対応可能",
      description:
        "不具合や困ったときにいつでも専任担当者が迅速に対応します。",
    },
    {
      icon: FileText,
      title: "透明性の高い運営",
      description:
        "定期的な報告書の提出や詳細な収支報告で、安心して任せられる管理体制です。",
    },
    {
      icon: TrendingUp,
      title: "収益性の向上",
      description:
        "空室対策や家賃設定のアドバイスなど、収益性を最大化するサポートを実施。",
    },
  ];

  const contactCategories = [
    {
      title: "大家様・オーナー様",
      description: "賃貸管理の方法や契約内容など小さなことでもご相談できます",
      href: "/owner/contact",
      color: "bg-white",
    },
    {
      title: "個人の入居者様",
      description: "物件の確認や空室情報など小さなことでもご相談できます",
      href: "/tenant/contact",
      color: "bg-white",
    },
    {
      title: "法人契約の入居者様",
      description: "物件の確認や空室情報など小さなことでもご相談できます",
      href: "/corporate/contact",
      color: "bg-white",
    },
  ];

  const images = [
    "/img/mansion047.jpg",
    "/img/mansion046.jpg",
    "/img/mansion070.jpg",
    "/img/mansion050.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      {/* ファーストビュー */}
      <section id="firstview" className="xl:min-h-screen bg-gray-50 flex pt-4 lg:pb-24">

        <div className="mx-auto w-full grid lg:grid-cols-[360px_1fr] gap-10 xl:px-20 lg:px-10 md:px-6 px-4">

          {/* 左側 */}
          <div className="flex flex-col justify-center lg:order-1  order-2 lg:pt-8 ">

            {/* ロゴ */}
            <div className="mb-6 lg:-mt-0 -mt-25">
              <h2 className="mx-auto mb-2 relative z-20">
                {/*<img src="./img/aichitatemono-img.png" alt="ロゴ" className="w-[50%] mx-auto" />*/}
                <img src="./img/aichitatemono-img.svg" alt="株式会社"className="lg:w-[30%] w-[10%] mx-auto mb-4"/>
                <img src="./img/aichitatemono-logo2.svg" alt="あいち建物管理" className="lg:w-[100%] w-[70%] mx-auto"/>
              </h2>
            </div>

            {/* メニューカード */}
                <div className="grid grid-cols-2 gap-2 mb-8">

                  <a href="/owner" className="group bg-white rounded-xl shadow-xl  p-4 text-center hover:scale-105 transition">
                    <img src="./img/家主.png" alt="" className="mb-2 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
                    <p className="text-xl text-primary">大家様<br/>はこちら</p>
                  </a>

                  <a href="/tenant" className="group bg-white rounded-xl shadow-xl p-4 text-center hover:scale-105 transition">
                    <img src="./img/個人入居者.png" alt="" className="mb-2 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
                    <p className="text-xl text-primary">入居者様<br/>はこちら</p>
                  </a>

                  <a href="/agency" className="group bg-white rounded-xl shadow-xl  p-4 text-center hover:scale-105 transition">
                    <img src="./img/法人.png" alt="" className="mb-2 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
                    <p className="text-xl text-primary">仲介業者様<br/>はこちら</p>
                  </a>

                  <a href="/company" className="group bg-white rounded-xl shadow-xl  p-4 text-center hover:scale-105 transition">
                    <img src="./img/会社概要.png" alt="" className="mb-5 h-[60px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
                    <p className="text-xl text-primary">会社概要</p>
                  </a>

                {/* 電話 */}
                <a className="flex items-center justify-center gap-2 mb-1 px-2 py-4 bg-primary shadow-xl rounded-xl hover:bg-primary/90 mt-2">
                  <Phone className="h-5 w-5 text-white shrink-0" />
                  <span className="text-mb text-white">0564-51-8007</span>
                </a>

                {/* メール */}
                <a className="flex items-center justify-center gap-2 mb-1 px-2 py-4 bg-secondary shadow-xl rounded-xl hover:bg-secondary/90 mt-2">
                  <Mail className="h-5 w-5 text-white shrink-0" />
                  <span className="text-mb text-white">info@aichi-tatemono.jp</span>
                </a>
                </div>
              <div className="grid grid-cols-2 lg:grid lg:grid-cols-1">
                <p className="text-md lg:text-lg text-primary text-center mb-2">賃貸住宅管理業登録番号<br/>国土交通大臣(2)第810000号</p>
                <p className="text-md lg:text-lg text-primary text-center lg:mb-2">宅建番号<br/>愛知県知事(3)第114514号</p>
              </div>
            </div>

          {/* 右側 */}
          <div className="flex flex-col justify-center  lg:order-2 order-1">

            {/* キャッチコピー */}
            <h1 className="z-15 text-3xl md:text-5xl font-bold text-primary leading-12 lg:leading-14 mb-2 tracking-widest text-shadow">
              安心と信頼の賃貸管理を作る
              <br />
              <p className="tracking-tighter">プロフェッショナル 集 団</p>
            </h1>

            {/* 英語コピー */}
            <p className="text-primary  text-md mb-8 z-15 en">
              Trust and Integrity for Your Property Assets.
            </p>


            {/* 画像 */}
            <div className="relative rounded-3xl overflow-hidden -mt-36 lg:-mt-30 xl:-mt-48 h-[650px] z-10">

            {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="建物"
              className={`
                  absolute inset-0 w-full h-full object-cover clip-roof-firstview
                  transition-opacity duration-[2000ms]
                  ${i === index ? "opacity-100 animate-zoom" : "opacity-0"}
              `}
            />))}
          </div>
          </div>
        </div>
      </section>

      <section className="xl:min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex pt-4">
        <div className="mx-auto w-full  xl:px-20 lg:px-10 md:px-6 px-4 mt-10 ">
          <h2 className="text-center mb-12 text-3xl lg:text-5xl font-bold text-primary leading-16"><br/>"賃貸管理"を支える、<br/>あいち建物管理のサービス</h2>
            {/* メニューカード */}
            <div className="grid lg:grid-cols-3 gap-4 mb-8">
                  <a href="/owner" className="group bg-white rounded-xl shadow-lg border-primary border-2 p-8 text-center hover:scale-105 transition">
                    <img src="./img/家主.png" alt="" className="mb-6 h-[100px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
                    <p className="text-5xl text-primary">大家様<br/>はこちら</p>
                  </a>

                  <a href="/tenant" className="group bg-white rounded-xl  shadow-lg border-primary border-2 p-8 text-center hover:scale-105 transition">
                    <img src="./img/個人入居者.png" alt="" className="mb-6 h-[100px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
                    <p className="text-5xl text-primary">入居者様<br/>はこちら</p>
                  </a>

                  <a href="/agency" className="group bg-white rounded-xl shadow-lg border-primary border-2 p-8 text-center hover:scale-105 transition">
                    <img src="./img/法人.png" alt="" className="mb-6 h-[100px] mx-auto transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
                    <p className="text-5xl text-primary">仲介業者様<br/>はこちら</p>
                  </a>
            </div>
          </div>
      </section>



      {/*私たちについて */}
      {/*  
      <div className="w-full border-t-2 border-dotted border-secondary"></div>
      <section className="bg-gradient-to-b from-gray-50 to-blue-50 pb-64">
        <div className="pt-24 text-center max-w-3xl mx-auto px-4">
          <img src="./img/aichitatemono-img.svg" alt="ロゴ" className="w-[20%] mx-auto mb-12" />
          <h2 className="text-3xl tracking-widest font-bold mb-8 text-secondary">| 私たちについて |</h2>
          <h2 className="text-2xl lg:text-4xl text-primary mb-8 leading-[1.5em] font-bold px-6">
            迅速で誠実な管理で<br/>賃貸経営の価値を最大化し<br/>すべてのオーナー様と入居者様者に安心を提供する
          </h2>
        </div>
      </section>
      */}

      {/* 行動指針 */}
      <div className="bg-blue-50 absolute  w-full h-full pb-16 z-1"> </div>
      <section className="relative  bg-[url('/img/bg-house03-mobile.svg')] md:bg-[url('/img/bg-house03.svg')] bg-cover  bg-no-repeat -mt-40 md:-mt-80 lg:-mt-60 xl:-mt-60  pt-80 pb-110 lg:ml-6 mr-0 z-20">
      <div className="relative   max-w-7xl mx-auto px-4 text-center pt-10 md:pt-50 ">
        {/* タイトル */}
      <div className="flex flex-col items-center">
        <img
          src="./img/aichitatemono-img.svg"
          alt="" 
          className="w-[120px] mb-6"
        />

        <div className="text-3xl font-bold text-secondary mb-12">
          | 私たちについて |
        </div>
        <h2 className="lg:text-5xl text-2xl font-bold text-primary mb-12">
          あいち建物管理ができること
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-2 lg:px-16">

          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-primary text-2xl font-bold mb-10 border-l-4 border-primary pl-4">
                入居者対応・運営管理
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-2xl text-gray-800 mb-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    入居者募集
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-bold mb-6">
                    あいち建物管理が主体的に入居者募集を行い、<span className="underline">家主様の収益向上</span>を実現します
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-2xl text-gray-800 mb-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    賃料設定の見直し
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-semibold mb-6">
                    地域感も取り入れたデータをもとに適正賃料へ調整し、<span className="underline">家主様の収益を最大化</span>します
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-2xl text-gray-800 mb-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    空室対策
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-semibold">
                    仲介業者様とも連携して、賃貸の<span className="underline">空室率を最小化</span>します
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 ">
              <h3 className="text-primary text-2xl font-bold mb-10 border-l-4 border-primary pl-4">
                建物・設備管理
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-2xl mb-2 text-gray-800">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    修繕計画の提案
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    家主様と相談し、長期的な視点で資産価値を維持できるよう計画的な修繕を行います。
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-2xl mb-2 text-gray-800">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    メンテナンス提案
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    定期点検により設備トラブルを未然に防ぎます
                  </p>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-2xl  p-8 ">
              <h3 className="text-primary text-2xl font-bold mb-10 border-l-4 border-primary pl-4">
              収益管理・経営提案
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-2xl mb-2 text-gray-800">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    家賃アップの戦略
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    市場分析に基づいた賃料改善で収益向上を実現します
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-2xl mb-2 text-gray-800">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    リノベーション提案
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    入居ニーズに合わせた改修で物件価値を高めます
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-2xl mb-2 text-gray-800">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    市場分析
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    地域データを活用し最適な賃貸経営をサポートします
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/*代表挨拶 */}
      <div className="color-secondary-opacity10">
        <section className=" relative z-30 bg-white rounded-3xl py-24 px-16 lg:ml-20 lg:mr-16 md:mr-0 -mt-96">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] z-100 gap-6 items-center">

            {/* 左側テキスト */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-3">
                会社概要
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
                href="/company"
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

      {/* お知らせ */}
      <section className="py-24  pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-3xl font-bold text-primary">お知らせ</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-md text-gray-600 mb-2 sm:mb-0 sm:w-32">
                    {announcement.date}
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-md rounded mb-2 sm:mb-0 sm:mx-4 self-start">
                    {announcement.category}
                  </span>
                  <span className="flex-1">
                    {announcement.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
                {/* ボタン */}
          <a
            href="./news"
            className="block w-fit mx-auto mt-12 bg-primary text-white font-semibold py-4 px-16 rounded-full hover:bg-primary/85 transition"
          >
            もっと見る →
          </a>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-16 text-3xl md:text-md">お問い合わせはこちら</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCategories.map((category, index) => (
              <Link
                key={index}
                to={category.href}
                className={`${category.color} text-primary p-8 rounded-lg hover:bg-secondary hover:text-white transition-colors`}>
                <h3 className="mb-3 text-2xl">
                  {category.title}
                </h3>
                <p className="text-md opacity-90">
                  {category.description}
                </p>
                <div className="mt-6 flex items-center text-2xl">
                  <span>問い合わせる</span>
                  <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>

  );
}

