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
      description: "賃貸管理サービスに関するお問い合わせ",
      href: "/owner",
      color: "bg-primary",
    },
    {
      title: "個人入居者様",
      description: "不具合連絡・退去申し込み・契約内容の変更、更新など",
      href: "/tenant",
      color: "bg-primary",
    },
    {
      title: "法人契約のお客様",
      description: "不具合連絡・解約手続き・契約内容の変更、更新など",
      href: "/corporate",
      color: "bg-primary",
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

  <div className="mx-auto w-full grid lg:grid-cols-[1fr_3fr] gap-10 px-6">

    {/* 左側 */}
    <div className="flex flex-col justify-center ">

      {/* ロゴ */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-green-700  mx-auto">
          <img src="./img/aichitatemono-img.png" alt="ロゴ" className="w-[50%] mx-auto" />
          <img src="./img/aichitatemono-logo3.png" alt="株式会社"className="w-[40%] mx-auto mb-2"/>
          <img src="./img/aichitatemono-logo2.png" alt="あいち建物管理" className="w-[80%] mx-auto"/>
        </h2>
      </div>

      {/* メニューカード */}
      <div className="grid grid-cols-2 gap-4 mb-8">

        <a href="/owner" className="bg-white rounded-xl shadow p-4 text-center">
          <img src="./img/家主.png" alt="" className="mb-2  h-[40px] mx-auto" />
          <p className="text-md text-primary">大家様<br/>はこちら</p>
        </a>

        <a href="/agency" className="bg-white rounded-xl shadow p-4 text-center">
          <img src="./img/仲介事業者様.png" alt="" className="mb-2  h-[40px] mx-auto" />
          <p className="text-md text-primary">仲介事業者様<br/>はこちら</p>
        </a>

        <a href="/tenant" className="bg-white rounded-xl shadow p-4 text-center">
          <img src="./img/個人入居者.png" alt="" className="mb-2 h-[40px] mx-auto" />
          <p className="text-md text-primary">入居者様<br/>はこちら</p>
        </a>

        <a href="/corporate" className="bg-white rounded-xl shadow p-4 text-center">
          <img src="./img/法人.png" alt="" className="mb-2 h-[40px] mx-auto" />
          <p className="text-md text-primary">法人様の契約<br/>はこちら</p>
        </a>

        <a href="/performance" className="bg-white rounded-xl shadow p-4 text-center">
          <img src="./img/管理実績.png" alt="" className="mb-2 h-[40px] mx-auto" />
          <p className="text-md text-primary">管理実績</p>
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
      <h1 className="z-100 text-4xl md:text-5xl font-bold text-primary leading-18 mb-2 tracking-widest">
        家主様の大切な資産に、
        <br />
        誠実に向き合う
      </h1>

      {/* 英語コピー */}
      <p className="text-primary mb-8 z-100 en">
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
            absolute inset-0 w-full h-full object-cover clip-roof
            transition-opacity duration-[2000ms]
            ${i === index ? "opacity-100 animate-zoom" : "opacity-0"}
        `}
      />))}

    </div>

    </div>

  </div>
</section>

{/*私たちについて */}

<section className="bg-gradient-to-b from-gray-50 to-blue-30">
  <div className="pt-24 text-center max-w-3xl mx-auto px-4">
    {/* ロゴ */}
    <img src="./img/aichitatemono-img.png" alt="ロゴ" className="w-[25%] mx-auto mb-2" />

    {/* ABOUT US */}
    <h2 className="text-md tracking-widest font-bold mb-8 text-secondary">| 私たちについて |</h2>

    {/* 賃貸管理で大切にしていること */}
    <h2 className="text-4xl text-primary mb-8 leading-[1.5em] ">
      家主様、入居者様双方が<br/>安心して利用できる賃貸管理
    </h2>

    {/* 私たちの取り組み（3行＋3行＋1行） */}
    <div className="text-center text-lg space-y-4 leading-[2em] mb-12">
      {/* 1行目 */}
      <p>
        迅速なトラブル対応を行い、入居者様の不安をすぐに解消します。<br/>
        定期メンテナンスを通して、物件の資産価値を守ります。<br/>
        契約手続きや書類管理を効率化し、透明性の高い運営を実現します。
      </p>
    </div>
  </div>
</section>

  {/* 斜めカット用の疑似要素 */}
  <div className="absolute clip-roof  w-full h-64 bg-secondary opacity-10 border-primary border-16 -skew-y-6 origin-top"></div>
{/*あいち建物管理の３つの強み */}
<section className="relative bg-secondary-bg rounded-3xl overflow-hidden mt-60 pt-12 pb-16">

  <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
    {/* タイトル */}
    <h2 className="text-3xl font-bold text-primary mb-12">あいち建物管理３つの強み</h2>

    {/* 3つの強み */}
    <div className="flex flex-col md:flex-row justify-center gap-6">
      {/* 1つ目 */}
      <div className="bg-white rounded-xl p-6 flex-1 text-center">
        <img src="./img/mansion046.jpg" alt="" className="mx-auto mb-4 rounded-xl" />
        <p className="text-green-600 font-semibold mb-2">＊＊＊＊＊＊＊＊</p>
        <p className="text-gray-700 tracking-wide">
          ＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
        </p>
      </div>

      {/* 2つ目 */}
      <div className="bg-white rounded-xl p-6 flex-1 text-center">
        <img src="./img/mansion046.jpg" alt="" className="mx-auto mb-4 rounded-xl" />
        <p className="text-gray-800 font-semibold mb-2">＊＊＊＊＊＊＊＊</p>
        <p className="text-gray-700 tracking-wide">
          ＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
        </p>
      </div>

      {/* 3つ目 */}
      <div className="bg-white rounded-xl p-6 flex-1 text-center">
        <img src="./img/mansion046.jpg" alt="" className="mx-auto mb-4 rounded-xl" />
        <p className="text-gray-800 font-semibold mb-2">＊＊＊＊＊＊＊＊</p>
        <p className="text-gray-700 tracking-wide">
          ＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
        </p>
      </div>
    </div>

    {/* ボタン */}
    <a
      href="./company"
      className="inline-block mt-12 bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-700 transition"
    >
      詳しくはこちら
    </a>
  </div>
</section>


      {/* お問い合わせ */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-3xl md:text-md">お問い合わせ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCategories.map((category, index) => (
              <Link
                key={index}
                to={category.href}
                className={`${category.color} text-white p-8 rounded-lg hover:opacity-90 transition-opacity`}>
                <h3 className="mb-3 text-white">
                  {category.title}
                </h3>
                <p className="text-sm opacity-90">
                  {category.description}
                </p>
                <div className="mt-6 flex items-center text-sm">
                  <span>詳しく見る</span>
                  <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
          
          {/* 仲介業者様向け */}
          <div className=" mt-6 text-center">
            <Link
              to="/agency/contact"
              className="inline-flex items-center mt-8 text-4xl px-16 py-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-lg"
            >
              <Building2 className="h-5 w-5 mr-2" />
              仲介業者様はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* お知らせ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-4xl">お知らせ</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm text-gray-600 mb-2 sm:mb-0 sm:w-32">
                    {announcement.date}
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded mb-2 sm:mb-0 sm:mx-4 self-start">
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

      {/* 会社の強み */}
      <section className="py-32 bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/img/mansion047.jpg')]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-white">当社の強み</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                  <strength.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3">{strength.title}</h3>
                <p className="text-sm text-gray-600">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* 管理実績 */}
<section className="py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-center mb-24 text-5xl">管理実績</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* 実績1 */}
      <div className="space-y-4">
        
        <p className="font-semibold text-4xl tracking-widest">岡崎市</p>

        <img
          src="/img/mansion047.jpg"
          alt="建物写真"
          className="w-full h-64 object-cover"/>

      <div className="grid grid-cols-2 gap-y-3 text-lg items-center">

        <p className="text-gray-500 text-lg">築年数</p>
        <p className="text-black text-3xl font-semibold">築15年</p>

        <p className="text-gray-500 text-md">構造</p>
        <p className="text-black text-3xl font-semibold">RC造</p>

        <p className="text-gray-500">間取り</p>
        <p className="text-black text-3xl font-semibold">3LDK</p>

      </div>

      </div>

      {/* 実績2 */}
      <div className="space-y-4">

        <p className="font-semibold text-4xl tracking-widest">豊田市</p>

        <img
          src="/img/mansion050.jpg"
          alt="建物写真"
          className="w-full h-64 object-cover "
        />

      <div className="grid grid-cols-2 gap-y-3 text-lg items-center">
        <p className="text-gray-500 text-lg">築年数</p>
        <p className="text-black text-3xl font-semibold">築15年</p>

        <p className="text-gray-500 text-md">構造</p>
        <p className="text-black text-3xl font-semibold">RC造</p>

        <p className="text-gray-500">間取り</p>
        <p className="text-black text-3xl font-semibold">3LDK</p>
        
      </div>

      </div>

      {/* 実績3 */}
      <div className="space-y-4">

        <p className="font-semibold text-4xl tracking-widest">安城市</p>

        <img
          src="/img/mansion070.jpg"
          alt="建物写真"
          className="w-full h-64 object-cover"
        />

      <div className="grid grid-cols-2 gap-y-3 text-lg items-center">
        <p className="text-gray-500 text-lg">築年数</p>
        <p className="text-black text-3xl font-semibold">築15年</p>

        <p className="text-gray-500 text-md">構造</p>
        <p className="text-black text-3xl font-semibold">RC造</p>

        <p className="text-gray-500">間取り</p>
        <p className="text-black text-3xl font-semibold">3LDK</p>
        
      </div>

      </div>

    </div>

    {/* ボタン */}
    <div className="text-center mt-12">
      <Link
        to="/performance"
        className="inline-flex items-center px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg"
      >
        詳しく見る
      </Link>
    </div>

  </div>
</section>

      {/* CTA セクション */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">
            お気軽にお問い合わせください
          </h2>
          <p className="text-lg mb-8 opacity-90">
            賃貸管理に関するご相談は無料です。まずはお気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>03-0000-0000</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>info@example.com</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-gray-100 transition-colors rounded-lg"
          >
            お問い合わせフォーム
          </Link>
        </div>
      </section>
    </div>
  );
}