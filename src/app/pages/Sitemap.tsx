import { Link } from 'react-router-dom';

export function Sitemap() {
  const sections = [
    {
      title: '大家様向け',
      links: [
        { name: '賃貸管理サービス', href: '/owner/service' },
        { name: '賃貸管理の流れ', href: '/owner/flow' },
        { name: '賃貸管理実績', href: '/performance' },
        { name: 'お問い合わせ', href: '/owner/contact' },
      ],
    },
    {
      title: '個人の入居者様',
      links: [
        { name: 'お問い合わせ', href: '/tenant/contact' },
        { name: '不具合連絡', href: '/tenant/issue' },
        { name: '契約の変更・更新・確認', href: '/tenant/change' },
        { name: '退去申し込み', href: '/tenant/move-out' },
      ],
    },
    {
      title: '法人契約の入居者様',
      links: [
        { name: 'お問い合わせ', href: '/corporate/contact' },
        { name: '不具合連絡', href: '/corporate/issue' },
        { name: '契約変更・更新・確認', href: '/corporate/change' },
        { name: '解約手続き', href: '/corporate/cancellation' },
      ],
    },
    {
      title: '仲介業者様向け',
      links: [
        { name: '物件確認', href: '/agency/property' },
        { name: '申込書ダウンロード', href: '/agency/download' },
        { name: '必要書類', href: '/agency/documents' },
      ],
    },
    {
      title: 'その他',
      links: [
        { name: '会社概要', href: '/company' },
        { name: 'お問い合わせ', href: '/contact' },
        { name: 'プライバシーポリシー', href: '/privacy' },
      ],
    },
  ];

  return (
    <div className="header-margin">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="text-white hover:underline">
            トップページ
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">
            プライバシーポリシー
          </span>
        </div>
          <h1 className="text-white">サイトマップ</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="mb-4 pb-3 border-b border-gray-200">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
