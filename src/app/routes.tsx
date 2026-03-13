import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { CompanyIndex } from './pages/company/CompanyIndex';
import { OwnerIndex } from './pages/owner/OwnerIndex';
import { OwnerService } from './pages/owner/OwnerService';
import { OwnerFlow } from './pages/owner/OwnerFlow';
import { TenantIndex } from './pages/tenant/TenantIndex';
import { CorporateIndex } from './pages/corporate/CorporateIndex';
import { AgencyIndex } from './pages/agency/AgencyIndex';
import { Performance } from './pages/Performance';
import { ContactForm } from './pages/ContactForm';
import { FAQ } from './pages/FAQ';
import { News } from './pages/news';
import { Privacy } from './pages/Privacy';
import { Sitemap } from './pages/Sitemap';
import { NotFound } from './pages/NotFound';

// FAQ データ
const ownerFAQs = [
  {
    question: '管理手数料はいくらですか？',
    answer: '管理手数料は賃料の5%が基本となります。物件の規模や管理内容により異なりますので、詳しくはお見積もりをご依頼ください。',
  },
  {
    question: '契約期間の縛りはありますか？',
    answer: '基本契約は1年間となりますが、双方合意のもと解約可能です。長期契約をご希望の場合は、特別プランもご用意しております。',
  },
  {
    question: '空室が出た場合の対応は？',
    answer: '空室が発生した場合、即座に募集活動を開始します。大手ポータルサイトへの掲載、自社サイトでの紹介、仲介業者への情報提供を行い、早期の入居者確保に努めます。',
  },
  {
    question: '入居者トラブルへの対応は？',
    answer: '専任担当者が迅速に対応いたします。騒音問題、家賃滞納、設備トラブルなど、あらゆるトラブルに24時間体制で対応可能です。',
  },
  {
    question: '収支報告はどのように行われますか？',
    answer: '毎月詳細な収支報告書をお送りします。賃料の入金状況、管理費用の内訳、修繕費用など、すべての項目を明確に記載いたします。',
  },
];

const tenantFAQs = [
  {
    question: '家賃の支払い方法は？',
    answer: '銀行振込、口座引落し、クレジットカード決済に対応しています。詳しくは契約書をご確認ください。',
  },
  {
    question: '設備が故障した場合はどうすればいいですか？',
    answer: '不具合連絡フォームまたはお電話にてご連絡ください。緊急の場合は24時間対応ダイヤル（0120-000-000）までお電話ください。',
  },
  {
    question: '退去の何日前に連絡が必要ですか？',
    answer: '退去希望日の1ヶ月前までにご連絡ください。退去申し込みフォームまたはお電話にて受付しております。',
  },
  {
    question: '更新料は必要ですか？',
    answer: '契約内容により異なります。詳しくは契約書をご確認いただくか、お問い合わせください。',
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      // 会社概要
      { path: 'company', Component: CompanyIndex },
      // 大家様向け
      { path: 'owner', Component: OwnerIndex },
      { path: 'owner/service', Component: OwnerService },
      { path: 'owner/flow', Component: OwnerFlow },
      {
        path: 'owner/faq',
        element: <FAQ title="よくある質問" category="大家様向け" questions={ownerFAQs} />,
      },
      {
        path: 'owner/contact',
        element: <ContactForm title="お問い合わせ" category="大家様・オーナー様向け" />,
      },
      // 個人入居者様
      { path: 'tenant', Component: TenantIndex },
      {
        path: 'tenant/issue',
        element: <ContactForm title="不具合連絡" category="個人入居者様" />,
      },
      {
        path: 'tenant/move-out',
        element: <ContactForm title="退去申し込み" category="個人入居者様" />,
      },
      {
        path: 'tenant/faq',
        element: <FAQ title="よくある質問" category="個人入居者様" questions={tenantFAQs} />,
      },
      {
        path: 'tenant/contact',
        element: <ContactForm title="お問い合わせ" category="個人入居者様" />,
      },
      
      // 法人契約のお客様
      { path: 'corporate', Component: CorporateIndex },
      {
        path: 'corporate/issue',
        element: <ContactForm title="不具合連絡" category="法人契約のお客様" />,
      },
      {
        path: 'corporate/cancellation',
        element: <ContactForm title="解約手続き" category="法人契約のお客様" />,
      },
      {
        path: 'corporate/change',
        element: <ContactForm title="契約変更" category="法人契約のお客様" />,
      },
      {
        path: 'corporate/contact',
        element: <ContactForm title="お問い合わせ" category="法人契約のお客様" />,
      },
      // 仲介業者様向け
      { path: 'agency', Component: AgencyIndex },
      {
        path: 'agency/property',
        element: (
          <div className="py-16">
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
                  href="#"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg"
                >
                  専用システムへログイン
                </a>
              </div>
            </div>
          </div>
        ),
      },
      {
        path: 'agency/download',
        element: (
          <div className="py-16">
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
        ),
      },
      {
        path: 'agency/documents',
        element: (
          <div className="py-16">
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
        ),
      },
      {
        path: 'agency/contact',
        element: <ContactForm title="お問い合わせ" category="仲介業者様向け" />,
      },
      // その他
      { path: 'performance', Component: Performance },
      {
        path: 'contact',
        element: <ContactForm title="お問い合わせ" category="一般のお客様" />,
      },
      { path: 'privacy', Component: Privacy },
      { path: 'sitemap', Component: Sitemap },
      { path: 'news', Component: News },
      { path: '*', Component: NotFound },

    ],
  },
]);
