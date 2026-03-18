import { Link } from 'react-router-dom';
import { AlertCircle, LogOut, FileEdit, Mail } from 'lucide-react';

export function News() {
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

  return (
    <div className='header-margin bg-gray-50'>
        <div className="flex flex-col justify-center pt-12 lg:order-2 order-1 px-6 lg:px-12">
            <div className="max-w-7xl py-4 text-md text-gray-500 text-left">

              <Link to="/" className="hover:text-primary hover:underline">
                トップページ
              </Link>

              <span className="mx-2">&gt;</span>

              <span className="text-gray-700">
                お知らせ
              </span>

            </div>
        {/* キャッチコピー */}
        <h1 className="z-15 text-3xl md:text-5xl font-bold text-primary leading-12 lg:leading-18 mb-2 tracking-widest">
          お知らせ
        </h1>

        {/* 英語コピー */}
        <p className="text-primary  text-md mb-8 z-15 en">
          News
        </p>

        {/* 画像 */}
        <div className="relative rounded-3xl overflow-hidden -mt-20 lg:-mt-40 h-[450px] z-10">
        <img src="./img/mansion047.jpg" alt="建物" className={`absolute inset-0 w-full h-full object-cover clip-roof-firstview`}/>
        </div>
      </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-24">
          <h2 className="text-center mb-12 text-3xl">お知らせ</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-4 mb-8">
              <button onClick={() => setCategory("all")} className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors">
                すべて
              </button>
              <button onClick={() => setCategory("サービス")} className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors">
                サービス
              </button>
              <button onClick={() => setCategory("更新情報")} className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors">
                更新情報
              </button>
              <button onClick={() => setCategory("お知らせ")} className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors">
                お知らせ
              </button>
            </div>
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
    </div>
  );
}
