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
        path: 'tenant/change',
        element: <ContactForm title="契約変更" category="個人入居者様"/>,
      },
      {
        path: 'tenant/contact',
        element: <ContactForm title="お問い合わせ" category="個人入居者様" />,
      },
      {path: 'agency', Component: AgencyIndex},

      
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
