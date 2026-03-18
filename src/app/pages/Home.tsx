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
      <section className="xl:min-h-screen bg-gray-50 flex pt-4">

        <div className="mx-auto w-full  xl:px-20 lg:px-10 md:px-6 px-4 mt-10">
          {/* 右側 */}
          <div className="flex flex-col justify-center pt-12 lg:order-2 order-1">

            {/* キャッチコピー */}
            <h1 className="z-15  text-3xl md:text-7xl font-bold text-primary leading-12 lg:leading-22 mb-2 tracking-widest text-stroke">
              安心と信頼の賃貸管理を作る
              <br />
              <div className="tracking-tighter">プロフェッショナル 集 団</div>
            </h1>

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


      <section className="xl:min-h-screen bg-gray-50 flex pt-4">
        <div className="mx-auto w-full  xl:px-20 lg:px-10 md:px-6 px-4 mt-10 ">
          <h2 className="text-center mb-12 text-5xl font-bold text-primary leading-16"><br/>あいち建物管理が<br/>"賃貸管理"でできること</h2>
            {/* メニューカード */}
            <div className="grid grid-cols-3 gap-4 mb-8">
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

      {/*私たちについて */}
      <div className="w-full border-t-2 border-dotted border-secondary"></div>
      <section className="bg-gradient-to-b from-gray-50 to-blue-50 pb-64">
        <div className="pt-24 text-center max-w-3xl mx-auto px-4">
          {/* ロゴ */}
          {/*<img src="./img/aichitatemono-img.png" alt="ロゴ" className="w-[25%] mx-auto" />*/}

          {/* ABOUT US */}
          <h2 className="text-3xl tracking-widest font-bold mb-8 text-secondary">| 私たちについて |</h2>

          {/* 賃貸管理で大切にしていること */}
          <h2 className="text-3xl lg:text-4xl text-primary mb-8 leading-[1.5em] font-bold px-6">
            大家様、入居者様双方が<br/>安心して利用できる賃貸管理
          </h2>

          {/* 私たちの取り組み（3行＋3行＋1行） */}
          <div className="text-center text-lg space-y-4 lg:leading-[2em] px-6">
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
      <section className="relative  bg-[url('/img/bg-house03-mobile.svg')] md:bg-[url('/img/bg-house03.svg')] bg-cover  bg-no-repeat -mt-110 lg:-mt-135  pt-100 pb-110 lg:ml-6 mr-0 z-20">
      <div className="relative   max-w-7xl mx-auto px-4 text-center pt-10 md:pt-50 ">
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
        <div className="flex flex-col md:flex-row justify-center gap-10 pr-6 pl-12 lg:pr-12 lg:pl-18">
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
          className="inline-block mt-12 mb-18 bg-primary text-white font-semibold py-4 px-16 rounded-full hover:bg-primary/85 transition"
        >
          詳しくはこちら →
        </a>
        </div>
      </section>

      {/*代表挨拶 */}
      <div className="color-secondary-opacity10">
        <section className=" relative z-30 bg-white rounded-3xl py-24 px-16 lg:ml-20 lg:mr-16 md:mr-0 -mt-96">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] z-100 gap-6 items-center">

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

      {/* 管理実績 */}
      <section className="py-24 color-secondary-opacity10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-4 lg:p-8  border-primary border-1">
          <h2 className="text-center pt-12 pb-20 text-primary text-3xl font-bold">管理実績</h2>
            {/* 賃貸管理項目 */}
            <div className="flex flex-col md:flex-row justify-center gap-12 pr-6 pl-6 mb-12">
              {/* 1つ目 */}
              <div className="flex-1 text-center">
                <p className="text-primary text-2xl font-semibold mb-4 text-left pl-4 border-l-2 border-secondary">岡崎市</p>
                <img src="./img/mansion046.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
                <div className="text-left max-w-xs mx-auto space-y-2 text-md tracking-wide">
                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">建物種類</span>
                    <span className="font-medium text-center">マンション</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">築年数</span>
                    <span className="font-medium text-center">築18年</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">構造</span>
                    <span className="font-medium text-center">RC造</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr]">
                    <span className="text-gray-500">間取り</span>
                    <span className="font-medium text-center">1LDK〜3LDK</span>
                  </div>
                </div>
              </div>

              {/* 2つ目 */}
              <div className="flex-1 text-center">
                <p className="text-primary text-2xl font-semibold mb-4 text-left pl-4 border-l-2 border-secondary">安城市</p>
                <img src="./img/mansion070.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
                <div className="text-left max-w-xs mx-auto space-y-2 text-md tracking-wide">

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">建物種類</span>
                    <span className="font-medium text-center">アパート</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">築年数</span>
                    <span className="font-medium text-center">築23年</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">構造</span>
                    <span className="font-medium text-center">RC造</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr]">
                    <span className="text-gray-500">間取り</span>
                    <span className="font-medium text-center">1LK</span>
                  </div>
                </div>
              </div>

              {/* 3つ目 */}
              <div className="flex-1 text-center">
                <p className="text-primary text-2xl font-bold mb-4 text-left pl-4 border-l-2 border-secondary">豊橋市</p>
                <img src="./img/mansion047.jpg" alt="" className="mx-auto mb-8 rounded-xl" />
                <div className="text-left max-w-xs mx-auto space-y-2 text-md tracking-wide">

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">建物種類</span>
                    <span className="font-medium text-center">コーポ</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">築年数</span>
                    <span className="font-medium text-center">築7年</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr] border-b pb-1">
                    <span className="text-gray-500">構造</span>
                    <span className="font-medium text-center">RC造</span>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr]">
                    <span className="text-gray-500">間取り</span>
                    <span className="font-medium text-center">1LDK</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href="./company" className="inline-block mt-12 mb-12 bg-primary text-white font-semibold py-4 px-16 rounded-full hover:bg-primary/85 transition">
                詳しくはこちら →
              </a>
            </div>         
          </div>
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

