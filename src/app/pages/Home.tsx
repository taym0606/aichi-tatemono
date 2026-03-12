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
      description: "賃貸管理の内容や管理開始までの流れを分かりやすくご紹介しています",
      href: "/owner",
      color: "bg-white",
    },
    {
      title: "入居者様",
      description: "不具合連絡・退去申し込み・契約内容の変更、更新など",
      href: "/tenant",
      color: "bg-white",
    },
    {
      title: "仲介業者様",
      description: "申請書ダウンロードや物件確認、必要書類など",
      href: "/agency",
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
      <section id="firstview" className="xl:min-h-screen bg-gray-50 flex pt-4">

        <div className="mx-auto w-full grid lg:grid-cols-[360px_1fr] gap-10 xl:px-20 lg:px-10 md:px-6 px-4">

          {/* 左側 */}
          <div className="flex flex-col justify-center ">

            {/* ロゴ */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-green-700  mx-auto">
                {/*<img src="./img/aichitatemono-img.png" alt="ロゴ" className="w-[50%] mx-auto" />*/}
                <img src="./img/aichitatemono-logo3.png" alt="株式会社"className="w-[40%] mx-auto mb-2"/>
                <img src="./img/aichitatemono-logo2.png" alt="あいち建物管理" className="w-[80%] mx-auto"/>
              </h2>
            </div>
            <p className="text-lg text-primary text-center mb-2">特許番号 0000号</p>
            <p className="text-lg text-primary text-center mb-4">特許番号 0000号</p>

            {/* メニューカード */}
            <div className="grid grid-cols-2 gap-4 mb-8">

              <a href="/owner" className="bg-white rounded-xl shadow p-4 text-center">
                <img src="./img/家主.png" alt="" className="mb-2  h-[40px] mx-auto" />
                <p className="text-md text-primary">大家様<br/>はこちら</p>
              </a>

              <a href="/tenant" className="bg-white rounded-xl shadow p-4 text-center">
                <img src="./img/個人入居者.png" alt="" className="mb-2 h-[40px] mx-auto" />
                <p className="text-md text-primary">入居者様<br/>はこちら</p>
              </a>

              <a href="/corporate" className="bg-white rounded-xl shadow p-4 text-center">
                <img src="./img/法人.png" alt="" className="mb-2 h-[40px] mx-auto" />
                <p className="text-md text-primary">仲介業者様<br/>はこちら</p>
              </a>

              <a href="/company" className="bg-white rounded-xl shadow p-4 text-center">
                <img src="./img/会社概要.png" alt="" className="mb-2 h-[40px] mx-auto" />
                <p className="text-md text-primary">会社概要</p>
              </a>

            </div>
          </div>


          {/* 右側 */}
          <div className="flex flex-col justify-center pt-12">

            {/* キャッチコピー */}
            <h1 className="z-1 text-4xl md:text-5xl font-bold text-primary leading-18 mb-2 tracking-widest">
              大家様の大切な資産に
              <br />
              誠実に向き合う
            </h1>

            {/* 英語コピー */}
            <p className="text-primary  text-md mb-8 z-1 en">
              Trust and Integrity for Your Property Assets.
            </p>

            {/* 画像 */}
            <div className="relative rounded-3xl overflow-hidden -mt-56 h-[650px]">

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

      {/* お知らせ */}
      <section className="py-24  pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-3xl">お知らせ</h2>
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
        </div>
      </section>

      {/*私たちについて */}
      <div className="w-full border-t-2 border-dotted border-secondary"></div>
      <section className="bg-gradient-to-b from-gray-50 to-blue-50 pb-64">
        <div className="pt-24 text-center max-w-3xl mx-auto px-4">
          {/* ロゴ */}
          {/*<img src="./img/aichitatemono-img.png" alt="ロゴ" className="w-[25%] mx-auto" />*/}

          {/* ABOUT US */}
          <h2 className="text-3xl tracking-widest font-bold mb-8 text-secondary">| 私たちについて |</h2>

          {/* 賃貸管理で大切にしていること */}
          <h2 className="text-4xl text-primary mb-8 leading-[1.5em] font-bold">
            大家様、入居者様双方が<br/>安心して利用できる賃貸管理
          </h2>

          {/* 私たちの取り組み（3行＋3行＋1行） */}
          <div className="text-center text-lg space-y-4 leading-[2em]">
            {/* 1行目 */}
            <p>
              迅速なトラブル対応を行い、入居者様の不安をすぐに解消します。<br/>
              定期メンテナンスを通して、物件の資産価値を守ります。<br/>
              契約手続きや書類管理を効率化し、透明性の高い運営を実現します。
            </p>
          </div>
        </div>
      </section>

      {/* 経営理念 */}
      <div className="bg-blue-50 absolute  w-full h-full pb-16 z-1"> </div>
      <section className="relative  bg-[url('/img/bg-house03.svg')] bg-cover  bg-no-repeat -mt-115  pt-120 pb-120 ml-6 mr-0 z-20">
      <div className="relative   max-w-7xl mx-auto px-4 text-center pt-40">
        {/* タイトル */}
      <div className="flex flex-col items-center">
        <img
          src="./img/会社概要.png"
          alt=""
          className="w-[60px] mb-6"
        />

        <h2 className="text-3xl font-bold text-primary mb-24">
          経営理念
        </h2>
      </div>

        {/* 3つの強み */}
        <div className="flex flex-col md:flex-row justify-center gap-10 pr-6 pl-10">
          {/* 1つ目 */}
          <div className="flex-1 text-center">
            <img src="./img/mansion046.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
            <p className="text-primary text-xl font-semibold mb-8">＊＊＊＊＊＊＊＊＊＊＊</p>
            <p className="text-black tracking-wide text-md leading-[1.7em]">
              オーナー様の立場に立った建物管理を心がけています。入居率の維持や建物価値の向上を考え、長期的に安心できる管理サービスをご提供いたします。
            </p>
          </div>

          {/* 2つ目 */}
          <div className=" flex-1 text-center">
            <img src="./img/mansion046.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
            <p className="text-primary text-xl font-semibold mb-8">＊＊＊＊＊＊＊＊＊＊</p>
            <p className="text-black tracking-wide leading-[1.7em]">
              入居者様からのトラブルや設備不具合などのご連絡に、24時間体制で対応いたします。急なトラブルにも迅速に対応し、入居者様とオーナー様の安心を支えます。
            </p>
          </div>

          {/* 3つ目 */}
          <div className="flex-1 text-center">
            <img src="./img/mansion046.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
            <p className="text-primary  text-xl font-semibold mb-8">＊＊＊＊＊＊＊＊＊＊</p>
            <p className="text-black tracking-wide leading-[1.7em]">
              賃貸管理に関するご相談は無料で承っております。管理のご検討中の方や現在の管理にお悩みの方も、お気軽にご相談ください。
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

      {/*賃貸管理とは？ */}
      <div className="color-secondary-opacity10">
        <section className=" relative z-30 bg-white rounded-3xl py-24 px-8 ml-20 mr-16 md:mr-0 -mt-96">
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
                className="inline-flex justify-items-center bg-primary text-white px-8 py-3 rounded-full hover:opacity-90"
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

      {/* お問い合わせ */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-3xl md:text-md">お問い合わせはこちら</h2>
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